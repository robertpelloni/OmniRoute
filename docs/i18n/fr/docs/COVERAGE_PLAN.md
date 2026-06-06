# Test Coverage Plan (Français)

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

Dernière mise à jour : 2026-03-28## Baseline

Il existe plusieurs numéros de couverture selon la manière dont le rapport est calculé. Pour la planification, un seul d’entre eux est utile.

| Métrique                      | Portée                                                                    | Déclarations / Lignes | Succursales | Fonctions | Remarques                                                           |
| ----------------------------- | ------------------------------------------------------------------------- | --------------------: | ----------: | --------: | ------------------------------------------------------------------- |
| Héritage                      | Ancien `npm run test:coverage`                                            |                79,42% |      75,15% |    67,94% | Gonflé : compte les fichiers de test et exclut `open-sse`           |
| Diagnostique                  | Source uniquement, à l'exclusion des tests et à l'exclusion de `open-sse` |                68.16% |      63,55% |    64,06% | Utile uniquement pour isoler `src/**`                               |
| Base de référence recommandée | Source uniquement, excluant les tests et incluant `open-sse`              |                56,95% |      66,05% |    57,80% | Il s'agit de la base de référence à améliorer à l'échelle du projet |

La ligne de base recommandée est le nombre par rapport auquel optimiser.## Rules

- Les objectifs de couverture s'appliquent aux fichiers sources, pas aux `tests/**`.
- `open-sse/**` fait partie du produit et doit rester dans la portée.
- Le nouveau code ne doit pas réduire la couverture dans les zones touchées.
- Préférez le comportement des tests et les résultats des branches aux détails de mise en œuvre.
- Préférez les bases de données temporaires SQLite et les petits appareils aux larges simulations pour `src/lib/db/**`.## Current command set

- `npm run test:couverture`
  - Porte de couverture de la source principale pour la suite de tests unitaires
  - Génère `text-summary`, `html`, `json-summary` et `lcov`
- `couverture d'exécution npm : rapport`
  - Rapport détaillé fichier par fichier de la dernière exécution
- `npm run test:coverage:legacy`
  - Comparaison historique uniquement## Milestones

| Phases  |                       Cible | Mise au point                                                    |
| ------- | --------------------------: | ---------------------------------------------------------------- |
| Phase 1 |          60% relevés/lignes | Gains rapides et couverture des services publics à faible risque |
| Phase 2 |          65% relevés/lignes | Fondations de bases de données et de routes                      |
| Phase 3 |          70% relevés/lignes | Validation des fournisseurs et analyses d'utilisation            |
| Phase 4 |          75% relevés/lignes | traducteurs et assistants `open-sse`                             |
| Phase 5 |          80% relevés/lignes | Gestionnaires `open-sse` et branches d'exécuteur                 |
| Phase 6 |     85% déclarations/lignes | Cas extrêmes, dette des succursales, suites de régression        |
| Phase 7 | 90 % de déclarations/lignes | Balayage final, fermeture d'écart, cliquet strict                |

Les branches et les fonctions devraient augmenter à chaque phase, mais la cible principale est les instructions/lignes.## Priority hotspots

Ces fichiers ou zones offrent le meilleur rendement pour les phases suivantes :

1. `open-sse/handlers`
   - `chatCore.ts` à 7,57%
   - Répertoire global à 29,07%
2. `open-sse/traducteur/requête`
   - Répertoire global à 36,39%
   - De nombreux traducteurs sont encore proches d'une couverture à un chiffre
3. `open-sse/traducteur/réponse`
   - Annuaire global à 8,07%
4. `open-sse/exécuteurs`
   - Répertoire global à 36,62%
5. `src/lib/db`
   - `models.ts` à 20,66%
   - `registeredKeys.ts` à 34,46%
   - `modelComboMappings.ts` à 36,25%
   - `settings.ts` à 46,40%
   - `webhooks.ts` à 33,33%
6. `src/lib/usage`
   - `usageHistory.ts` à 21,12%
   - `usageStats.ts` à 9,56%
   - `costCalculator.ts` à 30,00%
7. `src/lib/providers`
   - `validation.ts` à 41,16%
8. Utilitaire à faible risque et fichiers API pour des gains précoces
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

- [x] Correction de la métrique de couverture afin qu'elle reflète le code source au lieu des fichiers de test
- [x] Conserver un ancien script de couverture à des fins de comparaison
- [x] Enregistrez la ligne de base et les points chauds dans le dépôt
- [ ] Ajouter des tests ciblés pour les utilitaires à faible risque :
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
- [ ] Ajouter des tests d'itinéraire pour :
  - `src/app/api/settings/require-login/route.ts`
  - `src/app/api/providers/[id]/models/route.ts`### Phase 2: 60% -> 65%

- [ ] Ajouter des tests basés sur la base de données pour :
  - `src/lib/db/modelComboMappings.ts`
  - `src/lib/db/settings.ts`
  - `src/lib/db/registeredKeys.ts`
- [ ] Couvrir le comportement des branches dans :
  - `src/lib/providers/validation.ts`
  - `src/app/api/v1/embeddings/route.ts`
  - `src/app/api/v1/moderations/route.ts`### Phase 3: 65% -> 70%

- [ ] Ajouter des tests d'analyse d'utilisation pour :
  - `src/lib/usage/usageHistory.ts`
  - `src/lib/usage/usageStats.ts`
  - `src/lib/usage/costCalculator.ts`
- [ ] Étendre la couverture des routes pour les branches de gestion et de paramètres des proxys### Phase 4: 70% -> 75%

- [ ] Couvrir les assistants de traduction et les chemins de traduction centraux :
  - `open-sse/translator/index.ts`
  - `open-sse/traducteur/helpers/*`
  - `open-sse/traducteur/request/*`
  - `open-sse/traducteur/response/*`### Phase 5: 75% -> 80%

- [ ] Ajouter des tests au niveau du gestionnaire pour :
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
- [ ] Ajouter une couverture de branche d'exécuteur pour l'authentification, les tentatives et les remplacements de points de terminaison spécifiques au fournisseur### Phase 6: 80% -> 85%

- [ ] Fusionner davantage de suites de cas extrêmes dans le chemin de couverture principal
- [ ] Augmenter la couverture des fonctions pour les modules DB avec une faible couverture constructeur/assistant
- [ ] Combler les lacunes des branches dans `settings.ts`, `registeredKeys.ts`, `validation.ts` et les assistants de traduction### Phase 7: 85% -> 90%

- [ ] Traitez les fichiers restants à faible couverture comme des bloqueurs
- [ ] Ajout de tests de régression pour chaque bug de production découvert corrigé lors du push à 90 % -[ ] Augmentez la porte de couverture dans CI uniquement une fois que la ligne de base locale est stable pendant au moins deux analyses consécutives## Ratchet policy

Mettez à jour les seuils `npm run test:coverage` uniquement après que le projet a réellement dépassé le jalon suivant avec un tampon confortable.

Séquence de cliquet recommandée :
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
L'ordre est "instructions-lignes/branches/fonctions".## Known gap

La commande de couverture actuelle mesure la suite d'unités Node principale et inclut la source obtenue à partir de celle-ci, y compris « open-sse ». Il ne fusionne pas encore la couverture Vitest en un seul rapport unifié. Cette fusion vaut la peine d’être effectuée plus tard, mais elle ne constitue pas un obstacle au démarrage de la montée de 60 % -> 80 %.
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
