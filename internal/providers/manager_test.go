package providers

import (
	"testing"
)

func TestManager_GetProvider(t *testing.T) {
	m := NewManager()

	tests := []struct {
		name       string
		id         string
		expectedID string
	}{
		{"Exact Match OpenAI", "openai", "openai"},
		{"Exact Match Anthropic", "anthropic", "anthropic"},
		{"Exact Match Gemini", "gemini", "gemini"},
		{"Alias oai", "oai", "openai"},
		{"Alias chatgpt", "chatgpt", "openai"},
		{"Alias ant", "ant", "anthropic"},
		{"Alias claude", "claude", "anthropic"},
		{"Alias gem", "gem", "gemini"},
		{"Alias google", "google", "gemini"},
		{"Fallback unknown openrouter", "openrouter", "openai"},
		{"Fallback completely unknown", "some-random-provider", "openai"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			p, err := m.GetProvider(tt.id)
			if err != nil {
				t.Fatalf("expected no error, got %v", err)
			}

			if p.ID() != tt.expectedID {
				t.Errorf("expected provider ID %s, got %s", tt.expectedID, p.ID())
			}
		})
	}
}
