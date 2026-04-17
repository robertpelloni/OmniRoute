package providers

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

// OpenAIProvider implements the Provider interface for OpenAI-compatible APIs.
type OpenAIProvider struct {
	BaseURL string
}

// NewOpenAIProvider creates a new instance of an OpenAIProvider.
// If baseURL is empty, it defaults to "https://api.openai.com/v1".
func NewOpenAIProvider(baseURL string) *OpenAIProvider {
	if baseURL == "" {
		baseURL = "https://api.openai.com/v1"
	}
	return &OpenAIProvider{
		BaseURL: baseURL,
	}
}

// ID implements the Provider interface.
func (p *OpenAIProvider) ID() string {
	return "openai"
}

// Name implements the Provider interface.
func (p *OpenAIProvider) Name() string {
	return "OpenAI"
}

// Execute implements the Provider interface.
func (p *OpenAIProvider) Execute(ctx context.Context, client *http.Client, req *ProviderRequest, apiKey string) (*ProviderResponse, error) {
	// Simple passthrough execution for now.
	// In reality, this would need specific payload mapping depending on the exact OpenAI endpoint used (e.g., chat/completions).

	endpoint := fmt.Sprintf("%s/chat/completions", p.BaseURL)
	payload, err := json.Marshal(req)
	if err != nil {
		return nil, fmt.Errorf("failed to marshal request payload: %w", err)
	}

	httpReq, err := http.NewRequestWithContext(ctx, "POST", endpoint, bytes.NewReader(payload))
	if err != nil {
		return nil, fmt.Errorf("failed to create HTTP request: %w", err)
	}

	httpReq.Header.Set("Content-Type", "application/json")
	httpReq.Header.Set("Authorization", fmt.Sprintf("Bearer %s", apiKey))

	resp, err := client.Do(httpReq)
	if err != nil {
		return nil, fmt.Errorf("failed to execute HTTP request: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		bodyBytes, _ := io.ReadAll(resp.Body)
		return nil, fmt.Errorf("provider returned non-200 status code: %d, body: %s", resp.StatusCode, string(bodyBytes))
	}

	var providerResp ProviderResponse
	if err := json.NewDecoder(resp.Body).Decode(&providerResp); err != nil {
		return nil, fmt.Errorf("failed to decode response payload: %w", err)
	}

	return &providerResp, nil
}
