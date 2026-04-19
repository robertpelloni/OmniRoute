# OmniRoute Codebase Memory

## Architectural Observations

- **Database Shift**: The project relies heavily on SQLite. The TypeScript layer uses `better-sqlite3` (`src/lib/db/`), while the new Go port relies on `mattn/go-sqlite3` (`internal/db/`). Both must maintain schema parity during the transition.
- **Security Layer**: The TS API uses `requireManagementAuth`. The Go API uses the `internal/auth/middleware.go` which strips Bearer tokens and validates against the Go db layer.
- **Strictness**: UI components must have `title` and `aria-label` attributes.
- **Charting Data**: Using mock data like `Math.random()` in charts will result in strict rejection from project owners.

## Known Submodules

- `CLIProxyAPIPlus`: Located at `submodules/CLIProxyAPIPlus`. Used as an architectural reference for advanced proxy mapping logic to be integrated into the Go port.

## Build Artifact Constraints

- Do NOT commit `.log` files (e.g. `server.log`).
- Do NOT commit compiled Go binaries (e.g. `omniroute`).
- Always ensure `.gitignore` drops these.

## Frontend Tooling

- Next.js 14+ App Router.
- Tailwind CSS.
- Pino for logging.
- Zod for schema validation.
