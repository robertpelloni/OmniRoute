package store

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/diegosouzapw/OmniRoute/omniroute-go/internal/config"
	_ "github.com/mattn/go-sqlite3"
)

// Store wraps the database connection
type Store struct {
	DB *sql.DB
}

// NewStore initializes the SQLite database
func NewStore(cfg *config.Config) (*Store, error) {
	db, err := sql.Open("sqlite3", cfg.DatabasePath)
	if err != nil {
		return nil, fmt.Errorf("failed to open database at %s: %w", cfg.DatabasePath, err)
	}

	if err := db.Ping(); err != nil {
		return nil, fmt.Errorf("failed to ping database: %w", err)
	}

	store := &Store{DB: db}
	if err := store.migrate(); err != nil {
		return nil, fmt.Errorf("failed to run migrations: %w", err)
	}

	log.Printf("Database initialized at %s", cfg.DatabasePath)
	return store, nil
}

func (s *Store) migrate() error {
	// Replicating basic schema from Node.js (this will be expanded)
	queries := []string{
		`CREATE TABLE IF NOT EXISTS providers (
			id TEXT PRIMARY KEY,
			name TEXT,
			enabled BOOLEAN DEFAULT 1,
			priority INTEGER DEFAULT 1,
			auth_type TEXT,
			api_key TEXT,
			custom_model_mapping TEXT,
			created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
			updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
		);`,
		`CREATE TABLE IF NOT EXISTS settings (
			key TEXT PRIMARY KEY,
			value TEXT,
			updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
		);`,
	}

	for _, query := range queries {
		if _, err := s.DB.Exec(query); err != nil {
			return err
		}
	}

	return nil
}

// Close gracefully closes the DB connection
func (s *Store) Close() error {
	return s.DB.Close()
}
