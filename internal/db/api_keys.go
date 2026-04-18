package db

import (
	"database/sql"
	"fmt"
)

// ValidateAPIKey checks if the provided API key string exists and is active.
// In OmniRoute, keys might be stored in a dedicated `api_keys` table.
// If the table does not exist, we initialize it alongside providers.
func ValidateAPIKey(db *sql.DB, key string) (bool, error) {
	// Let's make sure the table exists, mirroring Next.js migrations
	_, _ = db.Exec(`
		CREATE TABLE IF NOT EXISTS api_keys (
			id TEXT PRIMARY KEY,
			name TEXT NOT NULL,
			key TEXT NOT NULL UNIQUE,
			is_active INTEGER DEFAULT 1,
			created_at DATETIME DEFAULT CURRENT_TIMESTAMP
		);
	`)

	var isActive int
	err := db.QueryRow("SELECT is_active FROM api_keys WHERE key = ?", key).Scan(&isActive)
	if err != nil {
		if err == sql.ErrNoRows {
			return false, nil // Key not found
		}
		return false, fmt.Errorf("failed to validate API key: %w", err)
	}

	return isActive == 1, nil
}
