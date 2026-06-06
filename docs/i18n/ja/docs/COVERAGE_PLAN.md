# Test Coverage Plan (日本語)

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

最終更新日: 2026-03-28## Baseline

レポートの計算方法に応じて、複数のカバレッジ数値が存在します。計画の場合、そのうち 1 つだけが役に立ちます。

| メトリック             | 範囲                                        | ステートメント/行 |   支店 |   機能 | メモ                                                                 |
| ---------------------- | ------------------------------------------- | ----------------: | -----: | -----: | -------------------------------------------------------------------- |
| レガシー               | 古い `npm run test:coverage`                |            79.42% | 75.15% | 67.94% | インフレート: テスト ファイルをカウントし、`open-sse` を除外します。 |
| 診断                   | ソースのみ、テストを除く、`open-sse` を除く |            68.16% | 63.55% | 64.06% | `src/**` を分離する場合にのみ役立ちます。                            |
| 推奨されるベースライン | ソースのみ、テストを除く、`open-sse` を含む |            56.95% | 66.05% | 57.80% | これは、プロジェクト全体の改善のためのベースラインです。             |

推奨されるベースラインは、最適化の対象となる数値です。## Rules

- カバレッジ ターゲットは、`tests/**` ではなく、ソース ファイルに適用されます。
- `open-sse/**` は製品の一部であり、スコープ内に残る必要があります。
- 新しいコードは、タッチされた領域のカバレッジを減少させてはなりません。
- 実装の詳細よりも、テスト動作と分岐の結果を優先します。
- `src/lib/db/**` の広範なモックよりも、一時的な SQLite データベースと小さなフィクスチャを優先します。## Current command set

- `npm run test:coverage`
  - 単体テストスイートのメインソースカバレッジゲート
  - `text-summary`、`html`、`json-summary`、および `lcov` を生成します。
- `npm 実行カバレッジ:レポート`
  - 最新の実行からのファイルごとの詳細なレポート
- `npm run test:coverage:legacy`
  - 過去の比較のみ## Milestones

| フェーズ   |            ターゲット | フォーカス                                             |
| ---------- | --------------------: | ------------------------------------------------------ |
| フェーズ 1 | 60% ステートメント/行 | 迅速な対応と低リスクの公共事業の補償                   |
| フェーズ 2 | 65% ステートメント/行 | DB and route foundations                               |
| フェーズ 3 | 70% ステートメント/行 | プロバイダーの検証と使用状況の分析                     |
| フェーズ 4 | 75% ステートメント/行 | `open-sse` トランスレータとヘルパー                    |
| フェーズ 5 | 80% ステートメント/行 | `open-sse` ハンドラとエグゼキュータ ブランチ           |
| フェーズ 6 | 85% ステートメント/行 | より困難なエッジケース、支店負債、回帰スイート         |
| フェーズ 7 | 90% ステートメント/行 | ファイナルスイープ、ギャップクローズ、厳密なラチェット |

ブランチと関数はフェーズごとに徐々に増えていきますが、主なハードターゲットはステートメント/行です。## Priority hotspots

これらのファイルまたは領域は、次のフェーズで最大の利益をもたらします。

1. `open-sse/handlers`
   - 「chatCore.ts」 7.57%
   - ディレクトリ全体で 29.07%
2. `open-sse/translator/request`
   - ディレクトリ全体で 36.39%
   - 多くの翻訳者はまだカバー範囲が 1 桁に近いです
3. `open-sse/translator/response`
   - ディレクトリ全体で 8.07%
4. `open-sse/executors`
   - ディレクトリ全体で 36.62%
5. `src/lib/db`
   - 「models.ts」 20.66%
   - 「registeredKeys.ts」 34.46%
   - `modelComboMappings.ts` 36.25%
   - `settings.ts` 46.40%
   - 「webhooks.ts」 33.33%
6. `src/lib/usage`
   - `usageHistory.ts` 21.12%
   - 「usageStats.ts」 9.56%
   - `costCalculator.ts` 30.00%
7. `src/lib/providers`
   - 「validation.ts」 41.16%
8. 早期利益のための低リスクのユーティリティおよび API ファイル
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

- [x] テスト ファイルではなくソース コードを反映するようにカバレッジ メトリックを修正しました。
- [x] 比較のために従来のカバレッジ スクリプトを保存します。
- [x] リポジトリ内のベースラインとホットスポットを記録します
- [ ] 低リスクのユーティリティに焦点を当てたテストを追加します。
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
- [ ] 次のルート テストを追加します。
  - `src/app/api/settings/require-login/route.ts`
  - `src/app/api/providers/[id]/models/route.ts`### Phase 2: 60% -> 65%

- [ ] DB に基づくテストを追加:
  - `src/lib/db/modelComboMappings.ts`
  - `src/lib/db/settings.ts`
  - `src/lib/db/registeredKeys.ts`
- [ ] 次のブランチ動作をカバーします。
  - `src/lib/providers/validation.ts`
  - `src/app/api/v1/embeddings/route.ts`
  - `src/app/api/v1/moderations/route.ts`### Phase 3: 65% -> 70%

- [ ] 次の使用状況分析テストを追加します。
  - `src/lib/usage/usageHistory.ts`
  - `src/lib/usage/usageStats.ts`
  - `src/lib/usage/costCalculator.ts`
- [ ] プロキシ管理および設定ブランチのルート カバレッジを拡大します### Phase 4: 70% -> 75%

- [ ] 翻訳ヘルパーと中央の翻訳パスをカバーします。
  - `open-sse/translator/index.ts`
  - `open-sse/translator/helpers/*`
  - `open-sse/translator/request/*`
  - `open-sse/translator/response/*`### Phase 5: 75% -> 80%

- [ ] 以下のハンドラーレベルのテストを追加します。
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
- [ ] プロバイダー固有の認証、再試行、エンドポイント オーバーライドに対するエグゼキューター ブランチ カバレッジを追加します。### Phase 6: 80% -> 85%

- [ ] より多くのエッジケース スイートをメイン カバレッジ パスにマージします
- [ ] コンストラクター/ヘルパーのカバレッジが弱い DB モジュールの関数カバレッジを増やす
- [ ] `settings.ts`、`registeredKeys.ts`、`validation.ts`、およびトランスレーター ヘルパーのブランチ ギャップを閉じます。### Phase 7: 85% -> 90%

- [ ] 残りの低カバレッジ ファイルをブロッカーとして扱います
- [ ] 90% へのプッシュ中に修正されたすべての発見された運用バグに対して回帰テストを追加します
- [ ] ローカル ベースラインが少なくとも 2 回連続の実行で安定した後にのみ、CI のカバレッジ ゲートを上げます。## Ratchet policy

プロジェクトが実際に快適なバッファーで次のマイルストーンを超えた後にのみ、「npm run test:coverage」のしきい値を更新します。

推奨されるラチェットシーケンス:
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
順序は「ステートメント行 / 分岐 / 関数」です。## Known gap

現在のカバレッジ コマンドは、メイン ノード ユニット スイートを測定し、そこから到達したソース (「open-sse」など) を含みます。 Vitest の報道内容はまだ 1 つの統合レポートに統合されていません。このマージは後で実行する価値がありますが、60% -> 80% の上昇を開始するための障害にはなりません。
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
