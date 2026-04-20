package auth

import (
	"math"
	"sync"
	"time"
)

// TokenMetrics holds performance metrics for a single token.
type TokenMetrics struct {
	SuccessRate    float64   // Success rate (0.0 - 1.0)
	AvgLatency     float64   // Average latency in milliseconds
	QuotaRemaining float64   // Remaining quota (0.0 - 1.0)
	LastUsed       time.Time // Last usage timestamp
	FailCount      int       // Consecutive failure count
	TotalRequests  int       // Total request count
	successCount   int       // Internal: successful request count
	totalLatency   float64   // Internal: cumulative latency
}

// TokenScorer manages token metrics and scoring.
type TokenScorer struct {
	mu      sync.RWMutex
	metrics map[string]*TokenMetrics

	// Scoring weights
	successRateWeight    float64
	quotaWeight          float64
	latencyWeight        float64
	lastUsedWeight       float64
	failPenaltyMultiplier float64
}

// NewTokenScorer creates a new TokenScorer with default weights.
func NewTokenScorer() *TokenScorer {
	return &TokenScorer{
		metrics:               make(map[string]*TokenMetrics),
		successRateWeight:     0.4,
		quotaWeight:           0.25,
		latencyWeight:         0.2,
		lastUsedWeight:        0.15,
		failPenaltyMultiplier: 0.1,
	}
}

// getOrCreateMetrics returns existing metrics or creates new ones.
func (s *TokenScorer) getOrCreateMetrics(tokenKey string) *TokenMetrics {
	if m, ok := s.metrics[tokenKey]; ok {
		return m
	}
	m := &TokenMetrics{
		SuccessRate:    1.0,
		QuotaRemaining: 1.0,
	}
	s.metrics[tokenKey] = m
	return m
}

// RecordRequest records the result of a request for a token.
func (s *TokenScorer) RecordRequest(tokenKey string, success bool, latency time.Duration) {
	s.mu.Lock()
	defer s.mu.Unlock()

	m := s.getOrCreateMetrics(tokenKey)
	m.TotalRequests++
	m.LastUsed = time.Now()
	m.totalLatency += float64(latency.Milliseconds())

	if success {
		m.successCount++
		m.FailCount = 0
	} else {
		m.FailCount++
	}

	// Update derived metrics
	if m.TotalRequests > 0 {
		m.SuccessRate = float64(m.successCount) / float64(m.TotalRequests)
		m.AvgLatency = m.totalLatency / float64(m.TotalRequests)
	}
}

// CalculateScore computes the score for a token (higher is better).
func (s *TokenScorer) CalculateScore(tokenKey string) float64 {
	s.mu.RLock()
	defer s.mu.RUnlock()

	m, ok := s.metrics[tokenKey]
	if !ok {
		return 1.0 // New tokens get a high initial score
	}

	successScore := m.SuccessRate
	quotaScore := m.QuotaRemaining

	latencyScore := math.Exp(-m.AvgLatency / 1000.0)
	if m.TotalRequests == 0 {
		latencyScore = 1.0
	}

	timeSinceUse := time.Since(m.LastUsed).Seconds()
	lastUsedScore := 1.0 - math.Exp(-timeSinceUse/60.0)
	if m.LastUsed.IsZero() {
		lastUsedScore = 1.0
	}

	score := s.successRateWeight*successScore +
		s.quotaWeight*quotaScore +
		s.latencyWeight*latencyScore +
		s.lastUsedWeight*lastUsedScore

	if m.FailCount > 0 {
		penalty := s.failPenaltyMultiplier * float64(m.FailCount)
		score = score * math.Max(0, 1.0-penalty)
	}

	return score
}

// SelectBestToken selects the token with the highest score.
func (s *TokenScorer) SelectBestToken(tokens []string) string {
	if len(tokens) == 0 {
		return ""
	}
	if len(tokens) == 1 {
		return tokens[0]
	}

	bestToken := tokens[0]
	bestScore := s.CalculateScore(tokens[0])

	for _, token := range tokens[1:] {
		score := s.CalculateScore(token)
		if score > bestScore {
			bestScore = score
			bestToken = token
		}
	}

	return bestToken
}
