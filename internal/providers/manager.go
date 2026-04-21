package providers

import (
)

// Manager holds a registry of available AI providers and handles alias resolution.
type Manager struct {
	providers map[string]Provider
	aliases   map[string]string
}

// NewManager creates a new Provider Manager and initializes it with the default providers.
func NewManager() *Manager {
	m := &Manager{
		providers: make(map[string]Provider),
		aliases:   make(map[string]string),
	}

	// Register default providers here.
	m.RegisterProvider(NewOpenAIProvider(""))
	m.RegisterProvider(NewAnthropicProvider(""))
	m.RegisterProvider(NewGeminiProvider(""))

	// Register standard fallback aliases (porting TS getExecutor logic)
	m.RegisterAlias("cu", "cursor")
	m.RegisterAlias("pol", "pollinations")
	m.RegisterAlias("cf", "cloudflare-ai")
	m.RegisterAlias("pu", "puter")
	m.RegisterAlias("cpa", "cliproxyapi")
	m.RegisterAlias("openrouter", "openai") // OpenRouter uses standard OpenAI format natively

	return m
}

// RegisterProvider adds a new provider to the manager.
func (m *Manager) RegisterProvider(p Provider) {
	m.providers[p.ID()] = p
}

// RegisterAlias maps a shorthand string to a canonical provider ID.
func (m *Manager) RegisterAlias(alias, canonicalID string) {
	m.aliases[alias] = canonicalID
}

// GetProvider retrieves a provider by its ID, dynamically resolving known aliases.
// If the provider is unknown and no explicit Executor is mapped, it will fallback to a default OpenAI executor
// in order to transparently proxy generic endpoints.
func (m *Manager) GetProvider(id string) (Provider, error) {
	// Resolve alias first
	canonical, ok := m.aliases[id]
	if ok {
		id = canonical
	}

	p, exists := m.providers[id]
	if !exists {
		// Fallback for custom OpenRouter/Unknown APIs mimicking OpenAI
		return m.providers["openai"], nil
	}
	return p, nil
}
