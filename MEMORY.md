# Codebase Observations

- Go compilation happens in `cmd/omniroute/main.go`.
- TypeScript proxy is initialized via `open-sse/chatCore.ts`.
- Legacy routing uses exact matching and A2A aliases. This logic is natively mapped in `internal/providers/manager.go`.
