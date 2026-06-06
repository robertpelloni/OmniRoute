# OmniRoute MCP Server Documentation (العربية)

<<<<<<< HEAD

---

> Model Context Protocol server with 16 intelligent tools

## تثبيت

OmniRoute MCP is built-in. Start it with:

```bash
omniroute --mcp
```

Or via the open-sse transport:

```bash
# HTTP streamable transport (port 20130)
omniroute --dev  # MCP auto-starts on /mcp endpoint
=======
🌐 **Languages:** 🇺🇸 [English](../../../../docs/MCP-SERVER.md) · 🇪🇸 [es](../../es/docs/MCP-SERVER.md) · 🇫🇷 [fr](../../fr/docs/MCP-SERVER.md) · 🇩🇪 [de](../../de/docs/MCP-SERVER.md) · 🇮🇹 [it](../../it/docs/MCP-SERVER.md) · 🇷🇺 [ru](../../ru/docs/MCP-SERVER.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/MCP-SERVER.md) · 🇯🇵 [ja](../../ja/docs/MCP-SERVER.md) · 🇰🇷 [ko](../../ko/docs/MCP-SERVER.md) · 🇸🇦 [ar](../../ar/docs/MCP-SERVER.md) · 🇮🇳 [hi](../../hi/docs/MCP-SERVER.md) · 🇮🇳 [in](../../in/docs/MCP-SERVER.md) · 🇹🇭 [th](../../th/docs/MCP-SERVER.md) · 🇻🇳 [vi](../../vi/docs/MCP-SERVER.md) · 🇮🇩 [id](../../id/docs/MCP-SERVER.md) · 🇲🇾 [ms](../../ms/docs/MCP-SERVER.md) · 🇳🇱 [nl](../../nl/docs/MCP-SERVER.md) · 🇵🇱 [pl](../../pl/docs/MCP-SERVER.md) · 🇸🇪 [sv](../../sv/docs/MCP-SERVER.md) · 🇳🇴 [no](../../no/docs/MCP-SERVER.md) · 🇩🇰 [da](../../da/docs/MCP-SERVER.md) · 🇫🇮 [fi](../../fi/docs/MCP-SERVER.md) · 🇵🇹 [pt](../../pt/docs/MCP-SERVER.md) · 🇷🇴 [ro](../../ro/docs/MCP-SERVER.md) · 🇭🇺 [hu](../../hu/docs/MCP-SERVER.md) · 🇧🇬 [bg](../../bg/docs/MCP-SERVER.md) · 🇸🇰 [sk](../../sk/docs/MCP-SERVER.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/MCP-SERVER.md) · 🇮🇱 [he](../../he/docs/MCP-SERVER.md) · 🇵🇭 [phi](../../phi/docs/MCP-SERVER.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/MCP-SERVER.md) · 🇨🇿 [cs](../../cs/docs/MCP-SERVER.md) · 🇹🇷 [tr](../../tr/docs/MCP-SERVER.md)

---

> المدرسة التمهيدية النموذجية المزود بـ 16 أداة ذكية## تثبيت

OmniRoute MCP المدمج. ابدأ بـ:`bash
الطريق الشامل --mcp`

أو عبر النقل المفتوح:```bash

# HTTP streamable transport (port 20130)

omniroute --dev # MCP auto-starts on /mcp endpoint

>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
```

## IDE Configuration

<<<<<<< HEAD
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
مراجعة تكوينات IDE](integrations/ide-configs.md) التوجه إلى إعداد Antigravity وCursor وCopilot وClaude Desktop.---## Essential Tools (8)

| أداة | الوصف |
| :------------------------------ | :--------------------------------------- |
| `omniroute_get_health` | صحة البوابة، قواطع الضوء، الجهوزية |
| `omniroute_list_combos` | جميع المجموعات التي تم اختيارها مع الارتباطات |
| `omniroute_get_combo_metrics` | مقاييس محددة |
| `omniroute_switch_combo` | تعديل التحرير والسرد فقط حسب المعرف/الاسم |
| `omniroute_check_quota` | حالة الحصة لكل ما يتعلق أو الكل |
| `omniroute_route_request` | استكمال الدردشة من خلال OmniRoute |
| `تقرير رحلة_الطريق الشامل` | تحليلات التكلفة لوقت طويل |
| `omniroute_list_models_catalog` | كتالوج نموذجي كامل مع رموزيات |## أدوات متقدمة (8)

| أداة | الوصف |
| :--------------------------------- | :---------------------------------------------------------- |
| `omniroute_simulate_route` | المحاكاة الجافة باستخدام الشجرة التقليدية |
| `omniroute_set_budget_guard` | ضبط إجراءات مع التخفيض/الحظر/التنبيه |
| `omniroute_set_resilience_profile` | التقدم نحو التقدم/المتوازن/العدواني |
| `omniroute_test_combo` | تم اختباره بشكل مباشر لجميع الاتجاهات في مجموعة من خلال طلب حقيقي للمنبع |
| `omniroute_get_provider_metrics` | معايير محددة لمزود واحد |
| `omniroute_best_combo_for_task` | وصفة بملاءة المهام مع البدائل |
| `omniroute_explain_route` | شرح الوضع السابق |
| `omniroute_get_session_snapshot` | ملحوظة: التكاليف والرموز والأخطاء |## Authentication

تم مصادقة أدوات MCP عبر نطاقات المفاتيح API. متطلبات كل أدوات النطاقات المحددة:

| النطاق | أدوات |
| :------------- | :----------------------------------------------- |
| `اقرأ:الصحة` | get_health، get_provider_metrics |
| `اقرأ: المجموعات` | list_combos، get_combo_metrics |
| `اكتب: المجموعات` | Switch_combo |
| `اقرأ: الحصة` | check_quota |
| `اكتب: الطريق` | طلب_الطريق، محاكاة_الطريق، اختبار_كومبو |
| `قراءة:استخدام` | إقرار التكلفة، الحصول على لقطة_الجلسة، شرح_الطريق |
| `الكتابة: إستبدل` | set_budget_guard، set_resilience_profile |
| `اقرأ:النماذج` | list_models_catalog، best_combo_for_task |## تسجيل التدقيق

يتم تسجيل كل الاتصال للأداة في `mcp_tool_audit` باستخدام:

- اسم الأداة، والوسائط، والنتيجة
- المدة (مللي ثانية)، النجاح/الفشل
- تجزئة مفتاح API، الأثر العمري## Files

| ملف | الحصاد |
| :------------------------------------------- | :------------------------------------------ |
| `open-sse/mcp-server/server.ts` | إنشاء خادم MCP + تسجيل 16 أداة |
| `open-sse/mcp-server/transport.ts` | نقل Stdio + HTTP |
| `open-sse/mcp-server/auth.ts` | مفتاح API + التحقق من صحة النطاق |
| `open-sse/mcp-server/audit.ts` | تسجيل تدقيق الاتصال بالأداة |
| `open-sse/mcp-server/tools/advancedTools.ts` | 8 معالجات وأدوات متقدمة |
```
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
