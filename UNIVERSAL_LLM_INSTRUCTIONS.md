# Universal LLM Instructions for OmniRoute Development

## Guiding Principles

1. **Understand Before Modifying:** Thoroughly research the TypeScript architecture (`open-sse`, `src/app`) before writing the equivalent Go port. Do not break existing Node.js workflows.
2. **Robust Go Ports:** All proxy features (Token Scoring, Alias Resolution, Context Window mappings) must be natively supported in Go `internal/`.
3. **Graceful Fallbacks:** SSE streams should defer writing `200 OK` headers until valid bytes are received to catch `429/502` errors for automatic multi-provider fallback.
4. **Git Discipline:** Ensure feature branches are cleanly updated and synchronized with `main` before pushing. Resolve submodules intelligently using `git merge` strategies that favor stability without losing code.
5. **Memory & Documentation:** Continuously update `HANDOFF.md`, `MEMORY.md`, and `ROADMAP.md` before concluding any session.

## Versioning & Changelogs

- Maintain single source of truth for versioning synchronizing `package.json`, `openapi.yaml`, and `CHANGELOG.md`.
- Never truncate `CHANGELOG.md`. Append versions safely.

## Component & Submodule Directives

- **Submodules:** Pull in `CLIProxyAPIPlus` and natively assimilate its routing techniques into Go. Check out and update submodules explicitly.
- **Go MCP Integration:** Scaffold and build the native Go MCP transport layer in `mcp-server-go`.
