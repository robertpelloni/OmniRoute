package server

import (
	"encoding/json"
	"log"
	"net/http"
	"time"

	"omniroute/internal/auth"
	"omniroute/internal/combo"
	"omniroute/internal/db"
	"omniroute/internal/providers"
)

// Server holds dependencies for the HTTP handlers.
type Server struct {
	ProviderManager *providers.Manager
	Client          *http.Client
	Scorer          *auth.TokenScorer
	ComboEngine     *combo.Engine
}

// NewServer initializes the HTTP server dependencies.
func NewServer(pm *providers.Manager) *Server {
	client := &http.Client{
		Timeout: 60 * time.Second,
	}
	scorer := auth.NewTokenScorer()

	return &Server{
		ProviderManager: pm,
		Client:          client,
		Scorer:          scorer,
		ComboEngine:     combo.NewEngine(pm, client, scorer),
	}
}

// SetupRouter initializes the HTTP mux and defines all routes.
func (s *Server) SetupRouter() *http.ServeMux {
	mux := http.NewServeMux()

	// OpenAI Compatible API Endpoints
	mux.HandleFunc("/api/v1/chat/completions", s.HandleChatCompletions)

	// Internal proxy metrics endpoint
	mux.HandleFunc("/api/v1/metrics", s.HandleMetrics)

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

	modelToRequest := req.Model
	if modelToRequest == "" {
		modelToRequest = "gpt-3.5-turbo" // Default fallback
		req.Model = modelToRequest
	}

	// Check if the requested model is actually a Combo alias (e.g. "fastest", "cheapest")
	comboRoute, isCombo := combo.GetComboRoute(modelToRequest)
	if isCombo {
		log.Printf("Executing combo route for '%s'", modelToRequest)
		ctx := r.Context()
		if err := s.ComboEngine.ExecuteCombo(ctx, comboRoute, &req, w); err != nil {
			log.Printf("Combo execution failed entirely: %v", err)
			// Status headers may already be sent if it failed mid-stream
			// Fallback: we could send a manual error payload here, but ExecuteCombo handles it largely.
		}
		return
	}

	// If not a combo, proceed with normal single-provider mapping
	mapping, err := db.GetModelMapping(modelToRequest)
	if err != nil {
		log.Printf("Failed to resolve model mapping for %s: %v", modelToRequest, err)
		http.Error(w, "Internal server error resolving model", http.StatusInternalServerError)
		return
	}

	// Single provider routing logic delegates directly to the combo engine using a 1-length array
	singleRoute := combo.ComboRoute{
		ID:        modelToRequest,
		Providers: []string{mapping.Provider},
	}

	ctx := r.Context()
	if err := s.ComboEngine.ExecuteCombo(ctx, singleRoute, &req, w); err != nil {
		log.Printf("Single provider execution failed via combo engine: %v", err)
	}
}

// HandleMetrics exposes the internal TokenScorer load balancing metrics for UI consumption.
func (s *Server) HandleMetrics(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	metrics := s.Scorer.GetAllMetrics()

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(metrics); err != nil {
		log.Printf("Failed to encode metrics response: %v", err)
	}
}
