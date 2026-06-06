# Release Checklist (Čeština)

<<<<<<< HEAD

---

Use this checklist before tagging or publishing a new OmniRoute release.

## Version and Changelog

1. Bump `package.json` version (`x.y.z`) in the release branch.
2. Move release notes from `## [Unreleased]` in `CHANGELOG.md` to a dated section:
   - `## [x.y.z] — YYYY-MM-DD`
3. Keep `## [Unreleased]` as the first changelog section for upcoming work.
4. Ensure the latest semver section in `CHANGELOG.md` equals `package.json` version.

## API Docs

1. Update `docs/openapi.yaml`:
   - `info.version` must equal `package.json` version.
2. Validate endpoint examples if API contracts changed.

## Runtime Docs

1. Review `docs/ARCHITECTURE.md` for storage/runtime drift.
2. Review `docs/TROUBLESHOOTING.md` for env var and operational drift.

## Automated Check

Run the sync guard locally before opening PR:

```bash
npm run check:docs-sync
```

CI also runs this check in `.github/workflows/ci.yml` (lint job).
=======
🌐 **Languages:** 🇺🇸 [English](../../../../docs/RELEASE_CHECKLIST.md) · 🇪🇸 [es](../../es/docs/RELEASE_CHECKLIST.md) · 🇫🇷 [fr](../../fr/docs/RELEASE_CHECKLIST.md) · 🇩🇪 [de](../../de/docs/RELEASE_CHECKLIST.md) · 🇮🇹 [it](../../it/docs/RELEASE_CHECKLIST.md) · 🇷🇺 [ru](../../ru/docs/RELEASE_CHECKLIST.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/RELEASE_CHECKLIST.md) · 🇯🇵 [ja](../../ja/docs/RELEASE_CHECKLIST.md) · 🇰🇷 [ko](../../ko/docs/RELEASE_CHECKLIST.md) · 🇸🇦 [ar](../../ar/docs/RELEASE_CHECKLIST.md) · 🇮🇳 [hi](../../hi/docs/RELEASE_CHECKLIST.md) · 🇮🇳 [in](../../in/docs/RELEASE_CHECKLIST.md) · 🇹🇭 [th](../../th/docs/RELEASE_CHECKLIST.md) · 🇻🇳 [vi](../../vi/docs/RELEASE_CHECKLIST.md) · 🇮🇩 [id](../../id/docs/RELEASE_CHECKLIST.md) · 🇲🇾 [ms](../../ms/docs/RELEASE_CHECKLIST.md) · 🇳🇱 [nl](../../nl/docs/RELEASE_CHECKLIST.md) · 🇵🇱 [pl](../../pl/docs/RELEASE_CHECKLIST.md) · 🇸🇪 [sv](../../sv/docs/RELEASE_CHECKLIST.md) · 🇳🇴 [no](../../no/docs/RELEASE_CHECKLIST.md) · 🇩🇰 [da](../../da/docs/RELEASE_CHECKLIST.md) · 🇫🇮 [fi](../../fi/docs/RELEASE_CHECKLIST.md) · 🇵🇹 [pt](../../pt/docs/RELEASE_CHECKLIST.md) · 🇷🇴 [ro](../../ro/docs/RELEASE_CHECKLIST.md) · 🇭🇺 [hu](../../hu/docs/RELEASE_CHECKLIST.md) · 🇧🇬 [bg](../../bg/docs/RELEASE_CHECKLIST.md) · 🇸🇰 [sk](../../sk/docs/RELEASE_CHECKLIST.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/RELEASE_CHECKLIST.md) · 🇮🇱 [he](../../he/docs/RELEASE_CHECKLIST.md) · 🇵🇭 [phi](../../phi/docs/RELEASE_CHECKLIST.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/RELEASE_CHECKLIST.md) · 🇨🇿 [cs](../../cs/docs/RELEASE_CHECKLIST.md) · 🇹🇷 [tr](../../tr/docs/RELEASE_CHECKLIST.md)

---

Tento kontrolní seznam použijte před označením nebo publikováním nového vydání OmniRoute.## Version and Changelog

1. Přesuňte verzi `package.json` (`x.y.z`) ve větvi vydání.
2. Přesuňte poznámky k vydání z `## [Unreleased]` v `CHANGELOG.md` do sekce s datem:
   - `## [x.y.z] — YYYY-MM-DD`
3. Ponechte `## [Unreleased]` jako první sekci changelog pro nadcházející práci.
4. Ujistěte se, že nejnovější sekce semver v `CHANGELOG.md` odpovídá verzi `package.json`.## API Docs

5. Aktualizujte `docs/openapi.yaml`:
   - `info.version` se musí rovnat verzi `package.json`.
6. Ověřte příklady koncových bodů, pokud se smlouvy API změnily.## Runtime Docs

7. Podívejte se na `docs/ARCHITECTURE.md`, kde najdete posun úložiště/běhu.
8. Prohlédněte si `docs/TROUBLESHOOTING.md` pro env var a provozní drift.
9. Aktualizujte lokalizované dokumenty, pokud se zdrojové dokumenty výrazně změnily.## Automated Check

Před otevřením PR spusťte lokálně ochranu synchronizace:```bash
npm run check:docs-sync

```

CI také spustí tuto kontrolu v `.github/workflows/ci.yml` (úloha lint).
```
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
