# Test Coverage Plan (Čeština)

<<<<<<< HEAD

---

Last updated: 2026-03-28

## Baseline

There are multiple coverage numbers depending on how the report is computed. For planning, only one of them is useful.

| Metric               | Scope                                                 | Statements / Lines | Branches | Functions | Notes                                               |
| -------------------- | ----------------------------------------------------- | -----------------: | -------: | --------: | --------------------------------------------------- |
| Legacy               | Old `npm run test:coverage`                           |             79.42% |   75.15% |    67.94% | Inflated: counts test files and excludes `open-sse` |
| Diagnostic           | Source-only, excluding tests and excluding `open-sse` |             68.16% |   63.55% |    64.06% | Useful only to isolate `src/**`                     |
| Recommended baseline | Source-only, excluding tests and including `open-sse` |             56.95% |   66.05% |    57.80% | This is the project-wide baseline to improve        |

The recommended baseline is the number to optimize against.

## Rules

- Coverage targets apply to source files, not to `tests/**`.
- `open-sse/**` is part of the product and must remain in scope.
- New code should not reduce coverage in touched areas.
- Prefer testing behavior and branch outcomes over implementation details.
- Prefer temp SQLite databases and small fixtures over broad mocks for `src/lib/db/**`.

## Current command set

- `npm run test:coverage`
  - Main source coverage gate for the unit test suite
  - Generates `text-summary`, `html`, `json-summary`, and `lcov`
- `npm run coverage:report`
  - Detailed file-by-file report from the latest run
- `npm run test:coverage:legacy`
  - Historical comparison only

## Milestones

| Phase   |                 Target | Focus                                             |
| ------- | ---------------------: | ------------------------------------------------- |
| Phase 1 | 60% statements / lines | Quick wins and low-risk utility coverage          |
| Phase 2 | 65% statements / lines | DB and route foundations                          |
| Phase 3 | 70% statements / lines | Provider validation and usage analytics           |
| Phase 4 | 75% statements / lines | `open-sse` translators and helpers                |
| Phase 5 | 80% statements / lines | `open-sse` handlers and executor branches         |
| Phase 6 | 85% statements / lines | Harder edge cases, branch debt, regression suites |
| Phase 7 | 90% statements / lines | Final sweep, gap closure, strict ratchet          |

Branches and functions should ratchet upward with each phase, but the primary hard target is statements / lines.

## Priority hotspots

These files or areas offer the best return for the next phases:

1. `open-sse/handlers`
   - `chatCore.ts` at 7.57%
   - Overall directory at 29.07%
2. `open-sse/translator/request`
   - Overall directory at 36.39%
   - Many translators are still near single-digit coverage
3. `open-sse/translator/response`
   - Overall directory at 8.07%
4. `open-sse/executors`
   - Overall directory at 36.62%
5. `src/lib/db`
   - `models.ts` at 20.66%
   - `registeredKeys.ts` at 34.46%
   - `modelComboMappings.ts` at 36.25%
   - `settings.ts` at 46.40%
   - `webhooks.ts` at 33.33%
6. `src/lib/usage`
   - `usageHistory.ts` at 21.12%
   - `usageStats.ts` at 9.56%
   - `costCalculator.ts` at 30.00%
7. `src/lib/providers`
   - `validation.ts` at 41.16%
