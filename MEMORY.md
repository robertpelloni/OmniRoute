# OmniRoute Memory & Observations

## Codebase State
- Currently a robust Next.js/Node.js monorepo with an Electron wrapper and an `open-sse` internal package for streaming.
- Uses `better-sqlite3` heavily for configuration and state.
- Highly modular but potentially bottlenecked by Node.js for high-concurrency proxying.

## Design Preferences
- **Absolute Robustness**: Fallbacks must never fail. If a provider fails, routing must seamlessly hit the next one.
- **Go Port**: User prefers a complete, clean, highly-performant Go port of the backend, while keeping the UI in Next.js (and eventually other native frontends).
- **Extensive Documentation**: All features, inputs, and configurations must be exhaustively documented both in code (comments) and in the UI (tooltips/labels).
- **Submodule Integration**: `CLIProxyAPIPlus` has been added. Its architectural decisions should be analyzed and ported to the Go implementation.

## Ongoing Findings
- *To be populated as Go porting progresses...*
