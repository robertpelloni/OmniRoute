# OmniRoute Submodules & Dependencies

## Active Submodules

1. **CLIProxyAPIPlus**
   - **URL**: `https://github.com/robertpelloni/CLIProxyAPIPlus`
   - **Location**: `/submodules/CLIProxyAPIPlus`
   - **Description**: An advanced AI API proxy routing core handling dynamic model mappings, token-tier failovers, and robust context window injection. We are actively assimilating its architecture natively into our Go `combo.Engine` and `Manager`.
   - **Version/Sync**: Tracked to the latest `main` branch.

## Internal Directory Structure

- `cmd/omniroute/` - Go backend entrypoint.
- `internal/` - The newly ported Go architecture.
  - `internal/auth/` - Middleware and token scoring logic.
  - `internal/combo/` - Native fallback engine combining multi-providers and dynamic scoring.
  - `internal/providers/` - Go SSE wrappers handling A2A logic for core AI APIs (OpenAI, Anthropic, Gemini).
  - `internal/server/` - Go HTTP routing.
- `src/app/` - The Next.js unified frontend dashboard.
- `open-sse/` - Legacy TypeScript MCP/SSE router layers being systematically replaced by `internal/`.
- `tests/unit/` - Expanding Go-based unit testing covering core routing and alias resolution.
