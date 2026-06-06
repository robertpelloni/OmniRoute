# API Reference (हिन्दी)

<<<<<<< HEAD
🌐 **Languages:** 🇺🇸 [English](../../../../docs/API_REFERENCE.md) · 🇸🇦 [ar](../../ar/docs/API_REFERENCE.md) · 🇧🇬 [bg](../../bg/docs/API_REFERENCE.md) · 🇧🇩 [bn](../../bn/docs/API_REFERENCE.md) · 🇨🇿 [cs](../../cs/docs/API_REFERENCE.md) · 🇩🇰 [da](../../da/docs/API_REFERENCE.md) · 🇩🇪 [de](../../de/docs/API_REFERENCE.md) · 🇪🇸 [es](../../es/docs/API_REFERENCE.md) · 🇮🇷 [fa](../../fa/docs/API_REFERENCE.md) · 🇫🇮 [fi](../../fi/docs/API_REFERENCE.md) · 🇫🇷 [fr](../../fr/docs/API_REFERENCE.md) · 🇮🇳 [gu](../../gu/docs/API_REFERENCE.md) · 🇮🇱 [he](../../he/docs/API_REFERENCE.md) · 🇮🇳 [hi](../../hi/docs/API_REFERENCE.md) · 🇭🇺 [hu](../../hu/docs/API_REFERENCE.md) · 🇮🇩 [id](../../id/docs/API_REFERENCE.md) · 🇮🇹 [it](../../it/docs/API_REFERENCE.md) · 🇯🇵 [ja](../../ja/docs/API_REFERENCE.md) · 🇰🇷 [ko](../../ko/docs/API_REFERENCE.md) · 🇮🇳 [mr](../../mr/docs/API_REFERENCE.md) · 🇲🇾 [ms](../../ms/docs/API_REFERENCE.md) · 🇳🇱 [nl](../../nl/docs/API_REFERENCE.md) · 🇳🇴 [no](../../no/docs/API_REFERENCE.md) · 🇵🇭 [phi](../../phi/docs/API_REFERENCE.md) · 🇵🇱 [pl](../../pl/docs/API_REFERENCE.md) · 🇵🇹 [pt](../../pt/docs/API_REFERENCE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/API_REFERENCE.md) · 🇷🇴 [ro](../../ro/docs/API_REFERENCE.md) · 🇷🇺 [ru](../../ru/docs/API_REFERENCE.md) · 🇸🇰 [sk](../../sk/docs/API_REFERENCE.md) · 🇸🇪 [sv](../../sv/docs/API_REFERENCE.md) · 🇰🇪 [sw](../../sw/docs/API_REFERENCE.md) · 🇮🇳 [ta](../../ta/docs/API_REFERENCE.md) · 🇮🇳 [te](../../te/docs/API_REFERENCE.md) · 🇹🇭 [th](../../th/docs/API_REFERENCE.md) · 🇹🇷 [tr](../../tr/docs/API_REFERENCE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/API_REFERENCE.md) · 🇵🇰 [ur](../../ur/docs/API_REFERENCE.md) · 🇻🇳 [vi](../../vi/docs/API_REFERENCE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/API_REFERENCE.md)

---

Complete reference for all OmniRoute API endpoints.

---

## Table of Contents

