# omniroute — Agent Guidelines

## Project

Unified AI proxy/router — route any LLM through one endpoint. Multi-provider support
<<<<<<< HEAD
with **160+ providers** (OpenAI, Anthropic, Gemini, DeepSeek, Groq, xAI, Mistral, Fireworks,
Cohere, NVIDIA, Cerebras, Pollinations, Puter, Cloudflare AI, HuggingFace, DeepInfra,
SambaNova, Meta Llama API, Moonshot AI, AI21 Labs, Databricks, Snowflake, and many more)
with **MCP Server** (37 tools), **A2A v0.3 Protocol**, and **Electron desktop app**.

## Stack

- **Runtime**: Next.js 16 (App Router), Node.js `>=20.20.2 <21`, `>=22.22.2 <23`, or `>=24.0.0 <25`, ES Modules (`"type": "module"`)
=======
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
with **60+ providers** (OpenAI, Anthropic, Gemini, DeepSeek, Groq, xAI, Mistral, Fireworks,
Cohere, NVIDIA, Cerebras, Pollinations, Puter, Cloudflare AI, HuggingFace, and many more)
with **MCP Server** (25 tools), **A2A v0.3 Protocol**, and **Electron desktop app**.

## Stack

- **Runtime**: Next.js 16 (App Router), Node.js ≥18 <24, ES Modules (`"type": "module"`)
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
- **Language**: TypeScript 5.9 (`src/`) + JavaScript (`open-sse/`, `electron/`)
- **Database**: better-sqlite3 (SQLite) — `DATA_DIR` configurable, default `~/.omniroute/`
- **Streaming**: SSE via `open-sse` internal workspace package
- **Styling**: Tailwind CSS v4
<<<<<<< HEAD
- **i18n**: next-intl with 40+ languages
=======
- **i18n**: next-intl with 30 languages
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
- **Desktop**: Electron (cross-platform: Windows, macOS, Linux)
- **Schemas**: Zod v4 for all API / MCP input validation

---

## Build, Lint, and Test Commands

| Command                             | Description                       |
| ----------------------------------- | --------------------------------- |
| `npm run dev`                       | Start Next.js dev server          |
| `npm run build`                     | Production build (isolated)       |
| `npm run start`                     | Run production build              |
| `npm run build:cli`                 | Build CLI package                 |
| `npm run lint`                      | ESLint on all source files        |
| `npm run typecheck:core`            | TypeScript core type checking     |
| `npm run typecheck:noimplicit:core` | Strict checking (no implicit any) |
| `npm run check`                     | Run lint + test                   |
| `npm run check:cycles`              | Check for circular dependencies   |
| `npm run electron:dev`              | Run Electron app in dev mode      |
| `npm run electron:build`            | Build Electron app for current OS |

### Running Tests

```bash
# All tests (unit + vitest + ecosystem + e2e)
npm run test:all

# Single test file (Node.js native test runner — most tests use this)
<<<<<<< HEAD
node --import tsx/esm --test tests/unit/your-file.test.ts
node --import tsx/esm --test tests/unit/plan3-p0.test.ts
node --import tsx/esm --test tests/unit/fixes-p1.test.ts
node --import tsx/esm --test tests/unit/security-fase01.test.ts

# Integration tests
node --import tsx/esm --test tests/integration/*.test.ts
=======
node --import tsx/esm --test tests/unit/your-file.test.mjs
node --import tsx/esm --test tests/unit/plan3-p0.test.mjs
node --import tsx/esm --test tests/unit/fixes-p1.test.mjs
node --import tsx/esm --test tests/unit/security-fase01.test.mjs

# Integration tests
node --import tsx/esm --test tests/integration/*.test.mjs

# Vitest (MCP server, autoCombo)
npm run test:vitest

# E2E with Playwright
npm run test:e2e

# Protocol clients E2E (MCP transports, A2A)
npm run test:protocols:e2e

# Ecosystem compatibility tests
npm run test:ecosystem

# Coverage (60% minimum for statements, lines, functions, and branches)
npm run test:coverage
```

