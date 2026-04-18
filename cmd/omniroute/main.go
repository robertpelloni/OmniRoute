package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"

	"omniroute/internal/auth"
	"omniroute/internal/db"
	"omniroute/internal/providers"
	"omniroute/internal/server"
)

func main() {
	log.Println("Starting OmniRoute Go engine...")

	// Initialize the Database
	homeDir, err := os.UserHomeDir()
	if err != nil {
		log.Fatalf("Failed to get user home directory: %v", err)
	}

	dbPath := filepath.Join(homeDir, ".omniroute", "storage.sqlite")
	database, err := db.InitDB(dbPath)
	if err != nil {
		log.Fatalf("Failed to initialize database: %v", err)
	}
	defer db.CloseDB()
	log.Printf("Database initialized at %s", dbPath)

	_ = database

	// Initialize Providers Engine
	providerManager := providers.NewManager()

	// Initialize Server Router
	srv := server.NewServer(providerManager)
	router := srv.SetupRouter()

	// Add global middleware for Authentication routing
	handler := auth.APIKeyMiddleware(router)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Listening on :%s", port)
	if err := http.ListenAndServe(":"+port, handler); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}
