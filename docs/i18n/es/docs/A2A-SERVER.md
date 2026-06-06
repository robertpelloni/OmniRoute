# OmniRoute A2A Server Documentation (Español)

<<<<<<< HEAD

---

> Agent-to-Agent Protocol v0.3 — OmniRoute as an intelligent routing agent

## Agent Discovery
=======
🌐 **Languages:** 🇺🇸 [English](../../../../docs/A2A-SERVER.md) · 🇪🇸 [es](../../es/docs/A2A-SERVER.md) · 🇫🇷 [fr](../../fr/docs/A2A-SERVER.md) · 🇩🇪 [de](../../de/docs/A2A-SERVER.md) · 🇮🇹 [it](../../it/docs/A2A-SERVER.md) · 🇷🇺 [ru](../../ru/docs/A2A-SERVER.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/A2A-SERVER.md) · 🇯🇵 [ja](../../ja/docs/A2A-SERVER.md) · 🇰🇷 [ko](../../ko/docs/A2A-SERVER.md) · 🇸🇦 [ar](../../ar/docs/A2A-SERVER.md) · 🇮🇳 [hi](../../hi/docs/A2A-SERVER.md) · 🇮🇳 [in](../../in/docs/A2A-SERVER.md) · 🇹🇭 [th](../../th/docs/A2A-SERVER.md) · 🇻🇳 [vi](../../vi/docs/A2A-SERVER.md) · 🇮🇩 [id](../../id/docs/A2A-SERVER.md) · 🇲🇾 [ms](../../ms/docs/A2A-SERVER.md) · 🇳🇱 [nl](../../nl/docs/A2A-SERVER.md) · 🇵🇱 [pl](../../pl/docs/A2A-SERVER.md) · 🇸🇪 [sv](../../sv/docs/A2A-SERVER.md) · 🇳🇴 [no](../../no/docs/A2A-SERVER.md) · 🇩🇰 [da](../../da/docs/A2A-SERVER.md) · 🇫🇮 [fi](../../fi/docs/A2A-SERVER.md) · 🇵🇹 [pt](../../pt/docs/A2A-SERVER.md) · 🇷🇴 [ro](../../ro/docs/A2A-SERVER.md) · 🇭🇺 [hu](../../hu/docs/A2A-SERVER.md) · 🇧🇬 [bg](../../bg/docs/A2A-SERVER.md) · 🇸🇰 [sk](../../sk/docs/A2A-SERVER.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/A2A-SERVER.md) · 🇮🇱 [he](../../he/docs/A2A-SERVER.md) · 🇵🇭 [phi](../../phi/docs/A2A-SERVER.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/A2A-SERVER.md) · 🇨🇿 [cs](../../cs/docs/A2A-SERVER.md) · 🇹🇷 [tr](../../tr/docs/A2A-SERVER.md)

---

> Protocolo de agente a agente v0.3: OmniRoute como agente de enrutamiento inteligente## Agent Discovery
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

```bash
curl http://localhost:20128/.well-known/agent.json
```

<<<<<<< HEAD
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
Devuelve la Tarjeta de Agente que describe las capacidades, habilidades y requisitos de autenticación de OmniRoute.---

## Authentication

Todas las solicitudes `/a2a` requieren una clave API a través del encabezado `Authorization`:```
Authorization: Bearer YOUR_OMNIROUTE_API_KEY

````

Si no se configura ninguna clave API en el servidor, se omite la autenticación.---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## JSON-RPC 2.0 Methods

### `message/send` — Synchronous Execution

<<<<<<< HEAD
Sends a message to a skill and waits for the complete response.

```bash
=======
Envía un mensaje a una habilidad y espera la respuesta completa.```bash
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
=======
````

**Respuesta:**```json
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

````

### `message/stream` — SSE Streaming

Igual que "mensaje/enviar", pero devuelve eventos enviados por el servidor para transmisión en tiempo real.```bash
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
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
<<<<<<< HEAD
```

**SSE Events:**

```
=======
````

**Eventos de ESS:**```
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
data: {"jsonrpc":"2.0","method":"message/stream","params":{"task":{"id":"...","state":"working"},"chunk":{"type":"text","content":"..."}}}

: heartbeat 2026-03-03T17:00:00Z

data: {"jsonrpc":"2.0","method":"message/stream","params":{"task":{"id":"...","state":"completed"},"metadata":{...}}}
<<<<<<< HEAD
```
=======

````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### `tasks/get` — Query Task Status

```bash
curl -X POST http://localhost:20128/a2a \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_KEY" \
  -d '{"jsonrpc":"2.0","id":"2","method":"tasks/get","params":{"taskId":"TASK_UUID"}}'
<<<<<<< HEAD
```
=======
````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### `tasks/cancel` — Cancel a Task

```bash
curl -X POST http://localhost:20128/a2a \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_KEY" \
  -d '{"jsonrpc":"2.0","id":"3","method":"tasks/cancel","params":{"taskId":"TASK_UUID"}}'
```

---

## Available Skills

<<<<<<< HEAD
| Skill              | Description                                                                                                                     |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `smart-routing`    | Routes prompts through OmniRoute's intelligent pipeline. Returns response with routing explanation, cost, and resilience trace. |
| `quota-management` | Answers natural-language queries about provider quotas, suggests free combos, and provides quota rankings.                      |

---
=======
| Habilidad                  | Descripción                                                                                                                                                      |
| :------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| `enrutamiento inteligente` | Enruta las indicaciones a través del canal inteligente de OmniRoute. Devuelve una respuesta con explicación de enrutamiento, costo y seguimiento de resiliencia. |
| `gestión de cuotas`        | Responde consultas en lenguaje natural sobre cuotas de proveedores, sugiere combinaciones gratuitas y proporciona clasificaciones de cuotas.                     | --- |
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## Task Lifecycle

```
submitted → working → completed
                    → failed
                    → cancelled
```

<<<<<<< HEAD
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
- Las tareas caducan después de 5 minutos (configurable)
- Estados del terminal: "completado", "fallido", "cancelado"
- El registro de eventos rastrea cada transición de estado---

## Error Codes

| Código | Significado                         |
| :----- | :---------------------------------- | --- |
| -32700 | Error de análisis (JSON no válido)  |
| -32600 | Solicitud no válida / No autorizado |
| -32601 | Método o habilidad no encontrada    |
| -32602 | Parámetros no válidos               |
| -32603 | Error interno                       | --- |
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## Integration Examples

### Python (requests)

```python
import requests

resp = requests.post("http://localhost:20128/a2a", json={
    "jsonrpc": "2.0", "id": "1",
    "method": "message/send",
    "params": {
        "skill": "smart-routing",
        "messages": [{"role": "user", "content": "Hello"}]
    }
}, headers={"Authorization": "Bearer YOUR_KEY"})

result = resp.json()["result"]
print(result["artifacts"][0]["content"])
print(result["metadata"]["routing_explanation"])
```

### TypeScript (fetch)

```typescript
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
