package server

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"time"

	"omniroute/internal/db"
	"omniroute/internal/providers"
)

// Server holds dependencies for the HTTP handlers.
type Server struct {
	ProviderManager *providers.Manager
	Client          *http.Client
}

// NewServer initializes the HTTP server dependencies.
func NewServer(pm *providers.Manager) *Server {
	return &Server{
		ProviderManager: pm,
		Client: &http.Client{
			Timeout: 60 * time.Second,
		},
	}
}

// SetupRouter initializes the HTTP mux and defines all routes.
func (s *Server) SetupRouter() *http.ServeMux {
	mux := http.NewServeMux()

	// OpenAI Compatible API Endpoints
	mux.HandleFunc("/api/v1/chat/completions", s.HandleChatCompletions)

	// Health check
	mux.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("OK"))
	})

	return mux
}

// HandleChatCompletions is the main proxy handler for chat/completions requests.
func (s *Server) HandleChatCompletions(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var req providers.ProviderRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	// Resolve the target model and provider dynamically
	modelToRequest := req.Model
	if modelToRequest == "" {
		modelToRequest = "gpt-3.5-turbo" // Default fallback
	}

	mapping, err := db.GetModelMapping(modelToRequest)
	if err != nil {
		log.Printf("Failed to resolve model mapping for %s: %v", modelToRequest, err)
		http.Error(w, "Internal server error resolving model", http.StatusInternalServerError)
		return
	}

	// Update the request with the true target model name
	req.Model = mapping.TargetModel

	// Get the corresponding provider implementation
	provider, err := s.ProviderManager.GetProvider(mapping.Provider)
	if err != nil {
		log.Printf("Provider '%s' not found for model '%s'", mapping.Provider, modelToRequest)
		// Fallback to OpenAI if provider not found
		provider, err = s.ProviderManager.GetProvider("openai")
		if err != nil {
			http.Error(w, "Provider not found", http.StatusInternalServerError)
			return
		}
	}

	// Read API key from Authorization header
	authHeader := r.Header.Get("Authorization")
	var apiKey string
	if len(authHeader) > 7 && authHeader[:7] == "Bearer " {
		apiKey = authHeader[7:]
	}

	if apiKey == "" {
		http.Error(w, "Unauthorized: missing API key", http.StatusUnauthorized)
		return
	}

	// Check if this is a streaming request
	if req.Stream {
		streamExecutor, ok := provider.(providers.StreamExecutor)
		if !ok {
			log.Printf("Provider '%s' does not support streaming", provider.Name())
			http.Error(w, "Provider does not support streaming", http.StatusNotImplemented)
			return
		}

		ctx, cancel := context.WithCancel(r.Context())
		defer cancel()

		if err := streamExecutor.ExecuteStream(ctx, s.Client, &req, apiKey, w); err != nil {
			log.Printf("Provider stream execution failed: %v", err)
			// Status headers are typically already sent by ExecuteStream if it started proxying data,
			// so writing an http.Error here may be too late.
		}
		return
	}

	ctx, cancel := context.WithTimeout(r.Context(), 50*time.Second)
	defer cancel()

	resp, err := provider.Execute(ctx, s.Client, &req, apiKey)
	if err != nil {
		log.Printf("Provider execution failed: %v", err)
		http.Error(w, "Provider execution failed", http.StatusBadGateway)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(resp); err != nil {
		log.Printf("Failed to encode response: %v", err)
	}
}
