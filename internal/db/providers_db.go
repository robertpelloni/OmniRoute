package db

import "context"

type DefaultTokenProvider struct {
	Tokens map[string][]string
}

func (p *DefaultTokenProvider) GetTokens(ctx context.Context, provider string) ([]string, error) {
	if tokens, ok := p.Tokens[provider]; ok {
		return tokens, nil
	}
	return []string{}, nil
}
