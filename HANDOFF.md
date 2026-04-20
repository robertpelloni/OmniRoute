# OmniRoute Session Handoff Document

## Current Status (v3.6.25)

- **TokenScorer Integration**: The Go port load-balancer is now active! `internal/server/router.go` fetches all active API keys mapped to a target provider via `internal/db/providers_db.go`. It passes these to `auth.TokenScorer` (ported from the `CLIProxyAPIPlus` submodule), which calculates the optimal key to use based on latency, quota, and success rates, executing the `StreamExecutor` and dynamically tracking the results.
- **Go Provider Migration Complete (Big 3)**: The Go backend now has functional, SSE-capable adapters for all three core providers: `OpenAI`, `Anthropic`, and `Gemini` inside (`internal/providers/`).
- **Gemini Nuances**: Google's `streamGenerateContent?alt=sse` response sends chunks arrays instead of nested choices. We have mapped this dynamically inside `gemini_stream.go` back into the OpenAI `chat.completion.chunk` expected shape so clients don't see the difference.
- **Submodule Integration**: `CLIProxyAPIPlus` remains imported. Its logic for `TokenScorer` was successfully ported over and wired up.
- **UI/TypeScript**: Zed IDE OAuth flows are fully verified and untouched.

## Immediate Next Steps for Next Session

1.  **Expose Metrics**: The metrics tracked by `TokenScorer` in Go need to be surfaced back to the Next.js UI. The `api/v1/search/analytics` or the `usageAnalytics.ts` endpoints will likely need a native Go replacement that fetches data directly from the `TokenScorer` memory struct.
2.  **A2A Protocol**: Investigate migrating `open-sse/executors` (the Agent-to-Agent protocol logic) to Go.

## Notes

- Always preserve environment variables when switching bash sessions.
- Do not `git add` compiled binaries (like `omniroute` or `server.log`).
- Follow `pre_commit_instructions` carefully. Ensure all TS changes pass `npm run build` and `npm run lint`. Ensure all Go changes pass `go build` and `go test`.
- Maintain the strict `CHANGELOG.md` format: `# Changelog \n\n## [Unreleased] \n\n## [Version] - Date`. Do not blindly `sed` entire files without checking for destructive overwrites.
