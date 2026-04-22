# Changelog

## [Unreleased]
## [3.6.30] - 2024-04-10
### Added
- Implemented robust `combo.Engine` inside `internal/combo/engine.go` to securely handle routing across multi-provider fallbacks.
- Updated `internal/server/router.go` to transparently route both standard stream chunks and synchronous payloads over combos, attempting each provider in the DB chain sequentially and seamlessly skipping those with 500s or rate-limits until a successful completion yields.

## [3.6.29] - 2024-04-10
### Added
- Completed Go port of TS A2A protocol `getExecutor` routing alias logic into `internal/providers/manager.go`. The native Go load-balancer now intrinsically understands routing aliases like "cu", "pol", and automatically treats unknown providers like "openrouter" as an `OpenAIProvider` stream.

## [3.6.28] - 2024-04-10
### Fixed
- Hardened Go `StreamExecutor` headers implementation (`internal/providers/*_stream.go`) to defer writing `200 OK` explicitly until the first bytes are successfully retrieved from upstream. This prevents empty headers from locking the client connection and allows seamless proxy fallback retries if the remote provider fails mid-connection.

## [3.6.27] - 2024-04-10
### Added
- Implemented robust proxy fallback retry logic directly into the Go `internal/server/router.go` layer.
- If a target `StreamExecutor` or standard `Execute` call fails due to upstream unreliability (e.g. 429/502), the `TokenScorer` instantly penalizes the key and the router transparently retries the identical stream parameters using the next best optimal token in the pool, shielding clients from failure.

## [3.6.26] - 2024-04-10
### Added
- Added `/api/v1/metrics` handler to the Go HTTP server (`internal/server/router.go`) to dump the live, in-memory `TokenScorer` state out as JSON.
- Modified `src/app/api/usage/analytics/route.ts` to seamlessly fetch the aforementioned metrics and append them onto the existing UI charts payloads as `goTokenScorer`.

## [3.6.25] - 2024-04-10
### Added
- Integrated `TokenScorer` from `internal/auth/metrics.go` directly into the `internal/server/router.go` execution pipeline, providing advanced, latency-aware provider credential load-balancing dynamically for every request.
- Added SQLite query logic (`GetActiveTokensForProvider`) inside `internal/db/providers_db.go` to extract all available upstream credentials for targeted model routing.

## [3.6.24] - 2024-04-10
### Added
- Completed `GeminiProvider` Go port (`internal/providers/gemini.go`).
- Implemented `GeminiProvider` Server-Sent Events stream translation natively in Go (`internal/providers/gemini_stream.go`), adapting Google's `streamGenerateContent?alt=sse` response payload back to standard OpenAI format.

## [3.6.23] - 2024-04-10
### Added
- Completed `AnthropicProvider` Go port (`internal/providers/anthropic.go`).
- Added native Server-Sent Events stream translation for Claude models in Go (`internal/providers/anthropic_stream.go`), converting Anthropic Messages API format back to OpenAI chunks.

## [3.6.22] - 2024-04-10
### Added
- Ported advanced dynamic token load balancing algorithm (`TokenScorer`) from `CLIProxyAPIPlus` to `internal/auth/metrics.go`.
- Scaffolding for native Go SSE proxying via `StreamExecutor` interface in `internal/providers/stream.go`.


## [3.6.21] - 2024-04-10

### Added

- Completed `ZedToolCard` integration for writing configurations directly to `~/.config/zed/settings.json` locally using `keyId`.

# Changelog

## [Unreleased]
## [3.6.30] - 2024-04-10
### Added
- Implemented robust `combo.Engine` inside `internal/combo/engine.go` to securely handle routing across multi-provider fallbacks.
- Updated `internal/server/router.go` to transparently route both standard stream chunks and synchronous payloads over combos, attempting each provider in the DB chain sequentially and seamlessly skipping those with 500s or rate-limits until a successful completion yields.

## [3.6.29] - 2024-04-10
### Added
- Completed Go port of TS A2A protocol `getExecutor` routing alias logic into `internal/providers/manager.go`. The native Go load-balancer now intrinsically understands routing aliases like "cu", "pol", and automatically treats unknown providers like "openrouter" as an `OpenAIProvider` stream.

## [3.6.28] - 2024-04-10
### Fixed
- Hardened Go `StreamExecutor` headers implementation (`internal/providers/*_stream.go`) to defer writing `200 OK` explicitly until the first bytes are successfully retrieved from upstream. This prevents empty headers from locking the client connection and allows seamless proxy fallback retries if the remote provider fails mid-connection.

