# OmniRoute Session Handoff Document

## Current Status (v3.6.22)
*   **Go Port Foundation**: We now have a dynamic model routing engine (`internal/db/models.go` + `internal/server/router.go`), auth middleware, and the baseline structure for Server-Sent Events proxying (`internal/providers/stream.go`).
*   **Submodule Integration**: Successfully added `CLIProxyAPIPlus` and ported its core load balancing/metrics tracking engine into `internal/auth/metrics.go` (`TokenScorer`). This provides sophisticated scoring (latency, quota, recency) to govern token multiplexing.
*   **UI/TypeScript Fixes**: The Zed IDE OAuth credential mapping flow is 100% complete, including token extraction, DB insertion, and explicit native writing to `~/.config/zed/settings.json`.

## Immediate Next Steps for Next Session
1.  **Implement Specific Go Providers**: Now that the core HTTP proxy router, dynamic DB lookups, and SSE streaming interfaces (`StreamExecutor`) exist in Go, we need to port the explicit logic for Anthropic, Gemini, and OpenAI over to `internal/providers/`. They must implement the `StreamExecutor` interface.
2.  **Hook up TokenScorer**: Connect the newly added `TokenScorer` from `internal/auth/metrics.go` to the actual request pipeline in `internal/server/router.go` to balance incoming load among multiple available keys for a given model alias.
3.  **UI Analytics Sync**: Make sure the new Go metrics (`internal/auth/metrics.go`) are surfaced through the `api/v1/search/analytics` endpoint so the Next.js UI dashboards remain functional.

## Notes
*   Always preserve environment variables when switching bash sessions.
*   Do not `git add` compiled binaries (like `omniroute` or `server.log`).
*   Follow `pre_commit_instructions` carefully. Ensure all TS changes pass `npm run build` and `npm run lint`. Ensure all Go changes pass `go build` and `go test`.
*   Maintain the strict `CHANGELOG.md` format: `# Changelog \n\n## [Unreleased] \n\n## [Version] - Date`.
