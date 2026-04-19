# Changelog

## [Unreleased]
## [3.6.21] - 2024-04-10
### Added
- Completed `ZedToolCard` integration for writing configurations directly to `~/.config/zed/settings.json` locally using `keyId`.

# Changelog

## [Unreleased]
## [3.6.21] - 2024-04-10
### Added
- Completed `ZedToolCard` integration for writing configurations directly to `~/.config/zed/settings.json` locally using `keyId`.

## [3.6.21] - 2024-04-10

### Added

- Created Zed OAuth token exchange callback handler at `api/zed/callback/route.ts`

## [3.6.20] - 2024-04-10

### Added

- Successfully integrated and verified `ZedImportCard.tsx` into the API Manager settings tab.
- Submodule `CLIProxyAPIPlus` tracking verified at `/submodules/CLIProxyAPIPlus`.
- Updated Go Proxy routing foundation with `cmd/omniroute` executable entry point.
- Expanded Go Proxy server (`internal/server/router.go`) to dynamically resolve models.

### Fixed

- Fixed duplicate props issue in Next.js `ComboDefaultsTab.tsx` configuration component.

## [3.6.19] - 2024-04-10

### Added

- Go backend router scaffolding (`cmd/omniroute`).
- Go database layer and migrations for SQLite via `mattn/go-sqlite3`.
- Authenticated middleware layer in Go connecting to SQLite API key definitions.
- New `ZedImportCard` component for Zed IDE OAuth flow.
- Extensive tooltips and ARIA label injections across the entire dashboard UI for enhanced accessibility.

### Changed

- Refactored `AIPerformanceChart` to remove mocked math data and strict typing issues.
- Fixed strict type errors in `/api/oauth/zed/import/route.ts` error handlers.

All notable changes to this project will be documented in this file.

## [3.6.20] - 2024-04-10

### Added

- Successfully integrated and verified `ZedImportCard.tsx` into the API Manager settings tab.
- Submodule `CLIProxyAPIPlus` tracking verified at `/submodules/CLIProxyAPIPlus`.
- Updated Go Proxy routing foundation with `cmd/omniroute` executable entry point.

### Fixed

- Fixed duplicate props issue in Next.js `ComboDefaultsTab.tsx` configuration component.
- Improved accessibility by completing sweeping pass of Next.js UI component `title` injection.

## [3.6.19] - 2024-04-10

### Added

- Go backend router scaffolding (`cmd/omniroute`).
- Go database layer and migrations for SQLite via `mattn/go-sqlite3`.
- Authenticated middleware layer in Go connecting to SQLite API key definitions.
- New `ZedImportCard` component for Zed IDE OAuth flow.
- Extensive tooltips and ARIA label injections across the entire dashboard UI for enhanced accessibility.

### Changed

- Refactored `AIPerformanceChart` to remove mocked math data and strict typing issues.
- Fixed strict type errors in `/api/oauth/zed/import/route.ts` error handlers.
