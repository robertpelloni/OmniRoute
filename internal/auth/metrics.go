package auth

import (
	"context"
	"sync"
)

type DefaultTokenScorer struct {
	mu     sync.RWMutex
	scores map[string]float64
}

func NewDefaultTokenScorer() *DefaultTokenScorer {
	return &DefaultTokenScorer{
		scores: make(map[string]float64),
	}
}

func (s *DefaultTokenScorer) ScoreToken(ctx context.Context, token string) float64 {
	s.mu.RLock()
	defer s.mu.RUnlock()
	if score, exists := s.scores[token]; exists {
		return score
	}
	return 1.0
}

func (s *DefaultTokenScorer) RecordSuccess(ctx context.Context, token string) {
	s.mu.Lock()
	defer s.mu.Unlock()
	current := s.scores[token]
	if current == 0 {
		current = 1.0
	}
	if current < 1.0 {
		s.scores[token] = current + 0.1
	}
}

func (s *DefaultTokenScorer) RecordFailure(ctx context.Context, token string, isRateLimit bool) {
	s.mu.Lock()
	defer s.mu.Unlock()
	current := s.scores[token]
	if current == 0 {
		current = 1.0
	}
	if isRateLimit {
		s.scores[token] = current * 0.5
	} else {
		s.scores[token] = current * 0.8
	}
}
