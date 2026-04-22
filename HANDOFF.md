# OmniRoute Session Handoff Document

## Current Status (v3.6.23)

- **Go Provider Migration**: The Go backend now has functional, SSE-capable adapters for both `OpenAI` and `Anthropic` providers natively (`internal/providers/`). The Anthropic provider includes a real-time translation pipeline to map Anthropic `content_block_delta` SSE frames back into standard OpenAI `chat.completion.chunk` structures without blocking the streaming connection.
- **Dynamic Router**: Both providers are registered into the Go proxy pool (`internal/providers/manager.go`) and automatically targeted based on the DB model resolution inside `internal/server/router.go`.
- **Submodule Integration**: `CLIProxyAPIPlus` remains imported, and its logic for `TokenScorer` was ported over.
- **UI/TypeScript**: Zed IDE OAuth flows are fully verified and untouched.

## Immediate Next Steps for Next Session

1.  **Port Gemini Provider**: We have OpenAI and Anthropic. To complete the "Big Three", implement the Google Gemini adapter (`internal/providers/gemini.go`) and its `StreamExecutor`.
2.  **Activate TokenScorer**: Connect the newly added `TokenScorer` from `internal/auth/metrics.go` to the actual request pipeline in `internal/server/router.go` to balance incoming load among multiple available keys for a given model alias.
3.  **A2A Protocol**: Investigate migrating `open-sse/executors` (the Agent-to-Agent protocol logic) to Go.

## Notes

- Always preserve environment variables when switching bash sessions.
- Do not `git add` compiled binaries (like `omniroute` or `server.log`).
- Follow `pre_commit_instructions` carefully. Ensure all TS changes pass `npm run build` and `npm run lint`. Ensure all Go changes pass `go build` and `go test`.
- Maintain the strict `CHANGELOG.md` format: `# Changelog \n\n## [Unreleased] \n\n## [Version] - Date`. Do not blindly `sed` entire files without checking for destructive overwrites.