### PR Coverage Policy

- `npm run test:coverage` is the PR coverage gate in CI.
- The repository minimum is **60%** for statements, lines, functions, and branches.
- If a PR changes production code in `src/`, `open-sse/`, `electron/`, or `bin/`, it must include or update automated tests in the same PR.
- For agent-driven review or coding flows: if coverage is below the gate or source changes ship without tests, do not stop at reporting. Add or update tests first, rerun the gate, and only then ask for confirmation.

---

## Code Style Guidelines

### Formatting (Prettier — enforced via lint-staged)

2 spaces · semicolons required · double quotes (`"`) · 100 char width · es5 trailing commas.
Always run `prettier --write` on changed files.

### TypeScript

- **Target**: ES2022 · **Module**: `esnext` · **Resolution**: `bundler`
- `strict: false` — prefer explicit types, don't rely on inference
- Path aliases: `@/*` → `src/`, `@omniroute/open-sse` → `open-sse/`, `@omniroute/open-sse/*` → `open-sse/*`

### ESLint Rules

- **Security (error, everywhere)**: `no-eval`, `no-implied-eval`, `no-new-func`
- **Relaxed in `open-sse/` and `tests/`**: `@typescript-eslint/no-explicit-any` = warn
- React hooks rules and `@next/next/no-assign-module-variable` disabled in `open-sse/` and `tests/`

### Naming

| Element             | Convention                       | Example                              |
| ------------------- | -------------------------------- | ------------------------------------ |
| Files               | camelCase / kebab-case           | `chatCore.ts`, `tokenHealthCheck.ts` |
| React components    | PascalCase                       | `Dashboard.tsx`, `ProviderCard.tsx`  |
| Functions/variables | camelCase                        | `getHealth()`, `switchCombo()`       |
| Constants           | UPPER_SNAKE                      | `MAX_RETRIES`, `DEFAULT_TIMEOUT`     |
| Interfaces          | PascalCase (`I` prefix optional) | `ProviderConfig`                     |
| Enums               | PascalCase (members too)         | `LogLevel.Error`                     |

### Imports

- **Order**: external → internal (`@/`, `@omniroute/open-sse`) → relative (`./`, `../`)
- **No barrel imports** from `localDb.ts` — import from the specific `db/` module instead

### Error Handling

- try/catch with specific error types; always log with context (pino logger)
- Never silently swallow errors in SSE streams — use abort signals for cleanup
- Return proper HTTP status codes (4xx client, 5xx server)

### Security

- **NEVER** commit API keys, secrets, or credentials
- Validate all user inputs with Zod schemas
- Auth middleware required on all API routes
- Never log SQLite encryption keys
- Sanitize user content (dompurify for HTML)

---

## Architecture

### Data Layer (`src/lib/db/`)

All persistence uses SQLite through domain-specific modules:
`core.ts`, `providers.ts`, `models.ts`, `combos.ts`, `apiKeys.ts`, `settings.ts`,
`backup.ts`, `proxies.ts`, `prompts.ts`, `webhooks.ts`, `detailedLogs.ts`,
`domainState.ts`, `registeredKeys.ts`, `quotaSnapshots.ts`, `modelComboMappings.ts`,
`cliToolState.ts`, `encryption.ts`, `readCache.ts`, `secrets.ts`, `stateReset.ts`,
`contextHandoffs.ts`.
Schema migrations live in `db/migrations/` and run via `migrationRunner.ts`.
`src/lib/localDb.ts` is a **re-export layer only** — never add logic there.

### Request Pipeline (`open-sse/`)

`chatCore.ts` → executor → upstream provider. Translations in `open-sse/translator/`.

>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
**Handlers** (`open-sse/handlers/`): `chatCore.ts`, `responsesHandler.ts`, `embeddings.ts`,
`imageGeneration.ts`, `videoGeneration.ts`, `musicGeneration.ts`, `audioSpeech.ts`,
`audioTranscription.ts`, `moderations.ts`, `rerank.ts`, `search.ts`.

