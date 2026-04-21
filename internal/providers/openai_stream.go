package providers

import (
	"bufio"
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strings"
)

// ExecuteStream implements the StreamExecutor interface for OpenAI-compatible APIs.
// It proxies the SSE stream directly back to the client.
func (p *OpenAIProvider) ExecuteStream(ctx context.Context, client *http.Client, req *ProviderRequest, apiKey string, w http.ResponseWriter) error {
	endpoint := fmt.Sprintf("%s/chat/completions", p.BaseURL)

	// Ensure stream is explicitly set to true in the payload
	req.Stream = true

	payload, err := json.Marshal(req)
	if err != nil {
		return fmt.Errorf("failed to marshal request payload: %w", err)
	}

	httpReq, err := http.NewRequestWithContext(ctx, "POST", endpoint, bytes.NewReader(payload))
	if err != nil {
		return fmt.Errorf("failed to create HTTP request: %w", err)
	}

	httpReq.Header.Set("Content-Type", "application/json")
	httpReq.Header.Set("Accept", "text/event-stream")
	httpReq.Header.Set("Authorization", fmt.Sprintf("Bearer %s", apiKey))

	resp, err := client.Do(httpReq)
	if err != nil {
		return fmt.Errorf("failed to execute upstream request: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode < 200 || resp.StatusCode >= 300 {
		return fmt.Errorf("upstream returned non-200 status code: %d", resp.StatusCode)
	}

	// Set headers for SSE
	w.Header().Set("Content-Type", "text/event-stream")
	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("Connection", "keep-alive")
	// If the server handles CORS it should be added in middleware, but just in case:
	w.Header().Set("Access-Control-Allow-Origin", "*")

	// Flush headers immediately so the client knows the stream is active
	if f, ok := w.(http.Flusher); ok {
		f.Flush()
	}

	reader := bufio.NewReader(resp.Body)
	for {
		select {
		case <-ctx.Done():
			log.Println("Client disconnected or context cancelled during stream")
			return nil
		default:
			line, err := reader.ReadString('\n')
			if err != nil {
				// EOF is expected at the end of the stream
				if err.Error() == "EOF" {
					return nil
				}
				log.Printf("Error reading stream: %v", err)
				return err
			}

			line = strings.TrimSpace(line)
			if line == "" {
				continue // Skip empty lines
			}

			// If it's a data line, simply proxy it
			if strings.HasPrefix(line, "data: ") {
				data := strings.TrimPrefix(line, "data: ")

				// Write SSE payload and flush
				if err := WriteSSE(w, "", data); err != nil {
					return fmt.Errorf("failed to write to client: %w", err)
				}

				if data == "[DONE]" {
					return nil // End of standard OpenAI stream
				}
			}
		}
	}
}
