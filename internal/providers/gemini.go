package providers

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"
)

// GeminiProvider implements the Provider interface for Google Gemini models.
type GeminiProvider struct {
	BaseURL string
}

// NewGeminiProvider creates a new instance of a GeminiProvider.
// If baseURL is empty, it defaults to "https://generativelanguage.googleapis.com/v1beta".
func NewGeminiProvider(baseURL string) *GeminiProvider {
	if baseURL == "" {
		baseURL = "https://generativelanguage.googleapis.com/v1beta"
	}
	return &GeminiProvider{
		BaseURL: baseURL,
	}
}

// ID implements the Provider interface.
func (p *GeminiProvider) ID() string {
	return "gemini"
}

// Name implements the Provider interface.
func (p *GeminiProvider) Name() string {
	return "Google Gemini"
}

// GeminiPart represents a chunk of content in a Gemini message.
type GeminiPart struct {
	Text string `json:"text,omitempty"`
}

// GeminiContent represents a role-based message.
type GeminiContent struct {
	Role  string       `json:"role"`
	Parts []GeminiPart `json:"parts"`
}

// GeminiGenerationConfig maps hyperparameters.
type GeminiGenerationConfig struct {
	Temperature float64 `json:"temperature,omitempty"`
	MaxOutputTokens int `json:"maxOutputTokens,omitempty"`
	TopP float64 `json:"topP,omitempty"`
}

// GeminiSystemInstruction represents a system prompt payload.
type GeminiSystemInstruction struct {
	Parts []GeminiPart `json:"parts"`
}

// GeminiRequest represents the structure of a Google Generative Language API request.
type GeminiRequest struct {
	Contents         []GeminiContent         `json:"contents"`
	GenerationConfig *GeminiGenerationConfig `json:"generationConfig,omitempty"`
	SystemInstruction *GeminiSystemInstruction `json:"systemInstruction,omitempty"`
}

// mapRequest converts a standard OpenAI-style ProviderRequest into a GeminiRequest.
func (p *GeminiProvider) mapRequest(req *ProviderRequest) (*GeminiRequest, error) {
	geminiReq := &GeminiRequest{
		GenerationConfig: &GeminiGenerationConfig{
			Temperature: float64(req.Temperature),
		},
	}

	if req.MaxTokens > 0 {
		geminiReq.GenerationConfig.MaxOutputTokens = req.MaxTokens
	}

	// Because req.Messages is an interface{} in the MVP, we must marshal and unmarshal it.
	msgBytes, err := json.Marshal(req.Messages)
	if err == nil {
		var msgs []GenericMessage
		if err := json.Unmarshal(msgBytes, &msgs); err == nil {
			for _, msg := range msgs {
				// Gemini roles are "user" or "model" (OpenAI "assistant" maps to "model")
				role := msg.Role
				if role == "assistant" {
					role = "model"
				}

				if role == "system" {
					geminiReq.SystemInstruction = &GeminiSystemInstruction{
						Parts: []GeminiPart{{Text: msg.Content}},
					}
					continue
				}

				geminiReq.Contents = append(geminiReq.Contents, GeminiContent{
					Role: role,
					Parts: []GeminiPart{{Text: msg.Content}},
				})
			}
		}
	}

	return geminiReq, nil
}

// Execute implements the Provider interface for synchronous JSON execution.
func (p *GeminiProvider) Execute(ctx context.Context, client *http.Client, req *ProviderRequest, apiKey string) (*ProviderResponse, error) {
	// e.g. "models/gemini-1.5-flash:generateContent"
	modelName := strings.TrimPrefix(req.Model, "models/")
	endpoint := fmt.Sprintf("%s/models/%s:generateContent?key=%s", p.BaseURL, modelName, apiKey)

	geminiReq, err := p.mapRequest(req)
	if err != nil {
		return nil, fmt.Errorf("failed to map Gemini request: %w", err)
	}

	payload, err := json.Marshal(geminiReq)
	if err != nil {
		return nil, fmt.Errorf("failed to marshal Gemini request payload: %w", err)
	}

	httpReq, err := http.NewRequestWithContext(ctx, "POST", endpoint, bytes.NewReader(payload))
	if err != nil {
		return nil, fmt.Errorf("failed to create HTTP request: %w", err)
	}

	httpReq.Header.Set("Content-Type", "application/json")

	resp, err := client.Do(httpReq)
	if err != nil {
		return nil, fmt.Errorf("failed to execute HTTP request: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		bodyBytes, _ := io.ReadAll(resp.Body)
		return nil, fmt.Errorf("Gemini provider returned non-200 status code: %d, body: %s", resp.StatusCode, string(bodyBytes))
	}

	// Generic decoding for the Go port skeleton.
	// Production logic requires mapping `candidates[0].content.parts[0].text`.
	var providerResp ProviderResponse
	if err := json.NewDecoder(resp.Body).Decode(&providerResp); err != nil {
		return nil, fmt.Errorf("failed to decode response payload: %w", err)
	}

	return &providerResp, nil
}
