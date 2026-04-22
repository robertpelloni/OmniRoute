# OmniRoute Session Handoff Document

## Current Status (v3.6.30)

- **Combo Engine Integration**: The `internal/combo/engine.go` acts as the definitive load-balancing fallback router. It gracefully sequences through available providers mapping to an alias. If a provider fails, or a specific API key within that provider triggers a 429 via the `TokenScorer`, the Go loop instantly catches the context error and retries the connection synchronously.
- **Go Provider Migration Complete (Big 3)**: The Go backend now has functional, SSE-capable adapters for all three core providers: `OpenAI`, `Anthropic`, and `Gemini` inside (`internal/providers/`).
- **Go A2A Legacy Provider Aliasing**: The `internal/providers/manager.go` has been refactored to support dynamically resolving arbitrary aliases (e.g. `cf`, `pol`, `cu`) back to base native `Executor`s, mirroring the legacy TS A2A protocol.
- **Submodule Integration**: `CLIProxyAPIPlus` remains imported. Its logic for `TokenScorer` was successfully ported over and wired up.

## Immediate Next Steps for Next Session

1.  **Migrate Remaining Routes**: Begin porting the individual `open-sse/` endpoints to the `internal/server/router.go` mux.

## Notes

- Always preserve environment variables when switching bash sessions.
- Do not `git add` compiled binaries (like `omniroute` or `server.log`).
- Follow `pre_commit_instructions` carefully. Ensure all TS changes pass `npm run build` and `npm run lint`. Ensure all Go changes pass `go build` and `go test`.
- Maintain the strict `CHANGELOG.md` format: `# Changelog \n\n## [Unreleased] \n\n## [Version] - Date`. Do not blindly `sed` entire files without checking for destructive overwrites.
