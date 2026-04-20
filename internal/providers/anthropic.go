package providers

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

// AnthropicProvider implements the Provider interface for Claude models.
type AnthropicProvider struct {
	BaseURL string
	Version string
}

// NewAnthropicProvider creates a new instance of an AnthropicProvider.
// If baseURL is empty, it defaults to "https://api.anthropic.com/v1".
func NewAnthropicProvider(baseURL string) *AnthropicProvider {
	if baseURL == "" {
		baseURL = "https://api.anthropic.com/v1"
	}
	return &AnthropicProvider{
		BaseURL: baseURL,
		Version: "2023-06-01",
	}
}

// ID implements the Provider interface.
func (p *AnthropicProvider) ID() string {
	return "anthropic"
}

// Name implements the Provider interface.
func (p *AnthropicProvider) Name() string {
	return "Anthropic"
}

// AnthropicMessage represents the message payload format required by Anthropic's API.
type AnthropicMessage struct {
	Role    string      `json:"role"`
	Content interface{} `json:"content"` // Can be string or array of parts
}

// AnthropicRequest represents the structure of an Anthropic Messages API request.
type AnthropicRequest struct {
	Model       string             `json:"model"`
	Messages    []AnthropicMessage `json:"messages"`
	MaxTokens   int                `json:"max_tokens"`
	Stream      bool               `json:"stream,omitempty"`
	System      string             `json:"system,omitempty"`
	Temperature float64            `json:"temperature,omitempty"`
}

// mapRequest converts a standard OpenAI-style ProviderRequest into an AnthropicRequest.
func (p *AnthropicProvider) mapRequest(req *ProviderRequest) (*AnthropicRequest, error) {
	anthropicReq := &AnthropicRequest{
		Model:       req.Model,
		MaxTokens:   req.MaxTokens,
		Stream:      req.Stream,
		Temperature: float64(req.Temperature),
	}

	if anthropicReq.MaxTokens == 0 {
		anthropicReq.MaxTokens = 4096 // Anthropic requires max_tokens
	}

	// Unmarshal generic interface{} messages into a struct we can range over
	msgBytes, err := json.Marshal(req.Messages)
	if err == nil {
		var msgs []GenericMessage
		if err := json.Unmarshal(msgBytes, &msgs); err == nil {
			for _, msg := range msgs {
				if msg.Role == "system" {
					anthropicReq.System = msg.Content
					continue
				}
				anthropicReq.Messages = append(anthropicReq.Messages, AnthropicMessage{
					Role:    msg.Role,
					Content: msg.Content,
				})
			}
		}
	}

	return anthropicReq, nil
}

// Execute implements the Provider interface for synchronous JSON execution.
func (p *AnthropicProvider) Execute(ctx context.Context, client *http.Client, req *ProviderRequest, apiKey string) (*ProviderResponse, error) {
	endpoint := fmt.Sprintf("%s/messages", p.BaseURL)

	anthropicReq, err := p.mapRequest(req)
	if err != nil {
		return nil, fmt.Errorf("failed to map Anthropic request: %w", err)
	}

	payload, err := json.Marshal(anthropicReq)
	if err != nil {
		return nil, fmt.Errorf("failed to marshal Anthropic request payload: %w", err)
	}

	httpReq, err := http.NewRequestWithContext(ctx, "POST", endpoint, bytes.NewReader(payload))
	if err != nil {
		return nil, fmt.Errorf("failed to create HTTP request: %w", err)
	}

	httpReq.Header.Set("Content-Type", "application/json")
	httpReq.Header.Set("x-api-key", apiKey)
	httpReq.Header.Set("anthropic-version", p.Version)

	resp, err := client.Do(httpReq)
	if err != nil {
		return nil, fmt.Errorf("failed to execute HTTP request: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		bodyBytes, _ := io.ReadAll(resp.Body)
		return nil, fmt.Errorf("Anthropic provider returned non-200 status code: %d, body: %s", resp.StatusCode, string(bodyBytes))
	}

	// This assumes the core router will eventually translate the Anthropic response shape back to OpenAI.
	// For the initial Go port skeleton, we simply decode it into the generic interface structure.
	// Production logic requires deep mapping of the `content[0].text` array.
	var providerResp ProviderResponse
	if err := json.NewDecoder(resp.Body).Decode(&providerResp); err != nil {
		return nil, fmt.Errorf("failed to decode response payload: %w", err)
	}

	return &providerResp, nil
}
