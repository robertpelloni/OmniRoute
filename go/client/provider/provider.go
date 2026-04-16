package provider

import (
	"context"
	"net/http"
)

// ChatCompletionRequest represents a generic request payload for an LLM provider.
type ChatCompletionRequest struct {
	Model       string    `json:"model"`
	Messages    []Message `json:"messages"`
	Temperature *float32  `json:"temperature,omitempty"`
	Stream      bool      `json:"stream,omitempty"`
}

// Message represents a single chat message in the conversation.
type Message struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

// ChatCompletionResponse represents a generic response payload from an LLM provider.
type ChatCompletionResponse struct {
	ID      string   `json:"id"`
	Model   string   `json:"model"`
	Choices []Choice `json:"choices"`
}

// Choice represents a single generated output choice.
type Choice struct {
	Index   int     `json:"index"`
	Message Message `json:"message"`
}

// Client defines the interface that all LLM providers must implement.
type Client interface {
	// CreateChatCompletion sends a request to the provider's API.
	CreateChatCompletion(ctx context.Context, req *ChatCompletionRequest) (*ChatCompletionResponse, error)

	// CreateStreamingChatCompletion handles server-sent events for streaming replies.
	CreateStreamingChatCompletion(ctx context.Context, req *ChatCompletionRequest) (*http.Response, error)

	// ProviderName returns the internal string identifier (e.g. "openai", "anthropic").
	ProviderName() string
}
