package combo

import (
	"context"
)

type TokenScorer interface {
	ScoreToken(ctx context.Context, token string) float64
	RecordSuccess(ctx context.Context, token string)
	RecordFailure(ctx context.Context, token string, isRateLimit bool)
}

type TokenProvider interface {
	GetTokens(ctx context.Context, provider string) ([]string, error)
}

type ProviderChain struct {
	Providers []string
}
