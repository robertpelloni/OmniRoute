# OmniRoute Session Handoff Document

## Current Status (v3.6.26)

- **TokenScorer Integration**: The `internal/server/router.go` seamlessly interacts with `TokenScorer` to load-balance tokens based on latency and success rate. Additionally, we have created an `api/v1/metrics` endpoint in the Go backend that dumps this runtime telemetry natively.
- **Next.js UI Analytics Integration**: The legacy Next.js `/api/usage/analytics` endpoint now intercepts requests, hits the Go `/api/v1/metrics` proxy, and gracefully attaches the `goTokenScorer` results back out to the React components. This seamlessly preserves the charting logic without causing TS build errors.
- **Go Provider Migration Complete (Big 3)**: The Go backend now has functional, SSE-capable adapters for all three core providers: `OpenAI`, `Anthropic`, and `Gemini` inside (`internal/providers/`).
- **Submodule Integration**: `CLIProxyAPIPlus` remains imported. Its logic for `TokenScorer` was successfully ported over and wired up.

## Immediate Next Steps for Next Session

1.  **Refine Go Error Handling**: The `HandleChatCompletions` endpoint currently intercepts a `stream == true` request and relies heavily on implicit connection lifecycles. We should review `fallback chaining` - if `TokenScorer` returns a key that fails the upstream request (e.g. 502/429), the Go server should retry with the _next_ best token before hard failing.
2.  **A2A Protocol**: Investigate migrating `open-sse/executors` (the Agent-to-Agent protocol logic) to Go.

## Notes

- Always preserve environment variables when switching bash sessions.
- Do not `git add` compiled binaries (like `omniroute` or `server.log`).
- Follow `pre_commit_instructions` carefully. Ensure all TS changes pass `npm run build` and `npm run lint`. Ensure all Go changes pass `go build` and `go test`.
- Maintain the strict `CHANGELOG.md` format: `# Changelog \n\n## [Unreleased] \n\n## [Version] - Date`. Do not blindly `sed` entire files without checking for destructive overwrites.
