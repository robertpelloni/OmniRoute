# OmniRoute MCP Server Documentation (日本語)

<<<<<<< HEAD

---

> Model Context Protocol server with 16 intelligent tools

## インストール

OmniRoute MCP is built-in. Start it with:

```bash
omniroute --mcp
```

Or via the open-sse transport:

```bash
# HTTP streamable transport (port 20130)
omniroute --dev  # MCP auto-starts on /mcp endpoint
```

## IDE Configuration

See [IDE Configs](integrations/ide-configs.md) for Antigravity, Cursor, Copilot, and Claude Desktop setup.

---

## Essential Tools (8)

| Tool                            | Description                              |
| :------------------------------ | :--------------------------------------- |
| `omniroute_get_health`          | Gateway health, circuit breakers, uptime |
| `omniroute_list_combos`         | All configured combos with models        |
| `omniroute_get_combo_metrics`   | Performance metrics for a specific combo |
| `omniroute_switch_combo`        | Switch active combo by ID/name           |
| `omniroute_check_quota`         | Quota status per provider or all         |
| `omniroute_route_request`       | Send a chat completion through OmniRoute |
| `omniroute_cost_report`         | Cost analytics for a time period         |
| `omniroute_list_models_catalog` | Full model catalog with capabilities     |

## Advanced Tools (8)

| Tool                               | Description                                                 |
| :--------------------------------- | :---------------------------------------------------------- |
| `omniroute_simulate_route`         | Dry-run routing simulation with fallback tree               |
| `omniroute_set_budget_guard`       | Session budget with degrade/block/alert actions             |
| `omniroute_set_resilience_profile` | Apply conservative/balanced/aggressive preset               |
| `omniroute_test_combo`             | Live-test all models in a combo via a real upstream request |
| `omniroute_get_provider_metrics`   | Detailed metrics for one provider                           |
| `omniroute_best_combo_for_task`    | Task-fitness recommendation with alternatives               |
| `omniroute_explain_route`          | Explain a past routing decision                             |
| `omniroute_get_session_snapshot`   | Full session state: costs, tokens, errors                   |

## Authentication

MCP tools are authenticated via API key scopes. Each tool requires specific scopes:

| Scope          | Tools                                            |
| :------------- | :----------------------------------------------- |
| `read:health`  | get_health, get_provider_metrics                 |
| `read:combos`  | list_combos, get_combo_metrics                   |
| `write:combos` | switch_combo                                     |
| `read:quota`   | check_quota                                      |
| `write:route`  | route_request, simulate_route, test_combo        |
| `read:usage`   | cost_report, get_session_snapshot, explain_route |
| `write:config` | set_budget_guard, set_resilience_profile         |
| `read:models`  | list_models_catalog, best_combo_for_task         |

## Audit Logging

Every tool call is logged to `mcp_tool_audit` with:

- Tool name, arguments, result
- Duration (ms), success/failure
- API key hash, timestamp

## Files

| File                                         | Purpose                                     |
| :------------------------------------------- | :------------------------------------------ |
| `open-sse/mcp-server/server.ts`              | MCP server creation + 16 tool registrations |
| `open-sse/mcp-server/transport.ts`           | Stdio + HTTP transport                      |
| `open-sse/mcp-server/auth.ts`                | API key + scope validation                  |
| `open-sse/mcp-server/audit.ts`               | Tool call audit logging                     |
| `open-sse/mcp-server/tools/advancedTools.ts` | 8 advanced tool handlers                    |
=======
🌐 **Languages:** 🇺🇸 [English](../../../../docs/MCP-SERVER.md) · 🇪🇸 [es](../../es/docs/MCP-SERVER.md) · 🇫🇷 [fr](../../fr/docs/MCP-SERVER.md) · 🇩🇪 [de](../../de/docs/MCP-SERVER.md) · 🇮🇹 [it](../../it/docs/MCP-SERVER.md) · 🇷🇺 [ru](../../ru/docs/MCP-SERVER.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/MCP-SERVER.md) · 🇯🇵 [ja](../../ja/docs/MCP-SERVER.md) · 🇰🇷 [ko](../../ko/docs/MCP-SERVER.md) · 🇸🇦 [ar](../../ar/docs/MCP-SERVER.md) · 🇮🇳 [hi](../../hi/docs/MCP-SERVER.md) · 🇮🇳 [in](../../in/docs/MCP-SERVER.md) · 🇹🇭 [th](../../th/docs/MCP-SERVER.md) · 🇻🇳 [vi](../../vi/docs/MCP-SERVER.md) · 🇮🇩 [id](../../id/docs/MCP-SERVER.md) · 🇲🇾 [ms](../../ms/docs/MCP-SERVER.md) · 🇳🇱 [nl](../../nl/docs/MCP-SERVER.md) · 🇵🇱 [pl](../../pl/docs/MCP-SERVER.md) · 🇸🇪 [sv](../../sv/docs/MCP-SERVER.md) · 🇳🇴 [no](../../no/docs/MCP-SERVER.md) · 🇩🇰 [da](../../da/docs/MCP-SERVER.md) · 🇫🇮 [fi](../../fi/docs/MCP-SERVER.md) · 🇵🇹 [pt](../../pt/docs/MCP-SERVER.md) · 🇷🇴 [ro](../../ro/docs/MCP-SERVER.md) · 🇭🇺 [hu](../../hu/docs/MCP-SERVER.md) · 🇧🇬 [bg](../../bg/docs/MCP-SERVER.md) · 🇸🇰 [sk](../../sk/docs/MCP-SERVER.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/MCP-SERVER.md) · 🇮🇱 [he](../../he/docs/MCP-SERVER.md) · 🇵🇭 [phi](../../phi/docs/MCP-SERVER.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/MCP-SERVER.md) · 🇨🇿 [cs](../../cs/docs/MCP-SERVER.md) · 🇹🇷 [tr](../../tr/docs/MCP-SERVER.md)

