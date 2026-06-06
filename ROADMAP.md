# OmniRoute Roadmap

## Phase 1: Go Architecture Port & Submodule Assimilation (Current)
- [x] Initialize `omniroute-go` project structure.
- [x] Port core configuration, database handling (SQLite), and basic server setup to Go.
- [ ] Analyze `CLIProxyAPIPlus` and integrate its superior architectural patterns and provider support into `omniroute-go`.
- [ ] Implement robust unified provider routing, fallback logic, and streaming (SSE) in Go.
- [ ] Ensure full parity with the existing Node.js `open-sse` and backend capabilities.

## Phase 2: UI & UX Overhaul
- [x] Audit the entire Next.js dashboard for missing labels, broken links, and confusing UI elements.
- [x] Add comprehensive tooltips and help text to the provider configuration and routing settings.
- [ ] Improve real-time feedback for API testing, fallback triggering, and cost tracking.
- [ ] Prepare the UI to seamlessly talk to either the Node.js backend or the new Go backend.

## Phase 3: Comprehensive Provider Expansion
- [x] Research and integrate newly emerging LLM inference providers.
- [ ] Strengthen existing provider implementations with specific error handling and robust failovers.
- [ ] Expand coverage to multimodal features (Audio, Video, Search) across all supported providers.

## Phase 4: Advanced Features & Native Frontends
- [ ] Finalize the Go API core and deprecate the Node.js backend.
- [ ] Enhance the Electron desktop app with native integrations.
- [ ] Develop additional native UI frontends as required.
- [ ] Perfect the A2A (Agent-to-Agent) protocol and MCP server integrations.