8. Low-risk utility and API files for early gains
=======
🌐 **Languages:** 🇺🇸 [English](../../../../docs/COVERAGE_PLAN.md) · 🇪🇸 [es](../../es/docs/COVERAGE_PLAN.md) · 🇫🇷 [fr](../../fr/docs/COVERAGE_PLAN.md) · 🇩🇪 [de](../../de/docs/COVERAGE_PLAN.md) · 🇮🇹 [it](../../it/docs/COVERAGE_PLAN.md) · 🇷🇺 [ru](../../ru/docs/COVERAGE_PLAN.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/COVERAGE_PLAN.md) · 🇯🇵 [ja](../../ja/docs/COVERAGE_PLAN.md) · 🇰🇷 [ko](../../ko/docs/COVERAGE_PLAN.md) · 🇸🇦 [ar](../../ar/docs/COVERAGE_PLAN.md) · 🇮🇳 [hi](../../hi/docs/COVERAGE_PLAN.md) · 🇮🇳 [in](../../in/docs/COVERAGE_PLAN.md) · 🇹🇭 [th](../../th/docs/COVERAGE_PLAN.md) · 🇻🇳 [vi](../../vi/docs/COVERAGE_PLAN.md) · 🇮🇩 [id](../../id/docs/COVERAGE_PLAN.md) · 🇲🇾 [ms](../../ms/docs/COVERAGE_PLAN.md) · 🇳🇱 [nl](../../nl/docs/COVERAGE_PLAN.md) · 🇵🇱 [pl](../../pl/docs/COVERAGE_PLAN.md) · 🇸🇪 [sv](../../sv/docs/COVERAGE_PLAN.md) · 🇳🇴 [no](../../no/docs/COVERAGE_PLAN.md) · 🇩🇰 [da](../../da/docs/COVERAGE_PLAN.md) · 🇫🇮 [fi](../../fi/docs/COVERAGE_PLAN.md) · 🇵🇹 [pt](../../pt/docs/COVERAGE_PLAN.md) · 🇷🇴 [ro](../../ro/docs/COVERAGE_PLAN.md) · 🇭🇺 [hu](../../hu/docs/COVERAGE_PLAN.md) · 🇧🇬 [bg](../../bg/docs/COVERAGE_PLAN.md) · 🇸🇰 [sk](../../sk/docs/COVERAGE_PLAN.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/COVERAGE_PLAN.md) · 🇮🇱 [he](../../he/docs/COVERAGE_PLAN.md) · 🇵🇭 [phi](../../phi/docs/COVERAGE_PLAN.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/COVERAGE_PLAN.md) · 🇨🇿 [cs](../../cs/docs/COVERAGE_PLAN.md) · 🇹🇷 [tr](../../tr/docs/COVERAGE_PLAN.md)

---

Poslední aktualizace: 28. 3. 2026## Baseline

Existuje několik čísel pokrytí v závislosti na způsobu výpočtu zprávy. Pro plánování je užitečný pouze jeden z nich.

| Metrické          | Rozsah                                            | Výpisy / řádky |   Větve |  Funkce | Poznámky                                                   |
| ----------------- | ------------------------------------------------- | -------------: | ------: | ------: | ---------------------------------------------------------- |
| Dědictví          | Starý `npm run test:coverage`                     |        79,42 % | 75,15 % | 67,94 % | Nafouknutý: počítá testovací soubory a vylučuje `open-sse` |
| Diagnostické      | Pouze zdroj, s výjimkou testů a bez "open-sse"    |        68,16 % | 63,55 % | 64,06 % | Užitečné pouze k izolaci `src/**`                          |
| Doporučený základ | Pouze zdroj, s výjimkou testů a včetně „open-sse“ |        56,95 % | 66,05 % | 57,80 % | Toto je základní plán pro celý projekt ke zlepšení         |

Doporučený základ je počet, podle kterého se má optimalizovat.## Rules

- Cíle pokrytí se vztahují na zdrojové soubory, nikoli na `tests/**`.
- `open-sse/**` je součástí produktu a musí zůstat v rozsahu.
- Nový kód by neměl snižovat pokrytí v dotčených oblastech.
- Upřednostňujte testovací chování a výsledky větve před detaily implementace.
- Preferujte dočasné databáze SQLite a malá příslušenství před širokými simulacemi pro `src/lib/db/**`.## Current command set

- `npm run test:coverage`
  - Hlavní brána pokrytí zdroje pro sadu testů jednotek
  - Generuje `text-summary`, `html`, `json-summary` a `lcov`
- `Pokrytí běhu npm: zpráva`
  - Podrobná zpráva po jednotlivých souborech z posledního spuštění
- `npm run test:coverage:legacy`
  - Pouze historické srovnání## Milestones

| Fáze   |                 Cíl | Zaměření                                                  |
| ------ | ------------------: | --------------------------------------------------------- |
| Fáze 1 | 60 % výpisů / řádků | Rychlé výhry a pokrytí nástrojem s nízkým rizikem         |
| Fáze 2 | 65 % výpisů / řádků | DB a základy trasy                                        |
| Fáze 3 | 70 % výpisů / řádků | Ověření poskytovatele a analýzy využití                   |
| Fáze 4 | 75 % výpisů / řádků | `open-sse` překladatelé a pomocníci                       |
| Fáze 5 | 80 % výpisů / řádků | `open-sse` handlery a exekutorské pobočky                 |
| Fáze 6 | 85 % výpisů / řádků | Případy tvrdšího okraje, dluh na pobočkách, regresní sady |
| Fáze 7 | 90 % výpisů / řádků | Konečné zametání, uzavření mezery, přísná ráčna           |

