# OmniRoute MCP Server Documentation (Italiano)

<<<<<<< HEAD

---

> Model Context Protocol server with 16 intelligent tools

## Installare

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

> Server Model Context Protocol con 16 strumenti intelligenti## Installare

OmniRoute MCP è integrato. Inizia con:```bash
omniroute --mcp

````

Oppure tramite il trasporto open-sse:```bash
# HTTP streamable transport (port 20130)
omniroute --dev  # MCP auto-starts on /mcp endpoint
````

## IDE Configuration

Consulta [Configurazioni IDE](integrations/ide-configs.md) per la configurazione di Antigravity, Cursor, Copilot e Claude Desktop.---

## Essential Tools (8)

| Strumento                       | Descrizione                                                   |
| :------------------------------ | :------------------------------------------------------------ | --------------------- |
| `omniroute_get_health`          | Stato del gateway, interruttori automatici, tempo di attività |
| `omniroute_list_combos`         | Tutte le combo configurate con i modelli                      |
| `omniroute_get_combo_metrics`   | Metriche delle prestazioni per una combinazione specifica     |
| `omniroute_switch_combo`        | Cambia la combo attiva per ID/nome                            |
| `omniroute_check_quota`         | Stato della quota per fornitore o tutti                       |
| `omniroute_route_request`       | Invia il completamento della chat tramite OmniRoute           |
| `report_costi_omniroute`        | Analisi dei costi per un periodo di tempo                     |
| `omniroute_list_models_catalog` | Catalogo completo dei modelli con funzionalità                | ## Advanced Tools (8) |

| Strumento                          | Descrizione                                                                        |
| :--------------------------------- | :--------------------------------------------------------------------------------- | ----------------- |
| `omniroute_simulate_route`         | Simulazione del routing a secco con albero di fallback                             |
| `omniroute_set_budget_guard`       | Budget della sessione con azioni di peggioramento/blocco/avviso                    |
| `omniroute_set_resilience_profile` | Applicare il preset conservativo/bilanciato/aggressivo                             |
| `omniroute_test_combo`             | Testare dal vivo tutti i modelli in una combo tramite una richiesta upstream reale |
| `omniroute_get_provider_metrics`   | Metriche dettagliate per un fornitore                                              |
| `omniroute_best_combo_for_task`    | Raccomandazione sull'idoneità al compito con alternative                           |
| `omniroute_explain_route`          | Spiegare una decisione di routing passata                                          |
| `omniroute_get_session_snapshot`   | Stato sessione completa: costi, token, errori                                      | ## Authentication |

Gli strumenti MCP vengono autenticati tramite gli ambiti della chiave API. Ciascuno strumento richiede ambiti specifici:

| Ambito            | Strumenti                                      |
| :---------------- | :--------------------------------------------- | ---------------- |
| `leggi:salute`    | get_health, get_provider_metrics               |
| `leggi:combo`     | list_combos, get_combo_metrics                 |
| `scrivi:combo`    | interruttore_combo                             |
| `leggi:quota`     | controlla_quota                                |
| `scrivi:percorso` | route_request, simula_route, test_combo        |
| `leggi:utilizzo`  | cost_report, get_session_snapshot, aware_route |
| `scrivi:config`   | set_budget_guard, set_resilience_profile       |
| `leggi:modelli`   | list_models_catalog, best_combo_for_task       | ## Audit Logging |

Ogni chiamata allo strumento viene registrata su `mcp_tool_audit` con:

- Nome dello strumento, argomenti, risultato
- Durata (ms), successo/fallimento
- Hash della chiave API, timestamp## Files

| File                                         | Scopo                                                     |
| :------------------------------------------- | :-------------------------------------------------------- |
| `open-sse/mcp-server/server.ts`              | Creazione server MCP + 16 registrazioni di strumenti      |
| `open-sse/mcp-server/transport.ts`           | Stdio + trasporto HTTP                                    |
| `open-sse/mcp-server/auth.ts`                | Chiave API + convalida dell'ambito                        |
| `open-sse/mcp-server/audit.ts`               | Registrazione di controllo delle chiamate dello strumento |
| `open-sse/mcp-server/tools/advancedTools.ts` | 8 gestori di utensili avanzati                            |
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
