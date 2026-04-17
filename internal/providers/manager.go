package providers

import (
	"fmt"
)

// Manager holds a registry of available AI providers.
type Manager struct {
	providers map[string]Provider
}

// NewManager creates a new Provider Manager and initializes it with the default providers.
func NewManager() *Manager {
	m := &Manager{
		providers: make(map[string]Provider),
	}

	// Register default providers here.
	m.RegisterProvider(NewOpenAIProvider(""))

	return m
}

// RegisterProvider adds a new provider to the manager.
func (m *Manager) RegisterProvider(p Provider) {
	m.providers[p.ID()] = p
}

// GetProvider retrieves a provider by its ID.
func (m *Manager) GetProvider(id string) (Provider, error) {
	p, exists := m.providers[id]
	if !exists {
		return nil, fmt.Errorf("provider '%s' not found", id)
	}
	return p, nil
}
