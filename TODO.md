# OmniRoute TODO List

## Immediate Bugs/Fixes

- [ ] Go `internal/server/router.go` currently hardcodes provider routing. Update it to use dynamic model resolution.
- [ ] Double check `/api/cli-tools/zed/zed-import` returns the correct shape for the desktop CLI.

## Short-Term Features

- [ ] Expand `internal/providers` interface in Go to cover `Stream()` natively.
- [ ] Map Anthropic `claude-3` message attributes to standard OpenAI completions via Go.
- [ ] Migrate `A2A` protocol executors from `open-sse/executors` (TS) to Go.

## Code Quality/Refactoring

- [ ] Centralize i18n Next.js strings that were injected for tooltips into the actual `messages/en.json` file.
- [ ] Migrate `better-sqlite3` typescript schema directly into Go migrations.

## Submodule Tasks

- [ ] Read documentation of `CLIProxyAPIPlus` and extract overlapping features to merge into `omniroute`.
