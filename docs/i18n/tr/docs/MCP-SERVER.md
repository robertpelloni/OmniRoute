<<<<<<< HEAD
<<<<<<<< Updated upstream:docs/i18n/tr/docs/MCP-SERVER.md
# OmniRoute MCP Server Documentation (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/MCP-SERVER.md) · 🇸🇦 [ar](../../ar/docs/MCP-SERVER.md) · 🇧🇬 [bg](../../bg/docs/MCP-SERVER.md) · 🇧🇩 [bn](../../bn/docs/MCP-SERVER.md) · 🇨🇿 [cs](../../cs/docs/MCP-SERVER.md) · 🇩🇰 [da](../../da/docs/MCP-SERVER.md) · 🇩🇪 [de](../../de/docs/MCP-SERVER.md) · 🇪🇸 [es](../../es/docs/MCP-SERVER.md) · 🇮🇷 [fa](../../fa/docs/MCP-SERVER.md) · 🇫🇮 [fi](../../fi/docs/MCP-SERVER.md) · 🇫🇷 [fr](../../fr/docs/MCP-SERVER.md) · 🇮🇳 [gu](../../gu/docs/MCP-SERVER.md) · 🇮🇱 [he](../../he/docs/MCP-SERVER.md) · 🇮🇳 [hi](../../hi/docs/MCP-SERVER.md) · 🇭🇺 [hu](../../hu/docs/MCP-SERVER.md) · 🇮🇩 [id](../../id/docs/MCP-SERVER.md) · 🇮🇹 [it](../../it/docs/MCP-SERVER.md) · 🇯🇵 [ja](../../ja/docs/MCP-SERVER.md) · 🇰🇷 [ko](../../ko/docs/MCP-SERVER.md) · 🇮🇳 [mr](../../mr/docs/MCP-SERVER.md) · 🇲🇾 [ms](../../ms/docs/MCP-SERVER.md) · 🇳🇱 [nl](../../nl/docs/MCP-SERVER.md) · 🇳🇴 [no](../../no/docs/MCP-SERVER.md) · 🇵🇭 [phi](../../phi/docs/MCP-SERVER.md) · 🇵🇱 [pl](../../pl/docs/MCP-SERVER.md) · 🇵🇹 [pt](../../pt/docs/MCP-SERVER.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/MCP-SERVER.md) · 🇷🇴 [ro](../../ro/docs/MCP-SERVER.md) · 🇷🇺 [ru](../../ru/docs/MCP-SERVER.md) · 🇸🇰 [sk](../../sk/docs/MCP-SERVER.md) · 🇸🇪 [sv](../../sv/docs/MCP-SERVER.md) · 🇰🇪 [sw](../../sw/docs/MCP-SERVER.md) · 🇮🇳 [ta](../../ta/docs/MCP-SERVER.md) · 🇮🇳 [te](../../te/docs/MCP-SERVER.md) · 🇹🇭 [th](../../th/docs/MCP-SERVER.md) · 🇹🇷 [tr](../../tr/docs/MCP-SERVER.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/MCP-SERVER.md) · 🇵🇰 [ur](../../ur/docs/MCP-SERVER.md) · 🇻🇳 [vi](../../vi/docs/MCP-SERVER.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/MCP-SERVER.md)
========
# OmniRoute MCP Server Documentation (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/MCP-SERVER.md) · 🇪🇸 [es](../../es/docs/MCP-SERVER.md) · 🇫🇷 [fr](../../fr/docs/MCP-SERVER.md) · 🇩🇪 [de](../../de/docs/MCP-SERVER.md) · 🇮🇹 [it](../../it/docs/MCP-SERVER.md) · 🇷🇺 [ru](../../ru/docs/MCP-SERVER.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/MCP-SERVER.md) · 🇯🇵 [ja](../../ja/docs/MCP-SERVER.md) · 🇰🇷 [ko](../../ko/docs/MCP-SERVER.md) · 🇸🇦 [ar](../../ar/docs/MCP-SERVER.md) · 🇮🇳 [in](../../in/docs/MCP-SERVER.md) · 🇹🇭 [th](../../th/docs/MCP-SERVER.md) · 🇻🇳 [vi](../../vi/docs/MCP-SERVER.md) · 🇮🇩 [id](../../id/docs/MCP-SERVER.md) · 🇲🇾 [ms](../../ms/docs/MCP-SERVER.md) · 🇳🇱 [nl](../../nl/docs/MCP-SERVER.md) · 🇵🇱 [pl](../../pl/docs/MCP-SERVER.md) · 🇸🇪 [sv](../../sv/docs/MCP-SERVER.md) · 🇳🇴 [no](../../no/docs/MCP-SERVER.md) · 🇩🇰 [da](../../da/docs/MCP-SERVER.md) · 🇫🇮 [fi](../../fi/docs/MCP-SERVER.md) · 🇵🇹 [pt](../../pt/docs/MCP-SERVER.md) · 🇷🇴 [ro](../../ro/docs/MCP-SERVER.md) · 🇭🇺 [hu](../../hu/docs/MCP-SERVER.md) · 🇧🇬 [bg](../../bg/docs/MCP-SERVER.md) · 🇸🇰 [sk](../../sk/docs/MCP-SERVER.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/MCP-SERVER.md) · 🇮🇱 [he](../../he/docs/MCP-SERVER.md) · 🇵🇭 [phi](../../phi/docs/MCP-SERVER.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/MCP-SERVER.md) · 🇨🇿 [cs](../../cs/docs/MCP-SERVER.md)
>>>>>>>> Stashed changes:docs/i18n/fi/docs/MCP-SERVER.md