Větve a funkce by měly s každou fází stoupat, ale primárním pevným cílem jsou příkazy/řádky.## Priority hotspots

Tyto soubory nebo oblasti nabízejí nejlepší návratnost pro další fáze:

1. „open-sse/handlers“.
   - `chatCore.ts` na 7,57 %
   - Celkový adresář na 29,07 %
2. `open-sse/translator/request`
   - Celkový adresář na 36,39 %
   - Mnoho překladatelů se stále blíží jednocifernému pokrytí
3. `open-sse/translator/response`
   - Celkový adresář na 8,07 %
4. `open-sse/executors`
   - Celkový adresář na 36,62 %
5. `src/lib/db`
   - `models.ts` na 20,66 %
   - `registeredKeys.ts` na 34,46 %
   - `modelComboMappings.ts` na 36,25 %
   - `settings.ts` na 46,40 %
   - `webhooks.ts` na 33,33 %
6. `src/lib/usage`
   - `usageHistory.ts` na 21,12 %
   - `usageStats.ts` na 9,56 %
   - `costCalculator.ts` na 30,00 %
7. `src/lib/providers`
   - `validace.ts` na 41,16 %
8. Nízkorizikový nástroj a soubory API pro počáteční zisky
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
   - `src/shared/utils/upstreamError.ts`
   - `src/shared/utils/apiAuth.ts`
   - `src/lib/api/errorResponse.ts`
   - `src/app/api/settings/require-login/route.ts`
<<<<<<< HEAD
   - `src/app/api/providers/[id]/models/route.ts`

## Execution checklist

### Phase 1: 56.95% -> 60%

- [x] Fix coverage metric so it reflects source code instead of test files
- [x] Keep a legacy coverage script for comparison
- [x] Record the baseline and hotspots in-repo
- [ ] Add focused tests for low-risk utilities:
=======
   - `src/app/api/providers/[id]/models/route.ts`## Execution checklist

### Phase 1: 56.95% -> 60%

- [x] Opravte metriku pokrytí, aby odrážela zdrojový kód namísto testovacích souborů
- [x] Uschovejte si starší skript pokrytí pro srovnání
- [x] Zaznamenejte základní linii a aktivní body v repo
- [ ] Přidejte cílené testy pro nástroje s nízkým rizikem:
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  - `src/shared/utils/upstreamError.ts`
  - `src/shared/utils/fetchTimeout.ts`
  - `src/lib/api/errorResponse.ts`
  - `src/shared/utils/apiAuth.ts`
  - `src/lib/display/names.ts`
<<<<<<< HEAD
- [ ] Add route tests for:
  - `src/app/api/settings/require-login/route.ts`
  - `src/app/api/providers/[id]/models/route.ts`

### Phase 2: 60% -> 65%

- [ ] Add DB-backed tests for:
  - `src/lib/db/modelComboMappings.ts`
  - `src/lib/db/settings.ts`
  - `src/lib/db/registeredKeys.ts`
- [ ] Cover branch behavior in:
  - `src/lib/providers/validation.ts`
  - `src/app/api/v1/embeddings/route.ts`
  - `src/app/api/v1/moderations/route.ts`

### Phase 3: 65% -> 70%

- [ ] Add usage analytics tests for:
  - `src/lib/usage/usageHistory.ts`
  - `src/lib/usage/usageStats.ts`
  - `src/lib/usage/costCalculator.ts`
- [ ] Expand route coverage for proxy management and settings branches

### Phase 4: 70% -> 75%

- [ ] Cover translator helpers and central translation paths:
  - `open-sse/translator/index.ts`
  - `open-sse/translator/helpers/*`
  - `open-sse/translator/request/*`
  - `open-sse/translator/response/*`

### Phase 5: 75% -> 80%

- [ ] Add handler-level tests for:
=======
- [ ] Přidat testy trasy pro:
  - `src/app/api/settings/require-login/route.ts`
  - `src/app/api/providers/[id]/models/route.ts`### Phase 2: 60% -> 65%

