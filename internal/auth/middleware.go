package auth

import (
	"log"
	"net/http"
	"strings"

	"omniroute/internal/db"
)

// APIKeyMiddleware intercepts HTTP requests to ensure the client provides a valid OmniRoute API Key.
func APIKeyMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Bypass auth for healthchecks
		if r.URL.Path == "/health" {
			next.ServeHTTP(w, r)
			return
		}

		authHeader := r.Header.Get("Authorization")
		if authHeader == "" {
			http.Error(w, "Unauthorized: Missing Authorization header", http.StatusUnauthorized)
			return
		}

		// Expecting "Bearer <key>"
		parts := strings.SplitN(authHeader, " ", 2)
		if len(parts) != 2 || strings.ToLower(parts[0]) != "bearer" {
			http.Error(w, "Unauthorized: Invalid Authorization header format", http.StatusUnauthorized)
			return
		}

		key := parts[1]

		// In development or if the proxy operates openly, one could skip validation,
		// but since this is an enterprise router we validate against the db instance.

		database := db.GetDB()
		if database == nil {
		    log.Println("WARNING: Database not initialized, skipping auth check.")
			next.ServeHTTP(w, r)
			return
		}

		isValid, err := db.ValidateAPIKey(database, key)
		if err != nil {
			log.Printf("Error validating API key: %v", err)
			http.Error(w, "Internal server error during authentication", http.StatusInternalServerError)
			return
		}

		if !isValid {
			// For testing without the UI setup we let it slide as a fallback feature,
			// but normally we block here. If there are literally no keys in the DB
			// we allow access so people don't get locked out of a new instance.

			var count int
			_ = database.QueryRow("SELECT COUNT(*) FROM api_keys").Scan(&count)
			if count > 0 {
				http.Error(w, "Unauthorized: Invalid or inactive API key", http.StatusUnauthorized)
				return
			}

			// If zero keys, default to open proxy mode until configured.
			log.Println("WARNING: Operating in open proxy mode (no API keys configured)")
		}

		// Inject key metadata into context if needed in the future
		// ctx := context.WithValue(r.Context(), "apiKey", key)
		// next.ServeHTTP(w, r.WithContext(ctx))

		next.ServeHTTP(w, r)
	})
}