## [3.6.27] - 2024-04-10
### Added
- Implemented robust proxy fallback retry logic directly into the Go `internal/server/router.go` layer.
- If a target `StreamExecutor` or standard `Execute` call fails due to upstream unreliability (e.g. 429/502), the `TokenScorer` instantly penalizes the key and the router transparently retries the identical stream parameters using the next best optimal token in the pool, shielding clients from failure.

## [3.6.26] - 2024-04-10
### Added
- Added `/api/v1/metrics` handler to the Go HTTP server (`internal/server/router.go`) to dump the live, in-memory `TokenScorer` state out as JSON.
- Modified `src/app/api/usage/analytics/route.ts` to seamlessly fetch the aforementioned metrics and append them onto the existing UI charts payloads as `goTokenScorer`.

## [3.6.25] - 2024-04-10
### Added
- Integrated `TokenScorer` from `internal/auth/metrics.go` directly into the `internal/server/router.go` execution pipeline, providing advanced, latency-aware provider credential load-balancing dynamically for every request.
- Added SQLite query logic (`GetActiveTokensForProvider`) inside `internal/db/providers_db.go` to extract all available upstream credentials for targeted model routing.

## [3.6.24] - 2024-04-10
### Added
- Completed `GeminiProvider` Go port (`internal/providers/gemini.go`).
- Implemented `GeminiProvider` Server-Sent Events stream translation natively in Go (`internal/providers/gemini_stream.go`), adapting Google's `streamGenerateContent?alt=sse` response payload back to standard OpenAI format.

## [3.6.23] - 2024-04-10
### Added
- Completed `AnthropicProvider` Go port (`internal/providers/anthropic.go`).
- Added native Server-Sent Events stream translation for Claude models in Go (`internal/providers/anthropic_stream.go`), converting Anthropic Messages API format back to OpenAI chunks.

## [3.6.22] - 2024-04-10
### Added
- Ported advanced dynamic token load balancing algorithm (`TokenScorer`) from `CLIProxyAPIPlus` to `internal/auth/metrics.go`.
- Scaffolding for native Go SSE proxying via `StreamExecutor` interface in `internal/providers/stream.go`.


## [3.6.21] - 2024-04-10

### Added

- Completed `ZedToolCard` integration for writing configurations directly to `~/.config/zed/settings.json` locally using `keyId`.

## [3.6.21] - 2024-04-10

### Added

- Created Zed OAuth token exchange callback handler at `api/zed/callback/route.ts`

## [3.6.20] - 2024-04-10

### Added

- Successfully integrated and verified `ZedImportCard.tsx` into the API Manager settings tab.
- Submodule `CLIProxyAPIPlus` tracking verified at `/submodules/CLIProxyAPIPlus`.
- Updated Go Proxy routing foundation with `cmd/omniroute` executable entry point.
- Expanded Go Proxy server (`internal/server/router.go`) to dynamically resolve models.

### Fixed

- Fixed duplicate props issue in Next.js `ComboDefaultsTab.tsx` configuration component.

## [3.6.19] - 2024-04-10

### Added

- Go backend router scaffolding (`cmd/omniroute`).
- Go database layer and migrations for SQLite via `mattn/go-sqlite3`.
- Authenticated middleware layer in Go connecting to SQLite API key definitions.
- New `ZedImportCard` component for Zed IDE OAuth flow.
- Extensive tooltips and ARIA label injections across the entire dashboard UI for enhanced accessibility.

### Changed

- Refactored `AIPerformanceChart` to remove mocked math data and strict typing issues.
- Fixed strict type errors in `/api/oauth/zed/import/route.ts` error handlers.

All notable changes to this project will be documented in this file.

## [3.6.20] - 2024-04-10

### Added

- Successfully integrated and verified `ZedImportCard.tsx` into the API Manager settings tab.
- Submodule `CLIProxyAPIPlus` tracking verified at `/submodules/CLIProxyAPIPlus`.
- Updated Go Proxy routing foundation with `cmd/omniroute` executable entry point.

### Fixed

- Fixed duplicate props issue in Next.js `ComboDefaultsTab.tsx` configuration component.
- Improved accessibility by completing sweeping pass of Next.js UI component `title` injection.

## [3.6.19] - 2024-04-10

### Added

- Go backend router scaffolding (`cmd/omniroute`).
- Go database layer and migrations for SQLite via `mattn/go-sqlite3`.
- Authenticated middleware layer in Go connecting to SQLite API key definitions.
- New `ZedImportCard` component for Zed IDE OAuth flow.
- Extensive tooltips and ARIA label injections across the entire dashboard UI for enhanced accessibility.

### Changed

- Refactored `AIPerformanceChart` to remove mocked math data and strict typing issues.
- Fixed strict type errors in `/api/oauth/zed/import/route.ts` error handlers.
