package providers

import (
	"strings"
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
	m.RegisterProvider(NewAnthropicProvider(""))
	m.RegisterProvider(NewGeminiProvider(""))

	return m
}

// RegisterProvider adds a new provider to the manager.
func (m *Manager) RegisterProvider(p Provider) {
	m.providers[p.ID()] = p
}

// GetProvider retrieves a provider by its ID. It implements legacy TS getExecutor alias resolution natively.
func (m *Manager) GetProvider(id string) (Provider, error) {
	// 1. Exact Match
	if p, exists := m.providers[id]; exists {
		return p, nil
	}

	// 2. A2A Protocol Alias Resolution (legacy getExecutor logic port)
	normalized := strings.ToLower(id)
	var resolvedID string

	switch normalized {
	case "oai", "chatgpt":
		resolvedID = "openai"
	case "ant", "claude":
		resolvedID = "anthropic"
	case "gem", "google":
		resolvedID = "gemini"
	case "cu", "cursor":
		resolvedID = "cursor"
	case "pol", "pollinations":
		resolvedID = "pollinations"
	case "or", "openrouter":
		resolvedID = "openrouter"
	default:
		// Default to returning an OpenAI compatible proxy for unknown open-source endpoints
		// This ensures maximum compat for things like local ollama, groq, etc.
		return NewOpenAIProvider(""), nil
	}

	if p, exists := m.providers[resolvedID]; exists {
		return p, nil
	}

	// 3. Fallback: Treat unknown as OpenAI-compatible
	return NewOpenAIProvider(""), nil
}
