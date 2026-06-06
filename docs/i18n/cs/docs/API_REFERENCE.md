# API Reference (Čeština)

<<<<<<< HEAD

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

Kompletní reference pro všechny koncové body rozhraní API OmniRoute.---

## Table of Contents

- [Dokončení chatu](#chat-completions)
- [Embeddings](#embeddings)
- [Generování obrázků](#image-generation)
- [Seznam modelů](#list-models)
- [Koncové body kompatibility](#compatibility-endpoints)
- [Sémantická mezipaměť](#sémantická mezipaměť)
- [Dashboard & Management](#dashboard--management)
- [Zpracování požadavku](#request-processing)
- [Authentication](#authentication)---
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
| Záhlaví                  | Směr    | Popis                                            |
| ------------------------ | ------- | ------------------------------------------------ | -------------------- |
| `X-OmniRoute-No-Cache`   | Žádost  | Chcete-li obejít mezipaměť                       | , nastavte na `true` |
| `X-OmniRoute-Progress`   | Žádost  | Nastavte na `true` pro události průběhu          |
| `X-Session-Id`           | Žádost  | Sticky session key pro externí afinitu relace    |
| `x_session_id`           | Žádost  | Přijímá se také varianta podtržítka (přímé HTTP) |
| "Idempotency-key"        | Žádost  | Deup klíč (okno 5s)                              |
| `X-Request-Id`           | Žádost  | Alternativní dedup klíč                          |
| `X-OmniRoute-Cache`      | Odpověď | „HIT“ nebo „MISS“ (bez streamování)              |
| "X-OmniRoute-Idempotent" | Odpověď | "pravda", pokud je deduplikováno                 |
| `X-OmniRoute-Progress`   | Odpověď | "povoleno", pokud je sledování pokroku na        |
| `X-OmniRoute-Session-Id` | Odpověď | Efektivní ID relace používané OmniRoute          |

> Poznámka Nginx: pokud spoléháte na hlavičky podtržení (například `x_session_id`), povolte `underscores_in_headers on;`.---
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

```bash
# List all embedding models
GET /v1/embeddings
```
=======
Dostupní poskytovatelé: Nebius, OpenAI, Mistral, Together AI, Fireworks, NVIDIA.```bash

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


```bash
# List all image models
GET /v1/images/generations
```
=======
````

Dostupní poskytovatelé: OpenAI (DALL-E), xAI (Grok Image), Together AI (FLUX), Fireworks AI.```bash

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
| Metoda    | Cesta                       | Formát                 |
| --------- | --------------------------- | ---------------------- | ----------------------------- |
| PŘÍSPĚVEK | `/v1/chat/completions`      | OpenAI                 |
| PŘÍSPĚVEK | `/v1/messages`              | Antropický             |
| PŘÍSPĚVEK | `/v1/responses`             | Odezvy OpenAI          |
| PŘÍSPĚVEK | `/v1/embeddings`            | OpenAI                 |
| PŘÍSPĚVEK | `/v1/images/generations`    | OpenAI                 |
| ZÍSKEJTE  | `/v1/modely`                | OpenAI                 |
| PŘÍSPĚVEK | `/v1/messages/count_tokens` | Antropický             |
| ZÍSKEJTE  | `/v1beta/modely`            | Blíženci               |
| PŘÍSPĚVEK | `/v1beta/modely/{...cesta}` | Blíženci generujíObsah |
| PŘÍSPĚVEK | `/v1/api/chat`              | Ollama                 | ### Dedicated Provider Routes |
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
Pokud chybí předpona poskytovatele, je automaticky přidána. Neodpovídající modely vrátí „400“.---
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
Příklad odpovědi:```json
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

| Endpoint                | Method    | Description                     |
| ----------------------- | --------- | ------------------------------- |
| `/api/resilience`       | GET/PATCH | Get/update resilience profiles  |
| `/api/resilience/reset` | POST      | Reset circuit breakers          |
| `/api/rate-limits`      | GET       | Per-account rate limit status   |
| `/api/rate-limit`       | GET       | Global rate limit configuration |
>>>>>>> Stashed changes
| Endpoint        | Method | Description                                          |
| --------------- | ------ | ---------------------------------------------------- |
| `/api/init`     | GET    | Application initialization check (used on first run) |
| `/api/tags`     | GET    | Ollama-compatible model tags (for Ollama clients)    |
| `/api/restart`  | POST   | Trigger graceful server restart                      |
| `/api/shutdown` | POST   | Trigger graceful server shutdown                     |

> **Note:** These endpoints are used internally by the system or for Ollama client compatibility. They are not typically called by end users.

>>>>>>> Stashed changes
=======
| Koncový bod | Metoda | Popis |
| ------------------------------ | ------- | ---------------------- |
| `/api/auth/login` | PŘÍSPĚVEK | Přihlásit |
| `/api/auth/logout` | PŘÍSPĚVEK | Odhlášení |
| `/api/settings/require-login` | GET/PUT | Přepnout vyžadováno přihlášení |### Provider Management

| Koncový bod | Metoda | Popis |
| ----------------------------- | ---------------- | ------------------------- |
| `/api/poskytovatelé` | ZÍSKAT/POSLAT | Seznam / vytvoření poskytovatelů |
| `/api/providers/[id]` | GET/PUT/DELETE | Spravovat poskytovatele |
| `/api/providers/[id]/test` | PŘÍSPĚVEK | Test připojení poskytovatele |
| `/api/providers/[id]/models` | ZÍSKEJTE | Seznam modelů poskytovatelů |
| `/api/providers/validate` | PŘÍSPĚVEK | Ověřit konfiguraci poskytovatele |
| `/api/nodes-poskytovatele*` | Různé | Správa uzlu poskytovatele |
| `/api/provider-models` | ZÍSKAT/POSLAT/SMAZAT | Vlastní modely |### OAuth Flows

| Koncový bod | Metoda | Popis |
| --------------------------------- | ------- | ------------------------ |
| `/api/oauth/[poskytovatel]/[akce]` | Různé | OAuth specifické pro poskytovatele |### Routing & Config

| Koncový bod | Metoda | Popis |
| ---------------------- | -------- | ------------------------------ |
| `/api/models/alias` | ZÍSKAT/POSLAT | Modelové aliasy |
| `/api/models/catalog` | ZÍSKEJTE | Všechny modely podle poskytovatele + typu |
| `/api/combos*` | Různé | Combo management |
| `/api/keys*` | Různé | Správa klíčů API |
| `/api/pricing` | ZÍSKEJTE | Cena modelu |### Usage & Analytics

| Koncový bod | Metoda | Popis |
| ---------------------------- | ------ | --------------------- |
| `/api/usage/history` | ZÍSKEJTE | Historie použití |
| `/api/usage/logs` | ZÍSKEJTE | Protokoly použití |
| `/api/usage/request-logs` | ZÍSKEJTE | Protokoly na úrovni požadavku |
| `/api/usage/[connectionId]` | ZÍSKEJTE | Využití na připojení |### Settings

| Koncový bod | Metoda | Popis |
| -------------------------------- | ------------- | ----------------------- |
| `/api/settings` | GET/PUT/PATCH | Obecná nastavení |
| `/api/settings/proxy` | GET/PUT | Konfigurace síťového proxy |
| `/api/settings/proxy/test` | PŘÍSPĚVEK | Test připojení proxy |
| `/api/settings/ip-filter` | GET/PUT | Seznam povolených/blokovaných IP adres |
| `/api/settings/thinking-budget` | GET/PUT | Rozpočet s odůvodněním |
| `/api/settings/system-prompt` | GET/PUT | Globální systémová výzva |### Monitoring

| Koncový bod | Metoda | Popis |
| ------------------------- | ---------- | --------------------------------------------------------------------------------------------------
| `/api/sessions` | ZÍSKEJTE | Sledování aktivní relace |
| `/api/rate-limits` | ZÍSKEJTE | Limity sazeb za účet |
| `/api/monitoring/health` | ZÍSKEJTE | Kontrola stavu + souhrn poskytovatele (`catalogCount`, `configuredCount`, `activeCount`, `monitoredCount`) |
| `/api/cache/stats` | ZÍSKAT/SMAZAT | Statistiky mezipaměti / vymazat |### Backup & Export/Import

| Koncový bod | Metoda | Popis |
| ---------------------------- | ------ | ---------------------------------------- |
| `/api/db-backups` | ZÍSKEJTE | Seznam dostupných záloh |
| `/api/db-backups` | PUT | Vytvořte ruční zálohu |
| `/api/db-backups` | PŘÍSPĚVEK | Obnovit z konkrétní zálohy |
| `/api/db-backups/export` | ZÍSKEJTE | Stáhnout databázi jako soubor .sqlite |
| `/api/db-backups/import` | PŘÍSPĚVEK | Nahrajte soubor .sqlite pro nahrazení databáze |
| `/api/db-backups/exportAll` | ZÍSKEJTE | Stáhnout plnou zálohu jako archiv .tar.gz |### Cloud Sync

| Koncový bod | Metoda | Popis |
| ----------------------- | ------- | ---------------------- |
| `/api/sync/cloud` | Různé | Operace synchronizace s cloudem |
| `/api/sync/initialize` | PŘÍSPĚVEK | Inicializovat synchronizaci |
| `/api/cloud/*` | Různé | Správa cloudu |### Tunnels

| Koncový bod | Metoda | Popis |
| --------------------------- | ------ | ------------------------------------------------------------------------ |
| `/api/tunely/cloudflared` | ZÍSKEJTE | Přečtěte si stav instalace/běhu Cloudflare Quick Tunnel pro řídicí panel |
| `/api/tunely/cloudflared` | PŘÍSPĚVEK | Povolit nebo zakázat Cloudflare Quick Tunnel (`action=enable/disable`) |### CLI Tools

| Koncový bod | Metoda | Popis |
| ---------------------------------- | ------ | -------------------- |
| `/api/cli-tools/claude-settings` | ZÍSKEJTE | Claude CLI status |
| `/api/cli-tools/codex-settings` | ZÍSKEJTE | Status Codex CLI |
| `/api/cli-tools/droid-settings` | ZÍSKEJTE | Stav CLI Droid |
| `/api/cli-tools/openclaw-settings` | ZÍSKEJTE | Stav OpenClaw CLI |
| `/api/cli-tools/runtime/[toolId]` | ZÍSKEJTE | Generic CLI runtime |

Odpovědi CLI zahrnují: `installed`, `runnable`, `command`, `commandPath`, `runtimeMode`, ,reason`.### ACP Agents

| Koncový bod | Metoda | Popis |
| ------------------ | ------ | --------------------------------------------------------- |
| `/api/acp/agents` | ZÍSKEJTE | Vypsat všechny detekované agenty (vestavěné + vlastní) se stavem |
| `/api/acp/agents` | PŘÍSPĚVEK | Přidejte vlastního agenta nebo obnovte mezipaměť detekce |
| `/api/acp/agents` | VYMAZAT | Odeberte vlastního agenta pomocí parametru dotazu `id` |

Odpověď GET zahrnuje „agenty[]“ (id, název, binární, verze, nainstalovaný, protokol, isCustom) a „summary“ (celkem, nainstalovaný, nenalezen, vestavěný, vlastní).### Resilience & Rate Limits

| Koncový bod | Metoda | Popis |
| ------------------------ | --------- | -------------------------------- |
| `/api/resilience` | GET/PATCH | Získat/aktualizovat profily odolnosti |
| `/api/resilience/reset` | PŘÍSPĚVEK | Resetujte jističe |
| `/api/rate-limits` | ZÍSKEJTE | Stav limitu sazby na účet |
| `/api/rate-limit` | ZÍSKEJTE | Konfigurace globálního limitu rychlosti |### Evals

| Koncový bod | Metoda | Popis |
| ------------ | -------- | ---------------------------------- |
| `/api/evals` | ZÍSKAT/POSLAT | Vypsat vyhodnocovací sady / spustit vyhodnocení |### Policies

| Koncový bod | Metoda | Popis |
| ---------------- | ---------------- | ------------------------ |
| `/api/policies` | ZÍSKAT/POSLAT/SMAZAT | Spravovat zásady směrování |### Compliance

| Koncový bod | Metoda | Popis |
| ---------------------------- | ------ | ------------------------------ |
| `/api/compliance/audit-log` | ZÍSKEJTE | Záznam auditu shody (poslední N) |### v1beta (Gemini-Compatible)

| Koncový bod | Metoda | Popis |
| --------------------------- | ------ | ---------------------------------- |
| `/v1beta/modely` | ZÍSKEJTE | Seznam modelů ve formátu Gemini |
| `/v1beta/modely/{...cesta}` | PŘÍSPĚVEK | Koncový bod Gemini `generateContent` |

Tyto koncové body odrážejí formát API Gemini pro klienty, kteří očekávají nativní kompatibilitu Gemini SDK.### Internal / System APIs

| Koncový bod | Metoda | Popis |
| ---------------- | ------ | ----------------------------------------------------- |
| `/api/init` | ZÍSKEJTE | Kontrola inicializace aplikace (používá se při prvním spuštění) |
| `/api/tags` | ZÍSKEJTE | Modelové značky kompatibilní s Ollama (pro klienty Ollama) |
| `/api/restart` | PŘÍSPĚVEK | Spustit elegantní restart serveru |
| `/api/shutdown` | PŘÍSPĚVEK | Spustit elegantní vypnutí serveru |

>**Poznámka:**Tyto koncové body jsou používány interně systémem nebo kvůli kompatibilitě klienta Ollama. Obvykle je nevolají koncoví uživatelé.---

## Audio Transcription

```bash
POST /v1/audio/transcriptions
Authorization: Bearer your-api-key
Content-Type: multipart/form-data
````

Přepisujte zvukové soubory pomocí Deepgram nebo AssemblyAI.

**Žádost:**```bash
curl -X POST http://localhost:20128/v1/audio/transcriptions \
 -H "Authorization: Bearer your-api-key" \
 -F "file=@recording.mp3" \
 -F "model=deepgram/nova-3"

````

**Odpověď:**```json
{
  "text": "Hello, this is the transcribed audio content.",
  "task": "transcribe",
  "language": "en",
  "duration": 12.5
}
````

**Podporovaní poskytovatelé:**`deepgram/nova-3`, `assemblyai/best`.

**Podporované formáty:**`mp3`, `wav`, `m4a`, `flac`, `ogg`, `webm`.---

## Ollama Compatibility

Pro klienty, kteří používají formát Ollama's API:```bash

# Chat endpoint (Ollama format)

POST /v1/api/chat

# Model listing (Ollama format)

GET /api/tags

````

Požadavky jsou automaticky překládány mezi Ollama a interními formáty.---

## Telemetry

```bash
# Get latency telemetry summary (p50/p95/p99 per provider)
GET /api/telemetry/summary
````

**Odpověď:**```json
{
"providers": {
"claudeCode": { "p50": 245, "p95": 890, "p99": 1200, "count": 150 },
"github": { "p50": 180, "p95": 620, "p99": 950, "count": 320 }
}
}

````

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
````

>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
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

<<<<<<< HEAD
=======
>>>>>>> Stashed changes
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
## Request Processing

1. Klient odešle požadavek na `/v1/*`
2. Volání obslužného programu trasy `handleChat`, `handleEmbedding`, `handleAudioTranscription` nebo `handleImageGeneration`
3. Model je vyřešen (přímý poskytovatel/model nebo alias/kombo)
4. Přihlašovací údaje vybrané z místní databáze s filtrováním dostupnosti účtu
5. Pro chat: `handleChatCore` — detekce formátu, překlad, kontrola mezipaměti, kontrola idempotence
6. Exekutor poskytovatele odešle upstream požadavek
7. Odpověď přeložená zpět do formátu klienta (chat) nebo vrácena tak, jak je (vložení/obrázky/audio)
8. Zaznamenáno používání/protokolování
9. Záložní funkce se vztahuje na chyby podle pravidel kombinace

Úplný odkaz na architekturu: [`ARCHITECTURE.md`](ARCHITECTURE.md)---

## Authentication

- Trasy řídicího panelu (`/dashboard/*`) používají soubor cookie `auth_token`
- Přihlášení používá uložený hash hesla; přechod na `INITIAL_PASSWORD`
- `requireLogin` přepínatelné přes `/api/settings/require-login`
- trasy `/v1/*` volitelně vyžadují klíč rozhraní API nosiče, když je `REQUIRE_API_KEY=true`
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
