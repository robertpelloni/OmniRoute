package config

import "strings"

type Config struct {
	VertexCompatAPIKey []VertexCompatKey
}

func normalizeModelPrefix(prefix string) string {
	return strings.TrimSpace(prefix)
}

func NormalizeHeaders(headers map[string]string) map[string]string {
	if headers == nil {
		return nil
	}
	out := make(map[string]string, len(headers))
	for k, v := range headers {
		k = strings.TrimSpace(k)
		v = strings.TrimSpace(v)
		if k != "" && v != "" {
			out[k] = v
		}
	}
	return out
}

func NormalizeExcludedModels(models []string) []string {
	var out []string
	seen := make(map[string]struct{})
	for _, m := range models {
		m = strings.TrimSpace(m)
		if m != "" {
			if _, exists := seen[m]; !exists {
				seen[m] = struct{}{}
				out = append(out, m)
			}
		}
	}
	return out
}
