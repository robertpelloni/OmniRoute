# OmniRoute MCP Server Documentation (Filipino)

<<<<<<< HEAD

---

> Model Context Protocol server with 16 intelligent tools

## I-install

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

> Model Context Protocol server na may 16 na matalinong tool## I-install

Ang OmniRoute MCP ay built-in. Simulan ito sa:```bash
omniroute --mcp

````

O sa pamamagitan ng open-sse transport:```bash
# HTTP streamable transport (port 20130)
omniroute --dev  # MCP auto-starts on /mcp endpoint
````

## IDE Configuration

Tingnan ang [IDE Configs](integrations/ide-configs.md) para sa Antigravity, Cursor, Copilot, at Claude Desktop setup.---

## Essential Tools (8)

| Tool                            | Paglalarawan                                                 |
| :------------------------------ | :----------------------------------------------------------- | --------------------- |
| `omniroute_get_health`          | Kalusugan ng gateway, mga circuit breaker, uptime            |
| `omniroute_list_combos`         | Lahat ng naka-configure na combo na may mga modelo           |
| `omniroute_get_combo_metrics`   | Mga sukatan ng pagganap para sa isang partikular na combo    |
| `omniroute_switch_combo`        | Lumipat ng aktibong combo ayon sa ID/pangalan                |
| `omniroute_check_quota`         | Katayuan ng quota bawat provider o lahat                     |
| `omniroute_route_request`       | Magpadala ng pagkumpleto ng chat sa pamamagitan ng OmniRoute |
| `omniroute_cost_report`         | Analytics ng gastos para sa isang yugto ng panahon           |
| `omniroute_list_models_catalog` | Buong katalogo ng modelo na may mga kakayahan                | ## Advanced Tools (8) |

| Tool                               | Paglalarawan                                                                                         |
| :--------------------------------- | :--------------------------------------------------------------------------------------------------- | ----------------- |
| `omniroute_simulate_route`         | Dry-run routing simulation na may fallback tree                                                      |
| `omniroute_set_budget_guard`       | Badyet ng session na may mga pagkilos na nagpapababa/nag-block/alerto                                |
| `omniroute_set_resilience_profile` | Ilapat ang konserbatibo/balanse/agresibong preset                                                    |
| `omniroute_test_combo`             | Live-test lahat ng mga modelo sa isang combo sa pamamagitan ng isang tunay na upstream na kahilingan |
| `omniroute_get_provider_metrics`   | Mga detalyadong sukatan para sa isang provider                                                       |
| `omniroute_best_combo_for_task`    | Rekomendasyon sa fitness sa gawain na may mga alternatibo                                            |
| `omniroute_explain_route`          | Ipaliwanag ang isang nakaraang desisyon sa pagruruta                                                 |
| `omniroute_get_session_snapshot`   | Katayuan ng buong session: mga gastos, mga token, mga error                                          | ## Authentication |

Ang mga tool ng MCP ay napatotohanan sa pamamagitan ng mga saklaw ng key ng API. Ang bawat tool ay nangangailangan ng mga partikular na saklaw:

| Saklaw          | Mga tool                                         |
| :-------------- | :----------------------------------------------- | ---------------- |
| `read:health`   | get_health, get_provider_metrics                 |
| `read:combos`   | list_combos, get_combo_metrics                   |
| `write:combos`  | switch_combo                                     |
| `read:quota`    | check_quota                                      |
| `magsulat:ruta` | route_request, simulate_route, test_combo        |
| `read:usage`    | cost_report, get_session_snapshot, explain_route |
| `write:config`  | set_budget_guard, set_resilience_profile         |
| `read:models`   | list_models_catalog, best_combo_for_task         | ## Audit Logging |

Ang bawat tool na tawag ay naka-log sa `mcp_tool_audit` gamit ang:

- Pangalan ng tool, mga argumento, resulta
- Tagal (ms), tagumpay/kabiguan
- API key hash, timestamp## Files

| File                                         | Layunin                                              |
| :------------------------------------------- | :--------------------------------------------------- |
| `open-sse/mcp-server/server.ts`              | Paglikha ng MCP server + 16 na pagrerehistro ng tool |
| `open-sse/mcp-server/transport.ts`           | Stdio + HTTP transport                               |
| `open-sse/mcp-server/auth.ts`                | API key + pagpapatunay ng saklaw                     |
| `open-sse/mcp-server/audit.ts`               | Tool call audit logging                              |
| `open-sse/mcp-server/tools/advancedTools.ts` | 8 advanced na tool handler                           |
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
