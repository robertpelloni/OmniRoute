# OmniRoute TODO List

## Immediate Tasks
- [x] Set up `omniroute-go` module and directory structure.
- [x] Create initial Go web server using a fast framework/router (e.g., Gin, Fiber, or stdlib net/http 1.22+).
- [x] Map existing SQLite schema and create Go models/queries for configuration management.
- [ ] Add `CLIProxyAPIPlus` feature analysis matrix.

## UI Improvements
- [x] Go through Next.js dashboard pages and identify areas needing tooltips.
- [x] Add tooltips to the Provider Settings page.
- [x] Add descriptive labels for Route prioritization and Fallback options.
- [x] Fix any currently non-functioning buttons or state issues in the UI.

## Backend Porting (Go)
- [ ] Port `proxy.ts` and `open-sse/` logic to Go.
- [ ] Port `src/store/` (database operations) to Go.
- [ ] Implement provider interfaces and adaptors in Go.

## Provider Integrations
- [x] Review current provider list in TypeScript and document missing providers from `CLIProxyAPIPlus`.
- [ ] Implement robust error parsing to accurately trigger fallbacks.
