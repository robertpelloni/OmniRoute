# OmniRoute A2A Server Documentation (العربية)

<<<<<<< HEAD

---

> Agent-to-Agent Protocol v0.3 — OmniRoute as an intelligent routing agent

## Agent Discovery

```bash
curl http://localhost:20128/.well-known/agent.json
```

Returns the Agent Card describing OmniRoute's capabilities, skills, and authentication requirements.

---

## Authentication

All `/a2a` requests require an API key via the `Authorization` header:

```
Authorization: Bearer YOUR_OMNIROUTE_API_KEY
```

If no API key is configured on the server, authentication is bypassed.

---
=======
🌐 **Languages:** 🇺🇸 [English](../../../../docs/A2A-SERVER.md) · 🇪🇸 [es](../../es/docs/A2A-SERVER.md) · 🇫🇷 [fr](../../fr/docs/A2A-SERVER.md) · 🇩🇪 [de](../../de/docs/A2A-SERVER.md) · 🇮🇹 [it](../../it/docs/A2A-SERVER.md) · 🇷🇺 [ru](../../ru/docs/A2A-SERVER.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/A2A-SERVER.md) · 🇯🇵 [ja](../../ja/docs/A2A-SERVER.md) · 🇰🇷 [ko](../../ko/docs/A2A-SERVER.md) · 🇸🇦 [ar](../../ar/docs/A2A-SERVER.md) · 🇮🇳 [hi](../../hi/docs/A2A-SERVER.md) · 🇮🇳 [in](../../in/docs/A2A-SERVER.md) · 🇹🇭 [th](../../th/docs/A2A-SERVER.md) · 🇻🇳 [vi](../../vi/docs/A2A-SERVER.md) · 🇮🇩 [id](../../id/docs/A2A-SERVER.md) · 🇲🇾 [ms](../../ms/docs/A2A-SERVER.md) · 🇳🇱 [nl](../../nl/docs/A2A-SERVER.md) · 🇵🇱 [pl](../../pl/docs/A2A-SERVER.md) · 🇸🇪 [sv](../../sv/docs/A2A-SERVER.md) · 🇳🇴 [no](../../no/docs/A2A-SERVER.md) · 🇩🇰 [da](../../da/docs/A2A-SERVER.md) · 🇫🇮 [fi](../../fi/docs/A2A-SERVER.md) · 🇵🇹 [pt](../../pt/docs/A2A-SERVER.md) · 🇷🇴 [ro](../../ro/docs/A2A-SERVER.md) · 🇭🇺 [hu](../../hu/docs/A2A-SERVER.md) · 🇧🇬 [bg](../../bg/docs/A2A-SERVER.md) · 🇸🇰 [sk](../../sk/docs/A2A-SERVER.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/A2A-SERVER.md) · 🇮🇱 [he](../../he/docs/A2A-SERVER.md) · 🇵🇭 [phi](../../phi/docs/A2A-SERVER.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/A2A-SERVER.md) · 🇨🇿 [cs](../../cs/docs/A2A-SERVER.md) · 🇹🇷 [tr](../../tr/docs/A2A-SERVER.md)

---

> بروتوكول وكيل إلى وكيل v0.3 — OmniRoute كوكيل توجيه ذكي## Agent Discovery```bash
> curl http://localhost:20128/.well-known/agent.json

````

إرجاع بطاقة الوكيل التي تصف قدرات OmniRoute ومهاراتها ومتطلبات المصادقة.---## Authentication

تتطلب جميع الطلبات `/a2a` مفتاح برمجة التطبيقات عبر رأس `الإعلان`:```
التفويض: الحامل YOUR_OMNIROUTE_API_KEY```

إذا لم يتم تكوين أي مفتاح API على الخادم، فسيتم تجاوز المصادقة.---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## JSON-RPC 2.0 Methods

### `message/send` — Synchronous Execution

<<<<<<< HEAD
Sends a message to a skill and waits for the complete response.

```bash
=======
يرسل رسالة إلى المهارة وينتظر الرد الكامل.```bash
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
curl -X POST http://localhost:20128/a2a \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_KEY" \
  -d '{
    "jsonrpc": "2.0",
    "id": "1",
    "method": "message/send",
    "params": {
      "skill": "smart-routing",
      "messages": [{"role": "user", "content": "Write a hello world in Python"}],
      "metadata": {"model": "auto", "combo": "fast-coding"}
    }
  }'
