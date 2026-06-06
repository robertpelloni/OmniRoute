# OmniRoute MCP Server Documentation (Español)

<<<<<<< HEAD

---

> Model Context Protocol server with 16 intelligent tools

## Instalar

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
=======
🌐 **Languages:** 🇺🇸 [English](../../../../docs/MCP-SERVER.md) · 🇪🇸 [es](../../es/docs/MCP-SERVER.md) · 🇫🇷 [fr](../../fr/docs/MCP-SERVER.md) · 🇩🇪 [de](../../de/docs/MCP-SERVER.md) · 🇮🇹 [it](../../it/docs/MCP-SERVER.md) · 🇷🇺 [ru](../../ru/docs/MCP-SERVER.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/MCP-SERVER.md) · 🇯🇵 [ja](../../ja/docs/MCP-SERVER.md) · 🇰🇷 [ko](../../ko/docs/MCP-SERVER.md) · 🇸🇦 [ar](../../ar/docs/MCP-SERVER.md) · 🇮🇳 [hi](../../hi/docs/MCP-SERVER.md) · 🇮🇳 [in](../../in/docs/MCP-SERVER.md) · 🇹🇭 [th](../../th/docs/MCP-SERVER.md) · 🇻🇳 [vi](../../vi/docs/MCP-SERVER.md) · 🇮🇩 [id](../../id/docs/MCP-SERVER.md) · 🇲🇾 [ms](../../ms/docs/MCP-SERVER.md) · 🇳🇱 [nl](../../nl/docs/MCP-SERVER.md) · 🇵🇱 [pl](../../pl/docs/MCP-SERVER.md) · 🇸🇪 [sv](../../sv/docs/MCP-SERVER.md) · 🇳🇴 [no](../../no/docs/MCP-SERVER.md) · 🇩🇰 [da](../../da/docs/MCP-SERVER.md) · 🇫🇮 [fi](../../fi/docs/MCP-SERVER.md) · 🇵🇹 [pt](../../pt/docs/MCP-SERVER.md) · 🇷🇴 [ro](../../ro/docs/MCP-SERVER.md) · 🇭🇺 [hu](../../hu/docs/MCP-SERVER.md) · 🇧🇬 [bg](../../bg/docs/MCP-SERVER.md) · 🇸🇰 [sk](../../sk/docs/MCP-SERVER.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/MCP-SERVER.md) · 🇮🇱 [he](../../he/docs/MCP-SERVER.md) · 🇵🇭 [phi](../../phi/docs/MCP-SERVER.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/MCP-SERVER.md) · 🇨🇿 [cs](../../cs/docs/MCP-SERVER.md) · 🇹🇷 [tr](../../tr/docs/MCP-SERVER.md)

---

> Servidor Model Context Protocol con 16 herramientas inteligentes## Instalar

OmniRoute MCP está integrado. Empiece con:```bash
omniroute --mcp

````

O mediante el transporte abierto:```bash
# HTTP streamable transport (port 20130)
omniroute --dev  # MCP auto-starts on /mcp endpoint
````

## IDE Configuration

Consulte [Configuraciones IDE](integrations/ide-configs.md) para la configuración de Antigravity, Cursor, Copilot y Claude Desktop.---

## Essential Tools (8)

| Herramienta                     | Descripción                                                     |
| :------------------------------ | :-------------------------------------------------------------- | --------------------- |
| `omniroute_get_health`          | Estado de la puerta de enlace, disyuntores, tiempo de actividad |
| `omniroute_list_combos`         | Todos los combos configurados con modelos                       |
| `omniroute_get_combo_metrics`   | Métricas de rendimiento para un combo específico                |
| `omniroute_switch_combo`        | Cambiar combo activo por ID/nombre                              |
| `omniroute_check_quota`         | Estado de cuota por proveedor o todos                           |
| `omniroute_route_request`       | Enviar una finalización de chat a través de OmniRoute           |
| `omniroute_cost_report`         | Análisis de costos para un período de tiempo                    |
| `omniroute_list_models_catalog` | Catálogo de modelos completo con capacidades                    | ## Advanced Tools (8) |

| Herramienta                        | Descripción                                                                 |
| :--------------------------------- | :-------------------------------------------------------------------------- | ----------------- |
| `omniroute_simulate_route`         | Simulación de enrutamiento en seco con árbol de respaldo                    |
| `omniroute_set_budget_guard`       | Presupuesto de sesión con acciones de degradación/bloqueo/alerta            |
| `omniroute_set_resilience_profile` | Aplicar preajuste conservador/equilibrado/agresivo                          |
| `omniroute_test_combo`             | Pruebe en vivo todos los modelos en un combo a través de una solicitud real |
| `omniroute_get_provider_metrics`   | Métricas detalladas para un proveedor                                       |
| `omniroute_best_combo_for_task`    | Recomendación de aptitud para tareas con alternativas                       |
| `omniroute_explain_route`          | Explicar una decisión de enrutamiento pasada                                |
| `omniroute_get_session_snapshot`   | Estado completo de la sesión: costos, tokens, errores                       | ## Authentication |

Las herramientas MCP se autentican mediante alcances de clave API. Cada herramienta requiere alcances específicos:

| Alcance           | Herramientas                                             |
| :---------------- | :------------------------------------------------------- | ---------------- |
| `leer:salud`      | get_health, get_provider_metrics                         |
| `leer:combos`     | list_combos, get_combo_metrics                           |
| `escribir:combos` | interruptor_combo                                        |
| `leer:cuota`      | check_quota                                              |
| `escribir: ruta`  | solicitud_ruta, ruta_simulada, combinación_prueba        |
| `leer: uso`       | informe_coste, obtener_instantánea_sesión, explicar_ruta |
| `escribir:config` | set_budget_guard, set_resilience_profile                 |
| `leer:modelos`    | list_models_catalog, mejor_combo_para_tarea              | ## Audit Logging |

Cada llamada a la herramienta se registra en `mcp_tool_audit` con:

- Nombre de la herramienta, argumentos, resultado.
- Duración (ms), éxito/fracaso
- Hash de clave API, marca de tiempo## Files
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

| File                                         | Purpose                                     |
| :------------------------------------------- | :------------------------------------------ |
| `open-sse/mcp-server/server.ts`              | MCP server creation + 16 tool registrations |
| `open-sse/mcp-server/transport.ts`           | Stdio + HTTP transport                      |
| `open-sse/mcp-server/auth.ts`                | API key + scope validation                  |
| `open-sse/mcp-server/audit.ts`               | Tool call audit logging                     |
| `open-sse/mcp-server/tools/advancedTools.ts` | 8 advanced tool handlers                    |
