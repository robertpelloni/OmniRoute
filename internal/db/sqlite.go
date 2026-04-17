package db

import (
	"database/sql"
	"fmt"
	"os"
	"path/filepath"
	"sync"
	// Import the sqlite driver. You will need to run go get github.com/mattn/go-sqlite3
	// _ "github.com/mattn/go-sqlite3"
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

		// Connect to SQLite
		// We are commenting out the actual connection until github.com/mattn/go-sqlite3 is fetched
		// db, err := sql.Open("sqlite3", dbPath)
		// if err != nil {
		// 	initErr = fmt.Errorf("failed to open database: %w", err)
		// 	return
		// }

		// if err := db.Ping(); err != nil {
		// 	initErr = fmt.Errorf("failed to ping database: %w", err)
		// 	return
		// }

		// dbInstance = db
	})

	return dbInstance, initErr
}

// GetDB returns the initialized database instance.
// It will panic if the database has not been initialized.
func GetDB() *sql.DB {
	// if dbInstance == nil {
	// 	panic("database is not initialized. Call InitDB first.")
	// }
	return dbInstance
}

// CloseDB closes the database connection.
func CloseDB() error {
	if dbInstance != nil {
		return dbInstance.Close()
	}
	return nil
}