---

> Model Context Protocol server with 16 intelligent tools

<<<<<<<< Updated upstream:docs/i18n/tr/docs/MCP-SERVER.md
## Kurulum
========
## Asenna
>>>>>>>> Stashed changes:docs/i18n/fi/docs/MCP-SERVER.md

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
# OmniRoute MCP Server Documentation (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/MCP-SERVER.md) · 🇪🇸 [es](../../es/docs/MCP-SERVER.md) · 🇫🇷 [fr](../../fr/docs/MCP-SERVER.md) · 🇩🇪 [de](../../de/docs/MCP-SERVER.md) · 🇮🇹 [it](../../it/docs/MCP-SERVER.md) · 🇷🇺 [ru](../../ru/docs/MCP-SERVER.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/MCP-SERVER.md) · 🇯🇵 [ja](../../ja/docs/MCP-SERVER.md) · 🇰🇷 [ko](../../ko/docs/MCP-SERVER.md) · 🇸🇦 [ar](../../ar/docs/MCP-SERVER.md) · 🇮🇳 [hi](../../hi/docs/MCP-SERVER.md) · 🇮🇳 [in](../../in/docs/MCP-SERVER.md) · 🇹🇭 [th](../../th/docs/MCP-SERVER.md) · 🇻🇳 [vi](../../vi/docs/MCP-SERVER.md) · 🇮🇩 [id](../../id/docs/MCP-SERVER.md) · 🇲🇾 [ms](../../ms/docs/MCP-SERVER.md) · 🇳🇱 [nl](../../nl/docs/MCP-SERVER.md) · 🇵🇱 [pl](../../pl/docs/MCP-SERVER.md) · 🇸🇪 [sv](../../sv/docs/MCP-SERVER.md) · 🇳🇴 [no](../../no/docs/MCP-SERVER.md) · 🇩🇰 [da](../../da/docs/MCP-SERVER.md) · 🇫🇮 [fi](../../fi/docs/MCP-SERVER.md) · 🇵🇹 [pt](../../pt/docs/MCP-SERVER.md) · 🇷🇴 [ro](../../ro/docs/MCP-SERVER.md) · 🇭🇺 [hu](../../hu/docs/MCP-SERVER.md) · 🇧🇬 [bg](../../bg/docs/MCP-SERVER.md) · 🇸🇰 [sk](../../sk/docs/MCP-SERVER.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/MCP-SERVER.md) · 🇮🇱 [he](../../he/docs/MCP-SERVER.md) · 🇵🇭 [phi](../../phi/docs/MCP-SERVER.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/MCP-SERVER.md) · 🇨🇿 [cs](../../cs/docs/MCP-SERVER.md) · 🇹🇷 [tr](../../tr/docs/MCP-SERVER.md)

---

> 16 akıllı araca sahip Model Bağlam Protokolü sunucusu## Kurulum

