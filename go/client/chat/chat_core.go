package chat

import (
	"context"
	"errors"
	"net/http"

	"omniroute/go/client/provider"
)

// Router maps string identifiers to provider.Client implementations
type Router struct {
	providers map[string]provider.Client
}

func NewRouter() *Router {
	return &Router{
		providers: make(map[string]provider.Client),
	}
}

// RegisterProvider adds a new AI provider to the router
func (r *Router) RegisterProvider(name string, p provider.Client) {
	r.providers[name] = p
}

// RouteRequest accepts an incoming ChatCompletionRequest, identifies the provider, and proxies it
func (r *Router) RouteRequest(ctx context.Context, providerName string, req *provider.ChatCompletionRequest) (*provider.ChatCompletionResponse, error) {
	client, exists := r.providers[providerName]
	if !exists {
		return nil, errors.New("unsupported provider: " + providerName)
	}

	return client.CreateChatCompletion(ctx, req)
}

// RouteStreamingRequest accepts an incoming streaming ChatCompletionRequest and proxies it
func (r *Router) RouteStreamingRequest(ctx context.Context, providerName string, req *provider.ChatCompletionRequest) (*http.Response, error) {
	client, exists := r.providers[providerName]
	if !exists {
		return nil, errors.New("unsupported streaming provider: " + providerName)
	}

	req.Stream = true
	return client.CreateStreamingChatCompletion(ctx, req)
}
