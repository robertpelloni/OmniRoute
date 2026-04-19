package providers

import (
	"context"
	"io"
	"net/http"
)

// StreamExecutor extends the base provider interface to handle SSE connections.
// Any provider that supports streaming must implement this interface.
type StreamExecutor interface {
	// ExecuteStream initiates a streaming connection to the upstream provider
	// and writes the Server-Sent Events directly to the provided ResponseWriter.
	ExecuteStream(ctx context.Context, client *http.Client, req *ProviderRequest, apiKey string, w http.ResponseWriter) error
}

// WriteSSE is a helper utility to write a formatted SSE payload to an io.Writer.
func WriteSSE(w io.Writer, event string, data string) error {
	var err error
	if event != "" {
		_, err = w.Write([]byte("event: " + event + "\n"))
		if err != nil {
			return err
		}
	}

	_, err = w.Write([]byte("data: " + data + "\n\n"))
	if err != nil {
		return err
	}

	// If the writer is an http.Flusher, flush the buffer immediately
	if f, ok := w.(http.Flusher); ok {
		f.Flush()
	}

	return nil
}