<<<<<<< HEAD
```

**Response:**

```json
{
  "jsonrpc": "2.0",
  "id": "1",
  "result": {
    "task": { "id": "uuid", "state": "completed" },
    "artifacts": [{ "type": "text", "content": "..." }],
    "metadata": {
      "routing_explanation": "Selected claude-sonnet via provider \"anthropic\" (latency: 1200ms, cost: $0.003)",
      "cost_envelope": { "estimated": 0.005, "actual": 0.003, "currency": "USD" },
      "resilience_trace": [
        { "event": "primary_selected", "provider": "anthropic", "timestamp": "..." }
      ],
      "policy_verdict": { "allowed": true, "reason": "within budget and quota limits" }
    }
  }
}
```

### `message/stream` — SSE Streaming

Same as `message/send` but returns Server-Sent Events for real-time streaming.

```bash
curl -N -X POST http://localhost:20128/a2a \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_KEY" \
  -d '{
    "jsonrpc": "2.0",
    "id": "1",
    "method": "message/stream",
    "params": {
      "skill": "smart-routing",
      "messages": [{"role": "user", "content": "Explain quantum computing"}]
    }
  }'
```

**SSE Events:**

```
data: {"jsonrpc":"2.0","method":"message/stream","params":{"task":{"id":"...","state":"working"},"chunk":{"type":"text","content":"..."}}}

: heartbeat 2026-03-03T17:00:00Z

data: {"jsonrpc":"2.0","method":"message/stream","params":{"task":{"id":"...","state":"completed"},"metadata":{...}}}
```
=======
````

**إجابة:**`json
{
  "jsonrpc": "2.0",
  "المعرف": "1"،
  "النتيجة": {
    "المهمة": { "المعرف": "uuid"، "الحالة": "مكتمل" }،
    "المصنوعات": [{ "النوع": "نص"، "محتوى": "..." }]،
    "البيانات الوصفية": {
      "routing_explanation": "سونيتة claude مختارة عبر الموفر \"anthropic\" (زمن الوصول: 1200 مللي ثانية، التكلفة: 0.003 USD)"،
      "cost_envelope": { "المقدرة": 0.005، "الفعلي": 0.003، "العملة": "USD" }،
      ""resilience_trace": [
        { "الحدث": "primary_selected"، "provider": "anthropic"، "timestamp": "..." }
      ]،
      "policy_verdict": { "مسموح": صحيح، "السبب": "ضمن حدود الميزانية والحصة" }
    }
  }
}`

### `message/stream` — SSE Streaming

نفس `الرسالة/الإرسال` ولكنها تُرجع الأحداث المرسلة من الخادم للبث في الوقت الفعلي.```bash
curl -N -X POST http://localhost:20128/a2a \
 -H "Content-Type: application/json" \
 -H "Authorization: Bearer YOUR_KEY" \
 -d '{
"jsonrpc": "2.0",
"id": "1",
"method": "message/stream",
"params": {
"skill": "smart-routing",
"messages": [{"role": "user", "content": "Explain quantum computing"}]
}
}'

````

**أحداث SSE:**```
البيانات: {"jsonrpc": "2.0"، "method": "message/stream"، "params": {"task": {"id": "..."، "state": "working"}، "chunk": {"type": "text"، "content": "..."}}}

: نبضات القلب 2026-03-03T17:00:00Z

البيانات: {"jsonrpc": "2.0"، "method": "message/stream"، "params": {"task": {"id": "..."، "state": "Completed"}، "بيانات التعريف": {...}}}```
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### `tasks/get` — Query Task Status

```bash
<<<<<<< HEAD
curl -X POST http://localhost:20128/a2a \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_KEY" \
  -d '{"jsonrpc":"2.0","id":"2","method":"tasks/get","params":{"taskId":"TASK_UUID"}}'
```
=======
حليقة -X POST http://localhost:20128/a2a \
  -H "نوع المحتوى: application/json" \
  -H "التفويض: حامل YOUR_KEY" \
  -d '{"jsonrpc": "2.0"، "id": "2"، "method": "tasks/get"، "params": {"taskId": "TASK_UUID"}}'```
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### `tasks/cancel` — Cancel a Task

```bash
<<<<<<< HEAD
curl -X POST http://localhost:20128/a2a \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_KEY" \
  -d '{"jsonrpc":"2.0","id":"3","method":"tasks/cancel","params":{"taskId":"TASK_UUID"}}'
```
=======
حليقة -X POST http://localhost:20128/a2a \
  -H "نوع المحتوى: application/json" \
  -H "التفويض: حامل YOUR_KEY" \
  -d '{"jsonrpc": "2.0"، "id": "3"، "method": "tasks/cancel"، "params": {"taskId": "TASK_UUID"}}'```
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

