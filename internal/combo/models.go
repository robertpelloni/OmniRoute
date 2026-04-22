package combo

import (
	"database/sql"
	"strings"

	"omniroute/internal/db"
)

// GetComboRoute checks the SQLite database for a defined fallback combo route for the given model ID.
// If it exists, it parses the prioritized providers.
func GetComboRoute(modelAlias string) (ComboRoute, bool) {
	dbConn := db.GetDB()
	var rawProviders sql.NullString

	// Query the combos table if it exists
	query := "SELECT fallback_chain FROM combos WHERE id = ? OR name = ? LIMIT 1"
	err := dbConn.QueryRow(query, modelAlias, modelAlias).Scan(&rawProviders)

	if err != nil || !rawProviders.Valid {
		return ComboRoute{}, false
	}

	// Assume simple comma-separated string for now; in production might be JSON array
	providerList := strings.Split(rawProviders.String, ",")
	for i := range providerList {
		providerList[i] = strings.TrimSpace(providerList[i])
	}

	return ComboRoute{
		ID:        modelAlias,
		Providers: providerList,
	}, true
}
