# OmniRoute Session Handoff Document

## Current Status (v3.6.24)
*   **Go Provider Migration Complete (Big 3)**: The Go backend now has functional, SSE-capable adapters for all three core providers: `OpenAI`, `Anthropic`, and `Gemini` inside (`internal/providers/`).
*   **Gemini Nuances**: Google's `streamGenerateContent?alt=sse` response sends chunks arrays instead of nested choices. We have mapped this dynamically inside `gemini_stream.go` back into the OpenAI `chat.completion.chunk` expected shape so clients don't see the difference.
*   **Dynamic Router**: All providers are successfully registered into the Go proxy pool (`internal/providers/manager.go`) and automatically targeted based on the DB model resolution inside `internal/server/router.go`.
*   **Submodule Integration**: `CLIProxyAPIPlus` remains imported. Its logic for `TokenScorer` was ported over in earlier steps.
*   **UI/TypeScript**: Zed IDE OAuth flows are fully verified and untouched.

## Immediate Next Steps for Next Session
1.  **Activate TokenScorer**: Connect the `TokenScorer` from `internal/auth/metrics.go` to the actual request pipeline in `internal/server/router.go`. When a request comes in for a model, lookup the multiple API keys for that provider, score them, and select the highest scored token to actually execute the upstream request.
2.  **A2A Protocol**: Investigate migrating `open-sse/executors` (the Agent-to-Agent protocol logic) to Go.

## Notes
*   Always preserve environment variables when switching bash sessions.
*   Do not `git add` compiled binaries (like `omniroute` or `server.log`).
*   Follow `pre_commit_instructions` carefully. Ensure all TS changes pass `npm run build` and `npm run lint`. Ensure all Go changes pass `go build` and `go test`.
*   Maintain the strict `CHANGELOG.md` format: `# Changelog \n\n## [Unreleased] \n\n## [Version] - Date`. Do not blindly `sed` entire files without checking for destructive overwrites.
