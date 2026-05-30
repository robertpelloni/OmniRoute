| Endpoint                | Method    | Description                                                                        |
| ----------------------- | --------- | ---------------------------------------------------------------------------------- |
| `/api/resilience`       | GET/PATCH | Get/update request queue, connection cooldown, provider breaker, and wait settings |
| `/api/resilience/reset` | POST      | Reset provider circuit breakers                                                    |
| `/api/rate-limits`      | GET       | Per-account rate limit status                                                      |
| `/api/rate-limit`       | GET       | Global rate limit configuration                                                    |
========
=======
>>>>>>> Stashed changes
=======
>>>>>>>> Stashed changes:docs/i18n/fi/docs/API_REFERENCE.md
>>>>>>> Stashed changes

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

## Audio Transcription

```bash
POST /v1/audio/transcriptions
Authorization: Bearer your-api-key
Content-Type: multipart/form-data
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
{
  "text": "Hello, this is the transcribed audio content.",
  "task": "transcribe",
  "language": "en",
  "duration": 12.5
}
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

## Telemetry

```bash
# Get latency telemetry summary (p50/p95/p99 per provider)
GET /api/telemetry/summary
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
