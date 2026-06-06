package config

import (
	"os"
	"path/filepath"
)

// Config holds global application configuration
type Config struct {
	DataDir      string
	Port         string
	DatabasePath string
}

// Load reads environment variables and establishes default configurations
func Load() *Config {
	dataDir := os.Getenv("DATA_DIR")
	if dataDir == "" {
		homeDir, err := os.UserHomeDir()
		if err != nil {
			dataDir = "./data"
		} else {
			dataDir = filepath.Join(homeDir, ".omniroute")
		}
	}

	// Ensure the data directory exists
	os.MkdirAll(dataDir, 0755)

	port := os.Getenv("PORT")
	if port == "" {
		port = "20128" // OmniRoute default port
	}

	return &Config{
		DataDir:      dataDir,
		Port:         port,
		DatabasePath: filepath.Join(dataDir, "omniroute.db"),
	}
}
