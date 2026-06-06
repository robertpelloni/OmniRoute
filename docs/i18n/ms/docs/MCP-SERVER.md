# OmniRoute MCP Server Documentation (Bahasa Melayu)

<<<<<<< HEAD

---

> Model Context Protocol server with 16 intelligent tools

## Pasang

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

> Pelayan Protokol Konteks Model dengan 16 alat pintar## Pasang

OmniRoute MCP terbina dalam. Mulakan dengan:```bash
omniroute --mcp

````

Atau melalui pengangkutan terbuka:```bash
# HTTP streamable transport (port 20130)
omniroute --dev  # MCP auto-starts on /mcp endpoint
````

## IDE Configuration

Lihat [IDE Configs](integrations/ide-configs.md) untuk persediaan Antigraviti, Kursor, Copilot dan Claude Desktop.---

## Essential Tools (8)

| Alat                            | Penerangan                                        |
| :------------------------------ | :------------------------------------------------ | --------------------- |
| `omniroute_get_health`          | Kesihatan pintu masuk, pemutus litar, masa hidup  |
| `kombo_senarai_omniroute`       | Semua gabungan yang dikonfigurasikan dengan model |
| `omniroute_get_combo_metrics`   | Metrik prestasi untuk kombo khusus                |
| `combo_switch_omniroute`        | Tukar kombo aktif mengikut ID/nama                |
| `kuota_semak_omniroute`         | Status kuota setiap pembekal atau semua           |
| `permintaan_laluan_omniroute`   | Hantar penyelesaian sembang melalui OmniRoute     |
| `laporan_kos_omniroute`         | Analitis kos untuk tempoh masa                    |
| `omniroute_list_models_catalog` | Katalog model penuh dengan keupayaan              | ## Advanced Tools (8) |

| Alat                               | Penerangan                                                             |
| :--------------------------------- | :--------------------------------------------------------------------- | ----------------- |
| `omniroute_simulate_route`         | Simulasi penghalaan larian kering dengan pokok sandaran                |
| `omniroute_set_budget_guard`       | Belanjawan sesi dengan tindakan merendahkan/sekat/makluman             |
| `omniroute_set_resilience_profile` | Gunakan pratetap konservatif/seimbang/agresif                          |
| `omniroute_test_combo`             | Uji langsung semua model dalam kombo melalui permintaan huluan sebenar |
| `omniroute_get_provider_metrics`   | Metrik terperinci untuk satu pembekal                                  |
| `omniroute_best_combo_for_task`    | Pengesyoran kecergasan tugasan dengan alternatif                       |
| `omniroute_explain_route`          | Terangkan keputusan penghalaan yang lalu                               |
| `omniroute_get_session_snapshot`   | Keadaan sesi penuh: kos, token, ralat                                  | ## Authentication |

Alat MCP disahkan melalui skop kunci API. Setiap alat memerlukan skop khusus:

| Skop                 | Alatan                                           |
| :------------------- | :----------------------------------------------- | ---------------- |
| `baca:kesihatan`     | dapatkan_kesihatan, dapatkan_penyedia_metrik     |
| `baca:kombo`         | list_combos, get_combo_metrics                   |
| `tulis:kombo`        | suis_kombo                                       |
| `baca:kuota`         | semak_quota                                      |
| `tulis:laluan`       | route_request, simulate_route, test_combo        |
| `baca:penggunaan`    | cost_report, get_session_snapshot, explain_route |
| `tulis: konfigurasi` | set_budget_guard, set_resilience_profile         |
| `baca:model`         | list_models_catalog, best_combo_for_task         | ## Audit Logging |

Setiap panggilan alat dilog ke `mcp_tool_audit` dengan:

- Nama alat, hujah, hasil
- Tempoh (ms), kejayaan/kegagalan
- Cincang kunci API, cap masa## Files

| Fail                                         | Tujuan                                       |
| :------------------------------------------- | :------------------------------------------- |
| `open-sse/mcp-server/server.ts`              | Penciptaan pelayan MCP + 16 pendaftaran alat |
| `open-sse/mcp-server/transport.ts`           | Stdio + pengangkutan HTTP                    |
| `open-sse/mcp-server/auth.ts`                | Kunci API + pengesahan skop                  |
| `open-sse/mcp-server/audit.ts`               | Pengelogan audit panggilan alat              |
| `open-sse/mcp-server/tools/advancedTools.ts` | 8 pengendali alat canggih                    |
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
