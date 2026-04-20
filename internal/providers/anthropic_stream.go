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

// AnthropicStreamEvent represents the raw event types from Claude's streaming API.
type AnthropicStreamEvent struct {
	Type string `json:"type"`
	// For delta events
	Delta struct {
		Type string `json:"type"`
		Text string `json:"text"`
	} `json:"delta"`
	// For message start
	Message struct {
		ID    string `json:"id"`
		Model string `json:"model"`
	} `json:"message"`
}

// ExecuteStream implements the StreamExecutor interface for Anthropic.
// It proxies the SSE stream and translates Anthropic format back to standard OpenAI completion format.
func (p *AnthropicProvider) ExecuteStream(ctx context.Context, client *http.Client, req *ProviderRequest, apiKey string, w http.ResponseWriter) error {
	endpoint := fmt.Sprintf("%s/messages", p.BaseURL)
	req.Stream = true

	anthropicReq, err := p.mapRequest(req)
	if err != nil {
		return fmt.Errorf("failed to map Anthropic request: %w", err)
	}

	payload, err := json.Marshal(anthropicReq)
	if err != nil {
		return fmt.Errorf("failed to marshal request payload: %w", err)
	}

	httpReq, err := http.NewRequestWithContext(ctx, "POST", endpoint, bytes.NewReader(payload))
	if err != nil {
		return fmt.Errorf("failed to create HTTP request: %w", err)
	}

	httpReq.Header.Set("Content-Type", "application/json")
	httpReq.Header.Set("Accept", "text/event-stream")
	httpReq.Header.Set("x-api-key", apiKey)
	httpReq.Header.Set("anthropic-version", p.Version)

	resp, err := client.Do(httpReq)
	if err != nil {
		return fmt.Errorf("failed to execute upstream request: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		return fmt.Errorf("upstream returned non-200 status code: %d", resp.StatusCode)
	}

	w.Header().Set("Content-Type", "text/event-stream")
	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("Connection", "keep-alive")
	if f, ok := w.(http.Flusher); ok {
		f.Flush()
	}

	reader := bufio.NewReader(resp.Body)
	var currentID string
	var currentModel string

	for {
		select {
		case <-ctx.Done():
			return nil
		default:
			line, err := reader.ReadString('\n')
			if err != nil {
				if err.Error() == "EOF" {
					return nil
				}
				return err
			}

			line = strings.TrimSpace(line)
			if line == "" {
				continue
			}

			if strings.HasPrefix(line, "data: ") {
				dataStr := strings.TrimPrefix(line, "data: ")

				var event AnthropicStreamEvent
				if err := json.Unmarshal([]byte(dataStr), &event); err != nil {
					// Ignore unparseable frames and keep streaming
					continue
				}

				switch event.Type {
				case "message_start":
					currentID = event.Message.ID
					currentModel = event.Message.Model
				case "content_block_delta":
					if event.Delta.Type == "text_delta" {
						// Translate into standard OpenAI format
						openAIChunk := map[string]interface{}{
							"id":      currentID,
							"object":  "chat.completion.chunk",
							"created": time.Now().Unix(),
							"model":   currentModel,
							"choices": []map[string]interface{}{
								{
									"index": 0,
									"delta": map[string]string{
										"content": event.Delta.Text,
									},
								},
							},
						}

						chunkBytes, _ := json.Marshal(openAIChunk)
						if err := WriteSSE(w, "", string(chunkBytes)); err != nil {
							return err
						}
					}
				case "message_stop":
					if err := WriteSSE(w, "", "[DONE]"); err != nil {
						return err
					}
					return nil
				}
			}
		}
	}
}
