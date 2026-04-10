# OmniRoute — The Ultimate Free AI Gateway

## Vision Statement
OmniRoute envisions itself as the definitive, zero-downtime, intelligent proxy for all Large Language Models (LLMs) and related AI services. It is designed to route requests across over 60+ providers seamlessly, defaulting to free and low-cost tiers while supporting automatic fallback mechanisms.

The ultimate goal is a robust, lightning-fast **Go-based core architecture** that replaces the current Node.js/TypeScript backend, delivering superior performance, lower latency, and higher concurrency. This core API will support multiple native UI frontends, starting with a refined Web dashboard and an Electron-based desktop app.

By absorbing the best features from upstream and related projects (such as CLIProxyAPIPlus), OmniRoute will unify a massive ecosystem into one streamlined, robust, and extraordinarily feature-complete platform.

## Key Goals
- **Go Port**: Methodically port all logic from the existing Next.js/Node.js backend and `open-sse` to a highly concurrent Go implementation (`omniroute-go`).
- **Comprehensive Provider Support**: Support every available LLM provider, especially new and emerging ones, providing a unified endpoint for Chat Completions, Embeddings, Image Generation, Video, Music, Audio, Reranking, and Web Search.
- **Unbreakable Fallback & Routing**: Implement robust error handling, rate-limit detection, and auto-fallback to guarantee zero downtime for end users.
- **Advanced UI & UX**: Continuously improve the dashboard and settings to provide clear labeling, descriptive tooltips, and easy configuration for new users, removing all confusion and broken components.
- **Memory & Skills System (A2A Protocol)**: Build out advanced Agent-to-Agent (A2A) communications and memory protocols to turn OmniRoute into a powerful brain for local and remote AI agents.
