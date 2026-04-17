package db

import (
	"database/sql"
	"fmt"
	"os"
	"path/filepath"
	"sync"
	_ "github.com/mattn/go-sqlite3"
)

var (
	dbInstance *sql.DB
	once       sync.Once
)

// InitDB initializes the SQLite database connection, ensuring it is a singleton.
// The dbPath parameter specifies the location of the storage.sqlite file.
func InitDB(dbPath string) (*sql.DB, error) {
	var initErr error
	once.Do(func() {
		// Ensure the directory exists
		dir := filepath.Dir(dbPath)
		if err := os.MkdirAll(dir, 0755); err != nil {
			initErr = fmt.Errorf("failed to create database directory: %w", err)
			return
		}

		db, err := sql.Open("sqlite3", dbPath)
		if err != nil {
			initErr = fmt.Errorf("failed to open database: %w", err)
			return
		}

		if err := db.Ping(); err != nil {
			initErr = fmt.Errorf("failed to ping database: %w", err)
			return
		}

		dbInstance = db
	})

	if initErr == nil {
		initErr = migrateSchema(dbInstance)
	}

	return dbInstance, initErr
}

// GetDB returns the initialized database instance.
// It will panic if the database has not been initialized.
func GetDB() *sql.DB {
	if dbInstance == nil {
		panic("database is not initialized. Call InitDB first.")
	}
	return dbInstance
}

// CloseDB closes the database connection.
func CloseDB() error {
	if dbInstance != nil {
		return dbInstance.Close()
	}
	return nil
}

// migrateSchema handles the basic creation of core tables for OmniRoute.
func migrateSchema(db *sql.DB) error {
	schema := `
	CREATE TABLE IF NOT EXISTS providers (
		id TEXT PRIMARY KEY,
		provider TEXT NOT NULL,
		auth_type TEXT NOT NULL,
		api_key TEXT NOT NULL,
		name TEXT,
		is_active INTEGER DEFAULT 1,
		custom_config TEXT,
		created_at DATETIME DEFAULT CURRENT_TIMESTAMP
	);

	CREATE TABLE IF NOT EXISTS quotas (
		id TEXT PRIMARY KEY,
		provider_id TEXT NOT NULL,
		limit_value INTEGER,
		used_value INTEGER DEFAULT 0,
		created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
		FOREIGN KEY (provider_id) REFERENCES providers(id)
	);
	`

	_, err := db.Exec(schema)
	if err != nil {
		return fmt.Errorf("failed to execute schema migration: %w", err)
	}
	return nil
}
