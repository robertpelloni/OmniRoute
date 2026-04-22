package combo

import (
	"context"
	"errors"
	"net/http"
	"testing"
)

type MockTokenScorer struct {
	scores    map[string]float64
	successes []string
	failures  []string
}

func (m *MockTokenScorer) ScoreToken(ctx context.Context, token string) float64 {
	if s, ok := m.scores[token]; ok {
		return s
	}
	return 1.0
}

func (m *MockTokenScorer) RecordSuccess(ctx context.Context, token string) {
	m.successes = append(m.successes, token)
}

func (m *MockTokenScorer) RecordFailure(ctx context.Context, token string, isRateLimit bool) {
	m.failures = append(m.failures, token)
}

type MockTokenProvider struct {
	tokens map[string][]string
}

func (m *MockTokenProvider) GetTokens(ctx context.Context, provider string) ([]string, error) {
	if t, ok := m.tokens[provider]; ok {
		return t, nil
	}
	return nil, errors.New("provider not found")
}

func TestComboEngine_Route(t *testing.T) {
	scorer := &MockTokenScorer{
		scores: map[string]float64{
			"token-o1": 1.0,
			"token-o2": 0.5,
			"token-a1": 1.0,
		},
	}

	provider := &MockTokenProvider{
		tokens: map[string][]string{
			"openai":    {"token-o2", "token-o1"}, // o1 should be picked due to higher score
			"anthropic": {"token-a1"},
		},
	}

	engine := NewEngine(scorer, provider)

	req, _ := http.NewRequest("POST", "/", nil)
	chain := ProviderChain{Providers: []string{"openai", "anthropic"}}

	// Test 1: First provider succeeds
	ctx := context.Background()
	var executedProvider, executedToken string

	err := engine.Route(ctx, chain, req, func(p, token string) error {
		executedProvider = p
		executedToken = token
		return nil
	})

	if err != nil {
		t.Fatalf("expected no error, got %v", err)
	}
	if executedProvider != "openai" {
		t.Errorf("expected provider 'openai', got %s", executedProvider)
	}
	if executedToken != "token-o1" {
		t.Errorf("expected token 'token-o1', got %s", executedToken)
	}

	// Test 2: First provider fails, fallback to second
	executedProvider = ""
	executedToken = ""
	err = engine.Route(ctx, chain, req, func(p, token string) error {
		if p == "openai" {
			return errors.New("502 bad gateway")
		}
		executedProvider = p
		executedToken = token
		return nil
	})

	if err != nil {
		t.Fatalf("expected no error on fallback, got %v", err)
	}
	if executedProvider != "anthropic" {
		t.Errorf("expected provider 'anthropic' on fallback, got %s", executedProvider)
	}
	if len(scorer.failures) == 0 || scorer.failures[0] != "token-o1" {
		t.Errorf("expected 'token-o1' to be recorded as failure")
	}

	// Test 3: All fail
	err = engine.Route(ctx, chain, req, func(p, token string) error {
		return errors.New("simulated failure")
	})

	if err == nil {
		t.Fatal("expected error when all providers fail, got nil")
	}
}
