package providers

import (
	"bufio"
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"strings"
	"time"
)

// GeminiStreamResponse represents a chunk from the streaming generateContent API.
type GeminiStreamResponse struct {
	Candidates []struct {
		Content struct {
			Parts []GeminiPart `json:"parts"`
		} `json:"content"`
	} `json:"candidates"`
}

// ExecuteStream implements the StreamExecutor interface for Google Gemini APIs.
// It connects to `streamGenerateContent?alt=sse` and translates payloads to standard OpenAI completions format.
func (p *GeminiProvider) ExecuteStream(ctx context.Context, client *http.Client, req *ProviderRequest, apiKey string, w http.ResponseWriter) error {
	req.Stream = true

	modelName := strings.TrimPrefix(req.Model, "models/")
	endpoint := fmt.Sprintf("%s/models/%s:streamGenerateContent?alt=sse&key=%s", p.BaseURL, modelName, apiKey)

	geminiReq, err := p.mapRequest(req)
	if err != nil {
		return fmt.Errorf("failed to map Gemini request: %w", err)
	}

	payload, err := json.Marshal(geminiReq)
	if err != nil {
		return fmt.Errorf("failed to marshal request payload: %w", err)
	}

	httpReq, err := http.NewRequestWithContext(ctx, "POST", endpoint, bytes.NewReader(payload))
	if err != nil {
		return fmt.Errorf("failed to create HTTP request: %w", err)
	}

	httpReq.Header.Set("Content-Type", "application/json")
	// Google's SSE format accepts standard JSON payloads but returns SSE when ?alt=sse is appended.

	resp, err := client.Do(httpReq)
	if err != nil {
		return fmt.Errorf("failed to execute upstream request: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		return fmt.Errorf("upstream returned non-200 status code: %d", resp.StatusCode)
	}

	reader := bufio.NewReader(resp.Body)
	// Create a stable synthetic ID for the duration of the stream (Gemini lacks per-chunk IDs)
	syntheticID := fmt.Sprintf("chatcmpl-%d", time.Now().UnixNano())
	headersWritten := false

	for {
		select {
		case <-ctx.Done():
			return nil
		default:
			line, err := reader.ReadString('\n')
			if err != nil {
				if err.Error() == "EOF" {
					if err := WriteSSE(w, "", "[DONE]"); err != nil {
						return err
					}
					return nil
				}
				return err
			}

			line = strings.TrimSpace(line)
			if line == "" {
				continue
			}

			if !headersWritten {
				w.Header().Set("Content-Type", "text/event-stream")
				w.Header().Set("Cache-Control", "no-cache")
				w.Header().Set("Connection", "keep-alive")
				w.WriteHeader(http.StatusOK)
				headersWritten = true
			}

			if strings.HasPrefix(line, "data: ") {
				dataStr := strings.TrimPrefix(line, "data: ")

				var event GeminiStreamResponse
				if err := json.Unmarshal([]byte(dataStr), &event); err != nil {
					continue
				}

				if len(event.Candidates) > 0 && len(event.Candidates[0].Content.Parts) > 0 {
					textChunk := event.Candidates[0].Content.Parts[0].Text
					if textChunk != "" {
						// Translate into standard OpenAI format
						openAIChunk := map[string]interface{}{
							"id":      syntheticID,
							"object":  "chat.completion.chunk",
							"created": time.Now().Unix(),
							"model":   req.Model,
							"choices": []map[string]interface{}{
								{
									"index": 0,
									"delta": map[string]string{
										"content": textChunk,
									},
								},
							},
						}

						chunkBytes, _ := json.Marshal(openAIChunk)
						if err := WriteSSE(w, "", string(chunkBytes)); err != nil {
							return err
						}
					}
				}
			}
		}
	}
}
