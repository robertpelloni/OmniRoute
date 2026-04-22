package db

import (
	"fmt"
)

// GetActiveTokensForProvider returns all active API keys associated with the given provider (e.g. "openai", "anthropic").
func GetActiveTokensForProvider(providerType string) ([]string, error) {
	db := GetDB()

	// Query the providers table for active credentials for the target provider
	query := "SELECT api_key FROM providers WHERE provider = ? AND is_active = 1"
	rows, err := db.Query(query, providerType)
	if err != nil {
		return nil, fmt.Errorf("failed to query provider tokens: %w", err)
	}
	defer rows.Close()

	var tokens []string
	for rows.Next() {
		var key string
		if err := rows.Scan(&key); err != nil {
			return nil, fmt.Errorf("failed to scan provider token: %w", err)
		}
		if key != "" {
			tokens = append(tokens, key)
		}
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("error iterating provider tokens: %w", err)
	}

	return tokens, nil
}