**Upstream headers**: merged after default auth; same header name replaces executor value.
**T5 intra-family fallback** recomputes headers using only the fallback model id.
Forbidden header names: `src/shared/constants/upstreamHeaders.ts` — keep sanitize,
Zod schemas, and unit tests aligned when editing.

### Provider Categories

- **Free** (4): Qoder AI, Qwen Code, Gemini CLI (deprecated), Kiro AI
- **OAuth** (8): Claude Code, Antigravity, Codex, GitHub Copilot, Cursor, Kimi Coding, Kilo Code, Cline
<<<<<<< HEAD
- **API Key** (120+): OpenAI, Anthropic, Gemini, DeepSeek, Groq, xAI, Mistral, Perplexity,
=======
- **API Key** (48+): OpenAI, Anthropic, Gemini, DeepSeek, Groq, xAI, Mistral, Perplexity,
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  Together, Fireworks, Cerebras, Cohere, NVIDIA, Nebius, SiliconFlow, Hyperbolic,
  HuggingFace, OpenRouter, Vertex AI, Cloudflare AI, Scaleway, AI/ML API, Pollinations,
  Puter, Longcat, Alibaba, Kimi, Minimax, Blackbox, Synthetic, Kilo Gateway,
  Z.AI, GLM, Deepgram, AssemblyAI, ElevenLabs, Cartesia, PlayHT, Inworld,
  NanoBanana, SD WebUI, ComfyUI, Ollama Cloud, Perplexity Search, Serper, Brave, Exa,
<<<<<<< HEAD
  Tavily, OpenCode Zen/Go, Bailian Coding Plan, DeepInfra, Vercel AI Gateway,
  Lambda AI, SambaNova, nScale, OVHcloud AI, Baseten, PublicAI, Moonshot AI,
  Meta Llama API, v0 (Vercel), Morph, Featherless AI, FriendliAI, LlamaGate,
  Galadriel, Weights & Biases Inference, Volcengine, AI21 Labs, Venice.ai,
  Codestral, Upstage, Maritalk, Xiaomi MiMo, Inference.net, NanoGPT, Predibase,
  Bytez, Heroku AI, Databricks, Snowflake Cortex, GigaChat (Sber), CrofAI,
  AgentRouter, ChatGPT Web, Baidu Qianfan, AWS Polly, RunwayML, GitLab Duo,
  Amazon Q, Empower, Poe, and many more.
- **Self-Hosted** (8+): LM Studio, vLLM, Lemonade, Llamafile, Triton, Docker Model Runner, Xinference, Oobabooga
=======
  Tavily, OpenCode Zen/Go, Bailian Coding Plan, and more.
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
- **Custom**: OpenAI-compatible (`openai-compatible-*`) and Anthropic-compatible (`anthropic-compatible-*`) prefixes

Providers are registered in `src/shared/constants/providers.ts` with Zod validation at module load.

### Executors (`open-sse/executors/`)

Provider-specific request executors: `base.ts`, `default.ts`, `cursor.ts`, `codex.ts`,
`antigravity.ts`, `github.ts`, `gemini-cli.ts`, `kiro.ts`, `qoder.ts`, `vertex.ts`,
`cloudflare-ai.ts`, `opencode.ts`, `pollinations.ts`, `puter.ts`.

<<<<<<< HEAD
#### Executor Internals

- **`base.ts`** (`BaseExecutor`): Abstract base with `buildUrl()`, `buildHeaders()`,
  `transformRequest()`, retry logic (exponential backoff), and `execute()`. Subclasses
  override URL/header/transform methods for provider-specific behavior.
- **`default.ts`** (`DefaultExecutor extends BaseExecutor`): Handles most OpenAI-compatible
  providers. Reads provider config from `providerRegistry.ts` to resolve base URL, auth
  header format, and request transformations.
- **`getExecutor()`** (`executors/index.ts`): Factory that returns the correct executor
  instance based on provider ID. Provider-specific executors (Cursor, Codex, Vertex, etc.)
  override only what differs from the default.

