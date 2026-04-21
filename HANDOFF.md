# OmniRoute Session Handoff Document

## Current Status (v3.6.27)

- **TokenScorer & Fallback Retries**: The `internal/server/router.go` now handles explicit fallback and retry logic dynamically. If a selected token from the `TokenScorer` fails the `ExecuteStream` request natively in Go (e.g. from Anthropic hitting a 429 rate limit), the Go backend immediately records the failure internally, discards the token from the pool, picks the _next_ best token via `SelectBestToken`, and transparently retries the entire SSE proxy request without the client disconnecting or knowing an error occurred.
- **Go Provider Migration Complete (Big 3)**: The Go backend now has functional, SSE-capable adapters for all three core providers: `OpenAI`, `Anthropic`, and `Gemini` inside (`internal/providers/`).
- **Submodule Integration**: `CLIProxyAPIPlus` remains imported. Its logic for `TokenScorer` was successfully ported over and wired up.

## Immediate Next Steps for Next Session

1.  **Refine Go Streaming Headers**: The streaming implementations currently start writing headers implicitly inside the fallback loop. If an upstream returns a 429 _after_ headers are sent, the browser won't handle the retry properly. We should ensure the `ExecuteStream` interface delays writing the 200 OK header until we have verified the first successful byte from the upstream.
2.  **A2A Protocol**: Investigate migrating `open-sse/executors` (the Agent-to-Agent protocol logic) to Go.

## Notes

- Always preserve environment variables when switching bash sessions.
- Do not `git add` compiled binaries (like `omniroute` or `server.log`).
- Follow `pre_commit_instructions` carefully. Ensure all TS changes pass `npm run build` and `npm run lint`. Ensure all Go changes pass `go build` and `go test`.
- Maintain the strict `CHANGELOG.md` format: `# Changelog \n\n## [Unreleased] \n\n## [Version] - Date`. Do not blindly `sed` entire files without checking for destructive overwrites.
