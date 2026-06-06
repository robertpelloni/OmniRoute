# API Reference (Italiano)

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

Riferimento completo per tutti gli endpoint API OmniRoute.---

## Table of Contents

- [Completamenti chat](#completamenti-chat)
- [Incorporamenti](#incorporamenti)
- [Generazione di immagini](#generazione di immagini)
- [Elenco modelli](#elenco-modelli)
- [Endpoint di compatibilità](#endpoint di compatibilità)
- [Cache semantica](#cache-semantica)
- [Dashboard e gestione](#dashboard--gestione)
- [Elaborazione della richiesta](#request-processing)
- [Autenticazione](#autenticazione)---
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
| Intestazione              | Direzione | Descrizione                                                    |
| ------------------------- | --------- | -------------------------------------------------------------- |
| "X-OmniRoute-No-Cache"    | Richiedi  | Imposta su "true" per ignorare la cache                        |
| `X-OmniRoute-Progress`    | Richiedi  | Impostato su "true" per gli eventi di avanzamento              |
| "ID sessione X"           | Richiedi  | Chiave di sessione permanente per affinità di sessione esterna |
| `x_session_id`            | Richiedi  | Accettata anche la variante underscore (HTTP diretto)          |
| "Chiave di idempotenza"   | Richiedi  | Chiave di deduplicazione (finestra 5s)                         |
| "ID richiesta X"          | Richiedi  | Chiave di deduplicazione alternativa                           |
| `X-OmniRoute-Cache`       | Risposta  | "HIT" o "MISS" (non streaming)                                 |
| `X-OmniRoute-Idempotente` | Risposta  | `true` se deduplicato                                          |
| `X-OmniRoute-Progress`    | Risposta  | "abilitato" se il monitoraggio dell'avanzamento è attivo       |
| `X-OmniRoute-ID sessione` | Risposta  | ID sessione effettivo utilizzato da OmniRoute                  |

> Nota Nginx: se ti affidi alle intestazioni underscore (ad esempio `x_session_id`), abilita `underscores_in_headers on;`.---
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
Fornitori disponibili: Nebius, OpenAI, Mistral, Together AI, Fireworks, NVIDIA.```bash

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

Fornitori disponibili: OpenAI (DALL-E), xAI (Grok Image), Together AI (FLUX), Fireworks AI.```bash

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
| Metodo  | Percorso                       | Formato                 |
| ------- | ------------------------------ | ----------------------- | ----------------------------- |
| POST    | `/v1/chat/completamenti`       | OpenAI                  |
| POST    | `/v1/messaggi`                 | Antropico               |
| POST    | `/v1/risposte`                 | Risposte OpenAI         |
| POST    | `/v1/embedding`                | OpenAI                  |
| POST    | `/v1/immagini/generazioni`     | OpenAI                  |
| OTTIENI | `/v1/modelli`                  | OpenAI                  |
| POST    | `/v1/messages/count_tokens`    | Antropico               |
| OTTIENI | `/v1beta/modelli`              | Gemelli                 |
| POST    | `/v1beta/models/{...percorso}` | Gemini genera contenuto |
| POST    | `/v1/api/chat`                 | Ollama                  | ### Dedicated Provider Routes |
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
Se mancante, il prefisso del provider viene aggiunto automaticamente. I modelli non corrispondenti restituiscono "400".---
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
Esempio di risposta:```json
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
| Punto finale | Metodo | Descrizione |
| ----------------------- | ------- | --------------------- |
| `/api/auth/login` | POST | Accedi |
| `/api/auth/logout` | POST | Esci |
| `/api/settings/require-login` | OTTIENI/METTI | Attiva/disattiva il login richiesto |### Provider Management

| Punto finale | Metodo | Descrizione |
| ---------------------- | --------------- | ------------------------ |
| `/api/provider` | OTTIENI/POSTA | Elenca/crea fornitori |
| `/api/provider/[id]` | OTTIENI/INSERISCI/ELIMINA | Gestisci un fornitore |
| `/api/providers/[id]/test` | POST | Testare la connessione al provider |
| `/api/provider/[id]/models` | OTTIENI | Elenco modelli provider |
| `/api/provider/validate` | POST | Convalida la configurazione del provider |
| `/api/provider-nodes*` | Vari | Gestione nodo provider |
| `/api/provider-models` | OTTIENI/INVIA/ELIMINA | Modelli personalizzati |### OAuth Flows

| Punto finale | Metodo | Descrizione |
| -------------------------------- | ------- | ----------------------- |
| `/api/oauth/[provider]/[azione]` | Vari | OAuth specifico del provider |### Routing & Config

| Punto finale | Metodo | Descrizione |
| --------------------- | -------- | ----------------------- |
| `/api/modelli/alias` | OTTIENI/POSTA | Alias ​​del modello |
| `/api/modelli/catalogo` | OTTIENI | Tutti i modelli per fornitore + tipo |
| `/api/combo*` | Vari | Gestione combinata |
| `/api/keys*` | Vari | Gestione delle chiavi API |
| `/api/prezzi` | OTTIENI | Prezzo del modello |### Usage & Analytics

| Punto finale | Metodo | Description          |
| --------------------- | ------ | -------------------- |
| `/api/utilizzo/storia` | OTTIENI | Usage history        |
| `/api/utilizzo/logs` | OTTIENI | Usage logs           |
| `/api/usage/request-logs` | OTTIENI | Request-level logs   |
| `/api/usage/[connectionId]` | OTTIENI | Per-connection usage |### Settings

| Punto finale | Metodo | Descrizione |
| ------------------------------- | ------------- | ---------------------- |
| `/api/impostazioni` | OTTIENI/INSERISCI/PATCH | Impostazioni generali |
| `/api/settings/proxy` | OTTIENI/METTI | Configurazione proxy di rete |
| `/api/settings/proxy/test` | POST | Testare la connessione proxy |
| `/api/settings/ip-filter` | OTTIENI/METTI | Lista consentita/lista bloccata IP |
| `/api/settings/thinking-budget` | OTTIENI/METTI | Ragionamento gettone bilancio |
| `/api/settings/prompt-di-sistema` | OTTIENI/METTI | Prompt del sistema globale |### Monitoring

| Punto finale | Metodo | Descrizione |
| ------------------------ | ---------- | --------------------------------------------------------------------------------------------------- |
| `/api/sessions` | OTTIENI | Monitoraggio della sessione attiva |
| `/api/rate-limits` | OTTIENI | Limiti di tasso per conto |
| `/api/monitoraggio/salute` | OTTIENI | Controllo dello stato + riepilogo del fornitore (`catalogCount`, `configeredCount`, `activeCount`, `monitoredCount`) |
| `/api/cache/stats` | OTTIENI/ELIMINA | Statistiche cache / cancella |### Backup & Export/Import

| Punto finale | Metodo | Descrizione |
| --------------------- | ------ | --------------------------------------- |
| `/api/db-backup` | OTTIENI | Elenca i backup disponibili |
| `/api/db-backup` | METTERE | Crea un backup manuale |
| `/api/db-backup` | POST | Ripristina da un backup specifico |
| `/api/db-backups/export` | OTTIENI | Scarica il database come file .sqlite |
| `/api/db-backups/import` | POST | Carica il file .sqlite per sostituire il database |
| `/api/db-backups/exportAll` | OTTIENI | Scarica il backup completo come archivio .tar.gz |### Cloud Sync

| Punto finale | Metodo | Descrizione |
| ---------------------- | ------- | --------------------- |
| `/api/sync/cloud` | Vari | Operazioni di sincronizzazione nel cloud |
| `/api/sync/initialize` | POST | Inizializza sincronizzazione |
| `/api/cloud/*` | Vari | Gestione del cloud |### Tunnels

| Punto finale | Metodo | Descrizione |
| -------------------------- | ------ | ----------------------------------------------------------------------- |
| `/api/tunnels/cloudflared` | OTTIENI | Leggi lo stato di installazione/runtime di Cloudflare Quick Tunnel per il dashboard |
| `/api/tunnels/cloudflared` | POST | Abilita o disabilita il Cloudflare Quick Tunnel (`action=enable/disable`) |### CLI Tools

| Punto finale | Metodo | Descrizione |
| ---------------------------------- | ------ | ------------------- |
| `/api/cli-tools/claude-settings` | OTTIENI | Stato CLI di Claude |
| `/api/cli-tools/codex-settings` | OTTIENI | Stato CLI del Codice |
| `/api/cli-tools/droid-settings` | OTTIENI | Stato CLI Droid |
| `/api/cli-tools/openclaw-settings` | OTTIENI | Stato della CLI di OpenClaw |
| `/api/cli-tools/runtime/[toolId]` | OTTIENI | Runtime CLI generico |

Le risposte della CLI includono: "installed", "runnable", "command", "commandPath", "runtimeMode", "reason".### ACP Agents

| Punto finale | Metodo | Descrizione |
| ----------------- | ------ | -------------------------------------------------------- |
| `/api/acp/agenti` | OTTIENI | Elenca tutti gli agenti rilevati (integrati + personalizzati) con stato |
| `/api/acp/agenti` | POST | Aggiungi agente personalizzato o aggiorna la cache di rilevamento |
| `/api/acp/agenti` | ELIMINA | Remove a custom agent by `id` query param                |

La risposta GET include "agenti[]" (id, nome, binario, versione, installato, protocollo, isCustom) e "riepilogo" (totale, installato, notFound, builtIn, personalizzato).### Resilience & Rate Limits

| Punto finale | Metodo | Descrizione |
| ----------------------- | --------- | ------------------------------- |
| `/api/resilienza` | OTTIENI/PATCH | Ottieni/aggiorna profili di resilienza |
| `/api/resilienza/reset` | POST | Ripristinare gli interruttori automatici |
| `/api/rate-limits` | OTTIENI | Stato limite tariffa per account |
| `/api/limite di velocità` | OTTIENI | Configurazione del limite tariffario globale |### Evals

| Punto finale | Metodo | Descrizione |
| ------------ | -------- | --------------------------------- |
| `/api/evals` | OTTIENI/POSTA | Elenca le suite di valutazione / esegui la valutazione |### Policies

| Punto finale | Metodo | Descrizione |
| --------------- | --------------- | ----------------------- |
| `/api/policies` | OTTIENI/INVIA/ELIMINA | Gestire le politiche di routing |### Compliance

| Punto finale | Metodo | Descrizione |
| --------------------- | ------ | ----------------------- |
| `/api/compliance/audit-log` | OTTIENI | Registro di controllo della conformità (ultimi N) |### v1beta (Gemini-Compatible)

| Punto finale | Metodo | Descrizione |
| -------------------------- | ------ | --------------------------------- |
| `/v1beta/modelli` | OTTIENI | Elenco modelli in formato Gemini |
| `/v1beta/models/{...percorso}` | POST | Endpoint Gemini `generateContent` |

Questi endpoint rispecchiano il formato API di Gemini per i client che prevedono la compatibilità nativa dell'SDK Gemini.### Internal / System APIs

| Punto finale | Metodo | Descrizione |
| --------------- | ------ | ---------------------------------------------------- |
| `/api/init` | OTTIENI | Controllo dell'inizializzazione dell'applicazione (utilizzato alla prima esecuzione) |
| `/api/tag` | OTTIENI | Tag modello compatibili con Ollama (per client Ollama) |
| `/api/riavvia` | POST | Attiva il riavvio corretto del server |
| `/api/spegnimento` | POST | Attiva l'arresto regolare del server |

>**Nota:**questi endpoint vengono utilizzati internamente dal sistema o per la compatibilità del client Ollama. In genere non vengono chiamati dagli utenti finali.---

## Audio Transcription

```bash
POST /v1/audio/transcriptions
Authorization: Bearer your-api-key
Content-Type: multipart/form-data
````

Trascrivi file audio utilizzando Deepgram o AssemblyAI.

**Richiesta:**```bash
curl -X POST http://localhost:20128/v1/audio/transcriptions \
 -H "Authorization: Bearer your-api-key" \
 -F "file=@recording.mp3" \
 -F "model=deepgram/nova-3"

````

**Risposta:**```json
{
  "text": "Hello, this is the transcribed audio content.",
  "task": "transcribe",
  "language": "en",
  "duration": 12.5
}
````

**Fornitori supportati:**`deepgram/nova-3`, `assemblyai/best`.

**Formati supportati:**`mp3`, `wav`, `m4a`, `flac`, `ogg`, `webm`.---

## Ollama Compatibility

Per i clienti che utilizzano il formato API di Ollama:```bash

# Chat endpoint (Ollama format)

POST /v1/api/chat

# Model listing (Ollama format)

GET /api/tags

````

Le richieste vengono tradotte automaticamente tra Ollama e formati interni.---

## Telemetry

```bash
# Get latency telemetry summary (p50/p95/p99 per provider)
GET /api/telemetry/summary
````

**Risposta:**```json
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

1. Il client invia la richiesta a "/v1/\*".
2. Il gestore del percorso chiama "handleChat", "handleEmbedding", "handleAudioTranscription" o "handleImageGeneration"
3. Il modello è risolto (provider/modello diretto o alias/combo)
4. Credenziali selezionate dal DB locale con filtro sulla disponibilità dell'account
5. Per la chat: `handleChatCore`: rilevamento del formato, traduzione, controllo della cache, controllo dell'idempotenza
6. L'esecutore del provider invia una richiesta upstream
7. Risposta ricondotta nel formato client (chat) o restituita così com'è (incorporamenti/immagini/audio)
8. Utilizzo/registrazione registrati
9. Il fallback si applica agli errori secondo le regole della combo

Riferimento completo all'architettura: [`ARCHITECTURE.md`](ARCHITECTURE.md)---

## Authentication

- I percorsi del dashboard (`/dashboard/*`) utilizzano il cookie `auth_token`
- L'accesso utilizza l'hash della password salvata; fallback su "INITIAL_PASSWORD".
- "requireLogin" attivabile tramite "/api/settings/require-login"
- Le rotte `/v1/*` richiedono facoltativamente la chiave API Bearer quando `REQUIRE_API_KEY=true`
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