- [Chat Completions](#chat-completions)
- [Embeddings](#embeddings)
- [Image Generation](#image-generation)
- [List Models](#list-models)
- [Compatibility Endpoints](#compatibility-endpoints)
- [Semantic Cache](#semantic-cache)
- [Dashboard & Management](#dashboard--management)
- [Request Processing](#request-processing)
- [Authentication](#authentication)

---
=======
🌐 **Languages:** 🇺🇸 [English](../../../../docs/API_REFERENCE.md) · 🇪🇸 [es](../../es/docs/API_REFERENCE.md) · 🇫🇷 [fr](../../fr/docs/API_REFERENCE.md) · 🇩🇪 [de](../../de/docs/API_REFERENCE.md) · 🇮🇹 [it](../../it/docs/API_REFERENCE.md) · 🇷🇺 [ru](../../ru/docs/API_REFERENCE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/API_REFERENCE.md) · 🇯🇵 [ja](../../ja/docs/API_REFERENCE.md) · 🇰🇷 [ko](../../ko/docs/API_REFERENCE.md) · 🇸🇦 [ar](../../ar/docs/API_REFERENCE.md) · 🇮🇳 [hi](../../hi/docs/API_REFERENCE.md) · 🇮🇳 [in](../../in/docs/API_REFERENCE.md) · 🇹🇭 [th](../../th/docs/API_REFERENCE.md) · 🇻🇳 [vi](../../vi/docs/API_REFERENCE.md) · 🇮🇩 [id](../../id/docs/API_REFERENCE.md) · 🇲🇾 [ms](../../ms/docs/API_REFERENCE.md) · 🇳🇱 [nl](../../nl/docs/API_REFERENCE.md) · 🇵🇱 [pl](../../pl/docs/API_REFERENCE.md) · 🇸🇪 [sv](../../sv/docs/API_REFERENCE.md) · 🇳🇴 [no](../../no/docs/API_REFERENCE.md) · 🇩🇰 [da](../../da/docs/API_REFERENCE.md) · 🇫🇮 [fi](../../fi/docs/API_REFERENCE.md) · 🇵🇹 [pt](../../pt/docs/API_REFERENCE.md) · 🇷🇴 [ro](../../ro/docs/API_REFERENCE.md) · 🇭🇺 [hu](../../hu/docs/API_REFERENCE.md) · 🇧🇬 [bg](../../bg/docs/API_REFERENCE.md) · 🇸🇰 [sk](../../sk/docs/API_REFERENCE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/API_REFERENCE.md) · 🇮🇱 [he](../../he/docs/API_REFERENCE.md) · 🇵🇭 [phi](../../phi/docs/API_REFERENCE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/API_REFERENCE.md) · 🇨🇿 [cs](../../cs/docs/API_REFERENCE.md) · 🇹🇷 [tr](../../tr/docs/API_REFERENCE.md)

---

सभी ओमनीरूट एपीआई एंडपॉइंट के लिए पूरा संदर्भ।---

## Table of Contents

- [चैट पूर्णताएं](#चैट-समाप्ति)
- [एम्बेडिंग्स](#एम्बेडिंग्स)
- [छवि निर्माण](#छवि-पीढ़ी)
- [सूची मॉडल](#सूची-मॉडल)
- [संगतता समापन बिंदु](#संगतता-अंत बिंदु)
- [सिमेंटिक कैश](#सिमेंटिक-कैश)
- [डैशबोर्ड और प्रबंधन](#डैशबोर्ड--प्रबंधन)
- [अनुरोध प्रसंस्करण](#अनुरोध-प्रसंस्करण)
- [प्रमाणीकरण](#प्रमाणीकरण)---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## Chat Completions

```bash
POST /v1/chat/completions
Authorization: Bearer your-api-key
Content-Type: application/json

{
  "model": "cc/claude-opus-4-6",
  "messages": [
    {"role": "user", "content": "Write a function to..."}
  ],
  "stream": true
}
```

### Custom Headers

<<<<<<< HEAD
| Header                   | Direction | Description                                      |
| ------------------------ | --------- | ------------------------------------------------ |
| `X-OmniRoute-No-Cache`   | Request   | Set to `true` to bypass cache                    |
| `X-OmniRoute-Progress`   | Request   | Set to `true` for progress events                |
| `X-Session-Id`           | Request   | Sticky session key for external session affinity |
| `x_session_id`           | Request   | Underscore variant also accepted (direct HTTP)   |
| `Idempotency-Key`        | Request   | Dedup key (5s window)                            |
| `X-Request-Id`           | Request   | Alternative dedup key                            |
| `X-OmniRoute-Cache`      | Response  | `HIT` or `MISS` (non-streaming)                  |
| `X-OmniRoute-Idempotent` | Response  | `true` if deduplicated                           |
| `X-OmniRoute-Progress`   | Response  | `enabled` if progress tracking on                |
| `X-OmniRoute-Session-Id` | Response  | Effective session ID used by OmniRoute           |

> Nginx note: if you rely on underscore headers (for example `x_session_id`), enable `underscores_in_headers on;`.

---
=======
| हेडर                        | दिशा        | विवरण                                                  |
| --------------------------- | ----------- | ------------------------------------------------------ |
| `एक्स-ओम्नीरूट-नो-कैश`      | निवेदन      | कैश को बायपास करने के लिए `सही` पर सेट करें            |
| `एक्स-ओम्नीरूट-प्रोग्रेस`   | निवेदन      | प्रगति घटनाओं के लिए `सही` पर सेट करें                 |
| `एक्स-सत्र-आईडी`            | निवेदन      | बाहरी सत्र आत्मीयता के लिए स्टिकी सत्र कुंजी           |
| `x_session_id`              | निवेदन      | अंडरस्कोर संस्करण भी स्वीकार किया गया (प्रत्यक्ष HTTP) |
| `इडेम्पोटेंसी-की`           | निवेदन      | डेडअप कुंजी (5एस विंडो)                                |
| `एक्स-अनुरोध-आईडी`          | निवेदन      | वैकल्पिक डिडअप कुंजी                                   |
| `एक्स-ओम्नीरूट-कैश`         | प्रतिक्रिया | `हिट` या `मिस` (नॉन-स्ट्रीमिंग)                        |
| `एक्स-ओम्नीरूट-इडेम्पोटेंट` | प्रतिक्रिया | यदि डुप्लिकेट किया गया तो `सत्य`                       |
| `एक्स-ओम्नीरूट-प्रोग्रेस`   | प्रतिक्रिया | यदि प्रगति ट्रैकिंग चालू है तो `सक्षम`                 |
| `एक्स-ओम्नीरूट-सत्र-आईडी`   | प्रतिक्रिया | ओमनीरूट द्वारा प्रयुक्त प्रभावी सत्र आईडी              |

> Nginx नोट: यदि आप अंडरस्कोर हेडर पर भरोसा करते हैं (उदाहरण के लिए `x_session_id`), तो `underscores_in_headers on;` सक्षम करें।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## Embeddings

```bash
POST /v1/embeddings
Authorization: Bearer your-api-key
Content-Type: application/json

{
  "model": "nebius/Qwen/Qwen3-Embedding-8B",
  "input": "The food was delicious"
}
```

<<<<<<< HEAD
Available providers: Nebius, OpenAI, Mistral, Together AI, Fireworks, NVIDIA, **OpenRouter**, **GitHub Models**.

```bash
# List all embedding models
GET /v1/embeddings
```
=======
उपलब्ध प्रदाता: नेबियस, ओपनएआई, मिस्ट्रल, टुगेदर एआई, फायरवर्क्स, एनवीआईडीआईए।```bash

# List all embedding models

GET /v1/embeddings

````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

---

## Image Generation

```bash
POST /v1/images/generations
Authorization: Bearer your-api-key
Content-Type: application/json

{
  "model": "openai/dall-e-3",
  "prompt": "A beautiful sunset over mountains",
  "size": "1024x1024"
}
<<<<<<< HEAD
```

Available providers: OpenAI (DALL-E, GPT Image 1), xAI (Grok Image), Together AI (FLUX), Fireworks AI, Nebius (FLUX), Hyperbolic, NanoBanana, **OpenRouter**, SD WebUI (local), ComfyUI (local).

```bash
# List all image models
GET /v1/images/generations
```
=======
````

उपलब्ध प्रदाता: OpenAI (DALL-E), xAI (ग्रोक इमेज), टुगेदर AI (FLUX), फायरवर्क्स AI।```bash

# List all image models

GET /v1/images/generations

````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

---

## List Models

```bash
GET /v1/models
Authorization: Bearer your-api-key

→ Returns all chat, embedding, and image models + combos in OpenAI format
<<<<<<< HEAD
```
=======
````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

---

## Compatibility Endpoints

<<<<<<< HEAD
| Method | Path                        | Format                 |
| ------ | --------------------------- | ---------------------- |
| POST   | `/v1/chat/completions`      | OpenAI                 |
| POST   | `/v1/messages`              | Anthropic              |
| POST   | `/v1/responses`             | OpenAI Responses       |
| POST   | `/v1/embeddings`            | OpenAI                 |
| POST   | `/v1/images/generations`    | OpenAI                 |
| GET    | `/v1/models`                | OpenAI                 |
| POST   | `/v1/messages/count_tokens` | Anthropic              |
| GET    | `/v1beta/models`            | Gemini                 |
| POST   | `/v1beta/models/{...path}`  | Gemini generateContent |
| POST   | `/v1/api/chat`              | Ollama                 |

### Dedicated Provider Routes
=======
| विधि         | पथ                          | प्रारूप              |
| ------------ | --------------------------- | -------------------- | ----------------------------- |
| पोस्ट        | `/v1/चैट/समापन`             | ओपनएआई               |
| पोस्ट        | `/v1/संदेश`                 | मानवशास्त्रीय        |
| पोस्ट        | `/v1/प्रतिक्रियाएँ`         | ओपनएआई प्रतिक्रियाएँ |
| पोस्ट        | `/v1/एम्बेडिंग्स`           | ओपनएआई               |
| POST         | `/v1/छवियां/पीढ़ी`          | ओपनएआई               |
| प्राप्त करें | `/v1/मॉडल`                  | ओपनएआई               |
| पोस्ट        | `/v1/messages/count_tokens` | मानवशास्त्रीय        |
| प्राप्त करें | `/v1beta/मॉडल`              | मिथुन                |
| पोस्ट        | `/v1beta/models/{...path}`  | मिथुन जनरेटकंटेंट    |
| पोस्ट        | `/v1/api/chat`              | ओलामा                | ### Dedicated Provider Routes |
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

```bash
POST /v1/providers/{provider}/chat/completions
POST /v1/providers/{provider}/embeddings
POST /v1/providers/{provider}/images/generations
```

<<<<<<< HEAD
The provider prefix is auto-added if missing. Mismatched models return `400`.

---
=======
गायब होने पर प्रदाता उपसर्ग स्वतः जुड़ जाता है। बेमेल मॉडल `400` लौटाते हैं।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## Semantic Cache

```bash
# Get cache stats
GET /api/cache/stats

# Clear all caches
DELETE /api/cache/stats
```

<<<<<<< HEAD
Response example:

```json
{
  "semanticCache": {
    "memorySize": 42,
    "memoryMaxSize": 500,
    "dbSize": 128,
    "hitRate": 0.65
  },
  "idempotency": {
    "activeKeys": 3,
    "windowMs": 5000
  }
}
```
=======
प्रतिक्रिया उदाहरण:```json
{
"semanticCache": {
"memorySize": 42,
"memoryMaxSize": 500,
"dbSize": 128,
"hitRate": 0.65
},
"idempotency": {
"activeKeys": 3,
"windowMs": 5000
}
}

````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

---

## Dashboard & Management

### Authentication

<<<<<<< HEAD
| Endpoint                      | Method  | Description           |
| ----------------------------- | ------- | --------------------- |
| `/api/auth/login`             | POST    | Login                 |
| `/api/auth/logout`            | POST    | Logout                |
| `/api/settings/require-login` | GET/PUT | Toggle login required |

### Provider Management

| Endpoint                     | Method                | Description                                    |
| ---------------------------- | --------------------- | ---------------------------------------------- |
| `/api/providers`             | GET/POST              | List / create providers                        |
| `/api/providers/[id]`        | GET/PUT/DELETE        | Manage a provider                              |
| `/api/providers/[id]/test`   | POST                  | Test provider connection                       |
| `/api/providers/[id]/models` | GET                   | List provider models                           |
| `/api/providers/validate`    | POST                  | Validate provider config                       |
| `/api/provider-nodes*`       | Various               | Provider node management                       |
| `/api/provider-models`       | GET/POST/PATCH/DELETE | Custom models (add, update, hide/show, delete) |

### OAuth Flows

| Endpoint                         | Method  | Description             |
| -------------------------------- | ------- | ----------------------- |
| `/api/oauth/[provider]/[action]` | Various | Provider-specific OAuth |

### Routing & Config

| Endpoint              | Method   | Description                   |
| --------------------- | -------- | ----------------------------- |
| `/api/models/alias`   | GET/POST | Model aliases                 |
| `/api/models/catalog` | GET      | All models by provider + type |
| `/api/combos*`        | Various  | Combo management              |
| `/api/keys*`          | Various  | API key management            |
| `/api/pricing`        | GET      | Model pricing                 |

### Usage & Analytics

| Endpoint                    | Method | Description          |
| --------------------------- | ------ | -------------------- |
| `/api/usage/history`        | GET    | Usage history        |
| `/api/usage/logs`           | GET    | Usage logs           |
| `/api/usage/request-logs`   | GET    | Request-level logs   |
| `/api/usage/[connectionId]` | GET    | Per-connection usage |

### Settings

| Endpoint                        | Method        | Description            |
| ------------------------------- | ------------- | ---------------------- |
| `/api/settings`                 | GET/PUT/PATCH | General settings       |
| `/api/settings/proxy`           | GET/PUT       | Network proxy config   |
| `/api/settings/proxy/test`      | POST          | Test proxy connection  |
| `/api/settings/ip-filter`       | GET/PUT       | IP allowlist/blocklist |
| `/api/settings/thinking-budget` | GET/PUT       | Reasoning token budget |
| `/api/settings/system-prompt`   | GET/PUT       | Global system prompt   |

### Monitoring

| Endpoint                 | Method     | Description                                                                                          |
| ------------------------ | ---------- | ---------------------------------------------------------------------------------------------------- |
| `/api/sessions`          | GET        | Active session tracking                                                                              |
| `/api/rate-limits`       | GET        | Per-account rate limits                                                                              |
| `/api/monitoring/health` | GET        | Health check + provider summary (`catalogCount`, `configuredCount`, `activeCount`, `monitoredCount`) |
| `/api/cache/stats`       | GET/DELETE | Cache stats / clear                                                                                  |

### Backup & Export/Import

| Endpoint                    | Method | Description                             |
| --------------------------- | ------ | --------------------------------------- |
| `/api/db-backups`           | GET    | List available backups                  |
| `/api/db-backups`           | PUT    | Create a manual backup                  |
| `/api/db-backups`           | POST   | Restore from a specific backup          |
| `/api/db-backups/export`    | GET    | Download database as .sqlite file       |
| `/api/db-backups/import`    | POST   | Upload .sqlite file to replace database |
| `/api/db-backups/exportAll` | GET    | Download full backup as .tar.gz archive |

### Cloud Sync

| Endpoint               | Method  | Description           |
| ---------------------- | ------- | --------------------- |
| `/api/sync/cloud`      | Various | Cloud sync operations |
| `/api/sync/initialize` | POST    | Initialize sync       |
| `/api/cloud/*`         | Various | Cloud management      |

### Tunnels

| Endpoint                   | Method | Description                                                             |
| -------------------------- | ------ | ----------------------------------------------------------------------- |
| `/api/tunnels/cloudflared` | GET    | Read Cloudflare Quick Tunnel install/runtime status for the dashboard   |
| `/api/tunnels/cloudflared` | POST   | Enable or disable the Cloudflare Quick Tunnel (`action=enable/disable`) |

### CLI Tools

| Endpoint                           | Method | Description         |
| ---------------------------------- | ------ | ------------------- |
| `/api/cli-tools/claude-settings`   | GET    | Claude CLI status   |
| `/api/cli-tools/codex-settings`    | GET    | Codex CLI status    |
| `/api/cli-tools/droid-settings`    | GET    | Droid CLI status    |
| `/api/cli-tools/openclaw-settings` | GET    | OpenClaw CLI status |
| `/api/cli-tools/runtime/[toolId]`  | GET    | Generic CLI runtime |

CLI responses include: `installed`, `runnable`, `command`, `commandPath`, `runtimeMode`, `reason`.

### ACP Agents

| Endpoint          | Method | Description                                              |
| ----------------- | ------ | -------------------------------------------------------- |
| `/api/acp/agents` | GET    | List all detected agents (built-in + custom) with status |
| `/api/acp/agents` | POST   | Add custom agent or refresh detection cache              |
| `/api/acp/agents` | DELETE | Remove a custom agent by `id` query param                |

GET response includes `agents[]` (id, name, binary, version, installed, protocol, isCustom) and `summary` (total, installed, notFound, builtIn, custom).

### Resilience & Rate Limits

| Endpoint                | Method    | Description                                                                        |
| ----------------------- | --------- | ---------------------------------------------------------------------------------- |
| `/api/resilience`       | GET/PATCH | Get/update request queue, connection cooldown, provider breaker, and wait settings |
| `/api/resilience/reset` | POST      | Reset provider circuit breakers                                                    |
| `/api/rate-limits`      | GET       | Per-account rate limit status                                                      |
| `/api/rate-limit`       | GET       | Global rate limit configuration                                                    |

### Evals

| Endpoint     | Method   | Description                       |
| ------------ | -------- | --------------------------------- |
| `/api/evals` | GET/POST | List eval suites / run evaluation |

### Policies

| Endpoint        | Method          | Description             |
| --------------- | --------------- | ----------------------- |
| `/api/policies` | GET/POST/DELETE | Manage routing policies |

### Compliance

| Endpoint                    | Method | Description                   |
| --------------------------- | ------ | ----------------------------- |
| `/api/compliance/audit-log` | GET    | Compliance audit log (last N) |

### v1beta (Gemini-Compatible)

| Endpoint                   | Method | Description                       |
| -------------------------- | ------ | --------------------------------- |
| `/v1beta/models`           | GET    | List models in Gemini format      |
| `/v1beta/models/{...path}` | POST   | Gemini `generateContent` endpoint |

These endpoints mirror Gemini's API format for clients that expect native Gemini SDK compatibility.

### Internal / System APIs

| Endpoint                 | Method | Description                                          |
| ------------------------ | ------ | ---------------------------------------------------- |
| `/api/init`              | GET    | Application initialization check (used on first run) |
| `/api/tags`              | GET    | Ollama-compatible model tags (for Ollama clients)    |
| `/api/restart`           | POST   | Trigger graceful server restart                      |
| `/api/shutdown`          | POST   | Trigger graceful server shutdown                     |
| `/api/system/env/repair` | POST   | Repair OAuth provider environment variables          |
| `/api/system-info`       | GET    | Generate system diagnostics report                   |

> **Note:** These endpoints are used internally by the system or for Ollama client compatibility. They are not typically called by end users.

### OAuth Environment Repair _(v3.6.1+)_

```bash
POST /api/system/env/repair
Content-Type: application/json

{
  "provider": "claude-code"
}
```

Repairs missing or corrupted OAuth environment variables for a specific provider. Returns:

```json
{
  "success": true,
  "repaired": ["CLAUDE_CODE_OAUTH_CLIENT_ID", "CLAUDE_CODE_OAUTH_CLIENT_SECRET"],
  "backupPath": "/home/user/.omniroute/backups/env-repair-2026-04-11.bak"
}
```

---
=======
| समापन बिंदु | विधि | विवरण |
| -------------------------------- | ------- | ---------------------- |
| `/api/auth/login` | पोस्ट | लॉगइन करें |
| `/api/auth/logout` | पोस्ट | लॉगआउट |
| `/api/settings/require-login` | प्राप्त/डालें | लॉगिन आवश्यक टॉगल करें |### Provider Management

| समापन बिंदु | विधि | विवरण |
| -------------------------------- | --------------- | ---------------------- |
| `/एपीआई/प्रदाता` | प्राप्त/पोस्ट करें | प्रदाताओं की सूची बनाएं/बनाएँ |
| `/एपीआई/प्रदाता/[आईडी]` | प्राप्त/पुट/डिलीट | एक प्रदाता प्रबंधित करें |
| `/एपीआई/प्रदाता/[आईडी]/परीक्षण` | पोस्ट | परीक्षण प्रदाता कनेक्शन |
| `/एपीआई/प्रदाता/[आईडी]/मॉडल` | प्राप्त करें | सूची प्रदाता मॉडल |
| `/एपीआई/प्रदाता/सत्यापन` | पोस्ट | प्रदाता कॉन्फ़िगरेशन सत्यापित करें |
| `/एपीआई/प्रदाता-नोड्स*` | विविध | प्रदाता नोड प्रबंधन |
| `/एपीआई/प्रदाता-मॉडल` | प्राप्त करें/पोस्ट करें/हटाएं | कस्टम मॉडल |### OAuth Flows

| समापन बिंदु | विधि | विवरण |
| -------------------------------- | ------- | ---------------------- |
| `/api/oauth/[प्रदाता]/[कार्रवाई]` | विविध | प्रदाता-विशिष्ट OAuth |### Routing & Config

| समापन बिंदु | विधि | विवरण |
| ---------------------- | -------- | -------------------------------- |
| `/एपीआई/मॉडल/उपनाम` | प्राप्त/पोस्ट करें | मॉडल उपनाम |
| `/एपीआई/मॉडल/कैटलॉग` | प्राप्त करें | प्रदाता द्वारा सभी मॉडल + प्रकार |
| `/एपीआई/कॉम्बोस*` | Various  | कॉम्बो प्रबंधन |
| `/api/keys*` | विविध | एपीआई कुंजी प्रबंधन |
| `/api/pricing` | प्राप्त करें | मॉडल मूल्य निर्धारण |### Usage & Analytics

| समापन बिंदु | विधि | विवरण |
| -------------------------------- | ------ | ------------------- |
| `/api/उपयोग/इतिहास` | प्राप्त करें | उपयोग इतिहास |
| `/api/usage/logs` | प्राप्त करें | उपयोग लॉग |
| `/api/usage/request-logs` | प्राप्त करें | अनुरोध-स्तर लॉग |
| `/api/usage/[connectionId]` | प्राप्त करें | प्रति-कनेक्शन उपयोग |### Settings

| समापन बिंदु | विधि | विवरण |
| -------------------------------- | ----------------- | ---------------------- |
| `/एपीआई/सेटिंग्स` | प्राप्त/पुट/पैच | सामान्य सेटिंग्स |
| `/एपीआई/सेटिंग्स/प्रॉक्सी` | प्राप्त/डालें | नेटवर्क प्रॉक्सी कॉन्फ़िगरेशन |
| `/एपीआई/सेटिंग्स/प्रॉक्सी/टेस्ट` | पोस्ट | प्रॉक्सी कनेक्शन का परीक्षण करें |
| `/एपीआई/सेटिंग्स/आईपी-फ़िल्टर` | GET/PUT       | आईपी ​​​​अनुमति सूची/अवरुद्ध सूची |
| `/एपीआई/सेटिंग्स/थिंकिंग-बजट` | प्राप्त/डालें | तर्क टोकन बजट |
| `/api/settings/system-prompt` | प्राप्त/डालें | ग्लोबल सिस्टम प्रॉम्प्ट |### Monitoring

| समापन बिंदु | विधि | विवरण |
| ---------------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| `/एपीआई/सत्र` | प्राप्त करें | सक्रिय सत्र ट्रैकिंग |
| `/एपीआई/रेट-लिमिट्स` | प्राप्त करें | प्रति खाता दर सीमा |
| `/api/निगरानी/स्वास्थ्य` | प्राप्त करें | स्वास्थ्य जांच + प्रदाता सारांश (`कैटलॉगकाउंट`, `कॉन्फ़िगरकाउंट`, `एक्टिवकाउंट`, `मॉनिटरकाउंट`) |
| `/api/cache/stats` | प्राप्त करें/हटाएं | कैश आँकड़े / साफ़ |### Backup & Export/Import

| समापन बिंदु | विधि | विवरण |
| -------------------------------- | ------ | ------------------------------------------------ |
| `/एपीआई/डीबी-बैकअप` | प्राप्त करें | उपलब्ध बैकअप की सूची |
| `/एपीआई/डीबी-बैकअप` | डालो | मैन्युअल बैकअप बनाएं |
| `/एपीआई/डीबी-बैकअप` | पोस्ट | किसी विशिष्ट बैकअप से पुनर्स्थापित करें |
| `/एपीआई/डीबी-बैकअप/एक्सपोर्ट` | प्राप्त करें | डेटाबेस को .sqlite फ़ाइल के रूप में डाउनलोड करें |
| `/api/db-backups/import` | पोस्ट | डेटाबेस को बदलने के लिए .sqlite फ़ाइल अपलोड करें |
| `/api/db-backups/exportAll` | प्राप्त करें | .tar.gz संग्रह के रूप में पूर्ण बैकअप डाउनलोड करें |### Cloud Sync

| समापन बिंदु | विधि | विवरण |
| ---------------------- | ------- | ---------------------- |
| `/एपीआई/सिंक/क्लाउड` | विविध | क्लाउड सिंक ऑपरेशन |
| `/api/sync/initialize` | पोस्ट | सिंक प्रारंभ करें |
| `/एपीआई/क्लाउड/*` | विविध | बादल प्रबंधन |### Tunnels

| समापन बिंदु | विधि | विवरण |
| -------------------------------- | ------ | ---------------------------------------------------------------------------------- |
| `/api/सुरंगें/क्लाउडफ्लेयर` | प्राप्त करें | डैशबोर्ड के लिए क्लाउडफ्लेयर क्विक टनल इंस्टाल/रनटाइम स्थिति पढ़ें |
| `/api/सुरंगें/क्लाउडफ्लेयर` | पोस्ट | क्लाउडफ्लेयर क्विक टनल को सक्षम या अक्षम करें ('कार्रवाई=सक्षम/अक्षम') |### CLI Tools

| समापन बिंदु | विधि | विवरण |
| ---------------------------------- | ------ | ------------------- |
| `/api/cli-tools/claude-settings` | प्राप्त करें | क्लाउड सीएलआई स्थिति |
| `/api/cli-tools/codex-settings` | प्राप्त करें | कोडेक्स सीएलआई स्थिति |
| `/api/cli-tools/droid-settings` | प्राप्त करें | Droid CLI स्थिति |
| `/api/cli-tools/openclaw-settings` | प्राप्त करें | ओपनक्लॉ सीएलआई स्थिति |
| `/api/cli-tools/runtime/[toolId]` | प्राप्त करें | जेनेरिक सीएलआई रनटाइम |

सीएलआई प्रतिक्रियाओं में शामिल हैं: `इंस्टॉल`, `रननेबल`, `कमांड`, `कमांडपाथ`, `रनटाइममोड`, `कारण`।### ACP Agents

| समापन बिंदु | विधि | विवरण |
| ----------------- | ------ | ---------------------------------------------------------------- |
| `/api/acp/agents` | प्राप्त करें | स्थिति के साथ सभी पता लगाए गए एजेंटों (अंतर्निहित + कस्टम) की सूची बनाएं |
| `/एपीआई/एसीपी/एजेंट` | पोस्ट | कस्टम एजेंट जोड़ें या डिटेक्शन कैश रीफ्रेश करें |
| `/एपीआई/एसीपी/एजेंट` | हटाएं | `आईडी` क्वेरी पैरामीटर | द्वारा एक कस्टम एजेंट निकालें

GET प्रतिक्रिया में `एजेंट[]` (आईडी, नाम, बाइनरी, संस्करण, स्थापित, प्रोटोकॉल, isCustom) और `सारांश` (कुल, स्थापित, नॉटफाउंड, बिल्टइन, कस्टम) शामिल हैं।### Resilience & Rate Limits

| समापन बिंदु | विधि | विवरण |
| ---------------------- | --------- | -------------------------------- |
| `/एपीआई/लचीलापन` | प्राप्त करें/पैच करें | लचीलापन प्रोफ़ाइल प्राप्त/अद्यतन करें |
| `/एपीआई/लचीलापन/रीसेट` | पोस्ट | सर्किट ब्रेकर रीसेट करें |
| `/एपीआई/रेट-लिमिट्स` | प्राप्त करें | प्रति खाता दर सीमा स्थिति |
| `/एपीआई/दर-सीमा` | प्राप्त करें | वैश्विक दर सीमा विन्यास |### Evals

| समापन बिंदु | विधि | विवरण |
| ----------- | -------- | --------------------------------- |
| `/api/evals` | प्राप्त/पोस्ट करें | सूची eval सुइट्स/रन मूल्यांकन |### Policies

| समापन बिंदु | विधि | विवरण |
| --------------- | --------------- | ---------------------- |
| `/api/policies` | प्राप्त करें/पोस्ट करें/हटाएं | रूटिंग नीतियां प्रबंधित करें |### Compliance

| समापन बिंदु | विधि | विवरण |
| -------------------------------- | ------ | -------------------------------- |
| `/api/compliance/audit-log` | प्राप्त करें | अनुपालन ऑडिट लॉग (अंतिम एन) |### v1beta (Gemini-Compatible)

| समापन बिंदु | विधि | विवरण |
| -------------------------------- | ------ | --------------------------------- |
| `/v1beta/मॉडल` | प्राप्त करें | जेमिनी प्रारूप में मॉडलों की सूची बनाएं |
| `/v1beta/models/{...path}` | पोस्ट | मिथुन `जेनरेटकंटेंट` समापन बिंदु |

ये समापन बिंदु उन ग्राहकों के लिए जेमिनी के एपीआई प्रारूप को प्रतिबिंबित करते हैं जो मूल जेमिनी एसडीके संगतता की अपेक्षा करते हैं।### Internal / System APIs

| समापन बिंदु | विधि | विवरण |
| --------------- | ------ | ------------------------------------------------------------------ |
| `/api/init` | प्राप्त करें | एप्लिकेशन इनिशियलाइज़ेशन जांच (पहले रन पर प्रयुक्त) |
| `/api/tags` | प्राप्त करें | ओलामा-संगत मॉडल टैग (ओलामा ग्राहकों के लिए) |
| `/api/restart` | पोस्ट | ट्रिगर सुशोभित सर्वर पुनरारंभ |
| `/एपीआई/शटडाउन` | पोस्ट | ट्रिगर ग्रेसफुल सर्वर शटडाउन |

>**ध्यान दें:**इन समापन बिंदुओं का उपयोग सिस्टम द्वारा आंतरिक रूप से या ओलामा क्लाइंट संगतता के लिए किया जाता है। उन्हें आम तौर पर अंतिम उपयोगकर्ताओं द्वारा नहीं बुलाया जाता है।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## Audio Transcription

```bash
POST /v1/audio/transcriptions
Authorization: Bearer your-api-key
Content-Type: multipart/form-data
<<<<<<< HEAD
```

Transcribe audio files using Deepgram or AssemblyAI.

**Request:**

```bash
curl -X POST http://localhost:20128/v1/audio/transcriptions \
  -H "Authorization: Bearer your-api-key" \
  -F "file=@recording.mp3" \
  -F "model=deepgram/nova-3"
```

**Response:**

```json
=======
````

डीपग्राम या असेंबलीएआई का उपयोग करके ऑडियो फ़ाइलों को ट्रांसक्राइब करें।

**अनुरोध:**```bash
curl -X POST http://localhost:20128/v1/audio/transcriptions \
 -H "Authorization: Bearer your-api-key" \
 -F "file=@recording.mp3" \
 -F "model=deepgram/nova-3"

````

**प्रतिक्रिया:**```json
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
{
  "text": "Hello, this is the transcribed audio content.",
  "task": "transcribe",
  "language": "en",
  "duration": 12.5
}
<<<<<<< HEAD
```

**Supported providers:** `deepgram/nova-3`, `assemblyai/best`.

**Supported formats:** `mp3`, `wav`, `m4a`, `flac`, `ogg`, `webm`.

---

## Ollama Compatibility

For clients that use Ollama's API format:

```bash
# Chat endpoint (Ollama format)
POST /v1/api/chat

# Model listing (Ollama format)
GET /api/tags
```

Requests are automatically translated between Ollama and internal formats.

---
=======
````

**समर्थित प्रदाता:**`डीपग्राम/नोवा-3`, `असेंबलीआई/बेस्ट`।

**समर्थित प्रारूप:**`mp3`, `wav`, `m4a`, `flac`, `ogg`, `webm`।---

## Ollama Compatibility

ओलामा के एपीआई प्रारूप का उपयोग करने वाले ग्राहकों के लिए:```bash

# Chat endpoint (Ollama format)

POST /v1/api/chat

# Model listing (Ollama format)

GET /api/tags

````

अनुरोध स्वचालित रूप से ओलामा और आंतरिक प्रारूपों के बीच अनुवादित होते हैं।---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## Telemetry

```bash
# Get latency telemetry summary (p50/p95/p99 per provider)
GET /api/telemetry/summary
<<<<<<< HEAD
```

**Response:**

```json
{
  "providers": {
    "claudeCode": { "p50": 245, "p95": 890, "p99": 1200, "count": 150 },
    "github": { "p50": 180, "p95": 620, "p99": 950, "count": 320 }
  }
}
```
=======
````

**प्रतिक्रिया:**```json
{
"providers": {
"claudeCode": { "p50": 245, "p95": 890, "p99": 1200, "count": 150 },
"github": { "p50": 180, "p95": 620, "p99": 950, "count": 320 }
}
}

````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

---

## Budget

```bash
# Get budget status for all API keys
GET /api/usage/budget

# Set or update a budget
POST /api/usage/budget
Content-Type: application/json

{
  "keyId": "key-123",
  "limit": 50.00,
  "period": "monthly"
}
<<<<<<< HEAD
```

## Request Processing

1. Client sends request to `/v1/*`
2. Route handler calls `handleChat`, `handleEmbedding`, `handleAudioTranscription`, or `handleImageGeneration`
3. Model is resolved (direct provider/model or alias/combo)
4. Credentials selected from local DB with account availability filtering
5. For chat: `handleChatCore` — format detection, translation, cache check, idempotency check
6. Provider executor sends upstream request
7. Response translated back to client format (chat) or returned as-is (embeddings/images/audio)
8. Usage/logging recorded
9. Fallback applies on errors according to combo rules

Full architecture reference: [`ARCHITECTURE.md`](ARCHITECTURE.md)

---

## Authentication

- Dashboard routes (`/dashboard/*`) use `auth_token` cookie
- Login uses saved password hash; fallback to `INITIAL_PASSWORD`
- `requireLogin` toggleable via `/api/settings/require-login`
- `/v1/*` routes optionally require Bearer API key when `REQUIRE_API_KEY=true`
=======
````

---

## Model Availability

```bash
# Get real-time model availability across all providers
GET /api/models/availability

# Check availability for a specific model
POST /api/models/availability
Content-Type: application/json

{
  "model": "claude-sonnet-4-5-20250929"
}
```

---

## Request Processing

1. क्लाइंट `/v1/*` पर अनुरोध भेजता है
2. रूट हैंडलर `हैंडलचैट`, `हैंडलएम्बेडिंग`, `हैंडलऑडियोट्रांसक्रिप्शन`, या `हैंडलइमेजजेनरेशन` को कॉल करता है
3. मॉडल हल हो गया है (प्रत्यक्ष प्रदाता/मॉडल या उपनाम/कॉम्बो)
4. खाता उपलब्धता फ़िल्टरिंग के साथ स्थानीय डीबी से चयनित क्रेडेंशियल
5. चैट के लिए: `हैंडलचैटकोर` - प्रारूप का पता लगाना, अनुवाद, कैश जांच, निष्क्रियता जांच
6. प्रदाता निष्पादक अपस्ट्रीम अनुरोध भेजता है
7. प्रतिक्रिया को क्लाइंट प्रारूप (चैट) में वापस अनुवादित किया गया या जैसा है वैसा ही लौटाया गया (एम्बेडिंग/छवियां/ऑडियो)
8. उपयोग/लॉगिंग रिकॉर्ड किया गया
9. कॉम्बो नियमों के अनुसार त्रुटियों पर फ़ॉलबैक लागू होता है

पूर्ण वास्तुकला संदर्भ: [`ARCHITECTURE.md`](ARCHITECTURE.md)---

## Authentication

- डैशबोर्ड रूट (`/डैशबोर्ड/*`) `auth_token` कुकी का उपयोग करते हैं
- लॉगिन सहेजे गए पासवर्ड हैश का उपयोग करता है; `INITIAL_PASSWORD` पर फ़ॉलबैक
- `requireLogin` `/api/settings/require-login` के माध्यम से टॉगल करने योग्य
- `/v1/*` मार्गों को वैकल्पिक रूप से बियरर एपीआई कुंजी की आवश्यकता होती है जब `REQUIRE_API_KEY=true`
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