=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
### Translator (`open-sse/translator/`)

Translates between API formats (OpenAI-format ↔ Anthropic, Gemini, etc.).
Includes request/response translators with helpers for image handling.

<<<<<<< HEAD
#### Translator Internals

- **`translator/index.ts`**: Exports `translateRequest()` and format constants. Called by
  `chatCore.ts` before executor dispatch.
- **Flow**: `translateRequest(body, sourceFormat, targetFormat)` → detects source format
  (OpenAI, Anthropic, Gemini) → applies the matching translator module → returns
  transformed body ready for the target provider.
- **Response translation** runs in reverse after upstream response, converting back to
  the client's expected format.

=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
### Transformer (`open-sse/transformer/`)

`responsesTransformer.ts` — transforms Responses API format to/from Chat Completions format.

<<<<<<< HEAD
#### Transformer Internals

- **`createResponsesApiTransformStream()`**: Returns a `TransformStream` that converts
  Chat Completions SSE chunks (`data: {"choices":[...]}`) into Responses API SSE events
  (`response.output_item.added`, `response.output_text.delta`, etc.).
- Used when the client sends a Responses API request: the request is internally converted
  to Chat Completions format, dispatched normally, and the response is piped through this
  transform stream before reaching the client.

=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
### Services (`open-sse/services/`)

36+ service modules including: `combo.ts` (routing engine), `usage.ts`, `tokenRefresh.ts`,
`rateLimitManager.ts`, `accountFallback.ts`, `sessionManager.ts`, `wildcardRouter.ts`,
`autoCombo/`, `intentClassifier.ts`, `taskAwareRouter.ts`, `thinkingBudget.ts`,
`contextManager.ts`, `modelDeprecation.ts`, `modelFamilyFallback.ts`,
`emergencyFallback.ts`, `workflowFSM.ts`, `backgroundTaskDetector.ts`, `ipFilter.ts`,
<<<<<<< HEAD
`signatureCache.ts`, `volumeDetector.ts`, `contextHandoff.ts`, `compression/` (prompt
compression pipeline), and more.

#### Prompt Compression Pipeline (`compression/`)

Modular prompt compression that runs proactively before the existing reactive context manager.

- **`strategySelector.ts`**: Selects compression mode based on config, compression combo assignments,
  combo overrides, auto-trigger thresholds, and defaults. Priority: assigned compression combo >
  combo override > auto-trigger > default mode > off.
- **`lite.ts`**: 5 lite-mode techniques: `collapseWhitespace`, `dedupSystemPrompt`,
  `compressToolResults`, `removeRedundantContent`, `replaceImageUrls`. Target: 10-15% savings at
  <1ms latency.
- **`caveman.ts` / `cavemanRules.ts`**: Caveman-style semantic condensation backed by built-in
  rules plus file-loaded language packs under `compression/rules/`.
- **`engines/rtk/`**: Rule-based terminal/tool-output compression inspired by RTK patterns. Detects
  command output classes, applies JSON filter packs, deduplicates repeated lines, strips ANSI/code
  noise, and preserves errors/actionable context. The RTK JSON DSL supports replace,
  match-output short-circuit, strip/keep, per-line truncation, head/tail/max-line truncation,
  inline tests, trust-gated project/global custom filters, and optional redacted raw-output
  retention for authenticated recovery.
- **`engines/registry.ts`**: Registers engines (`caveman`, `rtk`) and powers stacked pipelines.
- **`stats.ts`**: Per-request compression stats tracking (original tokens, compressed tokens,
  savings %, techniques used, engine breakdown, compression combo id).
- **`types.ts`**: `CompressionMode` (off/lite/standard/aggressive/ultra/rtk/stacked),
  `CompressionConfig`, `CompressionStats`, `CompressionResult`.
- DB settings in `src/lib/db/compression.ts`, compression combos in
  `src/lib/db/compressionCombos.ts`, API routes under `src/app/api/settings/compression/`,
  `src/app/api/context/*`, and preview/language-pack routes under `src/app/api/compression/*`.

