package providers

// AnthropicMessageRole defines the role of a message (user or assistant).
type AnthropicMessageRole string

const (
	AnthropicRoleUser      AnthropicMessageRole = "user"
	AnthropicRoleAssistant AnthropicMessageRole = "assistant"
)

// GenericMessage represents a simplified internal message for parsing.
type GenericMessage struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}
