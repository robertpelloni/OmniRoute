# OmniRoute Session Handoff Document

## Current Status (v3.6.20)

- **Go Port Foundation**: We have established the basic Go application shell in `cmd/omniroute`, wired up a sqlite database connection via `internal/db`, implemented API key lookup in `internal/db/api_keys.go`, and added a functional authentication middleware layer `internal/auth/middleware.go` which is attached to `internal/server/router.go`.
- **UI/TypeScript Fixes**: The `ZedImportCard.tsx` component is now fully functional and correctly integrated into the API Manager page. We've verified the OAuth exchange API endpoints are secure. Duplicate React props have been fixed, and extensive tooltips were added.

## Immediate Next Steps for Next Session

1.  **Advance Go Provider Routing**: The `internal/server/router.go` currently passes authenticated traffic directly to a hard-coded OpenAI handler string. We need to implement the model resolution logic (reading from the `models` DB table) to correctly resolve model aliases and dispatch requests to the appropriate target provider logic within the new Go framework.
2.  **Evaluate Submodules**: Do a deep architectural review of the `CLIProxyAPIPlus` submodule in `submodules/CLIProxyAPIPlus` to determine which patterns should be assimilated into the main `cmd/omniroute` application.
3.  **Go UI Foundation**: Review `ROADMAP.md` regarding the requested native UI frontends. Establish a framework (e.g. Wails, Fyne, or Gioui) if immediate native work is requested, but prioritize the backend proxy routing feature parity first.

## Notes

- Always preserve environment variables when switching bash sessions.
- Do not `git add` compiled binaries (like `omniroute` or `server.log`).
- Follow `pre_commit_instructions` carefully. Ensure all TS changes pass `npm run build` and `npm run lint`. Ensure all Go changes pass `go build` and `go test`.