- [ ] Přidat testy podporované DB pro:
  - `src/lib/db/modelComboMappings.ts`
  - `src/lib/db/settings.ts`
  - `src/lib/db/registeredKeys.ts`
- [ ] Pokrýt chování větve v:
  - `src/lib/providers/validation.ts`
  - `src/app/api/v1/embeddings/route.ts`
  - `src/app/api/v1/moderations/route.ts`### Phase 3: 65% -> 70%

- [ ] Přidat analytické testy využití pro:
  - `src/lib/usage/usageHistory.ts`
  - `src/lib/usage/usageStats.ts`
  - `src/lib/usage/costCalculator.ts`
- [ ] Rozšiřte pokrytí trasy pro větve správy proxy a nastavení### Phase 4: 70% -> 75%

- [ ] Pokrývají pomocníci překladatele a centrální cesty překladu:
  - `open-sse/translator/index.ts`
  - `open-sse/translator/helpers/*`
  - `open-sse/translator/request/*`
  - `open-sse/translator/response/*`### Phase 5: 75% -> 80%

- [ ] Přidat testy na úrovni obsluhy pro:
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  - `open-sse/handlers/chatCore.ts`
  - `open-sse/handlers/responsesHandler.js`
  - `open-sse/handlers/imageGeneration.js`
  - `open-sse/handlers/embeddings.js`
<<<<<<< HEAD
- [ ] Add executor branch coverage for provider-specific auth, retries, and endpoint overrides

### Phase 6: 80% -> 85%

- [ ] Merge more edge-case suites into the main coverage path
- [ ] Increase function coverage for DB modules with weak constructor/helper coverage
- [ ] Close branch gaps in `settings.ts`, `registeredKeys.ts`, `validation.ts`, and translator helpers

### Phase 7: 85% -> 90%

- [ ] Treat the remaining low-coverage files as blockers
- [ ] Add regression tests for every uncovered production bug fixed during the push to 90%
- [ ] Raise the coverage gate in CI only after the local baseline is stable for at least two consecutive runs

## Ratchet policy

Update `npm run test:coverage` thresholds only after the project actually exceeds the next milestone with a comfortable buffer.

Recommended ratchet sequence:
=======
- [ ] Přidejte pokrytí větve exekutora pro ověření, opakování a přepsání koncového bodu specifické pro poskytovatele### Phase 6: 80% -> 85%

- [ ] Sloučit více sad okrajových případů do hlavní cesty pokrytí
- [ ] Zvyšte pokrytí funkcí pro moduly DB se slabým pokrytím konstruktorem/pomocníkem
- [ ] Zavřete mezery mezi větvemi v souborech `settings.ts`, `registeredKeys.ts`, `validation.ts` a pomocníkech překladače### Phase 7: 85% -> 90%

- [ ] Považujte zbývající soubory s nízkým pokrytím za blokátory
- [ ] Přidejte regresní testy pro každou odhalenou produkční chybu opravenou během push na 90 %
- [ ] Zvyšte bránu pokrytí v CI pouze poté, co bude místní základní linie stabilní po dobu alespoň dvou po sobě jdoucích běhů## Ratchet policy

Aktualizujte prahové hodnoty `npm run test:coverage` až poté, co projekt skutečně překročí další milník s pohodlným bufferem.

Doporučené pořadí ráčny:
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

1. 55/60/55
2. 60/62/58
3. 65/64/62
4. 70/66/66
5. 75/70/72
6. 80/75/78
7. 85/80/84
8. 90/85/88

<<<<<<< HEAD
Order is `statements-lines / branches / functions`.

## Known gap

The current coverage command measures the main Node unit suite and includes source reached from it, including `open-sse`. It does not yet merge Vitest coverage into a single unified report. That merge is worth doing later, but it is not a blocker for starting the 60% -> 80% climb.
=======
Pořadí je `výkazy-řádky / větve / funkce`.## Known gap

Příkaz aktuálního pokrytí měří hlavní sadu jednotek uzlů a zahrnuje zdroj z ní dosažený, včetně `open-sse`. Zatím neslučuje pokrytí Vitestem do jediné jednotné zprávy. Toto sloučení stojí za to udělat později, ale není to překážka pro začátek stoupání 60% -> 80%.
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
