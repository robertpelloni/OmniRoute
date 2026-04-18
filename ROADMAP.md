# OmniRoute Roadmap

## Vision Parity Check
*   [ ] Unify all model interaction under a single, highly performant Go binary.
*   [ ] Support native desktop user interfaces.
*   [ ] Abstract all API provider eccentricities (OpenAI, Anthropic, Gemini, Vertex, Local) behind the OpenRouter/OpenAI compatible streaming schema.

## Phase 1: Go Port Migration (In Progress)
*   [x] Initial Go project structure (`internal/`, `cmd/omniroute`)
*   [x] Port memory cache layer to Go.
*   [x] Port websocket and SSE streaming primitives to Go (`wsrelay`).
*   [x] Scaffold HTTP server and strict Bearer auth middleware.
*   [ ] Implement dynamic model alias resolution in Go proxy router.
*   [ ] Migrate specific provider handlers (Anthropic, Gemini) to Go.
*   [ ] Replace TypeScript API proxy endpoints with native Go endpoints.

## Phase 2: Feature Assimilation
*   [ ] Analyze `CLIProxyAPIPlus` submodule architecture.
*   [ ] Integrate advanced proxy metrics from `CLIProxyAPIPlus` into the main OmniRoute Go binary.
*   [ ] Support load balancing and fallback chaining via Go native concurrency (goroutines/channels).

## Phase 3: Client Expansion
*   [ ] Design native UI frontends (Webview/Wails or Native UI).
*   [ ] CLI tool configuration synchronization to main UI.
