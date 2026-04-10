package main

import (
	"log"
	"net/http"

	"github.com/diegosouzapw/OmniRoute/omniroute-go/internal/config"
	"github.com/diegosouzapw/OmniRoute/omniroute-go/internal/proxy"
	"github.com/diegosouzapw/OmniRoute/omniroute-go/internal/store"
)

func main() {
	log.Println("Initializing OmniRoute Go Core...")

	// 1. Load Configuration
	cfg := config.Load()

	// 2. Initialize Database
	dbStore, err := store.NewStore(cfg)
	if err != nil {
		log.Fatalf("Failed to initialize database: %v", err)
	}
	defer dbStore.Close()

	// 3. Initialize Proxy Server
	proxyServer := proxy.NewServer(cfg, dbStore)

	// 4. Setup Routes
	mux := http.NewServeMux()
	mux.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("OK"))
	})
	mux.HandleFunc("/v1/chat/completions", proxyServer.HandleProxy)
	mux.HandleFunc("/v1/models", proxyServer.HandleProxy)
	// Catch-all for API routing
	mux.HandleFunc("/", proxyServer.HandleProxy)

	// 5. Start Server
	addr := ":" + cfg.Port
	log.Printf("Listening on %s...", addr)
	if err := http.ListenAndServe(addr, mux); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}
