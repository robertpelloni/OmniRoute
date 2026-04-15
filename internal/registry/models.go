package registry

type ThinkingSupport struct {
	Min            int
	Max            int
	ZeroAllowed    bool
	DynamicAllowed bool
	Levels         []string
}

type ModelInfo struct {
	ID                  string
	Object              string
	Created             int64
	OwnedBy             string
	Type                string
	DisplayName         string
	Description         string
	ContextLength       int
	MaxCompletionTokens int
	Thinking            *ThinkingSupport
}
