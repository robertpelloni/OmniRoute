package providers

import (
	"context"
	"net/http"
)

// ProviderRequest represents a generic request payload that will be routed to a specific AI provider.
// This struct will eventually handle chat completions, embeddings, image generation, etc.
type ProviderRequest struct {
	Model       string      `json:"model"`
	Messages    interface{} `json:"messages,omitempty"`
	Temperature float32     `json:"temperature,omitempty"`
	MaxTokens   int         `json:"max_tokens,omitempty"`
	Stream      bool        `json:"stream,omitempty"`
	// Additional fields as needed for completions and embeddings.
}

// ProviderResponse represents a generic response payload received from an AI provider.
type ProviderResponse struct {
	ID      string        `json:"id"`
	Object  string        `json:"object"`
	Created int64         `json:"created"`
	Model   string        `json:"model"`
	Choices []interface{} `json:"choices"`
}

// Provider defines the interface that all specific provider implementations (OpenAI, Anthropic, Gemini, etc.) must fulfill.
type Provider interface {
	// ID returns the unique identifier for the provider (e.g., "openai", "anthropic").
	ID() string

	// Name returns the display name for the provider.
	Name() string

	// Execute routes the ProviderRequest to the specific provider's API.
	// It uses the given context and HTTP client to perform the request.
	Execute(ctx context.Context, client *http.Client, req *ProviderRequest, apiKey string) (*ProviderResponse, error)
}
