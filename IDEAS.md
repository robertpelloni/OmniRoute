# OmniRoute Ideas & Potential Improvements

## Architecture
- **gRPC Internal API**: Since we are moving to Go, consider using gRPC for internal communication between the Go core and any future native frontends, keeping REST strictly for external LLM API compatibility.
- **In-Memory Caching (Redis/Valkey)**: For high-traffic setups, replace or augment SQLite with an in-memory cache for routing rules and rate-limit tracking to achieve microsecond latency.

## Routing & Fallbacks
- **Smart Budget Routing**: Instead of just strict fallbacks, implement a heuristic that routes based on a combination of latency, cost, and historical success rate for a specific model type.
- **Circuit Breaker Pattern**: Implement strict circuit breakers in Go so that if a provider fails X times in Y seconds, it is temporarily excluded from the fallback chain without attempting a connection.

## UI/UX
- **Interactive Routing Graph**: Create a visual node-based editor in the UI to let users visually drag-and-drop their fallback chains and provider priorities.
- **Live Traffic Logs**: Use WebSockets (or SSE) from the Go backend to stream live proxy logs and metrics directly into the dashboard.

## Code Quality
- **Table-Driven Tests**: Utilize Go's table-driven testing pattern extensively for the provider adaptors to ensure 100% coverage of all edge cases and error payloads.
