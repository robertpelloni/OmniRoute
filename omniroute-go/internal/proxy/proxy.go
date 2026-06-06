package proxy

import (
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"

	"github.com/diegosouzapw/OmniRoute/omniroute-go/internal/config"
	"github.com/diegosouzapw/OmniRoute/omniroute-go/internal/store"
)

// Server handles the core routing logic
type Server struct {
	cfg   *config.Config
	store *store.Store
}

// NewServer initializes the proxy server
func NewServer(cfg *config.Config, store *store.Store) *Server {
	return &Server{
		cfg:   cfg,
		store: store,
	}
}

// HandleProxy handles incoming LLM API requests
func (s *Server) HandleProxy(w http.ResponseWriter, r *http.Request) {
	// TODO: Port advanced routing, fallback, and streaming logic here.
	// For now, this is a placeholder stub that responds directly.
	log.Printf("Received proxy request for %s", r.URL.Path)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"status": "ok", "message": "OmniRoute Go Proxy Stub"}`))
}

// ReverseProxy creates a basic reverse proxy (utility for later implementations)
func (s *Server) ReverseProxy(target string) (*httputil.ReverseProxy, error) {
	url, err := url.Parse(target)
	if err != nil {
		return nil, err
	}
	return httputil.NewSingleHostReverseProxy(url), nil
}