---

> 16 個のインテリジェント ツールを備えたモデル コンテキスト プロトコル サーバー## インストール

OmniRoute MCP が内蔵されています。以下から始めてください:```bash
omniroute --mcp

````

または、open-sse トランスポート経由:```bash
# HTTP streamable transport (port 20130)
omniroute --dev  # MCP auto-starts on /mcp endpoint
````

## IDE Configuration

Antigravity、Cursor、Copilot、および Claude Desktop のセットアップについては、[IDE Con​​figs](integrations/ide-configs.md) を参照してください。---

## Essential Tools (8)

| ツール                          | 説明                                                  |
| :------------------------------ | :---------------------------------------------------- | --------------------- |
| `omniroute_get_health`          | ゲートウェイの健全性、サーキット ブレーカー、稼働時間 |
| `omniroute_list_combos`         | モデルとのすべての構成済みコンボ                      |
| `omniroute_get_combo_metrics`   | 特定のコンボのパフォーマンス指標                      |
| `omniroute_switch_combo`        | ID/名前でアクティブなコンボを切り替える               |
| `omniroute_check_quota`         | プロバイダーごとまたはすべてのクォータ ステータス     |
| `omniroute_route_request`       | OmniRoute 経由でチャット完了を送信する                |
| `オムニルートコストレポート`    | 期間のコスト分析                                      |
| `omniroute_list_models_catalog` | 機能を備えたフルモデルカタログ                        | ## Advanced Tools (8) |

| ツール                             | 説明                                                                                     |
| :--------------------------------- | :--------------------------------------------------------------------------------------- | ----------------- |
| `omniroute_simulate_route`         | フォールバック ツリーを使用したルーティング シミュレーションのドライラン                 |
| `omniroute_set_budget_guard`       | 機能低下/ブロック/アラート アクションを伴うセッション バジェット                         |
| `omniroute_set_resilience_profile` | 保守的/バランス/アグレッシブなプリセットを適用                                           |
| `omniroute_test_combo`             | 実際のアップストリームリクエストを介して、コンボ内のすべてのモデルをライブテストします。 |
| `omniroute_get_provider_metrics`   | 1 つのプロバイダーの詳細なメトリクス                                                     |
| `omniroute_best_combo_for_task`    | 代替案を含むタスクフィットネスの推奨事項                                                 |
| `omniroute_explain_route`          | 過去のルーティング決定について説明する                                                   |
| `omniroute_get_session_snapshot`   | 完全なセッション状態: コスト、トークン、エラー                                           | ## Authentication |

MCP ツールは、API キー スコープを介して認証されます。各ツールには特定のスコープが必要です。

| 範囲                | ツール                                                     |
| :------------------ | :--------------------------------------------------------- | ---------------- |
| `読み取り:健康`     | get_health、get_provider_metrics                           |
| `読み取り:コンボ`   | list_combos、get_combo_metrics                             |
| `書き込み:コンボ`   | スイッチコンボ                                             |
| `読み取り:クォータ` | チェッククォータ                                           |
| `書き込み:ルート`   | route_request, simulate_route, test_combo                  |
| `読み取り:使用法`   | コストレポート、セッションスナップショット取得、ルート説明 |
| `書き込み:設定`     | set_budget_guard、set_resilience_profile                   |
| `読み取り:モデル`   | モデルカタログのリスト、タスクに最適なコンボ               | ## Audit Logging |

すべてのツール呼び出しは、次のように `mcp_tool_audit` に記録されます。

- ツール名、引数、結果
- 期間 (ミリ秒)、成功/失敗
- API キーのハッシュ、タイムスタンプ## Files

| ファイル                                     | 目的                          |
| :------------------------------------------- | :---------------------------- |
| `open-sse/mcp-server/server.ts`              | MCPサーバー作成+16ツール登録  |
| `open-sse/mcp-server/transport.ts`           | Stdio + HTTP トランスポート   |
| `open-sse/mcp-server/auth.ts`                | API キー + スコープの検証     |
| `open-sse/mcp-server/audit.ts`               | ツール呼び出し監査ログ        |
| `open-sse/mcp-server/tools/advancedTools.ts` | 8 つの高度なツール ハンドラー |
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