#### Combo Routing Engine (`combo.ts`)

- **`handleComboChat()`**: Entry point for combo-routed requests. Receives the combo config
  and iterates through targets in order until one succeeds or all fail.
- **`resolveComboTargets()`**: Expands a combo configuration into an ordered array of
  `ResolvedComboTarget[]`, each specifying provider + model + account + credentials.
- **Strategies** (13): priority, weighted, fill-first, round-robin, P2C, random, least-used,
  cost-optimized, strict-random, auto, lkgp, context-optimized, context-relay.
- Each target calls **`handleSingleModel()`** which wraps `handleChatCore()` with
  per-target error handling and circuit breaker checks.
=======
`signatureCache.ts`, `volumeDetector.ts`, `contextHandoff.ts`, and more.
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### Domain Layer (`src/domain/`)

Policy engine modules: `policyEngine.ts`, `comboResolver.ts`, `costRules.ts`,
`degradation.ts`, `fallbackPolicy.ts`, `lockoutPolicy.ts`, `modelAvailability.ts`,
`providerExpiration.ts`, `quotaCache.ts`, `responses.ts`, `configAudit.ts`.

### MCP Server (`open-sse/mcp-server/`)

<<<<<<< HEAD
37 tools, 3 transports (stdio / SSE / Streamable HTTP). Scoped auth (10 scopes), Zod schemas.

**Core tools** (20): get_health, list_combos, get_combo_metrics, switch_combo, check_quota,
route_request, cost_report, list_models_catalog, web_search, simulate_route, set_budget_guard,
set_routing_strategy, set_resilience_profile, test_combo, get_provider_metrics,
best_combo_for_task, explain_route, get_session_snapshot, db_health_check, sync_pricing.

**Cache tools** (2): cache_stats, cache_flush.

**Compression tools** (5): compression_status, compression_configure, set_compression_engine,
list_compression_combos, compression_combo_stats.

**1proxy tools** (3): oneproxy_fetch, oneproxy_rotate, oneproxy_stats.
=======
25 tools, 3 transports (stdio / SSE / Streamable HTTP). Scoped auth (10 scopes), Zod schemas.

**Core tools** (18): get_health, list_combos, get_combo_metrics, switch_combo, check_quota,
route_request, cost_report, list_models_catalog, simulate_route, set_budget_guard,
set_routing_strategy, set_resilience_profile, test_combo, get_provider_metrics,
best_combo_for_task, explain_route, get_session_snapshot, sync_pricing.
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

**Memory tools** (3): memory_search, memory_add, memory_clear.

**Skill tools** (4): skills_list, skills_enable, skills_execute, skills_executions.

<<<<<<< HEAD
#### MCP Internals

- **Tool registration**: Each tool is an object with `{ name, description, inputSchema: ZodSchema,
handler: async (args) => {...} }`. Zod validates inputs before the handler fires.
- **`createMcpServer()`** and **`startMcpStdio()`** exported from `mcp-server/index.ts`.
  `createMcpServer()` wires all tool sets; `startMcpStdio()` launches the stdio transport.
- **Transports**: stdio (CLI `omniroute --mcp`), SSE (`/api/mcp/sse`), Streamable HTTP
  (`/api/mcp/stream`). All share the same tool/scope engine.
- **Scopes** (10): Control which tool categories an API key can access. Enforcement happens
  before handler dispatch.
- **Audit**: Every tool invocation is logged to SQLite (`mcp_audit` table) with tool name,
  args, success/failure, API key attribution, and timestamp.

### A2A Server (`src/lib/a2a/`)

JSON-RPC 2.0, SSE streaming, Task Manager with TTL cleanup.
Agent Card at `/.well-known/agent.json`.
Skills: `quotaManagement.ts`, `smartRouting.ts`.

#### A2A Internals

