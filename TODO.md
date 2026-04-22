# OmniRoute TODO List

## Immediate Bugs/Fixes
*   [ ] Verify the `AnthropicProvider` handles multi-modal image content blocks correctly inside `mapRequest`.
*   [ ] Enhance `GeminiProvider` mapping for arrays of complex `Parts`.

## Short-Term Features
*   [ ] Verify `TokenScorer` weight variables are dynamically tunable via `config.yaml`.
*   [ ] Migrate remaining `A2A` protocol endpoints from `open-sse/` (TS) to Go HTTP mux.

## Code Quality/Refactoring
*   [ ] Centralize i18n Next.js strings that were injected for tooltips into the actual `messages/en.json` file.
*   [ ] Migrate `better-sqlite3` typescript schema directly into Go migrations.

## Submodule Tasks
*   [ ] Dig deeper into `CLIProxyAPIPlus/internal/registry` and see if `model_updater.go` can be used to automatically sync OpenRouter definitions.