---

## Available Skills

<<<<<<< HEAD
| Skill              | Description                                                                                                                     |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `smart-routing`    | Routes prompts through OmniRoute's intelligent pipeline. Returns response with routing explanation, cost, and resilience trace. |
| `quota-management` | Answers natural-language queries about provider quotas, suggests free combos, and provides quota rankings.                      |

---

## Task Lifecycle

```
submitted → working → completed
                    → failed
                    → cancelled
```

- Tasks expire after 5 minutes (configurable)
- Terminal states: `completed`, `failed`, `cancelled`
- Event log tracks every state transition

---

## Error Codes

| Code   | Meaning                        |
| :----- | :----------------------------- |
| -32700 | Parse error (invalid JSON)     |
| -32600 | Invalid request / Unauthorized |
| -32601 | Method or skill not found      |
| -32602 | Invalid params                 |
| -32603 | Internal error                 |

---
=======
| مهارة | الوصف |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `التوجيه الذكي` | تطالب الطرق عبر خط أنابيب OmniRoute الذكي. إرجاع الاستجابة مع شرح التوجيه والتكلفة وتتبع المرونة. |
| `إدارة الحصص` | يجيب على استفسارات اللغة الطبيعية حول حصص الموفرين، ويقترح مجموعات مجانية، ويوفر تصنيفات الحصص.                      |---

## Task Lifecycle

````

تم الإرسال ← العمل ← مكتمل
→ فشل
→ ألغيت```

- تنتهي المهام بعد 5 دقائق (قابلة للتكوين)
- حالات الوحدة الطرفية: "مكتمل"، "فشل"، "تم الإلغاء".
- سجل الأحداث يتتبع كل انتقال للحالة---

## Error Codes

| الكود  | معنى                                 |
| :----- | :----------------------------------- | --- |
| -32700 | خطأ في التحليل (JSON غير صالح)       |
| -32600 | طلب غير صالح / غير مصرح به           |
| -32601 | لم يتم العثور على الطريقة أو المهارة |
| -32602 | معلمات غير صالحة                     |
| -32603 | خطأ داخلي                            | --- |
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## Integration Examples

### Python (requests)

<<<<<<< HEAD
```python
import requests

resp = requests.post("http://localhost:20128/a2a", json={
    "jsonrpc": "2.0", "id": "1",
    "method": "message/send",
    "params": {
        "skill": "smart-routing",
=======
````python
طلبات الاستيراد

resp = request.post("http://localhost:20128/a2a", json={
    "jsonrpc": "2.0"، "id": "1"،
    "الطريقة": "رسالة/إرسال"،
    "المعلمات": {
        "المهارة": "التوجيه الذكي"،
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        "messages": [{"role": "user", "content": "Hello"}]
    }
}, headers={"Authorization": "Bearer YOUR_KEY"})

<<<<<<< HEAD
result = resp.json()["result"]
print(result["artifacts"][0]["content"])
print(result["metadata"]["routing_explanation"])
```
=======
النتيجة = resp.json () ["النتيجة"]
طباعة (نتيجة ["المصنوعات"] [0] ["المحتوى"])
طباعة (نتيجة ["بيانات التعريف"] ["routing_explanation"])```
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### TypeScript (fetch)

```typescript
<<<<<<< HEAD
const resp = await fetch("http://localhost:20128/a2a", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_KEY",
  },
  body: JSON.stringify({
    jsonrpc: "2.0",
    id: "1",
    method: "message/send",
    params: {
      skill: "smart-routing",
      messages: [{ role: "user", content: "Hello" }],
    },
  }),
});
const { result } = await resp.json();
console.log(result.metadata.routing_explanation);
```
=======
const resp = انتظار الجلب("http://localhost:20128/a2a", {
  الطريقة: "POST"،
  رؤوس: {
    "نوع المحتوى": "application/json"،
    التفويض: "الحامل YOUR_KEY"،
  },
  الجسم: JSON.stringify({
    جسونربك: "2.0"،
    المعرف: "1"،
    الطريقة: "رسالة/إرسال"،
    المعلمات: {
      المهارة: "التوجيه الذكي"،
      الرسائل: [{ الدور: "المستخدم"، المحتوى: "مرحبًا" }]،
    },
  }),
});
const { result } = انتظار resp.json();
console.log(result.metadata.routing_explanation);```
````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