- **`taskManager.ts`**: State machine lifecycle for tasks: `submitted → working →
completed | failed | canceled`. Tasks have TTL and are cleaned up automatically.
- **JSON-RPC methods**: `message/send` (sync), `message/stream` (SSE), `tasks/get`,
  `tasks/cancel`. Dispatched via `POST /a2a`.
- **Skills**: Registered in a DB-backed registry. Each skill receives task context
  (messages, metadata) and returns structured results. `quotaManagement.ts` summarizes
  quota; `smartRouting.ts` recommends routing decisions.
- **Agent Card**: `/.well-known/agent.json` exposes capabilities, skills, and metadata
  for client auto-discovery.

=======
### A2A Server (`src/lib/a2a/`)

JSON-RPC 2.0, SSE streaming, Task Manager with TTL cleanup(
Agent Card at `/.well-known/agent.json`.
Skills: `quotaManagement.ts`, `smartRouting.ts`.

>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
### ACP Module (`src/lib/acp/`)

Agent Communication Protocol registry and manager.

### Memory System (`src/lib/memory/`)

Extraction, injection, retrieval, summarization, and store modules for persistent
conversational memory across sessions.

### Skills System (`src/lib/skills/`)

Extensible skill framework: registry, executor, sandbox, built-in skills,
custom skill support, interception, and injection.

<<<<<<< HEAD
#### Skills Internals

- **`registry.ts`**: DB-backed skill registration and discovery. Skills have metadata
  (name, description, version, enabled status) stored in SQLite.
- **`executor.ts`**: Execution engine with configurable timeout and retry logic.
  Receives skill name + input, looks up the skill, runs it in the sandbox.
- **`sandbox.ts`**: Isolation layer for custom (user-provided) skills. Limits resource
  access and execution time.
- **Built-in skills**: Ship with OmniRoute (e.g., quota management, routing). Located
  alongside the registry.
- **Interception/Injection**: Skills can intercept requests in the pipeline (pre/post
  processing) or inject context into prompts.

=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
### Compliance (`src/lib/compliance/`)

Policy index for compliance enforcement.

### MITM Proxy (`src/mitm/`)

MITM proxy capability with certificate management, DNS handling, and target routing.

### Middleware (`src/middleware/`)

Request middleware including `promptInjectionGuard.ts`.

### Adding a New Provider

1. Register in `src/shared/constants/providers.ts`
2. Add executor in `open-sse/executors/` (if custom logic needed)
3. Add translator in `open-sse/translator/` (if non-OpenAI format)
4. Add OAuth config in `src/lib/oauth/constants/oauth.ts` (if OAuth-based)
5. Add models in `open-sse/config/providerRegistry.ts`

---
<<<<<<< HEAD
<<<<<<< Updated upstream

## Subdirectory AGENTS.md Files

- **[`open-sse/AGENTS.md`](open-sse/AGENTS.md)** — Streaming engine, request pipeline, handlers, and executors
- **[`src/lib/db/AGENTS.md`](src/lib/db/AGENTS.md)** — SQLite persistence, domain modules, migrations
- **[`open-sse/services/AGENTS.md`](open-sse/services/AGENTS.md)** — Routing engine, combo resolution, strategy selection

---
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## Review Focus

- **DB ops** go through `src/lib/db/` modules, never raw SQL in routes
- **Provider requests** flow through `open-sse/handlers/`
- **MCP/A2A pages** are tabs inside `/dashboard/endpoint`, not standalone routes
- **No memory leaks** in SSE streams (abort signals, cleanup)
- **Rate limit headers** must be parsed correctly
- All API inputs validated with **Zod schemas**
- **Provider constants** validated at module load via Zod (`src/shared/validation/providerSchema.ts`)
- **Pricing data** syncs from LiteLLM via `src/lib/pricingSync.ts`
- **Memory/Skills** are cross-cutting: affect MCP tools, request pipeline, and A2A skills
<<<<<<< HEAD
- **⛔ NEVER close a contributor's PR** after using their code — always merge via GitHub so they get credit. See `.agents/workflows/review-prs.md` for full policy.
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
