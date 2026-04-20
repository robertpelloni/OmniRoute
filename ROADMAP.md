# OmniRoute Roadmap

## Vision Parity Check

- [ ] Unify all model interaction under a single, highly performant Go binary.
- [ ] Support native desktop user interfaces.
- [ ] Abstract all API provider eccentricities (OpenAI, Anthropic, Gemini, Vertex, Local) behind the OpenRouter/OpenAI compatible streaming schema.

## Phase 1: Go Port Migration (In Progress)

- [x] Initial Go project structure (`internal/`, `cmd/omniroute`)
- [x] Port memory cache layer to Go.
- [x] Port websocket and SSE streaming primitives to Go (`wsrelay`).
- [x] Scaffold HTTP server and strict Bearer auth middleware.
- [x] Implement dynamic model alias resolution in Go proxy router (`internal/db/models.go`).
- [x] Add `Stream()` support to Go `internal/providers` interface.
- [x] Migrate Anthropic provider mappings to Go `StreamExecutor`.
- [x] Migrate Gemini provider mappings to Go `StreamExecutor`.
- [ ] Replace TypeScript API proxy endpoints with native Go endpoints.

## Phase 2: Feature Assimilation

- [x] Analyze `CLIProxyAPIPlus` submodule architecture.
- [x] Integrate advanced proxy metrics/load balancing from `CLIProxyAPIPlus` into the main OmniRoute Go binary (`internal/auth/metrics.go`).
- [x] Expose `TokenScorer` native metrics to `api/v1/search/analytics` in the Next.js UI dashboards.
- [ ] Wire up load balancing and fallback chaining via Go native concurrency.
- [ ] Abstract configuration parameters for load balancer.

## Phase 3: Client Expansion

- [ ] Design native UI frontends (Webview/Wails or Native UI).
- [ ] CLI tool configuration synchronization to main UI.
