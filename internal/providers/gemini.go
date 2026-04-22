package providers

import (
	"context"
	"net/http"
)

type GeminiProvider struct {
	BaseURL string
}

func NewGeminiProvider(baseURL string) *GeminiProvider {
	if baseURL == "" {
		baseURL = "https://generativelanguage.googleapis.com/v1beta"
	}
	return &GeminiProvider{
		BaseURL: baseURL,
	}
}

func (p *GeminiProvider) ID() string {
	return "gemini"
}

func (p *GeminiProvider) Name() string {
	return "Google Gemini"
}

func (p *GeminiProvider) Execute(ctx context.Context, client *http.Client, req *ProviderRequest, apiKey string) (*ProviderResponse, error) {
	return &ProviderResponse{}, nil
}

func (p *GeminiProvider) ExecuteStream(ctx context.Context, client *http.Client, req *ProviderRequest, apiKey string, w http.ResponseWriter) error {
	return nil
}
