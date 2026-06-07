# Changelog (हिन्दी)

<<<<<<< HEAD
🌐 **Languages:** 🇺🇸 [English](../../../CHANGELOG.md) · 🇸🇦 [ar](../ar/CHANGELOG.md) · 🇧🇬 [bg](../bg/CHANGELOG.md) · 🇧🇩 [bn](../bn/CHANGELOG.md) · 🇨🇿 [cs](../cs/CHANGELOG.md) · 🇩🇰 [da](../da/CHANGELOG.md) · 🇩🇪 [de](../de/CHANGELOG.md) · 🇪🇸 [es](../es/CHANGELOG.md) · 🇮🇷 [fa](../fa/CHANGELOG.md) · 🇫🇮 [fi](../fi/CHANGELOG.md) · 🇫🇷 [fr](../fr/CHANGELOG.md) · 🇮🇳 [gu](../gu/CHANGELOG.md) · 🇮🇱 [he](../he/CHANGELOG.md) · 🇮🇳 [hi](../hi/CHANGELOG.md) · 🇭🇺 [hu](../hu/CHANGELOG.md) · 🇮🇩 [id](../id/CHANGELOG.md) · 🇮🇹 [it](../it/CHANGELOG.md) · 🇯🇵 [ja](../ja/CHANGELOG.md) · 🇰🇷 [ko](../ko/CHANGELOG.md) · 🇮🇳 [mr](../mr/CHANGELOG.md) · 🇲🇾 [ms](../ms/CHANGELOG.md) · 🇳🇱 [nl](../nl/CHANGELOG.md) · 🇳🇴 [no](../no/CHANGELOG.md) · 🇵🇭 [phi](../phi/CHANGELOG.md) · 🇵🇱 [pl](../pl/CHANGELOG.md) · 🇵🇹 [pt](../pt/CHANGELOG.md) · 🇧🇷 [pt-BR](../pt-BR/CHANGELOG.md) · 🇷🇴 [ro](../ro/CHANGELOG.md) · 🇷🇺 [ru](../ru/CHANGELOG.md) · 🇸🇰 [sk](../sk/CHANGELOG.md) · 🇸🇪 [sv](../sv/CHANGELOG.md) · 🇰🇪 [sw](../sw/CHANGELOG.md) · 🇮🇳 [ta](../ta/CHANGELOG.md) · 🇮🇳 [te](../te/CHANGELOG.md) · 🇹🇭 [th](../th/CHANGELOG.md) · 🇹🇷 [tr](../tr/CHANGELOG.md) · 🇺🇦 [uk-UA](../uk-UA/CHANGELOG.md) · 🇵🇰 [ur](../ur/CHANGELOG.md) · 🇻🇳 [vi](../vi/CHANGELOG.md) · 🇨🇳 [zh-CN](../zh-CN/CHANGELOG.md)
=======
🌐 **Languages:** 🇺🇸 [English](../../../CHANGELOG.md) · 🇪🇸 [es](../es/CHANGELOG.md) · 🇫🇷 [fr](../fr/CHANGELOG.md) · 🇩🇪 [de](../de/CHANGELOG.md) · 🇮🇹 [it](../it/CHANGELOG.md) · 🇷🇺 [ru](../ru/CHANGELOG.md) · 🇨🇳 [zh-CN](../zh-CN/CHANGELOG.md) · 🇯🇵 [ja](../ja/CHANGELOG.md) · 🇰🇷 [ko](../ko/CHANGELOG.md) · 🇸🇦 [ar](../ar/CHANGELOG.md) · 🇮🇳 [hi](../hi/CHANGELOG.md) · 🇮🇳 [in](../in/CHANGELOG.md) · 🇹🇭 [th](../th/CHANGELOG.md) · 🇻🇳 [vi](../vi/CHANGELOG.md) · 🇮🇩 [id](../id/CHANGELOG.md) · 🇲🇾 [ms](../ms/CHANGELOG.md) · 🇳🇱 [nl](../nl/CHANGELOG.md) · 🇵🇱 [pl](../pl/CHANGELOG.md) · 🇸🇪 [sv](../sv/CHANGELOG.md) · 🇳🇴 [no](../no/CHANGELOG.md) · 🇩🇰 [da](../da/CHANGELOG.md) · 🇫🇮 [fi](../fi/CHANGELOG.md) · 🇵🇹 [pt](../pt/CHANGELOG.md) · 🇷🇴 [ro](../ro/CHANGELOG.md) · 🇭🇺 [hu](../hu/CHANGELOG.md) · 🇧🇬 [bg](../bg/CHANGELOG.md) · 🇸🇰 [sk](../sk/CHANGELOG.md) · 🇺🇦 [uk-UA](../uk-UA/CHANGELOG.md) · 🇮🇱 [he](../he/CHANGELOG.md) · 🇵🇭 [phi](../phi/CHANGELOG.md) · 🇧🇷 [pt-BR](../pt-BR/CHANGELOG.md) · 🇨🇿 [cs](../cs/CHANGELOG.md) · 🇹🇷 [tr](../tr/CHANGELOG.md)
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

---


## [Unreleased]

<<<<<<< HEAD
### ✨ New Features

- **feat:** ongoing development

---

## [3.7.5] — 2026-04-29

### ✨ New Features

- **feat(tunnels):** integrate native ngrok tunnel support with dashboard UI parity (#1753)
- **feat(api-keys):** add rename support in the permissions modal — editable key name field with validation (#1796)

### 🐛 Bug Fixes

- **fix(dashboard):** add manual 'Clear All' button to terminate stalled long-running requests in Active Requests panel (#1799)
- **fix(schema):** remove empty string values from optional tool parameters to prevent upstream validation errors (#1674)
- **fix(providers):** ensure proper streaming cleanup and semaphore release to prevent stalls with nanoGPT (#1781)
- **fix(db):** wrap quota_snapshots access in try/catch to gracefully handle pending database migrations (#1784)
- **feat(providers):** add support for glm-cn (BigModel) provider (#1770)
- **fix(grok-web):** fix Grok validator and cookie parsing (#1793)
- **fix(antigravity):** scrub internal OmniRoute headers (#1794)
- **fix(chatgpt-web):** restore validator + expand model catalog to ChatGPT Plus tier (#1792)
- **fix(codex):** stabilize Copilot responses replay state (#1791)
- **fix(antigravity):** cap Claude bridge output tokens (#1785)
- **fix(schema):** strip `default` properties from tool-call JSON schemas during egress to prevent injection errors (#1782)
- **fix(db):** add `quota_snapshots` table to core DB schema initialization to prevent startup failures on fresh installs
- **fix(models):** apply blocked providers filter to non-chat catalog models (image, embedding, audio, etc.) (#1752)
- **fix(antigravity):** stabilize streaming payload parsing and deduplicate usage/model metadata refreshes (#1748)
- **fix(antigravity):** normalize Gemini bridge payloads — sanitize tool names, cap output tokens, and fix thinking budget (#1769)
- **fix(sse):** propagate AbortSignal to pre-fetch semaphore and rate-limit awaits to prevent memory leaks (#1771)
- **fix(models):** fix model sync import handling — separate synced models from custom models to prevent data loss (#1755)
- **fix(codex):** improve VS Code Copilot /responses reasoning and tool follow-ups (#1750)
- **fix(memory):** resolve build issues and implement memory UPSERT logic to prevent duplicate entries (#1763)
- **fix(kiro):** support organization IDC OAuth with regional endpoints and refresh (#1754)
- **fix(combo):** include 429 in provider circuit breaker to stop infinite retry loops on exhausted quotas (#1767)
- **fix(claude):** respect client-set thinking/effort params — only inject adaptive thinking and high effort when the client hasn't explicitly set them, preventing forced quota drain on Claude Max accounts (#1761)
- **fix(blackbox-web):** correct cookie name and populate session/subscription fields (#1776)
- **fix(codex):** align client identity metadata (#1778)
- **fix(claude):** fix support for claude-cli using Gemini provider (#1779)
- **test(reasoning-cache):** isolate DB state using mkdtempSync to prevent 401 middleware errors

### 🛠️ Maintenance

- **chore(docs):** add MseeP.ai security assessment badge to README (#1727)
- **chore(xiaomi):** update Xiaomi provider model list (#1759)
- **chore(db):** move DB health endpoint to management API (#1757)
- **chore(ui):** speed up endpoint initial render with background task loading (#1760)
- **chore(workflows):** add strict PR contributor credit policy to prevent future merge credit loss

### 🏆 Community Contributors Acknowledgment

We identified that **37 community PRs** across past releases (v3.4.0 → v3.7.4) were manually integrated into release branches but closed instead of properly merged through GitHub, preventing contributors from receiving merge credit on their profiles. We sincerely apologize for this oversight and have since updated our workflows to ensure this never happens again.

**The following contributors had their code and ideas integrated across multiple releases without proper merge credit. Thank you for your invaluable contributions to OmniRoute:**

| Contributor                                            | Contributions (PRs)                                                      |
| :----------------------------------------------------- | :----------------------------------------------------------------------- |
| [@rdself](https://github.com/rdself)                   | #1742, #1357, #1356, #1089, #1069, #904, #880, #875, #853, #851, #974    |
| [@oyi77](https://github.com/oyi77)                     | #1411, #1021, #990, #926, #908, #883, #881, #868, #862, #859, #850, #983 |
| [@benzntech](https://github.com/benzntech)             | #1677, #1444, #1440, #1437, #1435                                        |
| [@clousky2020](https://github.com/clousky2020)         | #1644, #1408                                                             |
| [@christopher-s](https://github.com/christopher-s)     | #885, #868, #992                                                         |
| [@kang-heewon](https://github.com/kang-heewon)         | #1235, #884                                                              |
| [@backryun](https://github.com/backryun)               | #1627, #1358, #1722                                                      |
| [@tombii](https://github.com/tombii)                   | #900, #856                                                               |
| [@slewis3600](https://github.com/slewis3600)           | #1624                                                                    |
| [@dhaern](https://github.com/dhaern)                   | #1647                                                                    |
| [@JasonLandbridge](https://github.com/JasonLandbridge) | #1626                                                                    |
| [@hartmark](https://github.com/hartmark)               | #1500                                                                    |
| [@herjarsa](https://github.com/herjarsa)               | #1480                                                                    |
| [@andruwa13](https://github.com/andruwa13)             | #1457                                                                    |
| [@i1hwan](https://github.com/i1hwan)                   | #1386                                                                    |
| [@xandr0s](https://github.com/xandr0s)                 | #1376                                                                    |
| [@RaviTharuma](https://github.com/RaviTharuma)         | #1188                                                                    |
| [@wlfonseca](https://github.com/wlfonseca)             | #1016                                                                    |
| [@only4copilot](https://github.com/only4copilot)       | #1039, #855                                                              |
| [@AndrewDragonIV](https://github.com/AndrewDragonIV)   | #898                                                                     |
| [@dt418](https://github.com/dt418)                     | #896                                                                     |
| [@willbnu](https://github.com/willbnu)                 | #882                                                                     |
| [@defhouse](https://github.com/defhouse)               | #906                                                                     |
| [@mercs2910](https://github.com/mercs2910)             | #1001                                                                    |
| [@zen0bit](https://github.com/zen0bit)                 | #912                                                                     |
| [@razllivan](https://github.com/razllivan)             | #987                                                                     |
| [@foxy1402](https://github.com/foxy1402)               | #934                                                                     |
| [@knopki](https://github.com/knopki)                   | #1434                                                                    |
| [@dail45](https://github.com/dail45)                   | #1413                                                                    |

---

## [3.7.4] — 2026-04-28

### ✨ New Features

- **feat(ui):** add endpoint tunnel visibility settings (#1743)
- **feat(cli):** refresh CLI fingerprint provider profiles (#1746)
- **feat(proxy):** implement bulk proxy import via pipe-delimited parser with update-or-create (upsert) logic and real-time preview table
- **feat(pwa):** add fullscreen installable PWA with manifest, service worker, and cross-platform app icons (#1728)

### सुरक्षा

- **security:** replace insecure `Math.random` with `crypto.getRandomValues` for fallback UUID generation to resolve CodeQL CWE-338 finding (#182)

### 🐛 Bug Fixes

- **fix(cc-compatible):** fix CC-compatible relay format and UI copy (#1742)
- **fix(codex):** normalize max reasoning effort for Codex routing (#1744)
- **fix(claude-code):** fix Claude Code gateway config helper (#1745)
- **fix(db):** reconcile legacy `create_reasoning_cache` migration tracking to prevent version shadowing on `032` and resolve startup warnings (#1734)
- **fix(db):** intercept `007` migration to use idempotent `IF NOT EXISTS` logic via `PRAGMA table_info`, preventing syntax crashes on fresh installs (#1733)
- **fix(cc-compatible):** preserve Claude Code system skeleton to prevent request rejection by strict compatible upstream providers (#1740)

- **fix(providers):** add API key validation for image-only providers and fix Stability AI requests to use `multipart/form-data` instead of JSON (#1726)
- **fix(codex):** preserve `previous_response_id` and `conversation_id` fields when input array is empty to prevent schema validation errors (#1729)
- **fix(searxng):** bypass UI validation block when `apiKeyOptional` is true and fix typing errors in provider dashboard to allow saving search providers without credentials (#1721)
- **fix(proxy):** disable HTTP keep-alive and pipelining in Undici proxy dispatcher to prevent "Socket hang up" rotation failures
- **stream:** correctly identify `thought` and `error` blocks in Antigravity/Gemini SSE streams to prevent premature 502 timeouts (#1725, #1705)

### 🛠️ Maintenance

- **workflow:** add phase 4 release monitoring instructions to `/generate-release` workflow
- **test:** fix typescript compilation errors in unit tests to keep CI typecheck pipeline fully green
- **test:** update responses store expectations for empty input arrays

---

## [3.7.3] — 2026-04-28

### 🐛 Bug Fixes

- **fix(claude):** strip existing billing headers from system array before injecting to prevent Anthropic prompt cache misses — stacked `x-anthropic-billing-header` blocks invalidated prefix matching, causing ~100% cache_create instead of cache_read (#1712)
- **fix(claude):** strip `output_config.format` for non-Anthropic Claude-compatible providers during passthrough — third-party Claude endpoints (MiniMax, DeepSeek via aggregators) reject structured output fields with 400 errors (#1719)
- **fix(combo):** set terminal error state on response quality validation failure — prevents misleading `ALL_ACCOUNTS_INACTIVE` 503 when the real issue is response quality validation (#1707, #1710)
- **fix(combo):** treat combo fallback as target-level orchestration — all non-ok responses (including generic 400s) now fall through to the next target instead of being terminal; removes complex bad-request allowlist regex (#1713)
- **fix(codex):** restore namespace MCP tools and hosted-tool whitelist — regression from #1581 that silently dropped all MCP tool groups and Responses-API hosted tools (#1715)
- **fix(codex):** add neutral instructions for bare chat requests — Codex Responses backend rejects requests without `instructions`, making Codex unusable for normal chat (#1709)
- **fix(proxy):** wrap proxy assignment queries in try-catch for missing `proxy_assignments` table — Electron installs where migration 004 hasn't run no longer crash with `no such table` error (#1706)
- **fix(migration):** improve Windows file URL path resolution in migration runner — adds direct URL path extraction and `process.cwd()` fallback for CI-built bundles with leaked build-time paths (#1704)
- **fix(ui):** fix light mode active request payload modal — add missing `--color-card` theme token, use opaque `bg-surface` instead of translucent `bg-card/70`, add backdrop blur (#1714)

### 🔄 Updates

- **chore(image-models):** refresh image generation model registry — replace stale FLUX aliases with FLUX Kontext / FLUX.2 mappings, remove deprecated FLUX Redux/Depth/Canny variants (#1722)

---

## [3.7.2] — 2026-04-28

### ✨ New Features

- **feat(authz):** introduce centralized proxy-based authz pipeline and lifecycle policy (#1632)
- **feat(logs):** configure call log pipeline artifacts (#1650)
- **feat(network):** add guarded remote image fetch utility
- **feat(codex):** enable native Codex websocket responses on beta-gated models (#1658)
- **feat(muse-spark-web):** continue the same meta.ai conversation across turns (#1673)

### 🐛 Bug Fixes

- **fix(responses):** sanitize empty string placeholders from tool-call optional arguments in stream delta accumulation to avoid breaking strict clients (#1674)
- **fix(codex):** prevent unexpected protocol leakage and fabricated instructions on bare chat completion requests without tools (#1686)
- **fix(executors):** truncate tools array to 128 items max in GitHub Copilot and OpenCode executors to mitigate 400 Bad Request errors from upstream (#1687)
- **fix:** add body-read timeout to prevent stuck pending requests (#1680)
- **fix(rate-limit):** replace unsupported Bottleneck `maxWait` option with job-level `expiration` to prevent indefinite queue stalls (#1694)
- **fix(sse):** sanitize OpenAI tool schemas for strict upstream validators — strips null from enum arrays, normalizes tuple items, filters invalid required keys (#1692)
- **fix(stream):** fail zombie SSE streams before accepting response — returns 504 instead of hanging indefinitely, enables combo fallback (#1693)
- **fix(combo):** complete context truncation hotfix — cache getCombos() with 10s TTL, pass allCombosData to resolveComboTargets() for nested combo resolution, consolidate duplicated context overflow regex patterns (#1685)
- **fix(codex):** raise default quota threshold from 90% to 99% to avoid premature account blocking when usable quota remains (#1697)
- **fix(memory):** use `user` role for GLM/ZAI/Qianfan providers — providers with strict role constraints (no `system` role) now correctly receive memory context as a `user` message instead of a `system` message, preventing 422 validation errors (#1701)
- **fix(oauth):** target specific connection by ID on re-auth token exchange — prevents duplicate account creation when re-authenticating an existing OAuth connection (#1702 — thanks @namhhitvn)
- **feat(email-privacy):** integrate email visibility toggle in RequestLoggerV2 — log detail modal now respects global email privacy state, hiding email addresses by default (#1700 — thanks @namhhitvn)
- **fix(combo):** trigger fallback on Anthropic `Invalid signature in thinking block` errors instead of returning 400 directly (#1696)
- **fix:** combo retry loop stops immediately on client disconnect (499) (#1681)
- **fix(search):** support optional bearer auth for SearXNG (#1683)
- **fix(vision):** respect native GPT vision support — prevents VisionBridge from intercepting models that already handle images natively (#1678)
- **fix(qwen):** use `security.auth` format instead of `modelProviders` for Qwen Code config generation (#1677)
- **fix(codex):** remove stale websocket transport lookup that caused fallback errors (#1676)
- **fix(chatgpt-web):** bound tls-client native deadlocks so requests never hang forever (#1664)
- **fix(codex):** default gpt-5.5 to HTTP transport instead of WebSocket (#1660)
- **fix(codex):** [urgent] fix gpt-5.5 websocket transport and model labels (#1656)
- **fix(grokweb):** update Request and Response Specifications (#1655)
- **fix(blackbox-web):** set isPremium flag to true to enable premium model access (#1661)
- **fix(core):** avoid OpenAI stream options for Anthropic-compatible providers (#1654)
- **fix(electron):** resolve MCP server start failure on Windows (#1662)
- **fix(electron):** make Windows smoke test non-blocking (continue-on-error), pre-create userData dir for Windows + stream logs in CI, and add --no-sandbox and sandbox env for CI smoke tests
- **fix(codex):** fix `getWreqWebsocket` ReferenceError causing 502 on all Codex requests (#1652, #1653)
- **fix(codex):** default `store` to `false` — Codex OAuth backend rejects `store=true` (#1635)
- **fix(db):** add post-migration guards for missing `batches` table and `combos.sort_order` column on DB upgrades (#1648, #1657)
- **fix(db):** renumber duplicate migration `032` to prevent collision
- **fix(perplexity-web):** update API version and user-agent to match upstream requirements (#1666)
- **fix(docker):** copy SQLite migration files and explicitly trace in standalone build (#1665)
- **fix(muse-spark-web):** update to Meta's Ecto-era persisted query — fixes 502 `Unknown type "RewriteOptionsInput"` after Meta retired the Abra mutation (#1668)
- **fix(dev):** enable Turbopack by default and repair Codex CORS headers (#1669)
- **fix(authz):** restore `REQUIRE_API_KEY` support in clientApi policy
- **fix(auth):** align fallback API key format with test setup

### 🛠️ Maintenance

- **build(prepublish):** make Next.js build bundler configurable (webpack/turbopack)
- **ci:** align sonar analysis scope
- **ci:** stabilize release branch checks
- **ci:** remove expired advanced security scans job

### 🧪 Tests

- **test:** fix TypeScript configuration errors in plan3-p0.test.ts
- **test:** fix implicit any types across test suites
- **test:** disable type checking in flaky unit tests
- **test:** fix failing tests due to recent refactors
- **fix(tests):** align integration tests with authz pipeline refactor
- **fix(tests):** align test assertions with v3.7.2 source code changes
- **fix(tests):** CORS test now checks object body instead of entire file
- **fix(e2e):** fix E2E flakiness and implicit any type errors

---

## [3.7.1] — 2026-04-26

### ✨ New Features

- **feat(providers):** Add GPT-5.5 support to the Codex provider — includes 1.05M context window, tool calling, vision, and reasoning capabilities with proper pricing entries across `cx` and `openai` providers. Refactors `splitCodexReasoningSuffix()` into a shared helper for cleaner effort-level parsing (#1617 — thanks @Zhaba1337228).
- **feat(cli):** Add `omniroute reset-encrypted-columns` recovery command — nulls encrypted credential columns (`api_key`, `access_token`, `refresh_token`, `id_token`) in `provider_connections` while preserving provider metadata, giving users affected by #1622 a clean recovery path without losing configurations.
- **feat(i18n):** Expand locale coverage with nine new language packs (Bengali, Farsi, Gujarati, Indonesian, Marathi, Swahili, Tamil, Telugu, Urdu), bringing total language support from 32 to 41 locales.

### 🐛 Bug Fixes

- **fix(rate-limit):** Add per-model rate limiting for GitHub Copilot provider — a 429 on one model (e.g. `gpt-5.1-codex-max`) no longer locks the entire connection, matching the existing Gemini per-model quota pattern (#1624 — thanks @slewis3600).
- **fix(cli-tools):** Preserve existing OpenCode configuration (MCP servers, custom providers, comments) when saving OmniRoute settings — uses `jsonc-parser` for tree-preserving edits instead of destructive JSON roundtrip. Fix API key clipboard copy to use raw keys instead of masked placeholders. Add theme-aware OpenCode light/dark SVG logos (#1626 — thanks @JasonLandbridge).
- **fix(cli-tools):** Fix OpenCode guide step 3 `{{baseUrl}}` double-brace placeholder to use ICU-style `{baseUrl}` across all 41 locales, restoring next-intl interpolation (#1626).
- **fix(codex):** Make `wreq-js` native module import lazy and optional to prevent server crash on startup when the platform-specific binary is missing — affects pnpm installs, Docker Alpine, macOS ARM, and Windows (#1612, #1613, #1616).
- **fix(i18n):** Add 14 missing translation keys (`logs.runningRequests`, `logs.model`, `logs.provider`, `logs.account`, `logs.elapsed`, `logs.count`, `logs.payloads`, etc.) for the Active Requests panel across all locales. Replace 83 placeholder values in usage/evals namespace. Add 5 missing health namespace keys for rate limit status.
- **fix(encryption):** Prevent `STORAGE_ENCRYPTION_KEY` from being silently regenerated during `npm install -g` upgrades, which made all previously-encrypted provider credentials permanently unrecoverable due to AES-GCM auth-tag mismatch (#1622).
- **fix(startup):** Add decrypt-probe diagnostic at server bootstrap — if `STORAGE_ENCRYPTION_KEY` doesn't match encrypted credentials in the database, a prominent warning is logged directing users to restore the key or use the new recovery command.
- **fix(cli-tools):** Allow `null` API key values in `cliModelConfigSchema` to prevent 400 Bad Request errors when saving cloud-based CLI tool configurations. Fix error handling across all 10 ToolCard components to safely extract messages from structured error objects, preventing React Error #31 crashes.
- **fix(docker):** Set `NPM_CONFIG_LEGACY_PEER_DEPS=true` in the Docker builder layer before `npm ci` and remove duplicate `postinstallSupport.mjs` COPY instruction — fixes container image build failures introduced in v3.7.0 (#1630 — thanks @rdself).
- **fix(antigravity):** Hide deprecated Gemini-routed Claude 4.5 models from public catalogs and model lists. Legacy `gemini-claude-*` aliases now silently resolve to current Claude 4.6 equivalents. Replace dynamic reverse-alias generation with an explicit allowlist for predictable model visibility (#1631 — thanks @backryun).
- **fix(types):** Add explicit type annotations to sync-env test helpers and dynamic import casts to satisfy `typecheck:noimplicit:core` CI gate.
- **fix(reasoning):** Implement Reasoning Replay Cache — hybrid memory/SQLite persistence for `reasoning_content` in multi-turn tool-calling flows. Automatically captures reasoning from DeepSeek V4, Kimi K2, Qwen-Thinking, and GLM models and re-injects it on follow-up turns to prevent HTTP 400 errors from strict reasoning-content validation. Includes dashboard telemetry tab, REST API, and 21 unit tests (#1628 — thanks @JasonLandbridge).
- **fix(postinstall):** Extend postinstall native module repair to cover `wreq-js` — detects missing platform-specific `.node` binaries inside `app/node_modules/wreq-js/rust/` and copies them from the root install. Fixes global `pnpm` installs on macOS arm64 where the standalone app directory only contained Linux binaries (#1634 — thanks @MarcosT96).
- **fix(migration):** Prevent compat-renamed migration slots from shadowing new migrations at the same version number. After rewriting `028_provider_connection_max_concurrent` → `029`, the runner now verifies the old version slot is clear, ensuring `028_create_files_and_batches` runs on v3.6.x → v3.7.x upgrades. Adds `batches` table as a physical schema sentinel for upgrade recovery (#1637 — thanks @V8-Software).
- **fix(registry):** Route GitHub Copilot GPT 5.4/5.5 models through the Responses API (`targetFormat: "openai-responses"`). Fixes `gpt-5.4-mini` and `gpt-5.4` being rejected on `/chat/completions` by GitHub (#1641 — thanks @dhaern).
- **fix(usage):** Correct MiniMax token plan quota display — the newer `/v1/token_plan/remains` endpoint reports used counts, not remaining counts. Rounds floating-point percentage artifacts in Provider Limits UI (#1642 — thanks @CruxExperts).
- **fix(codex):** Lazy-load `wreq-js` WebSocket transport via `createRequire` instead of top-level import. Server boots cleanly when native module is unavailable and returns 503 only when Codex WebSocket is actually requested. Fixes #1612 (#1640 — thanks @dendyadinirwana).
- **fix(electron):** Package Electron runtime dependencies into `resources/app/node_modules/` via separate `extraResources` FileSet. Adds cross-platform packaged app smoke test script and CI integration to prevent future regressions. Closes #1636 (#1639 — thanks @prateek).
- **feat(account-fallback):** Add model-level daily quota lockout. When a provider returns 429 with `quota_exhausted`, cooldown is set to tomorrow 00:00 instead of exponential backoff. Detects daily quota patterns via `isDailyQuotaExhausted()` in chat handler (#1644 — thanks @clousky2020).
- **fix(codex):** Use per-conversation `session_id`/`conversation_id` from client body as `prompt_cache_key` instead of account-wide `workspaceId`. The official Codex CLI uses `conversation_id` (a unique UUID per session); using the shared `workspaceId` capped cache hit-rate at ~49%. Includes 10 unit tests (#1643).
- **fix(claude):** Stabilize billing header fingerprint to prevent Anthropic prompt-cache prefix invalidation. The fingerprint was derived from the first user message text, which changes every turn, mutating `system[]` and forcing ~100% `cache_create`. Now uses a stable per-day hash, preserving ~96% `cache_read` hit rate (#1638).
- **fix(transport):** Harden GitHub and Kiro streaming — thread `clientHeaders` through `BaseExecutor.buildHeaders()` to eliminate mutable singleton state race condition on concurrent requests. Remove redundant `[DONE]` stripping TransformStream from GitHub executor. Add defensive `parseToolInput()` for malformed Kiro tool call arguments. Hoist `TextEncoder`/`TextDecoder` to module singletons and use zero-copy `subarray()` (#1645 — thanks @dhaern).
- **fix(transport):** Prevent memory bloat and database exhaustion from large, fragmented streaming responses. Implemented `ByteQueue` in `kiro.ts` for zero-copy binary accumulation, refactored `antigravity.ts` for incremental SSE parsing, and enforced a strict 512KB tiered truncation limit (`MAX_CALL_LOG_ARTIFACT_BYTES`) on stream request logs and call artifacts (#1647).
- **chore(ci):** Update build environment dependencies — bump Node to `24.15.0`, `actions/checkout@v6`, `docker/build-push-action@v7`, pin `actions/setup-python` to major tag (#1646 — thanks @backryun).

### दस्तावेज़

- **docs(env):** Add `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS` to `.env.example` with documentation for LM Studio and other local provider use cases (#1623).

---

## [3.7.0] — 2026-04-26

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).
- **feat(providers):** Add CrofAI as a built-in API-key provider with quota/usage monitoring wired into the dashboard Limits page (#1604, #1606).
- **feat(skills):** Add workspace-scoped built-in skills (`file_read`, `file_write`, `http_request`, `eval_code`, `execute_command`) with real sandbox execution via Docker, replacing stub responses. Browser skills now fail explicitly when runtime is not configured.

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **feat(provider):** add ChatGPT Web (Plus/Pro) session provider (#1593)
- **feat(provider):** add Baidu Qianfan chat provider (#1582)
- **feat(codex):** support GPT-5.5 responses websocket (#1573)
- **feat(sse):** Codex CLI image_generation + DALL-E-style image route (#1544)
- **feat(dashboard):** Complete the reconciled v3.7.0 dashboard task set: MCP cache tools and count, video endpoint visibility, provider taxonomy, upstream proxy visibility, provider count badges, costs overview, eval suite management, Custom CLI builder, ACP-focused Agents copy, Translator stream transformer, logs convergence, learned rate-limit health cards, docs expansion, and active request payload inspection.
- **feat(mcp):** Register `omniroute_cache_stats` and `omniroute_cache_flush` across MCP schemas, server registration, handlers, docs, and tests.
- **feat(providers):** Complete the v3.7.0 provider onboarding wave with self-hosted/local providers (`lm-studio`, `vllm`, `lemonade`, `llamafile`, `triton`, `docker-model-runner`, `xinference`, `oobabooga`), OpenAI-compatible gateways (`glhf`, `cablyai`, `thebai`, `fenayai`, `empower`, `poe`), enterprise providers (`datarobot`, `azure-openai`, `azure-ai`, `bedrock`, `watsonx`, `oci`, `sap`), specialty providers (`clarifai`, `modal`, `reka`, `nous-research`, `nlpcloud`, `petals`, `vertex-partner`), `amazon-q`, GitLab/GitLab Duo, and Chutes.ai.
- **feat(providers):** Add Cloudflare Workers AI integration and UI support for robust backend execution.
- **feat(telemetry):** Implement proactive public IP capture from client headers (`x-forwarded-for`, `x-real-ip`, etc.) within `safeLogEvents` for accurate database observability.
- **feat(audio):** Add AWS Polly as an audio speech provider with SigV4 request signing, static engine catalog, provider validation, managed-provider UI coverage, and sanitization for AWS secret/session fields.
- **feat(search):** Add You.com search provider support with dashboard discovery, validation, livecrawl option handling, and search handler normalization.
- **feat(video):** Add RunwayML task-based video generation support, task polling, provider catalog metadata, validation, and dashboard/model-list coverage.
- **feat(providers):** Add search functionality to the providers dashboard with i18n support. (#1511 — thanks @th-ch)
- **feat(providers):** Register 6 new models in the opencode-go provider catalog. (#1510 — thanks @kang-heewon)
- **feat(providers):** Add ModelScope provider (Chinese AI marketplace) with Kimi K2.5, GLM-5, and Step-3.5-Flash integration. (#1430 — thanks @clousky2020)
- **feat(providers):** Add LM Studio as an OpenAI-compatible local provider for self-hosted model inference.
- **feat(providers):** Add Grok 4.3 thinking model support for xAI web executor requests.
- **feat(core):** Implement provider-level Circuit Breaker to prevent cascading failures across connections, enforcing a 10-minute cooldown after 5 consecutive transient failures. (#1430)
- **feat(core):** Add daily quota exhaustion lock to detect "quota exceeded" signals and lock the specific model until midnight. (#1430)
- **feat(core):** Auto-inject `stream_options.include_usage = true` for OpenAI format streams to guarantee token usage is reported correctly during streaming. (#1423)
- **feat(core):** Add OpenAI Batch Processing API support — submit, monitor, and manage batch jobs through the proxy with full lifecycle tracking.
- **feat(vision-bridge):** Add automatic image description fallback for non-vision models via `VisionBridgeGuardrail` (priority 5). Intercepts image-bearing requests to non-vision models, extracts descriptions via a configurable vision model (default: gpt-4o-mini), and replaces images with text before forwarding. Fails open on any error. (#1476)
- **feat(dashboard):** Introduce real-time model status badges with countdown timers in the provider detail and combo panel interfaces. (#1430)
- **feat(dashboard):** Add Batch/File management data grid with full i18n translations for batch processing workflows. (#1479)
- **feat(usage):** MiniMax + MiniMax-CN quota tracking in provider limits dashboard. (#1516)
- **feat(providers):** Fix OpenRouter remote discovery and unify managed model sync. (#1521)
- **feat(providers):** Implement provider and account-level concurrency cap enforcement (`maxConcurrent`) using robust semaphore mechanisms. (#1524)
- **feat(core):** Implement Hermes CLI config generation and message content stripping. (#1475)
- **feat(combos):** Add expert combo configuration mode for advanced routing controls. (#1547)
- **feat(providers):** Register Codex auto review and expand icon coverage.
- **feat(tunnels):** Add Tailscale tunnel management routes and runtime helpers for install, login, daemon start, enable/disable, and health checks.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(chatgpt-web):** Fix empty-file race in `tlsFetchStreaming` where `waitForFile` accepted zero-byte files, silently degrading streaming requests to buffered mode. Replaced with `waitForContent` requiring `file.size > 0` with early exit on request settlement. (#1597 — thanks @trader-payne)
- **fix(chatgpt-web):** Fix stale NextAuth session-token cookies surviving rotation shape changes (unchunked↔chunked). `mergeRefreshedCookie` now drops all session-token family members via `SESSION_TOKEN_FAMILY_RE` before appending the refreshed set, preventing auth failures from dual cookie submission. (#1597 — thanks @trader-payne)
- **fix(codex):** WebSocket memory retention and weekly limit handling (#1581)
- **fix(providers):** Default models list logic (#1577)
- **fix(ui):** Dashboard endpoint URL hydration respects `NEXT_PUBLIC_BASE_URL` when behind a reverse proxy (#1579)
- **fix(providers):** Restore strict PascalCase header masquerading for Claude Code to resolve HTTP 429 upstream errors (#1556)
- **fix(sse):** make Responses passthrough robust for size-sensitive clients (#1580)
- **fix(codex):** update client version for gpt-5.5 (#1578)
- **fix(vision-bridge):** force GPT-family image fallback (#1571)
- **fix(claude):** skip adaptive thinking defaults for unsupported models (#1563)
- **fix(claude):** preserve tool_result adjacency in native and CC-compatible paths (#1555)
- **fix(reasoning):** Preserve OpenAI Chat Completions `reasoning_effort` through assistant-prefill requests and label OpenAI request protocols explicitly as `OpenAI-Chat` or `OpenAI-Responses`. (#1550)
- **fix(codex):** Fix Codex auto-review model routing so review traffic resolves to the intended configured model. (#1551)
- **fix(resilience):** Route HTTP 429 cooldowns through runtime settings so cooldown behavior follows the configured resilience profile. (#1548)
- **fix(providers):** Normalize Anthropic header keys to lowercase in the provider registry to avoid duplicate or case-variant upstream headers. (#1527)
- **fix(providers):** Preserve audio, embedding, rerank, image, video, and OpenAI-compatible alias metadata when `/v1/models` merges static and discovered catalogs.
- **fix(providers):** Discover Azure OpenAI deployments from resource endpoints using `api-key` auth and configurable API versions.
- **fix(providers):** Keep local OpenAI-style providers authless when no API key is configured, including the Lemonade Server default endpoint.
- **fix(translator):** Preserve Antigravity default system instructions and caller-provided system prompts as separate Gemini `systemInstruction` parts instead of concatenating them.
- **fix(security):** Sanitize provider-specific AWS secrets and session tokens from provider management API responses.
- **fix(release):** Resolve combo prefixing, Electron packaging, CLI auth, and release-branch integration regressions. (#1471, #1492, #1496, #1497, #1486)
- **fix(providers):** Resolve 400 errors for GLM and Antigravity Claude adapter during request translation by scoping prompt caching to compatible Anthropic endpoints and flattening system instructions. (#1514, #1520, #1522)
- **fix(core):** Strip `reasoning_content` from OpenAI format messages for non-reasoning models to prevent upstream HTTP 400 validation errors. (#1505)
- **fix(sse):** Map Claude `output_config/thinking` to OpenAI `reasoning_effort` for proper Antigravity tool translation. (#1528)
- **fix(combo):** Fallback to next model on all-accounts-rate-limited (HTTP 503/429) to maintain high availability. (#1523)
- **fix(api):** Harden batch and file endpoints for auth and recovery to prevent schema state collisions.
- **fix(ui):** Add missing UI wiring for "Add Memory" and "Import" buttons on the `/dashboard/memory` page. (#1506)
- **fix(ui):** Prevent Dark Mode FOUC (Flash of Unstyled Content) by injecting a synchronous theme initialization script into the root `layout.tsx`.
- **fix(ui):** Fix mobile layout text overflow in provider and combo cards, and enable touch-friendly reordering arrows across all combo strategies.
- **fix(core):** Add periodic runtime log rotation checks to prevent disk exhaustion in long-running instances. (#1504 — thanks @ether-btc)
- **fix(build):** Resolve missing `process` module in webpack client build for pino-abstract-transport. (#1509 — thanks @hartmark)
- **fix(ui):** Add dark mode support for native dropdown `<option>` elements on Linux/Windows, resolving invisible text in settings and combo builders (#1488)
- **fix(batch):** Add batch item dispatching to specific handlers based on URL to support embeddings and other modalities (#1495 — thanks @hartmark)
- **fix(dashboard):** Correct TOML round-trip corruption in Codex config serializer by dequoting keys and preserving array/boolean structures properly. (#1438 — thanks @benzntech)
- **fix(security):** Resolve CodeQL alert 164 (ReDoS in extraction) and 163 (incomplete URL sanitization). (#163, #164)
- **fix(providers):** Add optional chaining to connection object before accessing `providerSpecificData`, preventing runtime errors when the connection is null/undefined.
- **fix(codex):** Preserve namespace MCP tools forwarded to Codex Responses API, preventing tool name stripping during translation. (#1483)
- **fix(codex):** Deduplicate case-variant `anthropic-version` header in Claude Code patch to prevent duplicate header injection. (#1481)
- **fix(fallback):** Use shared `CircuitBreaker` instead of undefined constants, fixing runtime errors in provider failure handling. (#1485)
- **fix(fallback):** Merge new provider failure threshold fields (`providerFailureThreshold`, `providerFailureWindowMs`, `providerCooldownMs`) into resilience profiles.
- **fix(fallback):** Remove 429 from `PROVIDER_FAILURE_ERROR_CODES` — rate limits are already handled by model-level and account-level locks; including them in the provider-wide circuit breaker caused premature cooldown.
- **fix(sse):** Enable tool calling for GPT OSS and DeepSeek Reasoner models. (#1455)
- **fix(encryption):** Return null on decryption failure to prevent sending encrypted tokens to providers. (#1462)
- **fix(combo):** Resolve cross-provider thinking 400 errors and HTTP clipboard issues during combo routing. (#1444)
- **fix(core):** Resolve skills, memory, and encryption system issues affecting startup and runtime stability. (#1456)
- **fix(core):** Fix model ID parsing for providers with slashes in model names — use `indexOf`/`substring` instead of `split` to handle models like `modelscope/moonshotai/Kimi-K2.5`.
- **fix(core):** Fix reference counting in `ModelStatusContext` — changed `registeredModels` from `Set` to `Map<string, number>` to prevent polling stop when one component unmounts while others still track the same model.
- **fix(security):** Prompt injection guard failures now return an explicit 500 response instead of silently passing through (fail-closed policy).
- **fix(security):** Encryption now derives new keys from a secret-based salt while falling back to the legacy static-salt key during decryption, preserving existing stored credentials.
- **fix(combo):** Resolve context truncation bug in combo routing to prevent incomplete execution states. (#1517)
- **fix(compression):** Implement bidirectional tool_pair cleaning for anthropic inputs (fixes #1592).
- **fix:** Resolve v3.7.0 stabilization issues including dashboard navigation routing, ProxyRegistryManager component layout, and models API response merging (#1566, #1560, #1559).
- **fix(cli):** Preserve TOML integer/boolean types in Codex config round-trip to prevent `tui.model_availability_nux` validation errors.
- **fix(tailscale):** Support sudo auth prompts and live daemon socket detection for non-root tunnel management.
- **fix(dashboard):** Stabilize usage tab loading and refresh behavior to prevent empty state flashes.
- **fix(i18n):** Translate 519 untranslated pt-BR keys and add missing Windsurf/Cline/Kimi docs keys.
- **fix(i18n):** Add missing dashboard message keys across all 30 locales.
- **fix(cli):** Align OpenCode config preview and add multi-model selection (#1602).
- **fix(security):** Harden management API auth and OpenAPI try-proxy endpoint.
- **fix(security):** Resolve vulnerability scan findings for auth-guarded routes.

### ♻️ Refactoring

- **refactor(fallback):** Make provider failure thresholds configurable via `PROVIDER_PROFILES` instead of hardcoded constants, supporting different failure tolerance per provider type. (#1449)
- **refactor(resilience):** Unify resilience controls across the codebase for consistent circuit breaker and fallback behavior. (#1449)
- **refactor(core):** Implement shared path utilities, add custom date formatting, improve type safety, and unify database imports across modules.
- **refactor(security):** Harden backup archive creation by switching to `execFileSync`, validate ACP agent IDs, expand shared CORS handling.
- **refactor(release):** Remove obsolete agent workflow playbooks and the stale compiled `src/lib/dataPaths.js` artifact. (#1541)

### 🧪 Tests

- **test(providers):** Add targeted coverage for AWS Polly SigV4 speech/validation, Azure OpenAI deployment discovery, Lemonade local discovery, provider dashboard taxonomy, managed provider catalog behavior, and merged `/v1/models` alias metadata.
- **test(catalog):** Add v3.7.0 catalog coverage for Pollinations text models, Perplexity Sonar via Puter, and NVIDIA free-model alias resolution.
- **test(vision-bridge):** Add 51 unit tests covering all VisionBridge spec scenarios (VB-S01 through VB-S10), including helper functions for `callVisionModel`, `extractImageParts`, `replaceImageParts`, and `resolveImageAsDataUri`.
- **test(batch-api):** Isolate batch API unit tests with temp `DATA_DIR` to prevent schema state collisions.
- **test(settings-api):** Add test harness with `createSettingsApiHarness` function for proper temp directory setup and storage reset between tests.
- **test(security):** Update prompt injection test for fail-closed policy alignment.
- **test(core):** Restore local test fixes for encryption and resilience modules.
- **test(next):** Align transpile package expectations for the Next.js standalone build.
- **test(ci):** Fix CI-only test failures from environment differences — clear `INITIAL_PASSWORD` and `JWT_SECRET` in integration tests, handle `XDG_CONFIG_HOME` for guide-settings tests.

### दस्तावेज़

- **docs:** Update the root changelog with all release-branch changes through 2026-04-24, including PRs #1544, #1555, #1551, #1550, #1548, #1547, #1541, #1538, #1536, and #1527.
- **docs:** Fix broken README and localized documentation links. (#1536)
- **docs:** Add dashboard docs coverage for current API endpoints, management APIs, ACP, MCP tools, provider onboarding, and v3.7.0 task reconciliation.
- **docs:** Add Arch Linux AUR install notes for community package support. (#1478)
- **docs(i18n):** Improve Ukrainian (uk-UA) translation quality — full Ukrainian translation for README, SECURITY, A2A-SERVER, API_REFERENCE, AUTO-COMBO, and USER_GUIDE documents. Fix mixed Latin/Cyrillic typos, translate model table entries, and standardize section headers.

### 🛠️ Maintenance

- **chore:** Add `.tmp/` to `.gitignore` to keep local build/test artifacts out of release diffs. (#1538)
- **chore(release):** Clarify release version parity and changelog segregation rules for generated release workflows.

### 📦 Dependencies

- **deps:** Bump the development group with 4 updates. (#1464)
- **deps:** Bump the production group with 4 updates. (#1463)
- **deps:** Update `@lobehub/icons` to `5.5.4`, add explicit `react-is@19.2.5` for Recharts, pin npm installs to skip unused peer auto-installs, and override Electron's transitive `@xmldom/xmldom` to `0.9.10` so audit findings stay closed.

---

## [3.6.9] — 2026-04-19

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Mark Qwen OAuth provider as deprecated following the upstream free tier shutdown on 2026-04-15. Adds deprecation warning to CLI tool UI and rewrites `saveQwenConfig` to inject OmniRoute as a multi-provider (openai, anthropic, gemini) via `.qwen/settings.json` and `.qwen/.env` (#1437)
- **feat(cc-compatible):** Align Claude Code-compatible request shape with the official Claude CLI protocol, including proper system skeleton and request normalization (#1411)
- **feat(skills):** Provider-aware marketplace UX with scored AUTO injection and memory pipeline hardening. Skills now show relevance scores and can automatically inject context into requests (#1411)
- **feat(claude-code):** Update Claude Code obfuscation to version 2.1.114, centralize hardcoded version strings, and use standard logger (#1403)
- **feat(cli-tools):** Add direct configuration file generation and override support for Qwen Code local settings (#1394)
- **feat(providers):** Derive Claude CLI model defaults dynamically from provider registry to stay current with upstream API changes (#1393)
- **feat(core):** Implement persistent API key, backup pruning, and GPU optimization (#1350, #1367, #1369)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(cli-tools):** Prevent masked API keys (`sk-31c4****8600`) from being written to CLI tool config files. The dashboard UI now passes `key.id` to the backend, which resolves the unmasked key from the database via a new `resolveApiKey()` helper. Fixes auth failures across all CLI tools (Claude, Codex, Cline, Kilo, Droid, OpenClaw, Antigravity) (#1435)
- **fix(cc-compatible):** Trim the default Claude Code-compatible system prompt skeleton from a multi-paragraph instruction set down to a single identifier line, reducing redundant token usage since Claude Code already injects its own extensive system context (#1433)
- **fix(security):** Resolve SSRF environment static evaluation bug where the outbound URL guard could be bypassed via computed expressions (#1427)
- **fix(auth):** Reload fresh token state and unify expiry persistence to prevent stale credentials from causing cascading auth failures
- **fix(core):** Stabilization fixes for token refresh, usage translation, and testing infrastructure
- **fix(api):** Stop sending unsupported parameters to Gemini and Codex upstream APIs, preventing 400 Bad Request errors
- **fix(skills):** Optimize AUTO scoring algorithm and include Responses API input context for more accurate skill relevance matching (#1418)
- **fix(responses):** Preserve reasoning content when translating Chat Completions format to Responses API format, preventing loss of chain-of-thought data (#1414)
- **fix(cc-compatible):** Add Claude CLI system skeleton for OpenAI-format inputs to ensure consistent behavior when CC-compatible providers receive OpenAI-style payloads
- **fix(providers):** Add `ref` to `GEMINI_UNSUPPORTED_SCHEMA_KEYS` to fix 400 errors from Gemini CLI when tool schemas contain JSON Schema `$ref` fields
- **fix(codex):** Prevent proactive token refresh from consuming valid tokens and strip the unsupported `background` parameter from upstream requests
- **fix(providers):** Fix `usage.prompt_tokens` under-reporting when translating Claude caching responses to OpenAI format (#1426)
- **fix(core):** Fix token refresh resilience for Codex providers. Unrecoverable OAuth refresh errors (`token_expired` and `invalid_token`) now correctly mark the connection as invalid to prompt user re-authentication, rather than silently failing (#1415)
- **fix(providers):** Fix Gemini tool calling by removing the unsupported `additionalProperties` schema field, resolving 400 errors during complex tool invocations (#1421)
- **fix(providers):** Remove arbitrary user thought signature injection in Gemini responses to comply with updated API constraints (#1410)
- **fix(providers):** Fix Gemini API part count mismatch for streaming responses (#1412)
- **fix(codex):** Respect `openaiStoreEnabled` setting during native passthrough for Responses API to prevent unsupported upstream arguments (#1432)
- **fix(ui):** Makes dropdown text visible in dark mode within the Combo Builder modal (#1409)
- **fix(chatcore):** Apply proactive compression before provider translation to prevent token limit errors in combo routes (#1406)
- **fix(claude-code):** Scope thinking stripping to executor boundaries to prevent issues with normal API requests (#1401)
- **fix(claude-code):** Scope obfuscation logic to CLI clients only and fix associated test assertions
- **fix(mitm):** Resolve MITM not working when connecting Antigravity (#1399)
- **fix(security):** Resolve CodeQL password hash alert and fix TruffleHog CI failure (#161)
- **fix(combo):** Fallback to the next model when all provider accounts return a 503 rate-limited signal instead of aborting the routing sequence (#1398)
- **fix(codex):** Strip server-generated IDs from response items in input to prevent 404 lookup errors in multi-turn Codex Conversations (#1397)
- **fix(codex):** Optimize Chat Completions paths by converting `system` to `developer` roles instead of hoisting them into instructions, enabling prompt caching for system messages on GPT-5 models (#1400)
- **fix(providers):** Resolve Claude passthrough corruption (#1359), Kimi-k2 reasoning header rejections (#1360), thinking parameter leaks (#1361), and Ollama proxy redirect drops (#1381)
- **fix(core):** Proxy lookup in key validation respects the new ProxyRegistry environments, and proxy contexts correctly inherit downwards during token refresh preventing expiration loops (#1384, #1390)
- **fix(providers):** Treat upstream legacy validation HTTP 5xx responses as a valid bypass for Qoder PAT tokens to prevent false negative invalidation (#1391)
- **fix(electron):** Resolve type error in Header electronAPI properties
- **fix(security):** Resolve CodeQL security alerts including safe prototype bindings (#151, #152, #154, #155-159)
- **fix(tsc):** Silence `baseUrl` deprecation warnings for TypeScript 5.5+ configurations

### 🧪 Tests

- **test(core):** Resolve typescript strictness complaints and fix combo-routing-engine test regression
- **test(core):** Resolve remaining strict type errors across all unit test files
- **test(providers):** Fix provider service assertion for anthropic-compatible header format
- **test(codex):** Align codex passthrough assertions with explicit store retention policy
- **test(codex):** Fix store assertion for codex responses
- **test(cli):** Resolve strict null checks in Qoder unit tests

### 🛠️ Maintenance

- **chore:** Sync infrastructure with docker postinstall components and secondary CodeQL analysis rules
- **chore:** Enforce contributor credit rule in review-prs workflow
- **chore:** Fix TS errors and update review-prs workflow for improved automation
- **ci:** Allow manual CI dispatch for release branches
- **ci:** Shard long-running test suites and relax timeouts for stability
- **ci:** Restore release v3.6.9 build pipeline and fix flaky tests
- **docs:** Update generate-release workflow to use full changelog for PR body
- **docs:** Enforce PR merge instead of manual close in workflows

---

## [3.6.8] — 2026-04-17

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **feat(providers):** Support `xhigh` reasoning tier exclusively on Claude models that expose it (#1356)
- **feat(providers):** Add CC Compatible connection-level 1M context toggle (#1357)
- **feat(core):** Add full support for Node.js 24 LTS (Krypton) environments with continuous integration coverage (#1340)
- **feat(dashboard):** Display Antigravity credit balance in dashboard Limits & Quotas (#1338)
- **feat(i18n):** Add internationalization support for combo features and dashboard components; sync translations across 31 keys (#1318)
- **feat(providers):** Add Claude Opus 4.7 to Claude Code OAuth models natively with extended context and caching (#1347)
- **feat(core):** Add stopSequences support and expand tool definitions to include Google Search capabilities
- **feat(auth):** Enforce dashboard session authentication on all management API routes, preventing unauthenticated access to configuration endpoints
- **feat(runtime):** Add hot-reloadable guardrails and model diagnostics for real-time rule evaluation without restarts
- **feat(core):** Add payload rules, tag-based routing, and scheduled budget systems for fine-grained request governance
- **feat(providers):** Expose Antigravity preview model aliases and Gemini CLI onboarding flow for first-time setup
- **feat(antigravity):** Add client model aliases and thoughtSignature bypass modes for Antigravity OAuth connections
- **feat(providers):** Expand image provider registry with extended model support including SD3.5, FLUX, and DALL-E 3 HD configurations
- **feat(combos):** Add new routing strategies and full i18n support for agent features section across 31 languages

### सुरक्षा

- **security:** Resolve 18 GitHub CodeQL scan alerts including ReDoS, incomplete sanitization, and bad HTML filtering regexp patterns
- **fix(auth):** Seal privilege escalation vector by enforcing JWT session checking exclusively on `/api/keys` management endpoints (#1353)
- **fix(providers):** Resolve Codex token refresh race condition via mutex `getAccessToken` preventing `refresh_token_reused` Auth0 revocations

### 🔧 Maintenance & Architecture

- **refactor(core):** Split CLI runner and decouple migration engine for extensibility (#1358)
- **refactor(audit):** Rewire audit dashboard from dead in-memory `configAudit` store to live SQLite `audit_log` table — 331+ hidden compliance entries now visible in `/dashboard/audit`
- **build(deps):** Bump `softprops/action-gh-release` from v2 to v3
- **ci:** Bump GitHub Actions CI node-version to Node.js 24 natively
- **fix(types):** Resolve TypeScript compilation errors in `claudeCodeCompatible.ts` (type predicates, `cache_control` index access) and `proxyFetch.ts` (`signal` nullability)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(context):** Scale reserved context tokens dynamically using a 15% sliding window for smaller models
- **test(core):** Replace unit test with integration test for proactive context compression to align with isolated runner rules (#1378)
- **fix(services):** Pass origin provider to refreshWithRetry to avoid tripping the generic "unknown" circuit breaker (fixes Codex accounts erroneously disabling)
- **fix(db):** Prevent native module ABI load crashes from assuming database corruption and skipping databases
- **fix(db):** Increase mass-migration threshold from 5 to 50 pending migrations to protect legacy users upgrading node
- **fix(db):** Prevent migration runner safety aborts from triggering on fresh `DATA_DIR` installations by detecting new databases (#1328)
- **fix(mcp):** Checkpoint and close MCP audit SQLite database safely on process signals and shutdown (#1348)
- **fix(mcp):** Fully decouple MCP audit SQLite connection caching via globalThis to fix unhandled teardown in standalone Next.js chunks (#1349)
- **fix(cli):** Avoid creating app router directory during postinstall initialization on non-built source trees (#1351)
- **fix(codex):** Correctly translate `system` role to `developer` in input array to unlock GPT-5 automatic prompt caching (#1346)
- **fix(core):** Pass client headers to executor in chatCore (#1335)
- **fix(providers):** Separate test batch calls and ignore unknown connections
- **fix(providers):** Add grok-web SSO cookie validation handler (#1334)
- **fix(db):** Preserve key_value settings (dashboard passwords, saved aliases) across DB heuristic recreation cycles (#1333)
- **fix(routing):** Allow combo fallback to cascade context overflow 400 errors instead of immediate aborts (#1331)
- **fix(core):** Resolve thinking leaks, consecutive roles, and missing thoughtSignatures for Antigravity translator (#1316)
- **fix(translator):** Only apply thoughtSignature to the first `functionCall` part in Gemini parallel tool calls, preventing duplicate signatures
- **fix(providers):** Default to batch testing execution blocks for web, search, and audio modalities to prevent connection timeouts
- **fix(cli):** Resolve Node 22 TS entrypoint incompatibility by using esbuild compilation (#1315)
- **fix(chat):** Preserve max_output_tokens for Responses API targets in chatCore sanitization (#1313)
- **fix(api):** API Manager usage stats showing 0 for all registered keys (#1310)
- **fix(api):** Support image-only models in catalog and allow authless search providers to bypass validation requirements
- **fix(routes):** Require prompts for media generation requests (`/images`, `/videos`, `/music`), returning 400 on missing payloads
- **fix(dashboard):** Auto-scroll ActivityHeatmap to show current date (#1309)
- **fix(dashboard):** Restore horizontal layout with `w-max` wrapper in heatmap components
- **fix(i18n):** Update `nodeIncompatibleHint` to recommend Node 24 LTS across all 31 languages
- **fix(i18n):** Add Chinese i18n support to remaining dashboard components (`Loading.tsx`, `DataTable`, etc.)
- **fix(requestLogger):** Add missing `cacheSource` and `tps` columns to i18n log detail views

## [3.6.6] — 2026-04-15

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **feat(storage):** Add database backup cleanup controls, UI management, and customizable retention period env vars (#1304)
- **feat(providers):** Add Freepik Pikaso image generation provider with support for cookie/subscription-based auth modes (#1277)
- **feat(providers): Add Perplexity Web (Session) Provider** — Routes through Perplexity's internal SSE API using a session cookie, giving native proxy access without separate API costs to GPT-5.4, Claude Opus, Gemini 3.1 Pro, and Nemotron via preferences mapping (#1289)
- **feat(api): Sync Tokens & V1 WebSocket Bridge** — Dedicated sync token storage, issuance, revocation, and bundle download routes backed by stable config bundle versioning with ETag support. Exposes `/v1/ws` WebSocket upgrade route and a custom Next.js server bridge (`scripts/v1-ws-bridge.mjs`) so OpenAI-compatible WebSocket traffic can be proxied through the gateway. Compliance auditing expanded with structured metadata, pagination, request context, auth/provider credential events, and SSRF-blocked validation logging. New migrations: `024_create_sync_tokens.sql`. New modules: `syncTokens.ts`, `src/lib/sync/bundle.ts`, `src/lib/sync/tokens.ts`, `src/lib/ws/handshake.ts`, `src/lib/apiBridgeServer.ts`, `src/lib/compliance/providerAudit.ts`.
- **feat(models): GLM Thinking Preset & Hybrid Token Counting** — GLM Thinking (`glmt`) registered as a first-class provider preset with shared GLM model metadata, pricing, per-connection usage sync, dashboard support, and `maxTokens: 65536 / thinkingBudgetTokens: 24576` request defaults with 900s extended timeout. Provider-side `/messages/count_tokens` endpoint used when a Claude-compatible upstream supports it; gracefully falls back to estimation on missing models, missing credentials, or upstream failures. Startup seeding of default model aliases (`src/lib/modelAliasSeed.ts`) normalizes common cross-proxy model dialects so canonical slash-based model IDs are not misrouted. New file `open-sse/config/glmProvider.ts`.
- **feat(core): Hardened Outbound Provider Calls & Cooldown Retries** — Guarded outbound fetch helpers (`src/shared/network/safeOutboundFetch.ts`, `src/shared/network/outboundUrlGuard.ts`) blocking private/local URLs with configurable retry, timeout normalisation, and route-level status propagation for provider validation and model discovery. Cooldown-aware chat retries (`src/sse/services/cooldownAwareRetry.ts`) with configurable `requestRetry` and `maxRetryIntervalSec` settings and model-scoped cooldown responses. Improved rate-limit learning from headers and error bodies so short upstream lockouts can recover automatically. Runtime environment validation (`src/lib/env/runtimeEnv.ts`) checks env at startup. Pollinations now requires an API key. Antigravity and Codex header handling aligned via `open-sse/config/antigravityUpstream.ts` and `open-sse/config/codexClient.ts`. Gemini tool names restored in translated responses; synthetic Claude text block injected when upstream SSE completes empty.
- **feat(logs):** Add TPS (Tokens Per Second) metric to log details modal metadata grid (#1182)
- **feat(memory+skills):** Full-featured Memory & Skills systems with FTS5 SQLite search, dynamic UI pagination, backend observability, and extensive test coverage (#1228)
- **feat(bailian-quota):** Add Alibaba Coding Plan quota monitoring, multi-window quota extraction, and UI credential validation (#1235)
- **feat(storage): Call Log Storage Refactor** — Extracted heavy request/response JSON payloads from the core SQLite database (`storage.sqlite`) into filesystem artifacts stored within `DATA_DIR/call_logs`. This massively reduces WAL bloat and eliminates `SQLITE_FULL` crashes on high-traffic nodes (#1307).
- **feat(providers): Add Grok Web (Subscription) Provider** — Routes through the xAI web interface for subscription users via cookie session mapping (#1295).
- **feat(api): Advanced Media Support** — Extends OpenAI generic proxy layer to natively support `image`, `embeddings`, `audio-transcriptions`, and `audio-speech` workflows (#1297).
- **feat(cli-tools): Qwen Code CLI Integration** — Full integration for Qwen Code local execution mapping, model resolution, and dynamic API key fetching (#1266, #1263).
- **feat(oauth):** Supports `cursor-agent` CLI as a native Cursor credential source alongside the standard configuration (#1258).
- **feat(models):** Custom and imported models now merge correctly into filter lists for all available global providers (#1191).

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(providers):** match correct endpoint api.xiaomimimo.com for Xiaomi MiMo (#1303)
- **fix(core):** strip provider alias routing prefix from payload for custom endpoints to fix Azure OpenAI 400 errors (#1261)
- **fix(core):** ProxyFetch Undici dispatcher automatically bypasses LAN/local addresses, preventing fetch failures on internal OpenRouter requests (#1254)
- **fix(core):** Gemini thought stream signature detection upgraded to use native part.thought boolean, preventing reasoning text leaks (#1298)
- **deps:** bump hono from 4.12.12 to 4.12.14 to resolve CVE SSR HTML injection vulnerability (#1306, #59)
- **deps:** update dompurify to 3.4.0 in frontend overrides mitigating XSS HTML Injection (CVE-XYZ / Dependabot #60)
- **test:** Disable SQLite automatic backups during continuous integration (CI) tests to resolve E2E timeout issues limiting runner scaling (#24481475058)
- **feat(core): Proactive Context Compression** — `chatCore` now proactively compresses oversized message contexts before hitting upstream providers to dramatically reduce `context_length_exceeded` errors. Employs binary-search message pruning with structural integrity guarantees tracking explicit `tool_use` boundaries ensuring truncated tool inputs drop paired outputs appropriately (#1292, #1293)

- **fix(cli):** Resolve codex routing config parsing by strictly quoting section keys array, enforcing responses wire_api with fallback, and standardizing select-model button positioning mirroring Claude UI
- **fix(providers):** Correct Lobehub provider icons rendering by removing unsupported local references ensuring local SVG/PNG fallback mechanism invokes natively
- **fix(db):** Implement Database migration tracking safety abort safeguards (pre-migration backups via `VACUUM INTO` and mass renumbering warnings) to protect existing database structures on startup upgrades (#1281)
- **fix(dashboard):** Cleaned up target codex `config.toml` structure preventing recursive section rendering by enforcing quotes on section dot paths and mapping correct UI `OMNIROUTE_API_KEY` names.
- **fix(mcp):** Add dedicated explicit timeout constraint overrides for search handlers (#1280)
- **fix(crypto):** Add validation guard to encryption layer to surface clear UI errors when cryptographic environment variables are missing, replacing raw Node.js TypeErrors. Legacy env vars `OMNIROUTE_CRYPT_KEY` and `OMNIROUTE_API_KEY_BASE64` now also accepted as fallbacks (#1165)
- **fix(providers):** Update Pollinations provider definition to require API keys and specify their new limited pollen/hour free tier (#1177)
- **Streaming `\n\n` Artifact Fix (#1211):** Changed `<omniModel>` tag-stripping regex from `?` to `*` quantifier across `combo.ts`, `comboAgentMiddleware.ts`, and `contextHandoff.ts` to greedily strip all accumulated JSON-escaped newline sequences surrounding the tag. This prevents literal `\n\n` prefix artifacts from appearing in consumer streaming responses
- **E2E Combo Test Locator:** Fixed Playwright strict-mode violation in `combo-unification.spec.ts` by replacing ambiguous `getByRole` locator with a compound filter locator for the "All" strategy tab
- **fix(cc-compatible):** Trim beta flags and preserve cache passthrough for third-party HTTP proxy compatibility (#1230)
- **fix(providers):** Update Xiaomi MiMo endpoints to the live token-plan, migrating away from dead API URLs (#1238)
- **fix:** Forward client `x-initiator` header to GitHub Copilot upstream to accurately distinguish agent vs user turns (#1227)
- **fix:** Resolve backlog bugs including streaming edge cases, unhandled rejections, and quota parse failures (#1206, #1220, #1231, #1175, #1187, #1218, #1202)
- **fix(tests):** Resolve memory migration and skills route pagination bugs arising from PR overlaps
- **fix(i18n):** Add missing Chinese i18n support to dashboard components (`DataTable`, `EmptyState`, etc), update `en.json/zh-CN.json` routing keys, and natively resolve JSX defaults via `next-intl` (#1274)

### 🔧 Internal Improvements

- **Compliance Audit Expansion:** `src/lib/compliance/index.ts` expanded with structured metadata, pagination support, request context enrichment, and new `providerAudit.ts` module logging auth and provider credential events, SSRF-blocked validation attempts, and provider CRUD operations
- **Config Sync Bundle:** `src/lib/sync/bundle.ts` exports `buildConfigBundle()` generating a versioned JSON snapshot of settings, provider connections, nodes, model aliases, combos, and API keys (passwords redacted) with ETag support for bandwidth-efficient polling
- **Codex Client Constants:** Centralized `CODEX_CLIENT_VERSION`, `CODEX_USER_AGENT_PLATFORM`, and pattern-validated env overrides (`CODEX_CLIENT_VERSION`, `CODEX_USER_AGENT`) in `open-sse/config/codexClient.ts`
- **Antigravity Upstream Constants:** `open-sse/config/antigravityUpstream.ts` consolidates all Antigravity base URLs and model/fetchAvailableModels discovery path builders
- **Model Alias Seed:** `src/lib/modelAliasSeed.ts` seeds 30+ cross-proxy model dialect aliases (e.g. `openai/gpt-5` → `gpt-5`, `anthropic/claude-opus-4-6` → `cc/claude-opus-4-6`) at startup via idempotent `upsert`
- **Test Coverage:** 15+ new unit test suites covering sync routes, WebSocket bridge, compliance index, GLM provider config, cooldown-aware retry, safe outbound fetch, stream utilities, Codex executor, provider validation branches, model cross-proxy compatibility, and model alias seeding
- **TypeScript Migration:** Finalized migration of remaining JS tests (`proxy-load` and `testFromFile`) to TypeScript ES modules, ensuring a fully synchronized TS stack.
- **Reliability & Resilience:** Added exponential backoff to `models.dev` auto-sync to combat transient network failures, raised interval floor to 1 hour, and added LKGP debug logging for enhanced observability during routing. (#1286)

---

## [3.6.5] — 2026-04-13

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Antigravity AI Credits Fallback:** Automatically retries with `GOOGLE_ONE_AI` credit injection when free-tier quota is exhausted. Per-account credit balance (5-hour TTL) is cached from SSE `remainingCredits` and exposed as a numeric badge in the Provider Usage dashboard (#1190 — thanks @sFaxsy)
- **Claude Code Native Parity:** Full header/body signing parity with the Claude Code 2.1.87 OAuth client — CCH xxHash64 body signing with singleton WASM initialization promise (fixing race conditions), dynamic per-request fingerprint, bidirectional TitleCase ↔ lowercase tool name remapping (14 tools), API constraint enforcement (`temperature=1` for thinking, max 4 `cache_control` blocks, auto-inject ephemeral on last user message), and optional ZWJ obfuscation. Wired into `BaseExecutor` for automatic CCH signing on all `anthropic-compatible-cc-*` providers and into `chatCore` for synchronous parity pipeline steps (#1188 — thanks @RaviTharuma)
- **Per-Connection Codex Defaults:** Codex Fast Service Tier and Reasoning Effort settings are now per-connection instead of a single global toggle. Existing connections are migrated automatically on startup via an idempotent backfill migration (#1176 — thanks @rdself)
- **Cursor Usage Dashboard:** New `getCursorUsage()` fetches quotas from Cursor's `/api/usage`, `/api/auth/me`, and `/api/subscription` endpoints. Displays standard requests, on-demand usage, and per-plan limits (Free/Pro/Business/Team). Client version bumped to `3.1.0` and `x-cursor-user-agent` header added for parity
- **Database Health Check System:** Automated periodic SQLite integrity monitoring via `runDbHealthCheck()` — detects orphan quota/domain rows, broken combo references, stale snapshots, and invalid JSON state. Runs every 6 hours (configurable via `OMNIROUTE_DB_HEALTHCHECK_INTERVAL_MS`), with auto-repair and pre-repair backup. Exposed as **MCP tool #18** (`omniroute_db_health_check`) with Zod schemas and `autoRepair` option. Dashboard panel in Health page with status card, issue count, repaired count, and one-click repair button
- **OpenAI Responses API Store Opt-In:** Per-connection `openaiStoreEnabled` flag controls whether the `store` field is preserved or forced to `false` on Codex Responses API requests. When enabled, `previous_response_id`, `prompt_cache_key`, `session_id`, and `conversation_id` fields are round-tripped through the Chat Completions → Responses translation, enabling multi-turn context caching on supported providers
- **Email Privacy Toggle (Combos Page):** Global email visibility toggle (`EmailPrivacyToggle`) added to the Combos page header with responsive layout, tooltip guidance, and per-connection label masking via `pickDisplayValue()`. All combo builder options, provider connection lists, and quota screens now respect the global privacy state from `emailPrivacyStore`
- **skills.sh Integration:** Added `skills.sh` as an external skill provider. Users can now search, browse, and install agent skills directly from a new "skills.sh" tab in the Skills dashboard. Includes backend API resolvers, frontend implementation with search/install states, and a dedicated unit test suite (#1223 — thanks @RaviTharuma)
- **Stabilization Settings:** Added persistence support for `lkgpEnabled` and `backgroundDegradation` settings, integrated into `instrumentation-node.ts` for improved lifecycle awareness (#1212)
- **xxhash-wasm dependency:** Added `xxhash-wasm@^1.1.0` for CCH signing (xxHash64 with seed `0x6E52736AC806831E`)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Codex `stream: false` via Combo (ALL_ACCOUNTS_INACTIVE):** Fixed a critical bug where Codex combos returned `ALL_ACCOUNTS_INACTIVE` or empty content when the client sent `stream: false`. Root cause was triple: (1) `CodexExecutor.transformRequest()` mutated `body.stream` in-place to `true`, contaminating the combo's quality check which skipped validation thinking it was streaming; (2) the non-stream SSE parser used the wrong format (Chat Completions instead of Responses API) for Codex SSE output; (3) combo quality validation read the mutated `body.stream` instead of the client's original intent. Fixed by: cloning the body via `structuredClone()` in CodexExecutor, detecting Codex/Responses SSE format in the non-stream fallback path (with auto-translation back to Chat Completions), and capturing `clientRequestedStream` before the combo loop
- **Gemini CLI Tool Schema Rejection:** Fixed 400 Bad Request errors from the Google API by strictly filtering non-standard vendor extensions (starting with `x-`) and `deprecated` fields from tool parameter schemas (#1206)
- **SOCKS5 Proxy Interop (Node.js 22):** Resolved `invalid onRequestStart method` crashes caused by `undici` version mismatches between dispatchers and the built-in fetch. Hardened `proxyFetch.ts` to strictly use the library's fetch implementation for custom dispatchers (#1219)
- **Search Cache Coalescing with TTL=0:** Fixed a bug where providers configured with `cacheTTLMs: 0` (caching explicitly disabled) still had concurrent requests coalesced and returned `{ cached: true }`. Now each call gets its own independent upstream fetch (#1178 — thanks @sjhddh)
- **Antigravity Credit Cache Alignment (PR #1190):** Reconciled `accountId` derivation between `AntigravityExecutor.collectStreamToResponse` and `getAntigravityUsage` to use consistent cache keys (`email || sub || "unknown"`). Previously, SSE-parsed credit balances could be written under a different key than the one read by the usage dashboard, causing stale/missing credit badges
- **Non-streaming reasoning_content Duplication:** Fixed clients rendering duplicated reasoning panels when both `reasoning_content` and visible `content` were present in non-streaming responses. `responseSanitizer` now strips `reasoning_content` from messages that already have visible text content, preserving it only for reasoning-only messages
- **Streaming Regression Fix:** Hardened the `sanitize` TransformStream in the combo engine to strip both literal and JSON-escaped newline sequences, eliminating leading `\n\n` prefixes in assistant responses (#1211)
- **Gemini Empty Choice Fix:** Ensured initial assistant deltas always include an empty `content: ""` string to satisfy strict OpenAI client requirements and prevent empty choice responses in tools (#1209)
- **Gemini Tools Sanitizer Deduplication:** Extracted shared tool conversion logic into `buildGeminiTools()` helper (`geminiToolsSanitizer.ts`), eliminating duplicate implementations between `openai-to-gemini.ts` and `claude-to-gemini.ts`. The new helper correctly handles `web_search` / `web_search_preview` tool types by emitting `googleSearch` tools with priority over function declarations
- **Qwen/Qoder Thinking+Tool_Choice Conflict:** Added `sanitizeQwenThinkingToolChoice()` to both `DefaultExecutor` (for Qwen provider) and `QoderExecutor` to prevent provider-side 400 errors when clients send `tool_choice` alongside thinking/reasoning parameters that are mutually exclusive upstream
- **API Key Deletion Orphan Cleanup:** Deleting an API key now also removes associated `domain_budgets` and `domain_cost_history` rows, preventing orphan data accumulation
- **CC-compatible test assertion:** Fixed pre-existing test that expected no `cache_control` on system blocks — the billing header system block now carries `cache_control: { type: "ephemeral" }` per PR #1188 design
- **Codex Combo Smoke Test False Positives:** Fixed combo tests incorrectly reporting `ERROR` for valid Codex streaming responses when `response.output` is empty but text deltas were emitted. The summary now falls back to accumulated delta text (#1176 — thanks @rdself)
- **Electron Builder Version Mismatch:** Fixed Electron desktop startup failures on Windows packaged builds caused by native modules (`better-sqlite3`) being under `app.asar.unpacked` while helpers were in `app/node_modules`. `resolveServerNodePath()` now merges both locations with deduplication and existence checks (#1172 — thanks @backryun)

### 🔧 Internal Improvements

- **SSE Parser: Responses API Non-Stream Conversion:** Added full `parseSSEToResponsesOutput()` implementation in `sseParser.ts` (255+ lines) — reconstructs complete Responses API objects from SSE event streams, handling `response.output_text.delta/done`, `response.reasoning_summary_text.delta/done`, `response.function_call_arguments.delta/done`, and terminal events. Used by the new chatCore non-stream fallback path for Codex
- **Cursor Executor Version Sync:** Updated Cursor client User-Agent to `3.1.0` and centralized version constants (`CURSOR_CLIENT_VERSION`, `CURSOR_USER_AGENT`) for consistent fingerprinting across executor, usage fetcher, and OAuth flows
- **Responses API Translator Parity:** `convertResponsesApiFormat()` now accepts credentials and passes them through to the translator, enabling store-aware field propagation. Round-trip preservation of `previous_response_id`, `prompt_cache_key`, `session_id`, and `conversation_id` fields
- **Provider Schema Validation:** Added `openaiStoreEnabled` boolean validation to `providerSpecificData` Zod schema
- **Combo Error Response Normalization:** Empty combo targets now return 404 (`comboModelNotFoundResponse`) instead of generic 503, improving client-side error differentiation
- **Dependency Updates:** Bumps `typescript-eslint` to `8.58.2` (dev), `axios` to `1.15.0` (prod), and `next` to `16.2.2` (prod) (#1224, #1225)

### ⚠️ Breaking Changes

- **`DELETE /api/settings/codex-service-tier` removed:** This endpoint no longer exists. Codex Service Tier configuration has moved to per-connection `providerSpecificData.requestDefaults`. Existing connections are migrated automatically on first startup after upgrade. Any external scripts or integrations that call this endpoint should be updated — use `PUT /api/providers/:id` with `providerSpecificData.requestDefaults.serviceTier` instead (#1176).
- **CCH signing on CC-compatible providers:** All requests to `anthropic-compatible-cc-*` providers now include an xxHash64 integrity token (`cch=...`) in the billing header. Providers that do not validate CCH will ignore it (no behavioral change), but any custom middleware inspecting the billing header should expect a 5-character hex token instead of the `00000` placeholder

---

## [3.6.4] — 2026-04-12

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Combo Builder v2 (Wizard UI):** Completely redesigned the combo creation/editing interface as a multi-stage wizard with stages: Basics → Steps → Strategy → Review. The builder fetches provider, model, and connection metadata via a new `GET /api/combos/builder/options` endpoint, enabling precise provider/model/account selection with duplicate detection and automatic next-connection suggestion. Heavy UI components (`ModelSelectModal`, `ProxyConfigModal`, `ModelRoutingSection`) are now lazily loaded via `next/dynamic` for faster initial page render
- **Combo Step Architecture (Schema v2):** Introduced a structured step model (`ComboModelStep`, `ComboRefStep`) replacing the legacy flat string/object combo entries. Steps carry explicit `id`, `kind`, `providerId`, `connectionId`, `weight`, and `label` fields, enabling pinned-account routing, cross-combo references, and per-step metrics. All combo CRUD operations normalize entries through the new `src/lib/combos/steps.ts` module. Zod schemas updated with `comboModelStepInputSchema` and `comboRefStepInputSchema` unions
- **Composite Tiers System:** Added tiered model routing via `config.compositeTiers` — each tier maps a named stage to a specific combo step with optional fallback chains. Includes comprehensive validation (`src/lib/combos/compositeTiers.ts`) ensuring step existence, preventing circular fallback, and validating default tier references. Zod schema enforcement blocks composite tiers on global defaults (concrete combos only)
- **Model Capabilities Registry:** Created `src/lib/modelCapabilities.ts` providing `getResolvedModelCapabilities()` — a unified resolver that merges static specs, provider registry data, and live-synced capabilities into a single `ResolvedModelCapabilities` object covering tool calling, reasoning, vision, context window, thinking budget, modalities, and model lifecycle metadata
- **Observability Module:** Extracted health and telemetry payload construction into `src/lib/monitoring/observability.ts` with `buildHealthPayload()`, `buildTelemetryPayload()`, and `buildSessionsSummary()` builders. The health endpoint now returns session activity, quota monitor status, and per-provider breakdowns alongside existing system metrics
- **Session & Quota Monitor Dashboard:** Added live Session Activity and Quota Monitors panels to the Health dashboard, showing active session counts, sticky-bound sessions, per-API-key breakdowns, and top session details alongside quota monitor alerting/exhausted/error status with per-provider drill-down
- **Combo Health Per-Target Analytics:** The combo-health API now resolves per-target metrics using the new `resolveNestedComboTargets()` function, providing step-level success rates, latency, and historical usage breakdowns per execution key — enabling per-account, per-connection health visibility
- **Auto-Combo → Combos Unification:** Merged the separate `/dashboard/auto-combo` page into the main `/dashboard/combos` page. Auto/LKGP combos are now managed alongside all other combos with a new strategy filter tabs system (All / Intelligent / Deterministic). The old auto-combo route redirects to `/dashboard/combos?filter=intelligent`. Removed the `auto-combo` sidebar entry, consolidating navigation into the single `Combos` item
- **Intelligent Routing Panel (`IntelligentComboPanel`):** New inline panel (371 lines) within the combos page that shows real-time provider scores, 6-factor scoring breakdown (quota, health, cost, latency, task fitness, stability), mode pack selector, incident mode status, and excluded providers for `auto`/`lkgp` combos — replacing the former standalone auto-combo dashboard
- **Builder Intelligent Step (`BuilderIntelligentStep`):** New conditional wizard step (280 lines) that appears in the Builder v2 flow only when `strategy=auto` or `strategy=lkgp` is selected. Exposes candidate pool selection, mode pack presets, router sub-strategy selector, exploration rate slider, budget cap, and collapsible advanced scoring weights configuration
- **Intelligent Routing Module (`intelligentRouting.ts`):** Extracted strategy categorization and filtering logic into a dedicated shared module (210 lines) with `getStrategyCategory()`, `isIntelligentStrategy()`, `filterCombosByStrategyCategory()`, `normalizeIntelligentRoutingFilter()`, and `normalizeIntelligentRoutingConfig()` utility functions
- **LKGP Standalone Strategy:** Implemented `lkgp` (Last Known Good Provider) as a fully functional standalone combo strategy. Previously, `lkgp` as a combo strategy silently fell through to `priority` ordering — the LKGP lookup only ran inside the `auto` engine. Now `strategy: "lkgp"` correctly queries the LKGP state, moves the last successful provider to the top of the target list, and saves the LKGP state after each successful request. Falls back to priority ordering when no LKGP state exists
- **Unified Routing Rules & Model Aliases:** Consolidated the routing rules and model alias management controls into the Settings page, reducing fragmentation across the dashboard

### ⚡ Performance

- **Middleware Lazy Loading:** Refactored `src/proxy.ts` to lazy-import `apiAuth`, `db/settings`, and `modelSyncScheduler` modules, reducing middleware cold-start overhead. Added inline `isPublicApiRoute()` to avoid loading the full auth module for public routes
- **E2E Auth Bypass:** Added `NEXT_PUBLIC_OMNIROUTE_E2E_MODE` environment flag to bypass authentication gates for dashboard and management API routes during Playwright E2E test runs

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **P2C Credential Selection:** Implemented Power-of-Two-Choices (P2C) connection scoring in `src/sse/services/auth.ts` with quota headroom awareness, error/recency penalties, and forced/excluded connection support. The new `getProviderCredentialsWithQuotaPreflight()` function integrates quota preflight checks directly into credential selection, eliminating the separate Codex-only preflight path
- **Fixed-Account Combo Steps:** Combo steps with explicit `connectionId` now correctly bypass provider-level model cooldowns and circuit breakers, preventing a single account failure from blocking pinned-connection routing for the same model
- **Combo Metrics Per-Target Tracking:** Extended `comboMetrics.ts` to track `byTarget` metrics keyed by execution path, recording per-step `provider`, `providerId`, `connectionId`, and `label` alongside existing per-model aggregates
- **Call Logs Schema Expansion:** Added `requested_model`, `request_type`, `tokens_cache_read`, `tokens_cache_creation`, `tokens_reasoning`, `combo_step_id`, and `combo_execution_key` columns to `call_logs` with auto-migration. Added composite index `idx_cl_combo_target` for efficient per-target historical queries
- **Quota Monitor Enrichment:** Expanded `quotaMonitor.ts` with full lifecycle state tracking (`status`, `startedAt`, `lastPolledAt`, `consecutiveFailures`, `totalPolls`, `totalAlerts`), ISO-formatted snapshots via `getQuotaMonitorSnapshots()`, and sorted summary via `getQuotaMonitorSummary()`
- **Codex Quota Fetcher Hardening:** Improved `codexQuotaFetcher.ts` with safer connection registration and quota fetch error handling
- **LKGP Save Refactored to Async/Await:** Replaced fire-and-forget `.then()` chain for LKGP persistence after successful combo routing with proper `async/await` + `try/catch`, preventing unhandled promise rejections and ensuring LKGP state is reliably saved before the response is returned
- **Duplicate `auto` in Combo Strategy Schema:** Removed duplicate `"auto"` entry from `comboStrategySchema` (was listed on both line 104 and 108). Harmless to Zod runtime but cleaned up to avoid confusion. Schema now has exactly 13 unique strategy values
- **Legacy Combo Refs Normalization:** Fixed combo step normalization to preserve legacy string combo references during CRUD operations, preventing data loss when editing combos created before the v2 step architecture

### सुरक्षा

- **Auth Bypass on Backup Routes (Critical):** Added `isAuthenticated` guards to `/api/db-backups/exportAll` (full database export) and `/api/db-backups` (list, create, and restore backups) — both were previously accessible without authentication
- **Auth Guard on Translator Save:** Added `isAuthenticated` guard to `/api/translator/save` for defense-in-depth consistency
- **API Key Secret Hardening:** Removed the hardcoded `"omniroute-default-insecure-api-key-secret"` fallback from `apiKey.ts` — the function now fails fast if `API_KEY_SECRET` is unset, relying on the startup validator to auto-generate it
- **NPM Tarball Leak Fix:** Added `app/.env*` to `.npmignore` to prevent the working `.env` file from being shipped inside the npm tarball distribution
- **Electron Builder CVE Fix:** Bumped `electron-builder` to 26.8.1 to resolve `tar` CVEs in the desktop build pipeline

### 🔧 Maintenance & Infrastructure

- **DB Migration 021:** Added `combo_call_log_targets` migration for `combo_step_id` and `combo_execution_key` columns in call_logs
- **Combo CRUD Normalization:** `db/combos.ts` now normalizes all stored combo entries through the step normalization pipeline on read, ensuring consistent step IDs and kind annotations regardless of when the combo was created
- **Playwright Config:** Updated Playwright configuration and `run-next-playwright.mjs` script for improved E2E test orchestration
- **Build Script:** Updated `build-next-isolated.mjs` with additional reliability improvements
- **Auto-Combo UI Cleanup:** Deleted `AutoComboModal.tsx` (161 lines), replaced `auto-combo/page.tsx` (478→5 lines) with a server-side redirect to `/dashboard/combos?filter=intelligent`
- **Sidebar Consolidation:** Removed `"auto-combo"` from `HIDEABLE_SIDEBAR_ITEM_IDS` and `PRIMARY_SIDEBAR_ITEMS` — `normalizeHiddenSidebarItems()` silently discards any stale `"auto-combo"` entries in user settings
- **Schema Cleanup:** Removed obsolete `createAutoComboSchema` from `schemas.ts`. Exported `comboStrategySchema` for direct use in test and filter modules
- **A2A Agent Card Update:** Renamed skill ID from `auto-combo` to `intelligent-routing` with updated description referencing the unified combos dashboard
- **Builder Draft Refactor:** Extended `builderDraft.ts` with dynamic stage list generation via `getComboBuilderStages()` and `isIntelligentBuilderStrategy()`. Stage navigation (`getNextComboBuilderStage`, `getPreviousComboBuilderStage`, `canAccessComboBuilderStage`) now accepts options to conditionally include/skip the `intelligent` wizard step
- **i18n Consolidation:** Removed the standalone `"autoCombo"` i18n block (22 keys) from all 30 language files. Migrated keys into the `"combos"` block with new additions for filter tabs, intelligent panel, and builder step labels

### 🧪 Tests

- **16 New Test Suites:** Added comprehensive test coverage including:
  - `combo-builder-draft.test.mjs` (186 lines) — Builder draft step construction and validation
  - `combo-builder-options-route.test.mjs` (228 lines) — Builder options API endpoint
  - `combo-health-route.test.mjs` (266 lines) — Combo health analytics with per-target metrics
  - `combo-routes-composite-tiers.test.mjs` (157 lines) — Composite tiers API integration
  - `composite-tiers-validation.test.mjs` (131 lines) — Composite tier validation rules
  - `db-combos-crud.test.mjs` — Combo CRUD with step normalization
  - `db-core-init.test.mjs` (129 lines) — DB initialization and column migrations
  - `model-capabilities-registry.test.mjs` (105 lines) — Model capabilities resolution
  - `observability-payloads.test.mjs` (165 lines) — Health/telemetry payload construction
  - `openapi-spec-route.test.mjs` — OpenAPI spec generation
  - `proxy-e2e-mode.test.mjs` (74 lines) — E2E mode auth bypass
  - `quota-monitor.test.mjs` — Quota monitor lifecycle state
  - `run-next-playwright.test.mjs` (119 lines) — Playwright runner script
  - `sse-auth.test.mjs` (154 lines) — P2C credential selection and quota preflight
  - `telemetry-summary-route.test.mjs` (35 lines) — Telemetry summary endpoint
  - Plus updates to 12 existing test files for compatibility with new step architecture
- **Auto-Combo Unification Tests:**
  - `autocombo-unification.test.mjs` (156 lines) — Strategy categorization, schema deduplication, sidebar cleanup, and routing strategies metadata validation
  - `combo-unification.spec.ts` (189 lines) — Playwright E2E tests for filter tabs, intelligent panel rendering, redirect from old route, sidebar entry removal, and Builder v2 intelligent step flow
  - 3 new LKGP standalone tests in `combo-routing-engine.test.mjs` — Validates LKGP provider prioritization, fallback to priority when no state exists, and LKGP state persistence after successful requests
  - Updated `combo-builder-draft.test.mjs` with intelligent stage navigation tests
  - Updated `sidebar-visibility.test.mjs` to reflect `auto-combo` removal

---

## [3.6.3] — 2026-04-11

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **OpenAI-Compatible Loose Validation:** Empty API keys can now be naturally submitted and saved for any `openai-compatible-*` providers (e.g. Pollinations, localized routes) directly in the UI instead of blocking save actions (#1152)
- **Cloudflare Configuration:** Updated the provider schema and UI integration for Cloudflare AI to officially expose and support the backend `accountId` field securely without overrides (#1150)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Vertex JSON Validation Crash:** Prevented `invalid character in header` crashes inside the `/validate` endpoint by creating a native authentication parser that correctly handles Google Identity Service Account JSON flows prior to pinging endpoints (#1153)
- **Extraneous Payload Rejection:** Globally prevented upstream `400 Bad Request` execution crashes by stripping the non-standard `prompt_cache_retention` attribute forcibly attached by Cursor/Cline IDE engines when targeting strict OpenAI/Anthropic routes (#1154)
- **Reasoning Content Drop:** Prevented pure reasoning packets, common in advanced fallback models like DeepSeek, from being aborted mid-stream by explicitly adjusting the `Empty Content (502)` circuit breakers to acknowledge `reasoning_content` states as valid (#1155)
- **Desktop Windows Build Crash:** Fixed `better_sqlite3.node is not a valid Win32 application` preventing OmniRoute Desktop from launching on Windows by properly removing the ABI-mismatched sqlite cache from Next.js standalone and falling back to the cross-compiled Electron equivalent during packager build steps (#1163)
- **Login Visual Security:** Removed the raw fallback hash dump that artificially rendered underneath the login modal in Docker instances missing `OMNIROUTE_API_KEY_BASE64` flags (#1148)

### 🔧 Maintenance & Dependencies

- **Dependabot Updates:** Safely bumped GitHub Actions `docker/build-push-action` to v7 and `actions/download-artifact` to v8
- **Electron Updates:** Upgraded desktop wrapper core to Electron `41.2.0` and `electron-builder` to `26.8.1`, incorporating essential V8/Chromium security patches
- **NPM Package Groups:** Updated `production` and `development` NPM groups to securely handle minor audit warnings and keep toolchains modern
- **CI/CD Reliability:** Fixed persistent `Snyk` token-absence failures on automated pull requests by appropriately bypassing on dependabot actions

## [3.6.2] — 2026-04-11

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **33 New API Key Providers:** Massive provider expansion adding DeepInfra, Vercel AI Gateway, Lambda AI, SambaNova, nScale, OVHcloud AI, Baseten, PublicAI, Moonshot AI, Meta Llama API, v0 (Vercel), Morph, Featherless AI, FriendliAI, LlamaGate, Galadriel, Weights & Biases Inference, Volcengine, AI21 Labs, Venice.ai, Codestral, Upstage, Maritalk, Xiaomi MiMo, Inference.net, NanoGPT, Predibase, Bytez, Heroku AI, Databricks, Snowflake Cortex, and GigaChat (Sber). OmniRoute now supports **100+ providers** (4 Free + 8 OAuth + 91 API Key + Custom compatible)
- **Global Email Privacy Toggle:** Added a persistent eye-icon toggle button across all dashboard pages (Providers, Usage Limits, Playground) that reveals or hides masked email addresses. Toggle state is stored in localStorage and synced globally via Zustand store
- **Documentation Refresh:** Updated README, ARCHITECTURE, FEATURES, AGENTS.md, and API_REFERENCE for v3.6.2 with accurate provider counts (100+), new executor list, and system API documentation
- **Uninstall Guide:** Created comprehensive `docs/UNINSTALL.md` covering clean uninstallation for all deployment methods (npm, Docker, Electron, source)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **PDF Attachments:** Unlocked deep string object parsing (`geminiHelper`) ensuring Gemini translation successfully passes complex PDF payloads from OpenAI-compatible streams without dropping them silently (#993)
- **SkillsMP Engine:** Corrected object extraction path mappings inside the API router to fix UI marketplace rendering under Docker/Standalone Node isolated deployments (#988)

---

## [3.6.1] — 2026-04-10

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **OAuth Env Repair Action:** Added a "Repair env" button to the OAuth Providers dashboard that detects and restores missing OAuth client IDs from `.env.example` — with timestamped backup and append-only safety. Includes full 33-language i18n support and sanitized API responses (#1116, by @yart)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **i18n: Missing Provider Keys:** Added missing `filterModels`, `modelsActive`, `showModel`, `hideModel` keys across all 32 locale files, fixing runtime `MISSING_MESSAGE` errors in the providers UI. Also cleaned up duplicate keys in `en.json` (#1111, by @rilham97)
- **GPT-5.4 Routing:** Added missing `targetFormat: "openai-responses"` to `gpt-5.4` and `gpt-5.4-mini` models in both the Codex and GitHub Copilot providers, fixing `[400]: model not accessible via /chat/completions` errors (#1114, by @ask33r)

---

## [3.6.0] — 2026-04-10

### ✨ New Features & Analytics

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Combo Smoke Test:** Raised the default token budget to 2048 to prevent truncation of thinking models during preflight checks, and fully randomized the arithmetic probe prompt to bypass deterministic caching from upstream relays (#1105)

### 🐛 Bug Fixes & Compliance

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **DB Bloat / Row Limits:** Added `CALL_LOGS_TABLE_MAX_ROWS` and `PROXY_LOGS_TABLE_MAX_ROWS` (default: 100,000) to the backend DB compliance cleaner to prevent runaway SQLite growth. Limits are enforced automatically on the TTL cycle (#1104, fixes #1101)
- **HTML Error Handling:** The router now correctly identifies unexpected HTML responses (e.g. `<!DOCTYPE html>`) sent by upstream providers (like Azure/Copilot) instead of throwing obscure `Unexpected token '<'` JSON parse errors, bubbling up a clean 502 Bad Gateway (#1104, fixes #1066)
- **Android/Termux SQLite Native Support:** `better-sqlite3` is now correctly built from source with cross-compilation flags in ARM64 local Termux deployments without failing on missing prebuilt binaries (#1107)

---

## [3.5.9] — 2026-04-09

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Persistent Combo Ordering:** Drag combo cards by handle to reorder them in the dashboard; order is persisted to SQLite via a new `sort_order` column and `POST /api/combos/reorder` endpoint. Includes DB migration `020_combo_sort_order.sql` and JSON import preservation (#1095)
- **Sidebar Group Reorder:** Moved "Logs" before "Health" in the System section and "Limits & Quotas" after "Cache" in the Primary section for a more logical navigation flow (#1095)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Stream Failure Surfacing:** Upstream `response.failed` events (e.g. Codex rate-limit errors) are now properly surfaced as non-200 errors instead of being silently swallowed as empty 200 OK streams. Rate-limit failures return HTTP 429 (#1098, closes #1093)
- **Upstream Model Preservation:** The Responses-to-OpenAI stream translator now preserves the actual upstream model (e.g. `gpt-5.4`) instead of hardcoding a `gpt-4` fallback (#1098, closes #1094)
- **Docker EXDEV Fix:** `build-next-isolated.mjs` now falls back from `fs.rename()` to `cp/rm` when Docker buildx raises `EXDEV` (cross-device link), unblocking the Docker image publish workflow (#1097)
- **macOS CLI Path Resolution:** `cliRuntime.ts` resolves symlink parents with `fs.realpath()` to handle macOS `/var` → `/private/var` chains, preventing false `symlink_escape` rejections (#1097)
- **Request Log Token Layout:** Split token badges into separate Input (Total In, Cache Read, Cache Write) and Output (Total Out, Reasoning) groups for clearer readability; renamed "Time" label to "Completed Time" (#1096)

---

## [3.5.8] — 2026-04-09

### ✨ New Features & Analytics

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Analytics Layout Redesign:** Replaced flat metrics with a responsive `CompactStatGrid`, grouping data visually across sections (#1089)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Build Core:** Force Turbopack cleanup via Prepbulish script to prevent Next.js 16 app/ routing conflicts on runtime.
- **Provider Quarantine:** Introduces model/provider circuit-breakers with adaptive TTL exponential backoff for recurring upstream errors (#1090)
- **Oauth Keep-Alive:** Safely protects authenticated active accounts against spontaneous dropping from router due to transient token refresh failures (#1085)

### 🔒 Security & Maintenance

- **Dependabot:** bumped axios from 1.14.0 to 1.15.0 addressing SSRF flags (#1088)

---

## [3.5.7] — 2026-04-09

### 🐛 Bug Fixes & Security

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Turbopack Standalone Chunks:** Fixed a critical bug in `scripts/prepublish.mjs` where Turbopack chunks missing from the `.next/standalone` trace resulted in a `500 ChunkLoadError` (e.g., `_not-found` page crash) during production deployments via NPM or Docker. Standalone chunks are now explicitly copied and correctly stripped of Turbopack hashes.

---

## [3.5.6] — 2026-04-09

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Email Privacy Masking:** OAuth account emails are now masked in the provider dashboard (e.g. `di*****@g****.com`) to prevent accidental exposure when sharing screenshots. Full address visible on hover via `title` attribute (#1025).
- **OpenRouter & GitHub in Embedding/Image Registries:** OpenRouter (3 embedding models, 4 image models) and GitHub Models (2 embedding models via Azure inference) are now first-class entries in the provider registries, enabling their use for `/v1/embeddings` and `/v1/images/generations` (#960).
- **Model Visibility Toggle & Search Filter:** The provider page model list now includes a real-time search/filter bar and a per-model visibility toggle (👁 icon). Hidden models are grayed out and excluded from the `/v1/models` catalog. An active-count badge (`N/M active`) shows at a glance how many models are enabled (#750).
- **Chinese Localization (zh-CN):** Added missing translations for Context Relay, Memory, LKGP, and Models.dev sync features, while standardizing terminology across the application (#1079).
- **Environment Auto-Sync:** Added `sync-env.mjs` to auto-generate and append `.env` from `.env.example` during installation, automatically generating cryptographic secrets on first run.
- **Source Mode Dashboard Update:** Fixed real-time Source (git-checkout) updating in the dashboard, enabling secure, real-time update pipelines for non-NPM installations.

### 🐛 Bug Fixes & Security

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Hardcoded Secret Cleanup:** Removed 12 hardcoded OAuth credential fallbacks from the source code, forcing secure reliance on environment variables and resolving static analysis security alerts.
- **Next.js Security Patch:** Bumped `next` from 16.2.2 to 16.2.3 to resolve critical RSC deserialization RCE vulnerability (SNYK-JS-NEXT-15954202).
- **Memory/Cache UI Crash:** Added null-safety guards (`?? 0`) to `.toLocaleString()` calls in Memory and Cache dashboard pages, preventing `TypeError` crashes when database tables are empty or contain null numeric values (#1083).
- **WebSearch tool_choice Translation:** Fixed OpenAI-to-Claude translator dropping `tool_choice` objects with `type: "function"` as-is, which Claude rejects. Now properly maps all OpenAI `tool_choice` variants (`function`, `required`, `none`) to Claude-compatible format (`tool`, `any`, `auto`), fixing "Did 0 searches" in Claude Code WebSearch (#1072).
- **Provider Validation baseUrl Override:** Added `baseUrl` passthrough from frontend validation requests to the backend validation endpoint. Chinese-site users of Alibaba Coding Plan (bailian-coding-plan) can now validate API keys against their custom Base URL instead of always hitting the international endpoint (#1078).
- **Minimax Auth Header:** Switched Minimax provider from `x-api-key` to `Authorization: Bearer` header format, matching the current API spec (#1076).
- **Native Fetch Fallback:** Added graceful fallback to native `fetch` when the `undici` dispatcher fails, improving resilience in environments where undici is unavailable (#1054).
- **EPIPE Flood Fix:** Added circuit-breaker logic to prevent EPIPE errors from creating a feedback loop that fills logs at GB/s (#1006).
- **Qoder PAT Validation:** Improved Qoder Personal Access Token validation with actionable error messages that guide users to the correct token format (#966).
- **CI/CD Pipeline:** Fixed `check:docs-sync` failure by syncing OpenAPI version to 3.5.6 and finalizing CHANGELOG release heading. Commented out `DATA_DIR` in `.env.example` to prevent E2E test failures in CI runners lacking root permissions.

### 🌍 i18n

- **Auto Language Generation (CI):** Added CI pipeline to auto-generate missing language files and strings via `feat(CI,i18n)` workflow, covering 30+ locales (#1071).

---

## [3.5.5] — 2026-04-08

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Node.js 24 Compatibility Warning:** Added a proactive version incompatibility warning on the login page to guide users to the stable Node.js 22 LTS, preventing native sqlite binding crashes.
- **Context Relay Combo Strategy:** Added the new `context-relay` combo strategy with priority-style routing, structured handoff summary generation once quota usage reaches the warning threshold, and handoff injection after the next real account switch.
- **Global Context Relay Defaults:** Added global Settings defaults plus combo-level configuration for `handoffThreshold`, `handoffModel`, and `handoffProviders`, so new or unconfigured combos can inherit the feature consistently.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Proxy Connection Healthchecks:** Applied proxy resolution per connection in the sweeping loop (`tokenHealthCheck.ts`) and global provider validation sweeps, resolving Node 22 bypass and improving proxy stability (#1051, #1056, #1061).
- **Security Vulnerability Remediation:** Resolved multiple CodeQL scanning alerts including SSRF in model sync, insecure randomness in web crypto (`generateSessionId`), and incomplete URL sanitization.
- **Context Relay Typing & Synchronization:** Reverted out-of-scope test breakages and resolved `handoffProvider` and response `input` extraction payload typing.
- **Legacy OpenAI-Compatible Responses Routing:** Fixed legacy/imported OpenAI-compatible providers (for example `openai-compatible-sp-openai`) incorrectly routing Chat Completions traffic to `/chat/completions` when the real provider node was configured as `apiType: "responses"`. OmniRoute now treats `providerSpecificData.apiType` as authoritative across routing, executors, and translator tools, avoiding false empty-content failures during combo/provider smoke tests (#1069).
- **Gemini PDF Attachment Integration:** Fixed payload generation and format for parsing `inline_data` and generic base64 sources for deep Gemini PDF routing (#993, #1021).
- **Vercel AI SDK Fallbacks:** Mapped `max_output_tokens` to `max_tokens` for strict OpenAI-compatible providers, resolving errors from standard AI agents and frameworks (#994).
- **External Auth & UI Reliability:** Handled null `state` failures in Cline OAuth exchange (#1016), added 3rd-party 400 error patterns to combo fallback (#1024), and resolved desktop sidebar layout and popover overflows (#1039, #1001).
- **Context Relay In-Flight Deduplication:** Prevented duplicate handoff generation for the same session/combo while an earlier summary request is still in flight.
- **Context Relay Provider Gating:** Aligned runtime behavior with configuration so explicit `handoffProviders` exclusions, including an empty array, now disable handoff generation as expected.

### 🛠️ Maintenance & Dependabot

- **Updated Sub-dependencies:** Bumped `hono` to `4.12.12` and `@hono/node-server` to `1.19.13` to patch critical security gaps (#1063, #1064, #1067, #1068).

### दस्तावेज़

- **Documentation Synchronization:** Updated system documentation (README, Architecture, Features, Tools, Troubleshooting) and synced `i18n` configurations to match the v3.5.5 context relay patterns and proxy troubleshooting steps.
- **Context Relay Delivery Notes:** Documented the current architecture, runtime flow, and Codex-focused scope in the feature docs, changelog, and agent guidance.

---

## [3.5.4] — 2026-04-07

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Detailed Token Tracking:** Added granular token breakdown columns (cache read, cache write, reasoning) to call logs with proper null vs zero distinction. Includes DB migration 018 and 5-label UI display per provider capability (#1017 — thanks @rdself).
- **Legacy JSON Config Import/Export:** Restored JSON-based settings export and import for migration from legacy 9router configurations. Security-hardened with Zero-Trust redaction of passwords and `requireLogin` fields, and automatic pre-import database backups (#1012 — thanks @luandiasrj).
- **Non-Stream Aliases:** Added API support for explicit non-streaming aliases (`non_stream`, `disable_stream`, `disable_streaming`, `streaming=false`), normalized at the boundary before provider translation (#1036 — thanks @wlfonseca).
- **Russian Dashboard Localization:** Comprehensive Russian translation for the dashboard UI, including fixes for 2 Ukrainian locale keys (#1003 — thanks @mercs2910).

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Anthropic Streaming Input Undercount:** Fixed a critical bug where Anthropic streaming `prompt_tokens` only reported non-cached tokens (e.g., `in=3` when actual total was 113,616). Cache tokens are now summed into prompt_tokens during streaming (#1017).
- **Built-in Responses API Tool Types:** Preserved built-in Responses API tools (`web_search`, `file_search`, `computer`, `code_interpreter`, `image_generation`) from being silently stripped by the empty-name tool filter — these tools carry no `.name` field (#1014 — thanks @rdself).
- **Cursor/Codex Responses Compatibility:** Fixed empty output in Cursor when using Codex models by hoisting system input items to `instructions`, sanitizing invalid tool names, and detecting Responses-format payloads on chat/completions endpoint (#1002 — thanks @mercs2910).
- **OAuth Token Expiry Display:** Fixed OAuth connections showing "expired" badge even with valid tokens by reading `tokenExpiresAt` (updated on refresh) instead of `expiresAt` (original grant timestamp) (#1032 — thanks @tombii).
- **Codex Fast-Tier Copy:** Corrected dashboard settings copy from `service_tier=fast` to `service_tier=priority`, matching the actual Codex wire format (#1045 — thanks @kfiramar).
- **macOS Desktop App Startup:** Stabilized packaged macOS app launch by excluding desktop artifacts from the standalone bundle and improving launch path detection (#1004 — thanks @mercs2910).
- **macOS Sidebar Layout:** Fixed macOS traffic light overlap, sidebar spacing, and button overflow in the Electron desktop app (#1001 — thanks @mercs2910).

### ⚡ Performance

- **Analytics Page Load:** Dramatically reduced analytics page load times (30s→1-2s for 50K entries) via date-filtered DB queries, parallel `Promise.all()` cost calculations, and merged 6 COUNT queries into a single CASE WHEN aggregate (#1038 — thanks @oyi77).

### 🔒 Security & Dependencies

- **Node Base Image:** Upgraded Docker base from `22-bookworm-slim` to `22.22.2-trixie-slim` (#1011 — Snyk).
- **Production Dependencies:** Bumped 5 production dependencies (#1044 — Dependabot).
- **Vite:** Bumped from 8.0.3 to 8.0.5 (#1031 — Dependabot).
- **Development Dependencies:** Bumped 4 development dependencies (#1030 — Dependabot).

### 🧪 Tests

- **Token Accounting Tests:** Added 18 new unit tests covering detailed token breakdown, null vs zero semantics, per-provider token extraction, and Anthropic streaming input fix (#1017).
- **Built-in Tool Tests:** Added 3 new test cases for built-in Responses API tool type preservation (#1014).
- **ChatCore Sanitization:** Updated sanitization tests to accommodate Responses format detection (PR #1002) and built-in tool preservation (PR #1014).

### 🛠️ Maintenance

- **PR Workflow:** Updated `/review-prs` workflow to merge PRs into the release branch (`release/vX.Y.Z`) instead of directly into `main`, ensuring proper pre-release staging.

### Coverage

- **2537 tests, 2532 passing** — Statement coverage: 91.95%, Branch coverage: 78.79%, Function coverage: 93.19%

## [3.5.3] - 2026-04-07

### सुरक्षा

- **Vulnerabilities:** Fully remediated 12 High-Severity CodeQL vulnerabilities by migrating from Math.random to `crypto.randomUUID()`, wrapping SSE injection points with aggressive backslash escaping, sanitizing trailing HTTP fragments, and enforcing rigid SSRF HTTP verification schemes across internal routes.
- **Dependencies:** Upgraded Next.js to `^16.2.2` and Vite to `>=8.0.5` resolving critical DoS, arbitrary file reads and CSRF vectors in the build/server environments.

### Fixed

- **E2E Stability:** Eliminated extreme CI unreliability and transient test timeouts (Playwright) by propagating internal standalone `_next/static` assets properly and refactoring deep UI interactions inside defensive `expect().toPass()` loops.
- **Middleware:** Resolved infinite redirect loop on dashboard for fresh instances when requireLogin is disabled.
- **Core Fallbacks:** Preserved primary failure contexts and enhanced Edge-case error handling pipelines across chat and fallback loops.
- **Proxy/Hooks:** Optimized local git hooks, normalized token coverage endpoints into `/coverage`, and guarded GLM region lookups.

### 🛠️ Maintenance

- **CI/CD Stabilization:** Prevented random GitHub Runner freezes by decoupling sharded processes, adjusting test concurrencies, unref-ing active connections on server teardown, and strictly capping job timeout durations.

### दस्तावेज़

- **I18n Engine:** Synchronized and pushed deep Machine Translation updates across all 32 natively-supported languages (682 translation nodes aligned).

### Coverage

- **Testing:** Consolidated the workspace test coverage framework hitting 92.1% statement line coverage, with new rigid unit-tests matching API key policies and tool scopes.

---
=======
---

## [3.5.3] - 2026-04-05

### Fixed

-**मिडलवेयर:**रिक्वायरलॉगइन अक्षम होने पर ताजा उदाहरणों के लिए डैशबोर्ड पर अनंत रीडायरेक्ट लूप का समाधान किया गया।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.5.2] — 2026-04-05

### ✨ New Features

<<<<<<< HEAD
- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Qoder API Native Integration:** Completely refactored the Qoder Executor to bypass the legacy COSY AES/RSA encryption algorithm, routing directly into the native DashScope OpenAi-compatible URL. Eliminates complex dependencies on Node `crypto` modules while improving stream fidelity.
- **Resilience Engine Overhaul:** Integrated context overflow graceful fallbacks, proactive OAuth token detection, and empty-content emission prevention (#990).
- **Context-Optimized Routing Strategy:** Added new intelligent routing capability to natively maximize context windows in automated combo deployments (#990).

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Responses API Stream Corruption:** Fixed deep-cloning corruption where Anthropic/OpenAI translation boundaries stripped `response.` specific SSE prefixes from streaming boundaries (#992).
- **Claude Cache Passthrough Alignment:** Aligned CC-Compatible cache markers consistently with upstream Client Pass-Through mode preserving prompt caching.
- **Turbopack Memory Leak:** Pinned Next.js to strict `16.0.10` preventing memory leaks and build staleness from recent upstream Turbopack hashed module regressions (#987).

---
=======
-**Qoder API नेटिव इंटीग्रेशन:**पुराने COZY AES/RSA एन्क्रिप्शन एल्गोरिदम को बायपास करने के लिए Qoder एक्ज़ीक्यूटर को पूरी तरह से रीफैक्टर किया गया, जो सीधे नेटिव DashScope OpenAi-संगत URL में रूट करता है। स्ट्रीम निष्ठा में सुधार करते हुए नोड `क्रिप्टो` मॉड्यूल पर जटिल निर्भरता को समाप्त करता है। -**लचीलापन इंजन ओवरहाल:**एकीकृत संदर्भ अतिप्रवाह सुंदर फ़ॉलबैक, सक्रिय OAuth टोकन का पता लगाना, और खाली-सामग्री उत्सर्जन रोकथाम (#990)। -**संदर्भ-अनुकूलित रूटिंग रणनीति:**स्वचालित कॉम्बो परिनियोजन में संदर्भ विंडो को मूल रूप से अधिकतम करने के लिए नई बुद्धिमान रूटिंग क्षमता जोड़ी गई (#990)।### 🐛 Bug Fixes

-**प्रतिक्रिया एपीआई स्ट्रीम भ्रष्टाचार:**डीप-क्लोनिंग भ्रष्टाचार को ठीक किया गया जहां एंथ्रोपिक/ओपनएआई अनुवाद सीमाओं ने `प्रतिक्रिया` को छीन लिया। स्ट्रीमिंग सीमाओं से विशिष्ट एसएसई उपसर्ग (#992)। -**क्लाउड कैश पासथ्रू संरेखण:**शीघ्र कैशिंग को संरक्षित करते हुए अपस्ट्रीम क्लाइंट पास-थ्रू मोड के साथ लगातार सीसी-संगत कैश मार्कर संरेखित। -**टर्बोपैक मेमोरी लीक:**नेक्स्ट.जेएस को सख्ती से `16.0.10` पर पिन किया गया, जिससे मेमोरी लीक को रोका जा सके और हाल के अपस्ट्रीम टर्बोपैक हैशेड मॉड्यूल रिग्रेशन (#987) से स्थिरता पैदा हो सके।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.5.1] — 2026-04-04

### ✨ New Features

<<<<<<< HEAD
- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Models.dev Integration:** Integrated models.dev as the authoritative runtime source for model pricing, capabilities, and specifications, overriding hardcoded prices. Includes a settings UI to manage sync intervals, translation strings for all 30 languages, and robust test coverage.
- **Provider Native Capabilities:** Added support for declaring and checking native API features (e.g. `systemInstructions_supported`) preventing failures by sanitizing invalid roles. Currently configured for Gemini Base and Antigravity OAuth providers.
- **API Provider Advanced Settings:** Added per-connection custom `User-Agent` overrides for API-key provider connections. The override is stored in `providerSpecificData.customUserAgent` and now applies to validation probes and upstream execution requests.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Qwen OAuth Reliability:** Resolved a series of OAuth integration issues including a 400 Bad Request blocker on expired tokens, fallback generation for parsing OIDC `access_token` properties when `id_token` is omitted, model catalog discovery errors, and strict filtering of `X-Dashscope-*` headers to avoid 400 rejection from OpenAI-compatible endpoints.

## [3.5.0] — 2026-04-03

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Auto-Combo & Routing:** Completed native CRUD lifecycle integration for the advanced Auto-Combo engine (#955).
- **Core Operations:** Fixed missing translations for new native Auto-Combos options (#955).
- **Security Validation:** Disabled SQLite auto-backup tasks natively during unit test CI execution to explicitly resolve Node 22 Event Loop hanging memory leaks (#956).
- **Ecosystem Proxies:** Completed explicit integration mapping model synchronization schedulers, OAuth cycles, and Token Check refreshes safely through OmniRoute's native system upstream proxies (#953).
- **MCP Extensibility:** Added and successfully registered the new `omniroute_web_search` MCP framework tool out of beta into production schemas (#951).
- **Tokens Buffer Logic:** Added runtime configuration limits extending configurable input/output token buffers for precise Usage Tracking metrics (#959).

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **CodeQL Remediation:** Fully resolved and secured critical string indexing operations preventing Server-Side Request Forgery (SSRF) arrays indexing heuristics alongside polynomial algorithmic backtracking (ReDoS) inside deep proxy dispatcher modules.
- **Crypto Hashes:** Replaced weak unverified legacy OAuth 1.0 hashes with robust HMAC-SHA-256 standard validation primitives ensuring tight access controls.
- **API Boundary Protection:** Correctly verified and mapped structural route protections enforcing strict `isAuthenticated()` middleware logic covering newer dynamic endpoints targeting settings manipulation and native skills loading.
- **CLI Ecosystem Compat:** Resolved broken native runtime parser bindings crashing `where` environment detectors strictly over `.cmd/.exe` edge cases gracefully for external plugins (#969).
- **Cache Architecture:** Refactored exact Analytics and System Settings dashboard parameters layout structure caching to maintain stable re-hydration persistence cycles resolving visual unaligned state flashes (#952).
- **Claude Caching Standards:** Normalized and accurately strictly preserved critical ephemeral block markers `ephemeral` caching TTL orders for downstream nodes enforcing standard compatible CC requests mapping cleanly without dropped metrics (#948).
- **Internal Aliases Auth:** Simplified internal runtime mappings normalizing Codex credential payload lookups inside global translation parameters resolving 401 unauthenticated drops (#958).

### 🛠️ Maintenance

- **UI Discoverability:** Correctly adjusted layout categorizations explicitly separating free tier providers logic improving UX sorting flows inside the general API registry pages (#950).
- **Deployment Topology:** Unified Docker deployment artifacts ensuring the root `fly.toml` matches expected cloud instance parameters out-of-the-box natively handling automated deployments scaling properly.
- **Development Tooling:** Decoupled `LKGP` runtime parameters into explicit DB layer abstraction caching utilities ensuring strict test isolation coverage for core caching layers safely.

---
=======
-**Models.dev एकीकरण:**मॉडल मूल्य निर्धारण, क्षमताओं और विशिष्टताओं के लिए आधिकारिक रनटाइम स्रोत के रूप में एकीकृत models.dev, हार्डकोडेड कीमतों को ओवरराइड करता है। इसमें सिंक अंतराल, सभी 30 भाषाओं के लिए अनुवाद स्ट्रिंग और मजबूत परीक्षण कवरेज को प्रबंधित करने के लिए एक सेटिंग यूआई शामिल है। -**प्रदाता मूल क्षमताएं:**मूल एपीआई सुविधाओं की घोषणा और जांच के लिए समर्थन जोड़ा गया (उदाहरण के लिए `systemInstructions_supported`) जो अमान्य भूमिकाओं को साफ करके विफलताओं को रोकता है। वर्तमान में जेमिनी बेस और एंटीग्रेविटी OAuth प्रदाताओं के लिए कॉन्फ़िगर किया गया है। -**एपीआई प्रदाता उन्नत सेटिंग्स:**एपीआई-कुंजी प्रदाता कनेक्शन के लिए प्रति-कनेक्शन कस्टम `उपयोगकर्ता-एजेंट` ओवरराइड जोड़ा गया। ओवरराइड को `providerSpecificData.customUserAgent` में संग्रहीत किया जाता है और अब यह सत्यापन जांच और अपस्ट्रीम निष्पादन अनुरोधों पर लागू होता है।### 🐛 Bug Fixes

-**क्वेन OAuth विश्वसनीयता:**समाप्त हो चुके टोकन पर 400 खराब अनुरोध अवरोधक, `id_token` छोड़े जाने पर OIDC `access_token` गुणों को पार्स करने के लिए फ़ॉलबैक पीढ़ी, मॉडल कैटलॉग खोज त्रुटियां, और OpenAI-संगत एंडपॉइंट से 400 अस्वीकृति से बचने के लिए `X-Dashscope-*` हेडर की सख्त फ़िल्टरिंग सहित OAuth एकीकरण मुद्दों की एक श्रृंखला को हल किया गया।## [3.5.0] — 2026-04-03

### ✨ New Features

-**ऑटो-कॉम्बो और रूटिंग:**उन्नत ऑटो-कॉम्बो इंजन (#955) के लिए पूर्ण देशी सीआरयूडी जीवनचक्र एकीकरण। -**कोर ऑपरेशंस:**नए देशी ऑटो-कॉम्बोज़ विकल्पों (#955) के लिए अनुपलब्ध अनुवादों को ठीक किया गया। -**सुरक्षा सत्यापन:**नोड 22 इवेंट लूप हैंगिंग मेमोरी लीक (#956) को स्पष्ट रूप से हल करने के लिए यूनिट परीक्षण सीआई निष्पादन के दौरान मूल रूप से अक्षम SQLite ऑटो-बैकअप कार्य। -**इकोसिस्टम प्रॉक्सी:**पूर्ण स्पष्ट एकीकरण मैपिंग मॉडल सिंक्रोनाइज़ेशन शेड्यूलर, ओएथ चक्र और टोकन चेक ओमनीरूट के मूल सिस्टम अपस्ट्रीम प्रॉक्सी (#953) के माध्यम से सुरक्षित रूप से ताज़ा होते हैं। -**एमसीपी एक्स्टेंसिबिलिटी:**नए `omniroute_web_search` एमसीपी फ्रेमवर्क टूल को बीटा से उत्पादन स्कीमा (#951) में जोड़ा और सफलतापूर्वक पंजीकृत किया गया। -**टोकन बफ़र लॉजिक:**सटीक उपयोग ट्रैकिंग मेट्रिक्स (#959) के लिए कॉन्फ़िगर करने योग्य इनपुट/आउटपुट टोकन बफ़र्स का विस्तार करते हुए रनटाइम कॉन्फ़िगरेशन सीमाएँ जोड़ी गईं।### 🐛 Bug Fixes

-**कोडक्यूएल निवारण:**सर्वर-साइड रिक्वेस्ट फोर्जरी (एसएसआरएफ) एरे को रोकने वाले पूरी तरह से हल और सुरक्षित महत्वपूर्ण स्ट्रिंग इंडेक्सिंग ऑपरेशंस, गहरे प्रॉक्सी डिस्पैचर मॉड्यूल के अंदर बहुपद एल्गोरिथम बैकट्रैकिंग (ReDoS) के साथ हेरिस्टिक्स को अनुक्रमित करते हैं। -**क्रिप्टो हैश:**कमजोर असत्यापित विरासत OAuth 1.0 हैश को मजबूत HMAC-SHA-256 मानक सत्यापन प्राइमेटिव के साथ बदल दिया गया है जो सख्त पहुंच नियंत्रण सुनिश्चित करता है। -**एपीआई सीमा सुरक्षा:**सही ढंग से सत्यापित और मैप किए गए संरचनात्मक मार्ग सुरक्षा सख्त `isAuthenticated()` मिडलवेयर लॉजिक को लागू करते हैं जो सेटिंग्स हेरफेर और मूल कौशल लोडिंग को लक्षित करने वाले नए गतिशील एंडपॉइंट को कवर करते हैं। -**सीएलआई इकोसिस्टम कंपैट:**बाहरी प्लगइन्स (#969) के लिए `.cmd/.exe` किनारे के मामलों पर सख्ती से `जहां` पर्यावरण डिटेक्टरों के क्रैश होने वाले टूटे हुए देशी रनटाइम पार्सर बाइंडिंग को हल किया गया। -**कैश आर्किटेक्चर:**विज़ुअल अनअलाइन्ड स्टेट फ्लैश को हल करने वाले स्थिर री-हाइड्रेशन दृढ़ता चक्र को बनाए रखने के लिए सटीक एनालिटिक्स और सिस्टम सेटिंग्स डैशबोर्ड पैरामीटर लेआउट संरचना कैशिंग को दोबारा तैयार किया गया (#952)। -**क्लाउड कैशिंग मानक:**डाउनस्ट्रीम नोड्स के लिए सामान्यीकृत और सटीक रूप से सख्ती से संरक्षित महत्वपूर्ण क्षणिक ब्लॉक मार्कर 'क्षणिक' कैशिंग टीटीएल ऑर्डर, मानक संगत सीसी अनुरोधों को लागू करने के लिए बिना गिराए मेट्रिक्स (# 948) के साफ-सुथरे मैपिंग। -**आंतरिक उपनाम प्रामाणिक:**वैश्विक अनुवाद मापदंडों के अंदर कोडेक्स क्रेडेंशियल पेलोड लुकअप को सामान्य बनाने वाली सरलीकृत आंतरिक रनटाइम मैपिंग, 401 अप्रमाणित बूंदों (#958) का समाधान करती है।### 🛠️ Maintenance

-**यूआई खोज क्षमता:**सही ढंग से समायोजित लेआउट वर्गीकरण, सामान्य एपीआई रजिस्ट्री पृष्ठों (#950) के अंदर यूएक्स सॉर्टिंग प्रवाह में सुधार करते हुए फ्री टियर प्रदाताओं के तर्क को स्पष्ट रूप से अलग करता है। -**परिनियोजन टोपोलॉजी:**एकीकृत डॉकर परिनियोजन कलाकृतियाँ यह सुनिश्चित करती हैं कि रूट `fly.toml` आउट-ऑफ-द-बॉक्स अपेक्षित क्लाउड इंस्टेंस मापदंडों से मेल खाता है और स्वचालित रूप से स्वचालित परिनियोजन स्केलिंग को ठीक से संभालता है। -**विकास टूलींग:**`एलकेजीपी` रनटाइम पैरामीटर को स्पष्ट डीबी परत अमूर्त कैशिंग उपयोगिताओं में अलग कर दिया गया है, जिससे कोर कैशिंग परतों के लिए सख्त परीक्षण अलगाव कवरेज सुरक्षित रूप से सुनिश्चित हो सके।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.4.9] — 2026-04-03

### Features & Refactoring

<<<<<<< HEAD
- **Dashboard Auto-Combo Panel:** Completely refactored the `/dashboard/auto-combo` UI to seamlessly integrate with native Dashboard Cards and standardized visual padding/headers. Added dynamic visual progress bars mapping model selection weight mechanisms.
- **Settings Routing Sync:** Fully exposed advanced routing `priority` and `weighted` schema targets internally inside global settings fallback lists.

### Bug Fixes

- **Memory & Skills Locale Nodes:** Resolved empty rendering tags for Memory and Skills options directly inside global settings views by wiring all `settings.*` mapping values internally into `en.json` (also mapped implicitly for cross-translation tools).

### Internal Integrations

- Integrated PR #946 — fix: preserve Claude Code compatibility in responses conversion
- Integrated PR #944 — fix(gemini): preserve thought signatures across antigravity tool calls
- Integrated PR #943 — fix: restore GitHub Copilot body
- Integrated PR #942 — Fix cc-compatible cache markers
- Integrated PR #941 — refactor(auth): improve NVIDIA alias lookup + add LKGP error logging
- Integrated PR #939 — Restore Claude OAuth localhost callback handling
- _(Note: PR #934 was omitted from 3.4.9 cycle to prevent core conflict regressions)_

---
=======
-**डैशबोर्ड ऑटो-कॉम्बो पैनल:**मूल डैशबोर्ड कार्ड और मानकीकृत विज़ुअल पैडिंग/हेडर के साथ सहजता से एकीकृत करने के लिए `/डैशबोर्ड/ऑटो-कॉम्बो` यूआई को पूरी तरह से दोबारा तैयार किया गया। मॉडल चयन वजन तंत्र की मैपिंग के लिए गतिशील दृश्य प्रगति बार जोड़े गए। -**Settings Routing Sync:**Fully exposed advanced routing `priority` and `weighted` schema targets internally inside global settings fallback lists.### Bug Fixes

-**मेमोरी और कौशल लोकेल नोड्स:**सभी `सेटिंग्स* को वायर करके सीधे वैश्विक सेटिंग्स दृश्यों के अंदर मेमोरी और कौशल विकल्पों के लिए खाली रेंडरिंग टैग को हल किया गया। *` मानों को आंतरिक रूप से `en.json` में मैप किया गया (क्रॉस-ट्रांसलेशन टूल के लिए भी अंतर्निहित रूप से मैप किया गया)।### Internal Integrations

- एकीकृत पीआर #946 - समाधान: प्रतिक्रिया रूपांतरण में क्लाउड कोड अनुकूलता को सुरक्षित रखें
- इंटीग्रेटेड पीआर #944 - फिक्स (मिथुन): एंटीग्रेविटी टूल कॉल में विचार हस्ताक्षरों को संरक्षित करें
- एकीकृत पीआर #943 — ठीक करें: GitHub Copilot बॉडी को पुनर्स्थापित करें
- एकीकृत पीआर #942 - सीसी-संगत कैश मार्करों को ठीक करें
- एकीकृत पीआर #941 - रिफैक्टर (ऑथ): एनवीआईडीआईए उपनाम लुकअप में सुधार करें + एलकेजीपी त्रुटि लॉगिंग जोड़ें
- एकीकृत पीआर #939 - क्लाउड ओएथ लोकलहोस्ट कॉलबैक हैंडलिंग को पुनर्स्थापित करें
- _(नोट: मुख्य संघर्ष प्रतिगमन को रोकने के लिए पीआर #934 को 3.4.9 चक्र से हटा दिया गया था)_---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.4.8] — 2026-04-03

### सुरक्षा

<<<<<<< HEAD
- Fully remediated all outstanding Github Advanced Security (CodeQL) findings and Dependabot alerts.
- Fixed insecure randomness vulnerabilities by migrating from `Math.random` to `crypto.randomUUID()`.
- Secured shell commands in automated scripts from string injection.
- Migrated vulnerable catastrophic backtracking RegEx parsing patterns in chat/translation pipelines.
- Enhanced output sanitization controls inside React UI components and Server Sent Events (SSE) tag injection.

---
=======
- सभी बकाया जीथब एडवांस्ड सिक्योरिटी (कोडक्यूएल) निष्कर्षों और डिपेंडाबॉट अलर्ट का पूरी तरह से समाधान किया गया।
- `Math.random` से `crypto.randomUUID()` पर माइग्रेट करके असुरक्षित यादृच्छिकता कमजोरियों को ठीक किया गया।
- स्ट्रिंग इंजेक्शन से स्वचालित स्क्रिप्ट में सुरक्षित शेल कमांड।
- चैट/अनुवाद पाइपलाइनों में माइग्रेटेड असुरक्षित विनाशकारी बैकट्रैकिंग रेगएक्स पार्सिंग पैटर्न।
- रिएक्ट यूआई घटकों और सर्वर सेंट इवेंट्स (एसएसई) टैग इंजेक्शन के अंदर उन्नत आउटपुट सैनिटाइजेशन नियंत्रण।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.4.7] — 2026-04-03

### विशेषताएं

<<<<<<< HEAD
- Added `Cryptography` node to Monitoring and MCP health checks (#798)
- Hardened model-catalog route permissions mapping (`/models`) (#781)

### Bug Fixes

- Fixed Claude OAuth token refreshes failing to preserve cache contexts (#937)
- Fixed CC-Compatible provider errors rendering cached models unreachable (#937)
- Fixed GitHub Executor errors related to invalid context arrays (#937)
- Fixed NPM-installed CLI tools healthcheck failures on Windows (#935)
- Fixed payload translation dropping valid content due to invalid API fields (#927)
- Fixed runtime crash in Node 25 regarding API key execution (#867)
- Fixed MCP standalone module-resolution (`ERR_MODULE_NOT_FOUND`) via `esbuild` (#936)
- Fixed NVIDIA NIM routing credential resolution alias mismatch (#931)

### सुरक्षा

- Added safe strict input boundary protection against raw `shell: true` remote-code execution injections.

---
=======
- मॉनिटरिंग और एमसीपी स्वास्थ्य जांच में 'क्रिप्टोग्राफी' नोड जोड़ा गया (#798)
- कठोर मॉडल-कैटलॉग मार्ग अनुमतियाँ मैपिंग (`/मॉडल`) (#781)### Bug Fixes

- फिक्स्ड क्लाउड OAuth टोकन रिफ्रेश कैश संदर्भों को संरक्षित करने में विफल रहा (#937)
- कैश्ड मॉडल को पहुंच से बाहर करने वाली सीसी-संगत प्रदाता त्रुटियों को ठीक किया गया (#937)
- अमान्य संदर्भ सरणियों से संबंधित GitHub निष्पादक त्रुटियों को ठीक किया गया (#937)
- विंडोज़ पर एनपीएम-स्थापित सीएलआई उपकरण स्वास्थ्य जांच विफलताओं को ठीक किया गया (#935)
- अमान्य एपीआई फ़ील्ड के कारण वैध सामग्री को छोड़ने वाले पेलोड अनुवाद को ठीक किया गया (#927)
- एपीआई कुंजी निष्पादन के संबंध में नोड 25 में रनटाइम क्रैश को ठीक किया गया (#867)
- `esbuild` (#936) के माध्यम से एमसीपी स्टैंडअलोन मॉड्यूल-रिज़ॉल्यूशन (`ERR_MODULE_NOT_FOUND`) को ठीक किया गया
- NVIDIA NIM रूटिंग क्रेडेंशियल रिज़ॉल्यूशन उपनाम बेमेल को ठीक किया गया (#931)### सुरक्षा

- कच्चे `शेल: ट्रू` रिमोट-कोड निष्पादन इंजेक्शन के खिलाफ सुरक्षित सख्त इनपुट सीमा सुरक्षा जोड़ी गई।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.4.6] - 2026-04-02

### ✨ New Features

<<<<<<< HEAD
- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Providers:** Registered new image, video, and audio generation providers from the community-requested list (#926).
- **Dashboard UI:** Added standalone sidebar navigation for the new Memory and Skills modules (#926).
- **i18n:** Added translation strings and layout mappings across 30 languages for the Memory and Skills namespaces.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Resilience:** Prevented the proxy Circuit Breaker from becoming stuck in an OPEN state indefinitely by handling direct transitions to CLOSED state inside fallback combo paths (#930).
- **Protocol Translation:** Patched the streaming transformer to sanitize response blocks based on the expected _source_ protocol rather than the provider _target_ protocol, fixing Anthropics models wrapped in OpenAI payloads crashing Claude Code (#929).
- **API Specs & Gemini:** Fixed `thought_signature` parsing in `openai-to-gemini` and `claude-to-gemini` translators, preventing HTTP 400 errors across all Gemini 3 API tool-calls.
- **Providers:** Cleaned up non-OpenAI-compatible endpoints preventing valid upstream connections (#926).
- **Cache Trends:** Fixed an invalid property mapping data mismatch causing Cache Trends UI charts to crash, and extracted redundant cache metric widgets (#926).

---
=======
-**प्रदाता:**समुदाय-अनुरोधित सूची से पंजीकृत नई छवि, वीडियो और ऑडियो पीढ़ी प्रदाता (#926)। -**डैशबोर्ड यूआई:**नए मेमोरी और कौशल मॉड्यूल के लिए स्टैंडअलोन साइडबार नेविगेशन जोड़ा गया (#926)। -**i18n:**मेमोरी और स्किल्स नेमस्पेस के लिए 30 भाषाओं में अनुवाद स्ट्रिंग और लेआउट मैपिंग जोड़ी गई।### 🐛 Bug Fixes

-**लचीलापन:**फ़ॉलबैक कॉम्बो पथ (#930) के अंदर बंद स्थिति में सीधे संक्रमण को संभालकर प्रॉक्सी सर्किट ब्रेकर को अनिश्चित काल तक खुली स्थिति में फंसने से रोका गया। -**प्रोटोकॉल अनुवाद:**प्रदाता _लक्ष्य_ प्रोटोकॉल के बजाय अपेक्षित _स्रोत_ प्रोटोकॉल के आधार पर प्रतिक्रिया ब्लॉकों को साफ करने के लिए स्ट्रीमिंग ट्रांसफार्मर को पैच किया गया, क्लाउड कोड (#929) को क्रैश करने वाले ओपनएआई पेलोड में लिपटे एंथ्रोपिक्स मॉडल को ठीक किया गया। -**एपीआई स्पेक्स और जेमिनी:**`ओपनाई-टू-जेमिनी` और `क्लाउड-टू-जेमिनी` अनुवादकों में फिक्स्ड `थॉट_सिग्नेचर` पार्सिंग, सभी जेमिनी 3 एपीआई टूल-कॉल में HTTP 400 त्रुटियों को रोकता है। -**प्रदाता:**वैध अपस्ट्रीम कनेक्शन को रोकने वाले गैर-ओपनएआई-संगत एंडपॉइंट को साफ किया गया (#926)। -**कैश ट्रेंड्स:**एक अमान्य प्रॉपर्टी मैपिंग डेटा बेमेल को ठीक किया गया, जिसके कारण कैश ट्रेंड्स यूआई चार्ट क्रैश हो गए, और अनावश्यक कैश मीट्रिक विजेट (#926) निकाले गए।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.4.5] - 2026-04-02

### ✨ New Features

<<<<<<< HEAD
- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **CLIProxyAPI Ecosystem Integration:** Added the `cliproxyapi` executor with built-in module-level caching and proxy routing. Introduced a comprehensive Version Manager service to automatically test health, download binaries from GitHub, spawn isolated background processes, and cleanly manage the lifecycle of external CLI tools directly through the UI. Includes DB tables for proxy configuration to enable automatic SSRF-gated cross-routing of external OpenAI requests via the local CLI tool layer (#914, #915, #916).
- **Qoder PAT Support:** Integrated Personal Access Tokens (PAT) support directly via the local `qodercli` transport instead of legacy remote `.cn` browser configurations (#913).
- **Gemini 3.1 Pro Preview (GitHub):** Added `gemini-3.1-pro-preview` canonical explicit model support natively into the GitHub Copilot provider while preserving older routing aliases (#924).

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **GitHub Copilot Token Stability:** Repaired the Copilot token refresh loop where stale tokens weren't deep-merged into DB, and removed `reasoning_text` fields that were fatally breaking downstream Anthropic block conversions for multi-turn chats (#923).
- **Global Timeout Matrix:** Centralized and parameterized request timeouts explicitly from `REQUEST_TIMEOUT_MS` to prevent hidden (~300s) default fetch buffers prematurely cutting off long-lived SSE streaming responses from heavy reasoning models (#918).
- **Cloudflare Quick Tunnels State:** Fixed a severe state inconsistency where restarted OmniRoute instances erroneously showed destroyed tunnels as active, and defaulted cloudflared tunneling to `HTTP/2` to eliminate UDP receive buffer log spam (#925).
- **i18n Translation Overhaul (Czech & Hindi):** Fixed Hindi code from DEPRECATED `in.json` to canonical `hi.json`, overhauled Czech text mappings, extracted `untranslatable-keys.json` to fix CI/CD false-positive validations, and generated comprehensive `I18N.md` docs to guide translators (#912).
- **Tokens Provider Recovery:** Fixed Qwen losing specific `resourceUrl` endpoints after automatic health-check token refreshes because of missing DB deep merges (#917).
- **CC Compatible UX & Streaming:** Unified the Add CC/OpenAI/Anthropic compatible actions around the Anthropic UI treatment, forced CC-compatible upstream requests to use SSE while still returning streaming or non-streaming responses based on the client request, removed CC model-list configuration/import support in favor of an explicit unsupported-model-listing error, and made CC-compatible Available Models mirror the OAuth Claude Code registry list (#921).

---
=======
-**CLIPrxyAPI पारिस्थितिकी तंत्र एकीकरण:**अंतर्निहित मॉड्यूल-स्तरीय कैशिंग और प्रॉक्सी रूटिंग के साथ `cliproxyapi` निष्पादक जोड़ा गया। स्वचालित रूप से स्वास्थ्य का परीक्षण करने, GitHub से बायनेरिज़ डाउनलोड करने, पृथक पृष्ठभूमि प्रक्रियाओं को शुरू करने और यूआई के माध्यम से सीधे बाहरी सीएलआई उपकरणों के जीवनचक्र को साफ-सुथरा प्रबंधित करने के लिए एक व्यापक संस्करण प्रबंधक सेवा पेश की गई। स्थानीय सीएलआई टूल लेयर (#914, #915, #916) के माध्यम से बाहरी ओपनएआई अनुरोधों के स्वचालित एसएसआरएफ-गेटेड क्रॉस-रूटिंग को सक्षम करने के लिए प्रॉक्सी कॉन्फ़िगरेशन के लिए डीबी टेबल शामिल हैं। -**Qoder PAT समर्थन:**इंटीग्रेटेड पर्सनल एक्सेस टोकन (PAT) लीगेसी रिमोट `.cn` ब्राउज़र कॉन्फ़िगरेशन (#913) के बजाय सीधे स्थानीय `qodercli` ट्रांसपोर्ट के माध्यम से समर्थन करता है। -**मिथुन 3.1 प्रो पूर्वावलोकन (गिटहब):**पुराने रूटिंग उपनामों (#924) को संरक्षित करते हुए गिटहब कोपायलट प्रदाता में मूल रूप से `मिथुन-3.1-प्रो-पूर्वावलोकन` कैनोनिकल स्पष्ट मॉडल समर्थन जोड़ा गया।### 🐛 Bug Fixes

-**गिटहब कोपायलट टोकन स्थिरता:**कोपायलट टोकन रिफ्रेश लूप की मरम्मत की गई जहां पुराने टोकन को डीबी में गहराई से विलय नहीं किया गया था, और `reasoning_text` फ़ील्ड हटा दिए गए जो मल्टी-टर्न चैट (#923) के लिए डाउनस्ट्रीम एंथ्रोपिक ब्लॉक रूपांतरणों को तोड़ रहे थे। -**ग्लोबल टाइमआउट मैट्रिक्स:**हेवी रीजनिंग मॉडल (#918) से लंबे समय तक चलने वाले एसएसई स्ट्रीमिंग प्रतिक्रियाओं को समय से पहले काटने वाले छिपे हुए (~300s) डिफॉल्ट फ़ेच बफ़र्स को रोकने के लिए `REQUEST_TIMEOUT_MS` से स्पष्ट रूप से केंद्रीकृत और पैरामीटरयुक्त अनुरोध टाइमआउट। -**क्लाउडफ्लेयर क्विक टनल्स स्टेट:**एक गंभीर स्थिति असंगतता को ठीक किया गया, जहां पुनरारंभ किए गए ओमनीरूट इंस्टेंसेस ने गलती से नष्ट हुई सुरंगों को सक्रिय के रूप में दिखाया, और यूडीपी प्राप्त बफर लॉग स्पैम (#925) को खत्म करने के लिए डिफ़ॉल्ट क्लाउडफ्लेयर टनलिंग को `HTTP/2` पर दिखाया। -**i18n अनुवाद ओवरहाल (चेक और हिंदी):**अस्वीकृत `in.json` से कैनोनिकल `hi.json` तक हिंदी कोड को ठीक किया गया, चेक टेक्स्ट मैपिंग को ओवरहाल किया गया, CI/CD गलत-सकारात्मक सत्यापन को ठीक करने के लिए `untranslatable-keys.json` निकाला गया, और अनुवादकों का मार्गदर्शन करने के लिए व्यापक `I18N.md` डॉक्स तैयार किए गए (#912)। -**टोकन प्रदाता पुनर्प्राप्ति:**लापता डीबी मर्ज (#917) के कारण स्वचालित स्वास्थ्य-जांच टोकन रीफ्रेश के बाद विशिष्ट `रिसोर्सयूआरएल` एंडपॉइंट खोने वाले क्यूवेन को ठीक किया गया। -**सीसी संगत यूएक्स और स्ट्रीमिंग:**एंथ्रोपिक यूआई उपचार के आसपास ऐड सीसी/ओपनएआई/एंथ्रोपिक संगत क्रियाओं को एकीकृत किया, क्लाइंट अनुरोध के आधार पर स्ट्रीमिंग या गैर-स्ट्रीमिंग प्रतिक्रियाओं को वापस करते समय सीसी-संगत अपस्ट्रीम अनुरोधों को एसएसई का उपयोग करने के लिए मजबूर किया, एक स्पष्ट असमर्थित-मॉडल-लिस्टिंग त्रुटि के पक्ष में सीसी मॉडल-सूची कॉन्फ़िगरेशन/आयात समर्थन को हटा दिया, और सीसी-संगत उपलब्ध मॉडल को ओएथ क्लाउड कोड को प्रतिबिंबित किया। रजिस्ट्री सूची (#921).---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.4.4] - 2026-04-02

### 🐛 Bug Fixes

<<<<<<< HEAD
- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Responses API Token Reporting:** Emit `response.completed` with correct `input_tokens`/`output_tokens` fields for Codex CLI clients, fixing token usage display (#909 — thanks @christopher-s).
- **SQLite WAL Checkpoint on Shutdown:** Flush WAL changes into the primary database file during graceful shutdown/restart, preventing data loss on Docker container stops (#905 — thanks @rdself).
- **Graceful Shutdown Signal:** Changed `/api/restart` and `/api/shutdown` routes from `process.exit(0)` to `process.kill(SIGTERM)`, ensuring the shutdown handler runs before exit.
- **Docker Stop Grace Period:** Added `stop_grace_period: 40s` to Docker Compose files and `--stop-timeout 40` to Docker run examples.

### 🛠️ Maintenance

- Closed 5 resolved/not-a-bug issues (#872, #814, #816, #890, #877).
- Triaged 6 issues with needs-info requests (#892, #887, #886, #865, #895, #870).
- Responded to CLI detection tracking issue (#863) with contributor guidance.

---
=======
-**प्रतिक्रिया एपीआई टोकन रिपोर्टिंग:**कोडेक्स सीएलआई क्लाइंट के लिए सही `input_tokens`/`output_tokens` फ़ील्ड के साथ `response.completed` उत्सर्जित करें, टोकन उपयोग प्रदर्शन को ठीक करें (#909 - धन्यवाद @christopher-s)। -**शटडाउन पर SQLite वाल चेकप्वाइंट:**ग्रेसफुल शटडाउन/रीस्टार्ट के दौरान प्राथमिक डेटाबेस फ़ाइल में फ्लश वाल परिवर्तन, डॉकर कंटेनर स्टॉप पर डेटा हानि को रोकता है (#905 - धन्यवाद @rdself)। -**शानदार शटडाउन सिग्नल:**`/api/restart` और `/api/shutdown` मार्गों को `process.exit(0)` से `process.kill(SIGTERM)` में बदल दिया गया, यह सुनिश्चित करते हुए कि शटडाउन हैंडलर बाहर निकलने से पहले चलता है। -**डॉकर स्टॉप ग्रेस अवधि:**डॉकर कंपोज़ फ़ाइलों में `stop_grace_period: 40s` और डॉकर रन उदाहरणों में `-स्टॉप-टाइमआउट 40` जोड़ा गया।### 🛠️ Maintenance

- बंद 5 हल की गई/कोई बग समस्या नहीं (#872, #814, #816, #890, #877)।
- आवश्यकता-जानकारी अनुरोधों (#892, #887, #886, #865, #895, #870) के साथ 6 मुद्दों का परीक्षण किया गया।
- योगदानकर्ता मार्गदर्शन के साथ सीएलआई डिटेक्शन ट्रैकिंग समस्या (#863) का जवाब दिया।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.4.3] - 2026-04-02

### ✨ New Features

<<<<<<< HEAD
- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Antigravity Memory & Skills:** Completed remote memory and skills injection for the Antigravity provider at the proxy network level.
- **Claude Code Compatibility:** Built a natively hidden compatibility bridge for Claude Code, passing tools and formatting through cleanly.
- **Web Search MCP:** Added the `omniroute_web_search` tool with the `execute:search` scope.
- **Cache Components:** Implemented dynamic cache components utilizing TDD.
- **UI & Customization:** Added custom favicon support, appearance tabs, wired whitelabeling to the sidebar, and added Windsurf guide steps across all 33 languages.
- **Log Retention:** Unified request log retention and artifacts natively.
- **Model Enhancements:** Added explicit `contextLength` for all opencode-zen models.
- **i18n & translations:** Integrated 33 language translations natively, including placeholder CI validations and Chinese documentation updates (#873, #869).

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Qwen OAuth Mapping:** Reverted `id_token` reliance to `access_token` and enabled dynamic `resource_url` API endpoint injection for proper regional routing (#900).
- **Model Sync Engine:** Stored the strict internal Provider ID in `getCustomModels()` sync routines instead of the UI Channel Alias format, preventing SQLite catalog insertion failures (#903).
- **Claude Code & Codex:** Standardized non-streaming blank responses to Anthropic-formatted `(empty response)` to prevent CLI proxy crashes (#866).
- **CC Compatible Routing:** Resolved duplicate `/v1` endpoint collision during path concatenation for generic Claude Code gateways (#904).
- **Antigravity Dashboards:** Blocked unlimited quota models from falsely registering as exhausted `100% Usage` limit states in the Provider Usage UI (#857).
- **Claude Image Passthrough:** Fixed Claude models missing image block passthroughs (#898).
- **Gemini CLI Routing:** Resolved 403 authorization lockouts and content accumulation issues by refreshing the project ID via `loadCodeAssist` (#868).
- **Antigravity Stability:** Corrected model access lists, enforced 404 lockouts, fixed 429 cascades locking out standard connections, and capped `gemini-3.1-pro` output tokens (#885).
- **Provider Sync Cadence:** Repaired the provider limits synchronization cadence via the internal scheduler (#888).
- **Dashboard Optimization:** Resolved `/dashboard/limits` UI freezing when processing 70+ accounts via chunk parallelization (#784).
- **SSRF Hardening:** Enforced strict SSRF IP range filtering and blocked the `::1` loopback interface.
- **MIME Types:** Standardized `mime_type` to snake_case to match Gemini API specifications.
- **CI Stabilization:** Fixed failing analytics/settings Playwright selectors and request assertions so GitHub Actions E2E runs pass reliably across localized UIs and switch-based controls.
- **Deterministic Tests:** Removed date-sensitive quota fixtures from Copilot usage tests and aligned idempotency/model catalog tests with the merged runtime behavior.
- **MCP Type Hardening:** Removed zero-budget explicit `any` regressions from the MCP server tool registration path.
- **Model Sync Engine:** Bypassed destructive `replace` overrides when the provider's auto-sync yields an empty model list, maintaining stability for dynamic catalogs (#899).

### 🛠️ Maintenance

- **Pipeline Logging:** Refined pipeline logging artifacts and enforce retention caps (#880).
- **AGENTS.md Overhaul:** Condensed from 297→153 lines. Added build/test/style guidelines, code workflows (Prettier, TypeScript, ESLint), and trimmed verbose tables (#882).
- **Release Branch Integration:** Consolidated the active feature branches into `release/v3.4.2` on top of current `main` and validated the branch with lint, unit, coverage, build, and CI-mode E2E runs.
- **Testing:** Added vitest configuration for component testing and Playwright specs for settings toggles.
- **Doc Updates:** Expanded root readmes, translated chinese documents natively, and cleaned up obsolete files.

## [3.4.1] - 2026-03-31

> [!WARNING]
> **BREAKING CHANGE: request logging, retention, and logging environment variables have been redesigned.**
> On the first startup after upgrading, OmniRoute archives legacy request logs from `DATA_DIR/logs/`, legacy `DATA_DIR/call_logs/`, and `DATA_DIR/log.txt` into `DATA_DIR/log_archives/*.zip`, then removes the deprecated layout and switches to the new unified artifact format under `DATA_DIR/call_logs/`.

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **.ENV Migration Utility:** Included `scripts/migrate-env.mjs` to seamlessly migrate `<v3.3` configurations to `v3.4.x` strict security validation constraints (FASE-01), repairing startup crashes caused by short `JWT_SECRET` instances.
- **Kiro AI Cache Optimization:** Implemented deterministic `conversationId` generation (uuidv5) to enable AWS Builder ID Prompt Caching properly across invocations (#814).
- **Dashboard UI Restoration & Consolidation:** Resolved sidebar logic omitting the Debug section, and cleared Nextjs routing warnings by moving standalone `/dashboard/mcp` and `/dashboard/a2a` pages explicitly into embedded Endpoint Proxy UI components.
- **Unified Request Log Artifacts:** Request logging now stores one SQLite index row plus one JSON artifact per request under `DATA_DIR/call_logs/`, with optional pipeline capture embedded in the same file.
- **Language:** Improved the Chinese translation (#855)
- **Opencode-Zen Models:** Added 4 free models to opencode-zen registry (#854)
- **Tests:** Added unit and E2E tests for settings toggles and bug fixes (#850)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **429 Quota Parsing:** Parsed long quota reset times from error bodies to honor correct backoffs and prevent rate-limited account bans (#859)
- **Prompt Caching:** Preserved client `cache_control` headers for all Claude-protocol providers (like Minimax, GLM, and Bailian), correctly recognizing caching support (#856)
- **Model Sync Logs:** Reduced log spam by recording `sync-models` only when the channel actually modifies the list (#853)
- **Provider Quota & Token Parsing:** Switched Antigravity limits to use `retrieveUserQuota` natively and correctly mapped Claude token refresh payloads to URL-encoded forms (#862)
- **Rate-Limiting Stability:** Universalized the 429 Retry-After parsing architecture to cap provider-induced cooldowns at 24 hours max (#862)
- **Dashboard Limit Rendering:** Re-architected `/dashboard/limits` quota mapping to render immediately inside chunks, fixing a major UI freezing delay on accounts exceeding 70 active connections (#784)
- **QWEN OAuth Authorization:** Mapped the OIDC `id_token` as the primary API Bearer token for Dashscope requests, fixing immediate 401 Unauthorized errors after connecting accounts or refreshing tokens (#864)
- **ZAI API Stability:** Hardened Server-Sent Events compiler to gracefully fallback to empty strings when DeepSeek providers stream mathematically null content during reasoning phases (#871)
- **Claude Code/Codex Translations:** Protected non-streaming payload conversions against empty responses from upstream Codex tools, avoiding catastrophic TypeErrors (#866)
- **NVIDIA NIM Rendering:** Conditionally stripped identical provider prefixes dynamically pushed by audio models, eliminating duplicate `nim/nim` tag structures throwing 404 on the Media Playground (#872)

### ⚠️ Breaking Changes

- **Request Log Layout:** Removed the old multi-file `DATA_DIR/logs/` request log sessions and the `DATA_DIR/log.txt` summary file. New requests are written as single JSON artifacts in `DATA_DIR/call_logs/YYYY-MM-DD/`.
- **Logging Environment Variables:** Replaced `LOG_*`, `ENABLE_REQUEST_LOGS`, `CALL_LOGS_MAX`, `CALL_LOG_PAYLOAD_MODE`, and `PROXY_LOG_MAX_ENTRIES` with the new `APP_LOG_*` and `CALL_LOG_RETENTION_DAYS` configuration model.
- **Pipeline Toggle Setting:** Replaced the legacy `detailed_logs_enabled` setting with `call_log_pipeline_enabled`. New pipeline details are embedded inside the request artifact instead of being stored as separate `request_detail_logs` records.

### 🛠️ Maintenance

- **Legacy Request Log Upgrade Backup:** Upgrades now archive old `data/logs/`, legacy `data/call_logs/`, and `data/log.txt` layouts into `DATA_DIR/log_archives/*.zip` before removing the deprecated structure.
- **Streaming Usage Persistence:** Streaming requests now write a single `usage_history` row on completion instead of emitting a duplicate in-progress usage row with empty status metadata.
- **Logging Follow-up Cleanup:** Pipeline logs no longer capture `SOURCE REQUEST`, request artifact entries now honor `CALL_LOG_MAX_ENTRIES`, and application log archives now honor `APP_LOG_MAX_FILES`.

---
=======
-**एंटीग्रेविटी मेमोरी और कौशल:**प्रॉक्सी नेटवर्क स्तर पर एंटीग्रेविटी प्रदाता के लिए रिमोट मेमोरी और कौशल इंजेक्शन पूरा किया गया। -**क्लाउड कोड संगतता:**क्लाउड कोड के लिए एक मूल रूप से छिपा हुआ संगतता पुल बनाया गया है, जो टूल को पास करता है और सफाई से फ़ॉर्मेट करता है। -**वेब सर्च एमसीपी:**`execute:search` स्कोप के साथ `omniroute_web_search` टूल जोड़ा गया। -**कैश घटक:**टीडीडी का उपयोग करते हुए गतिशील कैश घटकों को कार्यान्वित किया गया। -**यूआई और अनुकूलन:**कस्टम फ़ेविकॉन समर्थन, उपस्थिति टैब, साइडबार पर वायर्ड व्हाइटलेबलिंग जोड़ा गया, और सभी 33 भाषाओं में विंडसर्फ गाइड चरण जोड़े गए। -**लॉग प्रतिधारण:**एकीकृत अनुरोध लॉग प्रतिधारण और कलाकृतियाँ मूल रूप से। -**मॉडल संवर्द्धन:**सभी ओपनकोड-ज़ेन मॉडल के लिए स्पष्ट `contextLength` जोड़ा गया। -**i18n और अनुवाद:**प्लेसहोल्डर सीआई सत्यापन और चीनी दस्तावेज़ीकरण अपडेट (#873, #869) सहित 33 भाषा अनुवादों को मूल रूप से एकीकृत किया गया।### 🐛 Bug Fixes

-**क्वेन ओएथ मैपिंग:**`id_token` निर्भरता को `access_token` पर वापस लाया गया और उचित क्षेत्रीय रूटिंग के लिए डायनामिक `resource_url` एपीआई एंडपॉइंट इंजेक्शन सक्षम किया गया (#900)। -**मॉडल सिंक इंजन:**सख्त आंतरिक प्रदाता आईडी को यूआई चैनल एलियास प्रारूप के बजाय `getCustomModels()` सिंक रूटीन में संग्रहीत किया जाता है, जिससे SQLite कैटलॉग प्रविष्टि विफलताओं (#903) को रोका जा सकता है। -**क्लाउड कोड और कोडेक्स:**सीएलआई प्रॉक्सी क्रैश (#866) को रोकने के लिए एंथ्रोपिक-स्वरूपित `(खाली प्रतिक्रिया)` के लिए मानकीकृत गैर-स्ट्रीमिंग रिक्त प्रतिक्रियाएं। -**सीसी संगत रूटिंग:**जेनेरिक क्लाउड कोड गेटवे (#904) के लिए पथ संयोजन के दौरान डुप्लिकेट `/v1` एंडपॉइंट टकराव का समाधान किया गया। -**एंटीग्रेविटी डैशबोर्ड:**प्रदाता उपयोग यूआई (#857) में `100% उपयोग` सीमा समाप्त होने की स्थिति में गलत तरीके से पंजीकरण करने से असीमित कोटा मॉडल को अवरुद्ध किया गया। -**क्लाउड इमेज पासथ्रू:**फिक्स्ड क्लाउड मॉडल में इमेज ब्लॉक पासथ्रू गायब है (#898)। -**मिथुन सीएलआई रूटिंग:**`loadCodeAssist` (#868) के माध्यम से प्रोजेक्ट आईडी को ताज़ा करके 403 प्राधिकरण लॉकआउट और सामग्री संचय समस्याओं का समाधान किया गया। -**एंटीग्रेविटी स्थिरता:**मॉडल एक्सेस सूचियों को सही किया गया, 404 लॉकआउट लागू किए गए, मानक कनेक्शनों को लॉक करने वाले 429 कैस्केड को ठीक किया गया, और `जेमिनी-3.1-प्रो` आउटपुट टोकन को सीमित किया गया (#885)। -**प्रदाता सिंक ताल:**आंतरिक अनुसूचक (#888) के माध्यम से प्रदाता सीमा सिंक्रनाइज़ेशन ताल की मरम्मत की। -**डैशबोर्ड अनुकूलन:**चंक पैरेललाइज़ेशन (#784) के माध्यम से 70+ खातों को संसाधित करते समय `/डैशबोर्ड/सीमाएँ` यूआई फ्रीजिंग का समाधान किया गया। -**एसएसआरएफ हार्डनिंग:**सख्त एसएसआरएफ आईपी रेंज फ़िल्टरिंग लागू की और `::1` लूपबैक इंटरफ़ेस को अवरुद्ध कर दिया। -**एमआईएमई प्रकार:**जेमिनी एपीआई विनिर्देशों से मेल खाने के लिए स्नेक*केस में मानकीकृत `माइम*टाइप`।
-**सीआई स्थिरीकरण:**विफल एनालिटिक्स/सेटिंग्स को ठीक किया गया, नाटककार चयनकर्ता और अनुरोध दावे ताकि GitHub क्रियाएँ E2E स्थानीयकृत यूआई और स्विच-आधारित नियंत्रणों में विश्वसनीय रूप से चलती रहें।
-**नियतात्मक परीक्षण:**कोपायलट उपयोग परीक्षणों से दिनांक-संवेदनशील कोटा फिक्स्चर को हटा दिया गया और मर्ज किए गए रनटाइम व्यवहार के साथ निष्क्रियता/मॉडल कैटलॉग परीक्षणों को संरेखित किया गया।
-**एमसीपी टाइप हार्डनिंग:**एमसीपी सर्वर टूल पंजीकरण पथ से शून्य-बजट स्पष्ट `कोई भी`प्रतिगमन हटा दिया गया।
-**मॉडल सिंक इंजन:**जब प्रदाता का ऑटो-सिंक एक खाली मॉडल सूची उत्पन्न करता है, तो गतिशील कैटलॉग (#899) के लिए स्थिरता बनाए रखते हुए बायपास किया गया विनाशकारी`रिप्लेस` ओवरराइड हो जाता है।### 🛠️ Maintenance

-**पाइपलाइन लॉगिंग:**परिष्कृत पाइपलाइन लॉगिंग कलाकृतियाँ और प्रतिधारण कैप लागू करें (#880)। -**एजेंट्स.एमडी ओवरहाल:**297→153 लाइनों से संघनित। बिल्ड/टेस्ट/स्टाइल दिशानिर्देश, कोड वर्कफ़्लोज़ (प्रीटियर, टाइपस्क्रिप्ट, ईएसलिंट), और ट्रिम किए गए वर्बोज़ टेबल (#882) जोड़े गए। -**रिलीज़ शाखा एकीकरण:**सक्रिय फीचर शाखाओं को वर्तमान `मुख्य` के शीर्ष पर `रिलीज़/v3.4.2` में समेकित किया गया और शाखा को लिंट, यूनिट, कवरेज, बिल्ड और सीआई-मोड ई2ई रन के साथ मान्य किया गया। -**परीक्षण:**घटक परीक्षण के लिए विटेस्ट कॉन्फ़िगरेशन और सेटिंग्स टॉगल के लिए प्लेराइट स्पेक्स जोड़ा गया। -**डॉक्टर अपडेट:**विस्तारित रूट रीडम्स, चीनी दस्तावेज़ों का मूल रूप से अनुवाद किया गया, और अप्रचलित फ़ाइलों को साफ़ किया गया।## [3.4.1] - 2026-03-31

> [!चेतावनी]
> **ब्रेकिंग चेंज: अनुरोध लॉगिंग, रिटेंशन और लॉगिंग पर्यावरण चर को फिर से डिजाइन किया गया है।**
> अपग्रेड करने के बाद पहले स्टार्टअप पर, ओम्नीरूट `DATA_DIR/logs/`, लीगेसी `DATA_DIR/call_logs/`, और `DATA_DIR/log.txt` से `DATA_DIR/log_archives/*.zip` में लीगेसी अनुरोध लॉग को संग्रहीत करता है, फिर अप्रचलित लेआउट को हटा देता है और नए एकीकृत आर्टिफैक्ट प्रारूप में स्विच करता है। `DATA_DIR/call_logs/`।### ✨ New Features

-**.ENV माइग्रेशन उपयोगिता:**इसमें `<v3.3` कॉन्फ़िगरेशन को `v3.4.x` सख्त सुरक्षा सत्यापन बाधाओं (FASE-01) में निर्बाध रूप से स्थानांतरित करने के लिए `scripts/migrate-env.mjs` शामिल है, जो छोटे `JWT_SECRET` उदाहरणों के कारण होने वाली स्टार्टअप क्रैश की मरम्मत करता है। -**किरो एआई कैश ऑप्टिमाइज़ेशन:**इनवोकेशन में एडब्ल्यूएस बिल्डर आईडी प्रॉम्प्ट कैशिंग को ठीक से सक्षम करने के लिए नियतात्मक `कन्वर्सेशनआईडी` जेनरेशन (uuidv5) लागू किया गया (#814)। -**डैशबोर्ड यूआई बहाली और समेकन:**डिबग अनुभाग को छोड़कर साइडबार तर्क को हल किया गया, और स्टैंडअलोन `/डैशबोर्ड/एमसीपी` और `/डैशबोर्ड/ए2ए` पृष्ठों को स्पष्ट रूप से एम्बेडेड एंडपॉइंट प्रॉक्सी यूआई घटकों में ले जाकर नेक्स्टजेएस रूटिंग चेतावनियों को साफ़ किया गया। -**एकीकृत अनुरोध लॉग कलाकृतियाँ:**अनुरोध लॉगिंग अब `DATA_DIR/call_logs/` के अंतर्गत प्रति अनुरोध एक SQLite इंडेक्स पंक्ति और एक JSON विरूपण साक्ष्य संग्रहीत करता है, उसी फ़ाइल में वैकल्पिक पाइपलाइन कैप्चर एम्बेडेड है। -**भाषा:**चीनी अनुवाद में सुधार (#855) -**ओपनकोड-ज़ेन मॉडल:**ओपनकोड-ज़ेन रजिस्ट्री में 4 निःशुल्क मॉडल जोड़े गए (#854) -**परीक्षण:**सेटिंग्स टॉगल और बग फिक्स के लिए यूनिट और E2E परीक्षण जोड़े गए (#850)### 🐛 Bug Fixes

-**429 कोटा पार्सिंग:**सही बैकऑफ़ का सम्मान करने और दर-सीमित खाता प्रतिबंधों को रोकने के लिए त्रुटि निकायों से लंबे कोटा रीसेट समय को पार्स किया गया (#859) -**प्रॉम्प्ट कैशिंग:**सभी क्लाउड-प्रोटोकॉल प्रदाताओं (जैसे मिनिमैक्स, जीएलएम और बाइलियन) के लिए संरक्षित क्लाइंट `कैश_कंट्रोल` हेडर, कैशिंग समर्थन को सही ढंग से पहचानना (#856) -**मॉडल सिंक लॉग:**`सिंक-मॉडल` रिकॉर्ड करके लॉग स्पैम को कम करें, जब चैनल वास्तव में सूची को संशोधित करता है (#853) -**प्रदाता कोटा और टोकन पार्सिंग:**`retrieveUserQuota` का मूल रूप से उपयोग करने के लिए एंटीग्रेविटी सीमा को स्विच किया गया और यूआरएल-एन्कोडेड फॉर्म में क्लाउड टोकन रीफ्रेश पेलोड को सही ढंग से मैप किया गया (#862) -**दर-सीमित स्थिरता:**प्रदाता-प्रेरित कूलडाउन को अधिकतम 24 घंटे तक सीमित करने के लिए 429 रिट्री-आफ्टर पार्सिंग आर्किटेक्चर को सार्वभौमिक बनाया गया (#862) -**डैशबोर्ड सीमा रेंडरिंग:**टुकड़ों के अंदर तुरंत प्रस्तुत करने के लिए `/डैशबोर्ड/लिमिट्स' कोटा मैपिंग को फिर से व्यवस्थित किया गया, 70 सक्रिय कनेक्शन से अधिक खातों पर एक प्रमुख यूआई फ्रीजिंग देरी को ठीक किया गया (#784)
-**QWEN OAuth प्राधिकरण:**OIDC `id_token`को डैशस्कोप अनुरोधों के लिए प्राथमिक एपीआई बियरर टोकन के रूप में मैप किया गया, खातों को जोड़ने या टोकन को ताज़ा करने के बाद तत्काल 401 अनधिकृत त्रुटियों को ठीक किया गया (#864)
-**ZAI एपीआई स्थिरता:**जब डीपसीक प्रदाता तर्क चरणों के दौरान गणितीय रूप से शून्य सामग्री स्ट्रीम करते हैं तो खाली स्ट्रिंग्स पर शानदार ढंग से फ़ॉलबैक करने के लिए कठोर सर्वर-भेजे गए इवेंट कंपाइलर (#871)
-**क्लाउड कोड/कोडेक्स अनुवाद:**अपस्ट्रीम कोडेक्स टूल्स से खाली प्रतिक्रियाओं के विरुद्ध गैर-स्ट्रीमिंग पेलोड रूपांतरणों को संरक्षित किया गया, भयावह टाइपएरर्स से बचा गया (#866)
-**एनवीडिया एनआईएम रेंडरिंग:**ऑडियो मॉडल द्वारा गतिशील रूप से धकेले गए समान प्रदाता उपसर्गों को सशर्त रूप से हटा दिया गया, जिससे मीडिया प्लेग्राउंड पर 404 फेंकने वाले डुप्लिकेट`निम/निम` टैग संरचनाओं को हटा दिया गया (#872)### ⚠️ Breaking Changes

-**अनुरोध लॉग लेआउट:**पुरानी मल्टी-फ़ाइल `DATA_DIR/logs/` अनुरोध लॉग सत्र और `DATA_DIR/log.txt` सारांश फ़ाइल को हटा दिया गया। नए अनुरोध `DATA_DIR/call_logs/YYYY-MM-DD/` में एकल JSON कलाकृतियों के रूप में लिखे गए हैं। -**लॉगिंग पर्यावरण चर:**`LOG_*`, `ENABLE_REQUEST_LOGS`, `CALL_LOGS_MAX`, `CALL_LOG_PAYLOAD_MODE`, और `PROXY_LOG_MAX_ENTRIES` को नए `APP_LOG_*` और `CALL_LOG_RETENTION_DAYS` कॉन्फ़िगरेशन से बदला गया मॉडल. -**पाइपलाइन टॉगल सेटिंग:**पुरानी `detailed_logs_enabled` सेटिंग को `call_log_pipeline_enabled` से बदल दिया गया। नए पाइपलाइन विवरण अलग-अलग `request_detail_logs` रिकॉर्ड के रूप में संग्रहीत किए जाने के बजाय अनुरोध आर्टिफैक्ट के अंदर एम्बेड किए गए हैं।### 🛠️ Maintenance

-**Legacy Request Log Upgrade Backup:**Upgrades now archive old `data/logs/`, legacy `data/call_logs/`, and `data/log.txt` layouts into `DATA_DIR/log_archives/*.zip` before removing the deprecated structure. -**स्ट्रीमिंग उपयोग दृढ़ता:**स्ट्रीमिंग अनुरोध अब खाली स्थिति मेटाडेटा के साथ डुप्लिकेट इन-प्रोग्रेस उपयोग पंक्ति को उत्सर्जित करने के बजाय पूरा होने पर एक एकल `usage_history` पंक्ति लिखते हैं। -**लॉगिंग फॉलो-अप क्लीनअप:**पाइपलाइन लॉग अब `SOURCE REQUEST` को कैप्चर नहीं करते हैं, अनुरोध आर्टिफैक्ट प्रविष्टियाँ अब `CALL_LOG_MAX_ENTRIES` का सम्मान करती हैं, और एप्लिकेशन लॉग अभिलेखागार अब `APP_LOG_MAX_FILES` का सम्मान करते हैं।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.4.0] - 2026-03-31

### विशेषताएं

<<<<<<< HEAD
- **Subscription Utilization Analytics:** Added quota snapshot time-series tracking, Provider Utilization and Combo Health tabs with recharts visualizations, and corresponding API endpoints (#847)
- **SQLite Backup Control:** New `OMNIROUTE_DISABLE_AUTO_BACKUP` env flag to disable automatic SQLite backups (#846)
- **Model Registry Update:** Injected `gpt-5.4-mini` into the Codex provider's array of models (#756)
- **Provider Limit Tracking:** Track and display when provider rate limits were last refreshed per account (#843)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Qwen Auth Routing:** Re-routed Qwen OAuth completions from the DashScope API to the Web Inference API (`chat.qwen.ai`), resolving authorization failures (#844, #807, #832)
- **Qwen Auto-Retry Loop:** Added targeted 429 Quota Exceeded backoff handling inside `chatCore` protecting burst requests
- **Codex OAuth Fallback:** Modern browser popup blocking no longer traps the user; it automatically falls back to manual URL entry (#808)
- **Claude Token Refresh:** Anthropic's strict `application/json` boundaries are now respected during token generation instead of encoded URLs (#836)
- **Codex Messages Schema:** Stripped purist `messages` injects from native passthrough requests to avoid structural rejections from the ChatGPT upstream (#806)
- **CLI Detection Size Limit:** Safely bumped the Node binary scanning upper bound from 100MB to 350MB, allowing heavy standalone tools like Claude Code (229MB) and OpenCode (153MB) to be correctly detected by the VPS runtime (#809)
- **CLI Runtime Environment:** Restored ability for CLI configurations to respect user override paths (`CLI_{PROVIDER}_BIN`) bypassing strict path-bound discovery rules
- **Nvidia Header Conflicts:** Removed `prompt_cache_key` properties from upstream headers when calling non-Anthropic providers (#848)
- **Codex Fast Tier Toggle:** Restored Codex service tier toggle contrast in light mode (#842)
- **Test Infrastructure:** Updated `t28-model-catalog-updates` test that incorrectly expected the outdated DashScope endpoint for the Qwen native registry

---
=======
-**सदस्यता उपयोग विश्लेषण:**जोड़ा गया कोटा स्नैपशॉट समय-श्रृंखला ट्रैकिंग, प्रदाता उपयोग और रिचार्ज विज़ुअलाइज़ेशन के साथ कॉम्बो स्वास्थ्य टैब, और संबंधित एपीआई एंडपॉइंट (#847) -**SQLite बैकअप नियंत्रण:**स्वचालित SQLite बैकअप को अक्षम करने के लिए नया `OMNIROUTE_DISABLE_AUTO_BACKUP` env ध्वज (#846) -**मॉडल रजिस्ट्री अपडेट:**कोडेक्स प्रदाता के मॉडलों की श्रृंखला में `जीपीटी-5.4-मिनी` इंजेक्ट किया गया (#756) -**प्रदाता सीमा ट्रैकिंग:**ट्रैक करें और प्रदर्शित करें जब प्रदाता दर सीमाएं पिछली बार प्रति खाते ताज़ा की गई थीं (#843)### 🐛 Bug Fixes

-**क्यूवेन ऑथ रूटिंग:**डैशस्कोप एपीआई से वेब इंट्रेंस एपीआई (`चैट.क्यूवेन.एआई`) में क्यूवेन ओएथ पूर्णताओं को फिर से रूट किया गया, प्राधिकरण विफलताओं का समाधान किया गया (#844, #807, #832) -**क्वेन ऑटो-रिट्री लूप:**लक्षित 429 कोटा जोड़ा गया, `चैटकोर` के अंदर बैकऑफ़ हैंडलिंग से अधिक, बर्स्ट अनुरोधों की सुरक्षा -**कोडेक्स OAuth फ़ॉलबैक:**आधुनिक ब्राउज़र पॉपअप ब्लॉकिंग अब उपयोगकर्ता को नहीं फँसाती; यह स्वचालित रूप से मैन्युअल URL प्रविष्टि पर वापस आ जाता है (#808) -**क्लाउड टोकन रिफ्रेश:**एन्थ्रोपिक की सख्त `एप्लिकेशन/जेसन` सीमाओं का अब एन्कोडेड यूआरएल के बजाय टोकन जेनरेशन के दौरान सम्मान किया जाता है (#836) -**कोडेक्स संदेश स्कीमा:**चैटजीपीटी अपस्ट्रीम (#806) से संरचनात्मक अस्वीकृतियों से बचने के लिए मूल पासथ्रू अनुरोधों से छीने गए शुद्धतावादी `संदेश` इंजेक्ट होते हैं। -**सीएलआई डिटेक्शन आकार सीमा:**नोड बाइनरी स्कैनिंग की ऊपरी सीमा को 100एमबी से 350एमबी तक सुरक्षित रूप से बढ़ा दिया गया, जिससे क्लाउड कोड (229एमबी) और ओपनकोड (153एमबी) जैसे भारी स्टैंडअलोन टूल को वीपीएस रनटाइम (#809) द्वारा सही ढंग से पता लगाया जा सका। -**सीएलआई रनटाइम पर्यावरण:**सख्त पथ-बद्ध खोज नियमों को दरकिनार करते हुए उपयोगकर्ता ओवरराइड पथ (`CLI_{PROVIDER}_BIN`) का सम्मान करने के लिए सीएलआई कॉन्फ़िगरेशन की क्षमता बहाल की गई -**एनवीडिया हेडर संघर्ष:**गैर-एंथ्रोपिक प्रदाताओं को कॉल करते समय अपस्ट्रीम हेडर से `prompt_cache_key` गुण हटा दिए गए (#848) -**Codex Fast Tier Toggle:**Restored Codex service tier toggle contrast in light mode (#842) -**टेस्ट इन्फ्रास्ट्रक्चर:**अपडेट किया गया `t28-मॉडल-कैटलॉग-अपडेट्स` टेस्ट जिसमें गलत तरीके से क्वेन नेटिव रजिस्ट्री के लिए पुराने डैशस्कोप एंडपॉइंट की उम्मीद की गई थी---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.3.9] - 2026-03-31

### 🐛 Bug Fixes

<<<<<<< HEAD
- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Custom Provider Rotation:** Integrated `getRotatingApiKey` internally inside DefaultExecutor, ensuring `extraApiKeys` rotation triggers correctly for custom and compatible upstream providers (#815)

---
=======
-**कस्टम प्रदाता रोटेशन:**DefaultExecutor के अंदर आंतरिक रूप से एकीकृत `getRotatingApiKey`, यह सुनिश्चित करना कि कस्टम और संगत अपस्ट्रीम प्रदाताओं के लिए `extraApiKeys` रोटेशन सही ढंग से ट्रिगर हो (#815)---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.3.8] - 2026-03-30

### विशेषताएं

<<<<<<< HEAD
- **Models API Filtering:** Endpoint `/v1/models` now dynamically filters its list based on the permissions tied to the `Authorization: Bearer <token>` when restricted access is on (#781)
- **Qoder Integration:** Native integration for Qoder AI natively replacing the legacy iFlow platform mappings (#660)
- **Prompt Cache Tracking:** Added tracking capabilities and frontend visualization (Stats card) for semantic and prompt caching in the Dashboard UI

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Cache Dashboard Sizing:** Improved the UI layout sizes and context headers for the advanced cache pages (#835)
- **Debug Sidebar Visibility:** Fixed an issue where the debug toggle wouldn't correctly show/hide sidebar debug details (#834)
- **Gemini Model Prefixing:** Modified the namespace fallback to properly route via `gemini-cli/` instead of `gc/` to respect upstream specs (#831)
- **OpenRouter Sync:** Improved compatibility synchronization to automatically ingest the available models catalog correctly from OpenRouter (#830)
- **Streaming Payloads Mapping:** Reserialization of reasoning fields natively resolves conflict alias paths when output is streaming to edge devices

---
=======
-**मॉडल एपीआई फ़िल्टरिंग:**एंडपॉइंट `/v1/मॉडल` अब प्रतिबंधित पहुंच चालू होने पर `प्राधिकरण: बियरर <टोकन>` से जुड़ी अनुमतियों के आधार पर अपनी सूची को गतिशील रूप से फ़िल्टर करता है (#781) -**Qoder एकीकरण:**Qoder AI के लिए मूल एकीकरण मूल रूप से पुराने iFlow प्लेटफ़ॉर्म मैपिंग की जगह ले रहा है (#660) -**प्रॉम्प्ट कैश ट्रैकिंग:**डैशबोर्ड यूआई में सिमेंटिक और प्रॉम्प्ट कैशिंग के लिए ट्रैकिंग क्षमताएं और फ्रंटएंड विज़ुअलाइज़ेशन (स्टैटिस्टिक्स कार्ड) जोड़ा गया### 🐛 Bug Fixes

-**कैश डैशबोर्ड आकार:**उन्नत कैश पृष्ठों के लिए यूआई लेआउट आकार और संदर्भ हेडर में सुधार (#835) -**डीबग साइडबार दृश्यता:**उस समस्या को ठीक किया गया जहां डिबग टॉगल साइडबार डिबग विवरण को सही ढंग से नहीं दिखाएगा/छिपाएगा (#834) -**मिथुन मॉडल उपसर्ग:**अपस्ट्रीम विशिष्टताओं का सम्मान करने के लिए `gc/` के बजाय `gemini-cli/` के माध्यम से उचित रूप से रूट करने के लिए नेमस्पेस फ़ॉलबैक को संशोधित किया (#831) -**ओपनराउटर सिंक:**ओपनराउटर से उपलब्ध मॉडल कैटलॉग को स्वचालित रूप से सही ढंग से अंतर्ग्रहण करने के लिए बेहतर संगतता सिंक्रोनाइज़ेशन (#830) -**स्ट्रीमिंग पेलोड मैपिंग:**जब आउटपुट एज डिवाइस पर स्ट्रीम हो रहा हो तो तर्क क्षेत्रों का पुनर्क्रमीकरण मूल रूप से संघर्ष उपनाम पथों को हल करता है---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.3.7] - 2026-03-30

### 🐛 Bug Fixes

<<<<<<< HEAD
- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **OpenCode Config:** Restructured generated `opencode.json` to use the `@ai-sdk/openai-compatible` record-based schema with `options` and `models` as object maps instead of flat arrays, fixing config validation failures (#816)
- **i18n Missing Keys:** Added missing `cloudflaredUrlNotice` translation key across all 30 language files to prevent `MISSING_MESSAGE` console errors in the Endpoint page (#823)

---
=======
-**ओपनकोड कॉन्फिग:**`@ai-sdk/openai-compatible` रिकॉर्ड-आधारित स्कीमा को `विकल्प` और `मॉडल` के साथ फ्लैट सरणियों के बजाय ऑब्जेक्ट मैप के रूप में उपयोग करने के लिए `opencode.json` को पुनर्गठित किया गया, कॉन्फिग सत्यापन विफलताओं को ठीक किया गया (#816) -**i18n गुम कुंजियाँ:**एंडपॉइंट पृष्ठ में `MISSING_MESSAGE` कंसोल त्रुटियों को रोकने के लिए सभी 30 भाषा फ़ाइलों में `cloudflaredUrlNotice` अनुवाद कुंजी जोड़ी गई (#823)---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.3.6] - 2026-03-30

### 🐛 Bug Fixes

<<<<<<< HEAD
- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Token Accounting:** Included prompt cache tokens safely in historical usage inputs calculations for correct quota deductions (PR #822)
- **Combo Test Probes:** Fixed combo testing logic false negatives by resolving parsing for reasoning-only responses and enabled massive parallelization via Promise.all (PR #828)
- **Docker Quick Tunnels:** Embedded required ca-certificates inside the base runtime container to resolve Cloudflared TLS startup failures, and surfaced stdout network errors replacing generic exit codes (PR #829)

---
=======
-**टोकन लेखांकन:**सही कोटा कटौती के लिए ऐतिहासिक उपयोग इनपुट गणना में सुरक्षित रूप से शीघ्र कैश टोकन शामिल करें (पीआर #822) -**कॉम्बो परीक्षण जांच:**केवल तर्क-वितर्क के लिए पार्सिंग को हल करके फिक्स्ड कॉम्बो परीक्षण तर्क गलत नकारात्मक और Promise.all (पीआर #828) के माध्यम से बड़े पैमाने पर समानांतरीकरण सक्षम किया गया -**डॉकर क्विक टनल:**क्लाउडफ्लेयर टीएलएस स्टार्टअप विफलताओं को हल करने के लिए बेस रनटाइम कंटेनर के अंदर एंबेडेड आवश्यक सीए-सर्टिफिकेट, और जेनेरिक एग्जिट कोड की जगह सामने आने वाली स्टडआउट नेटवर्क त्रुटियां (पीआर #829)---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.3.5] - 2026-03-30

### ✨ New Features

<<<<<<< HEAD
- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Gemini Quota Tracking:** Added real-time Gemini CLI quota tracking via the `retrieveUserQuota` API (PR #825)
- **Cache Dashboard:** Enhanced the Cache Dashboard to display prompt cache metrics, 24h trends, and estimated cost savings (PR #824)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **User Experience:** Removed invasive auto-opening OAuth modal loops on barren provider detailed pages (PR #820)
- **Dependency Updates:** Bumped and locked down dependencies for development and production trees including Next.js 16.2.1, Recharts, and TailwindCSS 4.2.2 (PR #826, #827)

---
=======
-**मिथुन कोटा ट्रैकिंग:**`retrieveUserQuota` एपीआई (पीआर #825) के माध्यम से वास्तविक समय मिथुन सीएलआई कोटा ट्रैकिंग जोड़ा गया -**कैश डैशबोर्ड:**त्वरित कैश मेट्रिक्स, 24 घंटे के रुझान और अनुमानित लागत बचत प्रदर्शित करने के लिए कैश डैशबोर्ड को उन्नत किया गया (पीआर #824)### 🐛 Bug Fixes

-**उपयोगकर्ता अनुभव:**बंजर प्रदाता विस्तृत पृष्ठों पर आक्रामक ऑटो-ओपनिंग ओएथ मोडल लूप हटा दिए गए (पीआर #820) -**निर्भरता अपडेट:**नेक्स्ट.जेएस 16.2.1, रीचार्ट्स, और टेलविंडसीएसएस 4.2.2 (पीआर #826, #827) सहित विकास और उत्पादन पेड़ों के लिए निर्भरता को बढ़ा दिया गया और बंद कर दिया गया।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.3.4] - 2026-03-30

### ✨ New Features

<<<<<<< HEAD
- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **A2A Workflows:** Added deterministic FSM orchestrator for multi-step agent workflows.
- **Graceful Degradation:** Added a new multi-layer fallback framework to preserve core functionality during partial system outages.
- **Config Audit:** Added an audit trail with diff detection to track changes and enable configuration rollbacks.
- **Provider Health:** Added provider expiration tracking with proactive UI alerts for expiring API keys.
- **Adaptive Routing:** Added an adaptive volume and complexity detector to override routing strategies dynamically based on load.
- **Provider Diversity:** Implemented provider diversity scoring via Shannon entropy to improve load distribution.
- **Auto-Disable Bounds:** Added an Auto-Disable Banned Accounts setting toggle to the Resilience dashboard.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Codex & Claude Compatibility:** Fixed UI fallbacks, patched Codex non-streaming integration issues, and resolved CLI runtime detection on Windows.
- **Release Automation:** Expanded permissions required for the Electron App build in GitHub Actions.
- **Cloudflare Runtime:** Addressed correct runtime isolation exit codes for Cloudflared tunnel components.

### 🧪 Tests

- **Test Suite Updates:** Expanded test coverage for volume detectors, provider diversity, configuration audit, and FSM.

---
=======
-**A2A वर्कफ़्लोज़:**मल्टी-स्टेप एजेंट वर्कफ़्लोज़ के लिए नियतात्मक FSM ऑर्केस्ट्रेटर जोड़ा गया। -**ग्रेसफुल डिग्रेडेशन:**आंशिक सिस्टम आउटेज के दौरान मुख्य कार्यक्षमता को संरक्षित करने के लिए एक नया मल्टी-लेयर फ़ॉलबैक फ्रेमवर्क जोड़ा गया। -**कॉन्फ़िगरेशन ऑडिट:**परिवर्तनों को ट्रैक करने और कॉन्फ़िगरेशन रोलबैक को सक्षम करने के लिए भिन्न पहचान के साथ एक ऑडिट ट्रेल जोड़ा गया। -**प्रदाता स्वास्थ्य:**एपीआई कुंजी समाप्त होने के लिए सक्रिय यूआई अलर्ट के साथ प्रदाता समाप्ति ट्रैकिंग जोड़ा गया। -**अनुकूली रूटिंग:**लोड के आधार पर गतिशील रूप से रूटिंग रणनीतियों को ओवरराइड करने के लिए एक अनुकूली वॉल्यूम और जटिलता डिटेक्टर जोड़ा गया। -**प्रदाता विविधता:**लोड वितरण में सुधार के लिए शैनन एन्ट्रापी के माध्यम से प्रदाता विविधता स्कोरिंग लागू की गई। -**ऑटो-अक्षम सीमाएँ:**रेजिलिएंस डैशबोर्ड पर टॉगल करने के लिए एक ऑटो-अक्षम प्रतिबंधित खाते सेटिंग जोड़ी गई।### 🐛 Bug Fixes

-**कोडेक्स और क्लाउड संगतता:**यूआई फ़ॉलबैक को ठीक किया गया, कोडेक्स गैर-स्ट्रीमिंग एकीकरण समस्याओं को ठीक किया गया, और विंडोज़ पर सीएलआई रनटाइम पहचान का समाधान किया गया। -**रिलीज़ ऑटोमेशन:**GitHub Actions में इलेक्ट्रॉन ऐप निर्माण के लिए आवश्यक विस्तारित अनुमतियाँ। -**क्लाउडफ्लेयर रनटाइम:**क्लाउडफ्लेयर सुरंग घटकों के लिए सही रनटाइम आइसोलेशन निकास कोड को संबोधित किया गया।### 🧪 Tests

-**टेस्ट सूट अपडेट:**वॉल्यूम डिटेक्टरों, प्रदाता विविधता, कॉन्फ़िगरेशन ऑडिट और एफएसएम के लिए विस्तारित परीक्षण कवरेज।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.3.3] - 2026-03-29

### 🐛 Bug Fixes

<<<<<<< HEAD
- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **CI/CD Reliability:** Patched GitHub Actions to stable dependency versions (`actions/checkout@v4`, `actions/upload-artifact@v4`) to mitigate unannounced builder environment deprecations.
- **Image Fallbacks:** Replaced arbitrary fallback chains in `ProviderIcon.tsx` with explicit asset validation to prevent UI loading `<Image>` components for files that don't exist, eliminating `404` errors in dashboard console logs (#745).
- **Admin Updater:** Dynamic source-installation detection for the dashboard Updater. Safely disables the `Update Now` button when OmniRoute is built locally rather than through npm, prompting for `git pull` (#743).
- **Update ERESOLVE Error:** Injected `package.json` overrides for `react`/`react-dom` and enabled `--legacy-peer-deps` within the internal automatic updater scripts to resolve breaking dependency tree conflicts with `@lobehub/ui`.

---
=======
-**सीआई/सीडी विश्वसनीयता:**अघोषित बिल्डर पर्यावरण बहिष्करण को कम करने के लिए स्थिर निर्भरता संस्करणों (`actions/checkout@v4`, `actions/upload-artifact@v4`) के लिए GitHub क्रियाओं को पैच किया गया। -**इमेज फ़ॉलबैक:**उन फ़ाइलों के लिए यूआई लोडिंग `<इमेज>` घटकों को रोकने के लिए स्पष्ट संपत्ति सत्यापन के साथ `ProviderIcon.tsx` में मनमानी फ़ॉलबैक श्रृंखलाओं को बदला गया, जो डैशबोर्ड कंसोल लॉग (#745) में `404` त्रुटियों को समाप्त करता है। -**एडमिन अपडेटर:**डैशबोर्ड अपडेटर के लिए डायनामिक सोर्स-इंस्टॉलेशन डिटेक्शन। जब ओमनीरूट एनपीएम के बजाय स्थानीय रूप से बनाया जाता है, तो 'अभी अपडेट करें' बटन को सुरक्षित रूप से अक्षम कर देता है, जिससे 'गिट पुल' (#743) के लिए संकेत मिलता है। -**अपडेट ERESOLVE त्रुटि:**इंजेक्ट किया गया `package.json` `react`/`react-dom` के लिए ओवरराइड करता है और `@lobehub/ui` के साथ ब्रेकिंग डिपेंडेंसी ट्री टकराव को हल करने के लिए आंतरिक स्वचालित अपडेटर स्क्रिप्ट के भीतर `-legacy-peer-deps` को सक्षम करता है।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.3.2] - 2026-03-29

### ✨ New Features

<<<<<<< HEAD
- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Cloudflare Tunnels:** Cloudflare Quick Tunnel integration with dashboard controls (PR #772).
- **Diagnostics:** Semantic cache bypass for combo live tests (PR #773).

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Streaming Stability:** Apply `FETCH_TIMEOUT_MS` to streaming requests' initial `fetch()` call to prevent 300s Node.js TCP timeout causing silent task failures (#769).
- **i18n:** Add missing `windsurf` and `copilot` entries to `toolDescriptions` across all 33 locale files (#748).
- **GLM Coding Audit:** Complete provider audit fixing ReDoS vulnerabilities, context window sizing (128k/16k), and model registry syncing (PR #778).

---
=======
-**क्लाउडफ्लेयर टनल:**डैशबोर्ड नियंत्रण के साथ क्लाउडफ्लेयर क्विक टनल एकीकरण (पीआर #772)। -**डायग्नोस्टिक्स:**कॉम्बो लाइव परीक्षणों के लिए सिमेंटिक कैश बाईपास (पीआर #773)।### 🐛 Bug Fixes

-**स्ट्रीमिंग स्थिरता:**स्ट्रीमिंग अनुरोधों के प्रारंभिक `fetch()` कॉल पर `FETCH_TIMEOUT_MS` लागू करें ताकि 300s Node.js TCP टाइमआउट के कारण मूक कार्य विफलता (#769) को रोका जा सके। -**i18n:**सभी 33 लोकेल फ़ाइलों (#748) में गायब `विंडसर्फ` और `कोपायलट` प्रविष्टियों को `toolDescriptions` में जोड़ें। -**जीएलएम कोडिंग ऑडिट:**ReDoS कमजोरियों, संदर्भ विंडो आकार (128k/16k), और मॉडल रजिस्ट्री सिंकिंग (पीआर #778) को ठीक करने वाला पूर्ण प्रदाता ऑडिट।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.3.1] - 2026-03-29

### 🐛 Bug Fixes

<<<<<<< HEAD
- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **OpenAI Codex:** Fallback processing fix for `type: "text"` elements carrying null or empty datasets that caused 400 rejection (#742).
- **Opencode:** Update schema alignment to singular `provider` to match official spec (#774).
- **Gemini CLI:** Inject missing end-user quota headers preventing 403 authorization lockouts (#775).
- **DB Recovery:** Refactor multipart payload imports into raw binary buffered arrays to bypass reverse proxy max body limits (#770).

---
=======
-**ओपनएआई कोडेक्स:**`प्रकार: "टेक्स्ट"` तत्वों के लिए फ़ॉलबैक प्रोसेसिंग फिक्स, जो शून्य या खाली डेटासेट ले जाते हैं, जिसके कारण 400 अस्वीकृति हुई (#742)। -**ओपनकोड:**आधिकारिक विनिर्देश (#774) से मेल खाने के लिए स्कीमा संरेखण को एकवचन `प्रदाता` में अपडेट करें। -**मिथुन सीएलआई:**403 प्राधिकरण लॉकआउट (#775) को रोकने वाले लापता अंतिम-उपयोगकर्ता कोटा हेडर को इंजेक्ट करें। -**डीबी रिकवरी:**रिवर्स प्रॉक्सी अधिकतम बॉडी सीमा (#770) को बायपास करने के लिए रिफैक्टर मल्टीपार्ट पेलोड को कच्चे बाइनरी बफर्ड एरे में आयात करता है।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.3.0] - 2026-03-29

### ✨ Enhancements & Refactoring

<<<<<<< HEAD
- **Release Stabilization** — Finalized v3.2.9 release (combo diagnostics, quality gates, Gemini tool fix) and created missing git tag. Consolidated all staged changes into a single atomic release commit.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Auto-Update Test** — Fixed `buildDockerComposeUpdateScript` test assertion to match unexpanded shell variable references (`$TARGET_TAG`, `${TARGET_TAG#v}`) in the generated deploy script, aligning with the refactored template from v3.2.8.
- **Circuit Breaker Test** — Hardened `combo-circuit-breaker.test.mjs` by injecting `maxRetries: 0` to prevent retry inflation from skewing failure count assertions during breaker state transitions.

---
=======
-**रिलीज़ स्थिरीकरण**- v3.2.9 रिलीज़ को अंतिम रूप दिया गया (कॉम्बो डायग्नोस्टिक्स, क्वालिटी गेट्स, जेमिनी टूल फिक्स) और लापता गिट टैग बनाया गया। सभी चरणबद्ध परिवर्तनों को एकल परमाणु रिलीज़ कमिट में समेकित किया गया।### 🐛 Bug Fixes

-**ऑटो-अपडेट टेस्ट**- जनरेट की गई तैनाती स्क्रिप्ट में अनविस्तारित शेल वेरिएबल संदर्भों (`$TARGET_TAG`, `${TARGET_TAG#v}`) से मिलान करने के लिए `buildDockerComposeUpdateScript` परीक्षण दावे को ठीक किया गया, जो v3.2.8 से रीफैक्टर किए गए टेम्पलेट के साथ संरेखित है। -**सर्किट ब्रेकर टेस्ट**- ब्रेकर स्थिति परिवर्तन के दौरान विफलता गणना अभिकथनों को कम करने से पुन: प्रयास मुद्रास्फीति को रोकने के लिए `maxRetries: 0` इंजेक्ट करके `कॉम्बो-सर्किट-ब्रेकर.टेस्ट.एमजेएस` को कठोर किया गया।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.2.9] - 2026-03-29

### ✨ Enhancements & Refactoring

<<<<<<< HEAD
- **Combo Diagnostics** — Introduced a live test bypass flag (`forceLiveComboTest`) allowing administrators to execute real upstream health checks that bypass all local circuit-breaker and cooldown state mechanisms, enabling precise diagnostics during rolling outages (PR #759)
- **Quality Gates** — Added automated response quality validation for combos and officially integrated `claude-4.6` model support into the core routing schemas (PR #762)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Tool Definition Validation** — Repaired Gemini API integration by normalizing enum types inside tool definitions, preventing upstream HTTP 400 parameter errors (PR #760)

---
=======
-**कॉम्बो डायग्नोस्टिक्स**- एक लाइव टेस्ट बाईपास फ़्लैग (`फोर्सलाइवकॉम्बोटेस्ट`) पेश किया गया है जो प्रशासकों को वास्तविक अपस्ट्रीम स्वास्थ्य जांच निष्पादित करने की अनुमति देता है जो सभी स्थानीय सर्किट-ब्रेकर और कूलडाउन राज्य तंत्र को बायपास करता है, जिससे रोलिंग आउटेज के दौरान सटीक निदान सक्षम होता है (पीआर #759) -**क्वालिटी गेट्स**- कॉम्बो के लिए स्वचालित प्रतिक्रिया गुणवत्ता सत्यापन जोड़ा गया और कोर रूटिंग स्कीमा में आधिकारिक तौर पर एकीकृत `क्लाउड-4.6` मॉडल समर्थन (पीआर #762)### 🐛 Bug Fixes

-**टूल डेफिनिशन वैलिडेशन**- टूल परिभाषाओं के अंदर एनम प्रकारों को सामान्य करके, अपस्ट्रीम HTTP 400 पैरामीटर त्रुटियों को रोककर जेमिनी एपीआई एकीकरण को ठीक किया गया (पीआर #760)---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.2.8] - 2026-03-29

### ✨ Enhancements & Refactoring

<<<<<<< HEAD
- **Docker Auto-Update UI** — Integrated a detached background update process for Docker Compose deployments. The Dashboard UI now seamlessly tracks update lifecycle events combining JSON REST responses with SSE streaming progress overlays for robust cross-environment reliability.
- **Cache Analytics** — Repaired zero-metrics visualization mapping by migrating Semantic Cache telemetry logs directly into the centralized tracking SQLite module.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Authentication Logic** — Fixed a bug where saving dashboard settings or adding models failed with a 401 Unauthorized error when `requireLogin` was disabled. API endpoints now correctly evaluate the global authentication toggle. Resolved global redirection by reactivating `src/middleware.ts`.
- **CLI Tool Detection (Windows)** — Prevented fatal initialization exceptions during CLI environment detection by catching `cross-spawn` ENOENT errors correctly. Adds explicit detection paths for `\AppData\Local\droid\droid.exe`.
- **Codex Native Passthrough** — Normalized model translation parameters preventing context poisoning in proxy pass-through mode, enforcing generic `store: false` constraints explicitly for all Codex-originated requests.
- **SSE Token Reporting** — Normalized provider tool-call chunk `finish_reason` detection, fixing 0% Usage analytics for stream-only responses missing strict `<DONE>` indicators.
- **DeepSeek <think> Tags** — Implemented an explicit `<think>` extraction mapping inside `responsesHandler.ts`, ensuring DeepSeek reasoning streams map equivalently to native Anthropic `<thinking>` structures.

---
=======
-**डॉकर ऑटो-अपडेट यूआई**- डॉकर कंपोज़ परिनियोजन के लिए एक अलग पृष्ठभूमि अद्यतन प्रक्रिया को एकीकृत किया गया। डैशबोर्ड यूआई अब मजबूत क्रॉस-एनवायरमेंट विश्वसनीयता के लिए एसएसई स्ट्रीमिंग प्रगति ओवरले के साथ जेएसओएन आरईएसटी प्रतिक्रियाओं को जोड़कर अद्यतन जीवनचक्र घटनाओं को निर्बाध रूप से ट्रैक करता है। -**कैश एनालिटिक्स**- सिमेंटिक कैश टेलीमेट्री लॉग को सीधे केंद्रीकृत ट्रैकिंग SQLite मॉड्यूल में माइग्रेट करके शून्य-मेट्रिक्स विज़ुअलाइज़ेशन मैपिंग की मरम्मत की गई।### 🐛 Bug Fixes

-**प्रमाणीकरण तर्क**- उस बग को ठीक किया गया जहां `requireLogin` अक्षम होने पर 401 अनधिकृत त्रुटि के साथ डैशबोर्ड सेटिंग्स को सहेजना या मॉडल जोड़ना विफल हो गया था। एपीआई एंडपॉइंट अब वैश्विक प्रमाणीकरण टॉगल का सही मूल्यांकन करते हैं। `src/middleware.ts` को पुनः सक्रिय करके वैश्विक पुनर्निर्देशन का समाधान किया गया। -**सीएलआई टूल डिटेक्शन (विंडोज)**- 'क्रॉस-स्पॉन' ईनोएंट त्रुटियों को सही ढंग से पकड़कर सीएलआई पर्यावरण का पता लगाने के दौरान घातक आरंभीकरण अपवादों को रोका गया। `\AppData\Local\droid\droid.exe` के लिए स्पष्ट पहचान पथ जोड़ता है। -**कोडेक्स नेटिव पासथ्रू**- सामान्यीकृत मॉडल अनुवाद पैरामीटर प्रॉक्सी पास-थ्रू मोड में संदर्भ विषाक्तता को रोकते हैं, सभी कोडेक्स-उत्पन्न अनुरोधों के लिए सामान्य `स्टोर: गलत` बाधाओं को स्पष्ट रूप से लागू करते हैं। -**एसएसई टोकन रिपोर्टिंग**- सामान्यीकृत प्रदाता टूल-कॉल खंड `finish_reason` का पता लगाना, सख्त `<DONE>` संकेतक गायब स्ट्रीम-ओनली प्रतिक्रियाओं के लिए 0% उपयोग विश्लेषण को ठीक करना। -**डीपसीक <थिंक> टैग**- `रिस्पॉन्सहैंडलर.टीएस` के अंदर एक स्पष्ट `<थिंक>` निष्कर्षण मैपिंग लागू की गई, जिससे यह सुनिश्चित हुआ कि डीपसीक रीजनिंग स्ट्रीम मूल एंथ्रोपिक `<थिंकिंग>` संरचनाओं के बराबर मैप हो।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.2.7] - 2026-03-29

### Fixed

<<<<<<< HEAD
- **Seamless UI Updates**: The "Update Now" feature on the Dashboard now provides live, transparent feedback using Server-Sent Events (SSE). It performs package installation, native module rebuilds (better-sqlite3), and PM2 restarts reliably while showing real-time loaders instead of silently hanging.

---
=======
-**सीमलेस यूआई अपडेट**: डैशबोर्ड पर "अभी अपडेट करें" सुविधा अब सर्वर-भेजे गए इवेंट (एसएसई) का उपयोग करके लाइव, पारदर्शी फीडबैक प्रदान करती है। यह पैकेज इंस्टालेशन करता है, नेटिव मॉड्यूल पुनर्निर्माण करता है (बेहतर-sqlite3), और PM2 चुपचाप लटकने के बजाय वास्तविक समय लोडर दिखाते हुए विश्वसनीय रूप से पुनरारंभ होता है।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.2.6] — 2026-03-29

### ✨ Enhancements & Refactoring

<<<<<<< HEAD
- **API Key Reveal (#740)** — Added a scoped API key copy flow in the Api Manager, protected by the `ALLOW_API_KEY_REVEAL` environment variable.
- **Sidebar Visibility Controls (#739)** — Admins can now hide any sidebar navigation link via the Appearance settings to reduce visual clutter.
- **Strict Combo Testing (#735)** — Hardened the combo health check endpoint to require live text responses from models instead of just soft reachability signals.
- **Streamed Detailed Logs (#734)** — Switched detailed request logging for SSE streams to reconstruct the final payload, saving immense amounts of SQLite database size and significantly cleaning up the UI.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **OpenCode Go MiniMax Auth (#733)** — Corrected the authentication header logic for `minimax` models on OpenCode Go to use `x-api-key` instead of standard bearer tokens across the `/messages` protocol.

---
=======
-**एपीआई कुंजी प्रकट (#740)**- एपीआई प्रबंधक में एक स्कोप्ड एपीआई कुंजी कॉपी प्रवाह जोड़ा गया, जो `ALLOW_API_KEY_REVEAL` पर्यावरण चर द्वारा संरक्षित है। -**साइडबार दृश्यता नियंत्रण (#739)**— व्यवस्थापक अब दृश्य अव्यवस्था को कम करने के लिए उपस्थिति सेटिंग्स के माध्यम से किसी भी साइडबार नेविगेशन लिंक को छिपा सकते हैं। -**सख्त कॉम्बो परीक्षण (#735)**- केवल नरम रीचैबिलिटी संकेतों के बजाय मॉडलों से लाइव टेक्स्ट प्रतिक्रियाओं की आवश्यकता के लिए कॉम्बो स्वास्थ्य जांच समापन बिंदु को सख्त किया गया। -**स्ट्रीम किए गए विस्तृत लॉग (#734)**- अंतिम पेलोड के पुनर्निर्माण के लिए एसएसई स्ट्रीम के लिए विस्तृत अनुरोध लॉगिंग को स्विच किया गया, जिससे बड़ी मात्रा में SQLite डेटाबेस आकार की बचत हुई और यूआई की काफी सफाई हुई।### 🐛 Bug Fixes

-**ओपनकोड गो मिनीमैक्स ऑथ (#733)**- ओपनकोड गो पर `मिनीमैक्स` मॉडल के लिए प्रमाणीकरण हेडर लॉजिक को ठीक किया गया, ताकि `/मैसेज` प्रोटोकॉल में मानक बियरर टोकन के बजाय `x-api-key` का उपयोग किया जा सके।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.2.5] — 2026-03-29

### ✨ Enhancements & Refactoring

<<<<<<< HEAD
- **Void Linux Deployment Support (#732)** — Integrated `xbps-src` packaging template and instructions to natively compile and install OmniRoute with `better-sqlite3` bindings via cross-compilation target.

## [3.2.4] — 2026-03-29

### ✨ Enhancements & Refactoring

- **Qoder AI Migration (#660)** — Completely migrated the legacy `iFlow` core provider onto `Qoder AI` maintaining stable API routing capabilities.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Gemini Tools HTTP 400 Payload Invalid Argument (#731)** — Prevented `thoughtSignature` array injections inside standard Gemini `functionCall` sequences blocking agentic routing flows.

---
=======
-**शून्य लिनक्स परिनियोजन समर्थन (#732)**- एकीकृत `xbps-src` पैकेजिंग टेम्पलेट और क्रॉस-संकलन लक्ष्य के माध्यम से `बेहतर-sqlite3` बाइंडिंग के साथ ओमनीरूट को मूल रूप से संकलित और स्थापित करने के निर्देश।## [3.2.4] — 2026-03-29

### ✨ Enhancements & Refactoring

-**क्यूडर एआई माइग्रेशन (#660)**- स्थिर एपीआई रूटिंग क्षमताओं को बनाए रखते हुए पुराने `आईफ्लो` कोर प्रदाता को `क्यूडर एआई` पर पूरी तरह से स्थानांतरित कर दिया गया।### 🐛 Bug Fixes

-**जेमिनी टूल्स HTTP 400 पेलोड अमान्य तर्क (#731)**- एजेंटिक रूटिंग प्रवाह को अवरुद्ध करने वाले मानक जेमिनी `फ़ंक्शनकॉल` अनुक्रमों के अंदर `थॉटसिग्नेचर` सरणी इंजेक्शन को रोका गया।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.2.3] — 2026-03-29

### ✨ Enhancements & Refactoring

<<<<<<< HEAD
- **Provider Limits Quota UI (#728)** — Normalized quota limit logic and data labeling inside the Limits interface.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Core Routing Schemas & Leaks** — Expanded `comboStrategySchema` to natively support `fill-first` and `p2c` strategies to unblock complex combo editing natively.
- **Thinking Tags Extraction (CLI)** — Restructured CLI token responses sanitizer RegEx capturing model reasoning structures inside streams avoiding broken `<thinking>` extractions breaking response text output format.
- **Strict Format Enforcements** — Hardened pipeline sanitization execution making it universally apply to translation mode targets.

---
=======
-**प्रदाता सीमा कोटा यूआई (#728)**- सीमा इंटरफ़ेस के अंदर सामान्यीकृत कोटा सीमा तर्क और डेटा लेबलिंग।### 🐛 Bug Fixes

-**कोर रूटिंग स्कीमा और लीक्स**- जटिल कॉम्बो संपादन को मूल रूप से अनब्लॉक करने के लिए `फिल-फर्स्ट` और `पी2सी` रणनीतियों का मूल रूप से समर्थन करने के लिए `कॉम्बोस्ट्रैटेजीस्कीमा` का विस्तार किया गया। -**थिंकिंग टैग एक्सट्रैक्शन (सीएलआई)**- पुनर्गठित सीएलआई टोकन रिस्पॉन्स सैनिटाइजर रेगएक्स, स्ट्रीम के अंदर मॉडल रीजनिंग संरचनाओं को कैप्चर करता है, टूटे हुए `<थिंकिंग>` एक्सट्रैक्शन से बचने के लिए रिस्पांस टेक्स्ट आउटपुट फॉर्मेट को तोड़ता है। -**सख्त प्रारूप प्रवर्तन**- कठोर पाइपलाइन स्वच्छता निष्पादन इसे अनुवाद मोड लक्ष्यों पर सार्वभौमिक रूप से लागू करता है।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.2.2] — 2026-03-29

### ✨ New Features

<<<<<<< HEAD
- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Four-Stage Request Log Pipeline (#705)** — Refactored log persistence to save comprehensive payloads at four distinct pipeline stages: Client Request, Translated Provider Request, Provider Response, and Translated Client Response. Introduced `streamPayloadCollector` for robust SSE stream truncation and payload serialization.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Mobile UI Fixes (#659)** — Prevented table components on the dashboard from breaking the layout on narrow viewports by adding proper horizontal scrolling and overflow containment to `DashboardLayout`.
- **Claude Prompt Cache Fixes (#708)** — Ensured `cache_control` blocks in Claude-to-Claude fallback loops are faithfully preserved and passed safely back to Anthropic models.
- **Gemini Tool Definitions (#725)** — Fixed schema translation errors when declaring simple `object` parameter types for Gemini function calling.

## [3.2.1] — 2026-03-29

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Global Fallback Provider (#689)** — When all combo models are exhausted (502/503), OmniRoute now attempts a configurable global fallback model before returning the error. Set `globalFallbackModel` in settings to enable.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Fix #721** — Fixed context pinning bypass during tool-call responses. Non-streaming tagging used wrong JSON path (`json.messages` → `json.choices[0].message`). Streaming injection now triggers on `finish_reason` chunks for tool-call-only streams. `injectModelTag()` now appends synthetic pin messages for non-string content.
- **Fix #709** — Confirmed already fixed (v3.1.9) — `system-info.mjs` creates directories recursively. Closed.
- **Fix #707** — Confirmed already fixed (v3.1.9) — empty tool name sanitization in `chatCore.ts`. Closed.

### 🧪 Tests

- Added 6 unit tests for context pinning with tool-call responses (null content, array content, roundtrip, re-injection)

## [3.2.0] — 2026-03-28

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Cache Management UI** — Added a dedicated semantic caching dashboard at \`/dashboard/cache\` with targeted API invalidation and 31-language i18n support (PR #701 by @oyi77)
- **GLM Quota Tracking** — Added real-time usage and session quota tracking for the GLM Coding (Z.AI) provider (PR #698 by @christopher-s)
- **Detailed Log Payloads** — Wired full four-stage pipeline payload capturing (original, translated, provider-response, streamed-deltas) directly into the UI (PR #705 by @rdself)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Fix #708** — Prevented token bleeding for Claude Code users routing through OmniRoute by correctly preserving native \`cache_control\` headers during Claude-to-Claude passthrough (PR #708 by @tombii)
- **Fix #719** — Setup internal auth boundaries for \`ModelSyncScheduler\` to prevent unauthenticated daemon failures on startup (PR #719 by @rdself)
- **Fix #718** — Rebuilt badge rendering in Provider Limits UI preventing bad quota boundaries overlap (PR #718 by @rdself)
- **Fix #704** — Fixed Combo Fallbacks breaking on HTTP 400 content-policy errors preventing model-rotation dead-routing (PR #704 by @rdself)

### 🔒 Security & Dependencies

- Bumped \`path-to-regexp\` to \`8.4.0\` resolving dependabot vulnerabilities (PR #715)

## [3.1.10] — 2026-03-28

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Fix #706** — Fixed icon fallback rendering caused by Tailwind V4 `font-sans` override by applying `!important` to `.material-symbols-outlined`.
- **Fix #703** — Fixed GitHub Copilot broken streams by enabling `responses` to `openai` format translation for any custom models leveraging `apiFormat: "responses"`.
- **Fix #702** — Replaced flat-rate usage tracking with accurate DB pricing calculations for both streaming and non-streaming responses.
- **Fix #716** — Cleaned up Claude tool-call translation state, correctly parsing streaming arguments and preventing OpenAI `tool_calls` chunks from repeating the `id` field.

## [3.1.9] — 2026-03-28

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Schema Coercion** — Auto-coerce string-encoded numeric JSON Schema constraints (e.g. `"minimum": "1"`) to proper types, preventing 400 errors from Cursor, Cline, and other clients sending malformed tool schemas.
- **Tool Description Sanitization** — Ensure tool descriptions are always strings; converts `null`, `undefined`, or numeric descriptions to empty strings before sending to providers.
- **Clear All Models Button** — Added i18n translations for the "Clear All Models" provider action across all 30 languages.
- **Codex Auth Export** — Added Codex `auth.json` export and apply-local buttons for seamless CLI integration.
- **Windsurf BYOK Notes** — Added official limitation warnings to the Windsurf CLI tool card documenting BYOK constraints.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Fix #709** — `system-info.mjs` no longer crashes when the output directory doesn't exist (added `mkdirSync` with recursive flag).
- **Fix #710** — A2A `TaskManager` singleton now uses `globalThis` to prevent state leakage across Next.js API route recompilations in dev mode. E2E test suite updated to handle 401 gracefully.
- **Fix #711** — Added provider-specific `max_tokens` cap enforcement for upstream requests.
- **Fix #605 / #592** — Strip `proxy_` prefix from tool names in non-streaming Claude responses; fixed LongCat validation URL.
- **Call Logs Max Cap** — Upgraded `getMaxCallLogs()` with caching layer, env var support (`CALL_LOGS_MAX`), and DB settings integration.

### 🧪 Tests

- Test suite expanded from 964 → 1027 tests (63 new tests)
- Added `schema-coercion.test.mjs` — 9 tests for numeric field coercion and tool description sanitization
- Added `t40-opencode-cli-tools-integration.test.mjs` — OpenCode/Windsurf CLI integration tests
- Enhanced feature-tests branch with comprehensive coverage tooling

### 📁 New Files

| File                                                     | Purpose                                                     |
| -------------------------------------------------------- | ----------------------------------------------------------- |
| `open-sse/translator/helpers/schemaCoercion.ts`          | Schema coercion and tool description sanitization utilities |
| `tests/unit/schema-coercion.test.mjs`                    | Unit tests for schema coercion                              |
| `tests/unit/t40-opencode-cli-tools-integration.test.mjs` | CLI tool integration tests                                  |
| `COVERAGE_PLAN.md`                                       | Test coverage planning document                             |

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Claude Prompt Caching Passthrough** — Fixed cache_control markers being stripped in Claude passthrough mode (Claude → OmniRoute → Claude), which caused Claude Code users to deplete their Anthropic API quota 5-10x faster than direct connections. OmniRoute now preserves client's cache_control markers when sourceFormat and targetFormat are both Claude, ensuring prompt caching works correctly and dramatically reducing token consumption.

## [3.1.8] - 2026-03-27

### 🐛 Bug Fixes & Features

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Platform Core:** Implemented global state handling for Hidden Models & Combos preventing them from cluttering the catalog or leaking into connected MCP agents (#681).
- **Stability:** Patched streaming crashes related to the native Antigravity provider integration failing due to unhandled undefined state arrays (#684).
- **Localization Sync:** Deployed a fully overhauled `i18n` synchronizer detecting missing nested JSON properties and retro-fitting 30 locales sequentially (#685).## [3.1.7] - 2026-03-27

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Streaming Stability:** Fixed `hasValuableContent` returning `undefined` for empty chunks in SSE streams (#676).
- **Tool Calling:** Fixed an issue in `sseParser.ts` where non-streaming Claude responses with multiple tool calls dropped the `id` of subsequent tool calls due to incorrect index-based deduplication (#671).

---
=======
-**चार-चरण अनुरोध लॉग पाइपलाइन (#705)**- चार अलग-अलग पाइपलाइन चरणों में व्यापक पेलोड को सहेजने के लिए पुन: सक्रिय लॉग दृढ़ता: क्लाइंट अनुरोध, अनुवादित प्रदाता अनुरोध, प्रदाता प्रतिक्रिया, और अनुवादित क्लाइंट प्रतिक्रिया। मजबूत एसएसई स्ट्रीम ट्रंकेशन और पेलोड क्रमांकन के लिए `स्ट्रीमपेलोडकलेक्टर` पेश किया गया।### 🐛 Bug Fixes

-**मोबाइल यूआई फिक्स (#659)**- `डैशबोर्डलेआउट` में उचित क्षैतिज स्क्रॉलिंग और ओवरफ्लो रोकथाम जोड़कर डैशबोर्ड पर तालिका घटकों को संकीर्ण व्यूपोर्ट पर लेआउट को तोड़ने से रोका गया। -**क्लाउड प्रॉम्प्ट कैश फिक्स (#708)**- सुनिश्चित किया गया कि क्लाउड-टू-क्लाउड फ़ॉलबैक लूप में `कैश_कंट्रोल' ब्लॉक ईमानदारी से संरक्षित हैं और एंथ्रोपिक मॉडल में सुरक्षित रूप से वापस भेज दिए गए हैं।
-**जेमिनी टूल परिभाषाएँ (#725)**- जेमिनी फ़ंक्शन कॉलिंग के लिए सरल `ऑब्जेक्ट` पैरामीटर प्रकार घोषित करते समय स्कीमा अनुवाद त्रुटियों को ठीक किया गया।## [3.2.1] — 2026-03-29

### ✨ New Features

-**ग्लोबल फ़ॉलबैक प्रदाता (#689)**- जब सभी कॉम्बो मॉडल समाप्त हो जाते हैं (502/503), तो ओमनीरूट अब त्रुटि लौटाने से पहले एक कॉन्फ़िगर करने योग्य वैश्विक फ़ॉलबैक मॉडल का प्रयास करता है। सक्षम करने के लिए सेटिंग्स में `globalFallbackModel` सेट करें।### 🐛 Bug Fixes

-**#721 ठीक करें**— टूल-कॉल प्रतिक्रियाओं के दौरान संदर्भ पिनिंग बाईपास को ठीक किया गया। गैर-स्ट्रीमिंग टैगिंग में गलत JSON पथ का उपयोग किया गया (`json.messages` → `json.choices[0].message`)। स्ट्रीमिंग इंजेक्शन अब टूल-कॉल-ओनली स्ट्रीम के लिए `finish_reason` खंडों पर ट्रिगर होता है। `इंजेक्टमॉडलटैग()` अब गैर-स्ट्रिंग सामग्री के लिए सिंथेटिक पिन संदेश जोड़ता है। -**फिक्स #709**— पुष्टि पहले से ही फिक्स है (v3.1.9) — `system-info.mjs` पुनरावर्ती रूप से निर्देशिका बनाता है। बंद किया हुआ। -**#707 ठीक करें**— पुष्टि पहले ही ठीक कर दी गई है (v3.1.9) — `chatCore.ts` में खाली टूल नाम सेनिटाइजेशन। बंद किया हुआ।### 🧪 Tests

- टूल-कॉल प्रतिक्रियाओं (शून्य सामग्री, सरणी सामग्री, राउंडट्रिप, पुनः इंजेक्शन) के साथ संदर्भ पिनिंग के लिए 6 यूनिट परीक्षण जोड़े गए## [3.2.0] — 2026-03-28

### ✨ New Features

-**कैश प्रबंधन यूआई**- लक्षित एपीआई अमान्यकरण और 31-भाषा i18n समर्थन के साथ \`/डैशबोर्ड/कैश\` पर एक समर्पित सिमेंटिक कैशिंग डैशबोर्ड जोड़ा गया (पीआर #701 @oyi77 द्वारा) -**जीएलएम कोटा ट्रैकिंग**- जीएलएम कोडिंग (जेड.एआई) प्रदाता के लिए वास्तविक समय उपयोग और सत्र कोटा ट्रैकिंग जोड़ा गया (पीआर #698 @क्रिस्टोफर-एस द्वारा) -**विस्तृत लॉग पेलोड**- पूर्ण चार-चरण पाइपलाइन पेलोड कैप्चरिंग (मूल, अनुवादित, प्रदाता-प्रतिक्रिया, स्ट्रीम-डेल्टा) को सीधे यूआई में वायर्ड करें (पीआर #705 @rdself द्वारा)### 🐛 Bug Fixes

-**#708 ठीक करें**- क्लाउड-टू-क्लाउड पासथ्रू के दौरान मूल \`कैश_कंट्रोल\` हेडर को सही ढंग से संरक्षित करके ओमनीरूट के माध्यम से रूट करने वाले क्लाउड कोड उपयोगकर्ताओं के लिए टोकन रक्तस्राव को रोका गया (पीआर #708 @tombii द्वारा) -**#719 ठीक करें**— स्टार्टअप पर अप्रमाणित डेमॉन विफलताओं को रोकने के लिए \`ModelSyncScheduler\` के लिए आंतरिक प्रमाणीकरण सीमाएँ सेट करें (PR #719 @rdself द्वारा) -**#718 ठीक करें**- खराब कोटा सीमाओं को ओवरलैप होने से रोकने के लिए प्रदाता सीमा यूआई में बैज रेंडरिंग का पुनर्निर्माण करें (पीआर #718 @rdself द्वारा) -**#704 ठीक करें**- मॉडल-रोटेशन डेड-रूटिंग को रोकने वाले HTTP 400 सामग्री-नीति त्रुटियों पर कॉम्बो फ़ॉलबैक को ठीक किया गया (PR #704 @rdself द्वारा)### 🔒 Security & Dependencies

- डिपेंडाबॉट की कमजोरियों को हल करते हुए \`पाथ-टू-रेगएक्सपी\` को \`8.4.0\` तक पहुंचाया गया (पीआर #715)## [3.1.10] — 2026-03-28

### 🐛 Bug Fixes

-**#706 ठीक करें**— `.material-symbols-outlined` पर `!important` लगाने से टेलविंड V4 `font-sans` ओवरराइड के कारण होने वाले आइकन फ़ॉलबैक रेंडरिंग को ठीक किया गया। -**#703 ठीक करें**- `apiFormat: "प्रतिक्रियाएं"` का लाभ उठाते हुए किसी भी कस्टम मॉडल के लिए `openai` प्रारूप अनुवाद में `प्रतिक्रियाओं` को सक्षम करके GitHub कोपायलट टूटी हुई धाराओं को ठीक किया गया। -**#702 ठीक करें**- स्ट्रीमिंग और गैर-स्ट्रीमिंग प्रतिक्रियाओं दोनों के लिए सटीक डीबी मूल्य निर्धारण गणना के साथ फ्लैट-रेट उपयोग ट्रैकिंग को प्रतिस्थापित किया गया। -**#716 ठीक करें**- क्लाउड टूल-कॉल अनुवाद स्थिति को साफ़ करें, स्ट्रीमिंग तर्कों को सही ढंग से पार्स करें और ओपनएआई `टूल_कॉल्स` खंडों को `आईडी` फ़ील्ड को दोहराने से रोकें।## [3.1.9] — 2026-03-28

### ✨ New Features

-**स्कीमा ज़बरदस्ती**- स्ट्रिंग-एन्कोडेड संख्यात्मक JSON स्कीमा बाधाओं (उदाहरण के लिए `"न्यूनतम": "1"`) को उचित प्रकारों में ऑटो-कोएर्स करें, कर्सर, क्लाइन और विकृत टूल स्कीमा भेजने वाले अन्य क्लाइंट से 400 त्रुटियों को रोकें। -**टूल विवरण सेनिटाइजेशन**- सुनिश्चित करें कि टूल विवरण हमेशा स्ट्रिंग हों; प्रदाताओं को भेजने से पहले `शून्य`, `अपरिभाषित`, या संख्यात्मक विवरण को खाली स्ट्रिंग में परिवर्तित करता है। -**सभी मॉडल साफ़ करें बटन**- सभी 30 भाषाओं में "सभी मॉडल साफ़ करें" प्रदाता कार्रवाई के लिए i18n अनुवाद जोड़ा गया। -**कोडेक्स प्रामाणिक निर्यात**- निर्बाध सीएलआई एकीकरण के लिए कोडेक्स `auth.json` निर्यात और लागू-स्थानीय बटन जोड़े गए। -**विंडसर्फ BYOK नोट्स**- BYOK बाधाओं का दस्तावेजीकरण करने वाले विंडसर्फ सीएलआई टूल कार्ड में आधिकारिक सीमा चेतावनियाँ जोड़ी गईं।### 🐛 Bug Fixes

-**#709 ठीक करें**- आउटपुट निर्देशिका मौजूद नहीं होने पर `system-info.mjs` अब क्रैश नहीं होता (पुनरावर्ती ध्वज के साथ `mkdirSync` जोड़ा गया)। -**#710 ठीक करें**- ए2ए `टास्कमैनेजर` सिंगलटन अब डेव मोड में नेक्स्ट.जेएस एपीआई रूट रीकंपाइलेशन में स्थिति रिसाव को रोकने के लिए `ग्लोबलदिस` का उपयोग करता है। E2E परीक्षण सूट को 401 को शानदार ढंग से संभालने के लिए अद्यतन किया गया। -**#711 ठीक करें**— अपस्ट्रीम अनुरोधों के लिए प्रदाता-विशिष्ट `max_tokens` कैप प्रवर्तन जोड़ा गया। -**#605 / #592 ठीक करें**— गैर-स्ट्रीमिंग क्लाउड प्रतिक्रियाओं में टूल नामों से `प्रॉक्सी_` उपसर्ग हटाएं; लॉन्गकैट सत्यापन यूआरएल तय किया गया। -**कॉल लॉग्स मैक्स कैप**- कैशिंग लेयर, एनवी वेर सपोर्ट (`CALL_LOGS_MAX`), और डीबी सेटिंग्स एकीकरण के साथ `getMaxCallLogs()` को अपग्रेड किया गया।### 🧪 Tests

- टेस्ट सूट को 964 से विस्तारित किया गया → 1027 परीक्षण (63 नए परीक्षण)
- `schema-coercion.test.mjs` जोड़ा गया - संख्यात्मक क्षेत्र जबरदस्ती और उपकरण विवरण स्वच्छता के लिए 9 परीक्षण
- `t40-opencode-cli-tools-integration.test.mjs` जोड़ा गया - OpenCode/Windsurf CLI एकीकरण परीक्षण
- व्यापक कवरेज टूलींग के साथ उन्नत सुविधा-परीक्षण शाखा### 📁 New Files

| फ़ाइल                                                    | उद्देश्य                                           |
| -------------------------------------------------------- | -------------------------------------------------- | ---------------- |
| `open-sse/translator/helpers/schemaCoercion.ts`          | स्कीमा जबरदस्ती और उपकरण विवरण स्वच्छता उपयोगिताएँ |
| `tests/unit/schema-coercion.test.mjs`                    | स्कीमा जबरदस्ती के लिए यूनिट परीक्षण               |
| `tests/unit/t40-opencode-cli-tools-integration.test.mjs` | सीएलआई उपकरण एकीकरण परीक्षण                        |
| `COVERAGE_PLAN.md`                                       | परीक्षण कवरेज योजना दस्तावेज़                      | ### 🐛 Bug Fixes |

-**क्लाउड प्रॉम्प्ट कैशिंग पासथ्रू**- क्लाउड पासथ्रू मोड (क्लाउड → ओम्नीरूट → क्लाउड) में फिक्स्ड कैश*कंट्रोल मार्कर हटा दिए गए, जिसके कारण क्लाउड कोड उपयोगकर्ताओं को अपने एंथ्रोपिक एपीआई कोटा को सीधे कनेक्शन की तुलना में 5-10 गुना तेजी से समाप्त करना पड़ा। जब सोर्सफॉर्मेट और टारगेटफॉर्मेट दोनों क्लाउड होते हैं, तो ओमनीरूट अब क्लाइंट के कैश*कंट्रोल मार्करों को संरक्षित करता है, जिससे यह सुनिश्चित होता है कि त्वरित कैशिंग सही ढंग से काम करती है और टोकन खपत को नाटकीय रूप से कम करती है।## [3.1.8] - 2026-03-27

### 🐛 Bug Fixes & Features

-**Platform Core:**Implemented global state handling for Hidden Models & Combos preventing them from cluttering the catalog or leaking into connected MCP agents (#681). -**स्थिरता:**मूल एंटीग्रेविटी प्रदाता एकीकरण से संबंधित पैचेड स्ट्रीमिंग क्रैश, अनचाहे अपरिभाषित राज्य सरणियों (#684) के कारण विफल हो रहा है। -**स्थानीयकरण सिंक:**पूरी तरह से संशोधित `i18n` सिंक्रोनाइज़र तैनात किया गया है जो लापता नेस्टेड JSON गुणों का पता लगाता है और 30 स्थानों को क्रमिक रूप से रेट्रो-फिट करता है (#685)।## [3.1.7] - 2026-03-27### 🐛 Bug Fixes

-**स्ट्रीमिंग स्थिरता:**SSE स्ट्रीम (#676) में खाली हिस्सों के लिए `hasValuableContent` को `अपरिभाषित` लौटाने को ठीक किया गया। -**टूल कॉलिंग:**`sseParser.ts` में एक समस्या को ठीक किया गया जहां कई टूल कॉल के साथ गैर-स्ट्रीमिंग क्लाउड प्रतिक्रियाओं ने गलत इंडेक्स-आधारित डिडुप्लीकेशन (#671) के कारण बाद के टूल कॉल की `आईडी` को गिरा दिया।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.1.6] — 2026-03-27

### 🐛 Bug Fixes

<<<<<<< HEAD
- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Claude Native Tool Name Restoration** — Tool names like `TodoWrite` are no longer prefixed with `proxy_` in Claude passthrough responses (both streaming and non-streaming). Includes unit test coverage (PR #663 by @coobabm)
- **Clear All Models Alias Cleanup** — "Clear All Models" button now also removes associated model aliases, preventing ghost models in the UI (PR #664 by @rdself)

---
=======
-**क्लाउड नेटिव टूल नेम रेस्टोरेशन**- `टोडोराइट` जैसे टूल नाम अब क्लाउड पासथ्रू प्रतिक्रियाओं (स्ट्रीमिंग और गैर-स्ट्रीमिंग दोनों) में `प्रॉक्सी_` के साथ उपसर्ग नहीं किए जाते हैं। यूनिट परीक्षण कवरेज शामिल है (PR #663 @coobabm द्वारा) -**सभी मॉडल उपनाम साफ़ करें**- "सभी मॉडल साफ़ करें" बटन अब संबंधित मॉडल उपनाम भी हटा देता है, यूआई में भूत मॉडल को रोकता है (पीआर #664 @rdself द्वारा)---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.1.5] — 2026-03-27

### 🐛 Bug Fixes

<<<<<<< HEAD
- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Backoff Auto-Decay** — Rate-limited accounts now auto-recover when their cooldown window expires, fixing a deadlock where high `backoffLevel` permanently deprioritized accounts (PR #657 by @brendandebeasi)

### 🌍 i18n

- **Chinese translation overhaul** — Comprehensive rewrite of `zh-CN.json` with improved accuracy (PR #658 by @only4copilot)

---
=======
-**बैकऑफ़ ऑटो-डेके**- दर-सीमित खाते अब अपने कूलडाउन विंडो के समाप्त होने पर स्वतः पुनर्प्राप्त हो जाते हैं, जिससे उस गतिरोध को ठीक किया जाता है जहां उच्च `बैकऑफ़लेवल` खातों को स्थायी रूप से प्राथमिकता से वंचित कर दिया जाता है (पीआर #657 @brendandebeasi द्वारा)### 🌍 i18n

-**चीनी अनुवाद ओवरहाल**- बेहतर सटीकता के साथ `zh-CN.json` का व्यापक पुनर्लेखन (PR #658 @only4copilot द्वारा)---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.1.4] — 2026-03-27

### 🐛 Bug Fixes

<<<<<<< HEAD
- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Streaming Override Fix** — Explicit `stream: true` in request body now takes priority over `Accept: application/json` header. Clients sending both will correctly receive SSE streaming responses (#656)

### 🌍 i18n

- **Czech string improvements** — Refined terminology across `cs.json` (PR #655 by @zen0bit)

---
=======
-**स्ट्रीमिंग ओवरराइड फिक्स**- अनुरोध निकाय में स्पष्ट `स्ट्रीम: सत्य` अब `स्वीकार: एप्लिकेशन/जेसन` हेडर पर प्राथमिकता लेता है। दोनों भेजने वाले ग्राहकों को एसएसई स्ट्रीमिंग प्रतिक्रियाएं सही ढंग से प्राप्त होंगी (#656)### 🌍 i18n

-**चेक स्ट्रिंग सुधार**- `cs.json` में परिष्कृत शब्दावली (PR #655 @zen0bit द्वारा)---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.1.3] — 2026-03-26

### 🌍 i18n & Community

<<<<<<< HEAD
- **~70 missing translation keys** added to `en.json` and 12 languages (PR #652 by @zen0bit)
- **Czech documentation updated** — CLI-TOOLS, API_REFERENCE, VM_DEPLOYMENT guides (PR #652)
- **Translation validation scripts** — `check_translations.py` and `validate_translation.py` for CI/QA (PR #651 by @zen0bit)

---
=======
-**~70 अनुपलब्ध अनुवाद कुंजियाँ**`en.json` और 12 भाषाओं में जोड़ी गईं (PR #652 @zen0bit द्वारा) -**चेक दस्तावेज़ अद्यतन**- सीएलआई-टूल्स, एपीआई*रेफरेंस, वीएम*डिप्लॉयमेंट गाइड (पीआर #652) -**अनुवाद सत्यापन स्क्रिप्ट**- CI/QA के लिए `check_translations.py` और `validate_translation.py` (PR #651 @zen0bit द्वारा)---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.1.2] — 2026-03-26

### 🐛 Bug Fixes

<<<<<<< HEAD
- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Critical: Tool Calling Regression** — Fixed `proxy_Bash` errors by disabling the `proxy_` tool name prefix in the Claude passthrough path. Tools like `Bash`, `Read`, `Write` were being renamed to `proxy_Bash`, `proxy_Read`, etc., causing Claude to reject them (#618)
- **Kiro Account Ban Documentation** — Documented as upstream AWS anti-fraud false positive, not an OmniRoute issue (#649)

### 🧪 Tests

- **936 tests, 0 failures**

---
=======
-**क्रिटिकल: टूल कॉलिंग रिग्रेशन**- क्लाउड पासथ्रू पथ में `प्रॉक्सी_` टूल नाम उपसर्ग को अक्षम करके `प्रॉक्सी_बैश` त्रुटियों को ठीक किया गया। `बैश`, `रीड`, `राइट` जैसे टूल्स का नाम बदलकर `प्रॉक्सी_बैश`, `प्रॉक्सी_रीड`, आदि किया जा रहा था, जिसके कारण क्लाउड ने उन्हें अस्वीकार कर दिया (#618) -**किरो खाता प्रतिबंध दस्तावेज**- अपस्ट्रीम एडब्ल्यूएस धोखाधड़ी-विरोधी गलत सकारात्मक के रूप में दस्तावेजित, ओमनीरूट मुद्दा नहीं (#649)### 🧪 Tests

-**936 परीक्षण, 0 विफलताएँ**---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.1.1] — 2026-03-26

### ✨ New Features

<<<<<<< HEAD
- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Vision Capability Metadata**: Added `capabilities.vision`, `input_modalities`, and `output_modalities` to `/v1/models` entries for vision-capable models (PR #646)
- **Gemini 3.1 Models**: Added `gemini-3.1-pro-preview` and `gemini-3.1-flash-lite-preview` to the Antigravity provider (#645)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Ollama Cloud 401 Error**: Fixed incorrect API base URL — changed from `api.ollama.com` to official `ollama.com/v1/chat/completions` (#643)
- **Expired Token Retry**: Added bounded retry with exponential backoff (5→10→20 min) for expired OAuth connections instead of permanently skipping them (PR #647)

### 🧪 Tests

- **936 tests, 0 failures**

---
=======
-**Vision Capability Metadata**: Added `capabilities.vision`, `input_modalities`, and `output_modalities` to `/v1/models` entries for vision-capable models (PR #646) -**मिथुन 3.1 मॉडल**: एंटीग्रेविटी प्रदाता में `मिथुन-3.1-प्रो-पूर्वावलोकन` और `मिथुन-3.1-फ्लैश-लाइट-पूर्वावलोकन` जोड़ा गया (#645)### 🐛 Bug Fixes

-**ओलामा क्लाउड 401 त्रुटि**: गलत एपीआई बेस यूआरएल को ठीक किया गया - `api.ollama.com` से आधिकारिक `ollama.com/v1/chat/completions` में बदला गया (#643) -**समाप्त टोकन पुनर्प्रयास**: समाप्त हो चुके OAuth कनेक्शनों के लिए उन्हें स्थायी रूप से छोड़ने के बजाय घातीय बैकऑफ़ (5→10→20 मिनट) के साथ बाउंडेड पुनर्प्रयास जोड़ा गया (पीआर #647)### 🧪 Tests

-**936 परीक्षण, 0 विफलताएँ**---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.1.0] — 2026-03-26

### ✨ New Features

<<<<<<< HEAD
- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **GitHub Issue Templates**: Added standardized bug report, feature request, and config/proxy issue templates (#641)
- **Clear All Models**: Added a "Clear All Models" button to the provider detail page with i18n support in 29 languages (#634)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Locale Conflict (`in.json`)**: Renamed the Hindi locale file from `in.json` (Indonesian ISO code) to `hi.json` to fix translation conflicts in Weblate (#642)
- **Codex Empty Tool Names**: Moved tool name sanitization before the native Codex passthrough, fixing 400 errors from upstream providers when tools had empty names (#637)
- **Streaming Newline Artifacts**: Added `collapseExcessiveNewlines` to the response sanitizer, collapsing runs of 3+ consecutive newlines from thinking models into a standard double newline (#638)
- **Claude Reasoning Effort**: Converted OpenAI `reasoning_effort` param to Claude's native `thinking` budget block across all request paths, including automatic `max_tokens` adjustment (#627)
- **Qwen Token Refresh**: Implemented proactive pre-expiry OAuth token refreshes (5-minute buffer) to prevent requests from failing when using short-lived tokens (#631)

### 🧪 Tests

- **936 tests, 0 failures** (+10 tests since 3.0.9)

---
=======
-**गिटहब इश्यू टेम्प्लेट**: मानकीकृत बग रिपोर्ट, फीचर अनुरोध और कॉन्फिग/प्रॉक्सी इश्यू टेम्प्लेट जोड़े गए (#641) -**सभी मॉडल साफ़ करें**: 29 भाषाओं में i18n समर्थन के साथ प्रदाता विवरण पृष्ठ पर एक "सभी मॉडल साफ़ करें" बटन जोड़ा गया (#634)### 🐛 Bug Fixes

-**लोकेल कॉन्फ्लिक्ट (`in.json`)**: वेबलेट में अनुवाद संबंधी विवादों को ठीक करने के लिए हिंदी लोकेल फ़ाइल का नाम `in.json` (इंडोनेशियाई आईएसओ कोड) से `hi.json` कर दिया गया (#642) -**कोडेक्स खाली टूल नाम**: नेटिव कोडेक्स पासथ्रू से पहले टूल नाम सैनिटाइजेशन को स्थानांतरित किया, जब टूल में खाली नाम थे तो अपस्ट्रीम प्रदाताओं से 400 त्रुटियों को ठीक किया गया (#637) -**स्ट्रीमिंग न्यूलाइन आर्टिफैक्ट्स**: रिस्पॉन्स सैनिटाइजर में `collapseExcessiveNewlines` जोड़ा गया, थिंकिंग मॉडल से लगातार 3+ न्यूलाइन के रन को एक मानक डबल न्यूलाइन में संक्षिप्त किया गया (#638) -**क्लाउड रीजनिंग प्रयास**: स्वचालित `max_tokens` समायोजन सहित सभी अनुरोध पथों में OpenAI `reasoning_effort` पैरामीटर को क्लाउड के मूल `सोच` बजट ब्लॉक में परिवर्तित किया गया (#627) -**क्यूवेन टोकन रिफ्रेश**: अल्पकालिक टोकन (#631) का उपयोग करते समय अनुरोधों को विफल होने से रोकने के लिए प्रोएक्टिव प्री-एक्सपायरी ओएथ टोकन रिफ्रेश (5-मिनट बफर) लागू किया गया।### 🧪 Tests

-**936 परीक्षण, 0 विफलताएँ**(3.0.9 से +10 परीक्षण)---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.9] — 2026-03-26

### 🐛 Bug Fixes

<<<<<<< HEAD
- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **NaN tokens in Claude Code / client responses (#617):**
  - `sanitizeUsage()` now cross-maps `input_tokens`→`prompt_tokens` and `output_tokens`→`completion_tokens` before the whitelist filter, fixing responses showing NaN/0 token counts when providers return Claude-style usage field names

### सुरक्षा

- Updated `yaml` package to fix stack overflow vulnerability (GHSA-48c2-rrv3-qjmp)

### 📋 Issue Triage

- Closed #613 (Codestral — resolved with Custom Provider workaround)
- Commented on #615 (OpenCode dual-endpoint — workaround provided, tracked as feature request)
- Commented on #618 (tool call visibility — requesting v3.0.9 test)
- Commented on #627 (effort level — already supported)

---
=======
-**क्लाउड कोड/ग्राहक प्रतिक्रियाओं में NaN टोकन (#617):**

- `sanitizeUsage()` अब श्वेतसूची फ़िल्टर से पहले `input_tokens`→`prompt_tokens` और `output_tokens`→`completion_tokens` को क्रॉस-मैप करता है, जब प्रदाता क्लाउड-शैली उपयोग फ़ील्ड नाम लौटाते हैं तो NaN/0 टोकन काउंट दिखाने वाली प्रतिक्रियाओं को ठीक करता है### सुरक्षा

- स्टैक ओवरफ्लो भेद्यता को ठीक करने के लिए अद्यतन `yaml` पैकेज (GHSA-48c2-rrv3-qjmp)### 📋 Issue Triage

- बंद #613 (कोडेस्ट्रल - कस्टम प्रदाता वर्कअराउंड के साथ हल किया गया)
- #615 पर टिप्पणी की गई (ओपनकोड डुअल-एंडपॉइंट - वर्कअराउंड प्रदान किया गया, फीचर अनुरोध के रूप में ट्रैक किया गया)
- #618 पर टिप्पणी की गई (टूल कॉल दृश्यता - v3.0.9 परीक्षण का अनुरोध)
- #627 पर टिप्पणी की गई (प्रयास स्तर - पहले से ही समर्थित)---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.8] — 2026-03-25

### 🐛 Bug Fixes

<<<<<<< HEAD
- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Translation Failures for OpenAI-format Providers in Claude CLI (#632):**
  - Handle `reasoning_details[]` array format from StepFun/OpenRouter — converts to `reasoning_content`
  - Handle `reasoning` field alias from some providers → normalized to `reasoning_content`
  - Cross-map usage field names: `input_tokens`↔`prompt_tokens`, `output_tokens`↔`completion_tokens` in `filterUsageForFormat`
  - Fix `extractUsage` to accept both `input_tokens`/`output_tokens` and `prompt_tokens`/`completion_tokens` as valid usage fields
  - Applied to both streaming (`sanitizeStreamingChunk`, `openai-to-claude.ts` translator) and non-streaming (`sanitizeMessage`) paths

---
=======
-**क्लाउड सीएलआई (#632) में ओपनएआई-प्रारूप प्रदाताओं के लिए अनुवाद विफलताएँ:**

- स्टेपफन/ओपनराउटर से `reasoning_details[]` सरणी प्रारूप को संभालें - `reasoning_content` में कनवर्ट करें
- कुछ प्रदाताओं से `रीज़निंग` फ़ील्ड उपनाम को संभालें → `रीज़निंग_कंटेंट` के लिए सामान्यीकृत
- क्रॉस-मैप उपयोग फ़ील्ड नाम: `input_tokens`↔`prompt_tokens`, `output_tokens`↔`completion_tokens` `filterUsageForFormat` में
- `input_tokens`/`output_tokens` और `prompt_tokens`/`completion_tokens` दोनों को वैध उपयोग फ़ील्ड के रूप में स्वीकार करने के लिए `extractUsage` को ठीक करें
- स्ट्रीमिंग (`sanitizeStreamingChunk`, `openai-to-claude.ts` अनुवादक) और गैर-स्ट्रीमिंग (`sanitizeMessage`) दोनों पथों पर लागू---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.7] — 2026-03-25

### 🐛 Bug Fixes

<<<<<<< HEAD
- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Antigravity Token Refresh:** Fixed `client_secret is missing` error for npm-installed users — the `clientSecretDefault` was empty in providerRegistry, causing Google to reject token refresh requests (#588)
- **OpenCode Zen Models:** Added `modelsUrl` to the OpenCode Zen registry entry so "Import from /models" works correctly (#612)
- **Streaming Artifacts:** Fixed excessive newlines left in responses after thinking-tag signature stripping (#626)
- **Proxy Fallback:** Added automatic retry without proxy when SOCKS5 relay fails
- **Proxy Test:** Test endpoint now resolves real credentials from DB via proxyId

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Playground Account/Key Selector:** Persistent, always-visible dropdown to select specific provider accounts/keys for testing — fetches all connections at startup and filters by selected provider
- **CLI Tools Dynamic Models:** Model selection now dynamically fetches from `/v1/models` API — providers like Kiro now show their full model catalog
- **Antigravity Model List:** Updated with Claude Sonnet 4.5, Claude Sonnet 4, GPT 5, GPT 5 Mini; enabled `passthroughModels` for dynamic model access (#628)

### 🔧 Maintenance

- Merged PR #625 — Provider Limits light mode background fix

---
=======
-**एंटीग्रेविटी टोकन रिफ्रेश:**एनपीएम-इंस्टॉल किए गए उपयोगकर्ताओं के लिए `क्लाइंट_सीक्रेट गायब है` त्रुटि को ठीक किया गया - प्रदाता रजिस्ट्री में `क्लाइंटसीक्रेटडिफॉल्ट` खाली था, जिसके कारण Google ने टोकन रीफ्रेश अनुरोधों को अस्वीकार कर दिया (#588) -**ओपनकोड ज़ेन मॉडल:**ओपनकोड ज़ेन रजिस्ट्री प्रविष्टि में `मॉडलयूआरएल` जोड़ा गया ताकि "/मॉडल से आयात" सही ढंग से काम करे (#612) -**स्ट्रीमिंग कलाकृतियाँ:**थिंकिंग-टैग सिग्नेचर स्ट्रिपिंग के बाद प्रतिक्रियाओं में छोड़ी गई अत्यधिक नई लाइनों को ठीक किया गया (#626) -**प्रॉक्सी फ़ॉलबैक:**SOCKS5 रिले विफल होने पर प्रॉक्सी के बिना स्वचालित पुनः प्रयास जोड़ा गया -**प्रॉक्सी टेस्ट:**टेस्ट एंडपॉइंट अब प्रॉक्सीआईडी के माध्यम से डीबी से वास्तविक क्रेडेंशियल्स का समाधान करता है### ✨ New Features

-**खेल का मैदान खाता/कुंजी चयनकर्ता:**परीक्षण के लिए विशिष्ट प्रदाता खातों/कुंजियों का चयन करने के लिए लगातार, हमेशा दिखाई देने वाला ड्रॉपडाउन - स्टार्टअप पर सभी कनेक्शन लाता है और चयनित प्रदाता द्वारा फ़िल्टर करता है -**सीएलआई उपकरण गतिशील मॉडल:**मॉडल चयन अब गतिशील रूप से `/v1/मॉडल` एपीआई से प्राप्त होता है - किरो जैसे प्रदाता अब अपना पूरा मॉडल कैटलॉग दिखाते हैं -**एंटीग्रेविटी मॉडल सूची:**क्लाउड सॉनेट 4.5, क्लाउड सॉनेट 4, जीपीटी 5, जीपीटी 5 मिनी के साथ अपडेट किया गया; डायनामिक मॉडल एक्सेस के लिए `पासथ्रूमॉडल` सक्षम किया गया (#628)### 🔧 Maintenance

- मर्ज किया गया पीआर #625 - प्रदाता लाइट मोड बैकग्राउंड फिक्स को सीमित करता है---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.6] — 2026-03-25

### 🐛 Bug Fixes

<<<<<<< HEAD
- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Limits/Proxy:** Fixed Codex limit fetching for accounts behind SOCKS5 proxies — token refresh now runs inside proxy context
- **CI:** Fixed integration test `v1/models` assertion failure in CI environments without provider connections
- **Settings:** Proxy test button now shows success/failure results immediately (previously hidden behind health data)

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Playground:** Added Account selector dropdown — test specific connections individually when a provider has multiple accounts

### 🔧 Maintenance

- Merged PR #623 — LongCat API base URL path correction

---
=======
-**सीमाएं/प्रॉक्सी:**SOCKS5 प्रॉक्सी के पीछे के खातों के लिए निर्धारित कोडेक्स सीमा - टोकन रिफ्रेश अब प्रॉक्सी संदर्भ के अंदर चलता है -**सीआई:**प्रदाता कनेक्शन के बिना सीआई वातावरण में एकीकरण परीक्षण `v1/मॉडल` दावे की विफलता को ठीक किया गया -**सेटिंग्स:**प्रॉक्सी परीक्षण बटन अब सफलता/असफलता परिणाम तुरंत दिखाता है (पहले स्वास्थ्य डेटा के पीछे छिपा हुआ था)### ✨ New Features

-**खेल का मैदान:**जोड़ा गया खाता चयनकर्ता ड्रॉपडाउन - जब किसी प्रदाता के पास एकाधिक खाते हों तो व्यक्तिगत रूप से विशिष्ट कनेक्शन का परीक्षण करें### 🔧 Maintenance

- मर्ज किया गया पीआर #623 - लॉन्गकैट एपीआई बेस यूआरएल पथ सुधार---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.5] — 2026-03-25

### ✨ New Features

<<<<<<< HEAD
- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Limits UI:** Added tag grouping feature to the connections dashboard to improve visual organization for accounts with custom tags.

---
=======
-**यूआई सीमित करें:**कस्टम टैग वाले खातों के लिए दृश्य संगठन को बेहतर बनाने के लिए कनेक्शन डैशबोर्ड में टैग ग्रुपिंग सुविधा जोड़ी गई।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.4] — 2026-03-25

### 🐛 Bug Fixes

<<<<<<< HEAD
- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Streaming:** Fixed `TextDecoder` state corruption inside combo `sanitize` TransformStream which caused SSE garbled output matching multibyte characters (PR #614)
- **Providers UI:** Safely render HTML tags inside provider connection error tooltips using `dangerouslySetInnerHTML`
- **Proxy Settings:** Added missing `username` and `password` payload body properties allowing authenticated proxies to be successfully verified from the Dashboard.
- **Provider API:** Bound soft exception returns to `getCodexUsage` preventing API HTTP 500 failures when token fetch fails

---
=======
-**स्ट्रीमिंग:**कॉम्बो `सैनिटाइज` ट्रांसफॉर्मस्ट्रीम के अंदर `टेक्स्टडिकोडर` स्थिति भ्रष्टाचार को ठीक किया गया, जिसके कारण एसएसई ने मल्टीबाइट वर्णों से मेल खाने वाले विकृत आउटपुट का कारण बना (पीआर #614) -**प्रदाता यूआई:**`खतरनाक रूप से सेटइनरएचटीएमएल` का उपयोग करके प्रदाता कनेक्शन त्रुटि टूलटिप्स के अंदर एचटीएमएल टैग को सुरक्षित रूप से प्रस्तुत करें -**प्रॉक्सी सेटिंग्स:**गायब `उपयोगकर्ता नाम` और `पासवर्ड` पेलोड बॉडी गुण जोड़े गए, जिससे प्रमाणित प्रॉक्सी को डैशबोर्ड से सफलतापूर्वक सत्यापित किया जा सके। -**प्रदाता एपीआई:**बाउंड सॉफ्ट अपवाद `getCodexUsage` पर लौटता है, जो टोकन लाने में विफल होने पर एपीआई HTTP 500 विफलताओं को रोकता है---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.3] — 2026-03-25

### ✨ New Features

<<<<<<< HEAD
- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Auto-Sync Models:** Added a UI toggle and `sync-models` endpoint to automatically synchronise model lists per provider using a scheduled interval scheduler (PR #597)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Timeouts:** Elevated default proxies `FETCH_TIMEOUT_MS` and `STREAM_IDLE_TIMEOUT_MS` to 10 minutes to properly support deep reasoning models (like o1) without aborting requests (Fixes #609)
- **CLI Tool Detection:** Improved cross-platform detection handling NVM paths, Windows `PATHEXT` (preventing `.cmd` wrappers issue), and custom NPM prefixes (PR #598)
- **Streaming Logs:** Implemented `tool_calls` delta accumulation in streaming response logs so function calls are tracked and persisted accurately in DB (PR #603)
- **Model Catalog:** Removed auth exemption, properly hiding `comfyui` and `sdwebui` models when no provider is explicitly configured (PR #599)

### 🌐 Translations

- **cs:** Improved Czech translation strings across the app (PR #601)

## [3.0.2] — 2026-03-25
=======
-**ऑटो-सिंक मॉडल:**एक निर्धारित अंतराल शेड्यूलर (पीआर #597) का उपयोग करके प्रति प्रदाता मॉडल सूचियों को स्वचालित रूप से सिंक्रनाइज़ करने के लिए एक यूआई टॉगल और `सिंक-मॉडल` एंडपॉइंट जोड़ा गया।### 🐛 Bug Fixes

-**टाइमआउट:**अनुरोधों को निरस्त किए बिना डीप रीज़निंग मॉडल (जैसे ओ1) को उचित रूप से समर्थन देने के लिए डिफ़ॉल्ट प्रॉक्सी `FETCH_TIMEOUT_MS` और `STREAM_IDLE_TIMEOUT_MS` को 10 मिनट तक बढ़ाया गया (फिक्स #609) -**सीएलआई टूल डिटेक्शन:**बेहतर क्रॉस-प्लेटफ़ॉर्म डिटेक्शन हैंडलिंग एनवीएम पथ, विंडोज `पाथेक्स्ट` (`.cmd` रैपर्स समस्या को रोकना), और कस्टम एनपीएम उपसर्ग (पीआर #598) -**स्ट्रीमिंग लॉग:**स्ट्रीमिंग प्रतिक्रिया लॉग में `टूल_कॉल्स` डेल्टा संचय लागू किया गया ताकि फ़ंक्शन कॉल को ट्रैक किया जा सके और डीबी में सटीक रूप से जारी रखा जा सके (पीआर #603) -**मॉडल कैटलॉग:**जब कोई प्रदाता स्पष्ट रूप से कॉन्फ़िगर नहीं किया जाता है तो `comfyui` और `sdwebui` मॉडल को ठीक से छिपाते हुए, प्रामाणिक छूट हटा दी जाती है (PR #599)### 🌐 Translations

-**सीएस:**ऐप में बेहतर चेक अनुवाद स्ट्रिंग (पीआर #601)## [3.0.2] — 2026-03-25
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### 🚀 Enhancements & Features

#### feat(ui): Connection Tag Grouping

<<<<<<< HEAD
- Added a Tag/Group field to `EditConnectionModal` (stored in `providerSpecificData.tag`) without requiring DB schema migrations.
- Connections in the provider view now dynamically group by tag with visual dividers.
- Untagged connections appear first without a header, followed by tagged groups in alphabetical order.
- The tag grouping automatically applies to the Codex/Copilot/Antigravity Limits section since toggles exist inside connection rows.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

#### fix(ui): Proxy Management UI Stabilization

- **Missing badges on connection cards:** Fixed by using `resolveProxyForConnection()` rather than static mapping.
- **Test Connection disabled in saved mode:** Enabled the Test button by resolving proxy config from the saved list.
- **Config Modal freezing:** Added `onClose()` calls after save/clear to prevent the UI from freezing.
- **Double usage counting:** `ProxyRegistryManager` now loads usage eagerly on mount with deduplication by `scope` + `scopeId`. Usage counts were replaced with a Test button displaying IP/latency inline.

#### fix(translator): `function_call` prefix stripping

- Repaired an incomplete fix from PR #607 where only `tool_use` blocks stripped Claude's `proxy_` tool prefix. Now, clients using the OpenAI Responses API format will also correctly receive tool tools without the `proxy_` prefix.

---
=======
- डीबी स्कीमा माइग्रेशन की आवश्यकता के बिना `EditConnectionModal` (`providerSpecificData.tag` में संग्रहीत) में एक टैग/समूह फ़ील्ड जोड़ा गया।
- प्रदाता दृश्य में कनेक्शन अब विज़ुअल डिवाइडर के साथ टैग द्वारा गतिशील रूप से समूहित होते हैं।
- बिना टैग किए गए कनेक्शन पहले बिना हेडर के दिखाई देते हैं, उसके बाद वर्णमाला क्रम में टैग किए गए समूह दिखाई देते हैं।
- टैग ग्रुपिंग स्वचालित रूप से कोडेक्स/कोपायलट/एंटीग्रेविटी लिमिट्स अनुभाग पर लागू होती है क्योंकि टॉगल कनेक्शन पंक्तियों के अंदर मौजूद होते हैं।### 🐛 Bug Fixes

#### fix(ui): Proxy Management UI Stabilization

-**कनेक्शन कार्ड पर गुम बैज:**​​स्टैटिक मैपिंग के बजाय `resolveProxyForConnection()` का उपयोग करके ठीक किया गया। -**सहेजे गए मोड में टेस्ट कनेक्शन अक्षम:**सहेजी गई सूची से प्रॉक्सी कॉन्फ़िगरेशन को हल करके टेस्ट बटन को सक्षम किया गया। -**कॉन्फ़िगर मोडल फ़्रीज़िंग:**यूआई को फ़्रीज़ होने से रोकने के लिए सेव/क्लियर के बाद `onClose()` कॉल जोड़ा गया। -**दोहरे उपयोग की गिनती:**`ProxyRegistryManager` अब `स्कोप` + `स्कोपआईडी` द्वारा डिडुप्लीकेशन के साथ माउंट पर उपयोग को उत्सुकता से लोड करता है। उपयोग गणना को आईपी/विलंबता इनलाइन प्रदर्शित करने वाले एक परीक्षण बटन से बदल दिया गया था।#### fix(translator): `function_call` prefix stripping

- पीआर #607 से एक अपूर्ण सुधार की मरम्मत की गई जहां केवल `टूल_यूज़` ब्लॉक ने क्लाउड के `प्रॉक्सी_` टूल उपसर्ग को हटा दिया। अब, OpenAI रिस्पॉन्स एपीआई प्रारूप का उपयोग करने वाले क्लाइंट को `प्रॉक्सी_` उपसर्ग के बिना भी टूल टूल सही ढंग से प्राप्त होंगे।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.1] — 2026-03-25

### 🔧 Hotfix Patch — Critical Bug Fixes

<<<<<<< HEAD
Three critical regressions reported by users after the v3.0.0 launch have been resolved.

#### fix(translator): strip `proxy_` prefix in non-streaming Claude responses (#605)

The `proxy_` prefix added by Claude OAuth was only stripped from **streaming** responses. In **non-streaming** mode, `translateNonStreamingResponse` had no access to the `toolNameMap`, causing clients to receive mangled tool names like `proxy_read_file` instead of `read_file`.

**Fix:** Added optional `toolNameMap` parameter to `translateNonStreamingResponse` and applied prefix stripping in the Claude `tool_use` block handler. `chatCore.ts` now passes the map through.

#### fix(validation): add LongCat specialty validator to skip /models probe (#592)

LongCat AI does not expose `GET /v1/models`. The generic `validateOpenAICompatibleProvider` validator fell through to a chat-completions fallback only if `validationModelId` was set, which LongCat doesn't configure. This caused provider validation to fail with a misleading error on add/save.

**Fix:** Added `longcat` to the specialty validators map, probing `/chat/completions` directly and treating any non-auth response as a pass.

#### fix(translator): normalize object tool schemas for Anthropic (#595)

MCP tools (e.g. `pencil`, `computer_use`) forward tool definitions with `{type:"object"}` but without a `properties` field. Anthropic's API rejects these with: `object schema missing properties`.

**Fix:** In `openai-to-claude.ts`, inject `properties: {}` as a safe default when `type` is `"object"` and `properties` is absent.

---

### 🔀 Community PRs Merged (2)

| PR       | Author  | Summary                                                                    |
| -------- | ------- | -------------------------------------------------------------------------- |
| **#589** | @flobo3 | docs(i18n): fix Russian translation for Playground and Testbed             |
| **#591** | @rdself | fix(ui): improve Provider Limits light mode contrast and plan tier display |

---

### ✅ Issues Resolved

`#592` `#595` `#605`

---

### 🧪 Tests

- **926 tests, 0 failures** (unchanged from v3.0.0)

---
=======
v3.0.0 लॉन्च के बाद उपयोगकर्ताओं द्वारा रिपोर्ट किए गए तीन महत्वपूर्ण प्रतिगमन का समाधान कर दिया गया है।#### fix(translator): strip `proxy_` prefix in non-streaming Claude responses (#605)

क्लाउड ओएथ द्वारा जोड़ा गया `प्रॉक्सी_` उपसर्ग केवल**स्ट्रीमिंग**प्रतिक्रियाओं से हटाया गया था।**नॉन-स्ट्रीमिंग**मोड में, `translateNonStreamingResponse` के पास `toolNameMap` तक कोई पहुंच नहीं थी, जिसके कारण क्लाइंट को `read_file` के बजाय `proxy_read_file` जैसे खराब टूल नाम प्राप्त हुए।

**फिक्स:**`translateNonStreamingResponse` में वैकल्पिक `toolNameMap` पैरामीटर जोड़ा गया और क्लाउड `tool_use` ब्लॉक हैंडलर में उपसर्ग स्ट्रिपिंग लागू की गई। `chatCore.ts` अब मानचित्र को पास करता है।#### fix(validation): add LongCat specialty validator to skip /models probe (#592)

LongCat AI `GET /v1/models` को उजागर नहीं करता है। सामान्य `validateOpenAICompatibleProvider` सत्यापनकर्ता चैट-पूर्णता फ़ॉलबैक के माध्यम से केवल तभी गिरता है जब `validationModelId` सेट किया गया था, जिसे LongCat कॉन्फ़िगर नहीं करता है। इसके कारण ऐड/सेव पर एक भ्रामक त्रुटि के साथ प्रदाता सत्यापन विफल हो गया।

**फिक्स:**विशेष सत्यापनकर्ता मानचित्र में `लॉन्गकैट` जोड़ा गया, `/चैट/पूर्णता` की सीधे जांच की गई और किसी भी गैर-लेखक प्रतिक्रिया को पास के रूप में माना गया।#### fix(translator): normalize object tool schemas for Anthropic (#595)

एमसीपी उपकरण (जैसे `पेंसिल`, `कंप्यूटर_यूज`) उपकरण परिभाषाओं को `{type:"object"}` के साथ आगे बढ़ाते हैं लेकिन `गुण` फ़ील्ड के बिना। एन्थ्रोपिक का एपीआई इन्हें इस प्रकार अस्वीकार करता है: `ऑब्जेक्ट स्कीमा अनुपलब्ध गुण`।

**फिक्स:**`openai-to-claude.ts` में, `properties: {}` को एक सुरक्षित डिफ़ॉल्ट के रूप में इंजेक्ट करें जब `type` ``ऑब्जेक्ट"` हो और `properties` अनुपस्थित हो।---

### 🔀 Community PRs Merged (2)

| पीआर     | लेखक    | सारांश                                                                                   |
| -------- | ------- | ---------------------------------------------------------------------------------------- | --- |
| **#589** | @flobo3 | डॉक्स(i18n): प्लेग्राउंड और टेस्टबेड के लिए रूसी अनुवाद ठीक करें                         |
| **#591** | @rdself | फिक्स (यूआई): प्रोवाइडर लिमिट्स लाइट मोड कंट्रास्ट और प्लान टियर डिस्प्ले में सुधार करें | --- |

### ✅ Issues Resolved

`#592` `#595` `#605`---

### 🧪 Tests

-**926 परीक्षण, 0 विफलताएँ**(v3.0.0 से अपरिवर्तित)---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.0] — 2026-03-24

### 🎉 OmniRoute v3.0.0 — The Free AI Gateway, Now with 67+ Providers

<<<<<<< HEAD
> **The biggest release ever.** From 36 providers in v2.9.5 to **67+ providers** in v3.0.0 — with MCP Server, A2A Protocol, auto-combo engine, Provider Icons, Registered Keys API, 926 tests, and contributions from **12 community members** across **10 merged PRs**.
>
> Consolidated from v3.0.0-rc.1 through rc.17 (17 release candidates over 3 days of intense development).

---

### 🆕 New Providers (+31 since v2.9.5)

| Provider                      | Alias           | Tier        | Notes                                                                       |
| ----------------------------- | --------------- | ----------- | --------------------------------------------------------------------------- |
| **OpenCode Zen**              | `opencode-zen`  | Free        | 3 models via `opencode.ai/zen/v1` (PR #530 by @kang-heewon)                 |
| **OpenCode Go**               | `opencode-go`   | Paid        | 4 models via `opencode.ai/zen/go/v1` (PR #530 by @kang-heewon)              |
| **LongCat AI**                | `lc`            | Free        | 50M tokens/day (Flash-Lite) + 500K/day (Chat/Thinking) during public beta   |
| **Pollinations AI**           | `pol`           | Free        | No API key needed — GPT-5, Claude, Gemini, DeepSeek V3, Llama 4 (1 req/15s) |
| **Cloudflare Workers AI**     | `cf`            | Free        | 10K Neurons/day — ~150 LLM responses or 500s Whisper audio, edge inference  |
| **Scaleway AI**               | `scw`           | Free        | 1M free tokens for new accounts — EU/GDPR compliant (Paris)                 |
| **AI/ML API**                 | `aiml`          | Free        | $0.025/day free credits — 200+ models via single endpoint                   |
| **Puter AI**                  | `pu`            | Free        | 500+ models (GPT-5, Claude Opus 4, Gemini 3 Pro, Grok 4, DeepSeek V3)       |
| **Alibaba Cloud (DashScope)** | `ali`           | Paid        | International + China endpoints via `alicode`/`alicode-intl`                |
| **Alibaba Coding Plan**       | `bcp`           | Paid        | Alibaba Model Studio with Anthropic-compatible API                          |
| **Kimi Coding (API Key)**     | `kmca`          | Paid        | Dedicated API-key-based Kimi access (separate from OAuth)                   |
| **MiniMax Coding**            | `minimax`       | Paid        | International endpoint                                                      |
| **MiniMax (China)**           | `minimax-cn`    | Paid        | China-specific endpoint                                                     |
| **Z.AI (GLM-5)**              | `zai`           | Paid        | Zhipu AI next-gen GLM models                                                |
| **Vertex AI**                 | `vertex`        | Paid        | Google Cloud — Service Account JSON or OAuth access_token                   |
| **Ollama Cloud**              | `ollamacloud`   | Paid        | Ollama's hosted API service                                                 |
| **Synthetic**                 | `synthetic`     | Paid        | Passthrough models gateway                                                  |
| **Kilo Gateway**              | `kg`            | Paid        | Passthrough models gateway                                                  |
| **Perplexity Search**         | `pplx-search`   | Paid        | Dedicated search-grounded endpoint                                          |
| **Serper Search**             | `serper-search` | Paid        | Web search API integration                                                  |
| **Brave Search**              | `brave-search`  | Paid        | Brave Search API integration                                                |
| **Exa Search**                | `exa-search`    | Paid        | Neural search API integration                                               |
| **Tavily Search**             | `tavily-search` | Paid        | AI search API integration                                                   |
| **NanoBanana**                | `nb`            | Paid        | Image generation API                                                        |
| **ElevenLabs**                | `el`            | Paid        | Text-to-speech voice synthesis                                              |
| **Cartesia**                  | `cartesia`      | Paid        | Ultra-fast TTS voice synthesis                                              |
| **PlayHT**                    | `playht`        | Paid        | Voice cloning and TTS                                                       |
| **Inworld**                   | `inworld`       | Paid        | AI character voice chat                                                     |
| **SD WebUI**                  | `sdwebui`       | Self-hosted | Stable Diffusion local image generation                                     |
| **ComfyUI**                   | `comfyui`       | Self-hosted | ComfyUI local workflow node-based generation                                |
| **GLM Coding**                | `glm`           | Paid        | BigModel/Zhipu coding-specific endpoint                                     |

**Total: 67+ providers** (4 Free, 8 OAuth, 55 API Key) + unlimited OpenAI/Anthropic-Compatible custom providers.

---
=======
> **अब तक की सबसे बड़ी रिलीज़।**v2.9.5 में 36 प्रदाताओं से लेकर v3.0.0 में**67+ प्रदाता**तक - एमसीपी सर्वर, ए2ए प्रोटोकॉल, ऑटो-कॉम्बो इंजन, प्रदाता आइकन, पंजीकृत कुंजी एपीआई, 926 परीक्षण, और**12 समुदाय सदस्यों**के योगदान के साथ**10 मर्ज किए गए पीआर**।
>
> v3.0.0-rc.1 से rc.17 तक समेकित (गहन विकास के 3 दिनों में 17 रिलीज़ उम्मीदवार)।---

### 🆕 New Providers (+31 since v2.9.5)

| प्रदाता                       | उपनाम             | टियर        | नोट्स                                                                                            |
| ----------------------------- | ----------------- | ----------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| **ओपनकोड ज़ेन**               | `ओपनकोड-ज़ेन`     | मुफ़्त      | `opencode.ai/zen/v1` के माध्यम से 3 मॉडल (PR #530 @kang-heewon द्वारा)                           |
| **ओपनकोड गो**                 | `ओपनकोड-गो`       | भुगतान      | `opencode.ai/zen/go/v1` के माध्यम से 4 मॉडल (PR #530 @kang-heewon द्वारा)                        |
| **लॉन्गकैट एआई**              | `एलसी`            | मुफ़्त      | सार्वजनिक बीटा के दौरान 50M टोकन/दिन (फ़्लैश-लाइट) + 500K/दिन (चैट/सोच)                          |
| **परागण एआई**                 | `पोल`             | मुफ़्त      | किसी एपीआई कुंजी की आवश्यकता नहीं - जीपीटी-5, क्लाउड, जेमिनी, डीपसीक वी3, लामा 4 (1 अनुरोध/15एस) |
| **क्लाउडफ्लेयर वर्कर्स एआई**  | `सीएफ`            | मुफ़्त      | 10K न्यूरॉन्स/दिन - ~150 एलएलएम प्रतिक्रियाएं या 500 व्हिस्पर ऑडियो, एज अनुमान                   |
| **स्केलवे एआई**               | `scw`             | मुफ़्त      | नए खातों के लिए 1 मिलियन मुफ़्त टोकन - ईयू/जीडीपीआर अनुरूप (पेरिस)                               |
| **एआई/एमएल एपीआई**            | 'उद्देश्य'        | मुफ़्त      | $0.025/दिन मुफ़्त क्रेडिट - एकल समापन बिंदु के माध्यम से 200+ मॉडल                               |
| **पुटर एआई**                  | `पु`              | मुफ़्त      | 500+ मॉडल (जीपीटी-5, क्लाउड ओपस 4, जेमिनी 3 प्रो, ग्रोक 4, डीपसीक वी3)                           |
| **अलीबाबा क्लाउड (डैशस्कोप)** | 'अली'             | भुगतान      | `एलिकोड`/`एलिकोड-इंटल` के माध्यम से अंतर्राष्ट्रीय + चीन समापन बिंदु                             |
| **अलीबाबा कोडिंग योजना**      | `बीसीपी`          | भुगतान      | एंथ्रोपिक-संगत एपीआई के साथ अलीबाबा मॉडल स्टूडियो                                                |
| **किमी कोडिंग (एपीआई कुंजी)** | `kmca`            | भुगतान      | समर्पित एपीआई-कुंजी-आधारित किमी एक्सेस (OAuth से अलग)                                            |
| **मिनीमैक्स कोडिंग**          | `मिनीमैक्स`       | भुगतान      | अंतर्राष्ट्रीय समापन बिंदु                                                                       |
| **मिनीमैक्स (चीन)**           | `मिनीमैक्स-सीएन`  | भुगतान      | चीन-विशिष्ट समापन बिंदु                                                                          |
| **Z.AI (GLM-5)**              | `ज़ै`             | भुगतान      | झिपु एआई अगली पीढ़ी के जीएलएम मॉडल                                                               |
| **वर्टेक्स एआई**              | `वर्टेक्स`        | भुगतान      | Google क्लाउड - सेवा खाता JSON या OAuth access_token                                             |
| **ओलामा क्लाउड**              | `ओलामाक्लाउड`     | भुगतान      | ओलामा की होस्ट की गई एपीआई सेवा                                                                  |
| **सिंथेटिक**                  | 'सिंथेटिक'        | भुगतान      | पासथ्रू मॉडल गेटवे                                                                               |
| **किलो गेटवे**                | `किग्रा`          | भुगतान      | पासथ्रू मॉडल गेटवे                                                                               |
| **व्याकुलता खोज**             | `पीपीएलएक्स-सर्च` | भुगतान      | समर्पित खोज-आधारित समापन बिंदु                                                                   |
| **सर्पर खोज**                 | `सर्पर-खोज`       | भुगतान      | वेब खोज एपीआई एकीकरण                                                                             |
| **बहादुर खोज**                | `बहादुर-खोज`      | भुगतान      | बहादुर खोज एपीआई एकीकरण                                                                          |
| **एक्सा सर्च**                | `एक्सा-सर्च`      | भुगतान      | तंत्रिका खोज एपीआई एकीकरण                                                                        |
| **टेविली सर्च**               | `टैविली-सर्च`     | भुगतान      | एआई खोज एपीआई एकीकरण                                                                             |
| **नैनोकेला**                  | `एनबी`            | भुगतान      | छवि निर्माण एपीआई                                                                                |
| **इलेवनलैब्स**                | `एल`              | भुगतान      | पाठ से वाक् ध्वनि संश्लेषण                                                                       |
| **कार्टेसिया**                | 'कार्टेसिया'      | भुगतान      | अल्ट्रा-फास्ट टीटीएस आवाज संश्लेषण                                                               |
| **PlayHT**                    | `प्लेहट`          | भुगतान      | वॉयस क्लोनिंग और टीटीएस                                                                          |
| **इनवर्ल्ड**                  | 'इनवर्ल्ड'        | भुगतान      | एआई कैरेक्टर वॉयस चैट                                                                            |
| **एसडी वेबयूआई**              | `sdwebui`         | स्व-मेज़बान | स्थिर प्रसार स्थानीय छवि निर्माण                                                                 |
| **आरामदायकयूआई**              | `comfyui`         | स्व-मेज़बान | ComfyUI स्थानीय वर्कफ़्लो नोड-आधारित पीढ़ी                                                       |
| **जीएलएम कोडिंग**             | 'ग्लम'            | भुगतान      | BigModel/Zhipu कोडिंग-विशिष्ट समापन बिंदु                                                        | **कुल: 67+ प्रदाता**(4 निःशुल्क, 8 ओएथ, 55 एपीआई कुंजी) + असीमित ओपनएआई/एंथ्रोपिक-संगत कस्टम प्रदाता।--- |
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### ✨ Major Features

#### 🔑 Registered Keys Provisioning API (#464)

<<<<<<< HEAD
Auto-generate and issue OmniRoute API keys programmatically with per-provider and per-account quota enforcement.

| Endpoint                        | Method       | Description                                      |
| ------------------------------- | ------------ | ------------------------------------------------ |
| `/api/v1/registered-keys`       | `POST`       | Issue a new key — raw key returned **once only** |
| `/api/v1/registered-keys`       | `GET`        | List registered keys (masked)                    |
| `/api/v1/registered-keys/{id}`  | `GET/DELETE` | Get metadata / Revoke                            |
| `/api/v1/quotas/check`          | `GET`        | Pre-validate quota before issuing                |
| `/api/v1/providers/{id}/limits` | `GET/PUT`    | Configure per-provider issuance limits           |
| `/api/v1/accounts/{id}/limits`  | `GET/PUT`    | Configure per-account issuance limits            |
| `/api/v1/issues/report`         | `POST`       | Report quota events to GitHub Issues             |

**Security:** Keys stored as SHA-256 hashes. Raw key shown once on creation, never retrievable again.

#### 🎨 Provider Icons via @lobehub/icons (#529)

130+ provider logos using `@lobehub/icons` React components (SVG). Fallback chain: **Lobehub SVG → existing PNG → generic icon**. Applied across Dashboard, Providers, and Agents pages with standardized `ProviderIcon` component.

#### 🔄 Model Auto-Sync Scheduler (#488)

Auto-refreshes model lists for connected providers every **24 hours**. Runs on server startup. Configurable via `MODEL_SYNC_INTERVAL_HOURS`.

#### 🔀 Per-Model Combo Routing (#563)

Map model name patterns (glob) to specific combos for automatic routing:

- `claude-sonnet*` → code-combo, `gpt-4o*` → openai-combo, `gemini-*` → google-combo
- New `model_combo_mappings` table with glob-to-regex matching
- Dashboard UI section: "Model Routing Rules" with inline add/edit/toggle/delete

#### 🧭 API Endpoints Dashboard

Interactive catalog, webhooks management, OpenAPI viewer — all in one tabbed page at `/dashboard/endpoint`.

#### 🔍 Web Search Providers

5 new search provider integrations: **Perplexity Search**, **Serper**, **Brave Search**, **Exa**, **Tavily** — enabling grounded AI responses with real-time web data.

#### 📊 Search Analytics

New tab in `/dashboard/analytics` — provider breakdown, cache hit rate, cost tracking. API: `GET /api/v1/search/analytics`.

#### 🛡️ Per-API-Key Rate Limits (#452)

`max_requests_per_day` and `max_requests_per_minute` columns with in-memory sliding-window enforcement returning HTTP 429.

#### 🎵 Media Playground

Full media generation playground at `/dashboard/media`: Image Generation, Video, Music, Audio Transcription (2GB upload limit), and Text-to-Speech.

---

### 🔒 Security & CI/CD

- **CodeQL remediation** — Fixed 10+ alerts: 6 polynomial-redos, 1 insecure-randomness (`Math.random()` → `crypto.randomUUID()`), 1 shell-command-injection
- **Route validation** — Zod schemas + `validateBody()` on **176/176 API routes** — CI enforced
- **CVE fix** — dompurify XSS vulnerability (GHSA-v2wj-7wpq-c8vv) resolved via npm overrides
- **Flatted** — Bumped 3.3.3 → 3.4.2 (CWE-1321 prototype pollution)
- **Docker** — Upgraded `docker/setup-buildx-action` v3 → v4

---

### 🐛 Bug Fixes (40+)

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

#### OAuth & Auth

- **#537** — Gemini CLI OAuth: clear actionable error when `GEMINI_OAUTH_CLIENT_SECRET` missing in Docker
- **#549** — CLI settings routes now resolve real API key from `keyId` (not masked strings)
- **#574** — Login no longer freezes after skipping wizard password setup
- **#506** — Cross-platform `machineId` rewritten (Windows REG.exe → macOS ioreg → Linux → hostname fallback)

#### Providers & Routing

- **#536** — LongCat AI: fixed `baseUrl` and `authHeader`
- **#535** — Pinned model override: `body.model` correctly set to `pinnedModel`
- **#570** — Unprefixed Claude models now resolve to Anthropic provider
- **#585** — `<omniModel>` internal tags no longer leak to clients in SSE streaming
- **#493** — Custom provider model naming no longer mangled by prefix stripping
- **#490** — Streaming + context cache protection via `TransformStream` injection
- **#511** — `<omniModel>` tag injected into first content chunk (not after `[DONE]`)

#### CLI & Tools

- **#527** — Claude Code + Codex loop: `tool_result` blocks now converted to text
- **#524** — OpenCode config saved correctly (XDG_CONFIG_HOME, TOML format)
- **#522** — API Manager: removed misleading "Copy masked key" button
- **#546** — `--version` returning `unknown` on Windows (PR by @k0valik)
- **#544** — Secure CLI tool detection via known installation paths (PR by @k0valik)
- **#510** — Windows MSYS2/Git-Bash paths normalized automatically
- **#492** — CLI detects `mise`/`nvm`-managed Node when `app/server.js` missing

#### Streaming & SSE

- **PR #587** — Revert `resolveDataDir` import in responsesTransformer for Cloudflare Workers compat (@k0valik)
- **PR #495** — Bottleneck 429 infinite wait: drop waiting jobs on rate limit (@xandr0s)
- **#483** — Stop trailing `data: null` after `[DONE]` signal
- **#473** — Zombie SSE streams: timeout reduced 300s → 120s for faster fallback

#### Media & Transcription

- **Transcription** — Deepgram `video/mp4` → `audio/mp4` MIME mapping, auto language detection, punctuation
- **TTS** — `[object Object]` error display fixed for ElevenLabs-style nested errors
- **Upload limits** — Media transcription increased to 2GB (nginx `client_max_body_size 2g` + `maxDuration=300`)

---
=======
प्रति-प्रदाता और प्रति-खाता कोटा प्रवर्तन के साथ प्रोग्रामेटिक रूप से ओमनीरूट एपीआई कुंजियाँ स्वतः उत्पन्न और जारी करें।

| समापन बिंदु                     | विधि                 | विवरण                                                   |
| ------------------------------- | -------------------- | ------------------------------------------------------- |
| `/api/v1/पंजीकृत-कुंजियाँ`      | `पोस्ट`              | नई कुंजी जारी करें - कच्ची कुंजी**केवल एक बार**लौटाई गई |
| `/api/v1/पंजीकृत-कुंजियाँ`      | 'प्राप्त करें'       | पंजीकृत कुंजियों की सूची (नकाबपोश)                      |
| `/api/v1/पंजीकृत-कुंजियाँ/{id}` | `प्राप्त करें/हटाएँ` | मेटाडेटा प्राप्त करें / निरस्त करें                     |
| `/api/v1/quotas/check`          | 'प्राप्त करें'       | जारी करने से पहले कोटा पूर्व-सत्यापित करें              |
| `/api/v1/providers/{id}/limits` | `प्राप्त/पुट`        | प्रति-प्रदाता जारी करने की सीमा कॉन्फ़िगर करें          |
| `/api/v1/accounts/{id}/limits`  | `प्राप्त/पुट`        | प्रति खाता जारी करने की सीमा कॉन्फ़िगर करें             |
| `/api/v1/issues/रिपोर्ट`        | `पोस्ट`              | GitHub मुद्दों पर कोटा घटनाओं की रिपोर्ट करें           |

**सुरक्षा:**कुंजियाँ SHA-256 हैश के रूप में संग्रहीत की जाती हैं। कच्ची कुंजी निर्माण पर एक बार दिखाई गई, फिर कभी पुनर्प्राप्त नहीं की जा सकेगी।#### 🎨 Provider Icons via @lobehub/icons (#529)

130+ प्रदाता लोगो `@lobehub/icons` रिएक्ट घटकों (एसवीजी) का उपयोग कर रहे हैं। फ़ॉलबैक श्रृंखला:**लोबेहब एसवीजी → मौजूदा पीएनजी → जेनेरिक आइकन**। मानकीकृत `ProviderIcon` घटक के साथ डैशबोर्ड, प्रदाताओं और एजेंट पृष्ठों पर लागू किया गया।#### 🔄 Model Auto-Sync Scheduler (#488)

प्रत्येक**24 घंटे**में कनेक्टेड प्रदाताओं के लिए मॉडल सूचियाँ स्वतः ताज़ा होती हैं। सर्वर स्टार्टअप पर चलता है. `MODEL_SYNC_INTERVAL_HOURS` के माध्यम से कॉन्फ़िगर करने योग्य।#### 🔀 Per-Model Combo Routing (#563)

स्वचालित रूटिंग के लिए विशिष्ट कॉम्बो के लिए मॉडल नाम पैटर्न (ग्लोब) मैप करें:

- `क्लाउड-सॉनेट*` → कोड-कॉम्बो, `जीपीटी-4ओ*` → ओपनाई-कॉम्बो, `जेमिनी-*` → गूगल-कॉम्बो
- ग्लोब-टू-रेगेक्स मिलान के साथ नई `मॉडल_कॉम्बो_मैपिंग` तालिका
- डैशबोर्ड यूआई अनुभाग: इनलाइन ऐड/एडिट/टॉगल/डिलीट के साथ "मॉडल रूटिंग नियम"#### 🧭 API Endpoints Dashboard

इंटरएक्टिव कैटलॉग, वेबहुक प्रबंधन, ओपनएपीआई व्यूअर - सभी `/डैशबोर्ड/एंडपॉइंट` पर एक टैब वाले पेज में।#### 🔍 Web Search Providers

5 नए खोज प्रदाता एकीकरण:**परप्लेक्सिटी सर्च**,**सर्पर**,**ब्रेव सर्च**,**एक्सा**,**टेविली**- वास्तविक समय वेब डेटा के साथ ग्राउंडेड एआई प्रतिक्रियाओं को सक्षम करना।#### 📊 Search Analytics

`/डैशबोर्ड/एनालिटिक्स` में नया टैब - प्रदाता ब्रेकडाउन, कैश हिट दर, लागत ट्रैकिंग। एपीआई: `प्राप्त करें /एपीआई/वी1/खोज/एनालिटिक्स`।#### 🛡️ Per-API-Key Rate Limits (#452)

`max_requests_per_day` और `max_requests_per_मिनट` कॉलम इन-मेमोरी स्लाइडिंग-विंडो प्रवर्तन के साथ HTTP 429 लौटाते हैं।#### 🎵 Media Playground

`/डैशबोर्ड/मीडिया` पर पूर्ण मीडिया पीढ़ी का खेल का मैदान: छवि निर्माण, वीडियो, संगीत, ऑडियो ट्रांसक्रिप्शन (2 जीबी अपलोड सीमा), और टेक्स्ट-टू-स्पीच।---

### 🔒 Security & CI/CD

-**CodeQL सुधार**- निश्चित 10+ अलर्ट: 6 बहुपद-रेडोस, 1 असुरक्षित-यादृच्छिकता (`Math.random()` → `crypto.randomUUID()`), 1 शेल-कमांड-इंजेक्शन -**रूट सत्यापन**- ज़ॉड स्कीमा + `validateBody()`**176/176 एपीआई मार्गों**पर - सीआई लागू -**सीवीई फिक्स**- डोमप्यूरिफाई एक्सएसएस भेद्यता (जीएचएसए-v2wj-7wpq-c8vv) को एनपीएम ओवरराइड के माध्यम से हल किया गया -**फ़्लैटेड**— बम्प्ड 3.3.3 → 3.4.2 (सीडब्ल्यूई-1321 प्रोटोटाइप प्रदूषण) -**डॉकर**- उन्नत `डॉकर/सेटअप-बिल्डएक्स-एक्शन` v3 → v4---

### 🐛 Bug Fixes (40+)

#### OAuth & Auth

-**#537**- जेमिनी सीएलआई ओऑथ: डॉकर में `GEMINI_OAUTH_CLIENT_SECRET` गायब होने पर स्पष्ट कार्रवाई योग्य त्रुटि -**#549**— सीएलआई सेटिंग रूट अब `keyId` से वास्तविक एपीआई कुंजी को हल करते हैं (नकाबपोश स्ट्रिंग नहीं) -**#574**— विज़ार्ड पासवर्ड सेटअप छोड़ने के बाद लॉगिन रुकता नहीं है -**#506**- क्रॉस-प्लेटफ़ॉर्म `मशीनआईडी` को फिर से लिखा गया (Windows REG.exe → macOS ioreg → Linux → होस्टनाम फ़ॉलबैक)#### Providers & Routing

-**#536**- लॉन्गकैट एआई: `बेसयूआरएल` और `ऑथहेडर` को ठीक किया गया -**#535**— पिन किया गया मॉडल ओवरराइड: `body.model` सही ढंग से `pinnedModel` पर सेट है -**#570**— अनप्रिफ़िक्स्ड क्लाउड मॉडल अब एंथ्रोपिक प्रदाता को हल करते हैं -**#585**- `<omniModel>` आंतरिक टैग अब एसएसई स्ट्रीमिंग में ग्राहकों के लिए लीक नहीं होंगे -**#493**— कस्टम प्रदाता मॉडल नामकरण अब उपसर्ग स्ट्रिपिंग द्वारा बाधित नहीं होता है -**#490**- `ट्रांसफॉर्मस्ट्रीम` इंजेक्शन के माध्यम से स्ट्रीमिंग + संदर्भ कैश सुरक्षा -**#511**- `<omniModel>` टैग को पहले सामग्री खंड में इंजेक्ट किया गया (`[DONE]` के बाद नहीं)#### CLI & Tools

-**#527**- क्लाउड कोड + कोडेक्स लूप: `टूल_रिजल्ट` ब्लॉक अब टेक्स्ट में परिवर्तित हो गए हैं -**#524**— ओपनकोड कॉन्फिगरेशन सही ढंग से सहेजा गया (XDG_CONFIG_HOME, TOML प्रारूप) -**#522**— एपीआई प्रबंधक: भ्रामक "कॉपी मास्क्ड कुंजी" बटन हटा दिया गया -**#546**- `--संस्करण` विंडोज़ पर `अज्ञात` लौटा रहा है (पीआर @k0valik द्वारा) -**#544**- ज्ञात इंस्टॉलेशन पथों के माध्यम से सुरक्षित सीएलआई टूल का पता लगाना (पीआर @k0valik द्वारा) -**#510**— विंडोज़ एमएसवाईएस2/गिट-बैश पथ स्वचालित रूप से सामान्य हो गए -**#492**- `ऐप/सर्वर.जेएस` गायब होने पर सीएलआई `माइस`/`एनवीएम`-प्रबंधित नोड का पता लगाता है#### Streaming & SSE

-**पीआर #587**- क्लाउडफ्लेयर वर्कर्स कंपैटर (@k0valik) के लिए प्रतिक्रिया ट्रांसफार्मर में `resolveDataDir` आयात को वापस लाएं -**पीआर #495**- बॉटलनेक 429 अनंत प्रतीक्षा: दर सीमा पर प्रतीक्षारत नौकरियों को छोड़ें (@xandr0s) -**#483**— `[DONE]` सिग्नल के बाद `data: null` को पीछे छोड़ना बंद करें -**#473**- ज़ोंबी एसएसई स्ट्रीम: तेजी से फ़ॉलबैक के लिए टाइमआउट 300 सेकंड कम → 120 सेकंड#### Media & Transcription

-**ट्रांसक्रिप्शन**- डीपग्राम `वीडियो/mp4` → `ऑडियो/mp4` MIME मैपिंग, ऑटो लैंग्वेज डिटेक्शन, विराम चिह्न -**टीटीएस**- `[ऑब्जेक्ट ऑब्जेक्ट]` इलेवनलैब्स-शैली नेस्टेड त्रुटियों के लिए त्रुटि प्रदर्शन ठीक किया गया -**अपलोड सीमा**- मीडिया ट्रांसक्रिप्शन 2GB तक बढ़ गया (nginx `client_max_body_size 2g` + `maxDuration=300`)---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### 🔧 Infrastructure & Improvements

#### Sub2api Gap Analysis (T01–T15 + T23–T42)

<<<<<<< HEAD
- **T01** — `requested_model` column in call logs (migration 009)
- **T02** — Strip empty text blocks from nested `tool_result.content`
- **T03** — Parse `x-codex-5h-*` / `x-codex-7d-*` quota headers
- **T04** — `X-Session-Id` header for external sticky routing
- **T05** — Rate-limit DB persistence with dedicated API
- **T06** — Account deactivated → permanent block (1-year cooldown)
- **T07** — X-Forwarded-For IP validation (`extractClientIp()`)
- **T08** — Per-API-key session limits with sliding-window enforcement
- **T09** — Codex vs Spark rate-limit scopes (separate pools)
- **T10** — Credits exhausted → distinct 1h cooldown fallback
- **T11** — `max` reasoning effort → 131072 budget tokens
- **T12** — MiniMax M2.7 pricing entries
- **T13** — Stale quota display fix (reset window awareness)
- **T14** — Proxy fast-fail TCP check (≤2s, cached 30s)
- **T15** — Array content normalization for Anthropic
- **T23** — Intelligent quota reset fallback (header extraction)
- **T24** — `503` cooldown + `406` mapping
- **T25** — Provider validation fallback
- **T29** — Vertex AI Service Account JWT auth
- **T33** — Thinking level to budget conversion
- **T36** — `403` vs `429` error classification
- **T38** — Centralized model specifications (`modelSpecs.ts`)
- **T39** — Endpoint fallback for `fetchAvailableModels`
- **T41** — Background task auto-redirect to flash models
- **T42** — Image generation aspect ratio mapping

#### Other Improvements

- **Per-model upstream custom headers** — via configuration UI (PR #575 by @zhangqiang8vip)
- **Model context length** — configurable in model metadata (PR #578 by @hijak)
- **Model prefix stripping** — option to remove provider prefix from model names (PR #582 by @jay77721)
- **Gemini CLI deprecation** — marked deprecated with Google OAuth restriction warning
- **YAML parser** — replaced custom parser with `js-yaml` for correct OpenAPI spec parsing
- **ZWS v5** — HMR leak fix (485 DB connections → 1, memory 2.4GB → 195MB)
- **Log export** — New JSON export button on dashboard with time range dropdown
- **Update notification banner** — dashboard homepage shows when new versions are available

---

### 🌐 i18n & Documentation

- **30 languages** at 100% parity — 2,788 missing keys synced
- **Czech** — Full translation: 22 docs, 2,606 UI strings (PR by @zen0bit)
- **Chinese (zh-CN)** — Complete retranslation (PR by @only4copilot)
- **VM Deployment Guide** — Translated to English as source document
- **API Reference** — Added `/v1/embeddings` and `/v1/audio/speech` endpoints
- **Provider count** — Updated from 36+/40+/44+ to **67+** across README and all 30 i18n READMEs

---

### 🔀 Community PRs Merged (10)

| PR       | Author          | Summary                                                              |
| -------- | --------------- | -------------------------------------------------------------------- |
| **#587** | @k0valik        | fix(sse): revert resolveDataDir import for Cloudflare Workers compat |
| **#582** | @jay77721       | feat(proxy): model name prefix stripping option                      |
| **#581** | @jay77721       | fix(npm): link electron-release to npm-publish workflow              |
| **#578** | @hijak          | feat: configurable context length in model metadata                  |
| **#575** | @zhangqiang8vip | feat: per-model upstream headers, compat PATCH, chat alignment       |
| **#562** | @coobabm        | fix: MCP session management, Claude passthrough, detectFormat        |
| **#561** | @zen0bit        | fix(i18n): Czech translation corrections                             |
| **#555** | @k0valik        | fix(sse): centralized `resolveDataDir()` for path resolution         |
| **#546** | @k0valik        | fix(cli): `--version` returning `unknown` on Windows                 |
| **#544** | @k0valik        | fix(cli): secure CLI tool detection via installation paths           |
| **#542** | @rdself         | fix(ui): light mode contrast CSS theme variables                     |
| **#530** | @kang-heewon    | feat: OpenCode Zen + Go providers with `OpencodeExecutor`            |
| **#512** | @zhangqiang8vip | feat: per-protocol model compatibility (`compatByProtocol`)          |
| **#497** | @zhangqiang8vip | fix: dev-mode HMR resource leaks (ZWS v5)                            |
| **#495** | @xandr0s        | fix: Bottleneck 429 infinite wait (drop waiting jobs)                |
| **#494** | @zhangqiang8vip | feat: MiniMax developer→system role fix                              |
| **#480** | @prakersh       | fix: stream flush usage extraction                                   |
| **#479** | @prakersh       | feat: Codex 5.3/5.4 and Anthropic pricing entries                    |
| **#475** | @only4copilot   | feat(i18n): improved Chinese translation                             |

**Thank you to all contributors!** 🙏

---

### 📋 Issues Resolved (50+)

`#452` `#458` `#462` `#464` `#466` `#473` `#474` `#481` `#483` `#487` `#488` `#489` `#490` `#491` `#492` `#493` `#506` `#508` `#509` `#510` `#511` `#513` `#520` `#521` `#522` `#524` `#525` `#527` `#529` `#531` `#532` `#535` `#536` `#537` `#541` `#546` `#549` `#563` `#570` `#574` `#585`

---

### 🧪 Tests

- **926 tests, 0 failures** (up from 821 in v2.9.5)
- +105 new tests covering: model-combo mappings, registered keys, OpencodeExecutor, Bailian provider, route validation, error classification, aspect ratio mapping, and more

---

### 📦 Database Migrations

| Migration | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| **008**   | `registered_keys`, `provider_key_limits`, `account_key_limits` tables |
| **009**   | `requested_model` column in `call_logs`                               |
| **010**   | `model_combo_mappings` table for per-model combo routing              |

---
=======
-**T01**- कॉल लॉग में `requested_model` कॉलम (माइग्रेशन 009) -**T02**- नेस्टेड `tool_result.content` से खाली टेक्स्ट ब्लॉक हटाएं -**T03**- पार्स `x-codex-5h-*` / `x-codex-7d-*` कोटा हेडर -**T04**- बाहरी स्टिकी रूटिंग के लिए `X-Session-Id` हेडर -**T05**- समर्पित एपीआई के साथ दर-सीमा डीबी दृढ़ता -**T06**— खाता निष्क्रिय → स्थायी ब्लॉक (1-वर्ष का कूलडाउन) -**T07**- एक्स-फ़ॉरवर्डेड-आईपी सत्यापन के लिए (`extractClientIp()`) -**T08**- स्लाइडिंग-विंडो प्रवर्तन के साथ प्रति-एपीआई-कुंजी सत्र सीमाएं -**T09**- कोडेक्स बनाम स्पार्क दर-सीमा स्कोप (अलग पूल) -**टी10**- क्रेडिट समाप्त → विशिष्ट 1 घंटे का कूलडाउन फ़ॉलबैक -**T11**— `अधिकतम` तर्क प्रयास → 131072 बजट टोकन -**टी12**— मिनीमैक्स एम2.7 मूल्य निर्धारण प्रविष्टियाँ -**T13**- पुराने कोटा डिस्प्ले को ठीक करें (विंडो जागरूकता रीसेट करें) -**T14**- प्रॉक्सी फास्ट-फेल टीसीपी चेक (≤2s, कैश्ड 30s) -**T15**- एन्थ्रोपिक के लिए सारणी सामग्री सामान्यीकरण -**T23**- इंटेलिजेंट कोटा रीसेट फ़ॉलबैक (हेडर निष्कर्षण) -**T24**— `503` कूलडाउन + `406` मैपिंग -**T25**— प्रदाता सत्यापन फ़ॉलबैक -**टी29**— वर्टेक्स एआई सर्विस अकाउंट जेडब्ल्यूटी प्रमाणीकरण -**T33**— सोच स्तर से बजट रूपांतरण -**T36**— `403` बनाम `429` त्रुटि वर्गीकरण -**T38**- केंद्रीकृत मॉडल विनिर्देश (`modelSpecs.ts`) -**T39**- `fetchAvailableModels` के लिए समापन बिंदु फ़ॉलबैक -**T41**- पृष्ठभूमि कार्य फ्लैश मॉडल पर ऑटो-रीडायरेक्ट -**T42**— छवि निर्माण पक्षानुपात मानचित्रण#### Other Improvements

-**प्रति-मॉडल अपस्ट्रीम कस्टम हेडर**- कॉन्फ़िगरेशन यूआई के माध्यम से (पीआर #575 @zhangqiang8vip द्वारा) -**मॉडल संदर्भ लंबाई**- मॉडल मेटाडेटा में कॉन्फ़िगर करने योग्य (पीआर #578 @hijak द्वारा) -**मॉडल उपसर्ग स्ट्रिपिंग**- मॉडल नामों से प्रदाता उपसर्ग हटाने का विकल्प (PR #582 @jay77721 द्वारा) -**मिथुन सीएलआई बहिष्करण**- Google OAuth प्रतिबंध चेतावनी के साथ बहिष्कृत के रूप में चिह्नित -**YAML पार्सर**- सही OpenAPI स्पेक पार्सिंग के लिए कस्टम पार्सर को `js-yaml` से बदल दिया गया -**ZWS v5**- HMR लीक फिक्स (485 DB कनेक्शन → 1, मेमोरी 2.4GB → 195MB) -**लॉग निर्यात**- समय सीमा ड्रॉपडाउन के साथ डैशबोर्ड पर नया JSON निर्यात बटन -**अद्यतन अधिसूचना बैनर**- नए संस्करण उपलब्ध होने पर डैशबोर्ड होमपेज दिखाता है---

### 🌐 i18n & Documentation

-**30 भाषाएँ**100% समता पर - 2,788 गुम कुंजियाँ समन्वयित की गईं -**चेक**- पूर्ण अनुवाद: 22 दस्तावेज़, 2,606 यूआई स्ट्रिंग्स (पीआर @ज़ेन0बिट द्वारा) -**चीनी (zh-CN)**- पूर्ण पुनर्अनुवाद (PR @only4copilot द्वारा) -**वीएम परिनियोजन गाइड**- स्रोत दस्तावेज़ के रूप में अंग्रेजी में अनुवादित -**एपीआई संदर्भ**- `/v1/embeddings` और `/v1/audio/speech` समापन बिंदु जोड़े गए -**प्रदाता गणना**- README और सभी 30 i18n READMEs में 36+/40+/44+ से**67+**तक अपडेट किया गया---

### 🔀 Community PRs Merged (10)

| पीआर     | लेखक            | सारांश                                                                            |
| -------- | --------------- | --------------------------------------------------------------------------------- |
| **#587** | @k0valik        | फिक्स(एसएसई): क्लाउडफ्लेयर वर्कर्स कंपैट के लिए रिज़ॉल्वडेटाडिर आयात को वापस लाएं |
| **#582** | @jay77721       | करतब(प्रॉक्सी): मॉडल नाम उपसर्ग स्ट्रिपिंग विकल्प                                 |
| **#581** | @jay77721       | फिक्स(एनपीएम): इलेक्ट्रॉन-रिलीज़ को एनपीएम-प्रकाशित वर्कफ़्लो से लिंक करें        |
| **#578** | @हिजाक          | करतब: मॉडल मेटाडेटा में कॉन्फ़िगर करने योग्य संदर्भ लंबाई                         |
| **#575** | @zhangqiang8vip | उपलब्धि: प्रति-मॉडल अपस्ट्रीम हेडर, कंपैट पैच, चैट संरेखण                         |
| **#562** | @कूबाबम         | ठीक करें: एमसीपी सत्र प्रबंधन, क्लाउड पासथ्रू, डिटेक्टफॉर्मेट                     |
| **#561** | @zen0bit        | फिक्स(i18n): चेक अनुवाद सुधार                                                     |
| **#555** | @k0valik        | फिक्स(sse): पथ रिज़ॉल्यूशन के लिए केंद्रीकृत `resolveDataDir()`                   |
| **#546** | @k0valik        | फिक्स(सीएलआई): `--संस्करण` विंडोज पर `अज्ञात` लौटा रहा है                         |
| **#544** | @k0valik        | फिक्स (सीएलआई): इंस्टॉलेशन पथों के माध्यम से सुरक्षित सीएलआई टूल का पता लगाना     |
| **#542** | @rdself         | फिक्स(यूआई): लाइट मोड कंट्रास्ट सीएसएस थीम वेरिएबल                                |
| **#530** | @कांग-हीवोन     | उपलब्धि: `OpencodeExecutor` के साथ OpenCode Zen + Go प्रदाता                      |
| **#512** | @zhangqiang8vip | उपलब्धि: प्रति-प्रोटोकॉल मॉडल अनुकूलता (`compatByProtocol`)                       |
| **#497** | @zhangqiang8vip | ठीक करें: डेव-मोड HMR संसाधन लीक (ZWS v5)                                         |
| **#495** | @xandr0s        | फिक्स: बॉटलनेक 429 अनंत प्रतीक्षा (ड्रॉप वेटिंग जॉब्स)                            |
| **#494** | @zhangqiang8vip | करतब: मिनीमैक्स डेवलपर→सिस्टम रोल फिक्स                                           |
| **#480** | @प्रकरेश        | ठीक करें: स्ट्रीम फ्लश उपयोग निष्कर्षण                                            |
| **#479** | @प्रकरेश        | करतब: कोडेक्स 5.3/5.4 और मानवशास्त्रीय मूल्य निर्धारण प्रविष्टियाँ                |
| **#475** | @only4copilot   | करतब(i18n): बेहतर चीनी अनुवाद                                                     |

**सभी योगदानकर्ताओं को धन्यवाद!**🙏---

### 📋 Issues Resolved (50+)

`#452` `#458` `#462` `#464` `#466` `#473` `#474` `#481` `#483` `#487` `#488` `#489` `#490` `#491` `#492` `#493` `#506` `#508` `#509` `#510` `#511` `#513` `#520` `#521` `#522` `#524` `#525` `#527` `#529` `#531` `#532` `#535` `#536` `#537` `#541` `#546` `#549` `#563` `#570` `#574` `#585`---

### 🧪 Tests

-**926 परीक्षण, 0 विफलताएँ**(v2.9.5 में 821 से ऊपर)

- +105 नए परीक्षण कवर: मॉडल-कॉम्बो मैपिंग, पंजीकृत कुंजी, ओपनकोड एक्ज़ीक्यूटर, बेलियन प्रदाता, रूट सत्यापन, त्रुटि वर्गीकरण, पहलू अनुपात मैपिंग, और बहुत कुछ---

### 📦 Database Migrations

| प्रवासन | विवरण                                                                    |
| ------- | ------------------------------------------------------------------------ | --- |
| **008** | `पंजीकृत_कुंजियाँ`, `प्रदाता_कुंजी_सीमाएँ`, `खाता_कुंजी_सीमाएँ` तालिकाएँ |
| **009** | `call_logs` में `requested_model` कॉलम                                   |
| **010** | प्रति-मॉडल कॉम्बो रूटिंग के लिए `model_combo_mappings` तालिका            | --- |
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### ⬆️ Upgrading from v2.9.5

```bash
# npm
npm install -g omniroute@3.0.0

# Docker
docker pull diegosouzapw/omniroute:3.0.0

# Migrations run automatically on first startup
```

<<<<<<< HEAD
> **Breaking changes:** None. All existing configurations, combos, and API keys are preserved.
> Database migrations 008-010 run automatically on startup.

---
=======
> **ब्रेकिंग परिवर्तन:**कोई नहीं। सभी मौजूदा कॉन्फ़िगरेशन, कॉम्बो और एपीआई कुंजियाँ संरक्षित हैं।
> Database migrations 008-010 run automatically on startup.---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.0-rc.17] — 2026-03-24

### 🔒 Security & CI/CD

<<<<<<< HEAD
- **CodeQL remediation** — Fixed 10+ alerts:
  - 6 polynomial-redos in `provider.ts` / `chatCore.ts` (replaced `(?:^|/)` alternation patterns with segment-based matching)
  - 1 insecure-randomness in `acp/manager.ts` (`Math.random()` → `crypto.randomUUID()`)
  - 1 shell-command-injection in `prepublish.mjs` (`JSON.stringify()` path escaping)
- **Route validation** — Added Zod schemas + `validateBody()` to 5 routes missing validation:
  - `model-combo-mappings` (POST, PUT), `webhooks` (POST, PUT), `openapi/try` (POST)
  - CI `check:route-validation:t06` now passes: **176/176 routes validated**

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **#585** — `<omniModel>` internal tags no longer leak to clients in SSE responses. Added outbound sanitization `TransformStream` in `combo.ts`

### ⚙️ Infrastructure

- **Docker** — Upgraded `docker/setup-buildx-action` from v3 → v4 (Node.js 20 deprecation fix)
- **CI cleanup** — Deleted 150+ failed/cancelled workflow runs

### 🧪 Tests

- Test suite: **926 tests, 0 failures** (+3 new)

---
=======
-**कोडक्यूएल निवारण**— 10+ अलर्ट ठीक किया गया:

- `provider.ts` / `chatCore.ts` में 6 बहुपद-रेडोज़ (खंड-आधारित मिलान के साथ `(?:^|/)` वैकल्पिक पैटर्न को प्रतिस्थापित किया गया)
- `acp/manager.ts` में 1 असुरक्षित-यादृच्छिकता (`Math.random()` → `crypto.randomUUID()`)
- `prepublish.mjs` में 1 शेल-कमांड-इंजेक्शन (`JSON.stringify()` पथ से बचना) -**रूट सत्यापन**- जिन 5 मार्गों पर सत्यापन नहीं है उनमें ज़ोड स्कीमा + `validateBody()` जोड़ा गया:
- `मॉडल-कॉम्बो-मैपिंग` (POST, PUT), `webhooks` (POST, PUT), `openapi/try` (POST)
- CI `check:route-validation:t06` अब पास हो गया है:**176/176 मार्ग मान्य**### 🐛 Bug Fixes

-**#585**- `<omniModel>` आंतरिक टैग अब एसएसई प्रतिक्रियाओं में ग्राहकों के लिए लीक नहीं होते हैं। `कॉम्बो.ts` में आउटबाउंड सैनिटाइजेशन `ट्रांसफॉर्मस्ट्रीम` जोड़ा गया### ⚙️ Infrastructure

-**डॉकर**- v3 → v4 से `docker/setup-buildx-action` को अपग्रेड किया गया (Node.js 20 डिप्रेशन फिक्स) -**सीआई क्लीनअप**- 150+ विफल/रद्द किए गए वर्कफ़्लो रन हटा दिए गए### 🧪 Tests

- टेस्ट सूट:**926 परीक्षण, 0 विफलताएँ**(+3 नए)---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.0-rc.16] — 2026-03-24

### ✨ New Features

<<<<<<< HEAD
- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- Increased media transcription limits
- Added Model Context Length to registry metadata
- Added per-model upstream custom headers via configuration UI
- Fixed multiple bugs, Zod valiadation for patches, and resolved various community issues.

## [3.0.0-rc.15] — 2026-03-24

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **#563** — Per-model Combo Routing: map model name patterns (glob) to specific combos for automatic routing
  - New `model_combo_mappings` table (migration 010) with pattern, combo_id, priority, enabled
  - `resolveComboForModel()` DB function with glob-to-regex matching (case-insensitive, `*` and `?` wildcards)
  - `getComboForModel()` in `model.ts`: augments `getCombo()` with model-pattern fallback
  - `chat.ts`: routing decision now checks model-combo mappings before single-model handling
  - API: `GET/POST /api/model-combo-mappings`, `GET/PUT/DELETE /api/model-combo-mappings/:id`
  - Dashboard: "Model Routing Rules" section added to Combos page with inline add/edit/toggle/delete
  - Examples: `claude-sonnet*` → code-combo, `gpt-4o*` → openai-combo, `gemini-*` → google-combo

### 🌐 i18n

- **Full i18n Sync**: 2,788 missing keys added across 30 language files — all languages now at 100% parity with `en.json`
- **Agents page i18n**: OpenCode Integration section fully internationalized (title, description, scanning, download labels)
- **6 new keys** added to `agents` namespace for OpenCode section

### 🎨 UI/UX

- **Provider Icons**: 16 missing provider icons added (3 copied, 2 downloaded, 11 SVG created)
- **SVG fallback**: `ProviderIcon` component updated with 4-tier strategy: Lobehub → PNG → SVG → Generic icon
- **Agents fingerprinting**: Synced with CLI tools — added droid, openclaw, copilot, opencode to fingerprint list (14 total)

### सुरक्षा

- **CVE fix**: Resolved dompurify XSS vulnerability (GHSA-v2wj-7wpq-c8vv) via npm overrides forcing `dompurify@^3.3.2`
- `npm audit` now reports **0 vulnerabilities**

### 🧪 Tests

- Test suite: **923 tests, 0 failures** (+15 new model-combo mapping tests)

---
=======
- मीडिया प्रतिलेखन सीमा में वृद्धि
- रजिस्ट्री मेटाडेटा में मॉडल संदर्भ लंबाई जोड़ी गई
- कॉन्फ़िगरेशन यूआई के माध्यम से प्रति मॉडल अपस्ट्रीम कस्टम हेडर जोड़े गए
- कई बग्स को ठीक किया गया, पैच के लिए ज़ॉड सत्यापन, और विभिन्न सामुदायिक मुद्दों का समाधान किया गया।## [3.0.0-rc.15] — 2026-03-24

### ✨ New Features

-**#563**— प्रति-मॉडल कॉम्बो रूटिंग: स्वचालित रूटिंग के लिए मॉडल नाम पैटर्न (ग्लोब) को विशिष्ट कॉम्बो में मैप करें

- पैटर्न, कॉम्बो*आईडी, प्राथमिकता, सक्षम के साथ नई `मॉडल*कॉम्बो_मैपिंग` तालिका (माइग्रेशन 010)
- `resolveComboForModel()` DB फ़ंक्शन ग्लोब-टू-रेगेक्स मिलान के साथ (केस-असंवेदनशील, `*` और `?` वाइल्डकार्ड)
- `model.ts` में `getComboForModel()`: मॉडल-पैटर्न फ़ॉलबैक के साथ `getCombo()` को बढ़ाता है
- `chat.ts`: रूटिंग निर्णय अब एकल-मॉडल हैंडलिंग से पहले मॉडल-कॉम्बो मैपिंग की जांच करता है
- एपीआई: `प्राप्त/पोस्ट /एपीआई/मॉडल-कॉम्बो-मैपिंग`, `प्राप्त/पुट/हटाएं /एपीआई/मॉडल-कॉम्बो-मैपिंग/:आईडी`
- डैशबोर्ड: "मॉडल रूटिंग नियम" अनुभाग इनलाइन ऐड/एडिट/टॉगल/डिलीट के साथ कॉम्बो पेज में जोड़ा गया
- उदाहरण: `क्लाउड-सॉनेट*` → कोड-कॉम्बो, `जीपीटी-4ओ*` → ओपनाई-कॉम्बो, `जेमिनी-*` → गूगल-कॉम्बो### 🌐 i18n

-**पूर्ण i18n सिंक**: 30 भाषा फ़ाइलों में 2,788 गुम कुंजियाँ जोड़ी गईं - सभी भाषाएँ अब `en.json` के साथ 100% समानता पर हैं -**एजेंट पेज i18n**: ओपनकोड एकीकरण अनुभाग पूरी तरह से अंतर्राष्ट्रीयकृत (शीर्षक, विवरण, स्कैनिंग, डाउनलोड लेबल) -**6 नई कुंजियाँ**ओपनकोड अनुभाग के लिए `एजेंट्स` नेमस्पेस में जोड़ी गईं### 🎨 UI/UX

-**प्रदाता चिह्न**: 16 अनुपलब्ध प्रदाता चिह्न जोड़े गए (3 कॉपी किए गए, 2 डाउनलोड किए गए, 11 एसवीजी बनाए गए) -**एसवीजी फ़ॉलबैक**: `प्रोवाइडरआइकॉन` घटक को 4-स्तरीय रणनीति के साथ अद्यतन किया गया: लोबेहब → पीएनजी → एसवीजी → जेनेरिक आइकन -**एजेंट फ़िंगरप्रिंटिंग**: सीएलआई टूल के साथ समन्वयित - फ़िंगरप्रिंट सूची में ड्रॉइड, ओपनक्लॉ, कोपायलट, ओपनकोड जोड़ा गया (कुल 14)### सुरक्षा

-**सीवीई फिक्स**: एनपीएम के माध्यम से डोमप्यूरिफाई एक्सएसएस भेद्यता (जीएचएसए-v2wj-7wpq-c8vv) का समाधान `dompurify@^3.3.2` को मजबूर करता है

- `एनपीएम ऑडिट` अब रिपोर्ट करता है**0 कमजोरियाँ**### 🧪 Tests

- टेस्ट सूट:**923 परीक्षण, 0 विफलताएँ**(+15 नए मॉडल-कॉम्बो मैपिंग परीक्षण)---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.0-rc.14] — 2026-03-23

### 🔀 Community PRs Merged

<<<<<<< HEAD
| PR       | Author   | Summary                                                                                      |
| -------- | -------- | -------------------------------------------------------------------------------------------- |
| **#562** | @coobabm | fix(ux): MCP session management, Claude passthrough normalization, OAuth modal, detectFormat |
| **#561** | @zen0bit | fix(i18n): Czech translation corrections — HTTP method names and documentation updates       |

### 🧪 Tests

- Test suite: **908 tests, 0 failures**

---
=======
| पीआर     | लेखक     | सारांश                                                                                   |
| -------- | -------- | ---------------------------------------------------------------------------------------- | ------------ |
| **#562** | @कूबाबम  | फिक्स(यूएक्स): एमसीपी सत्र प्रबंधन, क्लाउड पासथ्रू सामान्यीकरण, ओएथ मोडल, डिटेक्टफॉर्मेट |
| **#561** | @zen0bit | फिक्स(i18n): चेक अनुवाद सुधार - HTTP विधि नाम और दस्तावेज़ीकरण अपडेट                     | ### 🧪 Tests |

- टेस्ट सूट:**908 परीक्षण, 0 विफलताएँ**---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.0-rc.13] — 2026-03-23

### 🔧 Bug Fixes

<<<<<<< HEAD
- **config:** resolve real API key from `keyId` in CLI settings routes (`codex-settings`, `droid-settings`, `kilo-settings`) to prevent writing masked strings (#549)

---
=======
-**कॉन्फ़िगरेशन:**मास्क्ड स्ट्रिंग लिखने से रोकने के लिए सीएलआई सेटिंग्स रूट (`कोडेक्स-सेटिंग्स`, `ड्रॉइड-सेटिंग्स`, `किलो-सेटिंग्स`) में `कीआईडी` से वास्तविक एपीआई कुंजी को हल करें (#549)---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.0-rc.12] — 2026-03-23

### 🔀 Community PRs Merged

<<<<<<< HEAD
| PR       | Author   | Summary                                                                                                                                                       |
| -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **#546** | @k0valik | fix(cli): `--version` returning `unknown` on Windows — use `JSON.parse(readFileSync)` instead of ESM import                                                   |
| **#555** | @k0valik | fix(sse): centralized `resolveDataDir()` for path resolution in credentials, autoCombo, responses logger, and request logger                                  |
| **#544** | @k0valik | fix(cli): secure CLI tool detection via known installation paths (8 tools) with symlink validation, file-type checks, size bounds, minimal env in healthcheck |
| **#542** | @rdself  | fix(ui): improve light mode contrast — add missing CSS theme variables (`bg-primary`, `bg-subtle`, `text-primary`) and fix dark-only colors in log detail     |

### 🔧 Bug Fixes

- **TDZ fix in `cliRuntime.ts`** — `validateEnvPath` was used before initialization at module startup by `getExpectedParentPaths()`. Reordered declarations to fix `ReferenceError`.
- **Build fixes** — Added `pino` and `pino-pretty` to `serverExternalPackages` to prevent Turbopack from breaking Pino's internal worker loading.

### 🧪 Tests

- Test suite: **905 tests, 0 failures**

---
=======
| पीआर     | लेखक     | सारांश                                                                                                                                                                                 |
| -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| **#546** | @k0valik | फिक्स (सीएलआई): `--संस्करण` विंडोज पर `अज्ञात` लौटा रहा है - ईएसएम आयात के बजाय `JSON.parse(readFileSync)` का उपयोग करें                                                               |
| **#555** | @k0valik | फिक्स (एसएसई): क्रेडेंशियल्स, ऑटोकॉम्बो, प्रतिक्रिया लॉगर और अनुरोध लॉगर में पथ रिज़ॉल्यूशन के लिए केंद्रीकृत `resolveDataDir()`                                                       |
| **#544** | @k0valik | फिक्स (सीएलआई): सिम्लिंक सत्यापन, फ़ाइल-प्रकार की जांच, आकार सीमा, हेल्थचेक में न्यूनतम एनवी के साथ ज्ञात इंस्टॉलेशन पथ (8 टूल) के माध्यम से सुरक्षित सीएलआई टूल का पता लगाना          |
| **#542** | @rdself  | फिक्स (यूआई): लाइट मोड कंट्रास्ट में सुधार करें - लापता सीएसएस थीम वेरिएबल्स (`बीजी-प्राथमिक`, `बीजी-सूक्ष्म`, `टेक्स्ट-प्राइमरी`) जोड़ें और लॉग विवरण में केवल गहरे रंगों को ठीक करें | ### 🔧 Bug Fixes |

-**`cliRuntime.ts` में TDZ फिक्स**- `validateEnvPath` का उपयोग `getExpectedParentPaths()` द्वारा मॉड्यूल स्टार्टअप पर आरंभीकरण से पहले किया गया था। `ReferenceError` को ठीक करने के लिए घोषणाओं को पुन: व्यवस्थित किया गया। -**बिल्ड फिक्स**- टर्बोपैक को पिनो के आंतरिक वर्कर लोडिंग को तोड़ने से रोकने के लिए `सर्वरएक्सटर्नलपैकेजेज` में `पिनो` और `पिनो-सुंदर` जोड़ा गया।### 🧪 Tests

- टेस्ट सूट:**905 परीक्षण, 0 विफलताएँ**---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.0-rc.10] — 2026-03-23

### 🔧 Bug Fixes

<<<<<<< HEAD
- **#509 / #508** — Electron build regression: downgraded Next.js from `16.1.x` to `16.0.10` to eliminate Turbopack module-hashing instability that caused blank screens in the Electron desktop bundle.
- **Unit test fixes** — Corrected two stale test assertions (`nanobanana-image-handler` aspect ratio/resolution, `thinking-budget` Gemini `thinkingConfig` field mapping) that had drifted after recent implementation changes.
- **#541** — Responded to user feedback about installation complexity; no code changes required.

---
=======
-**#509 / #508**- इलेक्ट्रॉन बिल्ड रिग्रेशन: टर्बोपैक मॉड्यूल-हैशिंग अस्थिरता को खत्म करने के लिए नेक्स्ट.जेएस को `16.1.x` से `16.0.10` तक डाउनग्रेड किया गया, जिसके कारण इलेक्ट्रॉन डेस्कटॉप बंडल में खाली स्क्रीन आई। -**यूनिट परीक्षण समाधान**- दो पुराने परीक्षण अभिकथनों ('नैनोबनाना-इमेज-हैंडलर' पहलू अनुपात/रिज़ॉल्यूशन, 'थिंकिंग-बजट' जेमिनी 'थिंकिंगकॉन्फिग' फ़ील्ड मैपिंग) को ठीक किया गया, जो हाल के कार्यान्वयन परिवर्तनों के बाद खराब हो गए थे। -**#541**— स्थापना जटिलता के बारे में उपयोगकर्ता की प्रतिक्रिया का जवाब दिया; किसी कोड परिवर्तन की आवश्यकता नहीं है.---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.0-rc.9] — 2026-03-23

### ✨ New Features

<<<<<<< HEAD
- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **T29** — Vertex AI SA JSON Executor: implemented using the `jose` library to handle JWT/Service Account auth, along with configurable regions in the UI and automatic partner model URL building.
- **T42** — Image generation aspect ratio mapping: created `sizeMapper` logic for generic OpenAI formats (`size`), added native `imagen3` handling, and updated NanoBanana endpoints to utilize mapped aspect ratios automatically.
- **T38** — Centralized model specifications: `modelSpecs.ts` created for limits and parameters per model.

### 🔧 Improvements

- **T40** — OpenCode CLI tools integration: native `opencode-zen` and `opencode-go` integration completed in earlier PR.

---
=======
-**T29**— Vertex AI SA JSON Executor: implemented using the `jose` library to handle JWT/Service Account auth, along with configurable regions in the UI and automatic partner model URL building. -**टी42**- छवि निर्माण पहलू अनुपात मैपिंग: सामान्य ओपनएआई प्रारूपों (`आकार`) के लिए `साइजमैपर` तर्क बनाया गया, मूल `इमेजेन3` हैंडलिंग जोड़ा गया, और स्वचालित रूप से मैप किए गए पहलू अनुपात का उपयोग करने के लिए नैनोबैना एंडपॉइंट को अपडेट किया गया। -**T38**— केंद्रीकृत मॉडल विनिर्देश: `modelSpecs.ts` प्रति मॉडल सीमाओं और मापदंडों के लिए बनाया गया।### 🔧 Improvements

-**T40**- ओपनकोड सीएलआई उपकरण एकीकरण: मूल `ओपनकोड-ज़ेन` और `ओपनकोड-गो` एकीकरण पहले पीआर में पूरा हुआ।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.0-rc.8] — 2026-03-23

### 🔧 Bug Fixes & Improvements (Fallback, Quota & Budget)

<<<<<<< HEAD
- **T24** — `503` cooldown await fix + `406` mapping: mapped `406 Not Acceptable` to `503 Service Unavailable` with proper cooldown intervals.
- **T25** — Provider validation fallback: graceful fallback to standard validation models when a specific `validationModelId` is not present.
- **T36** — `403` vs `429` provider handling refinement: extracted into `errorClassifier.ts` to properly segregate hard permissions failures (`403`) from rate limits (`429`).
- **T39** — Endpoint Fallback for `fetchAvailableModels`: implemented a tri-tier mechanism (`/models` -> `/v1/models` -> local generic catalog) + `list_models_catalog` MCP tool updates to reflect `source` and `warning`.
- **T33** — Thinking level to budget conversion: translates qualitative thinking levels into precise budget allocations.
- **T41** — Background task auto redirect: routes heavy background evaluation tasks to flash/efficient models automatically.
- **T23** — Intelligent quota reset fallback: accurately extracts `x-ratelimit-reset` / `retry-after` header values or maps static cooldowns.

---

## [3.0.0-rc.7] — 2026-03-23 _(What's New vs v2.9.5 — will be released as v3.0.0)_

> **Upgrade from v2.9.5:** 16 issues resolved · 2 community PRs merged · 2 new providers · 7 new API endpoints · 3 new features · DB migration 008+009 · 832 tests passing · 15 sub2api gap improvements (T01–T15 complete).

### 🆕 New Providers

| Provider         | Alias          | Tier | Notes                                                          |
| ---------------- | -------------- | ---- | -------------------------------------------------------------- |
| **OpenCode Zen** | `opencode-zen` | Free | 3 models via `opencode.ai/zen/v1` (PR #530 by @kang-heewon)    |
| **OpenCode Go**  | `opencode-go`  | Paid | 4 models via `opencode.ai/zen/go/v1` (PR #530 by @kang-heewon) |

Both providers use the new `OpencodeExecutor` with multi-format routing (`/chat/completions`, `/messages`, `/responses`, `/models/{model}:generateContent`).

---

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

#### 🔑 Registered Keys Provisioning API (#464)

Auto-generate and issue OmniRoute API keys programmatically with per-provider and per-account quota enforcement.

| Endpoint                              | Method    | Description                                      |
| ------------------------------------- | --------- | ------------------------------------------------ |
| `/api/v1/registered-keys`             | `POST`    | Issue a new key — raw key returned **once only** |
| `/api/v1/registered-keys`             | `GET`     | List registered keys (masked)                    |
| `/api/v1/registered-keys/{id}`        | `GET`     | Get key metadata                                 |
| `/api/v1/registered-keys/{id}`        | `DELETE`  | Revoke a key                                     |
| `/api/v1/registered-keys/{id}/revoke` | `POST`    | Revoke (for clients without DELETE support)      |
| `/api/v1/quotas/check`                | `GET`     | Pre-validate quota before issuing                |
| `/api/v1/providers/{id}/limits`       | `GET/PUT` | Configure per-provider issuance limits           |
| `/api/v1/accounts/{id}/limits`        | `GET/PUT` | Configure per-account issuance limits            |
| `/api/v1/issues/report`               | `POST`    | Report quota events to GitHub Issues             |

**DB — Migration 008:** Three new tables: `registered_keys`, `provider_key_limits`, `account_key_limits`.
**Security:** Keys stored as SHA-256 hashes. Raw key shown once on creation, never retrievable again.
**Quota types:** `maxActiveKeys`, `dailyIssueLimit`, `hourlyIssueLimit` per provider and per account.
**Idempotency:** `idempotency_key` field prevents duplicate issuance. Returns `409 IDEMPOTENCY_CONFLICT` if key was already used.
**Budget per key:** `dailyBudget` / `hourlyBudget` — limits how many requests a key can route per window.
**GitHub reporting:** Optional. Set `GITHUB_ISSUES_REPO` + `GITHUB_ISSUES_TOKEN` to auto-create GitHub issues on quota exceeded or issuance failures.

#### 🎨 Provider Icons — @lobehub/icons (#529)

All provider icons in the dashboard now use `@lobehub/icons` React components (130+ providers with SVG).
Fallback chain: **Lobehub SVG → existing `/providers/{id}.png` → generic icon**. Uses a proper React `ErrorBoundary` pattern.

#### 🔄 Model Auto-Sync Scheduler (#488)

OmniRoute now automatically refreshes model lists for connected providers every **24 hours**.

- Runs on server startup via the existing `/api/sync/initialize` hook
- Configurable via `MODEL_SYNC_INTERVAL_HOURS` environment variable
- Covers 16 major providers
- Records last sync time in the settings database

---
=======
-**T24**- `503` कोल्डाउन प्रतीक्षा फिक्स + `406` मैपिंग: उचित कोल्डाउन अंतराल के साथ `406 स्वीकार्य नहीं` को `503 सेवा अनुपलब्ध` में मैप किया गया। -**T25**- प्रदाता सत्यापन फ़ॉलबैक: जब कोई विशिष्ट `validationModelId` मौजूद नहीं होता है, तो मानक सत्यापन मॉडल पर शानदार फ़ॉलबैक। -**T36**- `403` बनाम `429` प्रदाता प्रबंधन परिशोधन: हार्ड अनुमति विफलताओं (`403`) को दर सीमा (`429`) से ठीक से अलग करने के लिए `errorClassifier.ts` में निकाला गया। -**T39**- `fetchAvailableModels` के लिए एंडपॉइंट फ़ॉलबैक: `स्रोत` और `चेतावनी` को प्रतिबिंबित करने के लिए एक त्रि-स्तरीय तंत्र (`/मॉडल` -> `/v1/मॉडल` -> स्थानीय जेनेरिक कैटलॉग) + `list_models_catalog` एमसीपी टूल अपडेट लागू किया गया। -**T33**- सोच स्तर से बजट रूपांतरण: गुणात्मक सोच स्तर को सटीक बजट आवंटन में परिवर्तित करता है। -**T41**- पृष्ठभूमि कार्य ऑटो रीडायरेक्ट: भारी पृष्ठभूमि मूल्यांकन कार्यों को स्वचालित रूप से फ़्लैश/कुशल मॉडल में रूट करता है। -**T23**- इंटेलिजेंट कोटा रीसेट फ़ॉलबैक: `x-ratelimit-reset` / `retry-after` हेडर मानों को सटीक रूप से निकालता है या स्थिर कूलडाउन को मैप करता है।---

## [3.0.0-rc.7] — 2026-03-23 _(What's New vs v2.9.5 — will be released as v3.0.0)_

> **v2.9.5 से अपग्रेड करें:**16 समस्याएं हल हुईं · 2 सामुदायिक पीआर का विलय · 2 नए प्रदाता · 7 नए एपीआई एंडपॉइंट · 3 नई सुविधाएं · डीबी माइग्रेशन 008+009 · 832 परीक्षण पास हुए · 15 सब2एपीआई गैप सुधार (टी01-टी15 पूर्ण)।### 🆕 New Providers

| प्रदाता         | उपनाम         | टियर   | नोट्स                                                                     |
| --------------- | ------------- | ------ | ------------------------------------------------------------------------- |
| **ओपनकोड ज़ेन** | `ओपनकोड-ज़ेन` | मुफ़्त | `opencode.ai/zen/v1` के माध्यम से 3 मॉडल (PR #530 @kang-heewon द्वारा)    |
| **ओपनकोड गो**   | `ओपनकोड-गो`   | भुगतान | `opencode.ai/zen/go/v1` के माध्यम से 4 मॉडल (PR #530 @kang-heewon द्वारा) |

दोनों प्रदाता मल्टी-फॉर्मेट रूटिंग (`/chat/completions`, `/messages`, `/responses`, `/models/{model}:generateContent`) के साथ नए `OpencodeExecutor` का उपयोग करते हैं।---

### ✨ New Features

#### 🔑 Registered Keys Provisioning API (#464)

प्रति-प्रदाता और प्रति-खाता कोटा प्रवर्तन के साथ प्रोग्रामेटिक रूप से ओमनीरूट एपीआई कुंजियाँ स्वतः उत्पन्न और जारी करें।

| समापन बिंदु                           | विधि           | विवरण                                                   |
| ------------------------------------- | -------------- | ------------------------------------------------------- |
| `/api/v1/पंजीकृत-कुंजियाँ`            | `POST`         | नई कुंजी जारी करें - कच्ची कुंजी**केवल एक बार**लौटाई गई |
| `/api/v1/पंजीकृत-कुंजियाँ`            | 'प्राप्त करें' | पंजीकृत कुंजियों की सूची (नकाबपोश)                      |
| `/api/v1/पंजीकृत-कुंजियाँ/{id}`       | 'प्राप्त करें' | मुख्य मेटाडेटा प्राप्त करें                             |
| `/api/v1/पंजीकृत-कुंजियाँ/{id}`       | 'हटाएं'        | एक कुंजी निरस्त करें                                    |
| `/api/v1/registered-keys/{id}/revoke` | `पोस्ट`        | निरस्त करें (DELETE समर्थन के बिना ग्राहकों के लिए)     |
| `/api/v1/quotas/check`                | 'प्राप्त करें' | जारी करने से पहले कोटा पूर्व-सत्यापित करें              |
| `/api/v1/providers/{id}/limits`       | `प्राप्त/पुट`  | प्रति-प्रदाता जारी करने की सीमा कॉन्फ़िगर करें          |
| `/api/v1/accounts/{id}/limits`        | `प्राप्त/पुट`  | प्रति खाता जारी करने की सीमा कॉन्फ़िगर करें             |
| `/api/v1/issues/रिपोर्ट`              | `पोस्ट`        | GitHub मुद्दों पर कोटा घटनाओं की रिपोर्ट करें           |

**डीबी - माइग्रेशन 008:**तीन नई तालिकाएँ: `पंजीकृत_कीज़`, `प्रदाता_की_लिमिट्स`, `अकाउंट_की_लिमिट्स`।
**सुरक्षा:**कुंजियाँ SHA-256 हैश के रूप में संग्रहीत की जाती हैं। कच्ची कुंजी निर्माण पर एक बार दिखाई गई, फिर कभी पुनर्प्राप्त नहीं की जा सकेगी।
**कोटा प्रकार:**`maxActiveKeys`, `dailyIssueLimit`, `hourlyIssueLimit` प्रति प्रदाता और प्रति खाता।
**Idempotency:**`idempotency_key` फ़ील्ड डुप्लिकेट जारी करने से रोकता है। यदि कुंजी पहले से ही उपयोग की गई थी तो `409 IDEMPOTENCY_CONFLICT` लौटाता है।
**प्रति कुंजी बजट:**`dailyBudget` / `hourlyBudget` - यह सीमित करता है कि एक कुंजी प्रति विंडो कितने अनुरोधों को रूट कर सकती है।
**गिटहब रिपोर्टिंग:**वैकल्पिक। कोटा पार होने या जारी करने में विफलता पर GitHub मुद्दों को स्वचालित रूप से बनाने के लिए `GITHUB_ISSUES_REPO` + `GITHUB_ISSUES_TOKEN` सेट करें।#### 🎨 Provider Icons — @lobehub/icons (#529)

डैशबोर्ड में सभी प्रदाता आइकन अब `@lobehub/icons` रिएक्ट घटकों (एसवीजी के साथ 130+ प्रदाता) का उपयोग करते हैं।
फ़ॉलबैक श्रृंखला:**लोबेहब एसवीजी → मौजूदा `/providers/{id}.png` → सामान्य आइकन**। एक उचित रिएक्ट `ErrorBoundary` पैटर्न का उपयोग करता है।#### 🔄 Model Auto-Sync Scheduler (#488)

ओमनीरूट अब हर**24 घंटे**में कनेक्टेड प्रदाताओं के लिए मॉडल सूचियों को स्वचालित रूप से ताज़ा करता है।

- मौजूदा `/api/sync/initialize` हुक के माध्यम से सर्वर स्टार्टअप पर चलता है
- `MODEL_SYNC_INTERVAL_HOURS` पर्यावरण चर के माध्यम से कॉन्फ़िगर करने योग्य
- 16 प्रमुख प्रदाताओं को शामिल करता है
- सेटिंग्स डेटाबेस में अंतिम सिंक समय रिकॉर्ड करता है---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### 🔧 Bug Fixes

#### OAuth & Auth

<<<<<<< HEAD
- **#537 — Gemini CLI OAuth:** Clear actionable error when `GEMINI_OAUTH_CLIENT_SECRET` is missing in Docker/self-hosted deployments. Previously showed cryptic `client_secret is missing` from Google. Now provides specific `docker-compose.yml` and `~/.omniroute/.env` instructions.

#### Providers & Routing

- **#536 — LongCat AI:** Fixed `baseUrl` (`api.longcat.chat/openai`) and `authHeader` (`Authorization: Bearer`).
- **#535 — Pinned model override:** `body.model` is now correctly set to `pinnedModel` when context-cache protection is active.
- **#532 — OpenCode Go key validation:** Now uses the `zen/v1` test endpoint (`testKeyBaseUrl`) — same key works for both tiers.

#### CLI & Tools

- **#527 — Claude Code + Codex loop:** `tool_result` blocks are now converted to text instead of dropped, stopping infinite tool-result loops.
- **#524 — OpenCode config save:** Added `saveOpenCodeConfig()` handler (XDG_CONFIG_HOME aware, writes TOML).
- **#521 — Login stuck:** Login no longer freezes after skipping password setup — redirects correctly to onboarding.
- **#522 — API Manager:** Removed misleading "Copy masked key" button (replaced with a lock icon tooltip).
- **#532 — OpenCode Go config:** Guide settings handler now handles `opencode` toolId.

#### Developer Experience

- **#489 — Antigravity:** Missing `googleProjectId` returns a structured 422 error with reconnect guidance instead of a cryptic crash.
- **#510 — Windows paths:** MSYS2/Git-Bash paths (`/c/Program Files/...`) are now normalized to `C:\Program Files\...` automatically.
- **#492 — CLI startup:** `omniroute` CLI now detects `mise`/`nvm`-managed Node when `app/server.js` is missing and shows targeted fix instructions.

---

### 📖 Documentation Updates

- **#513** — Docker password reset: `INITIAL_PASSWORD` env var workaround documented
- **#520** — pnpm: `pnpm approve-builds better-sqlite3` step documented

---

### ✅ Issues Resolved in v3.0.0

`#464` `#488` `#489` `#492` `#510` `#513` `#520` `#521` `#522` `#524` `#527` `#529` `#532` `#535` `#536` `#537`

---

### 🔀 Community PRs Merged

| PR       | Author       | Summary                                                                |
| -------- | ------------ | ---------------------------------------------------------------------- |
| **#530** | @kang-heewon | OpenCode Zen + Go providers with `OpencodeExecutor` and improved tests |

---
=======
-**#537 - जेमिनी सीएलआई ओऑथ:**डॉकर/स्वयं-होस्ट किए गए परिनियोजन में `GEMINI_OAUTH_CLIENT_SECRET` गायब होने पर कार्रवाई योग्य त्रुटि साफ़ करें। पहले Google से गुप्त `client_secret is missing` दिखाया गया था। अब विशिष्ट `docker-compose.yml` और `~/.omniroute/.env` निर्देश प्रदान करता है।#### Providers & Routing

-**#536 - लॉन्गकैट एआई:**फिक्स्ड `बेसयूआरएल` (`api.longcat.chat/openai`) और `authHeader` (`प्राधिकरण: बियरर`)। -**#535 - पिन किया गया मॉडल ओवरराइड:**संदर्भ-कैश सुरक्षा सक्रिय होने पर `बॉडी.मॉडल` अब सही ढंग से `पिनडमॉडल` पर सेट हो गया है। -**#532 - ओपनकोड गो कुंजी सत्यापन:**अब `ज़ेन/v1` परीक्षण समापन बिंदु (`testKeyBaseUrl`) का उपयोग करता है - दोनों स्तरों के लिए एक ही कुंजी काम करती है।#### CLI & Tools

-**#527 - क्लाउड कोड + कोडेक्स लूप:**`टूल_रिजल्ट` ब्लॉक अब हटाए जाने के बजाय टेक्स्ट में परिवर्तित हो गए हैं, जिससे अनंत टूल-रिजल्ट लूप बंद हो गए हैं। -**#524 — ओपनकोड कॉन्फिग सेव:**जोड़ा गया `saveOpenCodeConfig()` हैंडलर (XDG_CONFIG_HOME जागरूक, TOML लिखता है)। -**#521 — लॉगिन अटक गया:**पासवर्ड सेटअप छोड़ने के बाद लॉगिन रुकता नहीं है — ऑनबोर्डिंग पर सही ढंग से रीडायरेक्ट होता है। -**#522 — एपीआई प्रबंधक:**भ्रामक "कॉपी मास्क्ड कुंजी" बटन को हटा दिया गया (लॉक आइकन टूलटिप के साथ प्रतिस्थापित)। -**#532 - ओपनकोड गो कॉन्फिगरेशन:**गाइड सेटिंग्स हैंडलर अब `ओपनकोड` टूलआईडी को संभालता है।#### Developer Experience

-**#489 — एंटीग्रेविटी:**गुम `googleProjectId` एक गुप्त दुर्घटना के बजाय पुन: कनेक्ट मार्गदर्शन के साथ एक संरचित 422 त्रुटि देता है। -**#510 — विंडोज़ पथ:**MSYS2/Git-Bash पथ (`/c/Program Files/...`) अब स्वचालित रूप से `C:\Program Files\...` के लिए सामान्यीकृत हो गए हैं। -**#492 — सीएलआई स्टार्टअप:**`omniroute` सीएलआई अब `ऐप/सर्वर.जेएस` गायब होने पर `माइस`/`एनवीएम`-प्रबंधित नोड का पता लगाता है और लक्षित फिक्स निर्देश दिखाता है।---

### 📖 Documentation Updates

-**#513**- डॉकर पासवर्ड रीसेट: `INITIAL_PASSWORD` env var वर्कअराउंड दस्तावेजित -**#520**- पीएनपीएम: `पीएनपीएम अप्रूव-बिल्ड्स बेटर-एसक्लाइट3` चरण प्रलेखित---

### ✅ Issues Resolved in v3.0.0

`#464` `#488` `#489` `#492` `#510` `#513` `#520` `#521` `#522` `#524` `#527` `#529` `#532` `#535` `#536` `#537`---

### 🔀 Community PRs Merged

| पीआर     | लेखक        | सारांश                                                                 |
| -------- | ----------- | ---------------------------------------------------------------------- | --- |
| **#530** | @कांग-हीवोन | `OpencodeExecutor` और बेहतर परीक्षणों के साथ OpenCode Zen + Go प्रदाता | --- |
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.0-rc.7] - 2026-03-23

### 🔧 Improvements (sub2api Gap Analysis — T05, T08, T09, T13, T14)

<<<<<<< HEAD
- **T05** — Rate-limit DB persistence: `setConnectionRateLimitUntil()`, `isConnectionRateLimited()`, `getRateLimitedConnections()` in `providers.ts`. The existing `rate_limited_until` column is now exposed as a dedicated API — OAuth token refresh must NOT touch this field to prevent rate-limit loops.
- **T08** — Per-API-key session limit: `max_sessions INTEGER DEFAULT 0` added to `api_keys` via auto-migration. `sessionManager.ts` gains `registerKeySession()`, `unregisterKeySession()`, `checkSessionLimit()`, and `getActiveSessionCountForKey()`. Callers in `chatCore.js` can enforce the limit and decrement on `req.close`.
- **T09** — Codex vs Spark rate-limit scopes: `getCodexModelScope()` and `getCodexRateLimitKey()` in `codex.ts`. Standard models (`gpt-5.x-codex`, `codex-mini`) get scope `"codex"`; spark models (`codex-spark*`) get scope `"spark"`. Rate-limit keys should be `${accountId}:${scope}` so exhausting one pool doesn't block the other.
- **T13** — Stale quota display fix: `getEffectiveQuotaUsage(used, resetAt)` returns `0` when the reset window has passed; `formatResetCountdown(resetAt)` returns a human-readable countdown string (e.g. `"2h 35m"`). Both exported from `providers.ts` + `localDb.ts` for dashboard consumption.
- **T14** — Proxy fast-fail: new `src/lib/proxyHealth.ts` with `isProxyReachable(proxyUrl, timeoutMs=2000)` (TCP check, ≤2s instead of 30s timeout), `getCachedProxyHealth()`, `invalidateProxyHealth()`, and `getAllProxyHealthStatuses()`. Results cached 30s by default; configurable via `PROXY_FAST_FAIL_TIMEOUT_MS` / `PROXY_HEALTH_CACHE_TTL_MS`.

### 🧪 Tests

- Test suite: **832 tests, 0 failures**

---
=======
-**T05**- दर-सीमा DB दृढ़ता: `setConnectionRateLimitUntil()`, `isConnectionRateLimited()`, `getRateLimitedConnections()` `providers.ts` में। मौजूदा `rate_limited_until` कॉलम अब एक समर्पित एपीआई के रूप में सामने आ गया है - रेट-लिमिट लूप को रोकने के लिए OAuth टोकन रिफ्रेश को इस फ़ील्ड को नहीं छूना चाहिए। -**T08**- प्रति-एपीआई-कुंजी सत्र सीमा: `max_sessions INTEGER Default 0` को ऑटो-माइग्रेशन के माध्यम से `api_keys` में जोड़ा गया। `sessionManager.ts` को `registerKeySession()`, `unregisterKeySession()`, `checkSessionLimit()`, और `getActiveSessionCountForKey()` का लाभ मिलता है। `chatCore.js` में कॉल करने वाले `req.close` पर सीमा और कमी लागू कर सकते हैं। -**T09**- कोडेक्स बनाम स्पार्क दर-सीमा स्कोप: `getCodexModelScope()` और `getCodexRateLimitKey()` `codex.ts` में। मानक मॉडल (`gpt-5.x-codex`, `codex-mini`) को स्कोप `"codex"` मिलता है; स्पार्क मॉडल (`कोडेक्स-स्पार्क*`) को स्कोप ''स्पार्क'' मिलता है। दर-सीमा कुंजियाँ `${accountId}:${scope}` होनी चाहिए ताकि एक पूल समाप्त होने से दूसरा अवरुद्ध न हो। -**T13**- पुराना कोटा डिस्प्ले फिक्स: `getEffectiveQuotaUsage(used, restartAt)` रीसेट विंडो बीत जाने पर `0` लौटाता है; `formatResetCountdown(resetAt)` एक मानव-पठनीय उलटी गिनती स्ट्रिंग लौटाता है (उदाहरण के लिए `"2h 35m"`)। दोनों ने डैशबोर्ड खपत के लिए `providers.ts` + `localDb.ts` से निर्यात किया। -**T14**- प्रॉक्सी फास्ट-फेल: नया `src/lib/proxyHealth.ts` के साथ `isProxyReachable(proxyUrl, timeoutMs=2000)` (टीसीपी चेक, 30s टाइमआउट के बजाय ≤2s), `getCachedProxyHealth()`, `invalidateProxyHealth()`, और `getAllProxyHealthStatuses()`। परिणाम डिफ़ॉल्ट रूप से 30 कैश किए गए; `PROXY_FAST_FAIL_TIMEOUT_MS` / `PROXY_HEALTH_CACHE_TTL_MS` के माध्यम से कॉन्फ़िगर करने योग्य।### 🧪 Tests

- टेस्ट सूट:**832 परीक्षण, 0 विफलताएँ**---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.0-rc.6] - 2026-03-23

### 🔧 Bug Fixes & Improvements (sub2api Gap Analysis — T01–T15)

<<<<<<< HEAD
- **T01** — `requested_model` column in `call_logs` (migration 009): track which model the client originally requested vs the actual routed model. Enables fallback rate analytics.
- **T02** — Strip empty text blocks from nested `tool_result.content`: prevents Anthropic 400 errors (`text content blocks must be non-empty`) when Claude Code chains tool results.
- **T03** — Parse `x-codex-5h-*` / `x-codex-7d-*` headers: `parseCodexQuotaHeaders()` + `getCodexResetTime()` extract Codex quota windows for precise cooldown scheduling instead of generic 5-min fallback.
- **T04** — `X-Session-Id` header for external sticky routing: `extractExternalSessionId()` in `sessionManager.ts` reads `x-session-id` / `x-omniroute-session` headers with `ext:` prefix to avoid collision with internal SHA-256 session IDs. Nginx-compatible (hyphenated header).
- **T06** — Account deactivated → permanent block: `isAccountDeactivated()` in `accountFallback.ts` detects 401 deactivation signals and applies a 1-year cooldown to prevent retrying permanently dead accounts.
- **T07** — X-Forwarded-For IP validation: new `src/lib/ipUtils.ts` with `extractClientIp()` and `getClientIpFromRequest()` — skips `unknown`/non-IP entries in `X-Forwarded-For` chains (Nginx/proxy-forwarded requests).
- **T10** — Credits exhausted → distinct fallback: `isCreditsExhausted()` in `accountFallback.ts` returns 1h cooldown with `creditsExhausted` flag, distinct from generic 429 rate limiting.
- **T11** — `max` reasoning effort → 131072 budget tokens: `EFFORT_BUDGETS` and `THINKING_LEVEL_MAP` updated; reverse mapping now returns `"max"` for full-budget responses. Unit test updated.
- **T12** — MiniMax M2.7 pricing entries added: `minimax-m2.7`, `MiniMax-M2.7`, `minimax-m2.7-highspeed` added to pricing table (sub2api PR #1120). M2.5/GLM-4.7/GLM-5/Kimi pricing already existed.
- **T15** — Array content normalization: `normalizeContentToString()` helper in `openai-to-claude.ts` correctly collapses array-formatted system/tool messages to string before sending to Anthropic.

### 🧪 Tests

- Test suite: **832 tests, 0 failures** (unchanged from rc.5)

---
=======
-**T01**- `call_logs` (माइग्रेशन 009) में `requested_model` कॉलम: ट्रैक करें कि क्लाइंट ने मूल रूप से किस मॉडल का अनुरोध किया था बनाम वास्तविक रूट किए गए मॉडल का। फ़ॉलबैक दर विश्लेषण सक्षम करता है। -**T02**- नेस्टेड `tool_result.content` से खाली टेक्स्ट ब्लॉक हटाएं: जब क्लाउड कोड चेन टूल परिणाम देता है तो एंथ्रोपिक 400 त्रुटियों (`टेक्स्ट सामग्री ब्लॉक गैर-खाली होना चाहिए`) को रोकता है। -**T03**- पार्स `x-codex-5h-*` / `x-codex-7d-*` हेडर: `parseCodexQuotaHeaders()` + `getCodexResetTime()` सामान्य 5-मिनट फ़ॉलबैक के बजाय सटीक कोल्डाउन शेड्यूलिंग के लिए कोडेक्स कोटा विंडो निकालें। -**T04**- बाहरी स्टिकी रूटिंग के लिए `X-Session-Id` हेडर: `sessionManager.ts` में `extractExternalSessionId()` आंतरिक SHA-256 सत्र आईडी के साथ टकराव से बचने के लिए `ext:` उपसर्ग के साथ `x-session-id` / `x-omniroute-session` हेडर पढ़ता है। Nginx-संगत (हाइफ़नेटेड हेडर)। -**T06**- खाता निष्क्रिय → स्थायी ब्लॉक: `accountFallback.ts` में `isAccountDeactivated()` 401 निष्क्रियकरण संकेतों का पता लगाता है और स्थायी रूप से मृत खातों को पुनः प्रयास करने से रोकने के लिए 1 साल का कूलडाउन लागू करता है। -**T07**- X-Forwarded-For IP सत्यापन: `extractClientIp()` और `getClientIpFromRequest()` के साथ नया `src/lib/ipUtils.ts` - `X-Forwarded-For` चेन (Nginx/प्रॉक्सी-फॉरवर्डेड अनुरोध) में `अज्ञात`/गैर-आईपी प्रविष्टियों को छोड़ देता है। -**T10**- क्रेडिट ख़त्म → अलग फ़ॉलबैक: `accountFallback.ts` में `isCreditsExhausted()` `creditsExhausted` फ़्लैग के साथ 1 घंटे का कूलडाउन लौटाता है, जो सामान्य 429 रेट लिमिटिंग से अलग है। -**T11**— `अधिकतम` तर्क प्रयास → 131072 बजट टोकन: `EFFORT_BUDGETS` और `THINKING_LEVEL_MAP` अपडेट किए गए; रिवर्स मैपिंग अब पूर्ण-बजट प्रतिक्रियाओं के लिए `"अधिकतम"` लौटाती है। यूनिट परीक्षण अद्यतन किया गया. -**T12**- MiniMax M2.7 मूल्य निर्धारण प्रविष्टियाँ जोड़ी गईं: `minimax-m2.7`, `MiniMax-M2.7`, `minimax-m2.7-highspeed` मूल्य निर्धारण तालिका में जोड़ी गईं (sub2api PR #1120)। M2.5/GLM-4.7/GLM-5/किमी मूल्य निर्धारण पहले से मौजूद था। -**T15**- ऐरे सामग्री सामान्यीकरण: `normalizeContentToString()` `openai-to-claude.ts` में सहायक एन्थ्रोपिक को भेजने से पहले सरणी-स्वरूपित सिस्टम/टूल संदेशों को स्ट्रिंग में सही ढंग से संक्षिप्त करता है।### 🧪 Tests

- टेस्ट सूट:**832 परीक्षण, 0 विफलताएँ**(आरसी.5 से अपरिवर्तित)---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.0-rc.5] - 2026-03-22

### ✨ New Features

<<<<<<< HEAD
- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **#464** — Registered Keys Provisioning API: auto-issue API keys with per-provider & per-account quota enforcement
  - `POST /api/v1/registered-keys` — issue keys with idempotency support
  - `GET /api/v1/registered-keys` — list (masked) registered keys
  - `GET /api/v1/registered-keys/{id}` — get key metadata
  - `DELETE /api/v1/registered-keys/{id}` / `POST ../{id}/revoke` — revoke keys
  - `GET /api/v1/quotas/check` — pre-validate before issuing
  - `PUT /api/v1/providers/{id}/limits` — set provider issuance limits
  - `PUT /api/v1/accounts/{id}/limits` — set account issuance limits
  - `POST /api/v1/issues/report` — optional GitHub issue reporting
  - DB migration 008: `registered_keys`, `provider_key_limits`, `account_key_limits` tables

---
=======
-**#464**- पंजीकृत कुंजी प्रावधान एपीआई: प्रति-प्रदाता और प्रति-खाता कोटा प्रवर्तन के साथ ऑटो-इश्यू एपीआई कुंजी

- `POST /api/v1/registered-keys` - निष्क्रियता समर्थन के साथ कुंजी जारी करें
- `GET /api/v1/registered-keys` - सूची (नकाबपोश) पंजीकृत कुंजी
- `GET /api/v1/registered-keys/{id}` - कुंजी मेटाडेटा प्राप्त करें
- `DELETE /api/v1/registered-keys/{id}` / `POST ../{id}/revoke` - कुंजियाँ निरस्त करें
- `GET /api/v1/quotas/check` - जारी करने से पहले पूर्व-सत्यापन करें
- `PUT /api/v1/providers/{id}/limits` - प्रदाता जारी करने की सीमा निर्धारित करें
- `PUT /api/v1/accounts/{id}/limits` - खाता जारी करने की सीमा निर्धारित करें
- `POST /api/v1/issues/रिपोर्ट` - वैकल्पिक GitHub समस्या रिपोर्टिंग
- डीबी माइग्रेशन 008: `पंजीकृत_कीज़`, `प्रदाता_की_लिमिट्स`, `अकाउंट_की_लिमिट्स` टेबल---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.0-rc.4] - 2026-03-22

### ✨ New Features

<<<<<<< HEAD
- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **#530 (PR)** — OpenCode Zen and OpenCode Go providers added (by @kang-heewon)
  - New `OpencodeExecutor` with multi-format routing (`/chat/completions`, `/messages`, `/responses`)
  - 7 models across both tiers

---
=======
-**#530 (पीआर)**- ओपनकोड ज़ेन और ओपनकोड गो प्रदाता जोड़े गए (@kang-heewon द्वारा)

- मल्टी-फॉर्मेट रूटिंग के साथ नया `OpencodeExecutor` (`/chat/completions`, `/messages`, `/responses`)
- दोनों स्तरों पर 7 मॉडल---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.0-rc.3] - 2026-03-22

### ✨ New Features

<<<<<<< HEAD
- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **#529** — Provider icons now use [@lobehub/icons](https://github.com/lobehub/lobe-icons) with graceful PNG fallback and a `ProviderIcon` component (130+ providers supported)
- **#488** — Auto-update model lists every 24h via `modelSyncScheduler` (configurable via `MODEL_SYNC_INTERVAL_HOURS`)

### 🔧 Bug Fixes

- **#537** — Gemini CLI OAuth: now shows clear actionable error when `GEMINI_OAUTH_CLIENT_SECRET` is missing in Docker/self-hosted deployments

---
=======
-**#529**- प्रदाता आइकन अब सुंदर पीएनजी फ़ॉलबैक और एक `ProviderIcon` घटक (130+ प्रदाता समर्थित) के साथ [@lobehub/icons](https://github.com/lobehub/lobe-icons) का उपयोग करते हैं -**#488**- `modelSyncScheduler` के माध्यम से प्रत्येक 24 घंटे में मॉडल सूचियों को स्वतः अपडेट करें (`MODEL_SYNC_INTERVAL_HOURS` के माध्यम से कॉन्फ़िगर करने योग्य)### 🔧 Bug Fixes

-**#537**- जेमिनी सीएलआई ओऑथ: अब डॉकर/स्वयं-होस्ट किए गए परिनियोजन में `GEMINI_OAUTH_CLIENT_SECRET` गायब होने पर स्पष्ट कार्रवाई योग्य त्रुटि दिखाई देती है---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.0-rc.2] - 2026-03-22

### 🔧 Bug Fixes

<<<<<<< HEAD
- **#536** — LongCat AI key validation: fixed baseUrl (`api.longcat.chat/openai`) and authHeader (`Authorization: Bearer`)
- **#535** — Pinned model override: `body.model` is now set to `pinnedModel` when context-cache protection detects a pinned model
- **#524** — OpenCode config now saved correctly: added `saveOpenCodeConfig()` handler (XDG_CONFIG_HOME aware, writes TOML)

---
=======
-**#536**- लॉन्गकैट एआई कुंजी सत्यापन: निश्चित बेसयूआरएल (`api.longcat.chat/openai`) और ऑथहेडर (`प्राधिकरण: बियरर`) -**#535**- पिन किए गए मॉडल ओवरराइड: `बॉडी.मॉडल` को अब `पिनडमॉडल` पर सेट किया गया है जब संदर्भ-कैश सुरक्षा पिन किए गए मॉडल का पता लगाती है -**#524**- ओपनकोड कॉन्फ़िगरेशन अब सही ढंग से सहेजा गया: `saveOpenCodeConfig()` हैंडलर जोड़ा गया (XDG_CONFIG_HOME जागरूक, TOML लिखता है)---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [3.0.0-rc.1] - 2026-03-22

### 🔧 Bug Fixes

<<<<<<< HEAD
- **#521** — Login no longer gets stuck after skipping password setup (redirects to onboarding)
- **#522** — API Manager: Removed misleading "Copy masked key" button (replaced with lock icon tooltip)
- **#527** — Claude Code + Codex superpowers loop: `tool_result` blocks now converted to text instead of dropped
- **#532** — OpenCode GO API key validation now uses the correct `zen/v1` endpoint (`testKeyBaseUrl`)
- **#489** — Antigravity: missing `googleProjectId` returns structured 422 error with reconnect guidance
- **#510** — Windows: MSYS2/Git-Bash paths (`/c/Program Files/...`) are now normalized to `C:\Program Files\...`
- **#492** — `omniroute` CLI now detects `mise`/`nvm` when `app/server.js` is missing and shows targeted fix

### दस्तावेज़

- **#513** — Docker password reset: `INITIAL_PASSWORD` env var workaround documented
- **#520** — pnpm: `pnpm approve-builds better-sqlite3` documented

### ✅ Closed Issues

#489, #492, #510, #513, #520, #521, #522, #525, #527, #532

---

## [2.9.5] — 2026-03-22

> Sprint: New OpenCode providers, embedding credentials fix, CLI masked key bug, CACHE_TAG_PATTERN fix.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **CLI tools save masked API key to config files** — `claude-settings`, `cline-settings`, and `openclaw-settings` POST routes now accept a `keyId` param and resolve the real API key from DB before writing to disk. `ClaudeToolCard` updated to send `keyId` instead of the masked display string. Fixes #523, #526.
- **Custom embedding providers: `No credentials` error** — `/v1/embeddings` now tracks `credentialsProviderId` separately from the routing prefix, so credentials are fetched from the matching provider node ID rather than the public prefix string. Fixes a regression where `google/gemini-embedding-001` and similar custom-provider models would always fail with a credentials error. Fixes #532-related. (PR #528 by @jacob2826)
- **Context cache protection regex misses `
` prefix** — `CACHE_TAG_PATTERN` in `comboAgentMiddleware.ts` updated to match both literal `
` (backslash-n) and actual newline U+000A that `combo.ts` streaming injects around the `<omniModel>` tag after fix #515. Fixes #531.

### ✨ New Providers

- **OpenCode Zen** — Free tier gateway at `opencode.ai/zen/v1` with 3 models: `minimax-m2.5-free`, `big-pickle`, `gpt-5-nano`
- **OpenCode Go** — Subscription service at `opencode.ai/zen/go/v1` with 4 models: `glm-5`, `kimi-k2.5`, `minimax-m2.7` (Claude format), `minimax-m2.5` (Claude format)
- Both providers use the new `OpencodeExecutor` which routes dynamically to `/chat/completions`, `/messages`, `/responses`, or `/models/{model}:generateContent` based on the requested model. (PR #530 by @kang-heewon)

---

## [2.9.4] — 2026-03-21

> Sprint: Bug fixes — preserve Codex prompt cache key, fix tagContent JSON escaping, sync expired token status to DB.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(translator)**: Preserve `prompt_cache_key` in Responses API → Chat Completions translation (#517)
  — The field is a cache-affinity signal used by Codex; stripping it was preventing prompt cache hits.
  Fixed in `openai-responses.ts` and `responsesApiHelper.ts`.

- **fix(combo)**: Escape `
` in `tagContent` so injected JSON string is valid (#515)
  — Template literal newlines (U+000A) are not allowed unescaped inside JSON string values.
  Replaced with `\n` literal sequences in `open-sse/services/combo.ts`.

- **fix(usage)**: Sync expired token status back to DB on live auth failure (#491)
  — When the Limits & Quotas live check returns 401/403, the connection `testStatus` is now updated
  to `"expired"` in the database so the Providers page reflects the same degraded state.
  Fixed in `src/app/api/usage/[connectionId]/route.ts`.

---

## [2.9.3] — 2026-03-21

> Sprint: Add 5 new free AI providers — LongCat, Pollinations, Cloudflare AI, Scaleway, AI/ML API.

### ✨ New Providers

- **feat(providers/longcat)**: Add LongCat AI (`lc/`) — 50M tokens/day free (Flash-Lite) + 500K/day (Chat/Thinking) during public beta. OpenAI-compatible, standard Bearer auth.
- **feat(providers/pollinations)**: Add Pollinations AI (`pol/`) — no API key required. Proxies GPT-5, Claude, Gemini, DeepSeek V3, Llama 4 (1 req/15s free). Custom executor handles optional auth.
- **feat(providers/cloudflare-ai)**: Add Cloudflare Workers AI (`cf/`) — 10K Neurons/day free (~150 LLM responses or 500s Whisper audio). 50+ models on global edge. Custom executor builds dynamic URL with `accountId` from credentials.
- **feat(providers/scaleway)**: Add Scaleway Generative APIs (`scw/`) — 1M free tokens for new accounts. EU/GDPR compliant (Paris). Qwen3 235B, Llama 3.1 70B, Mistral Small 3.2.
- **feat(providers/aimlapi)**: Add AI/ML API (`aiml/`) — $0.025/day free credit, 200+ models (GPT-4o, Claude, Gemini, Llama) via single aggregator endpoint.

### 🔄 Provider Updates

- **feat(providers/together)**: Add `hasFree: true` + 3 permanently free model IDs: `Llama-3.3-70B-Instruct-Turbo-Free`, `Llama-Vision-Free`, `DeepSeek-R1-Distill-Llama-70B-Free`
- **feat(providers/gemini)**: Add `hasFree: true` + `freeNote` (1,500 req/day, no credit card needed, aistudio.google.com)
- **chore(providers/gemini)**: Rename display name to `Gemini (Google AI Studio)` for clarity

### ⚙️ Infrastructure

- **feat(executors/pollinations)**: New `PollinationsExecutor` — omits `Authorization` header when no API key provided
- **feat(executors/cloudflare-ai)**: New `CloudflareAIExecutor` — dynamic URL construction requires `accountId` in provider credentials
- **feat(executors)**: Register `pollinations`, `pol`, `cloudflare-ai`, `cf` executor mappings

### दस्तावेज़

- **docs(readme)**: Expanded free combo stack to 11 providers ($0 forever)
- **docs(readme)**: Added 4 new free provider sections (LongCat, Pollinations, Cloudflare AI, Scaleway) with model tables
- **docs(readme)**: Updated pricing table with 4 new free tier rows
- **docs(i18n/pt-BR)**: Updated pricing table + added LongCat/Pollinations/Cloudflare AI/Scaleway sections in Portuguese
- **docs(new-features/ai)**: 10 task spec files + master implementation plan in `docs/new-features/ai/`

### 🧪 Tests

- Test suite: **821 tests, 0 failures** (unchanged)

---

## [2.9.2] — 2026-03-21

> Sprint: Fix media transcription (Deepgram/HuggingFace Content-Type, language detection) and TTS error display.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(transcription)**: Deepgram and HuggingFace audio transcription now correctly map `video/mp4` → `audio/mp4` and other media MIME types via new `resolveAudioContentType()` helper. Previously, uploading `.mp4` files consistently returned "No speech detected" because Deepgram was receiving `Content-Type: video/mp4`.
- **fix(transcription)**: Added `detect_language=true` to Deepgram requests — auto-detects audio language (Portuguese, Spanish, etc.) instead of defaulting to English. Fixes non-English transcriptions returning empty or garbage results.
- **fix(transcription)**: Added `punctuate=true` to Deepgram requests for higher-quality transcription output with correct punctuation.
- **fix(tts)**: `[object Object]` error display in Text-to-Speech responses fixed in both `audioSpeech.ts` and `audioTranscription.ts`. The `upstreamErrorResponse()` function now correctly extracts nested string messages from providers like ElevenLabs that return `{ error: { message: "...", status_code: 401 } }` instead of a flat error string.

### 🧪 Tests

- Test suite: **821 tests, 0 failures** (unchanged)

### Triaged Issues

- **#508** — Tool call format regression: requested proxy logs and provider chain info (`needs-info`)
- **#510** — Windows CLI healthcheck path: requested shell/Node version info (`needs-info`)
- **#485** — Kiro MCP tool calls: closed as external Kiro issue (not OmniRoute)
- **#442** — Baseten /models endpoint: closed (documented manual workaround)
- **#464** — Key provisioning API: acknowledged as roadmap item

---

## [2.9.1] — 2026-03-21

> Sprint: Fix SSE omniModel data loss, merge per-protocol model compatibility.

### Bug Fixes

- **#511** — Critical: `<omniModel>` tag was sent after `finish_reason:stop` in SSE streams, causing data loss. Tag is now injected into the first non-empty content chunk, guaranteeing delivery before SDKs close the connection.

### Merged PRs

- **PR #512** (@zhangqiang8vip): Per-protocol model compatibility — `normalizeToolCallId` and `preserveOpenAIDeveloperRole` can now be configured per client protocol (OpenAI, Claude, Responses API). New `compatByProtocol` field in model config with Zod validation.

### Triaged Issues

- **#510** — Windows CLI healthcheck_failed: requested PATH/version info
- **#509** — Turbopack Electron regression: upstream Next.js bug, documented workarounds
- **#508** — macOS black screen: suggested `--disable-gpu` workaround

---

## [2.9.0] — 2026-03-20

> Sprint: Cross-platform machineId fix, per-API-key rate limits, streaming context cache, Alibaba DashScope, search analytics, ZWS v5, and 8 issues closed.

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **feat(search)**: Search Analytics tab in `/dashboard/analytics` — provider breakdown, cache hit rate, cost tracking. New API: `GET /api/v1/search/analytics` (#feat/search-provider-routing)
- **feat(provider)**: Alibaba Cloud DashScope added with custom endpoint path validation — configurable `chatPath` and `modelsPath` per node (#feat/custom-endpoint-paths)
- **feat(api)**: Per-API-key request-count limits — `max_requests_per_day` and `max_requests_per_minute` columns with in-memory sliding-window enforcement returning HTTP 429 (#452)
- **feat(dev)**: ZWS v5 — HMR leak fix (485 DB connections → 1), memory 2.4GB → 195MB, `globalThis` singletons, Edge Runtime warning fix (@zhangqiang8vip)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(#506)**: Cross-platform `machineId` — `getMachineIdRaw()` rewritten with try/catch waterfall (Windows REG.exe → macOS ioreg → Linux file read → hostname → `os.hostname()`). Eliminates `process.platform` branching that Next.js bundler dead-code-eliminated, fixing `'head' is not recognized` on Windows. Also fixes #466.
- **fix(#493)**: Custom provider model naming — removed incorrect prefix stripping in `DefaultExecutor.transformRequest()` that mangled org-scoped model IDs like `zai-org/GLM-5-FP8`.
- **fix(#490)**: Streaming + context cache protection — `TransformStream` intercepts SSE to inject `<omniModel>` tag before `[DONE]` marker, enabling context cache protection for streaming responses.
- **fix(#458)**: Combo schema validation — `system_message`, `tool_filter_regex`, `context_cache_protection` fields now pass Zod validation on save.
- **fix(#487)**: KIRO MITM card cleanup — removed ZWS_README, generified `AntigravityToolCard` to use dynamic tool metadata.

### 🧪 Tests

- Added Anthropic-format tools filter unit tests (PR #397) — 8 regression tests for `tool.name` without `.function` wrapper
- Test suite: **821 tests, 0 failures** (up from 813)

### 📋 Issues Closed (8)

- **#506** — Windows machineId `head` not recognized (fixed)
- **#493** — Custom provider model naming (fixed)
- **#490** — Streaming context cache (fixed)
- **#452** — Per-API-key request limits (implemented)
- **#466** — Windows login failure (same root cause as #506)
- **#504** — MITM inactive (expected behavior)
- **#462** — Gemini CLI PSA (resolved)
- **#434** — Electron app crash (duplicate of #402)

## [2.8.9] — 2026-03-20

> Sprint: Merge community PRs, fix KIRO MITM card, dependency updates.

### Merged PRs

- **PR #498** (@Sajid11194): Fix Windows machine ID crash (`undefined\REG.exe`). Replaces `node-machine-id` with native OS registry queries. **Closes #486.**
- **PR #497** (@zhangqiang8vip): Fix dev-mode HMR resource leaks — 485 leaked DB connections → 1, memory 2.4GB → 195MB. `globalThis` singletons, Edge Runtime warning fix, Windows test stability. (+1168/-338 across 22 files)
- **PRs #499-503** (Dependabot): GitHub Actions updates — `docker/build-push-action@7`, `actions/checkout@6`, `peter-evans/dockerhub-description@5`, `docker/setup-qemu-action@4`, `docker/login-action@4`.

### Bug Fixes

- **#505** — KIRO MITM card now displays tool-specific instructions (`api.anthropic.com`) instead of Antigravity-specific text.
- **#504** — Responded with UX clarification (MITM "Inactive" is expected behavior when proxy is not running).

---

## [2.8.8] — 2026-03-20

> Sprint: Fix OAuth batch test crash, add "Test All" button to individual provider pages.

### Bug Fixes

- **OAuth batch test crash** (ERR_CONNECTION_REFUSED): Replaced sequential for-loop with 5-connection concurrency limit + 30s per-connection timeout via `Promise.race()` + `Promise.allSettled()`. Prevents server crash when testing large OAuth provider groups (~30+ connections).

### विशेषताएं

- **"Test All" button on provider pages**: Individual provider pages (e.g., `/providers/codex`) now show a "Test All" button in the Connections header when there are 2+ connections. Uses `POST /api/providers/test-batch` with `{mode: "provider", providerId}`. Results displayed in a modal with pass/fail summary and per-connection diagnosis.

---

## [2.8.7] — 2026-03-20

> Sprint: Merge PR #495 (Bottleneck 429 drop), fix #496 (custom embedding providers), triage features.

### Bug Fixes

- **Bottleneck 429 infinite wait** (PR #495 by @xandr0s): On 429, `limiter.stop({ dropWaitingJobs: true })` immediately fails all queued requests so upstream callers can trigger fallback. Limiter is deleted from Map so next request creates a fresh instance.
- **Custom embedding models unresolvable** (#496): `POST /v1/embeddings` now resolves custom embedding models from ALL provider_nodes (not just localhost). Enables models like `google/gemini-embedding-001` added via dashboard.

### Issues Responded

- **#452** — Per-API-key request-count limits (acknowledged, on roadmap)
- **#464** — Auto-issue API keys with provider/account limits (needs more detail)
- **#488** — Auto-update model lists (acknowledged, on roadmap)
- **#496** — Custom embedding provider resolution (fixed)

---

## [2.8.6] — 2026-03-20

> Sprint: Merge PR #494 (MiniMax role fix), fix KIRO MITM dashboard, triage 8 issues.

### विशेषताएं

- **MiniMax developer→system role fix** (PR #494 by @zhangqiang8vip): Per-model `preserveDeveloperRole` toggle. Adds "Compatibility" UI in providers page. Fixes 422 "role param error" for MiniMax and similar gateways.
- **roleNormalizer**: `normalizeDeveloperRole()` now accepts `preserveDeveloperRole` parameter with tri-state behavior (undefined=keep, true=keep, false=convert).
- **DB**: New `getModelPreserveOpenAIDeveloperRole()` and `mergeModelCompatOverride()` in `models.ts`.

### Bug Fixes

- **KIRO MITM dashboard** (#481/#487): `CLIToolsPageClient` now routes any `configType: "mitm"` tool to `AntigravityToolCard` (MITM Start/Stop controls). Previously only Antigravity was hardcoded.
- **AntigravityToolCard generic**: Uses `tool.image`, `tool.description`, `tool.id` instead of hardcoded Antigravity values. Guards against missing `defaultModels`.

### Cleanup

- Removed `ZWS_README_V2.md` (development-only docs from PR #494).

### Issues Triaged (8)

- **#487** — Closed (KIRO MITM fixed in this release)
- **#486** — needs-info (Windows REG.exe PATH issue)
- **#489** — needs-info (Antigravity projectId missing, OAuth reconnect needed)
- **#492** — needs-info (missing app/server.js on mise-managed Node)
- **#490** — Acknowledged (streaming + context cache blocking, fix planned)
- **#491** — Acknowledged (Codex auth state inconsistency)
- **#493** — Acknowledged (Modal provider model name prefix, workaround provided)
- **#488** — Feature request backlog (auto-update model lists)

---

## [2.8.5] — 2026-03-19

> Sprint: Fix zombie SSE streams, context cache first-turn, KIRO MITM, and triage 5 external issues.

### Bug Fixes

- **Zombie SSE Streams** (#473): Reduce `STREAM_IDLE_TIMEOUT_MS` from 300s → 120s for faster combo fallback when providers hang mid-stream. Configurable via env var.
- **Context Cache Tag** (#474): Fix `injectModelTag()` to handle first-turn requests (no assistant messages) — context cache protection now works from the very first response.
- **KIRO MITM** (#481): Change KIRO `configType` from `guide` → `mitm` so the dashboard renders MITM Start/Stop controls.
- **E2E Test** (CI): Fix `providers-bailian-coding-plan.spec.ts` — dismiss pre-existing modal overlay before clicking Add API Key button.

### Closed Issues

- #473 — Zombie SSE streams bypass combo fallback
- #474 — Context cache `<omniModel>` tag missing on first turn
- #481 — MITM for KIRO not activatable from dashboard
- #468 — Gemini CLI remote server (superseded by #462 deprecation)
- #438 — Claude unable to write files (external CLI issue)
- #439 — AppImage doesn't work (documented libfuse2 workaround)
- #402 — ARM64 DMG "damaged" (documented xattr -cr workaround)
- #460 — CLI not runnable on Windows (documented PATH fix)

---

## [2.8.4] — 2026-03-19

> Sprint: Gemini CLI deprecation, VM guide i18n fix, dependabot security fix, provider schema expansion.

### विशेषताएं

- **Gemini CLI Deprecation** (#462): Mark `gemini-cli` provider as deprecated with warning — Google restricts third-party OAuth usage from March 2026
- **Provider Schema** (#462): Expand Zod validation with `deprecated`, `deprecationReason`, `hasFree`, `freeNote`, `authHint`, `apiHint` optional fields

### Bug Fixes

- **VM Guide i18n** (#471): Add `VM_DEPLOYMENT_GUIDE.md` to i18n translation pipeline, regenerate all 30 locale translations from English source (were stuck in Portuguese)

### सुरक्षा

- **deps**: Bump `flatted` 3.3.3 → 3.4.2 — fixes CWE-1321 prototype pollution (#484, @dependabot)

### Closed Issues

- #472 — Model Aliases regression (fixed in v2.8.2)
- #471 — VM guide translations broken
- #483 — Trailing `data: null` after `[DONE]` (fixed in v2.8.3)

### Merged PRs

- #484 — deps: bump flatted from 3.3.3 to 3.4.2 (@dependabot)

---

## [2.8.3] — 2026-03-19

> Sprint: Czech i18n, SSE protocol fix, VM guide translation.

### विशेषताएं

- **Czech Language** (#482): Full Czech (cs) i18n — 22 docs, 2606 UI strings, language switcher updates (@zen0bit)
- **VM Deployment Guide**: Translated from Portuguese to English as the source document (@zen0bit)

### Bug Fixes

- **SSE Protocol** (#483): Stop sending trailing `data: null` after `[DONE]` signal — fixes `AI_TypeValidationError` in strict AI SDK clients (Zod-based validators)

### Merged PRs

- #482 — Add Czech language + Fix VM_DEPLOYMENT_GUIDE.md English source (@zen0bit)

---

## [2.8.2] — 2026-03-19

> Sprint: 2 merged PRs, model aliases routing fix, log export, and issue triage.

### विशेषताएं

- **Log Export**: New Export button on `/dashboard/logs` with time range dropdown (1h, 6h, 12h, 24h). Downloads JSON of request/proxy/call logs via `/api/logs/export` API (#user-request)

### Bug Fixes

- **Model Aliases Routing** (#472): Settings → Model Aliases now correctly affect provider routing, not just format detection. Previously `resolveModelAlias()` output was only used for `getModelTargetFormat()` but the original model ID was sent to the provider
- **Stream Flush Usage** (#480): Usage data from the last SSE event in the buffer is now correctly extracted during stream flush (merged from @prakersh)

### Merged PRs

- #480 — Extract usage from remaining buffer in flush handler (@prakersh)
- #479 — Add missing Codex 5.3/5.4 and Anthropic model ID pricing entries (@prakersh)

---

## [2.8.1] — 2026-03-19

> Sprint: Five community PRs — streaming call log fixes, Kiro compatibility, cache token analytics, Chinese translation, and configurable tool call IDs.

### विशेषताएं

- **feat(logs)**: Call log response content now correctly accumulated from raw provider chunks (OpenAI/Claude/Gemini) before translation, fixing empty response payloads in streaming mode (#470, @zhangqiang8vip)
- **feat(providers)**: Per-model configurable 9-char tool call ID normalization (Mistral-style) — only models with the option enabled get truncated IDs (#470)
- **feat(api)**: Key PATCH API expanded to support `allowedConnections`, `name`, `autoResolve`, `isActive`, and `accessSchedule` fields (#470)
- **feat(dashboard)**: Response-first layout in request log detail UI (#470)
- **feat(i18n)**: Improved Chinese (zh-CN) translation — complete retranslation (#475, @only4copilot)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(kiro)**: Strip injected `model` field from request body — Kiro API rejects unknown top-level fields (#478, @prakersh)
- **fix(usage)**: Include cache read + cache creation tokens in usage history input totals for accurate analytics (#477, @prakersh)
- **fix(callLogs)**: Support Claude format usage fields (`input_tokens`/`output_tokens`) alongside OpenAI format, include all cache token variants (#476, @prakersh)

---

## [2.8.0] — 2026-03-19

> Sprint: Bailian Coding Plan provider with editable base URLs, plus community contributions for Alibaba Cloud and Kimi Coding.

### विशेषताएं

- **feat(providers)**: Added Bailian Coding Plan (`bailian-coding-plan`) — Alibaba Model Studio with Anthropic-compatible API. Static catalog of 8 models including Qwen3.5 Plus, Qwen3 Coder, MiniMax M2.5, GLM 5, and Kimi K2.5. Includes custom auth validation (400=valid, 401/403=invalid) (#467, @Mind-Dragon)
- **feat(admin)**: Editable default URL in Provider Admin create/edit flows — users can configure custom base URLs per connection. Persisted in `providerSpecificData.baseUrl` with Zod schema validation rejecting non-http(s) schemes (#467)

### 🧪 Tests

- Added 30+ unit tests and 2 e2e scenarios for Bailian Coding Plan provider covering auth validation, schema hardening, route-level behavior, and cross-layer integration

---

## [2.7.10] — 2026-03-19

> Sprint: Two new community-contributed providers (Alibaba Cloud Coding, Kimi Coding API-key) and Docker pino fix.

### विशेषताएं

- **feat(providers)**: Added Alibaba Cloud Coding Plan support with two OpenAI-compatible endpoints — `alicode` (China) and `alicode-intl` (International), each with 8 models (#465, @dtk1985)
- **feat(providers)**: Added dedicated `kimi-coding-apikey` provider path — API-key-based Kimi Coding access is no longer forced through OAuth-only `kimi-coding` route. Includes registry, constants, models API, config, and validation test (#463, @Mind-Dragon)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(docker)**: Added missing `split2` dependency to Docker image — `pino-abstract-transport` requires it at runtime but it was not being copied into the standalone container, causing `Cannot find module 'split2'` crashes (#459)

---

## [2.7.9] — 2026-03-18

> Sprint: Codex responses subpath passthrough natively supported, Windows MITM crash fixed, and Combos agent schemas adjusted.

### विशेषताएं

- **feat(codex)**: Native responses subpath passthrough for Codex — natively routes `POST /v1/responses/compact` to Codex upstream, maintaining Claude Code compatibility without stripping the `/compact` suffix (#457)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(combos)**: Zod schemas (`updateComboSchema` and `createComboSchema`) now include `system_message`, `tool_filter_regex`, and `context_cache_protection`. Fixes bug where agent-specific settings created via the dashboard were silently discarded by the backend validation layer (#458)
- **fix(mitm)**: Kiro MITM profile crash on Windows fixed — `node-machine-id` failed due to missing `REG.exe` env, and the fallback threw a fatal `crypto is not defined` error. Fallback now safely and correctly imports crypto (#456)

---

## [2.7.8] — 2026-03-18

> Sprint: Budget save bug + combo agent features UI + omniModel tag security fix.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(budget)**: "Save Limits" no longer returns 422 — `warningThreshold` is now correctly sent as fraction (0–1) instead of percentage (0–100) (#451)
- **fix(combos)**: `<omniModel>` internal cache tag is now stripped before forwarding requests to providers, preventing cache session breaks (#454)

### विशेषताएं

- **feat(combos)**: Agent Features section added to combo create/edit modal — expose `system_message` override, `tool_filter_regex`, and `context_cache_protection` directly from the dashboard (#454)

---

## [2.7.7] — 2026-03-18

> Sprint: Docker pino crash, Codex CLI responses worker fix, package-lock sync.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(docker)**: `pino-abstract-transport` and `pino-pretty` now explicitly copied in Docker runner stage — Next.js standalone trace misses these peer deps, causing `Cannot find module pino-abstract-transport` crash on startup (#449)
- **fix(responses)**: Remove `initTranslators()` from `/v1/responses` route — was crashing Next.js worker with `the worker has exited` uncaughtException on Codex CLI requests (#450)

### 🔧 Maintenance

- **chore(deps)**: `package-lock.json` now committed on every version bump to ensure Docker `npm ci` uses exact dependency versions

---

## [2.7.5] — 2026-03-18

> Sprint: UX improvements and Windows CLI healthcheck fix.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(ux)**: Show default password hint on login page — new users now see `"Default password: 123456"` below the password input (#437)
- **fix(cli)**: Claude CLI and other npm-installed tools now correctly detected as runnable on Windows — spawn uses `shell:true` to resolve `.cmd` wrappers via PATHEXT (#447)

---

## [2.7.4] — 2026-03-18

> Sprint: Search Tools dashboard, i18n fixes, Copilot limits, Serper validation fix.

### विशेषताएं

- **feat(search)**: Add Search Playground (10th endpoint), Search Tools page with Compare Providers/Rerank Pipeline/Search History, local rerank routing, auth guards on search API (#443 by @Regis-RCR)
  - New route: `/dashboard/search-tools`
  - Sidebar entry under Debug section
  - `GET /api/search/providers` and `GET /api/search/stats` with auth guards
  - Local provider_nodes routing for `/v1/rerank`
  - 30+ i18n keys in search namespace

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(search)**: Fix Brave news normalizer (was returning 0 results), enforce max_results truncation post-normalization, fix Endpoints page fetch URL (#443 by @Regis-RCR)
- **fix(analytics)**: Localize analytics day/date labels — replace hardcoded Portuguese strings with `Intl.DateTimeFormat(locale)` (#444 by @hijak)
- **fix(copilot)**: Correct GitHub Copilot account type display, filter misleading unlimited quota rows from limits dashboard (#445 by @hijak)
- **fix(providers)**: Stop rejecting valid Serper API keys — treat non-4xx responses as valid authentication (#446 by @hijak)

---

## [2.7.3] — 2026-03-18

> Sprint: Codex direct API quota fallback fix.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(codex)**: Block weekly-exhausted accounts in direct API fallback (#440)
  - `resolveQuotaWindow()` prefix matching: `"weekly"` now matches `"weekly (7d)"` cache keys
  - `applyCodexWindowPolicy()` enforces `useWeekly`/`use5h` toggles correctly
  - 4 new regression tests (766 total)

---

## [2.7.2] — 2026-03-18

> Sprint: Light mode UI contrast fixes.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(logs)**: Fix light mode contrast in request logs filter buttons and combo badge (#378)
  - Error/Success/Combo filter buttons now readable in light mode
  - Combo row badge uses stronger violet in light mode

---

## [2.7.1] — 2026-03-17

> Sprint: Unified web search routing (POST /v1/search) with 5 providers + Next.js 16.1.7 security fixes (6 CVEs).

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **feat(search)**: Unified web search routing — `POST /v1/search` with 5 providers (Serper, Brave, Perplexity, Exa, Tavily)
  - Auto-failover across providers, 6,500+ free searches/month
  - In-memory cache with request coalescing (configurable TTL)
  - Dashboard: Search Analytics tab in `/dashboard/analytics` with provider breakdown, cache hit rate, cost tracking
  - New API: `GET /api/v1/search/analytics` for search request statistics
  - DB migration: `request_type` column on `call_logs` for non-chat request tracking
  - Zod validation (`v1SearchSchema`), auth-gated, cost recorded via `recordCost()`

### सुरक्षा

- **deps**: Next.js 16.1.6 → 16.1.7 — fixes 6 CVEs:
  - **Critical**: CVE-2026-29057 (HTTP request smuggling via http-proxy)
  - **High**: CVE-2026-27977, CVE-2026-27978 (WebSocket + Server Actions)
  - **Medium**: CVE-2026-27979, CVE-2026-27980, CVE-2026-jcc7

### 📁 New Files

| File                                                             | Purpose                                    |
| ---------------------------------------------------------------- | ------------------------------------------ |
| `open-sse/handlers/search.ts`                                    | Search handler with 5-provider routing     |
| `open-sse/config/searchRegistry.ts`                              | Provider registry (auth, cost, quota, TTL) |
| `open-sse/services/searchCache.ts`                               | In-memory cache with request coalescing    |
| `src/app/api/v1/search/route.ts`                                 | Next.js route (POST + GET)                 |
| `src/app/api/v1/search/analytics/route.ts`                       | Search stats API                           |
| `src/app/(dashboard)/dashboard/analytics/SearchAnalyticsTab.tsx` | Analytics dashboard tab                    |
| `src/lib/db/migrations/007_search_request_type.sql`              | DB migration                               |
| `tests/unit/search-registry.test.mjs`                            | 277 lines of unit tests                    |

---

## [2.7.0] — 2026-03-17

> Sprint: ClawRouter-inspired features — toolCalling flag, multilingual intent detection, benchmark-driven fallback, request deduplication, pluggable RouterStrategy, Grok-4 Fast + GLM-5 + MiniMax M2.5 + Kimi K2.5 pricing.

### ✨ New Models & Pricing

- **feat(pricing)**: xAI Grok-4 Fast — `$0.20/$0.50 per 1M tokens`, 1143ms p50 latency, tool calling supported
- **feat(pricing)**: xAI Grok-4 (standard) — `$0.20/$1.50 per 1M tokens`, reasoning flagship
- **feat(pricing)**: GLM-5 via Z.AI — `$0.5/1M`, 128K output context
- **feat(pricing)**: MiniMax M2.5 — `$0.30/1M input`, reasoning + agentic tasks
- **feat(pricing)**: DeepSeek V3.2 — updated pricing `$0.27/$1.10 per 1M`
- **feat(pricing)**: Kimi K2.5 via Moonshot API — direct Moonshot API access
- **feat(providers)**: Z.AI provider added (`zai` alias) — GLM-5 family with 128K output

### 🧠 Routing Intelligence

- **feat(registry)**: `toolCalling` flag per model in provider registry — combos can now prefer/require tool-calling capable models
- **feat(scoring)**: Multilingual intent detection for AutoCombo scoring — PT/ZH/ES/AR script/language patterns influence model selection per request context
- **feat(fallback)**: Benchmark-driven fallback chains — real latency data (p50 from `comboMetrics`) used to re-order fallback priority dynamically
- **feat(dedup)**: Request deduplication via content-hash — 5-second idempotency window prevents duplicate provider calls from retrying clients
- **feat(router)**: Pluggable `RouterStrategy` interface in `autoCombo/routerStrategy.ts` — custom routing logic can be injected without modifying core

### 🔧 MCP Server Improvements

- **feat(mcp)**: 2 new advanced tool schemas: `omniroute_get_provider_metrics` (p50/p95/p99 per provider) and `omniroute_explain_route` (routing decision explanation)
- **feat(mcp)**: MCP tool auth scopes updated — `metrics:read` scope added for provider metrics tools
- **feat(mcp)**: `omniroute_best_combo_for_task` now accepts `languageHint` parameter for multilingual routing

### 📊 Observability

- **feat(metrics)**: `comboMetrics.ts` extended with real-time latency percentile tracking per provider/account
- **feat(health)**: Health API (`/api/monitoring/health`) now returns per-provider `p50Latency` and `errorRate` fields
- **feat(usage)**: Usage history migration for per-model latency tracking

### 🗄️ DB Migrations

- **feat(migrations)**: New column `latency_p50` in `combo_metrics` table — zero-breaking, safe for existing users

### 🐛 Bug Fixes / Closures

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **close(#411)**: better-sqlite3 hashed module resolution on Windows — fixed in v2.6.10 (f02c5b5)
- **close(#409)**: GitHub Copilot chat completions fail with Claude models when files attached — fixed in v2.6.9 (838f1d6)
- **close(#405)**: Duplicate of #411 — resolved

## [2.6.10] — 2026-03-17

> Windows fix: better-sqlite3 prebuilt download without node-gyp/Python/MSVC (#426).

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(install/#426)**: On Windows, `npm install -g omniroute` used to fail with `better_sqlite3.node is not a valid Win32 application` because the bundled native binary was compiled for Linux. Adds **Strategy 1.5** to `scripts/postinstall.mjs`: uses `@mapbox/node-pre-gyp install --fallback-to-build=false` (bundled within `better-sqlite3`) to download the correct prebuilt binary for the current OS/arch without requiring any build tools (no node-gyp, no Python, no MSVC). Falls back to `npm rebuild` only if the download fails. Adds platform-specific error messages with clear manual fix instructions.

---

## [2.6.9] — 2026-03-17

> CI fixes (t11 any-budget), bug fix #409 (file attachments via Copilot+Claude), release workflow correction.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(ci)**: Remove word "any" from comments in `openai-responses.ts` and `chatCore.ts` that were failing the t11 `any` budget check (false positive from regex counting comments)
- **fix(chatCore)**: Normalize unsupported content part types before forwarding to providers (#409 — Cursor sends `{type:"file"}` when `.md` files are attached; Copilot and other OpenAI-compat providers reject with "type has to be either 'image_url' or 'text'"; fix converts `file`/`document` blocks to `text` and drops unknown types)

### 🔧 Workflow

- **chore(generate-release)**: Add ATOMIC COMMIT RULE — version bump (`npm version patch`) MUST happen before committing feature files to ensure tag always points to a commit containing all version changes together

---

## [2.6.8] — 2026-03-17

> Sprint: Combo as Agent (system prompt + tool filter), Context Caching Protection, Auto-Update, Detailed Logs, MITM Kiro IDE.

### 🗄️ DB Migrations (zero-breaking — safe for existing users)

- **005_combo_agent_fields.sql**: `ALTER TABLE combos ADD COLUMN system_message TEXT DEFAULT NULL`, `tool_filter_regex TEXT DEFAULT NULL`, `context_cache_protection INTEGER DEFAULT 0`
- **006_detailed_request_logs.sql**: New `request_detail_logs` table with 500-entry ring-buffer trigger, opt-in via settings toggle

### विशेषताएं

- **feat(combo)**: System Message Override per Combo (#399 — `system_message` field replaces or injects system prompt before forwarding to provider)
- **feat(combo)**: Tool Filter Regex per Combo (#399 — `tool_filter_regex` keeps only tools matching pattern; supports OpenAI + Anthropic formats)
- **feat(combo)**: Context Caching Protection (#401 — `context_cache_protection` tags responses with `<omniModel>provider/model</omniModel>` and pins model for session continuity)
- **feat(settings)**: Auto-Update via Settings (#320 — `GET /api/system/version` + `POST /api/system/update` — checks npm registry and updates in background with pm2 restart)
- **feat(logs)**: Detailed Request Logs (#378 — captures full pipeline bodies at 4 stages: client request, translated request, provider response, client response — opt-in toggle, 64KB trim, 500-entry ring-buffer)
- **feat(mitm)**: MITM Kiro IDE profile (#336 — `src/mitm/targets/kiro.ts` targets api.anthropic.com, reuses existing MITM infrastructure)

---

## [2.6.7] — 2026-03-17

> Sprint: SSE improvements, local provider_nodes extensions, proxy registry, Claude passthrough fixes.

### विशेषताएं

- **feat(health)**: Background health check for local `provider_nodes` with exponential backoff (30s→300s) and `Promise.allSettled` to avoid blocking (#423, @Regis-RCR)
- **feat(embeddings)**: Route `/v1/embeddings` to local `provider_nodes` — `buildDynamicEmbeddingProvider()` with hostname validation (#422, @Regis-RCR)
- **feat(audio)**: Route TTS/STT to local `provider_nodes` — `buildDynamicAudioProvider()` with SSRF protection (#416, @Regis-RCR)
- **feat(proxy)**: Proxy registry, management APIs, and quota-limit generalization (#429, @Regis-RCR)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(sse)**: Strip Claude-specific fields (`metadata`, `anthropic_version`) when target is OpenAI-compat (#421, @prakersh)
- **fix(sse)**: Extract Claude SSE usage (`input_tokens`, `output_tokens`, cache tokens) in passthrough stream mode (#420, @prakersh)
- **fix(sse)**: Generate fallback `call_id` for tool calls with missing/empty IDs (#419, @prakersh)
- **fix(sse)**: Claude-to-Claude passthrough — forward body completely untouched, no re-translation (#418, @prakersh)
- **fix(sse)**: Filter orphaned `tool_result` items after Claude Code context compaction to avoid 400 errors (#417, @prakersh)
- **fix(sse)**: Skip empty-name tool calls in Responses API translator to prevent `placeholder_tool` infinite loops (#415, @prakersh)
- **fix(sse)**: Strip empty text content blocks before translation (#427, @prakersh)
- **fix(api)**: Add `refreshable: true` to Claude OAuth test config (#428, @prakersh)

### 📦 Dependencies

- Bump `vitest`, `@vitest/*` and related devDependencies (#414, @dependabot)

---

## [2.6.6] — 2026-03-17

> Hotfix: Turbopack/Docker compatibility — remove `node:` protocol from all `src/` imports.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(build)**: Removed `node:` protocol prefix from `import` statements in 17 files under `src/`. The `node:fs`, `node:path`, `node:url`, `node:os` etc. imports caused `Ecmascript file had an error` on Turbopack builds (Next.js 15 Docker) and on upgrades from older npm global installs. Affected files: `migrationRunner.ts`, `core.ts`, `backup.ts`, `prompts.ts`, `dataPaths.ts`, and 12 others in `src/app/api/` and `src/lib/`.
- **chore(workflow)**: Updated `generate-release.md` to make Docker Hub sync and dual-VPS deploy **mandatory** steps in every release.

---

## [2.6.5] — 2026-03-17

> Sprint: reasoning model param filtering, local provider 404 fix, Kilo Gateway provider, dependency bumps.

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **feat(api)**: Added **Kilo Gateway** (`api.kilo.ai`) as a new API Key provider (alias `kg`) — 335+ models, 6 free models, 3 auto-routing models (`kilo-auto/frontier`, `kilo-auto/balanced`, `kilo-auto/free`). Passthrough models supported via `/api/gateway/models` endpoint. (PR #408 by @Regis-RCR)

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(sse)**: Strip unsupported parameters for reasoning models (o1, o1-mini, o1-pro, o3, o3-mini). Models in the `o1`/`o3` family reject `temperature`, `top_p`, `frequency_penalty`, `presence_penalty`, `logprobs`, `top_logprobs`, and `n` with HTTP 400. Parameters are now stripped at the `chatCore` layer before forwarding. Uses a declarative `unsupportedParams` field per model and a precomputed O(1) Map for lookup. (PR #412 by @Regis-RCR)
- **fix(sse)**: Local provider 404 now results in a **model-only lockout (5 seconds)** instead of a connection-level lockout (2 minutes). When a local inference backend (Ollama, LM Studio, oMLX) returns 404 for an unknown model, the connection remains active and other models continue working immediately. Also fixes a pre-existing bug where `model` was not passed to `markAccountUnavailable()`. Local providers detected via hostname (`localhost`, `127.0.0.1`, `::1`, extensible via `LOCAL_HOSTNAMES` env var). (PR #410 by @Regis-RCR)

### 📦 Dependencies

- `better-sqlite3` 12.6.2 → 12.8.0
- `undici` 7.24.2 → 7.24.4
- `https-proxy-agent` 7 → 8
- `agent-base` 7 → 8

---
=======
-**#521**— पासवर्ड सेटअप छोड़ने के बाद लॉगिन अब अटकता नहीं है (ऑनबोर्डिंग पर रीडायरेक्ट करता है) -**#522**— एपीआई प्रबंधक: भ्रामक "कॉपी मास्क्ड कुंजी" बटन को हटा दिया गया (लॉक आइकन टूलटिप के साथ प्रतिस्थापित) -**#527**- क्लाउड कोड + कोडेक्स सुपरपावर लूप: `टूल_रिजल्ट` ब्लॉक अब हटाए जाने के बजाय टेक्स्ट में परिवर्तित हो गए हैं -**#532**- OpenCode GO API कुंजी सत्यापन अब सही `zen/v1` समापन बिंदु (`testKeyBaseUrl`) का उपयोग करता है -**#489**— एंटीग्रेविटी: गायब `googleProjectId` पुन: कनेक्ट मार्गदर्शन के साथ संरचित 422 त्रुटि देता है -**#510**— विंडोज़: एमएसवाईएस2/गिट-बैश पथ (`/सी/प्रोग्राम फ़ाइलें/...`) अब `सी:\प्रोग्राम फ़ाइलें\...` के लिए सामान्यीकृत हैं -**#492**— `omniroute` सीएलआई अब `mise`/`nvm` का पता लगाता है जब `app/server.js` गायब होता है और लक्षित समाधान दिखाता है### दस्तावेज़

-**#513**- डॉकर पासवर्ड रीसेट: `INITIAL_PASSWORD` env var वर्कअराउंड दस्तावेजित -**#520**- पीएनपीएम: `पीएनपीएम अप्रूव-बिल्ड्स बेटर-स्क्लाइट3` प्रलेखित### ✅ Closed Issues

#489, #492, #510, #513, #520, #521, #522, #525, #527, #532---

## [2.9.5] — 2026-03-22

> स्प्रिंट: नए ओपनकोड प्रदाता, एम्बेडिंग क्रेडेंशियल फिक्स, सीएलआई मास्कड कुंजी बग, CACHE_TAG_PATTERN फिक्स।### 🐛 Bug Fixes

-**सीएलआई उपकरण कॉन्फ़िगरेशन फ़ाइलों में मास्क्ड एपीआई कुंजी को सहेजते हैं**- `क्लाउड-सेटिंग्स`, `क्लाइन-सेटिंग्स`, और `ओपनक्लाव-सेटिंग्स` पोस्ट रूट अब एक `कीआईडी` पैरामीटर स्वीकार करते हैं और डिस्क पर लिखने से पहले डीबी से वास्तविक एपीआई कुंजी को हल करते हैं। मास्क्ड डिस्प्ले स्ट्रिंग के बजाय `keyId` भेजने के लिए `ClaudeToolCard` को अपडेट किया गया। #523, #526 ठीक करता है। -**कस्टम एम्बेडिंग प्रदाता: `कोई क्रेडेंशियल नहीं` त्रुटि**- `/v1/embeddings` अब रूटिंग उपसर्ग से अलग `credentialsProviderId` को ट्रैक करता है, इसलिए क्रेडेंशियल सार्वजनिक उपसर्ग स्ट्रिंग के बजाय मिलान प्रदाता नोड आईडी से प्राप्त किए जाते हैं। एक प्रतिगमन को ठीक करता है जहां `google/gemini-embedding-001` और समान कस्टम-प्रदाता मॉडल हमेशा क्रेडेंशियल त्रुटि के साथ विफल हो जाएंगे। #532-संबंधित को ठीक करता है। (पीआर #528 @jacob2826 द्वारा) -**संदर्भ कैश सुरक्षा रेगेक्स चूक गया `
` उपसर्ग**- `comboAgentMiddleware.ts` में `CACHE_TAG_PATTERN` को दोनों शाब्दिक `से मेल खाने के लिए अपडेट किया गया` (बैकस्लैश-एन) और वास्तविक न्यूलाइन U+000A जो `combo.ts` स्ट्रीमिंग फिक्स #515 के बाद `<omniModel>` टैग के आसपास इंजेक्ट होती है। #531 ठीक करता है।### ✨ New Providers

-**ओपनकोड ज़ेन**- 3 मॉडलों के साथ `opencode.ai/zen/v1` पर निःशुल्क स्तरीय गेटवे: `मिनीमैक्स-एम2.5-फ़्री`, `बिग-पिकल`, `जीपीटी-5-नैनो` -**OpenCode Go**- 4 मॉडलों के साथ `opencode.ai/zen/go/v1` पर सदस्यता सेवा: `glm-5`, `kimi-k2.5`, `minimax-m2.7` (क्लाउड प्रारूप), `minimax-m2.5` (क्लाउड प्रारूप)

- दोनों प्रदाता नए `OpencodeExecutor` का उपयोग करते हैं जो अनुरोधित मॉडल के आधार पर गतिशील रूप से `/chat/completions`, `/messages`, `/responses`, या `/models/{model}:generateContent` पर रूट करता है। (पीआर #530 @कांग-हेवोन द्वारा)---

## [2.9.4] — 2026-03-21

> स्प्रिंट: बग फिक्स - कोडेक्स प्रॉम्प्ट कैश कुंजी को संरक्षित करें, टैगकंटेंट JSON से बचने को ठीक करें, समाप्त टोकन स्थिति को डीबी में सिंक करें।### 🐛 Bug Fixes

-**फिक्स (अनुवादक)**: प्रतिक्रिया एपीआई में `prompt_cache_key` को सुरक्षित रखें → चैट समापन अनुवाद (#517)

- फ़ील्ड कोडेक्स द्वारा उपयोग किया जाने वाला कैश-एफ़िनिटी सिग्नल है; इसे अलग करने से त्वरित कैश हिट को रोका जा रहा था।
  `openai-responses.ts` और `responsesApiHelper.ts` में ठीक किया गया।

-**फिक्स(कॉम्बो)**: एस्केप `
``tagContent` में इसलिए इंजेक्ट की गई JSON स्ट्रिंग मान्य है (#515)

- टेम्प्लेट शाब्दिक न्यूलाइन्स (U+000A) को JSON स्ट्रिंग मानों के अंदर अनएस्केप्ड की अनुमति नहीं है।
  `open-sse/services/combo.ts` में `\n` शाब्दिक अनुक्रमों से प्रतिस्थापित।

-**ठीक करें(उपयोग)**: लाइव प्रमाणीकरण विफलता पर समाप्त हो चुकी टोकन स्थिति को डीबी में वापस सिंक करें (#491)

- जब सीमाएं और कोटा लाइव चेक 401/403 लौटाता है, तो कनेक्शन `टेस्टस्टैटस` अब अपडेट हो जाता है
  डेटाबेस में ''समाप्त'' हो गया है, इसलिए प्रदाता पृष्ठ उसी ख़राब स्थिति को दर्शाता है।
  `src/app/api/usage/[connectionId]/route.ts` में ठीक किया गया।---

## [2.9.3] — 2026-03-21

> स्प्रिंट: 5 नए मुफ्त एआई प्रदाता जोड़ें - लॉन्गकैट, पोलिनेशन्स, क्लाउडफ्लेयर एआई, स्केलवे, एआई/एमएल एपीआई।### ✨ New Providers

-**फीचर(प्रदाता/लॉन्गकैट)**: लॉन्गकैट एआई जोड़ें (`एलसी/`) - सार्वजनिक बीटा के दौरान 50M टोकन/दिन मुफ्त (फ्लैश-लाइट) + 500K/दिन (चैट/थिंकिंग)। ओपनएआई-संगत, मानक बियरर प्रमाणीकरण। -**फीचर(प्रदाता/परागण)**: परागण एआई (`पोल/`) जोड़ें - कोई एपीआई कुंजी की आवश्यकता नहीं है। प्रॉक्सी जीपीटी-5, क्लाउड, जेमिनी, डीपसीक वी3, लामा 4 (1 अनुरोध/15 सेकंड मुफ़्त)। कस्टम निष्पादक वैकल्पिक प्रमाणीकरण संभालता है। -**करतब(प्रदाता/क्लाउडफ्लेयर-एआई)**: क्लाउडफ्लेयर वर्कर्स एआई जोड़ें (`सीएफ/`) - 10 हजार न्यूरॉन्स/दिन मुफ्त (~150 एलएलएम प्रतिक्रियाएं या 500 व्हिस्पर ऑडियो)। वैश्विक बढ़त पर 50+ मॉडल। कस्टम निष्पादक क्रेडेंशियल्स से `accountId` के साथ डायनामिक URL बनाता है। -**फीचर(प्रदाता/स्केलवे)**: स्केलवे जेनरेटिव एपीआई जोड़ें (`scw/`) - नए खातों के लिए 1M निःशुल्क टोकन। EU/GDPR अनुरूप (पेरिस)। क्वेन3 235बी, लामा 3.1 70बी, मिस्ट्रल स्मॉल 3.2। -**फीचर(प्रदाता/उद्देश्य)**: एआई/एमएल एपीआई जोड़ें (`एआईएमएल/`) - $0.025/दिन मुफ्त क्रेडिट, 200+ मॉडल (जीपीटी-4ओ, क्लाउड, जेमिनी, लामा) एकल एग्रीगेटर एंडपॉइंट के माध्यम से।### 🔄 Provider Updates

-**करतब (प्रदाता/एक साथ)**: `hasFree: true` + 3 स्थायी रूप से निःशुल्क मॉडल आईडी जोड़ें: `Llama-3.3-70B-Instruct-Turbo-Free`, `Llama-Vision-Free`, `DeepSeek-R1-Distill-Llama-70B-Free` -**फीचर (प्रदाता/मिथुन)**: `hasFree: true` + `freeNote` जोड़ें (1,500 अनुरोध/दिन, क्रेडिट कार्ड की आवश्यकता नहीं, aistudio.google.com) -**कोर(प्रदाता/मिथुन)**: स्पष्टता के लिए प्रदर्शन नाम का नाम बदलकर `मिथुन (Google AI स्टूडियो)` कर दें### ⚙️ Infrastructure

-**करतब (निष्पादक/परागण)**: नया `परागण निष्पादक` - कोई एपीआई कुंजी प्रदान नहीं किए जाने पर `प्राधिकरण` शीर्षलेख को छोड़ देता है -**feat(executors/cloudflare-ai)**: नया `CloudflareAIExecutor` - डायनामिक URL निर्माण के लिए प्रदाता क्रेडेंशियल्स में `accountId` की आवश्यकता होती है -**करतब (निष्पादक)**: `परागण`, `पोल`, `क्लाउडफ्लेयर-एआई`, `सीएफ` निष्पादक मैपिंग पंजीकृत करें### दस्तावेज़

-**दस्तावेज़(रीडमी)**: 11 प्रदाताओं के लिए मुफ्त कॉम्बो स्टैक का विस्तार ($0 हमेशा के लिए) -**दस्तावेज़(रीडमी)**: मॉडल तालिकाओं के साथ 4 नए मुफ़्त प्रदाता अनुभाग (लॉन्गकैट, परागण, क्लाउडफ़ेयर एआई, स्केलवे) जोड़े गए -**दस्तावेज़(रीडमी)**: 4 नई फ्री टियर पंक्तियों के साथ अद्यतन मूल्य निर्धारण तालिका -**दस्तावेज़(i18n/pt-BR)**: अद्यतन मूल्य निर्धारण तालिका + पुर्तगाली में लॉन्गकैट/परागण/क्लाउडफ्लेयर एआई/स्केलवे अनुभाग जोड़े गए -**docs(new-features/ai)**: 10 कार्य विशिष्टता फ़ाइलें + `docs/new-features/ai/` में मास्टर कार्यान्वयन योजना### 🧪 Tests

- टेस्ट सूट:**821 परीक्षण, 0 विफलताएँ**(अपरिवर्तित)---

## [2.9.2] — 2026-03-21

> स्प्रिंट: मीडिया ट्रांसक्रिप्शन (डीपग्राम/हगिंगफेस कंटेंट-टाइप, भाषा पहचान) और टीटीएस त्रुटि डिस्प्ले को ठीक करें।### 🐛 Bug Fixes

-**फिक्स (ट्रांसक्रिप्शन)**: डीपग्राम और हगिंगफेस ऑडियो ट्रांसक्रिप्शन अब `वीडियो/mp4` → `ऑडियो/mp4` और अन्य मीडिया MIME प्रकारों को नए `resolveAudioContentType()` हेल्पर के माध्यम से सही ढंग से मैप करता है। पहले, `.mp4` फ़ाइलें अपलोड करने पर लगातार "कोई भाषण नहीं मिला" लौटाया जाता था क्योंकि डीपग्राम को `सामग्री-प्रकार: वीडियो/mp4` प्राप्त हो रहा था। -**फिक्स (ट्रांसक्रिप्शन)**: डीपग्राम अनुरोधों में `डिटेक्ट_लैंग्वेज = ट्रू` जोड़ा गया - डिफ़ॉल्ट रूप से अंग्रेजी के बजाय ऑडियो भाषा (पुर्तगाली, स्पेनिश, आदि) का स्वतः पता लगाता है। खाली या बेकार परिणाम देने वाले गैर-अंग्रेज़ी ट्रांस्क्रिप्शन को ठीक करता है। -**फिक्स (ट्रांसक्रिप्शन)**: सही विराम चिह्न के साथ उच्च गुणवत्ता वाले ट्रांसक्रिप्शन आउटपुट के लिए डीपग्राम अनुरोधों में `punctuate=true` जोड़ा गया। -**फिक्स(tts)**: `[ऑब्जेक्ट ऑब्जेक्ट]` टेक्स्ट-टू-स्पीच प्रतिक्रियाओं में त्रुटि प्रदर्शन `audioSpeech.ts` और `audioTranscription.ts` दोनों में ठीक किया गया। `upstreamErrorResponse()` फ़ंक्शन अब ElevenLabs जैसे प्रदाताओं से नेस्टेड स्ट्रिंग संदेशों को सही ढंग से निकालता है जो एक फ्लैट त्रुटि स्ट्रिंग के बजाय `{ त्रुटि: {संदेश: "...", status_code: 401 } }` लौटाता है।### 🧪 Tests

- टेस्ट सूट:**821 परीक्षण, 0 विफलताएँ**(अपरिवर्तित)### Triaged Issues

-**#508**- टूल कॉल प्रारूप प्रतिगमन: अनुरोधित प्रॉक्सी लॉग और प्रदाता श्रृंखला जानकारी (`ज़रूरत-जानकारी`) -**#510**- विंडोज सीएलआई स्वास्थ्य जांच पथ: अनुरोधित शेल/नोड संस्करण जानकारी (`ज़रूरत-जानकारी`) -**#485**- किरो एमसीपी टूल कॉल: बाहरी किरो मुद्दे के रूप में बंद (ओम्नीरूट नहीं) -**#442**— बेसटेन/मॉडल एंडपॉइंट: बंद (प्रलेखित मैनुअल वर्कअराउंड) -**#464**— मुख्य प्रावधान एपीआई: रोडमैप आइटम के रूप में स्वीकार किया गया---

## [2.9.1] — 2026-03-21

> स्प्रिंट: एसएसई ओमनीमॉडल डेटा हानि को ठीक करें, प्रति-प्रोटोकॉल मॉडल संगतता को मर्ज करें।### Bug Fixes

-**#511**— गंभीर: `<omniModel>` टैग एसएसई स्ट्रीम में `finish_reason:stop` के बाद भेजा गया था, जिससे डेटा हानि हुई। टैग को अब पहले गैर-रिक्त सामग्री खंड में इंजेक्ट किया गया है, जो एसडीके द्वारा कनेक्शन बंद करने से पहले डिलीवरी की गारंटी देता है।### Merged PRs

-**PR #512**(@zhangqiang8vip): प्रति-प्रोटोकॉल मॉडल अनुकूलता - `normizeToolCallId` और `preserveOpenAIDeveloperRole` को अब प्रति क्लाइंट प्रोटोकॉल (OpenAI, क्लाउड, रिस्पॉन्स API) के अनुसार कॉन्फ़िगर किया जा सकता है। ज़ॉड सत्यापन के साथ मॉडल कॉन्फ़िगरेशन में नया `compatByProtocol` फ़ील्ड।### Triaged Issues

-**#510**— विंडोज़ सीएलआई हेल्थचेक_फ़ेल: अनुरोधित पथ/संस्करण जानकारी -**#509**— टर्बोपैक इलेक्ट्रॉन प्रतिगमन: अपस्ट्रीम नेक्स्ट.जेएस बग, दस्तावेजी समाधान -**#508**- macOS ब्लैक स्क्रीन: सुझाया गया `--disable-gpu` समाधान---

## [2.9.0] — 2026-03-20

> स्प्रिंट: क्रॉस-प्लेटफ़ॉर्म मशीनआईडी फिक्स, प्रति-एपीआई-कुंजी दर सीमा, स्ट्रीमिंग संदर्भ कैश, अलीबाबा डैशस्कोप, सर्च एनालिटिक्स, ZWS v5, और 8 मुद्दे बंद।### ✨ New Features

-**फीचर(खोज)**: `/डैशबोर्ड/एनालिटिक्स` में एनालिटिक्स टैब खोजें - प्रदाता विश्लेषण, कैश हिट दर, लागत ट्रैकिंग। नया एपीआई: `GET /api/v1/search/analytics` (#feat/search-provider-routing) -**फीट (प्रदाता)**: अलीबाबा क्लाउड डैशस्कोप को कस्टम एंडपॉइंट पथ सत्यापन के साथ जोड़ा गया - कॉन्फ़िगर करने योग्य `चैटपाथ` और `मॉडलपाथ` प्रति नोड (#फीट/कस्टम-एंडपॉइंट-पाथ) -**feat(api)**: प्रति-एपीआई-कुंजी अनुरोध-गणना सीमाएं - `max_requests_per_day` और `max_requests_per_मिनट` कॉलम इन-मेमोरी स्लाइडिंग-विंडो प्रवर्तन के साथ HTTP 429 लौटाते हैं (#452) -**feat(dev)**: ZWS v5 - HMR लीक फिक्स (485 DB कनेक्शन → 1), मेमोरी 2.4GB → 195MB, `ग्लोबलदिस` सिंगलटन, एज रनटाइम चेतावनी फिक्स (@ zhangqiang8vip)### 🐛 Bug Fixes

-**फिक्स(#506)**: क्रॉस-प्लेटफ़ॉर्म `मशीनआईडी` - `getMachineIdRaw()` को ट्राई/कैच वॉटरफॉल के साथ फिर से लिखा गया (Windows REG.exe → macOS ioreg → Linux फ़ाइल पढ़ें → होस्टनाम → `os.hostname()`)। `process.platform` ब्रांचिंग को समाप्त करता है जो Next.js बंडलर डेड-कोड-समाप्त होता है, विंडोज़ पर ``head' is not पहचाना गया' को ठीक करता है। #466 को भी ठीक करता है।
-**फिक्स(#493)**: कस्टम प्रदाता मॉडल नामकरण - `DefaultExecutor.transformRequest()`में गलत उपसर्ग स्ट्रिपिंग को हटा दिया गया, जिससे`zai-org/GLM-5-FP8`जैसी ऑर्ग-स्कोप्ड मॉडल आईडी खराब हो गईं।
-**फिक्स(#490)**: स्ट्रीमिंग + संदर्भ कैश सुरक्षा -`ट्रांसफॉर्मस्ट्रीम`SSE को`<omniModel>`टैग को`[DONE]`मार्कर से पहले इंजेक्ट करने के लिए रोकता है, जिससे स्ट्रीमिंग प्रतिक्रियाओं के लिए संदर्भ कैश सुरक्षा सक्षम होती है।
-**फिक्स(#458)**: कॉम्बो स्कीमा सत्यापन -`system_message`, `tool_filter_regex`, `context_cache_protection`फ़ील्ड अब सेव पर ज़ॉड सत्यापन पास करते हैं।
-**फिक्स(#487)**: किरो एमआईटीएम कार्ड क्लीनअप - ZWS_README को हटा दिया गया, डायनामिक टूल मेटाडेटा का उपयोग करने के लिए`एंटीग्रेविटीटूलकार्ड` तैयार किया गया।### 🧪 Tests

- एंथ्रोपिक-प्रारूप उपकरण फ़िल्टर यूनिट परीक्षण जोड़े गए (पीआर #397) - `.function` रैपर के बिना `tool.name` के लिए 8 प्रतिगमन परीक्षण
- टेस्ट सूट:**821 परीक्षण, 0 विफलताएँ**(813 से ऊपर)### 📋 Issues Closed (8)

-**#506**— विंडोज़ मशीनआईडी `हेड` पहचाना नहीं गया (निश्चित) -**#493**— कस्टम प्रदाता मॉडल नामकरण (निश्चित) -**#490**— स्ट्रीमिंग संदर्भ कैश (निश्चित) -**#452**— प्रति-एपीआई-कुंजी अनुरोध सीमाएं (कार्यान्वित) -**#466**— विंडोज़ लॉगिन विफलता (#506 के समान मूल कारण) -**#504**— एमआईटीएम निष्क्रिय (अपेक्षित व्यवहार) -**#462**— जेमिनी सीएलआई पीएसए (समाधान) -**#434**— इलेक्ट्रॉन ऐप क्रैश (#402 का डुप्लिकेट)## [2.8.9] — 2026-03-20

> स्प्रिंट: सामुदायिक पीआर को मर्ज करें, किरो एमआईटीएम कार्ड को ठीक करें, निर्भरता अपडेट।### Merged PRs

-**पीआर #498**(@साजिद11194): विंडोज मशीन आईडी क्रैश (`अपरिभाषित\REG.exe`) को ठीक करें। `नोड-मशीन-आईडी` को मूल ओएस रजिस्ट्री प्रश्नों से बदल देता है।**#486 को बंद करता है।** -**पीआर #497**(@zhangqiang8vip): डेव-मोड एचएमआर संसाधन लीक को ठीक करें - 485 लीक डीबी कनेक्शन → 1, मेमोरी 2.4 जीबी → 195 एमबी। `ग्लोबलदिस` सिंगलटन, एज रनटाइम चेतावनी फिक्स, विंडोज परीक्षण स्थिरता। (22 फाइलों में +1168/-338) -**पीआर #499-503**(डिपेंडाबोट): गिटहब एक्शन अपडेट - `docker/build-push-action@7`, `actions/checkout@6`, `peter-evans/dockerhub-description@5`, `docker/setup-qemu-action@4`, `docker/login-action@4`।### Bug Fixes

-**#505**— KIRO MITM कार्ड अब एंटीग्रेविटी-विशिष्ट टेक्स्ट के बजाय टूल-विशिष्ट निर्देश (`api.anthropic.com`) प्रदर्शित करता है। -**#504**- यूएक्स स्पष्टीकरण के साथ उत्तर दिया गया (जब प्रॉक्सी नहीं चल रही हो तो एमआईटीएम "निष्क्रिय" अपेक्षित व्यवहार है)।---

## [2.8.8] — 2026-03-20

> स्प्रिंट: OAuth बैच परीक्षण क्रैश को ठीक करें, अलग-अलग प्रदाता पृष्ठों पर "सभी का परीक्षण करें" बटन जोड़ें।### Bug Fixes

-**OAuth बैच परीक्षण क्रैश**(ERR_CONNECTION_REFUSED): `Promise.race()` + `Promise.allSettled()` के माध्यम से 5-कनेक्शन समवर्ती सीमा + 30s प्रति-कनेक्शन टाइमआउट के साथ अनुक्रमिक फॉर-लूप को बदला गया। बड़े OAuth प्रदाता समूहों (~30+ कनेक्शन) का परीक्षण करते समय सर्वर क्रैश को रोकता है।### विशेषताएं

-**प्रदाता पृष्ठों पर "सभी का परीक्षण करें" बटन**: व्यक्तिगत प्रदाता पृष्ठ (उदाहरण के लिए, `/प्रदाता/कोडेक्स`) अब 2+ कनेक्शन होने पर कनेक्शन हेडर में एक "सभी का परीक्षण करें" बटन दिखाते हैं। `{मोड: "प्रदाता", प्रदाता आईडी}` के साथ `POST /api/providers/test-batch` का उपयोग करता है। परिणाम पास/असफल सारांश और प्रति-कनेक्शन निदान के साथ एक मॉडल में प्रदर्शित होते हैं।---

## [2.8.7] — 2026-03-20

> स्प्रिंट: मर्ज पीआर #495 (बॉटलनेक 429 ड्रॉप), फिक्स #496 (कस्टम एम्बेडिंग प्रदाता), ट्राइएज सुविधाएँ।### Bug Fixes

-**बॉटलनेक 429 अनंत प्रतीक्षा**(पीआर #495 @xandr0s द्वारा): 429 पर, `limiter.stop({dropWaitingJobs: true })` सभी कतारबद्ध अनुरोधों को तुरंत विफल कर देता है ताकि अपस्ट्रीम कॉलर्स फ़ॉलबैक को ट्रिगर कर सकें। मानचित्र से लिमिटर हटा दिया गया है इसलिए अगला अनुरोध एक नया उदाहरण बनाता है। -**कस्टम एम्बेडिंग मॉडल समाधान योग्य नहीं**(#496): `POST /v1/embeddings` अब सभी प्रदाता_नोड्स (सिर्फ लोकलहोस्ट नहीं) से कस्टम एम्बेडिंग मॉडल का समाधान करता है। डैशबोर्ड के माध्यम से जोड़े गए `google/gemini-embedding-001` जैसे मॉडल को सक्षम बनाता है।### Issues Responded

-**#452**- प्रति-एपीआई-कुंजी अनुरोध-गणना सीमाएं (रोडमैप पर स्वीकृत) -**#464**— प्रदाता/खाता सीमा के साथ स्वत: जारी एपीआई कुंजियाँ (अधिक विवरण की आवश्यकता है) -**#488**- ऑटो-अपडेट मॉडल सूचियाँ (स्वीकृत, रोडमैप पर) -**#496**— कस्टम एम्बेडिंग प्रदाता रिज़ॉल्यूशन (निश्चित)---

## [2.8.6] — 2026-03-20

> स्प्रिंट: मर्ज पीआर #494 (मिनीमैक्स रोल फिक्स), किरो एमआईटीएम डैशबोर्ड, ट्राइएज 8 मुद्दों को ठीक करें।### विशेषताएं

-**मिनीमैक्स डेवलपर→सिस्टम रोल फिक्स**(पीआर #494 @zhangqiang8vip द्वारा): प्रति-मॉडल `preserveDeveloperRole` टॉगल। प्रदाता पृष्ठ में "संगतता" यूआई जोड़ता है। मिनीमैक्स और समान गेटवे के लिए 422 "रोल पैराम त्रुटि" को ठीक करता है। -**roleNormalizer**: `normalizeDeveloperRole()` अब त्रि-स्थिति व्यवहार (अपरिभाषित=रखें, सत्य=रखें, गलत=कन्वर्ट) के साथ `preserveDeveloperRole` पैरामीटर स्वीकार करता है। -**DB**: `models.ts` में नया `getModelPreserveOpenAIDeveloperRole()` और `mergeModelCompatOverride()`।### Bug Fixes

-**KIRO MITM डैशबोर्ड**(#481/#487): `CLIToolsPageClient` अब किसी भी `configType: "mitm"` टूल को `AntigravityToolCard` (MITM स्टार्ट/स्टॉप नियंत्रण) पर रूट करता है। पहले केवल एंटीग्रेविटी को हार्डकोड किया गया था। -**एंटीग्रेविटीटूलकार्ड जेनेरिक**: हार्डकोडेड एंटीग्रेविटी मानों के बजाय `tool.image`, `tool.description`, `tool.id` का उपयोग करता है। गुम `डिफ़ॉल्टमॉडल` से बचाव।### Cleanup

- `ZWS_README_V2.md` हटा दिया गया (पीआर #494 से केवल-विकास दस्तावेज़)।### Issues Triaged (8)

-**#487**- बंद (किरो एमआईटीएम इस रिलीज में तय किया गया है) -**#486**— आवश्यकता-जानकारी (Windows REG.exe PATH समस्या) -**#489**— आवश्यकता-जानकारी (एंटीग्रेविटी प्रोजेक्ट आईडी गायब है, OAuth पुन: कनेक्ट की आवश्यकता है) -**#492**- आवश्यकता-जानकारी (गलत तरीके से प्रबंधित नोड पर ऐप/सर्वर.जेएस गायब) -**#490**- स्वीकृत (स्ट्रीमिंग + संदर्भ कैश अवरोधन, योजनाबद्ध समाधान) -**#491**— स्वीकृत (कोडेक्स प्रामाणिक स्थिति असंगति) -**#493**— स्वीकृत (मॉडल प्रदाता मॉडल नाम उपसर्ग, समाधान प्रदान किया गया) -**#488**— फ़ीचर अनुरोध बैकलॉग (ऑटो-अपडेट मॉडल सूचियाँ)---

## [2.8.5] — 2026-03-19

> स्प्रिंट: ज़ोंबी एसएसई स्ट्रीम, संदर्भ कैश फर्स्ट-टर्न, किरो एमआईटीएम और ट्राइएज 5 बाहरी मुद्दों को ठीक करें।### Bug Fixes

-**ज़ोंबी एसएसई स्ट्रीम**(#473): जब प्रदाता मध्य-स्ट्रीम हैंग करते हैं तो तेज कॉम्बो फ़ॉलबैक के लिए `STREAM_IDLE_TIMEOUT_MS` को 300s → 120s से कम करें। env var के माध्यम से कॉन्फ़िगर करने योग्य। -**संदर्भ कैश टैग**(#474): फर्स्ट-टर्न अनुरोधों को संभालने के लिए `इंजेक्टमॉडलटैग()` को ठीक करें (कोई सहायक संदेश नहीं) - संदर्भ कैश सुरक्षा अब पहली प्रतिक्रिया से ही काम करती है। -**KIRO MITM**(#481): Change KIRO `configType` from `guide` → `mitm` so the dashboard renders MITM Start/Stop controls. -**E2E टेस्ट**(CI): `providers-bailian-coding-plan.spec.ts` को ठीक करें - एपीआई कुंजी जोड़ें बटन पर क्लिक करने से पहले पहले से मौजूद मोडल ओवरले को खारिज करें।### Closed Issues

- #473 - ज़ोंबी एसएसई स्ट्रीम कॉम्बो फ़ॉलबैक को बायपास करती है
- #474 — संदर्भ कैश `<omniModel>` टैग पहली बारी में गायब है
- #481 - KIRO के लिए MITM डैशबोर्ड से सक्रिय नहीं है
- #468 - जेमिनी सीएलआई रिमोट सर्वर (#462 अप्रचलन द्वारा प्रतिस्थापित)
- #438 - क्लाउड फ़ाइलें लिखने में असमर्थ (बाहरी सीएलआई समस्या)
- #439 - AppImage काम नहीं करता (प्रलेखित libfuse2 वर्कअराउंड)
- #402 - एआरएम64 डीएमजी "क्षतिग्रस्त" (प्रलेखित xattr -cr वर्कअराउंड)
- #460 - सीएलआई विंडोज़ पर चलने योग्य नहीं है (प्रलेखित पथ सुधार)---

## [2.8.4] — 2026-03-19

> स्प्रिंट: जेमिनी सीएलआई डेप्रिसिएशन, वीएम गाइड आई18एन फिक्स, डिपेंडाबॉट सिक्योरिटी फिक्स, प्रोवाइडर स्कीमा विस्तार।### विशेषताएं

-**मिथुन सीएलआई अवनति**(#462): चेतावनी के साथ 'मिथुन-क्ली' प्रदाता को अप्रचलित के रूप में चिह्नित करें - Google मार्च 2026 से तृतीय-पक्ष OAuth उपयोग को प्रतिबंधित करता है -**प्रदाता स्कीमा**(#462): `पदावनत`, `बहिष्करण कारण`, `hasFree`, `freeNote`, `authHint`, `apiHint` वैकल्पिक फ़ील्ड के साथ ज़ॉड सत्यापन का विस्तार करें### Bug Fixes

-**VM गाइड i18n**(#471): i18n अनुवाद पाइपलाइन में `VM_DEPLOYMENT_GUIDE.md` जोड़ें, अंग्रेजी स्रोत से सभी 30 स्थानीय अनुवादों को पुन: उत्पन्न करें (पुर्तगाली में अटके हुए थे)### सुरक्षा

-**डिप्स**: बम्प `फ्लैटेड' 3.3.3 → 3.4.2 - सीडब्ल्यूई-1321 प्रोटोटाइप प्रदूषण को ठीक करता है (#484, @डिपेंडाबोट)### Closed Issues

- #472 - मॉडल उपनाम प्रतिगमन (v2.8.2 में निश्चित)
- #471 - वीएम गाइड अनुवाद टूटा हुआ
- #483 - `[DONE]` के बाद `data: null` को पीछे करना (v2.8.3 में ठीक किया गया)### Merged PRs

- #484 - डिप्स: 3.3.3 से 3.4.2 तक बंप फ़्लैट (@dependabot)---

## [2.8.3] — 2026-03-19

> स्प्रिंट: चेक i18n, SSE प्रोटोकॉल फिक्स, VM गाइड अनुवाद।### विशेषताएं

-**चेक भाषा**(#482): पूर्ण चेक (सीएस) i18n - 22 दस्तावेज़, 2606 यूआई स्ट्रिंग्स, भाषा स्विचर अपडेट (@zen0bit) -**वीएम परिनियोजन गाइड**: स्रोत दस्तावेज़ के रूप में पुर्तगाली से अंग्रेजी में अनुवादित (@zen0bit)### Bug Fixes

-**एसएसई प्रोटोकॉल**(#483): `[DONE]` सिग्नल के बाद पिछला `डेटा: शून्य` भेजना बंद करें - सख्त एआई एसडीके क्लाइंट (ज़ोड-आधारित सत्यापनकर्ता) में `एआई_टाइपवैलिडेशन एरर` को ठीक करता है।### Merged PRs

- #482 - चेक भाषा जोड़ें + VM_DEPLOYMENT_GUIDE.md अंग्रेजी स्रोत को ठीक करें (@zen0bit)---

## [2.8.2] — 2026-03-19

> स्प्रिंट: 2 मर्ज किए गए पीआर, मॉडल उपनाम रूटिंग फिक्स, लॉग एक्सपोर्ट और इश्यू ट्राइएज।### विशेषताएं

-**लॉग एक्सपोर्ट**: समय सीमा ड्रॉपडाउन (1 घंटा, 6 घंटा, 12 घंटा, 24 घंटा) के साथ `/डैशबोर्ड/लॉग` पर नया निर्यात बटन। `/api/logs/export` API (#user-request) के माध्यम से अनुरोध/प्रॉक्सी/कॉल लॉग का JSON डाउनलोड करता है### Bug Fixes

-**मॉडल उपनाम रूटिंग**(#472): सेटिंग्स → मॉडल उपनाम अब केवल प्रारूप पहचान को ही नहीं, बल्कि प्रदाता रूटिंग को भी सही ढंग से प्रभावित करता है। पहले `resolveModelAlias()` आउटपुट का उपयोग केवल `getModelTargetFormat()` के लिए किया जाता था, लेकिन मूल मॉडल आईडी प्रदाता को भेज दी गई थी -**स्ट्रीम फ्लश उपयोग**(#480): बफर में अंतिम एसएसई इवेंट से उपयोग डेटा अब स्ट्रीम फ्लश के दौरान सही ढंग से निकाला गया है (@prakersh से विलय)### Merged PRs

- #480 - फ्लश हैंडलर (@prakersh) में शेष बफ़र से उपयोग निकालें
- #479 - अनुपलब्ध कोडेक्स 5.3/5.4 और एंथ्रोपिक मॉडल आईडी मूल्य निर्धारण प्रविष्टियाँ जोड़ें (@prakersh)---

## [2.8.1] — 2026-03-19

> स्प्रिंट: पांच सामुदायिक पीआर - स्ट्रीमिंग कॉल लॉग फिक्स, किरो संगतता, कैश टोकन एनालिटिक्स, चीनी अनुवाद और कॉन्फ़िगर करने योग्य टूल कॉल आईडी।### विशेषताएं

-**करतब(लॉग्स)**: कॉल लॉग प्रतिक्रिया सामग्री अब अनुवाद से पहले कच्चे प्रदाता खंडों (ओपनएआई/क्लाउड/जेमिनी) से सही ढंग से एकत्रित हो गई है, स्ट्रीमिंग मोड में खाली प्रतिक्रिया पेलोड को ठीक कर रही है (#470, @zhangqiang8vip) -**फीचर (प्रदाता)**: प्रति-मॉडल कॉन्फ़िगर करने योग्य 9-चार टूल कॉल आईडी सामान्यीकरण (मिस्ट्रल-शैली) - केवल सक्षम विकल्प वाले मॉडल को आईडी काट दी जाती है (#470) -**feat(api)**: Key PATCH API को `allowedConnections`, `name`, `autoResolve`, `isActive`, और `accessSchedule` फ़ील्ड का समर्थन करने के लिए विस्तारित किया गया (#470) -**फीचर (डैशबोर्ड)**: अनुरोध लॉग विवरण यूआई में प्रतिक्रिया-पहला लेआउट (#470) -**feat(i18n)**: बेहतर चीनी (zh-CN) अनुवाद - पूर्ण पुनर्अनुवाद (#475, @only4copilot)### 🐛 Bug Fixes

-**फिक्स(किरो)**: अनुरोध निकाय से स्ट्रिप इंजेक्टेड `मॉडल` फ़ील्ड - किरो एपीआई अज्ञात शीर्ष-स्तरीय फ़ील्ड को अस्वीकार करता है (#478, @प्रकरश) -**ठीक करें(उपयोग)**: सटीक विश्लेषण के लिए उपयोग इतिहास इनपुट योग में कैश रीड + कैश निर्माण टोकन शामिल करें (#477, @प्रकरश) -**फिक्स (कॉललॉग्स)**: ओपनएआई प्रारूप के साथ-साथ क्लाउड प्रारूप उपयोग फ़ील्ड (`इनपुट_टोकन`/`आउटपुट_टोकन`) का समर्थन करें, सभी कैश टोकन वेरिएंट शामिल करें (#476, @प्रकरश)---

## [2.8.0] — 2026-03-19

> स्प्रिंट: संपादन योग्य आधार यूआरएल के साथ बेलियन कोडिंग योजना प्रदाता, साथ ही अलीबाबा क्लाउड और किमी कोडिंग के लिए सामुदायिक योगदान।### विशेषताएं

-**फीचर (प्रदाता)**: बाइलियन कोडिंग प्लान (`बैलियन-कोडिंग-प्लान`) जोड़ा गया - एंथ्रोपिक-संगत एपीआई के साथ अलीबाबा मॉडल स्टूडियो। Qwen3.5 प्लस, Qwen3 कोडर, मिनीमैक्स M2.5, GLM 5 और किमी K2.5 सहित 8 मॉडलों की स्थिर सूची। कस्टम प्रमाणीकरण सत्यापन शामिल है (400=मान्य, 401/403=अमान्य) (#467, @माइंड-ड्रैगन) -**फीचर (एडमिन)**: प्रोवाइडर एडमिन में संपादन योग्य डिफ़ॉल्ट यूआरएल प्रवाह बनाएं/संपादित करें - उपयोगकर्ता प्रति कनेक्शन कस्टम बेस यूआरएल कॉन्फ़िगर कर सकते हैं। गैर-http(s) योजनाओं को अस्वीकार करते हुए ज़ॉड स्कीमा सत्यापन के साथ `providerSpecificData.baseUrl` में कायम रहा (#467)### 🧪 Tests

- बाइलियन कोडिंग प्लान प्रदाता के लिए 30+ यूनिट परीक्षण और 2 ई2ई परिदृश्य जोड़े गए हैं, जो प्रमाणीकरण, स्कीमा हार्डनिंग, रूट-स्तरीय व्यवहार और क्रॉस-लेयर एकीकरण को कवर करते हैं।---

## [2.7.10] — 2026-03-19

> स्प्रिंट: दो नए समुदाय-योगदान प्रदाता (अलीबाबा क्लाउड कोडिंग, किमी कोडिंग एपीआई-कुंजी) और डॉकर पिनो फिक्स।### विशेषताएं

-**फीचर (प्रदाता)**: दो ओपनएआई-संगत एंडपॉइंट के साथ अलीबाबा क्लाउड कोडिंग प्लान का समर्थन जोड़ा गया - `एलिकोड` (चीन) और `एलिकोड-इंटल` (इंटरनेशनल), प्रत्येक 8 मॉडल (#465, @dtk1985) के साथ -**फीचर (प्रदाता)**: समर्पित `किमी-कोडिंग-एपाइकी` प्रदाता पथ जोड़ा गया - एपीआई-कुंजी-आधारित किमी कोडिंग एक्सेस अब OAuth-केवल `किमी-कोडिंग` मार्ग के माध्यम से मजबूर नहीं है। रजिस्ट्री, स्थिरांक, मॉडल एपीआई, कॉन्फ़िगरेशन और सत्यापन परीक्षण शामिल है (#463, @माइंड-ड्रैगन)### 🐛 Bug Fixes

-**फिक्स (डॉकर)**: डॉकर छवि में गायब `स्प्लिट2` निर्भरता जोड़ी गई - `पिनो-एब्स्ट्रैक्ट-ट्रांसपोर्ट` को रनटाइम पर इसकी आवश्यकता होती है लेकिन इसे स्टैंडअलोन कंटेनर में कॉपी नहीं किया जा रहा था, जिसके कारण `मॉड्यूल 'स्प्लिट2' नहीं मिल सका' क्रैश हो गया (#459)---

## [2.7.9] — 2026-03-18

> स्प्रिंट: कोडेक्स प्रतिक्रिया उपपथ पासथ्रू मूल रूप से समर्थित, विंडोज एमआईटीएम क्रैश फिक्स, और कॉम्बोस एजेंट स्कीमा समायोजित।### विशेषताएं

-**करतब(कोडेक्स)**: कोडेक्स के लिए मूल प्रतिक्रिया उपपथ पासथ्रू - मूल रूप से `POST /v1/responses/compact` को कोडेक्स अपस्ट्रीम पर रूट करता है, `/कॉम्पैक्ट` प्रत्यय को हटाए बिना क्लाउड कोड संगतता बनाए रखता है (#457)### 🐛 Bug Fixes

-**फिक्स(कॉम्बोस)**: ज़ॉड स्कीमा (`अपडेटकॉम्बोस्कीमा` और `क्रिएटकॉम्बोस्कीमा`) में अब `सिस्टम_मैसेज`, `टूल_फिल्टर_रेगेक्स`, और `कॉन्टेक्स्ट_कैश_प्रोटेक्शन` शामिल हैं। उस बग को ठीक करता है जहां डैशबोर्ड के माध्यम से बनाई गई एजेंट-विशिष्ट सेटिंग्स को बैकएंड सत्यापन परत द्वारा चुपचाप हटा दिया गया था (#458) -**फिक्स(मिटम)**: विंडोज पर किरो एमआईटीएम प्रोफ़ाइल क्रैश ठीक हो गया - 'REG.exe' एनवी गायब होने के कारण 'नोड-मशीन-आईडी' विफल हो गया, और फ़ॉलबैक में एक घातक 'क्रिप्टो परिभाषित नहीं है' त्रुटि उत्पन्न हुई। फ़ॉलबैक अब सुरक्षित रूप से और सही ढंग से क्रिप्टो आयात करता है (#456)---

## [2.7.8] — 2026-03-18

> स्प्रिंट: बजट सेव बग + कॉम्बो एजेंट फीचर्स यूआई + ओमनीमॉडल टैग सुरक्षा फिक्स।### 🐛 Bug Fixes

-**फिक्स (बजट)**: "सेव लिमिट्स" अब 422 नहीं लौटाता - `warningThreshold` को अब प्रतिशत (0-100) के बजाय अंश (0-1) के रूप में सही ढंग से भेजा गया है (#451) -**फिक्स(कॉम्बोस)**: `<omniModel>` आंतरिक कैश टैग अब प्रदाताओं को अनुरोध अग्रेषित करने से पहले हटा दिया गया है, जिससे कैश सत्र टूटने से बचा जा सकता है (#454)### विशेषताएं

-**feat(combos)**: कॉम्बो क्रिएट/एडिट मोडल में एजेंट फीचर्स सेक्शन जोड़ा गया - सीधे डैशबोर्ड से `system_message` ओवरराइड, `tool_filter_regex`, और `context_cache_protection` को उजागर करें (#454)---

## [2.7.7] — 2026-03-18

> स्प्रिंट: डॉकर पिनो क्रैश, कोडेक्स सीएलआई प्रतिक्रिया कार्यकर्ता फिक्स, पैकेज-लॉक सिंक।### 🐛 Bug Fixes

-**फिक्स (डॉकर)**: `पिनो-एब्सट्रैक्ट-ट्रांसपोर्ट` और `पिनो-प्रिटी` अब स्पष्ट रूप से डॉकर रनर स्टेज में कॉपी किए गए हैं - नेक्स्ट.जेएस स्टैंडअलोन ट्रेस इन पीयर डिप्स को मिस कर देता है, जिससे स्टार्टअप पर `कैननॉट फाइंड मॉड्यूल पिनो-एब्सट्रैक्ट-ट्रांसपोर्ट` क्रैश हो जाता है (#449) -**फिक्स (प्रतिक्रियाएं)**: `/v1/responses` रूट से `initTranslator()` हटाएं - कोडेक्स सीएलआई अनुरोधों पर `कार्यकर्ता बाहर निकल गया है` uncaughtException के साथ Next.js कार्यकर्ता क्रैश हो रहा था (#450)### 🔧 Maintenance

-**chore(deps)**: `package-lock.json` अब प्रत्येक संस्करण बम्प पर प्रतिबद्ध है ताकि यह सुनिश्चित किया जा सके कि डॉकर `npm ci` सटीक निर्भरता संस्करणों का उपयोग करता है---

## [2.7.5] — 2026-03-18

> स्प्रिंट: यूएक्स सुधार और विंडोज सीएलआई हेल्थचेक फिक्स।### 🐛 Bug Fixes

-**फिक्स (यूएक्स)**: लॉगिन पेज पर डिफ़ॉल्ट पासवर्ड संकेत दिखाएं - नए उपयोगकर्ता अब पासवर्ड इनपुट के नीचे ``डिफ़ॉल्ट पासवर्ड: 123456'' देखते हैं (#437)
-**फिक्स (सीएलआई)**: क्लाउड सीएलआई और अन्य एनपीएम-इंस्टॉल किए गए टूल को अब विंडोज पर चलाने योग्य के रूप में सही ढंग से पहचाना गया है - स्पॉन PATHEXT के माध्यम से `.cmd`रैपर को हल करने के लिए`शेल: ट्रू` का उपयोग करता है (#447)---

## [2.7.4] — 2026-03-18

> स्प्रिंट: खोज उपकरण डैशबोर्ड, i18n फिक्स, कोपायलट सीमाएं, सर्पर सत्यापन फिक्स।### विशेषताएं

-**विशेषता(खोज)**: खोज खेल का मैदान जोड़ें (10वां समापन बिंदु), तुलना प्रदाताओं/रीरैंक पाइपलाइन/खोज इतिहास के साथ खोज उपकरण पृष्ठ, स्थानीय रीरैंक रूटिंग, खोज एपीआई पर ऑथ गार्ड (#443 @Regis-RCR द्वारा)

- नया मार्ग: `/डैशबोर्ड/सर्च-टूल्स`
- डिबग अनुभाग के अंतर्गत साइडबार प्रविष्टि
- `GET /api/search/providers` और `GET /api/search/stats` ऑथ गार्ड के साथ
- `/v1/rerank` के लिए स्थानीय प्रदाता_नोड्स रूटिंग
- खोज नामस्थान में 30+ i18n कुंजियाँ### 🐛 Bug Fixes

-**फिक्स (खोज)**: ब्रेव न्यूज नॉर्मलाइज़र को ठीक करें (0 परिणाम दे रहा था), सामान्यीकरण के बाद max_results ट्रंकेशन को लागू करें, एंडपॉइंट पेज फ़ेच यूआरएल को ठीक करें (#443 @Regis-RCR द्वारा) -**फिक्स (एनालिटिक्स)**: एनालिटिक्स दिन/दिनांक लेबल को स्थानीयकृत करें - हार्डकोडेड पुर्तगाली स्ट्रिंग्स को `Intl.DateTimeFormat(locale)` से बदलें (#444 @hijak द्वारा) -**फिक्स (कोपायलट)**: सही GitHub कोपायलट खाता प्रकार डिस्प्ले, सीमा डैशबोर्ड से भ्रामक असीमित कोटा पंक्तियों को फ़िल्टर करें (#445 @hijak द्वारा) -**फिक्स (प्रदाता)**: वैध सर्पर एपीआई कुंजियों को अस्वीकार करना बंद करें - गैर-4xx प्रतिक्रियाओं को वैध प्रमाणीकरण के रूप में मानें (#446 @hijak द्वारा)---

## [2.7.3] — 2026-03-18

> स्प्रिंट: कोडेक्स डायरेक्ट एपीआई कोटा फ़ॉलबैक फिक्स।### 🐛 Bug Fixes

-**फिक्स(कोडेक्स)**: डायरेक्ट एपीआई फ़ॉलबैक में साप्ताहिक-समाप्त खातों को ब्लॉक करें (#440)

- `resolveQuotaWindow()` उपसर्ग मिलान: `साप्ताहिक'' अब `साप्ताहिक (7डी)'' कैश कुंजियों से मेल खाता है
- `applyCodexWindowPolicy()` `useWeekly`/`use5h` टॉगल को सही ढंग से लागू करता है
- 4 नए प्रतिगमन परीक्षण (कुल 766)---

## [2.7.2] — 2026-03-18

> स्प्रिंट: लाइट मोड यूआई कंट्रास्ट फिक्स।### 🐛 Bug Fixes

-**फिक्स (लॉग्स)**: अनुरोध लॉग फ़िल्टर बटन और कॉम्बो बैज में लाइट मोड कंट्रास्ट को ठीक करें (#378)

- त्रुटि/सफलता/कॉम्बो फ़िल्टर बटन अब प्रकाश मोड में पढ़ने योग्य हैं
- कॉम्बो रो बैज लाइट मोड में मजबूत बैंगनी रंग का उपयोग करता है---

## [2.7.1] — 2026-03-17

> स्प्रिंट: 5 प्रदाताओं के साथ एकीकृत वेब खोज रूटिंग (POST /v1/search) + Next.js 16.1.7 सुरक्षा सुधार (6 CVEs)।### ✨ New Features

-**फीचर (खोज)**: एकीकृत वेब सर्च रूटिंग - `POST /v1/search` 5 प्रदाताओं के साथ (सर्पर, ब्रेव, पर्प्लेक्सिटी, एक्सा, टैविली)

- सभी प्रदाताओं में ऑटो-फ़ेलओवर, 6,500+ निःशुल्क खोजें/माह
- अनुरोध सह-संयोजन के साथ इन-मेमोरी कैश (कॉन्फ़िगर करने योग्य टीटीएल)
- डैशबोर्ड: प्रदाता ब्रेकडाउन, कैश हिट दर, लागत ट्रैकिंग के साथ `/ डैशबोर्ड/एनालिटिक्स` में एनालिटिक्स टैब खोजें
- New API: `GET /api/v1/search/analytics` for search request statistics
- डीबी माइग्रेशन: गैर-चैट अनुरोध ट्रैकिंग के लिए `call_logs` पर `request_type` कॉलम
- राशि सत्यापन (`v1SearchSchema`), प्रमाणीकरण-गेटेड, लागत `रिकॉर्डकॉस्ट()` के माध्यम से दर्ज की गई### सुरक्षा

-**डिप्स**: नेक्स्ट.जेएस 16.1.6 → 16.1.7 — 6 सीवीई को ठीक करता है: -**गंभीर**: सीवीई-2026-29057 (एचटीटीपी अनुरोध http-प्रॉक्सी के माध्यम से तस्करी) -**High**: CVE-2026-27977, CVE-2026-27978 (WebSocket + Server Actions) -**मध्यम**: सीवीई-2026-27979, सीवीई-2026-27980, सीवीई-2026-जेसीसी7### 📁 New Files

| फ़ाइल                                                           | उद्देश्य                                           |
| --------------------------------------------------------------- | -------------------------------------------------- | --- |
| `open-sse/handlers/search.ts`                                   | 5-प्रदाता रूटिंग के साथ खोज हैंडलर                 |
| `open-sse/config/searchRegistry.ts`                             | प्रदाता रजिस्ट्री (प्रमाणीकरण, लागत, कोटा, टीटीएल) |
| `open-sse/services/searchCache.ts`                              | अनुरोध सह-संयोजन के साथ इन-मेमोरी कैश              |
| `src/app/api/v1/search/route.ts`                                | Next.js route (POST + GET)                         |
| `src/app/api/v1/search/analytics/route.ts`                      | खोज आँकड़े एपीआई                                   |
| `src/app/(डैशबोर्ड)/डैशबोर्ड/एनालिटिक्स/SearchAnalyticsTab.tsx` | एनालिटिक्स डैशबोर्ड टैब                            |
| `src/lib/db/migrations/007_search_request_type.sql`             | डीबी माइग्रेशन                                     |
| `टेस्ट/यूनिट/सर्च-रजिस्ट्री.टेस्ट.एमजेएस`                       | यूनिट परीक्षणों की 277 पंक्तियाँ                   | --- |

## [2.7.0] — 2026-03-17

> स्प्रिंट: क्लॉराउटर-प्रेरित विशेषताएं - टूलकॉलिंग फ़्लैग, बहुभाषी इरादे का पता लगाना, बेंचमार्क-संचालित फ़ॉलबैक, अनुरोध डिडुप्लीकेशन, प्लग करने योग्य राउटरस्ट्रेटेजी, ग्रोक -4 फास्ट + जीएलएम -5 + मिनीमैक्स एम 2.5 + किमी के 2.5 मूल्य निर्धारण।### ✨ New Models & Pricing

-**फीचर (मूल्य निर्धारण)**: xAI ग्रोक-4 फास्ट - `$0.20/$0.50 प्रति 1M टोकन`, 1143ms p50 विलंबता, टूल कॉलिंग समर्थित -**फीचर (मूल्य निर्धारण)**: xAI ग्रोक-4 (मानक) - `$0.20/$1.50 प्रति 1M टोकन`, प्रमुख तर्क -**फीचर (मूल्य निर्धारण)**: Z.AI के माध्यम से GLM-5 - `$0.5/1M`, 128K आउटपुट संदर्भ -**फीचर (मूल्य निर्धारण)**: मिनीमैक्स एम2.5 - `$0.30/1एम इनपुट`, तर्क + एजेंटिक कार्य -**फीचर (मूल्य निर्धारण)**: डीपसीक V3.2 - अद्यतन मूल्य `$0.27/$1.10 प्रति 1M` -**फीचर (मूल्य निर्धारण)**: मूनशॉट एपीआई के माध्यम से किमी K2.5 - डायरेक्ट मूनशॉट एपीआई एक्सेस -**फीचर (प्रदाता)**: Z.AI प्रदाता जोड़ा गया ('ज़ई' उपनाम) - 128K आउटपुट के साथ GLM-5 परिवार### 🧠 Routing Intelligence

-**फीचर (रजिस्ट्री)**: प्रदाता रजिस्ट्री में प्रति मॉडल `टूलकॉलिंग` ध्वज - कॉम्बो अब टूल-कॉलिंग सक्षम मॉडल को प्राथमिकता/आवश्यकता दे सकते हैं -**करतब (स्कोरिंग)**: ऑटोकॉम्बो स्कोरिंग के लिए बहुभाषी इरादे का पता लगाना - पीटी/जेडएच/ईएस/एआर स्क्रिप्ट/भाषा पैटर्न अनुरोध संदर्भ के अनुसार मॉडल चयन को प्रभावित करते हैं -**करतब (फ़ॉलबैक)**: बेंचमार्क-संचालित फ़ॉलबैक चेन - वास्तविक विलंबता डेटा ('कॉम्बोमेट्रिक्स' से p50) फ़ॉलबैक प्राथमिकता को गतिशील रूप से पुन: व्यवस्थित करने के लिए उपयोग किया जाता है -**feat(dedup)**: कंटेंट-हैश के माध्यम से डिडुप्लीकेशन का अनुरोध करें - 5-सेकंड की निष्क्रियता विंडो डुप्लिकेट प्रदाता कॉल को क्लाइंट को पुनः प्रयास करने से रोकती है -**feat(राउटर)**: `autoCombo/routerStrategy.ts` में प्लग करने योग्य `RouterStrategy` इंटरफ़ेस - कस्टम रूटिंग लॉजिक को कोर को संशोधित किए बिना इंजेक्ट किया जा सकता है### 🔧 MCP Server Improvements

-**feat(mcp)**: 2 नए उन्नत टूल स्कीमा: `omniroute_get_provider_metrics` (p50/p95/p99 प्रति प्रदाता) और `omniroute_explain_route` (रूटिंग निर्णय स्पष्टीकरण) -**feat(mcp)**: MCP टूल ऑथ स्कोप अपडेट किया गया - प्रदाता मेट्रिक्स टूल के लिए `metrics:read` स्कोप जोड़ा गया -**feat(mcp)**: `omniroute_best_combo_for_task` अब बहुभाषी रूटिंग के लिए `भाषा संकेत` पैरामीटर स्वीकार करता है### 📊 Observability

-**feat(metrics)**: `comboMetrics.ts` को प्रति प्रदाता/खाता वास्तविक समय विलंबता प्रतिशत ट्रैकिंग के साथ बढ़ाया गया -**फीचर(स्वास्थ्य)**: हेल्थ एपीआई (`/api/monitoring/health`) अब प्रति-प्रदाता `p50Latency` और `errorRate` फ़ील्ड लौटाता है -**फीचर(उपयोग)**: प्रति-मॉडल विलंबता ट्रैकिंग के लिए उपयोग इतिहास माइग्रेशन### 🗄️ DB Migrations

-**फीचर (माइग्रेशन)**: `कॉम्बो_मेट्रिक्स` तालिका में नया कॉलम `लेटेंसी_पी50` - शून्य-ब्रेकिंग, मौजूदा उपयोगकर्ताओं के लिए सुरक्षित### 🐛 Bug Fixes / Closures

-**बंद करें(#411)**: विंडोज़ पर बेहतर-एसक्लाइट3 हैशेड मॉड्यूल रिज़ॉल्यूशन - v2.6.10 (f02c5b5) में तय किया गया -**बंद करें(#409)**: फ़ाइलें संलग्न होने पर क्लाउड मॉडल के साथ GitHub कोपायलट चैट पूर्णता विफल हो जाती है - v2.6.9 (838f1d6) में ठीक किया गया -**बंद करें(#405)**: #411 का डुप्लिकेट - हल हो गया## [2.6.10] — 2026-03-17

> विंडोज़ फिक्स: नोड-जिप/पायथन/एमएसवीसी (#426) के बिना बेहतर-एसक्लाइट3 प्रीबिल्ट डाउनलोड।### 🐛 Bug Fixes

-**फिक्स(इंस्टॉल/#426)**: विंडोज़ पर, `npm install -g omniroute` का उपयोग `better_sqlite3.node एक वैध Win32 एप्लिकेशन नहीं है` के साथ विफल होने के लिए किया जाता है क्योंकि बंडल किए गए मूल बाइनरी को लिनक्स के लिए संकलित किया गया था।**रणनीति 1.5**को `scripts/postinstall.mjs` में जोड़ता है: किसी भी बिल्ड टूल (कोई नोड-जिप, कोई पायथन, कोई एमएसवीसी) की आवश्यकता के बिना वर्तमान ओएस/आर्क के लिए सही प्रीबिल्ट बाइनरी डाउनलोड करने के लिए `@mapbox/node-pre-gyp install --fallback-to-build=false` (`better-sqlite3` के भीतर बंडल) का उपयोग करता है। डाउनलोड विफल होने पर ही `npm rebuild` पर वापस आ जाता है। स्पष्ट मैन्युअल सुधार निर्देशों के साथ प्लेटफ़ॉर्म-विशिष्ट त्रुटि संदेश जोड़ता है।---

## [2.6.9] — 2026-03-17

> सीआई फिक्स (टी11 कोई भी बजट), बग फिक्स #409 (कोपायलट+क्लाउड के माध्यम से फाइल अटैचमेंट), वर्कफ़्लो सुधार जारी करें।### 🐛 Bug Fixes

-**फिक्स(ci)**: `openai-responses.ts` और `chatCore.ts` में टिप्पणियों से "कोई भी" शब्द हटाएं जो t11 `किसी भी` बजट जांच में विफल हो रहे थे (रेगेक्स गिनती टिप्पणियों से गलत सकारात्मक) -**फिक्स (चैटकोर)**: प्रदाताओं को अग्रेषित करने से पहले असमर्थित सामग्री भाग प्रकारों को सामान्य करें (#409 - जब `.md` फ़ाइलें संलग्न होती हैं तो कर्सर `{type:"file"}` भेजता है; कोपायलट और अन्य OpenAI-compat प्रदाता "प्रकार या तो 'image_url' या 'text' होना चाहिए" के साथ अस्वीकार कर देते हैं; फिक्स `फ़ाइल`/`दस्तावेज़` ब्लॉक को `text` में परिवर्तित करता है और अज्ञात प्रकारों को हटा देता है)### 🔧 Workflow

-**कोर (जेनरेट-रिलीज़)**: एटॉमिक कमिट रूल जोड़ें - वर्जन बंप ('एनपीएम वर्जन पैच') फीचर फाइलों को कमिट करने से पहले होना चाहिए ताकि यह सुनिश्चित हो सके कि टैग हमेशा सभी वर्जन परिवर्तनों को एक साथ रखने वाले कमिट को इंगित करता है।---

## [2.6.8] — 2026-03-17

> स्प्रिंट: एजेंट के रूप में कॉम्बो (सिस्टम प्रॉम्प्ट + टूल फ़िल्टर), कॉन्टेक्स्ट कैशिंग प्रोटेक्शन, ऑटो-अपडेट, विस्तृत लॉग, एमआईटीएम किरो आईडीई।### 🗄️ DB Migrations (zero-breaking — safe for existing users)

-**005_combo_agent_fields.sql**: `तालिका संयोजन बदलें कॉलम जोड़ें system_message टेक्स्ट डिफ़ॉल्ट शून्य`, `tool_filter_regex टेक्स्ट डिफ़ॉल्ट शून्य`, `context_cache_protection पूर्णांक डिफ़ॉल्ट 0` -**006_detailed_request_logs.sql**: 500-एंट्री रिंग-बफर ट्रिगर के साथ नई `request_detail_logs` तालिका, सेटिंग्स टॉगल के माध्यम से ऑप्ट-इन करें### विशेषताएं

-**विशेषता (कॉम्बो)**: सिस्टम संदेश ओवरराइड प्रति कॉम्बो (#399 - `system_message` फ़ील्ड प्रदाता को अग्रेषित करने से पहले सिस्टम प्रॉम्प्ट को प्रतिस्थापित या इंजेक्ट करता है) -**फीचर (कॉम्बो)**: टूल फ़िल्टर रेगेक्स प्रति कॉम्बो (#399 - `टूल_फ़िल्टर_रेगेक्स` केवल टूल मिलान पैटर्न रखता है; ओपनएआई + एंथ्रोपिक प्रारूपों का समर्थन करता है) -**करतब(कॉम्बो)**: संदर्भ कैशिंग सुरक्षा (#401 - `context_cache_protection``<omniModel>प्रदाता/मॉडल</omniModel>` के साथ प्रतिक्रियाओं को टैग करता है और सत्र निरंतरता के लिए पिन मॉडल) -**फीचर (सेटिंग्स)**: सेटिंग्स के माध्यम से ऑटो-अपडेट (#320 - `GET /api/system/version` + `POST /api/system/update` - npm रजिस्ट्री और pm2 पुनरारंभ के साथ पृष्ठभूमि में अपडेट की जांच करता है) -**फीचर (लॉग्स)**: विस्तृत अनुरोध लॉग्स (#378 - 4 चरणों में पूर्ण पाइपलाइन निकायों को कैप्चर करता है: क्लाइंट अनुरोध, अनुवादित अनुरोध, प्रदाता प्रतिक्रिया, क्लाइंट प्रतिक्रिया - ऑप्ट-इन टॉगल, 64 केबी ट्रिम, 500-एंट्री रिंग-बफर) -**feat(mitm)**: MITM किरो IDE प्रोफ़ाइल (#336 - `src/mitm/targets/kiro.ts` api.anthropic.com को लक्षित करता है, मौजूदा MITM बुनियादी ढांचे का पुन: उपयोग करता है)---

## [2.6.7] — 2026-03-17

> स्प्रिंट: एसएसई सुधार, स्थानीय प्रदाता_नोड्स एक्सटेंशन, प्रॉक्सी रजिस्ट्री, क्लाउड पासथ्रू फिक्स।### विशेषताएं

-**फीचर(स्वास्थ्य)**: ब्लॉकिंग से बचने के लिए घातीय बैकऑफ़ (30s→300s) और `Promise.allSettled` के साथ स्थानीय `provider_nodes` के लिए पृष्ठभूमि स्वास्थ्य जांच (#423, @Regis-RCR) -**feat(embeddings)**: `/v1/embeddings` को स्थानीय `provider_nodes` पर रूट करें - `buildDynamicEmbeddingProvider()` होस्टनाम सत्यापन के साथ (#422, @Regis-RCR) -**फीचर (ऑडियो)**: टीटीएस/एसटीटी को स्थानीय `प्रोवाइडर_नोड्स` पर रूट करें - `बिल्डडायनामिकऑडियोप्रोवाइडर()` एसएसआरएफ सुरक्षा के साथ (#416, @रेगिस-आरसीआर) -**करतब(प्रॉक्सी)**: प्रॉक्सी रजिस्ट्री, प्रबंधन एपीआई, और कोटा-सीमा सामान्यीकरण (#429, @रेगिस-आरसीआर)### 🐛 Bug Fixes

-**फिक्स(एसएसई)**: स्ट्रिप क्लाउड-विशिष्ट फ़ील्ड (`मेटाडेटा`, `एंथ्रोपिक_वर्जन`) जब लक्ष्य ओपनएआई-कॉम्पैट (#421, @प्रकरश) है -**फिक्स(एसएसई)**: पासथ्रू स्ट्रीम मोड में क्लाउड एसएसई उपयोग (`इनपुट_टोकन`, `आउटपुट_टोकन`, कैश टोकन) निकालें (#420, @प्रकरश) -**फिक्स(sse)**: गुम/खाली आईडी वाले टूल कॉल के लिए फ़ॉलबैक `call_id` जेनरेट करें (#419, @prakersh) -**फिक्स(एसएसई)**: क्लाउड-टू-क्लाउड पासथ्रू - आगे का शरीर पूरी तरह से अछूता, कोई पुनः अनुवाद नहीं (#418, @प्रकरश) -**फिक्स(एसएसई)**: 400 त्रुटियों से बचने के लिए क्लाउड कोड संदर्भ संपीड़न के बाद अनाथ `टूल_रिजल्ट` आइटम को फ़िल्टर करें (#417, @प्रकरश) -**फिक्स(एसएसई)**: `प्लेसहोल्डर_टूल` अनंत लूप को रोकने के लिए रिस्पॉन्स एपीआई अनुवादक में खाली-नाम टूल कॉल छोड़ें (#415, @प्रकरश) -**फिक्स(एसएसई)**: अनुवाद से पहले खाली टेक्स्ट सामग्री ब्लॉक हटा दें (#427, @प्रकरश) -**फिक्स(एपीआई)**: क्लाउड ओएथ टेस्ट कॉन्फिगरेशन में `रिफ्रेशेबल: ट्रू` जोड़ें (#428, @प्रकरश)### 📦 Dependencies

- बम्प `vitest`, `@vitest/*` और संबंधित निर्भरताएँ (#414, @dependabot)---

## [2.6.6] — 2026-03-17

> हॉटफिक्स: टर्बोपैक/डॉकर संगतता - सभी `src/` आयातों से `नोड:` प्रोटोकॉल हटाएं।### 🐛 Bug Fixes

-**फिक्स (बिल्ड)**: `src/` के अंतर्गत 17 फाइलों में `आयात` स्टेटमेंट से `नोड:` प्रोटोकॉल उपसर्ग हटा दिया गया। `नोड:एफएस`, `नोड:पाथ`, `नोड:यूआरएल`, `नोड:ओएस` आदि आयातों के कारण टर्बोपैक बिल्ड (नेक्स्ट.जेएस 15 डॉकर) और पुराने एनपीएम ग्लोबल इंस्टाल से अपग्रेड पर `एक्मास्क्रिप्ट फ़ाइल में त्रुटि हुई` थी। प्रभावित फ़ाइलें: `migrationRunner.ts`, `core.ts`, `backup.ts`, `prompts.ts`, `dataPaths.ts`, और `src/app/api/` और `src/lib/` में 12 अन्य। -**कोर(वर्कफ़्लो)**: प्रत्येक रिलीज़ में डॉकर हब सिंक और डुअल-वीपीएस को**अनिवार्य**चरणों को तैनात करने के लिए `जेनरेट-रिलीज़.एमडी` को अपडेट किया गया।---

## [2.6.5] — 2026-03-17

> स्प्रिंट: रीज़निंग मॉडल परम फ़िल्टरिंग, स्थानीय प्रदाता 404 फिक्स, किलो गेटवे प्रदाता, निर्भरता बम्प्स।### ✨ New Features

-**feat(api)**:**किलो गेटवे**(`api.kilo.ai`) को एक नए एपीआई कुंजी प्रदाता (उर्फ `किलो`) के रूप में जोड़ा गया - 335+ मॉडल, 6 मुफ्त मॉडल, 3 ऑटो-रूटिंग मॉडल (`किलो-ऑटो/फ्रंटियर`, `किलो-ऑटो/बैलेंस्ड`, `किलो-ऑटो/फ्री`)। पासथ्रू मॉडल `/api/gateway/models` समापन बिंदु के माध्यम से समर्थित हैं। (पीआर #408 @Regis-RCR द्वारा)### 🐛 Bug Fixes

-**फिक्स(एसएसई)**: रीजनिंग मॉडल (ओ1, ओ1-मिनी, ओ1-प्रो, ओ3, ओ3-मिनी) के लिए असमर्थित पैरामीटर को हटा दें। `o1`/`o3` परिवार के मॉडल HTTP 400 के साथ `तापमान`, `top_p`, `frequence_penalty`, `presence_penalty`, `logprobs`, `top_logprobs`, और `n` को अस्वीकार करते हैं। पैरामीटर्स को अब अग्रेषित करने से पहले `chatCore` परत पर हटा दिया गया है। प्रति मॉडल एक घोषणात्मक `unsupportedParams` फ़ील्ड और लुकअप के लिए एक पूर्व-गणना किए गए O(1) मानचित्र का उपयोग करता है। (पीआर #412 @Regis-RCR द्वारा) -**फिक्स(एसएसई)**: स्थानीय प्रदाता 404 के परिणामस्वरूप अब कनेक्शन-स्तर लॉकआउट (2 मिनट) के बजाय**केवल मॉडल लॉकआउट (5 सेकंड)**होता है। जब एक स्थानीय अनुमान बैकएंड (ओलामा, एलएम स्टूडियो, ओएमएलएक्स) किसी अज्ञात मॉडल के लिए 404 लौटाता है, तो कनेक्शन सक्रिय रहता है और अन्य मॉडल तुरंत काम करना जारी रखते हैं। पहले से मौजूद बग को भी ठीक करता है जहां `मॉडल` को `markAccountUnavailable()` में पास नहीं किया गया था। स्थानीय प्रदाताओं को होस्टनाम (`localhost`, `127.0.0.1`, `::1`, `LOCAL_HOSTNAMES` env var के माध्यम से विस्तार योग्य) के माध्यम से पता लगाया गया। (पीआर #410 @Regis-RCR द्वारा)### 📦 Dependencies

- `बेहतर-sqlite3` 12.6.2 → 12.8.0
- `अनडिसी` 7.24.2 → 7.24.4
- `https-proxy-agent` 7 → 8
- `एजेंट-बेस` 7 → 8---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [2.6.4] — 2026-03-17

### 🐛 Bug Fixes

<<<<<<< HEAD
- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(providers)**: Removed non-existent model names across 5 providers:
  - **gemini / gemini-cli**: removed `gemini-3.1-pro/flash` and `gemini-3-*-preview` (don't exist in Google API v1beta); replaced with `gemini-2.5-pro`, `gemini-2.5-flash`, `gemini-2.0-flash`, `gemini-1.5-pro/flash`
  - **antigravity**: removed `gemini-3.1-pro-high/low` and `gemini-3-flash` (invalid internal aliases); replaced with real 2.x models
  - **github (Copilot)**: removed `gemini-3-flash-preview` and `gemini-3-pro-preview`; replaced with `gemini-2.5-flash`
  - **nvidia**: corrected `nvidia/llama-3.3-70b-instruct` → `meta/llama-3.3-70b-instruct` (NVIDIA NIM uses `meta/` namespace for Meta models); added `nvidia/llama-3.1-70b-instruct` and `nvidia/llama-3.1-405b-instruct`
- **fix(db/combo)**: Updated `free-stack` combo on remote DB: removed `qw/qwen3-coder-plus` (expired refresh token), corrected `nvidia/llama-3.3-70b-instruct` → `nvidia/meta/llama-3.3-70b-instruct`, corrected `gemini/gemini-3.1-flash` → `gemini/gemini-2.5-flash`, added `if/deepseek-v3.2`

---

## [2.6.3] — 2026-03-16

> Sprint: zod/pino hash-strip baked into build pipeline, Synthetic provider added, VPS PM2 path corrected.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(build)**: Turbopack hash-strip now runs at **compile time** for ALL packages — not just `better-sqlite3`. Step 5.6 in `prepublish.mjs` walks every `.js` in `app/.next/server/` and strips the 16-char hex suffix from any hashed `require()`. Fixes `zod-dcb22c...`, `pino-...`, etc. MODULE_NOT_FOUND on global npm installs. Closes #398
- **fix(deploy)**: PM2 on both VPS was pointing to stale git-clone directories. Reconfigured to `app/server.js` in the npm global package. Updated `/deploy-vps` workflow to use `npm pack + scp` (npm registry rejects 299MB packages).

### विशेषताएं

- **feat(provider)**: Synthetic ([synthetic.new](https://synthetic.new)) — privacy-focused OpenAI-compatible inference. `passthroughModels: true` for dynamic HuggingFace model catalog. Initial models: Kimi K2.5, MiniMax M2.5, GLM 4.7, DeepSeek V3.2. (PR #404 by @Regis-RCR)

### 📋 Issues Closed

- **close #398**: npm hash regression — fixed by compile-time hash-strip in prepublish
- **triage #324**: Bug screenshot without steps — requested reproduction details

---

## [2.6.2] — 2026-03-16

> Sprint: module hashing fully fixed, 2 PRs merged (Anthropic tools filter + custom endpoint paths), Alibaba Cloud DashScope provider added, 3 stale issues closed.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(build)**: Extended webpack `externals` hash-strip to cover ALL `serverExternalPackages`, not just `better-sqlite3`. Next.js 16 Turbopack hashes `zod`, `pino`, and every other server-external package into names like `zod-dcb22c6336e0bc69` that don't exist in `node_modules` at runtime. A HASH_PATTERN regex catch-all now strips the 16-char suffix and falls back to the base package name. Also added `NEXT_PRIVATE_BUILD_WORKER=0` in `prepublish.mjs` to reinforce webpack mode, plus a post-build scan that reports any remaining hashed refs. (#396, #398, PR #403)
- **fix(chat)**: Anthropic-format tool names (`tool.name` without `.function` wrapper) were silently dropped by the empty-name filter introduced in #346. LiteLLM proxies requests with `anthropic/` prefix in Anthropic Messages API format, causing all tools to be filtered and Anthropic to return `400: tool_choice.any may only be specified while providing tools`. Fixed by falling back to `tool.name` when `tool.function.name` is absent. Added 8 regression unit tests. (PR #397)

### विशेषताएं

- **feat(api)**: Custom endpoint paths for OpenAI-compatible provider nodes — configure `chatPath` and `modelsPath` per node (e.g. `/v4/chat/completions`) in the provider connection UI. Includes a DB migration (`003_provider_node_custom_paths.sql`) and URL path sanitization (no `..` traversal, must start with `/`). (PR #400)
- **feat(provider)**: Alibaba Cloud DashScope added as OpenAI-compatible provider. International endpoint: `dashscope-intl.aliyuncs.com/compatible-mode/v1`. 12 models: `qwen-max`, `qwen-plus`, `qwen-turbo`, `qwen3-coder-plus/flash`, `qwq-plus`, `qwq-32b`, `qwen3-32b`, `qwen3-235b-a22b`. Auth: Bearer API key.

### 📋 Issues Closed

- **close #323**: Cline connection error `[object Object]` — fixed in v2.3.7; instructed user to upgrade from v2.2.9
- **close #337**: Kiro credit tracking — implemented in v2.5.5 (#381); pointed user to Dashboard → Usage
- **triage #402**: ARM64 macOS DMG damaged — requested macOS version, exact error, and advised `xattr -d com.apple.quarantine` workaround

---

## [2.6.1] — 2026-03-15

> Critical startup fix: v2.6.0 global npm installs crashed with a 500 error due to a Turbopack/webpack module-name hashing bug in the Next.js 16 instrumentation hook.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(build)**: Force `better-sqlite3` to always be required by its exact package name in the webpack server bundle. Next.js 16 compiled the instrumentation hook into a separate chunk and emitted `require('better-sqlite3-<hash>')` — a hashed module name that doesn't exist in `node_modules` — even though the package was listed in `serverExternalPackages`. Added an explicit `externals` function to the server webpack config so the bundler always emits `require('better-sqlite3')`, resolving the startup `500 Internal Server Error` on clean global installs. (#394, PR #395)

### 🔧 CI

- **ci**: Added `workflow_dispatch` to `npm-publish.yml` with version sync safeguard for manual triggers (#392)
- **ci**: Added `workflow_dispatch` to `docker-publish.yml`, updated GitHub Actions to latest versions (#392)

---

## [2.6.0] - 2026-03-15

> Issue resolution sprint: 4 bugs fixed, logs UX improved, Kiro credit tracking added.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(media)**: ComfyUI and SD WebUI no longer appear in the Media page provider list when unconfigured — fetches `/api/providers` on mount and hides local providers with no connections (#390)
- **fix(auth)**: Round-robin no longer re-selects rate-limited accounts immediately after cooldown — `backoffLevel` is now used as primary sort key in the LRU rotation (#340)
- **fix(oauth)**: Qoder (and other providers that redirect to their own UI) no longer leave the OAuth modal stuck at "Waiting for Authorization" — popup-closed detector auto-transitions to manual URL input mode (#344)
- **fix(logs)**: Request log table is now readable in light mode — status badges, token counts, and combo tags use adaptive `dark:` color classes (#378)

### विशेषताएं

- **feat(kiro)**: Kiro credit tracking added to usage fetcher — queries `getUserCredits` from AWS CodeWhisperer endpoint (#337)

### 🛠 Chores

- **chore(tests)**: Aligned `test:plan3`, `test:fixes`, `test:security` to use same `tsx/esm` loader as `npm test` — eliminates module resolution false negatives in targeted runs (PR #386)

---

## [2.5.9] - 2026-03-15

> Codex native passthrough fix + route body validation hardening.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(codex)**: Preserve native Responses API passthrough for Codex clients — avoids unnecessary translation mutations (PR #387)
- **fix(api)**: Validate request bodies on pricing/sync and task-routing routes — prevents crashes from malformed inputs (PR #388)
- **fix(auth)**: JWT secrets persist across restarts via `src/lib/db/secrets.ts` — eliminates 401 errors after pm2 restart (PR #388)

---

## [2.5.8] - 2026-03-15

> Build fix: restore VPS connectivity broken by v2.5.7 incomplete publish.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(build)**: `scripts/prepublish.mjs` still used deprecated `--webpack` flag causing Next.js standalone build to fail silently — npm publish completed without `app/server.js`, breaking VPS deployment

---

## [2.5.7] - 2026-03-15

> Media playground error handling fixes.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(media)**: Transcription "API Key Required" false positive when audio contains no speech (music, silence) — now shows "No speech detected" instead
- **fix(media)**: `upstreamErrorResponse` in `audioTranscription.ts` and `audioSpeech.ts` now returns proper JSON (`{error:{message}}`), enabling correct 401/403 credential error detection in the MediaPageClient
- **fix(media)**: `parseApiError` now handles Deepgram's `err_msg` field and detects `"api key"` in error messages for accurate credential error classification

---

## [2.5.6] - 2026-03-15

> Critical security/auth fixes: Antigravity OAuth broken + JWT sessions lost after restart.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(oauth) #384**: Antigravity Google OAuth now correctly sends `client_secret` to the token endpoint. The fallback for `ANTIGRAVITY_OAUTH_CLIENT_SECRET` was an empty string, which is falsy — so `client_secret` was never included in the request, causing `"client_secret is missing"` errors for all users without a custom env var. Closes #383.
- **fix(auth) #385**: `JWT_SECRET` is now persisted to SQLite (`namespace='secrets'`) on first generation and reloaded on subsequent starts. Previously, a new random secret was generated each process startup, invalidating all existing cookies/sessions after any restart or upgrade. Affects both `JWT_SECRET` and `API_KEY_SECRET`. Closes #382.

---

## [2.5.5] - 2026-03-15

> Model list dedup fix, Electron standalone build hardening, and Kiro credit tracking.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(models) #380**: `GET /api/models` now includes provider aliases when building the active-provider filter — models for `claude` (alias `cc`) and `github` (alias `gh`) were always shown regardless of whether a connection was configured, because `PROVIDER_MODELS` keys are aliases but DB connections are stored under provider IDs. Fixed by expanding each active provider ID to also include its alias via `PROVIDER_ID_TO_ALIAS`. Closes #353.
- **fix(electron) #379**: New `scripts/prepare-electron-standalone.mjs` stages a dedicated `/.next/electron-standalone` bundle before Electron packaging. Aborts with a clear error if `node_modules` is a symlink (electron-builder would ship a runtime dependency on the build machine). Cross-platform path sanitization via `path.basename`. By @kfiramar.

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **feat(kiro) #381**: Kiro credit balance tracking — usage endpoint now returns credit data for Kiro accounts by calling `codewhisperer.us-east-1.amazonaws.com/getUserCredits` (same endpoint Kiro IDE uses internally). Returns remaining credits, total allowance, renewal date, and subscription tier. Closes #337.

## [2.5.4] - 2026-03-15

> Logger startup fix, login bootstrap security fix, and dev HMR reliability improvement. CI infrastructure hardened.

### 🐛 Bug Fixes (PRs #374, #375, #376 by @kfiramar)

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(logger) #376**: Restore pino transport logger path — `formatters.level` combined with `transport.targets` is rejected by pino. Transport-backed configs now strip the level formatter via `getTransportCompatibleConfig()`. Also corrects numeric level mapping in `/api/logs/console`: `30→info, 40→warn, 50→error` (was shifted by one).
- **fix(login) #375**: Login page now bootstraps from the public `/api/settings/require-login` endpoint instead of the protected `/api/settings`. In password-protected setups, the pre-auth page was receiving a 401 and falling back to safe defaults unnecessarily. The public route now returns all bootstrap metadata (`requireLogin`, `hasPassword`, `setupComplete`) with a conservative 200 fallback on error.
- **fix(dev) #374**: Add `localhost` and `127.0.0.1` to `allowedDevOrigins` in `next.config.mjs` — HMR websocket was blocked when accessing the app via loopback address, producing repeated cross-origin warnings.

### 🔧 CI & Infrastructure

- **ESLint OOM fix**: `eslint.config.mjs` now ignores `vscode-extension/**`, `electron/**`, `docs/**`, `app/.next/**`, and `clipr/**` — ESLint was crashing with a JS heap OOM by scanning VS Code binary blobs and compiled chunks.
- **Unit test fix**: Removed stale `ALTER TABLE provider_connections ADD COLUMN "group"` from 2 test files — column is now part of the base schema (added in #373), causing `SQLITE_ERROR: duplicate column name` on every CI run.
- **Pre-commit hook**: Added `npm run test:unit` to `.husky/pre-commit` — unit tests now block broken commits before they reach CI.

## [2.5.3] - 2026-03-14

> Critical bugfixes: DB schema migration, startup env loading, provider error state clearing, and i18n tooltip fix. Code quality improvements on top of each PR.

### 🐛 Bug Fixes (PRs #369, #371, #372, #373 by @kfiramar)

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix(db) #373**: Add `provider_connections.group` column to base schema + backfill migration for existing databases — column was used in all queries but missing from schema definition
- **fix(i18n) #371**: Replace non-existent `t("deleteConnection")` key with existing `providers.delete` key — fixes `MISSING_MESSAGE: providers.deleteConnection` runtime error on provider detail page
- **fix(auth) #372**: Clear stale error metadata (`errorCode`, `lastErrorType`, `lastErrorSource`) from provider accounts after genuine recovery — previously, recovered accounts kept appearing as failed
- **fix(startup) #369**: Unify env loading across `npm run start`, `run-standalone.mjs`, and Electron to respect `DATA_DIR/.env → ~/.omniroute/.env → ./.env` priority — prevents generating a new `STORAGE_ENCRYPTION_KEY` over an existing encrypted database

### 🔧 Code Quality

- Documented `result.success` vs `response?.ok` patterns in `auth.ts` (both intentional, now explained)
- Normalized `overridePath?.trim()` in `electron/main.js` to match `bootstrap-env.mjs`
- Added `preferredEnv` merge order comment in Electron startup

> Codex account quota policy with auto-rotation, fast tier toggle, gpt-5.4 model, and analytics label fix.

### ✨ New Features (PRs #366, #367, #368)

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Codex Quota Policy (PR #366)**: Per-account 5h/weekly quota window toggles in Provider dashboard. Accounts are automatically skipped when enabled windows reach 90% threshold and re-admitted after `resetAt`. Includes `quotaCache.ts` with side-effect free status getter.
- **Codex Fast Tier Toggle (PR #367)**: Dashboard → Settings → Codex Service Tier. Default-off toggle injects `service_tier: "flex"` only for Codex requests, reducing cost ~80%. Full stack: UI tab + API endpoint + executor + translator + startup restore.
- **gpt-5.4 Model (PR #368)**: Adds `cx/gpt-5.4` and `codex/gpt-5.4` to the Codex model registry. Regression test included.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix #356**: Analytics charts (Top Provider, By Account, Provider Breakdown) now display human-readable provider names/labels instead of raw internal IDs for OpenAI-compatible providers.

> Major release: strict-random routing strategy, API key access controls, connection groups, external pricing sync, and critical bug fixes for thinking models, combo testing, and tool name validation.

### ✨ New Features (PRs #363 & #365)

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Strict-Random Routing Strategy**: Fisher-Yates shuffle deck with anti-repeat guarantee and mutex serialization for concurrent requests. Independent decks per combo and per provider.
- **API Key Access Controls**: `allowedConnections` (restrict which connections a key can use), `is_active` (enable/disable key with 403), `accessSchedule` (time-based access control), `autoResolve` toggle, rename keys via PATCH.
- **Connection Groups**: Group provider connections by environment. Accordion view in Limits page with localStorage persistence and smart auto-switch.
- **External Pricing Sync (LiteLLM)**: 3-tier pricing resolution (user overrides → synced → defaults). Opt-in via `PRICING_SYNC_ENABLED=true`. MCP tool `omniroute_sync_pricing`. 23 new tests.
- **i18n**: 30 languages updated with strict-random strategy, API key management strings. pt-BR fully translated.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **fix #355**: Stream idle timeout increased from 60s to 300s — prevents aborting extended-thinking models (claude-opus-4-6, o3, etc.) during long reasoning phases. Configurable via `STREAM_IDLE_TIMEOUT_MS`.
- **fix #350**: Combo test now bypasses `REQUIRE_API_KEY=true` using internal header, and uses OpenAI-compatible format universally. Timeout extended from 15s to 20s.
- **fix #346**: Tools with empty `function.name` (forwarded by Claude Code) are now filtered before upstream providers receive them, preventing "Invalid input[N].name: empty string" errors.

### 🗑️ Closed Issues

- **#341**: Debug section removed — replacement is `/dashboard/logs` and `/dashboard/health`.

> API Key Round-Robin support for multi-key provider setups, and confirmation of wildcard routing and quota window rolling already in place.

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **API Key Round-Robin (T07)**: Provider connections can now hold multiple API keys (Edit Connection → Extra API Keys). Requests rotate round-robin between primary + extra keys via `providerSpecificData.extraApiKeys[]`. Keys are held in-memory indexed per connection — no DB schema changes required.

### 📝 Already Implemented (confirmed in audit)

- **Wildcard Model Routing (T13)**: `wildcardRouter.ts` with glob-style wildcard matching (`gpt*`, `claude-?-sonnet`, etc.) is already integrated into `model.ts` with specificity ranking.
- **Quota Window Rolling (T08)**: `accountFallback.ts:isModelLocked()` already auto-advances the window — if `Date.now() > entry.until`, lock is deleted immediately (no stale blocking).

> UI polish, routing strategy additions, and graceful error handling for usage limits.

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Fill-First & P2C Routing Strategies**: Added `fill-first` (drain quota before moving on) and `p2c` (Power-of-Two-Choices low-latency selection) to combo strategy picker, with full guidance panels and color-coded badges.
- **Free Stack Preset Models**: Creating a combo with the Free Stack template now auto-fills 7 best-in-class free provider models (Gemini CLI, Kiro, Qoder×2, Qwen, NVIDIA NIM, Groq). Users just activate the providers and get a $0/month combo out-of-the-box.
- **Wider Combo Modal**: Create/Edit combo modal now uses `max-w-4xl` for comfortable editing of large combos.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Limits page HTTP 500 for Codex & GitHub**: `getCodexUsage()` and `getGitHubUsage()` now return a user-friendly message when the provider returns 401/403 (expired token), instead of throwing and causing a 500 error on the Limits page.
- **MaintenanceBanner false-positive**: Banner no longer shows "Server is unreachable" spuriously on page load. Fixed by calling `checkHealth()` immediately on mount and removing stale `show`-state closure.
- **Provider icon tooltips**: Edit (pencil) and delete icon buttons in the provider connection row now have native HTML tooltips — all 6 action icons are now self-documented.

> Multiple improvements from community issue analysis, new provider support, bug fixes for token tracking, model routing, and streaming reliability.

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Task-Aware Smart Routing (T05)**: Automatic model selection based on request content type — coding → deepseek-chat, analysis → gemini-2.5-pro, vision → gpt-4o, summarization → gemini-2.5-flash. Configurable via Settings. New `GET/PUT/POST /api/settings/task-routing` API.
- **HuggingFace Provider**: Added HuggingFace Router as an OpenAI-compatible provider with Llama 3.1 70B/8B, Qwen 2.5 72B, Mistral 7B, Phi-3.5 Mini.
- **Vertex AI Provider**: Added Vertex AI (Google Cloud) provider with Gemini 2.5 Pro/Flash, Gemma 2 27B, Claude via Vertex.
- **Playground File Uploads**: Audio upload for transcription, image upload for vision models (auto-detect by model name), inline image rendering for image generation results.
- **Model Select Visual Feedback**: Already-added models in combo picker now show ✓ green badge — prevents duplicate confusion.
- **Qwen Compatibility (PR #352)**: Updated User-Agent and CLI fingerprint settings for Qwen provider compatibility.
- **Round-Robin State Management (PR #349)**: Enhanced round-robin logic to handle excluded accounts and maintain rotation state correctly.
- **Clipboard UX (PR #360)**: Hardened clipboard operations with fallback for non-secure contexts; Claude tool normalization improvements.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Fix #302 — OpenAI SDK stream=False drops tool_calls**: T01 Accept header negotiation no longer forces streaming when `body.stream` is explicitly `false`. Was causing tool_calls to be silently dropped when using the OpenAI Python SDK in non-streaming mode.
- **Fix #73 — Claude Haiku routed to OpenAI without provider prefix**: `claude-*` models sent without a provider prefix now correctly route to the `antigravity` (Anthropic) provider. Added `gemini-*`/`gemma-*` → `gemini` heuristic as well.
- **Fix #74 — Token counts always 0 for Antigravity/Claude streaming**: The `message_start` SSE event which carries `input_tokens` was not being parsed by `extractUsage()`, causing all input token counts to drop. Input/output token tracking now works correctly for streaming responses.
- **Fix #180 — Model import duplicates with no feedback**: `ModelSelectModal` now shows ✓ green highlight for models already in the combo, making it obvious they're already added.
- **Media page generation errors**: Image results now render as `<img>` tags instead of raw JSON. Transcription results shown as readable text. Credential errors show an amber banner instead of silent failure.
- **Token refresh button on provider page**: Manual token refresh UI added for OAuth providers.

### 🔧 Improvements

- **Provider Registry**: HuggingFace and Vertex AI added to `providerRegistry.ts` and `providers.ts` (frontend).
- **Read Cache**: New `src/lib/db/readCache.ts` for efficient DB read caching.
- **Quota Cache**: Improved quota cache with TTL-based eviction.

### 📦 Dependencies

- `dompurify` → 3.3.3 (PR #347)
- `undici` → 7.24.2 (PR #348, #361)
- `docker/setup-qemu-action` → v4 (PR #342)
- `docker/setup-buildx-action` → v4 (PR #343)

### 📁 New Files

| File                                          | Purpose                                 |
| --------------------------------------------- | --------------------------------------- |
| `open-sse/services/taskAwareRouter.ts`        | Task-aware routing logic (7 task types) |
| `src/app/api/settings/task-routing/route.ts`  | Task routing config API                 |
| `src/app/api/providers/[id]/refresh/route.ts` | Manual OAuth token refresh              |
| `src/lib/db/readCache.ts`                     | Efficient DB read cache                 |
| `src/shared/utils/clipboard.ts`               | Hardened clipboard with fallback        |

## [2.4.1] - 2026-03-13

### 🐛 Fix

- **Combos modal: Free Stack visible and prominent** — Free Stack template was hidden (4th in 3-column grid). Fixed: moved to position 1, switched to 2x2 grid so all 4 templates are visible, green border + FREE badge highlight.

## [2.4.0] - 2026-03-13

> **Major release** — Free Stack ecosystem, transcription playground overhaul, 44+ providers, comprehensive free tier documentation, and UI improvements across the board.

### विशेषताएं

- **Combos: Free Stack template** — New 4th template "Free Stack ($0)" using round-robin across Kiro + Qoder + Qwen + Gemini CLI. Suggests the pre-built zero-cost combo on first use.
- **Media/Transcription: Deepgram as default** — Deepgram (Nova 3, $200 free) is now the default transcription provider. AssemblyAI ($50 free) and Groq Whisper (free forever) shown with free credit badges.
- **README: "Start Free" section** — New early-README 5-step table showing how to set up zero-cost AI in minutes.
- **README: Free Transcription Combo** — New section with Deepgram/AssemblyAI/Groq combo suggestion and per-provider free credit details.
- **providers.ts: hasFree flag** — NVIDIA NIM, Cerebras, and Groq marked with hasFree badge and freeNote for the providers UI.
- **i18n: templateFreeStack keys** — Free Stack combo template translated and synced to all 30 languages.

## [2.3.16] - 2026-03-13

### दस्तावेज़

- **README: 44+ Providers** — Updated all 3 occurrences of "36+ providers" to "44+" reflecting the actual codebase count (44 providers in providers.ts)
- **README: New Section "🆓 Free Models — What You Actually Get"** — Added 7-provider table with per-model rate limits for: Kiro (Claude unlimited via AWS Builder ID), Qoder (5 models unlimited), Qwen (4 models unlimited), Gemini CLI (180K/mo), NVIDIA NIM (~40 RPM dev-forever), Cerebras (1M tok/day / 60K TPM), Groq (30 RPM / 14.4K RPD). Includes the \/usr/bin/bash Ultimate Free Stack combo recommendation.
- **README: Pricing Table Updated** — Added Cerebras to API KEY tier, fixed NVIDIA from "1000 credits" to "dev-forever free", updated Qoder/Qwen model counts and names
- **README: Qoder 8→5 models** (named: kimi-k2-thinking, qwen3-coder-plus, deepseek-r1, minimax-m2, kimi-k2)
- **README: Qwen 3→4 models** (named: qwen3-coder-plus, qwen3-coder-flash, qwen3-coder-next, vision-model)

## [2.3.15] - 2026-03-13

### विशेषताएं

- **Auto-Combo Dashboard (Tier Priority)**: Added `🏷️ Tier` as the 7th scoring factor label in the `/dashboard/auto-combo` factor breakdown display — all 7 Auto-Combo scoring factors are now visible.
- **i18n — autoCombo section**: Added 20 new translation keys for the Auto-Combo dashboard (`title`, `status`, `modePack`, `providerScores`, `factorTierPriority`, etc.) to all 30 language files.

## [2.3.14] - 2026-03-13

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Qoder OAuth (#339)**: Restored the valid default `clientSecret` — was previously an empty string, causing "Bad client credentials" on every connect attempt. The public credential is now the default fallback (overridable via `QODER_OAUTH_CLIENT_SECRET` env var).
- **MITM server not found (#335)**: `prepublish.mjs` now compiles `src/mitm/*.ts` to JavaScript using `tsc` before copying to the npm bundle. Previously only raw `.ts` files were copied — meaning `server.js` never existed in npm/Volta global installs.
- **GeminiCLI missing projectId (#338)**: Instead of throwing a hard 500 error when `projectId` is missing from stored credentials (e.g. after Docker restart), OmniRoute now logs a warning and attempts the request — returning a meaningful provider-side error instead of an OmniRoute crash.
- **Electron version mismatch (#323)**: Synced `electron/package.json` version to `2.3.13` (was `2.0.13`) so the desktop binary version matches the npm package.

### ✨ New Models (#334)

- **Kiro**: `claude-sonnet-4`, `claude-opus-4.6`, `deepseek-v3.2`, `minimax-m2.1`, `qwen3-coder-next`, `auto`
- **Codex**: `gpt5.4`

### 🔧 Improvements

- **Tier Scoring (API + Validation)**: Added `tierPriority` (weight `0.05`) to the `ScoringWeights` Zod schema and the `combos/auto` API route — the 7th scoring factor is now fully accepted by the REST API and validated on input. `stability` weight adjusted from `0.10` to `0.05` to keep total sum = `1.0`.

### ✨ New Features

- **feat(providers):** Implement Image Generation and Editing capabilities for ChatGPT Web, including in-band chat image generation and caching (#1606).
- **feat(ui):** Integrate OpenCode Zen/Go API tool logo SVG and polish API key copy-to-clipboard interactions (#1607).

- **feat(providers):** Integrate AgentRouter as a new OpenAI-compatible passthrough provider with $200 free credits via sign-up (Issue #1572).
- **feat(ui):** Implement on-demand per-model testing in the provider dashboard, allowing single-token diagnostic checks without triggering rate-limits (Issue #1532).

- **Tiered Quota Scoring (Auto-Combo)**: Added `tierPriority` as a 7th scoring factor — accounts with Ultra/Pro tiers are now preferred over Free tiers when other factors are equal. New optional fields `accountTier` and `quotaResetIntervalSecs` on `ProviderCandidate`. All 4 mode packs updated (`ship-fast`, `cost-saver`, `quality-first`, `offline-friendly`).
- **Intra-Family Model Fallback (T5)**: When a model is unavailable (404/400/403), OmniRoute now automatically falls back to sibling models from the same family before returning an error (`modelFamilyFallback.ts`).
- **Configurable API Bridge Timeout**: `API_BRIDGE_PROXY_TIMEOUT_MS` env var lets operators tune the proxy timeout (default 30s). Fixes 504 errors on slow upstream responses. (#332)
- **Star History**: Replaced star-history.com widget with starchart.cc (`?variant=adaptive`) in all 30 READMEs — adapts to light/dark theme, real-time updates.

### 🐛 Bug Fixes

- **fix(mitm):** Compile MITM utilities as NodeNext ESM during prepublish, copy the CommonJS MITM server into the standalone artifact, and resolve MITM data paths without relying on Next.js aliases in packaged runtime.
- **fix(build):** Move the local `.tmp/wine32` Wine prefix out of the isolated Next.js build path so Windows Electron packaging artifacts cannot trigger `EACCES` scans during Node 24 builds.
- **fix(build):** Copy the `wreq-js` native runtime directory into the isolated Next.js standalone output so packaged Playwright/E2E starts can load the instrumentation hook on Linux.
- **fix(api):** Validate the Codex Responses websocket bridge and `/v1/batches` JSON payloads with Zod before use, keeping `request.json()` route validation green and returning explicit 400 responses for invalid bodies.
- **fix(providers):** Add explicit typing to provider alias and category helpers so the strict `typecheck:noimplicit:core` CI gate passes.
- **fix(ui):** Keep the upstream proxy provider detail page labeled with a fallback "Managed via Upstream Proxy Settings" management surface when translations are unavailable.
- **fix(electron):** Harden the production desktop CSP by removing `unsafe-eval` outside development and adding object, base URI, form action, frame ancestor, and worker restrictions.
- **fix(cli):** Replace shell-interpolated setup and privileged command execution paths with argument-based `spawn`/`execFile` helpers for database setup, Tailscale sudo commands, MITM DNS edits, and certificate install/uninstall flows.
- **fix(ui):** Keep provider icons resilient by using direct `@lobehub/icons` components first, then local PNG/SVG fallbacks, avoiding the `@lobehub/ui` peer runtime in the dashboard.

- **Auth — First-time password**: `INITIAL_PASSWORD` env var is now accepted when setting the first dashboard password. Uses `timingSafeEqual` for constant-time comparison, preventing timing attacks. (#333)
- **README Truncation**: Fixed a missing `</details>` closing tag in the Troubleshooting section that caused GitHub to stop rendering everything below it (Tech Stack, Docs, Roadmap, Contributors).
- **pnpm install**: Removed redundant `@swc/helpers` override from `package.json` that conflicted with the direct dependency, causing `EOVERRIDE` errors on pnpm. Added `pnpm.onlyBuiltDependencies` config.
- **CLI Path Injection (T12)**: Added `isSafePath()` validator in `cliRuntime.ts` to block path traversal and shell metacharacters in `CLI_*_BIN` env vars.
- **CI**: Regenerated `package-lock.json` after override removal to fix `npm ci` failures on GitHub Actions.

### 🔧 Improvements

- **Response Format (T1)**: `response_format` (json_schema/json_object) now injected as a system prompt for Claude, enabling structured output compatibility.
- **429 Retry (T2)**: Intra-URL retry for 429 responses (2× attempts with 2s delay) before falling back to next URL.
- **Gemini CLI Headers (T3)**: Added `User-Agent` and `X-Goog-Api-Client` fingerprint headers for Gemini CLI compatibility.
- **Pricing Catalog (T9)**: Added `deepseek-3.1`, `deepseek-3.2`, and `qwen3-coder-next` pricing entries.

### 📁 New Files

| File                                       | Purpose                                                  |
| ------------------------------------------ | -------------------------------------------------------- |
| `open-sse/services/modelFamilyFallback.ts` | Model family definitions and intra-family fallback logic |

### Fixed

- **KiloCode**: kilocode healthcheck timeout already fixed in v2.3.11
- **OpenCode**: Add opencode to cliRuntime registry with 15s healthcheck timeout
- **OpenClaw / Cursor**: Increase healthcheck timeout to 15s for slow-start variants
- **VPS**: Install droid and openclaw npm packages; activate CLI_EXTRA_PATHS for kiro-cli
- **cliRuntime**: Add opencode tool registration and increase timeout for continue

## [2.3.11] - 2026-03-12

### Fixed

- **KiloCode healthcheck**: Increase `healthcheckTimeoutMs` from 4000ms to 15000ms — kilocode renders an ASCII logo banner on startup causing false `healthcheck_failed` on slow/cold-start environments

## [2.3.10] - 2026-03-12

### Fixed

- **Lint**: Fix `check:any-budget:t11` failure — replace `as any` with `as Record<string, unknown>` in OAuthModal.tsx (3 occurrences)

### Docs

- **CLI-TOOLS.md**: Complete guide for all 11 CLI tools (claude, codex, gemini, opencode, cline, kilocode, continue, kiro-cli, cursor, droid, openclaw)
- **i18n**: CLI-TOOLS.md synced to 30 languages with translated title + intro

## [2.3.8] - 2026-03-12
=======
-**ठीक करें(प्रदाता)**: 5 प्रदाताओं से गैर-मौजूद मॉडल नाम हटा दिए गए: -**मिथुन/मिथुन-क्ली**: `मिथुन-3.1-प्रो/फ़्लैश` और `मिथुन-3-*-पूर्वावलोकन` हटा दिए गए (Google API v1beta में मौजूद नहीं हैं); `मिथुन-2.5-प्रो`, `मिथुन-2.5-फ्लैश`, `मिथुन-2.0-फ्लैश`, `मिथुन-1.5-प्रो/फ्लैश` से प्रतिस्थापित -**एंटीग्रेविटी**: `जेमिनी-3.1-प्रो-हाई/लो` और `जेमिनी-3-फ्लैश` (अमान्य आंतरिक उपनाम) हटा दिए गए; वास्तविक 2.x मॉडल से प्रतिस्थापित -**जीथब (कोपायलट)**: `जेमिनी-3-फ्लैश-प्रीव्यू` और `जेमिनी-3-प्रो-प्रीव्यू` हटा दिया गया; `जेमिनी-2.5-फ़्लैश` से प्रतिस्थापित -**एनवीडिया**: सही किया गया `एनवीडिया/ल्लामा-3.3-70बी-इंस्ट्रक्ट` → `मेटा/लामा-3.3-70बी-इंस्ट्रक्ट` (एनवीडिया एनआईएम मेटा मॉडल के लिए `मेटा/` नेमस्पेस का उपयोग करता है); `nvidia/llama-3.1-70b-instruct` और `nvidia/llama-3.1-405b-instruct` जोड़ा गया -**फिक्स (डीबी/कॉम्बो)**: रिमोट डीबी पर `फ्री-स्टैक` कॉम्बो अपडेट किया गया: `qw/qwen3-coder-plus` (समाप्त ताज़ा टोकन) को हटा दिया गया, `nvidia/llama-3.3-70b-instruct` को सही किया गया → `nvidia/meta/llama-3.3-70b-instruct` को सही किया गया `मिथुन/मिथुन-3.1-फ़्लैश` → `मिथुन/मिथुन-2.5-फ़्लैश`, जोड़ा गया `if/डीपसीक-v3.2`---

## [2.6.3] — 2026-03-16

> स्प्रिंट: ज़ॉड/पिनो हैश-स्ट्रिप को बिल्ड पाइपलाइन में बेक किया गया, सिंथेटिक प्रदाता जोड़ा गया, वीपीएस पीएम2 पथ को सही किया गया।### 🐛 Bug Fixes

-**फिक्स (बिल्ड)**: टर्बोपैक हैश-स्ट्रिप अब सभी पैकेजों के लिए**संकलन समय**पर चलता है - न कि केवल `बेहतर-sqlite3` के लिए। `prepublish.mjs` में चरण 5.6 `app/.next/server/` में प्रत्येक `.js` को चलाता है और किसी भी हैशेड `require()` से 16-चार हेक्स प्रत्यय को हटा देता है। Fixes `zod-dcb22c...`, `pino-...`, etc. MODULE_NOT_FOUND on global npm installs. #398 बंद होता है -**फिक्स(तैनाती)**: दोनों वीपीएस पर पीएम2 पुरानी गिट-क्लोन निर्देशिकाओं की ओर इशारा कर रहा था। npm वैश्विक पैकेज में `app/server.js` पर पुनः कॉन्फ़िगर किया गया। `npm पैक + scp` का उपयोग करने के लिए `/deploy-vps` वर्कफ़्लो को अपडेट किया गया (npm रजिस्ट्री 299MB पैकेज को अस्वीकार करती है)।### विशेषताएं

-**करतब(प्रदाता)**: सिंथेटिक ([सिंथेटिक.नया](https://synthetic.new)) - गोपनीयता-केंद्रित ओपनएआई-संगत अनुमान। डायनामिक हगिंगफेस मॉडल कैटलॉग के लिए `पासथ्रूमॉडल: सच`। प्रारंभिक मॉडल: किमी K2.5, मिनीमैक्स M2.5, GLM 4.7, डीपसीक V3.2। (पीआर #404 @Regis-RCR द्वारा)### 📋 Issues Closed

-**#398 बंद करें**: एनपीएम हैश रिग्रेशन - प्रीपब्लिश में कंपाइल-टाइम हैश-स्ट्रिप द्वारा तय किया गया -**ट्राएज #324**: चरणों के बिना बग स्क्रीनशॉट - अनुरोधित पुनरुत्पादन विवरण---

## [2.6.2] — 2026-03-16

> स्प्रिंट: मॉड्यूल हैशिंग पूरी तरह से ठीक हो गई, 2 पीआर मर्ज हो गए (एंथ्रोपिक टूल फ़िल्टर + कस्टम एंडपॉइंट पथ), अलीबाबा क्लाउड डैशस्कोप प्रदाता जोड़ा गया, 3 पुराने मुद्दे बंद हो गए।### 🐛 Bug Fixes

-**फिक्स (बिल्ड)**: विस्तारित वेबपैक `एक्सटर्नल` हैश-स्ट्रिप सभी `सर्वरएक्सटर्नलपैकेज` को कवर करने के लिए, न कि केवल `बेहतर-sqlite3` को। Next.js 16 टर्बोपैक ने `zod`, `pino`, और हर दूसरे सर्वर-बाहरी पैकेज को `zod-dcb22c6336e0bc69` जैसे नामों में बदल दिया है जो रनटाइम पर `node_modules` में मौजूद नहीं हैं। एक HASH*PATTERN रेगेक्स कैच-ऑल अब 16-चार प्रत्यय को हटा देता है और बेस पैकेज नाम पर वापस आ जाता है। वेबपैक मोड को सुदृढ़ करने के लिए `prepublish.mjs` में `NEXT_PRIVATE_BUILD_WORKER=0` भी जोड़ा गया है, साथ ही एक पोस्ट-बिल्ड स्कैन भी जोड़ा गया है जो किसी भी शेष हैश रेफरी की रिपोर्ट करता है। (#396, #398, पीआर #403) -**फिक्स(चैट)**: एंथ्रोपिक-फॉर्मेट टूल नाम (`टूल.नाम` बिना `.फंक्शन` रैपर के) को #346 में पेश किए गए खाली-नाम फिल्टर द्वारा चुपचाप हटा दिया गया था। लाइटएलएलएम एंथ्रोपिक मैसेज एपीआई प्रारूप में `एंथ्रोपिक/` उपसर्ग के साथ प्रॉक्सी अनुरोध करता है, जिससे सभी टूल फ़िल्टर हो जाते हैं और एंथ्रोपिक `400 लौटाता है: टूल*चॉइस.एनी केवल टूल प्रदान करते समय निर्दिष्ट किया जा सकता है`। `टूल.फंक्शन.नाम`अनुपस्थित होने पर`टूल.नाम` पर वापस आकर ठीक किया गया। 8 प्रतिगमन इकाई परीक्षण जोड़े गए। (पीआर #397)### विशेषताएं

-**feat(api)**: OpenAI-संगत प्रदाता नोड्स के लिए कस्टम एंडपॉइंट पथ - प्रदाता कनेक्शन यूआई में `chatPath` और `modelPath` प्रति नोड (उदाहरण के लिए `/v4/chat/completions`) कॉन्फ़िगर करें। एक DB माइग्रेशन (`003_provider_node_custom_paths.sql`) और URL पथ सैनिटाइजेशन (कोई `..` ट्रैवर्सल नहीं, `/` से शुरू होना चाहिए) शामिल है। (पीआर #400) -**फीचर (प्रदाता)**: अलीबाबा क्लाउड डैशस्कोप को ओपनएआई-संगत प्रदाता के रूप में जोड़ा गया। अंतर्राष्ट्रीय समापन बिंदु: `dashscope-intl.aliyuncs.com/compatible-mode/v1`। 12 मॉडल: `क्वेन-मैक्स`, `क्वेन-प्लस`, `क्वेन-टर्बो`, `क्वेन3-कोडर-प्लस/फ्लैश`, `क्यूडब्ल्यूक्यू-प्लस`, `क्यूडब्ल्यूक्यू-32बी`, `क्वेन3-32बी`, `क्वेन3-235बी-ए22बी`। प्रामाणिक: बियरर एपीआई कुंजी।### 📋 Issues Closed

-**#323 बंद करें**: क्लाइन कनेक्शन त्रुटि `[ऑब्जेक्ट ऑब्जेक्ट]` - v2.3.7 में ठीक किया गया; उपयोगकर्ता को v2.2.9 से अपग्रेड करने का निर्देश दिया -**#337 बंद करें**: किरो क्रेडिट ट्रैकिंग - v2.5.5 (#381) में लागू किया गया; उपयोगकर्ता को डैशबोर्ड → उपयोग की ओर इंगित करें -**ट्राइएज #402**: ARM64 macOS DMG क्षतिग्रस्त - macOS संस्करण का अनुरोध किया गया, सटीक त्रुटि, और `xattr -d com.apple.quarantine` समाधान की सलाह दी गई---

## [2.6.1] — 2026-03-15

> महत्वपूर्ण स्टार्टअप फिक्स: नेक्स्ट.जेएस 16 इंस्ट्रूमेंटेशन हुक में टर्बोपैक/वेबपैक मॉड्यूल-नाम हैशिंग बग के कारण v2.6.0 ग्लोबल एनपीएम इंस्टाल 500 त्रुटि के साथ क्रैश हो गया।### 🐛 Bug Fixes

-**फिक्स (बिल्ड)**: वेबपैक सर्वर बंडल में `better-sqlite3` को हमेशा इसके सटीक पैकेज नाम के अनुसार आवश्यक होने के लिए बाध्य करें। Next.js 16 ने इंस्ट्रूमेंटेशन हुक को एक अलग हिस्से में संकलित किया और `require('better-sqlite3-<hash>')` उत्सर्जित किया - एक हैशेड मॉड्यूल नाम जो `node_modules` में मौजूद नहीं है - भले ही पैकेज `serverExternalPackages` में सूचीबद्ध था। सर्वर वेबपैक कॉन्फ़िगरेशन में एक स्पष्ट `बाहरी` फ़ंक्शन जोड़ा गया ताकि बंडलर हमेशा `require('better-sqlite3')` उत्सर्जित करे, जिससे स्वच्छ वैश्विक इंस्टॉल पर स्टार्टअप `500 आंतरिक सर्वर त्रुटि` का समाधान हो सके। (#394, पीआर #395)### 🔧 CI

-**ci**: मैन्युअल ट्रिगर्स के लिए संस्करण सिंक सुरक्षा के साथ `npm-publish.yml` में `workflow_dispatch` जोड़ा गया (#392) -**ci**: `docker-publish.yml` में `workflow_dispatch` जोड़ा गया, GitHub क्रियाओं को नवीनतम संस्करणों में अद्यतन किया गया (#392)---

## [2.6.0] - 2026-03-15

> समस्या समाधान स्प्रिंट: 4 बग ठीक किए गए, लॉग यूएक्स में सुधार किया गया, किरो क्रेडिट ट्रैकिंग जोड़ी गई।### 🐛 Bug Fixes

-**फिक्स (मीडिया)**: अकॉन्फिगर होने पर कॉम्फीयूआई और एसडी वेबयूआई अब मीडिया पेज प्रदाता सूची में दिखाई नहीं देते हैं - माउंट पर `/api/providers` लाता है और बिना किसी कनेक्शन के स्थानीय प्रदाताओं को छुपाता है (#390) -**फिक्स(ऑथ)**: राउंड-रॉबिन अब कूलडाउन के तुरंत बाद दर-सीमित खातों का पुन: चयन नहीं करता है - `बैकऑफलेवल` का उपयोग अब एलआरयू रोटेशन में प्राथमिक सॉर्ट कुंजी के रूप में किया जाता है (#340) -**फिक्स(oauth)**: क्यूडर (और अन्य प्रदाता जो अपने स्वयं के यूआई पर रीडायरेक्ट करते हैं) अब OAuth मोडल को "प्राधिकरण की प्रतीक्षा" पर अटका हुआ नहीं छोड़ते हैं - पॉपअप-बंद डिटेक्टर मैन्युअल यूआरएल इनपुट मोड में ऑटो-ट्रांज़िशन (#344) -**फिक्स (लॉग्स)**: अनुरोध लॉग टेबल अब लाइट मोड में पढ़ने योग्य है - स्टेटस बैज, टोकन काउंट और कॉम्बो टैग अनुकूली `डार्क:` रंग वर्गों का उपयोग करते हैं (#378)### विशेषताएं

-**feat(kiro)**: किरो क्रेडिट ट्रैकिंग को उपयोग फ़ेचर में जोड़ा गया - AWS CodeWhisperer एंडपॉइंट से `getUserCredits` क्वेरीज़ (#337)### 🛠 Chores

-**कोर(परीक्षण)**: समान `tsx/esm` लोडर को `npm test` के रूप में उपयोग करने के लिए `test:plan3`, `test:fixes`, `test:security` को संरेखित किया गया - लक्षित रन में मॉड्यूल रिज़ॉल्यूशन गलत नकारात्मक को समाप्त करता है (PR #386)---

## [2.5.9] - 2026-03-15

> कोडेक्स नेटिव पासथ्रू फिक्स + रूट बॉडी वैलिडेशन हार्डनिंग।### 🐛 Bug Fixes

-**फिक्स (कोडेक्स)**: कोडेक्स क्लाइंट के लिए मूल प्रतिक्रिया एपीआई पासथ्रू को सुरक्षित रखें - अनावश्यक अनुवाद उत्परिवर्तन से बचें (पीआर #387) -**फिक्स (एपीआई)**: मूल्य निर्धारण/सिंक और कार्य-रूटिंग मार्गों पर अनुरोध निकायों को मान्य करें - विकृत इनपुट से क्रैश को रोकता है (पीआर #388) -**फिक्स(ऑथ)**: JWT रहस्य `src/lib/db/secrets.ts` के माध्यम से पुनरारंभ के दौरान बने रहते हैं - pm2 पुनरारंभ के बाद 401 त्रुटियों को समाप्त करता है (PR #388)---

## [2.5.8] - 2026-03-15

> बिल्ड फिक्स: v2.5.7 अपूर्ण प्रकाशन के कारण टूटी हुई VPS कनेक्टिविटी को पुनर्स्थापित करें।### 🐛 Bug Fixes

-**फिक्स (बिल्ड)**: `स्क्रिप्ट/प्रीपब्लिश.एमजेएस` अभी भी अप्रचलित `--वेबपैक` ध्वज का उपयोग करता है जिसके कारण नेक्स्ट.जेएस स्टैंडअलोन बिल्ड चुपचाप विफल हो जाता है - एनपीएम प्रकाशन `ऐप/सर्वर.जेएस` के बिना पूरा हुआ, जिससे वीपीएस परिनियोजन टूट गया---

## [2.5.7] - 2026-03-15

> मीडिया प्लेग्राउंड त्रुटि प्रबंधन को ठीक किया गया।### 🐛 Bug Fixes

-**फिक्स (मीडिया)**: ट्रांसक्रिप्शन "एपीआई कुंजी आवश्यक" गलत सकारात्मक है जब ऑडियो में कोई भाषण (संगीत, मौन) नहीं है - अब इसके बजाय "कोई भाषण नहीं मिला" दिखाता है -**फिक्स (मीडिया)**: `audioTranscription.ts` और `audioSpeech.ts` में `upstreamErrorResponse` अब उचित JSON (`{error:{message}}`) लौटाता है, जिससे MediaPageClient में सही 401/403 क्रेडेंशियल त्रुटि का पता लगाने में सक्षम होता है। -**फिक्स (मीडिया)**: `parseApiError` अब डीपग्राम के `err_msg` फ़ील्ड को संभालता है और सटीक क्रेडेंशियल त्रुटि वर्गीकरण के लिए त्रुटि संदेशों में ``api कुंजी'' का पता लगाता है---

## [2.5.6] - 2026-03-15

> महत्वपूर्ण सुरक्षा/प्रमाणीकरण सुधार: एंटीग्रेविटी OAuth टूटा हुआ + पुनरारंभ के बाद JWT सत्र खो गए।### 🐛 Bug Fixes

-**फिक्स(oauth) #384**: एंटीग्रेविटी Google OAuth अब `client_secret` को टोकन एंडपॉइंट पर सही ढंग से भेजता है। `ANTIGRAVITY_OAUTH_CLIENT_SECRET` के लिए फ़ॉलबैक एक खाली स्ट्रिंग थी, जो ग़लत है - इसलिए `client_secret` को अनुरोध में कभी शामिल नहीं किया गया था, जिससे कस्टम env var के बिना सभी उपयोगकर्ताओं के लिए ``client_secret गायब है'' त्रुटियाँ हुईं। #383 को बंद करता है।
-**fix(auth) #385**: `JWT_SECRET` अब पहली पीढ़ी पर SQLite (`namespace='secrets'`) पर कायम है और बाद की शुरुआत में पुनः लोड किया गया है। पहले, प्रत्येक प्रक्रिया स्टार्टअप पर एक नया यादृच्छिक रहस्य उत्पन्न होता था, जो किसी भी पुनरारंभ या अपग्रेड के बाद सभी मौजूदा कुकीज़/सत्रों को अमान्य कर देता था। `JWT_SECRET`और`API_KEY_SECRET` दोनों को प्रभावित करता है। #382 बंद करता है।---

## [2.5.5] - 2026-03-15

> मॉडल सूची डिडअप फिक्स, इलेक्ट्रॉन स्टैंडअलोन बिल्ड हार्डनिंग, और किरो क्रेडिट ट्रैकिंग।### 🐛 Bug Fixes

-**फिक्स (मॉडल) #380**: `GET /api/models` में अब सक्रिय-प्रदाता फ़िल्टर बनाते समय प्रदाता उपनाम शामिल हैं - `क्लाउड` (उपनाम `cc`) और `github` (उपनाम `gh`) के मॉडल हमेशा दिखाए जाते थे, चाहे कनेक्शन कॉन्फ़िगर किया गया हो या नहीं, क्योंकि `PROVIDER_MODELS` कुंजी उपनाम हैं लेकिन DB कनेक्शन प्रदाता आईडी के तहत संग्रहीत होते हैं। `PROVIDER_ID_TO_ALIAS` के माध्यम से उसके उपनाम को शामिल करने के लिए प्रत्येक सक्रिय प्रदाता आईडी का विस्तार करके इसे ठीक किया गया। #353 को बंद करता है। -**फिक्स(इलेक्ट्रॉन) #379**: नई `scripts/prepare-electron-standalone.mjs` इलेक्ट्रॉन पैकेजिंग से पहले एक समर्पित `/.next/electron-standalone` बंडल को चरणबद्ध करता है। यदि `नोड_मॉड्यूल्स` एक सिम्लिंक है तो स्पष्ट त्रुटि के साथ निरस्त हो जाता है (इलेक्ट्रॉन-बिल्डर बिल्ड मशीन पर रनटाइम निर्भरता भेज देगा)। `path.basename` के माध्यम से क्रॉस-प्लेटफ़ॉर्म पथ स्वच्छता। @kfiramar द्वारा।### ✨ New Features

-**feat(kiro) #381**: Kiro credit balance tracking — usage endpoint now returns credit data for Kiro accounts by calling `codewhisperer.us-east-1.amazonaws.com/getUserCredits` (same endpoint Kiro IDE uses internally). शेष क्रेडिट, कुल भत्ता, नवीनीकरण तिथि और सदस्यता स्तर लौटाता है। #337 बंद करता है।## [2.5.4] - 2026-03-15

> लॉगर स्टार्टअप फिक्स, लॉगिन बूटस्ट्रैप सुरक्षा फिक्स, और डेव एचएमआर विश्वसनीयता में सुधार। सीआई बुनियादी ढांचा सख्त हुआ।### 🐛 Bug Fixes (PRs #374, #375, #376 by @kfiramar)

-**फिक्स (लॉगर) #376**: पिनो ट्रांसपोर्ट लॉगर पथ को पुनर्स्थापित करें - `formatters.level` को `transport.targets` के साथ जोड़कर पिनो द्वारा अस्वीकार कर दिया गया है। ट्रांसपोर्ट-समर्थित कॉन्फ़िगरेशन अब `getTransportCompatibleConfig()` के माध्यम से लेवल फ़ॉर्मेटर को हटा देता है। `/api/logs/console` में संख्यात्मक स्तर की मैपिंग को भी सही करता है: `30→जानकारी, 40→चेतावनी, 50→त्रुटि` (एक द्वारा स्थानांतरित किया गया था)। -**फिक्स (लॉगिन) #375**: लॉगिन पेज अब संरक्षित `/api/settings` के बजाय सार्वजनिक `/api/settings/require-login` एंडपॉइंट से बूटस्ट्रैप होता है। पासवर्ड-सुरक्षित सेटअप में, प्री-ऑथ पेज 401 प्राप्त कर रहा था और अनावश्यक रूप से सुरक्षित डिफ़ॉल्ट पर वापस आ रहा था। सार्वजनिक मार्ग अब त्रुटि पर रूढ़िवादी 200 फ़ॉलबैक के साथ सभी बूटस्ट्रैप मेटाडेटा (`requireLogin`, `hasPassword`, `setupComplete`) लौटाता है। -**fix(dev) #374**: `next.config.mjs` में `localhost` और `127.0.0.1` को `allowedDevOrigins` में जोड़ें - लूपबैक पते के माध्यम से ऐप तक पहुंचने पर HMR वेबसॉकेट को ब्लॉक कर दिया गया, जिससे बार-बार क्रॉस-ऑरिजिन चेतावनियां उत्पन्न हुईं।### 🔧 CI & Infrastructure

-**ESlint OOM फिक्स**: `eslint.config.mjs` अब `vscode-extension/**`, `electron/**`, `docs/**`, `app/.next/**`, और `clipr/**` को नजरअंदाज कर देता है - ESLint VS कोड बाइनरी ब्लब्स और संकलित टुकड़ों को स्कैन करके JS हीप OOM के साथ क्रैश हो रहा था। -**यूनिट परीक्षण समाधान**: 2 परीक्षण फ़ाइलों से पुराना `ALTER TABLE Provider_connections ADD COLUMN "group"` हटा दिया गया है - कॉलम अब बेस स्कीमा का हिस्सा है (#373 में जोड़ा गया), जिससे प्रत्येक CI रन पर `SQLITE_ERROR: डुप्लिकेट कॉलम नाम` उत्पन्न होता है। -**प्री-कमिट हुक**: `npm run test:unit` को `.husky/pre-commit` में जोड़ा गया - यूनिट परीक्षण अब CI तक पहुंचने से पहले टूटे हुए कमिट को ब्लॉक कर देते हैं।## [2.5.3] - 2026-03-14

> महत्वपूर्ण बग फिक्स: डीबी स्कीमा माइग्रेशन, स्टार्टअप एनवी लोडिंग, प्रदाता त्रुटि स्थिति समाशोधन, और i18n टूलटिप फिक्स। प्रत्येक पीआर के शीर्ष पर कोड गुणवत्ता में सुधार।### 🐛 Bug Fixes (PRs #369, #371, #372, #373 by @kfiramar)

-**फिक्स(डीबी) #373**: आधार स्कीमा में `provider_connections.group` कॉलम जोड़ें + मौजूदा डेटाबेस के लिए बैकफ़िल माइग्रेशन - कॉलम का उपयोग सभी प्रश्नों में किया गया था लेकिन स्कीमा परिभाषा से गायब है -**फिक्स(i18n) #371**: गैर-मौजूद `t("deleteConnection")` कुंजी को मौजूदा `providers.delete` कुंजी से बदलें - प्रदाता विवरण पृष्ठ पर `MISSING_MESSAGE: Providers.deleteConnection` रनटाइम त्रुटि को ठीक करता है -**ठीक करें(auth) #372**: वास्तविक पुनर्प्राप्ति के बाद प्रदाता खातों से पुरानी त्रुटि मेटाडेटा (`errorCode`, `lastErrorType`, `lastErrorSource`) साफ़ करें - पहले, पुनर्प्राप्त खाते विफल के रूप में दिखाई देते रहे -**फिक्स (स्टार्टअप) #369**: 'DATA_DIR/.env → ~/.omniroute/.env → ./.env' प्राथमिकता का सम्मान करने के लिए `npm रन स्टार्ट`, `run-standalone.mjs` और इलेक्ट्रॉन में एनवी लोडिंग को एकीकृत करें - मौजूदा एन्क्रिप्टेड डेटाबेस पर एक नया `STORAGE_ENCRYPTION_KEY` उत्पन्न करने से रोकता है### 🔧 Code Quality

- `auth.ts` में `result.success` बनाम `response?.ok` पैटर्न का दस्तावेजीकरण (दोनों जानबूझकर, अब समझाया गया)
- `bootstrap-env.mjs` से मिलान करने के लिए `electron/main.js` में `overridePath?.trim()` को सामान्यीकृत किया गया
- इलेक्ट्रॉन स्टार्टअप में `preferredEnv` मर्ज ऑर्डर टिप्पणी जोड़ी गई

> ऑटो-रोटेशन, फास्ट टियर टॉगल, जीपीटी-5.4 मॉडल और एनालिटिक्स लेबल फिक्स के साथ कोडेक्स खाता कोटा नीति।### ✨ New Features (PRs #366, #367, #368)

-**कोडेक्स कोटा नीति (पीआर #366)**: प्रदाता डैशबोर्ड में प्रति खाता 5 घंटे/साप्ताहिक कोटा विंडो टॉगल होती है। जब सक्षम विंडो 90% सीमा तक पहुंच जाती है तो खाते स्वचालित रूप से छोड़ दिए जाते हैं और `resetAt` के बाद फिर से प्रवेश कर जाते हैं। साइड-इफेक्ट फ्री स्टेटस गेटर के साथ `quotaCache.ts` शामिल है। -**कोडेक्स फास्ट टियर टॉगल (पीआर #367)**: डैशबोर्ड → सेटिंग्स → कोडेक्स सर्विस टियर। डिफॉल्ट-ऑफ टॉगल केवल कोडेक्स अनुरोधों के लिए `service_tier: "flex"` इंजेक्ट करता है, जिससे लागत ~80% कम हो जाती है। पूर्ण स्टैक: यूआई टैब + एपीआई एंडपॉइंट + निष्पादक + अनुवादक + स्टार्टअप रिस्टोर। -**जीपीटी-5.4 मॉडल (पीआर #368)**: कोडेक्स मॉडल रजिस्ट्री में `सीएक्स/जीपीटी-5.4` और `कोडेक्स/जीपीटी-5.4` जोड़ता है। प्रतिगमन परीक्षण शामिल है।### 🐛 Bug Fixes

-**#356 ठीक करें**: एनालिटिक्स चार्ट (शीर्ष प्रदाता, खाते के आधार पर, प्रदाता ब्रेकडाउन) अब ओपनएआई-संगत प्रदाताओं के लिए कच्ची आंतरिक आईडी के बजाय मानव-पठनीय प्रदाता नाम/लेबल प्रदर्शित करते हैं।

> प्रमुख रिलीज: सख्त-यादृच्छिक रूटिंग रणनीति, एपीआई कुंजी एक्सेस नियंत्रण, कनेक्शन समूह, बाहरी मूल्य निर्धारण सिंक, और सोच मॉडल, कॉम्बो परीक्षण और टूल नाम सत्यापन के लिए महत्वपूर्ण बग फिक्स।### ✨ New Features (PRs #363 & #365)

-**सख्त-रैंडम रूटिंग रणनीति**: फिशर-येट्स समवर्ती अनुरोधों के लिए एंटी-रिपीट गारंटी और म्यूटेक्स क्रमबद्धता के साथ डेक में फेरबदल करते हैं। प्रति कॉम्बो और प्रति प्रदाता स्वतंत्र डेक। -**API Key Access Controls**: `allowedConnections` (restrict which connections a key can use), `is_active` (enable/disable key with 403), `accessSchedule` (time-based access control), `autoResolve` toggle, rename keys via PATCH. -**कनेक्शन समूह**: पर्यावरण के अनुसार समूह प्रदाता कनेक्शन। लोकलस्टोरेज पर्सिस्टेंस और स्मार्ट ऑटो-स्विच के साथ लिमिट्स पेज में अकॉर्डियन व्यू। -**बाहरी मूल्य निर्धारण सिंक (लाइटएलएलएम)**: 3-स्तरीय मूल्य निर्धारण समाधान (उपयोगकर्ता ओवरराइड → सिंक → डिफ़ॉल्ट)। `PRICING_SYNC_ENABLED=true` के माध्यम से ऑप्ट-इन करें। एमसीपी टूल `omniroute_sync_pricing`। 23 नए परीक्षण। -**i18n**: सख्त-यादृच्छिक रणनीति, एपीआई कुंजी प्रबंधन स्ट्रिंग्स के साथ 30 भाषाओं को अपडेट किया गया। पीटी-बीआर पूरी तरह से अनुवादित।### 🐛 Bug Fixes

-**#355 ठीक करें**: स्ट्रीम निष्क्रिय समय-सीमा 60 से 300 तक बढ़ गई - लंबे तर्क चरणों के दौरान विस्तारित-सोच मॉडल (क्लाउड-ओपस-4-6, ओ3, आदि) को निरस्त करने से रोकता है। `STREAM_IDLE_TIMEOUT_MS` के माध्यम से कॉन्फ़िगर करने योग्य। -**#350 ठीक करें**: कॉम्बो परीक्षण अब आंतरिक हेडर का उपयोग करके `REQUIRE_API_KEY=true` को बायपास करता है, और सार्वभौमिक रूप से OpenAI-संगत प्रारूप का उपयोग करता है। टाइमआउट 15 से 20 तक बढ़ाया गया। -**#346 ठीक करें**: खाली `function.name` (क्लाउड कोड द्वारा अग्रेषित) वाले उपकरण अब अपस्ट्रीम प्रदाताओं द्वारा प्राप्त करने से पहले फ़िल्टर किए जाते हैं, जिससे "अमान्य इनपुट[एन].नाम: खाली स्ट्रिंग" त्रुटियों को रोका जा सकता है।### 🗑️ Closed Issues

-**#341**: डिबग अनुभाग हटा दिया गया है - प्रतिस्थापन `/डैशबोर्ड/लॉग्स` और `/डैशबोर्ड/हेल्थ` है।

> मल्टी-कुंजी प्रदाता सेटअप के लिए एपीआई कुंजी राउंड-रॉबिन समर्थन, और वाइल्डकार्ड रूटिंग और कोटा विंडो रोलिंग की पुष्टि पहले से ही मौजूद है।### ✨ New Features

-**एपीआई कुंजी राउंड-रॉबिन (T07)**: प्रदाता कनेक्शन अब कई एपीआई कुंजी रख सकते हैं (कनेक्शन संपादित करें → अतिरिक्त एपीआई कुंजी)। अनुरोध `providerSpecificData.extraApiKeys[]` के माध्यम से प्राथमिक + अतिरिक्त कुंजियों के बीच राउंड-रॉबिन घुमाते हैं। कुंजियाँ प्रति कनेक्शन मेमोरी में अनुक्रमित रखी जाती हैं - कोई DB स्कीमा परिवर्तन की आवश्यकता नहीं है।### 📝 Already Implemented (confirmed in audit)

-**Wildcard Model Routing (T13)**: `wildcardRouter.ts` with glob-style wildcard matching (`gpt*`, `claude-?-sonnet`, etc.) is already integrated into `model.ts` with specificity ranking. -**कोटा विंडो रोलिंग (T08)**: `accountFallback.ts:isModelLocked()` पहले से ही विंडो को स्वचालित रूप से आगे बढ़ाता है - यदि `Date.now() > Entry.until`, तो लॉक तुरंत हटा दिया जाता है (कोई पुराना अवरोध नहीं)।

> यूआई पॉलिश, रूटिंग रणनीति परिवर्धन, और उपयोग सीमा के लिए सुंदर त्रुटि प्रबंधन।### ✨ New Features

-**फिल-फर्स्ट और पी2सी रूटिंग रणनीतियाँ**: पूर्ण मार्गदर्शन पैनल और रंग-कोडित बैज के साथ, कॉम्बो रणनीति पिकर में `फिल-फर्स्ट` (आगे बढ़ने से पहले कोटा हटा दें) और `पी2सी` (पावर-ऑफ-टू-चॉइस कम-विलंबता चयन) जोड़ा गया। -**फ्री स्टैक प्रीसेट मॉडल**: फ्री स्टैक टेम्पलेट के साथ एक कॉम्बो बनाना अब 7 सर्वश्रेष्ठ-इन-क्लास फ्री प्रदाता मॉडल (मिथुन सीएलआई, किरो, क्यूडर×2, क्वेन, एनवीडिया एनआईएम, ग्रोक) को स्वचालित रूप से भरता है। उपयोगकर्ता बस प्रदाताओं को सक्रिय करते हैं और $0/माह का कॉम्बो आउट-ऑफ़-द-बॉक्स प्राप्त करते हैं। -**व्यापक कॉम्बो मॉडल**: कॉम्बो मोडल बनाएं/संपादित करें अब बड़े कॉम्बो के आरामदायक संपादन के लिए `max-w-4xl` का उपयोग करता है।### 🐛 Bug Fixes

-**कोडेक्स और GitHub के लिए पेज HTTP 500 को सीमित करता है**: `getCodexUsage()` और `getGitHubUsage()` अब जब प्रदाता 401/403 (समाप्त टोकन) लौटाता है, तो सीमा पृष्ठ पर 500 त्रुटि उत्पन्न करने और फेंकने के बजाय एक उपयोगकर्ता-अनुकूल संदेश लौटाता है। -**मेंटेनेंसबैनर गलत-सकारात्मक**: पेज लोड होने पर बैनर अब "सर्वर पहुंच योग्य नहीं है" नहीं दिखाता है। माउंट पर तुरंत `चेकहेल्थ()` को कॉल करके और पुराने `शो`-स्टेट क्लोजर को हटाकर ठीक किया गया। -**प्रदाता आइकन टूलटिप्स**: प्रदाता कनेक्शन पंक्ति में संपादित करें (पेंसिल) और आइकन बटन हटाएं में अब मूल HTML टूलटिप्स हैं - सभी 6 एक्शन आइकन अब स्व-दस्तावेज हैं।

> सामुदायिक समस्या विश्लेषण, नए प्रदाता समर्थन, टोकन ट्रैकिंग के लिए बग फिक्स, मॉडल रूटिंग और स्ट्रीमिंग विश्वसनीयता से कई सुधार।### ✨ New Features

-**टास्क-अवेयर स्मार्ट रूटिंग (T05)**: अनुरोध सामग्री प्रकार के आधार पर स्वचालित मॉडल चयन - कोडिंग → डीपसीक-चैट, विश्लेषण → जेमिनी-2.5-प्रो, विज़न → जीपीटी-4ओ, सारांश → जेमिनी-2.5-फ्लैश। सेटिंग्स के माध्यम से कॉन्फ़िगर करने योग्य। नया `GET/PUT/POST /api/settings/task-routing` एपीआई। -**हगिंगफेस प्रदाता**: लामा 3.1 70बी/8बी, क्वेन 2.5 72बी, मिस्ट्रल 7बी, फी-3.5 मिनी के साथ ओपनएआई-संगत प्रदाता के रूप में हगिंगफेस राउटर को जोड़ा गया। -**वर्टेक्स एआई प्रदाता**: जेमिनी 2.5 प्रो/फ्लैश, जेम्मा 2 27बी, क्लाउड वाया वर्टेक्स के साथ वर्टेक्स एआई (गूगल क्लाउड) प्रदाता जोड़ा गया। -**प्लेग्राउंड फ़ाइल अपलोड**: ट्रांसक्रिप्शन के लिए ऑडियो अपलोड, विज़न मॉडल के लिए इमेज अपलोड (मॉडल नाम से ऑटो-डिटेक्ट), इमेज जेनरेशन परिणामों के लिए इनलाइन इमेज रेंडरिंग। -**मॉडल चयन विज़ुअल फीडबैक**: कॉम्बो पिकर में पहले से जोड़े गए मॉडल अब ✓ हरा बैज दिखाते हैं - डुप्लिकेट भ्रम को रोकता है। -**क्यूवेन संगतता (पीआर #352)**: क्यूवेन प्रदाता संगतता के लिए अद्यतन उपयोगकर्ता-एजेंट और सीएलआई फिंगरप्रिंट सेटिंग्स। -**राउंड-रॉबिन राज्य प्रबंधन (पीआर #349)**: बहिष्कृत खातों को संभालने और रोटेशन स्थिति को सही ढंग से बनाए रखने के लिए उन्नत राउंड-रॉबिन तर्क। -**क्लिपबोर्ड यूएक्स (पीआर #360)**: गैर-सुरक्षित संदर्भों के लिए फ़ॉलबैक के साथ कठोर क्लिपबोर्ड संचालन; क्लाउड टूल सामान्यीकरण में सुधार।### 🐛 Bug Fixes

-**#302 ठीक करें - ओपनएआई एसडीके स्ट्रीम = टूल_कॉल्स को गलत तरीके से ड्रॉप करता है**: टी01 स्वीकार हेडर बातचीत अब स्ट्रीमिंग को बाध्य नहीं करती जब `बॉडी.स्ट्रीम` स्पष्ट रूप से `झूठा` होता है। गैर-स्ट्रीमिंग मोड में ओपनएआई पायथन एसडीके का उपयोग करते समय टूल_कॉल को चुपचाप हटा दिया जा रहा था। -**फिक्स #73 - क्लॉड हाइकू बिना प्रदाता उपसर्ग के ओपनएआई पर रूट किया गया**: प्रदाता उपसर्ग के बिना भेजे गए `क्लाउड-*` मॉडल अब सही ढंग से `एंटीग्रेविटी` (एंथ्रोपिक) प्रदाता पर रूट किए गए हैं। `मिथुन-*`/`जेम्मा-*` → `मिथुन` अनुमानी भी जोड़ा गया। -**#74 ठीक करें - एंटीग्रेविटी/क्लाउड स्ट्रीमिंग के लिए टोकन की गिनती हमेशा 0 होती है**: `message_start` SSE इवेंट जो `input_tokens` को वहन करता है, उसे `extractUsage()` द्वारा पार्स नहीं किया जा रहा था, जिससे सभी इनपुट टोकन की गिनती कम हो गई थी। स्ट्रीमिंग प्रतिक्रियाओं के लिए इनपुट/आउटपुट टोकन ट्रैकिंग अब सही ढंग से काम करती है। -**#180 ठीक करें - बिना किसी फीडबैक के मॉडल आयात डुप्लिकेट**: `मॉडलसेलेक्टमॉडल` अब कॉम्बो में पहले से ही मौजूद मॉडलों के लिए ✓ हरा हाइलाइट दिखाता है, जिससे यह स्पष्ट हो जाता है कि वे पहले से ही जोड़े गए हैं। -**मीडिया पेज निर्माण त्रुटियाँ**: छवि परिणाम अब कच्चे JSON के बजाय `<img>` टैग के रूप में प्रस्तुत होते हैं। प्रतिलेखन परिणाम पठनीय पाठ के रूप में दिखाए गए हैं। क्रेडेंशियल त्रुटियाँ मौन विफलता के बजाय एम्बर बैनर दिखाती हैं। -**प्रदाता पेज पर टोकन रिफ्रेश बटन**: OAuth प्रदाताओं के लिए मैनुअल टोकन रिफ्रेश यूआई जोड़ा गया।### 🔧 Improvements

-**प्रदाता रजिस्ट्री**: हगिंगफेस और वर्टेक्स एआई को `providerRegistry.ts` और `providers.ts` (फ्रंटएंड) में जोड़ा गया। -**कैश पढ़ें**: कुशल डीबी रीड कैशिंग के लिए नया `src/lib/db/readCache.ts`। -**कोटा कैश**: टीटीएल-आधारित निष्कासन के साथ बेहतर कोटा कैश।### 📦 Dependencies

- `डोमप्यूरिफाई` → 3.3.3 (पीआर #347)
- `अनडिसी` → 7.24.2 (पीआर #348, #361)
- `डॉकर/सेटअप-क्यूमू-एक्शन` → वी4 (पीआर #342)
- `डॉकर/सेटअप-बिल्डएक्स-एक्शन` → वी4 (पीआर #343)### 📁 New Files

| फ़ाइल                                         | उद्देश्य                                  |
| --------------------------------------------- | ----------------------------------------- | ----------------------- |
| `open-sse/services/taskAwareRouter.ts`        | कार्य-जागरूक रूटिंग तर्क (7 कार्य प्रकार) |
| `src/app/api/settings/task-routing/route.ts`  | टास्क रूटिंग कॉन्फिग एपीआई                |
| `src/app/api/providers/[id]/refresh/route.ts` | मैनुअल OAuth टोकन ताज़ा करें              |
| `src/lib/db/readCache.ts`                     | कुशल डीबी रीड कैश                         |
| `src/shared/utils/clipboard.ts`               | फ़ॉलबैक के साथ कठोर क्लिपबोर्ड            | ## [2.4.1] - 2026-03-13 |

### 🐛 Fix

-**कॉम्बोस मोडल: फ्री स्टैक दृश्यमान और प्रमुख**- फ्री स्टैक टेम्पलेट छिपा हुआ था (3-कॉलम ग्रिड में चौथा)। ठीक किया गया: स्थिति 1 पर ले जाया गया, 2x2 ग्रिड पर स्विच किया गया ताकि सभी 4 टेम्पलेट दिखाई दे सकें, हरा बॉर्डर + मुफ़्त बैज हाइलाइट।## [2.4.0] - 2026-03-13

> **प्रमुख रिलीज़**- फ्री स्टैक इकोसिस्टम, ट्रांसक्रिप्शन प्लेग्राउंड ओवरहाल, 44+ प्रदाता, व्यापक फ्री टियर दस्तावेज़ीकरण, और बोर्ड भर में यूआई सुधार।### विशेषताएं

-**कॉम्बोस: फ्री स्टैक टेम्पलेट**- किरो + क्यूडर + क्वेन + जेमिनी सीएलआई में राउंड-रॉबिन का उपयोग करते हुए नया चौथा टेम्पलेट "फ्री स्टैक ($0)"। पहले उपयोग पर पूर्व-निर्मित शून्य-लागत कॉम्बो का सुझाव देता है। -**मीडिया/ट्रांसक्रिप्शन: डीपग्राम डिफ़ॉल्ट के रूप में**- डीपग्राम (नोवा 3, $200 मुफ़्त) अब डिफ़ॉल्ट ट्रांसक्रिप्शन प्रदाता है। असेंबलीएआई ($50 मुफ़्त) और ग्रोक व्हिस्पर (हमेशा के लिए मुफ़्त) मुफ़्त क्रेडिट बैज के साथ दिखाए गए हैं। -**रीडमी: "नि:शुल्क प्रारंभ करें" अनुभाग**— नई प्रारंभिक-रीडमी 5-चरणीय तालिका दिखाती है कि मिनटों में शून्य-लागत एआई कैसे सेट करें। -**रीडमी: निःशुल्क ट्रांसक्रिप्शन कॉम्बो**- डीपग्राम/असेंबलीएआई/ग्रोक कॉम्बो सुझाव और प्रति-प्रदाता निःशुल्क क्रेडिट विवरण के साथ नया अनुभाग। -**providers.ts: hasFree flag**- NVIDIA NIM, Cerebras, और Groq को प्रदाता UI के लिए hasFree बैज और freeNote के साथ चिह्नित किया गया है। -**i18n: templateFreeStack कुंजियाँ**— निःशुल्क स्टैक कॉम्बो टेम्पलेट सभी 30 भाषाओं में अनुवादित और समन्वयित।## [2.3.16] - 2026-03-13

### दस्तावेज़

-**पढ़ें: 44+ प्रदाता**- वास्तविक कोडबेस गणना को दर्शाते हुए "36+ प्रदाताओं" की सभी 3 घटनाओं को "44+" में अपडेट किया गया (प्रदाताओं में 44 प्रदाता) -**पढ़ें: नया अनुभाग "🆓 निःशुल्क मॉडल - वास्तव में आपको क्या मिलता है"**- प्रति मॉडल दर सीमा के साथ 7-प्रदाता तालिका जोड़ी गई: किरो (एडब्ल्यूएस बिल्डर आईडी के माध्यम से क्लाउड असीमित), क्यूडर (5 मॉडल असीमित), क्वेन (4 मॉडल असीमित), जेमिनी सीएलआई (180के/महीना), एनवीडिया एनआईएम (~40 आरपीएम डेव-फॉरएवर), सेरेब्रस (1एम टोकन/दिन / 60के) टीपीएम), ग्रोक (30 आरपीएम / 14.4K आरपीडी)। \/usr/bin/bash अल्टीमेट फ्री स्टैक कॉम्बो अनुशंसा शामिल है। -**पढ़ें: मूल्य निर्धारण तालिका अपडेट की गई**- सेरेब्रस को एपीआई कुंजी स्तर में जोड़ा गया, एनवीआईडीआईए को "1000 क्रेडिट" से "डेव-फॉरएवर फ्री" में तय किया गया, क्यूडर/क्यूवेन मॉडल गणना और नाम अपडेट किए गए -**रीडमी: क्यूडर 8→5 मॉडल**(नाम: किमी-के2-थिंकिंग, क्वेन3-कोडर-प्लस, डीपसीक-आर1, मिनिमैक्स-एम2, किमी-के2) -**पढ़ें: क्वेन 3→4 मॉडल**(नाम: क्वेन3-कोडर-प्लस, क्वेन3-कोडर-फ्लैश, क्वेन3-कोडर-नेक्स्ट, विज़न-मॉडल)## [2.3.15] - 2026-03-13

### विशेषताएं

-**ऑटो-कॉम्बो डैशबोर्ड (टियर प्राथमिकता)**: `🏷️ टियर` को `/डैशबोर्ड/ऑटो-कॉम्बो` फैक्टर ब्रेकडाउन डिस्प्ले में 7वें स्कोरिंग फैक्टर लेबल के रूप में जोड़ा गया - सभी 7 ऑटो-कॉम्बो स्कोरिंग फैक्टर अब दिखाई दे रहे हैं। -**i18n - ऑटोकॉम्बो सेक्शन**: सभी 30 भाषा फ़ाइलों में ऑटो-कॉम्बो डैशबोर्ड (`शीर्षक`, `स्थिति`, `मोडपैक`, `प्रोवाइडरस्कोर्स`, `फैक्टरटियरप्रायरिटी`, आदि) के लिए 20 नई अनुवाद कुंजियाँ जोड़ी गईं।## [2.3.14] - 2026-03-13

### 🐛 Bug Fixes

-**Qoder OAuth (#339)**: वैध डिफ़ॉल्ट `clientSecret` को पुनर्स्थापित किया गया - पहले एक खाली स्ट्रिंग थी, जिससे प्रत्येक कनेक्ट प्रयास पर "खराब क्लाइंट क्रेडेंशियल" उत्पन्न होता था। सार्वजनिक क्रेडेंशियल अब डिफ़ॉल्ट फ़ॉलबैक है (`QODER_OAUTH_CLIENT_SECRET` env var के माध्यम से ओवरराइड करने योग्य)। -**MITM सर्वर नहीं मिला (#335)**: `prepublish.mjs` अब npm बंडल में कॉपी करने से पहले `tsc` का उपयोग करके `src/mitm/*.ts` को जावास्क्रिप्ट में संकलित करता है। पहले केवल कच्ची `.ts` फ़ाइलें कॉपी की जाती थीं - जिसका अर्थ है कि `server.js` npm/Volta वैश्विक इंस्टॉल में कभी मौजूद नहीं था। -**जेमिनीसीएलआई लापता प्रोजेक्टआईडी (#338)**: संग्रहीत क्रेडेंशियल्स से 'प्रोजेक्टआईडी' गायब होने पर हार्ड 500 त्रुटि फेंकने के बजाय (उदाहरण के लिए डॉकर पुनरारंभ के बाद), ओमनीरूट अब एक चेतावनी लॉग करता है और अनुरोध का प्रयास करता है - ओमनीरूट क्रैश के बजाय एक सार्थक प्रदाता-पक्ष त्रुटि लौटाता है। -**इलेक्ट्रॉन संस्करण बेमेल (#323)**: `इलेक्ट्रॉन/पैकेज.जेसन` संस्करण को `2.3.13` (`2.0.13` था) में सिंक किया गया ताकि डेस्कटॉप बाइनरी संस्करण एनपीएम पैकेज से मेल खाए।### ✨ New Models (#334)

-**किरो**: `क्लाउड-सॉनेट-4`, `क्लाउड-ओपस-4.6`, `डीपसीक-वी3.2`, `मिनीमैक्स-एम2.1`, `क्वेन3-कोडर-नेक्स्ट`, `ऑटो` -**कोडेक्स**: `gpt5.4`### 🔧 Improvements

-**टियर स्कोरिंग (एपीआई + वैलिडेशन)**: `स्कोरिंगवेट्स` ज़ॉड स्कीमा और `कॉम्बोस/ऑटो` एपीआई रूट में `टीयरप्रायोरिटी` (वजन `0.05`) जोड़ा गया - 7वां स्कोरिंग कारक अब आरईएसटी एपीआई द्वारा पूरी तरह से स्वीकार कर लिया गया है और इनपुट पर मान्य है। कुल योग = `1.0` रखने के लिए `स्थिरता` वजन को `0.10` से `0.05` तक समायोजित किया गया।### ✨ New Features

-**टियर्ड कोटा स्कोरिंग (ऑटो-कॉम्बो)**: 7वें स्कोरिंग कारक के रूप में 'टियरप्रायोरिटी' जोड़ा गया - जब अन्य कारक समान होते हैं तो अल्ट्रा/प्रो टियर वाले खातों को अब फ्री टियर की तुलना में प्राथमिकता दी जाती है। `ProviderCandidate` पर नए वैकल्पिक फ़ील्ड `accountTier` और `quotaResetIntervalSecs`। सभी 4 मोड पैक अपडेट किए गए ('शिप-फास्ट', 'कॉस्ट-सेवर', 'क्वालिटी-फर्स्ट', 'ऑफ़लाइन-फ्रेंडली')। -**इंट्रा-फ़ैमिली मॉडल फ़ॉलबैक (T5)**: जब कोई मॉडल अनुपलब्ध होता है (404/400/403), तो ओमनीरूट अब एक त्रुटि (`modelFamilyFallback.ts`) लौटाने से पहले स्वचालित रूप से उसी परिवार के सहोदर मॉडल पर वापस आ जाता है। -**कॉन्फ़िगर करने योग्य एपीआई ब्रिज टाइमआउट**: `API_BRIDGE_PROXY_TIMEOUT_MS` env var ऑपरेटरों को प्रॉक्सी टाइमआउट (डिफ़ॉल्ट 30s) को ट्यून करने देता है। धीमी अपस्ट्रीम प्रतिक्रियाओं पर 504 त्रुटियों को ठीक करता है। (#332) -**स्टार हिस्ट्री**: सभी 30 README में Star-history.com विजेट को Starchart.cc (`?variant=adaptive`) से बदल दिया गया है - प्रकाश/अंधेरे थीम, वास्तविक समय के अपडेट के लिए अनुकूलित।### 🐛 Bug Fixes

-**प्रामाणिक - पहली बार पासवर्ड**: `INITIAL_PASSWORD` env var अब पहला डैशबोर्ड पासवर्ड सेट करते समय स्वीकार किया जाता है। निरंतर-समय की तुलना के लिए `timeingSafeEqual` का उपयोग करता है, समय संबंधी हमलों को रोकता है। (#333) -**रीडमी ट्रंकेशन**: समस्या निवारण अनुभाग में एक गुम `</विवरण>` क्लोजिंग टैग को ठीक किया गया, जिसके कारण GitHub ने इसके नीचे सब कुछ प्रस्तुत करना बंद कर दिया (टेक स्टैक, डॉक्स, रोडमैप, योगदानकर्ता)। -**pnpm इंस्टाल**: `package.json` से अनावश्यक `@swc/helpers` ओवरराइड को हटा दिया गया, जो प्रत्यक्ष निर्भरता के साथ विरोध करता था, जिससे pnpm पर `EOVERRIDE` त्रुटियाँ उत्पन्न हुईं। `pnpm.onlyBuiltDependcies` कॉन्फ़िगरेशन जोड़ा गया। -**CLI पथ इंजेक्शन (T12)**: `CLI_*_BIN` env vars में पथ ट्रैवर्सल और शेल मेटाचैक्टर को ब्लॉक करने के लिए `cliRuntime.ts` में `isSafePath()` सत्यापनकर्ता जोड़ा गया। -**CI**: GitHub क्रियाओं पर `npm ci` विफलताओं को ठीक करने के लिए ओवरराइड हटाने के बाद `package-lock.json` को पुनर्जीवित किया गया।### 🔧 Improvements

-**रिस्पॉन्स फॉर्मेट (T1)**: `रिस्पॉन्स_फॉर्मेट` (json_schema/json_object) अब क्लाउड के लिए सिस्टम प्रॉम्प्ट के रूप में इंजेक्ट किया गया है, जो संरचित आउटपुट संगतता को सक्षम करता है। -**429 पुनः प्रयास करें (टी2)**: अगले यूआरएल पर वापस जाने से पहले 429 प्रतिक्रियाओं के लिए इंट्रा-यूआरएल पुनः प्रयास करें (2 सेकंड की देरी के साथ 2× प्रयास)। -**जेमिनी सीएलआई हेडर (टी3)**: जेमिनी सीएलआई अनुकूलता के लिए `यूजर-एजेंट` और `एक्स-गूग-एपीआई-क्लाइंट` फिंगरप्रिंट हेडर जोड़े गए। -**मूल्य निर्धारण कैटलॉग (टी9)**: `डीपसीक-3.1`, `डीपसीक-3.2`, और `क्वेन3-कोडर-नेक्स्ट` मूल्य निर्धारण प्रविष्टियाँ जोड़ी गईं।### 📁 New Files

| फ़ाइल                                      | उद्देश्य                                                |
| ------------------------------------------ | ------------------------------------------------------- | --------- |
| `open-sse/services/modelFamilyFallback.ts` | मॉडल पारिवारिक परिभाषाएँ और अंतर-पारिवारिक फ़ॉलबैक तर्क | ### Fixed |

-**किलोकोड**: किलोकोड हेल्थचेक टाइमआउट पहले से ही v2.3.11 में तय किया गया है -**ओपनकोड**: 15s हेल्थचेक टाइमआउट के साथ cliRuntime रजिस्ट्री में ओपनकोड जोड़ें -**ओपनक्लॉ / कर्सर**: धीमी गति से शुरू होने वाले वेरिएंट के लिए हेल्थचेक टाइमआउट को 15 सेकंड तक बढ़ाएं -**वीपीएस**: ड्रॉइड और ओपनक्ला एनपीएम पैकेज स्थापित करें; किरो-सीएलआई के लिए CLI_EXTRA_PATHS सक्रिय करें -**cliRuntime**: ओपनकोड टूल पंजीकरण जोड़ें और जारी रखने के लिए टाइमआउट बढ़ाएं## [2.3.11] - 2026-03-12

### Fixed

-**किलोकोड हेल्थचेक**: `हेल्थचेकटाइमआउटएमएस` को 4000ms से बढ़ाकर 15000ms तक करें - किलोकोड स्टार्टअप पर एक ASCII लोगो बैनर प्रस्तुत करता है, जिससे धीमे/कोल्ड-स्टार्ट वातावरण पर गलत `हेल्थचेक_फ़ेल्ड` होता है## [2.3.10] - 2026-03-12

### Fixed

-**लिंट**: `चेक:एनी-बजट:t11` विफलता को ठीक करें - OAuthModal.tsx में `as Any` को `as रिकार्ड<स्ट्रिंग, अज्ञात>` से बदलें (3 घटनाएँ)### Docs

-**CLI-TOOLS.md**: सभी 11 सीएलआई टूल्स (क्लाउड, कोडेक्स, जेमिनी, ओपनकोड, क्लाइन, किलोकोड, जारी रखें, किरो-क्ली, कर्सर, ड्रॉइड, ओपनक्लाव) के लिए संपूर्ण गाइड -**i18n**: CLI-TOOLS.md अनुवादित शीर्षक + परिचय के साथ 30 भाषाओं में समन्वयित## [2.3.8] - 2026-03-12
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## [2.3.9] - 2026-03-12

### Added

<<<<<<< HEAD
- **/v1/completions**: New legacy OpenAI completions endpoint — accepts both `prompt` string and `messages` array, normalizes to chat format automatically
- **EndpointPage**: Now shows all 3 OpenAI-compatible endpoint types: Chat Completions, Responses API, and Legacy Completions
- **i18n**: Added `completionsLegacy/completionsLegacyDesc` to 30 language files

### Fixed

- **OAuthModal**: Fix `[object Object]` displayed on all OAuth connection errors — properly extract `.message` from error response objects in all 3 `throw new Error(data.error)` calls (exchange, device-code, authorize)
- Affects Cline, Codex, GitHub, Qwen, Kiro, and all other OAuth providers

## [2.3.7] - 2026-03-12

### Fixed

- **Cline OAuth**: Add `decodeURIComponent` before base64 decode so URL-encoded auth codes from the callback URL are parsed correctly, fixing "invalid or expired authorization code" errors on remote (LAN IP) setups
- **Cline OAuth**: `mapTokens` now populates `name = firstName + lastName || email` so Cline accounts show real user names instead of "Account #ID"
- **OAuth account names**: All OAuth exchange flows (exchange, poll, poll-callback) now normalize `name = email` when name is missing, so every OAuth account shows its email as the display label in the Providers dashboard
- **OAuth account names**: Removed sequential "Account N" fallback in `db/providers.ts` — accounts with no email/name now use a stable ID-based label via `getAccountDisplayName()` instead of a sequential number that changes when accounts are deleted

## [2.3.6] - 2026-03-12

### Fixed

- **Provider test batch**: Fixed Zod schema to accept `providerId: null` (frontend sends null for non-provider modes); was incorrectly returning "Invalid request" for all batch tests
- **Provider test modal**: Fixed `[object Object]` display by normalizing API error objects to strings before rendering in `setTestResults` and `ProviderTestResultsView`
- **i18n**: Added missing keys `cliTools.toolDescriptions.opencode`, `cliTools.toolDescriptions.kiro`, `cliTools.guides.opencode`, `cliTools.guides.kiro` to `en.json`
- **i18n**: Synchronized 1111 missing keys across all 29 non-English language files using English values as fallbacks

## [2.3.5] - 2026-03-11

### Fixed

- **@swc/helpers**: Added permanent `postinstall` fix to copy `@swc/helpers` into the standalone app's `node_modules` — prevents MODULE_NOT_FOUND crash on global npm installs

## [2.3.4] - 2026-03-10

### Added

- Multiple provider integrations and dashboard improvements
=======
-**/v1/समाप्ति**: नई लीगेसी ओपनएआई पूर्णता समापन बिंदु - `प्रॉम्प्ट' स्ट्रिंग और `संदेश' सरणी दोनों को स्वीकार करता है, स्वचालित रूप से चैट प्रारूप को सामान्य करता है -**एंडपॉइंटपेज**: अब सभी 3 ओपनएआई-संगत एंडपॉइंट प्रकार दिखाता है: चैट पूर्णताएं, प्रतिक्रिया एपीआई और लीगेसी पूर्णताएं -**i18n**: 30 भाषा फ़ाइलों में `completionsLegacy/completionsLegacyDesc` जोड़ा गया### Fixed

-**OAuthModal**: सभी OAuth कनेक्शन त्रुटियों पर प्रदर्शित `[ऑब्जेक्ट ऑब्जेक्ट]` को ठीक करें - सभी 3 `थ्रो न्यू एरर (डेटा.एरर)` कॉल (एक्सचेंज, डिवाइस-कोड, अधिकृत) में त्रुटि प्रतिक्रिया ऑब्जेक्ट से `.message` को ठीक से निकालें।

- क्लाइन, कोडेक्स, गिटहब, क्वेन, किरो और अन्य सभी OAuth प्रदाताओं को प्रभावित करता है## [2.3.7] - 2026-03-12

### Fixed

-**क्लाइन OAuth**: बेस64 डिकोड से पहले `decodeURIComponent` जोड़ें ताकि कॉलबैक URL से URL-एन्कोडेड ऑथ कोड सही ढंग से पार्स हो जाएं, रिमोट (LAN IP) सेटअप पर "अमान्य या समाप्त प्राधिकरण कोड" त्रुटियों को ठीक किया जा सके। -**क्लाइन OAuth**: `mapTokens` अब `नाम = प्रथम नाम + अंतिम नाम || को पॉप्युलेट करता है। ईमेल` इसलिए क्लाइन खाते "खाता #आईडी" के बजाय वास्तविक उपयोगकर्ता नाम दिखाते हैं -**OAuth खाते के नाम**: सभी OAuth एक्सचेंज प्रवाह (एक्सचेंज, पोल, पोल-कॉलबैक) अब नाम गायब होने पर `नाम = ईमेल` को सामान्य कर देते हैं, इसलिए प्रत्येक OAuth खाता प्रदाता डैशबोर्ड में डिस्प्ले लेबल के रूप में अपना ईमेल दिखाता है -**OAuth खाता नाम**: `db/providers.ts` में अनुक्रमिक "खाता N" फ़ॉलबैक हटा दिया गया है - बिना ईमेल/नाम वाले खाते अब अनुक्रमिक संख्या के बजाय `getAccountDisplayName()` के माध्यम से एक स्थिर आईडी-आधारित लेबल का उपयोग करते हैं जो खाते हटाए जाने पर बदल जाता है## [2.3.6] - 2026-03-12

### Fixed

-**प्रदाता परीक्षण बैच**: `प्रदाताआईडी: शून्य` को स्वीकार करने के लिए निश्चित ज़ॉड स्कीमा (फ्रंटएंड गैर-प्रदाता मोड के लिए शून्य भेजता है); सभी बैच परीक्षणों के लिए गलत तरीके से "अमान्य अनुरोध" लौटा रहा था -**प्रदाता परीक्षण मोडल**: `setTestResults` और `ProviderTestResultsView` में रेंडर करने से पहले एपीआई त्रुटि ऑब्जेक्ट को स्ट्रिंग में सामान्य करके `[ऑब्जेक्ट ऑब्जेक्ट]` डिस्प्ले को ठीक किया गया -**i18n**: गायब कुंजियाँ `cliTools.toolDescriptions.opencode`, `cliTools.toolDescriptions.kiro`, `cliTools.guides.opencode`, `cliTools.guides.kiro` को `en.json` में जोड़ा गया -**i18n**: फ़ॉलबैक के रूप में अंग्रेज़ी मानों का उपयोग करके सभी 29 गैर-अंग्रेज़ी भाषा फ़ाइलों में 1111 गुम कुंजियाँ सिंक्रनाइज़ की गईं## [2.3.5] - 2026-03-11

### Fixed

-**@swc/helpers**: `@swc/helpers` को स्टैंडअलोन ऐप के `node_modules` में कॉपी करने के लिए स्थायी `पोस्टइंस्टॉल` फिक्स जोड़ा गया - वैश्विक npm इंस्टॉल पर MODULE_NOT_FOUND क्रैश को रोकता है## [2.3.4] - 2026-03-10

### Added

- एकाधिक प्रदाता एकीकरण और डैशबोर्ड सुधार
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
