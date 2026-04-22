package combo

import (
	"context"
	"fmt"
	"log"
	"net/http"
)

// Engine orchestrates multi-provider fallback routing
type Engine struct {
	scorer        TokenScorer
	tokenProvider TokenProvider
}

// NewEngine creates a new combo routing Engine
func NewEngine(scorer TokenScorer, tokenProvider TokenProvider) *Engine {
	return &Engine{
		scorer:        scorer,
		tokenProvider: tokenProvider,
	}
}

// Route attempts to execute a request sequentially through a chain of providers
func (e *Engine) Route(ctx context.Context, chain ProviderChain, req *http.Request, exec func(provider, token string) error) error {
	var lastErr error

	for _, provider := range chain.Providers {
		tokens, err := e.tokenProvider.GetTokens(ctx, provider)
		if err != nil || len(tokens) == 0 {
			log.Printf("ComboEngine: No tokens available for provider %s: %v", provider, err)
			continue
		}

		// Select the best token (highest score)
		bestToken := ""
		bestScore := -1.0
		for _, token := range tokens {
			score := e.scorer.ScoreToken(ctx, token)
			if score > bestScore {
				bestScore = score
				bestToken = token
			}
		}

		log.Printf("ComboEngine: Attempting provider %s with selected token (score: %f)", provider, bestScore)
		err = exec(provider, bestToken)
		if err == nil {
			// Success
			e.scorer.RecordSuccess(ctx, bestToken)
			return nil
		}

		// Failure - record and try next provider
		lastErr = err

		// Determine if it's a rate limit or a 502 Bad Gateway
		isRateLimit := false // In a real implementation this would inspect the err type
		e.scorer.RecordFailure(ctx, bestToken, isRateLimit)

		log.Printf("ComboEngine: Provider %s failed: %v. Trying next in chain...", provider, err)

		select {
		case <-ctx.Done():
			return fmt.Errorf("context cancelled during combo routing: %w", ctx.Err())
		default:
			// Continue to the next provider
		}
	}

	return fmt.Errorf("all providers in combo chain failed. last error: %w", lastErr)
}
