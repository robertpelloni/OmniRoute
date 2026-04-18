# OmniRoute Project Vision

## Ultimate Goal
OmniRoute is designed to be the ultimate, completely unified AI infrastructure platform. It acts as a universal proxy, router, model translation layer, and execution engine for all major (and minor) LLM inference providers.

The goal is to seamlessly abstract away the differences between OpenAI, Anthropic, Gemini, local models (Ollama, LM Studio), and dozens of other AI API formats, exposing a single, unified, high-performance, strictly typed OpenAI-compatible streaming interface.

## Core Design Tenets
1. **Uncompromising Performance**: The core routing, authentication, and streaming pipeline is being migrated entirely to Go for maximum throughput, concurrency, and minimal latency.
2. **Absolute Reliability**: The system must fail gracefully. Fallback chains, automatic background degradation testing, and circuit breakers ensure requests always succeed if an alternative model/provider is available.
3. **Comprehensive Observability**: Full transparent tracking of token usage, latency, provider availability, and cost analytics.
4. **Seamless Integration**: Easy onboarding via tools like the Zed IDE OAuth credential importer, automatic keychain scanning, and 1-click CLI profile syncing.
5. **Universal Portability**: The project aims to eventually provide native desktop UI applications in addition to the current Next.js web application, allowing local-first, privacy-focused proxying.

## Ongoing Evolution
The system is actively transitioning from a Node.js/Next.js "Open SSE" backend to a pure Go backend (`cmd/omniroute`). All new development must prioritize building robust Go equivalents for legacy TypeScript data layers.
