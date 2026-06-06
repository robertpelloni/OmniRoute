# OmniRoute MCP Server Documentation (Suomi)

<<<<<<< HEAD

---

> Model Context Protocol server with 16 intelligent tools

<<<<<<< Updated upstream
## Asenna

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

> Mallikontekstiprotokollapalvelin 16 älykkäällä työkalulla## Asenna

OmniRoute MCP on sisäänrakennettu. Aloita se:```bash
omniroute --mcp

````

Tai open-sse-kuljetuksella:```bash
# HTTP streamable transport (port 20130)
omniroute --dev  # MCP auto-starts on /mcp endpoint
````

## IDE Configuration

Katso [IDE Configs](integrations/ide-configs.md) Antigravity-, Cursor-, Copilot- ja Claude Desktop -asetuksista.---

## Essential Tools (8)

| Työkalu                          | Kuvaus                                              |
| :------------------------------- | :-------------------------------------------------- | --------------------- |
| `omniroute_get_health`           | Yhdyskäytävän kunto, katkaisijat, käyttöaika        |
| `omniroute_list_combos`          | Kaikki konfiguroidut yhdistelmät malleilla          |
| `omniroute_get_combo_metrics`    | Tietyn yhdistelmän tehokkuustiedot                  |
| `omniroute_switch_combo`         | Vaihda aktiivinen yhdistelmä tunnuksen/nimen mukaan |
| `omniroute_check_quota`          | Kiintiön tila palveluntarjoajaa kohti tai kaikki    |
| `omniroute_route_request`        | Lähetä chat loppuun OmniRouten kautta               |
| `kaikkireitti_kustannusraportti` | Kustannusanalyysi ajanjaksolta                      |
| `omniroute_list_models_catalog`  | Täydellinen malliluettelo ominaisuuksilla           | ## Advanced Tools (8) |

| Työkalu                            | Kuvaus                                                                       |
| :--------------------------------- | :--------------------------------------------------------------------------- | ----------------- |
| `omniroute_simulate_route`         | Kuivakäynnistetty reitityssimulaatio varapuulla                              |
| `omniroute_set_budget_guard`       | Istuntobudjetti, jossa vähennys-/esto-/hälytystoiminnot                      |
| `omniroute_set_resilience_profile` | Käytä konservatiivista/tasapainoista/aggressiivista esiasetusta              |
| `omniroute_test_combo`             | Live-testaa kaikkia malleja yhdistelmänä todellisen ylävirran pyynnön kautta |
| `omniroute_get_provider_metrics`   | Yksityiskohtaiset tiedot yhdelle palveluntarjoajalle                         |
| `omniroute_best_combo_for_task`    | Task-fitness-suositus vaihtoehtoineen                                        |
| `omniroute_explain_route`          | Selitä aikaisempi reitityspäätös                                             |
| `omniroute_get_session_snapshot`   | Koko istunnon tila: kustannukset, tunnukset, virheet                         | ## Authentication |

MCP-työkalut todennetaan API-avaimen laajuuksien kautta. Jokainen työkalu vaatii tietyt laajuudet:

| Soveltamisala     | Työkalut                                         |
| :---------------- | :----------------------------------------------- | ---------------- |
| `lue:terveys`     | get_health, get_provider_metrics                 |
| `read:combos`     | list_combos, get_combo_metrics                   |
| `write:combos`    | switch_combo                                     |
| "lue:kiintiö"     | check_quota                                      |
| `kirjoita:reitti` | route_request, simulate_route, test_combo        |
| `read:usage`      | cost_report, get_session_snapshot, selitä_reitti |
| `write:config`    | set_budget_guard, set_resilience_profile         |
| `lue:mallit`      | list_models_catalog, best_combo_for_task         | ## Audit Logging |

Jokainen työkalukutsu kirjataan lokiin mcp_tool_audit-tiedostoon seuraavasti:

- Työkalun nimi, argumentit, tulos
- Kesto (ms), onnistuminen/epäonnistuminen
- API-avaimen hash, aikaleima## Files

| Tiedosto                                     | Tarkoitus                                          |
| :------------------------------------------- | :------------------------------------------------- |
| `open-sse/mcp-server/server.ts`              | MCP-palvelimen luominen + 16 työkalurekisteröintiä |
| `open-sse/mcp-server/transport.ts`           | Stdio + HTTP-kuljetus                              |
| `open-sse/mcp-server/auth.ts`                | API-avain + laajuuden vahvistus                    |
| `open-sse/mcp-server/audit.ts`               | Työkalukutsun tarkastuksen kirjaus                 |
| "open-sse/mcp-server/tools/advancedTools.ts" | 8 edistyksellistä työkalunkäsittelylaitetta        |
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
