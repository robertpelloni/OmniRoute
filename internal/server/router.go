package server

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"time"

	"omniroute/internal/combo"
	"omniroute/internal/db"
	"omniroute/internal/providers"
)

// Server holds dependencies for the HTTP handlers.
type Server struct {
	ProviderManager *providers.Manager
	Client          *http.Client
	ComboEngine     *combo.Engine
}

// NewServer initializes the HTTP server dependencies.
func NewServer(pm *providers.Manager, engine *combo.Engine) *Server {
	return &Server{
		ProviderManager: pm,
		Client: &http.Client{
			Timeout: 60 * time.Second,
		},
		ComboEngine: engine,
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

	bodyBytes, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "Error reading request body", http.StatusInternalServerError)
		return
	}
	r.Body = io.NopCloser(bytes.NewBuffer(bodyBytes))

	var req providers.ProviderRequest
	if err := json.Unmarshal(bodyBytes, &req); err != nil {
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

	// Read API key from Authorization header
	authHeader := r.Header.Get("Authorization")
	var clientApiKey string
	if len(authHeader) > 7 && authHeader[:7] == "Bearer " {
		clientApiKey = authHeader[7:]
	}

	// Use combo engine if available
	if s.ComboEngine != nil {
		// Example combo chain, ideally retrieved from DB
		chain := combo.ProviderChain{
			Providers: []string{mapping.Provider, "openai", "anthropic"},
		}

		ctx := r.Context()
		err := s.ComboEngine.Route(ctx, chain, r, func(providerName string, token string) error {
			provider, pErr := s.ProviderManager.GetProvider(providerName)
			if pErr != nil {
				return pErr
			}

			// Use the resolved token from DB, or fallback to client token
			apiKey := token
			if apiKey == "" {
				apiKey = clientApiKey
			}

			// Update the request with the true target model name
			// This would ideally lookup the provider's specific model mapping
			req.Model = mapping.TargetModel

			if req.Stream {
				streamExecutor, ok := provider.(providers.StreamExecutor)
				if !ok {
					return fmt.Errorf("provider does not support streaming")
				}

				return streamExecutor.ExecuteStream(ctx, s.Client, &req, apiKey, w)
			}

			resp, eErr := provider.Execute(ctx, s.Client, &req, apiKey)
			if eErr != nil {
				return eErr
			}

			w.Header().Set("Content-Type", "application/json")
			return json.NewEncoder(w).Encode(resp)
		})

		if err != nil {
			log.Printf("Combo routing failed: %v", err)
			http.Error(w, "All providers failed", http.StatusBadGateway)
		}
		return
	}

	// Fallback to basic routing
	req.Model = mapping.TargetModel
	provider, err := s.ProviderManager.GetProvider(mapping.Provider)
	if err != nil {
		log.Printf("Provider '%s' not found for model '%s'", mapping.Provider, modelToRequest)
		// Fallback to OpenAI if provider not found
		provider, _ = s.ProviderManager.GetProvider("openai")
	}

	if clientApiKey == "" {
		http.Error(w, "Unauthorized: missing API key", http.StatusUnauthorized)
		return
	}

	if req.Stream {
		streamExecutor, ok := provider.(providers.StreamExecutor)
		if !ok {
			http.Error(w, "Provider does not support streaming", http.StatusNotImplemented)
			return
		}

		ctx, cancel := context.WithCancel(r.Context())
		defer cancel()

		if err := streamExecutor.ExecuteStream(ctx, s.Client, &req, clientApiKey, w); err != nil {
			log.Printf("Provider stream execution failed: %v", err)
		}
		return
	}

	ctx, cancel := context.WithTimeout(r.Context(), 50*time.Second)
	defer cancel()

	resp, err := provider.Execute(ctx, s.Client, &req, clientApiKey)
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
