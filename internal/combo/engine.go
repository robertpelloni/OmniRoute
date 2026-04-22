package combo

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/http"
	"time"

	"omniroute/internal/auth"
	"omniroute/internal/db"
	"omniroute/internal/providers"
)

// ComboRoute represents a prioritized list of fallback providers
type ComboRoute struct {
	ID        string
	Providers []string // List of provider aliases/IDs in order of priority
}

// Engine handles multi-provider fallback routing logic
type Engine struct {
	ProviderManager *providers.Manager
	Client          *http.Client
	Scorer          *auth.TokenScorer
}

// NewEngine creates a new combo routing engine
func NewEngine(pm *providers.Manager, client *http.Client, scorer *auth.TokenScorer) *Engine {
	if client == nil {
		client = &http.Client{Timeout: 60 * time.Second}
	}
	if scorer == nil {
		scorer = auth.NewTokenScorer()
	}
	return &Engine{
		ProviderManager: pm,
		Client:          client,
		Scorer:          scorer,
	}
}

// ExecuteCombo attempts to fulfill a request by iterating through the fallback route
func (e *Engine) ExecuteCombo(ctx context.Context, route ComboRoute, req *providers.ProviderRequest, w http.ResponseWriter) error {
	var lastErr error

	// Iterate through the prioritized list of providers
	for attempt, providerID := range route.Providers {
		// Clone the request for each attempt to avoid mutating the original
		reqClone := *req

		err := e.attemptProvider(ctx, providerID, &reqClone, w)
		if err == nil {
			// Success! The underlying logic wrote the response or stream
			return nil
		}

		lastErr = err
		log.Printf("Combo engine (attempt %d): Provider '%s' failed: %v", attempt+1, providerID, err)

		// If context is cancelled by the client, bail out early instead of falling back
		if errors.Is(ctx.Err(), context.Canceled) || errors.Is(ctx.Err(), context.DeadlineExceeded) {
			return fmt.Errorf("context cancelled during combo execution: %w", ctx.Err())
		}
	}

	return fmt.Errorf("all combo providers failed. last error: %w", lastErr)
}

// attemptProvider tries a single provider using the TokenScorer load-balancer
func (e *Engine) attemptProvider(ctx context.Context, providerID string, req *providers.ProviderRequest, w http.ResponseWriter) error {
	// Dynamically resolve the provider (handling aliases natively via the Manager)
	provider, err := e.ProviderManager.GetProvider(providerID)
	if err != nil {
		return fmt.Errorf("failed to resolve provider '%s': %w", providerID, err)
	}

	// Update the request with the canonical model name
	// In a real combo, the model name might need to be re-mapped per provider based on definitions
	mapping, err := db.GetModelMapping(req.Model)
	if err == nil {
		req.Model = mapping.TargetModel
	}

	availableTokens, err := db.GetActiveTokensForProvider(providerID)
	if err != nil || len(availableTokens) == 0 {
		return fmt.Errorf("no available tokens for provider '%s'", providerID)
	}

	// Select the best API key via TokenScorer
	bestToken := e.Scorer.SelectBestToken(availableTokens)
	if bestToken == "" {
		return fmt.Errorf("failed to select token for provider '%s'", providerID)
	}

	start := time.Now()

	// Handle Streaming
	if req.Stream {
		streamExecutor, ok := provider.(providers.StreamExecutor)
		if !ok {
			return fmt.Errorf("provider '%s' does not support streaming", provider.Name())
		}

		// Execute stream and block until complete or error
		err := streamExecutor.ExecuteStream(ctx, e.Client, req, bestToken, w)

		latency := time.Since(start)
		e.Scorer.RecordRequest(bestToken, err == nil, latency)

		return err
	}

	// Handle Synchronous JSON
	syncCtx, cancel := context.WithTimeout(ctx, 50*time.Second)
	defer cancel()

	resp, err := provider.Execute(syncCtx, e.Client, req, bestToken)

	latency := time.Since(start)
	e.Scorer.RecordRequest(bestToken, err == nil, latency)

	if err != nil {
		return err
	}

	// Flush the synchronous response directly out to the response writer
	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(resp); err != nil {
		return fmt.Errorf("failed to encode successful sync response: %w", err)
	}

	return nil
}
