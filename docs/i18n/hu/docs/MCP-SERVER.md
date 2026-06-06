# OmniRoute MCP Server Documentation (Magyar)

<<<<<<< HEAD

---

> Model Context Protocol server with 16 intelligent tools

## Telepítés

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

> Model Context Protocol szerver 16 intelligens eszközzel## Telepítés

Az OmniRoute MCP beépített. Kezdje ezzel:```bash
omniroute --mcp

````

Vagy az open-sse transzporttal:```bash
# HTTP streamable transport (port 20130)
omniroute --dev  # MCP auto-starts on /mcp endpoint
````

## IDE Configuration

Lásd: [IDE Configs](integrations/ide-configs.md) az Antigravity, Cursor, Copilot és Claude Desktop beállításához.---

## Essential Tools (8)

| Szerszám                        | Leírás                                         |
| :------------------------------ | :--------------------------------------------- | --------------------- |
| `omniroute_get_health`          | Átjáró állapota, megszakítók, üzemidő          |
| `omniroute_list_combos`         | Minden konfigurált kombó modellekkel           |
| `omniroute_get_combo_metrics`   | Egy adott kombináció teljesítménymutatói       |
| `omniroute_switch_combo`        | Aktív kombináció váltása azonosító/név szerint |
| `omniroute_check_quota`         | Kvóta állapota szolgáltatónként vagy az összes |
| `omniroute_route_request`       | Csevegés befejezésének elküldése az OmniRoute  | segítségével          |
| `omniroute_cost_report`         | Költségelemzés egy időszakra vonatkozóan       |
| `omniroute_list_models_catalog` | Teljes modellkatalógus képességekkel           | ## Advanced Tools (8) |

| Szerszám                                        | Leírás                                                                        |
| :---------------------------------------------- | :---------------------------------------------------------------------------- | ----------------- |
| `omniroute_simulate_route`                      | Száraz futtatású útválasztási szimuláció tartalék fával                       |
| `omniroute_set_budget_guard`                    | Munkamenet-költségvetés rontó/blokkoló/riasztási műveletekkel                 |
| `omniroute_set_resilience_profile`              | Konzervatív/kiegyensúlyozott/agresszív előbeállítás alkalmazása               |
| `omniroute_test_combo`                          | Élőben tesztelje az összes modellt egy kombinációban valódi upstream kéréssel |
| `omniroute_get_provider_metrics`                | Részletes mutatók egy szolgáltatóhoz                                          |
| `mindenútvonal_legjobb_kombinációja_feladathoz` | Feladat-fitness ajánlás alternatívákkal                                       |
| `omniroute_explain_route`                       | Magyarázza el egy korábbi útválasztási döntését                               |
| `omniroute_get_session_snapshot`                | Teljes munkamenet állapota: költségek, tokenek, hibák                         | ## Authentication |

Az MCP-eszközök hitelesítése API-kulcs-hatókörökön keresztül történik. Minden eszköz speciális hatókört igényel:

| Hatály               | Eszközök                                              |
| :------------------- | :---------------------------------------------------- | ---------------- |
| `olvasd:egészségügy` | get_health, get_provider_metrics                      |
| `read:combos`        | list_combos, get_combo_metrics                        |
| `write:combos`       | switch_combo                                          |
| `read:quota`         | check_quota                                           |
| `write:route`        | route_request, simulate_route, test_combo             |
| `read:usage`         | cost*report, get_session_snapshot, magyarázat*útvonal |
| `write:config`       | set_budget_guard, set_resilience_profile              |
| `read:models`        | list_models_catalog, best_combo_for_task              | ## Audit Logging |

Minden eszközhívás naplózásra kerül az `mcp_tool_audit` a következővel:

- Eszköz neve, argumentumok, eredmény
- Időtartam (ms), siker/kudarc
- API kulcs hash, időbélyeg## Files

| Fájl                                         | Cél                                              |
| :------------------------------------------- | :----------------------------------------------- |
| `open-sse/mcp-server/server.ts`              | MCP szerver létrehozása + 16 eszköz regisztráció |
| `open-sse/mcp-server/transport.ts`           | Stdio + HTTP szállítás                           |
| `open-sse/mcp-server/auth.ts`                | API kulcs + hatókör érvényesítése                |
| `open-sse/mcp-server/audit.ts`               | Szerszámhívás ellenőrzési naplózás               |
| "open-sse/mcp-server/tools/advancedTools.ts" | 8 fejlett szerszámkezelő                         |
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