OmniRoute MCP yerleşiktir. Şununla başlayın:```bash
omniroute --mcp

````

Veya open-sse aktarımı yoluyla:```bash
# HTTP streamable transport (port 20130)
omniroute --dev  # MCP auto-starts on /mcp endpoint
````

## IDE Configuration

Antigravity, Cursor, Copilot ve Claude Masaüstü kurulumu için [IDE Configs](integrations/ide-configs.md) konusuna bakın.---

## Essential Tools (8)

| Araç                            | Açıklama                                                    |
| :------------------------------ | :---------------------------------------------------------- | --------------------- |
| 'omniroute_get_health'          | Ağ geçidi sağlığı, devre kesiciler, çalışma süresi          |
| `omniroute_list_combos`         | Modellerle birlikte tüm yapılandırılmış kombinasyonlar      |
| `omniroute_get_combo_metrics`   | Belirli bir kombinasyon için performans ölçümleri           |
| `omniroute_switch_combo`        | Etkin komboyu kimliğe/ada göre değiştirin                   |
| `omniroute_check_quota`         | Sağlayıcı başına veya tümüne göre kota durumu               |
| 'omniroute_route_request'       | OmniRoute aracılığıyla bir sohbet tamamlama mesajı gönderin |
| 'omniroute_cost_report'         | Bir dönem için maliyet analizi                              |
| `omniroute_list_models_catalog` | Yeteneklere sahip tam model kataloğu                        | ## Advanced Tools (8) |

| Araç                               | Açıklama                                                                           |
| :--------------------------------- | :--------------------------------------------------------------------------------- | ----------------- |
| `omniroute_simulate_route`         | Geri dönüş ağacıyla deneme amaçlı yönlendirme simülasyonu                          |
| `omniroute_set_budget_guard`       | Düşürme/engelleme/uyarı eylemleriyle oturum bütçesi                                |
| `omniroute_set_resilience_profile` | Muhafazakar/dengeli/agresif ön ayarı uygulayın                                     |
| 'omniroute_test_combo'             | Gerçek bir yukarı akış isteği aracılığıyla tüm modelleri bir arada canlı test edin |
| `omniroute_get_provider_metrics`   | Bir sağlayıcı için ayrıntılı ölçümler                                              |
| `omniroute_best_combo_for_task`    | Alternatiflerle göreve uygunluk önerisi                                            |
| 'omniroute_explain_route'          | Geçmişteki bir yönlendirme kararını açıklayın                                      |
| `omniroute_get_session_snapshot`   | Tam oturum durumu: maliyetler, jetonlar, hatalar                                   | ## Authentication |

MCP araçlarının kimlik doğrulaması API anahtar kapsamları aracılığıyla yapılır. Her araç belirli kapsamlar gerektirir:

| Kapsam               | Araçlar                                           |
| :------------------- | :------------------------------------------------ | ---------------- |
| 'oku:sağlık'         | get_health, get_provider_metrics                  |
| `oku:kombinasyonlar` | list_combos, get_combo_metrics                    |
| `yaz:kombinasyonlar` | switch_combo                                      |
| 'okuma:kota'         | check_quota                                       |
| 'yaz:rota'           | rota_isteği, simüle_rota, test_combo              |
| 'okuma:kullanım'     | maliyet_raporu, get_session_snapshot, açıkla_rota |
| 'yaz:yapılandırma'   | set_budget_guard, set_resilience_profile          |
| 'oku:modeller'       | list_models_catalog, best_combo_for_task          | ## Audit Logging |

Her araç çağrısı şu şekilde "mcp_tool_audit"e kaydedilir:

- Araç adı, argümanlar, sonuç
- Süre (ms), başarı/başarısızlık
- API anahtarı karması, zaman damgası## Files

| Dosya                                        | Amaç                                   |
| :------------------------------------------- | :------------------------------------- |
| 'open-sse/mcp-server/server.ts'              | MCP sunucusu oluşturma + 16 araç kaydı |
| 'open-sse/mcp-server/transport.ts'           | Stdio + HTTP aktarımı                  |
| 'open-sse/mcp-server/auth.ts'                | API anahtarı + kapsam doğrulama        |
| 'open-sse/mcp-server/audit.ts'               | Araç çağrısı denetim günlüğü           |
| 'open-sse/mcp-server/tools/advancedTools.ts' | 8 gelişmiş takım tutucu                |
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
