# OmniRoute Session Handoff Document

## Current Status (v3.6.28)

- **TokenScorer & Fallback Retries**: The `internal/server/router.go` handles explicit fallback and retry logic dynamically. The streaming implementations (`internal/providers/*_stream.go`) have been fortified to ensure `200 OK` headers are _only_ explicitly sent upon successful connection confirmation, preventing the browser from caching broken streams during fallback loop evaluations.
- **Go Provider Migration Complete (Big 3)**: The Go backend now has functional, SSE-capable adapters for all three core providers: `OpenAI`, `Anthropic`, and `Gemini` inside (`internal/providers/`).
- **Submodule Integration**: `CLIProxyAPIPlus` remains imported. Its logic for `TokenScorer` was successfully ported over and wired up.

## Immediate Next Steps for Next Session

1.  **Refactor Node/TS Executors to Go**: The user requested that we port `getExecutor` from `open-sse/executors/index.ts` over to the Go codebase. This should likely be mounted directly to our dynamic `ProviderManager` struct and registered dynamically rather than using strict manual TS switches.
2.  **A2A Protocol**: Investigate migrating `open-sse/executors` (the Agent-to-Agent protocol logic) to Go.

## Notes

- Always preserve environment variables when switching bash sessions.
- Do not `git add` compiled binaries (like `omniroute` or `server.log`).
- Follow `pre_commit_instructions` carefully. Ensure all TS changes pass `npm run build` and `npm run lint`. Ensure all Go changes pass `go build` and `go test`.
- Maintain the strict `CHANGELOG.md` format: `# Changelog \n\n## [Unreleased] \n\n## [Version] - Date`. Do not blindly `sed` entire files without checking for destructive overwrites.
