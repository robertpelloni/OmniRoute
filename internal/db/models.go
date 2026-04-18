package db

import (
	"database/sql"
)

// Model mapping info
type ModelMapping struct {
	Alias       string
	Provider    string
	TargetModel string
}

// GetModelMapping retrieves the target provider and model for a given alias from the DB.
// Since the TS implementation relies on a "models" table, we will scaffold a basic version here.
func GetModelMapping(alias string) (*ModelMapping, error) {
	db := GetDB()
	var provider, targetModel sql.NullString

	// Try to query the models table if it exists
	query := "SELECT provider, target_model FROM models WHERE alias = ?"
	err := db.QueryRow(query, alias).Scan(&provider, &targetModel)

	if err != nil {
		if err == sql.ErrNoRows {
			// Fallback: assume the alias is the target model and provider is openai for now.
			return &ModelMapping{
				Alias:       alias,
				Provider:    "openai",
				TargetModel: alias,
			}, nil
		}
		// If table doesn't exist, handle gracefully by falling back to openai
		return &ModelMapping{
			Alias:       alias,
			Provider:    "openai",
			TargetModel: alias,
		}, nil
	}

	return &ModelMapping{
		Alias:       alias,
		Provider:    provider.String,
		TargetModel: targetModel.String,
	}, nil
}
