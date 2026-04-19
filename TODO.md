# OmniRoute TODO List

## Immediate Bugs/Fixes
*   [ ] Double check `/api/cli-tools/zed/zed-import` handles missing Zed `.config` folders gracefully on Windows.
*   [ ] Fix relative path aliases (e.g. `@/lib/db`) failing Turbopack Next.js builds. (Addressed in v3.6.21)

## Short-Term Features
*   [ ] Wire up `internal/auth/metrics.go` `TokenScorer` to `internal/server/router.go`.
*   [ ] Build Go provider implementations (`OpenAI`, `Anthropic`, `Gemini`) satisfying `StreamExecutor`.
*   [ ] Migrate `A2A` protocol executors from `open-sse/executors` (TS) to Go.

## Code Quality/Refactoring
*   [ ] Centralize i18n Next.js strings that were injected for tooltips into the actual `messages/en.json` file.
*   [ ] Migrate `better-sqlite3` typescript schema directly into Go migrations.

## Submodule Tasks
*   [ ] Dig deeper into `CLIProxyAPIPlus/internal/registry` and see if `model_updater.go` can be used to automatically sync OpenRouter definitions.
