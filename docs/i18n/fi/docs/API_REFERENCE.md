<<<<<<< HEAD
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

=======
# API Reference (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/API_REFERENCE.md) · 🇪🇸 [es](../../es/docs/API_REFERENCE.md) · 🇫🇷 [fr](../../fr/docs/API_REFERENCE.md) · 🇩🇪 [de](../../de/docs/API_REFERENCE.md) · 🇮🇹 [it](../../it/docs/API_REFERENCE.md) · 🇷🇺 [ru](../../ru/docs/API_REFERENCE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/API_REFERENCE.md) · 🇯🇵 [ja](../../ja/docs/API_REFERENCE.md) · 🇰🇷 [ko](../../ko/docs/API_REFERENCE.md) · 🇸🇦 [ar](../../ar/docs/API_REFERENCE.md) · 🇮🇳 [hi](../../hi/docs/API_REFERENCE.md) · 🇮🇳 [in](../../in/docs/API_REFERENCE.md) · 🇹🇭 [th](../../th/docs/API_REFERENCE.md) · 🇻🇳 [vi](../../vi/docs/API_REFERENCE.md) · 🇮🇩 [id](../../id/docs/API_REFERENCE.md) · 🇲🇾 [ms](../../ms/docs/API_REFERENCE.md) · 🇳🇱 [nl](../../nl/docs/API_REFERENCE.md) · 🇵🇱 [pl](../../pl/docs/API_REFERENCE.md) · 🇸🇪 [sv](../../sv/docs/API_REFERENCE.md) · 🇳🇴 [no](../../no/docs/API_REFERENCE.md) · 🇩🇰 [da](../../da/docs/API_REFERENCE.md) · 🇫🇮 [fi](../../fi/docs/API_REFERENCE.md) · 🇵🇹 [pt](../../pt/docs/API_REFERENCE.md) · 🇷🇴 [ro](../../ro/docs/API_REFERENCE.md) · 🇭🇺 [hu](../../hu/docs/API_REFERENCE.md) · 🇧🇬 [bg](../../bg/docs/API_REFERENCE.md) · 🇸🇰 [sk](../../sk/docs/API_REFERENCE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/API_REFERENCE.md) · 🇮🇱 [he](../../he/docs/API_REFERENCE.md) · 🇵🇭 [phi](../../phi/docs/API_REFERENCE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/API_REFERENCE.md) · 🇨🇿 [cs](../../cs/docs/API_REFERENCE.md) · 🇹🇷 [tr](../../tr/docs/API_REFERENCE.md)

---

Täydellinen viite kaikille OmniRoute API -päätepisteille.---

## Table of Contents

- [Chat Completions](#chat-completions)
- [Upotukset](#upotukset)
- [Image Generation](#image-generation)
- [Listamallit](#list-models)
- [Yhteensopivuuspäätepisteet](#compatibility-endpoints)
- [Semanttinen välimuisti](#semantic-cache)
- [Käyttöpaneeli ja hallinta](#dashboard--hallinta)
- [Pyynnön käsittely](#pyynnön käsittely)
- [Todennus](#todennus)---

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

| Otsikko                  | Suunta  | Kuvaus                                                    |
| ------------------------ | ------- | --------------------------------------------------------- | --------------------------------- |
| "X-OmniRoute-No-Cache"   | Pyyntö  | Aseta "true" ohittaaksesi välimuistin                     |
| "X-OmniRoute-Progress"   | Pyyntö  | Aseta arvoon "true" edistymistapahtumille                 |
| "X-Session-Id"           | Pyyntö  | Kiinnittyvä istuntoavain ulkoisen istunnon affiniteettiin |
| "x_session_id"           | Pyyntö  | Myös alaviivamuunnos hyväksytään (suora HTTP)             |
| "Idempotency-Key"        | Pyyntö  | Dedup-avain (5s ikkuna)                                   |
| "X-Request-Id"           | Pyyntö  | Vaihtoehtoinen dedup-avain                                |
| "X-OmniRoute-Cache"      | Vastaus | "HIT" tai "MISS" (ei suoratoistoa)                        |
| `X-OmniRoute-Idempotent` | Vastaus | "tosi", jos kopiointi poistetaan                          |
| "X-OmniRoute-Progress"   | Vastaus | "käytössä", jos edistymisen seuranta on                   |
| "X-OmniRoute-Session-Id" | Vastaus | OmniRoute                                                 | :n käyttämä tehokas istuntotunnus |

> Nginx-huomautus: jos luotat alaviiva-otsikoihin (esimerkiksi `x_session_id`), ota käyttöön `underscores_in_headers on;`.---

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

Saatavilla olevat toimittajat: Nebius, OpenAI, Mistral, Together AI, Fireworks, NVIDIA.```bash

# List all embedding models

GET /v1/embeddings

````

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
````

Saatavilla olevat toimittajat: OpenAI (DALL-E), xAI (Grok Image), Together AI (FLUX), Fireworks AI.```bash

# List all image models

GET /v1/images/generations

````

---

## List Models

```bash
GET /v1/models
Authorization: Bearer your-api-key

→ Returns all chat, embedding, and image models + combos in OpenAI format
````

---

## Compatibility Endpoints

| Menetelmä | Polku                       | Muoto                        |
| --------- | --------------------------- | ---------------------------- | ----------------------------- |
| POST      | "/v1/chat/completions"      | OpenAI                       |
| POST      | `/v1/messages'              | Antrooppinen                 |
| POST      | "/v1/responses"             | OpenAI-vastaukset            |
| POST      | "/v1/embeddings"            | OpenAI                       |
| POST      | "/v1/images/generations"    | OpenAI                       |
| HANKI     | "/v1/mallit"                | OpenAI                       |
| POST      | `/v1/messages/count_tokens' | Antrooppinen                 |
| HANKI     | "/v1beta/models"            | Kaksoset                     |
| POST      | `/v1beta/models/{...polku}` | Kaksoset generoivat sisältöä |
| POST      | `/v1/api/chat'              | Ollama                       | ### Dedicated Provider Routes |

```bash
POST /v1/providers/{provider}/chat/completions
POST /v1/providers/{provider}/embeddings
POST /v1/providers/{provider}/images/generations
```

Palveluntarjoajan etuliite lisätään automaattisesti, jos se puuttuu. Yhteensopimattomat mallit palauttavat "400".---

## Semantic Cache

```bash
# Get cache stats
GET /api/cache/stats

# Clear all caches
DELETE /api/cache/stats
```

Vastausesimerkki:```json
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

---

## Dashboard & Management

### Authentication

| Päätepiste | Menetelmä | Kuvaus |
| ------------------------------ | ------- | ---------------------- |
| "/api/auth/login" | POST | Kirjaudu |
| "/api/auth/logout" | POST | Kirjaudu ulos |
| `/api/settings/require-login' | GET/PUT | Vaihda sisäänkirjautuminen vaaditaan |### Provider Management

| Päätepiste | Menetelmä | Kuvaus |
| ----------------------------- | ---------------- | ------------------------- |
| "/api/providers" | HANKI/LÄHETÄ | Luettelo / luo palveluntarjoajat |
| "/api/providers/[id]" | GET/PUT/DELETE | Hallinnoi palveluntarjoajaa |
| "/api/providers/[id]/test" | POST | Testaa palveluntarjoajan yhteyttä |
| "/api/providers/[id]/models" | HANKI | Luettelo tarjoajan mallit |
| "/api/providers/validate" | POST | Tarkista palveluntarjoajan konfiguraatio |
| `/api/provider-nodes*` | Erilaisia ​​| Palveluntarjoajan solmuhallinta |
| "/api/provider-models" | HANKI/LÄHETÄ/POISTA | Räätälöidyt mallit |### OAuth Flows

| Päätepiste | Menetelmä | Kuvaus |
| --------------------------------- | ------- | ------------------------ |
| `/api/oauth/[palveluntarjoaja]/[toiminto] | Erilaisia ​​| Palveluntarjoajakohtainen OAuth |### Routing & Config

| Päätepiste | Menetelmä | Kuvaus |
| ---------------------- | -------- | ------------------------------ |
| "/api/models/alias" | HANKI/LÄHETÄ | Mallialiakset |
| "/api/models/catalog" | HANKI | Kaikki mallit toimittajan + tyypin mukaan |
| `/api/combos*` | Erilaisia ​​| Yhdistelmähallinta |
| `/api/keys*` | Erilaisia ​​| API-avainten hallinta |
| "/api/hinnoittelu" | HANKI | Mallin hinnoittelu |### Usage & Analytics

| Päätepiste | Menetelmä | Kuvaus |
| ---------------------------- | ------ | --------------------- |
| `/api/usage/history` | HANKI | Käyttöhistoria |
| `/api/usage/logs' | HANKI | Käyttölokit |
| `/api/usage/request-logs' | HANKI | Pyyntötason lokit |
| `/api/usage/[connectionId]` | HANKI | Yhteyskohtainen käyttö |### Settings

| Päätepiste | Menetelmä | Kuvaus |
| -------------------------------- | ------------- | ----------------------- |
| "/api/settings" | GET/PUT/PATCH | Yleiset asetukset |
| `/api/settings/proxy` | GET/PUT | Verkon välityspalvelimen asetukset |
| "/api/settings/proxy/test" | POST | Testaa välityspalvelinyhteyttä |
| `/api/settings/ip-filter` | GET/PUT | IP-sallitut/estolistat |
| `/api/settings/thinking-budget` | GET/PUT | Perustelujen merkkibudjetti |
| `/api/settings/system-prompt` | GET/PUT | Globaali järjestelmäkehote |### Monitoring

| Päätepiste | Menetelmä | Kuvaus |
| ------------------------- | ----------- | ------------------------------------------------------------------------------------------------- |
| "/api/sessions" | HANKI | Aktiivinen istunnon seuranta |
| "/api/rate-limits" | HANKI | Tilikohtaiset korkorajat |
| "/api/seuranta/terveys" | HANKI | Terveystarkastus + palveluntarjoajan yhteenveto (`catalogCount`, `configuredCount`, `activeCount`, `monitoredCount`) |
| "/api/cache/stats" | HANKI/POISTA | Välimuistitilastot / tyhjennä |### Backup & Export/Import

| Päätepiste | Menetelmä | Kuvaus |
| ---------------------------- | ------ | ---------------------------------------- |
| `/api/db-backups` | HANKI | Luettelo käytettävissä olevista varmuuskopioista |
| `/api/db-backups` | PUT | Luo manuaalinen varmuuskopio |
| `/api/db-backups` | POST | Palauta tietystä varmuuskopiosta |
| `/api/db-backups/export` | HANKI | Lataa tietokanta .sqlite-tiedostona |
| `/api/db-backups/import` | POST | Lataa .sqlite-tiedosto korvataksesi tietokannan |
| `/api/db-backups/exportAll` | HANKI | Lataa koko varmuuskopio .tar.gz-arkistona |### Cloud Sync

| Päätepiste | Menetelmä | Kuvaus |
| ----------------------- | ------- | ---------------------- |
| "/api/sync/cloud" | Erilaisia ​​| Pilvisynkronointitoiminnot |
| "/api/sync/initialize" | POST | Alusta synkronointi |
| `/api/pilvi/*` | Erilaisia ​​| Pilvihallinta |### Tunnels

| Päätepiste | Menetelmä | Kuvaus |
| --------------------------- | ------ | ------------------------------------------------------------------------ |
| "/api/tunnels/cloudflared" | HANKI | Lue Cloudflare Quick Tunnel -asennuksen/ajonaikaisen tilan tila kojelaudalle |
| "/api/tunnels/cloudflared" | POST | Ota Cloudflare Quick Tunnel käyttöön tai poista se käytöstä (`action=enable/disable`) |### CLI Tools

| Päätepiste | Menetelmä | Kuvaus |
| ----------------------------------- | ------ | -------------------- |
| `/api/cli-tools/claude-settings' | HANKI | Claude CLI tila |
| `/api/cli-tools/codex-settings' | HANKI | Codex CLI -tila |
| "/api/cli-tools/droid-settings" | HANKI | Droidin CLI-tila |
| "/api/cli-tools/openclaw-settings" | HANKI | OpenClaw CLI tila |
| `/api/cli-tools/runtime/[toolId] | HANKI | Yleinen CLI-ajoaika |

CLI-vastaukset sisältävät: "installed", "runnable", "command", "commandPath", "runtimeMode", "syy".### ACP Agents

| Päätepiste | Menetelmä | Kuvaus |
| ------------------ | ------ | --------------------------------------------------------- |
| "/api/acp/agents" | HANKI | Listaa kaikki havaitut agentit (sisäänrakennettu + mukautettu) tilalla |
| "/api/acp/agents" | POST | Lisää mukautettu agentti tai päivitä tunnistusvälimuisti |
| "/api/acp/agents" | POISTA | Poista mukautettu agentti "id"-kyselyparametrilla |

GET-vastaus sisältää "agentit[]" (tunnus, nimi, binaari, versio, asennettu, protokolla, isCustom) ja "yhteenveto" (yhteensä, asennettu, notFound, sisäänrakennettu, mukautettu).### Resilience & Rate Limits

| Päätepiste | Menetelmä | Kuvaus |
| ------------------------ | --------- | -------------------------------- |
| "/api/resilience" | HANKI/PATCH | Hanki/päivitä joustavuusprofiilit |
| "/api/resilience/reset" | POST | Nollaa katkaisijat |
| "/api/rate-limits" | HANKI | Tilikohtaisen koron rajan tila |
| "/api/rate-limit" | HANKI | Yleisen nopeusrajan määritys |### Evals

| Päätepiste | Menetelmä | Kuvaus |
| ------------ | -------- | ---------------------------------- |
| "/api/evals" | HANKI/LÄHETÄ | Listaa eval-sviitit / suorita arviointi |### Policies

| Päätepiste | Menetelmä | Kuvaus |
| ---------------- | ---------------- | ------------------------ |
| "/api/policies" | HANKI/LÄHETÄ/POISTA | Hallitse reitityskäytäntöjä |### Compliance

| Päätepiste | Menetelmä | Kuvaus |
| ---------------------------- | ------ | ------------------------------ |
| "/api/compliance/audit-log" | HANKI | Vaatimustenmukaisuuden tarkastusloki (viimeinen N) |### v1beta (Gemini-Compatible)

| Päätepiste | Menetelmä | Kuvaus |
| --------------------------- | ------ | ---------------------------------- |
| "/v1beta/models" | HANKI | Listaa mallit Gemini-muodossa |
| `/v1beta/models/{...polku}` | POST | Gemini "generateContent" -päätepiste |

Nämä päätepisteet heijastavat Geminin API-muotoa asiakkaille, jotka odottavat natiivi Gemini SDK -yhteensopivuutta.### Internal / System APIs

| Päätepiste | Menetelmä | Kuvaus |
| ---------------- | ------ | ----------------------------------------------------- |
| `/api/init` | HANKI | Sovelluksen alustuksen tarkistus (käytetty ensimmäisellä kerralla) |
| "/api/tags" | HANKI | Ollama-yhteensopivat mallitunnisteet (Ollama-asiakkaille) |
| `/api/restart' | POST | Käynnistä siro palvelimen uudelleenkäynnistys |
| `/api/shutdown' | POST | Laukaise siro palvelimen sammutus |

>**Huomaa:**Näitä päätepisteitä käytetään sisäisesti järjestelmässä tai Ollama-asiakasyhteensopivuuden vuoksi. Loppukäyttäjät eivät yleensä soita niihin.---

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

Literoi äänitiedostot Deepgramilla tai AssemblyAI:lla.

**Pyytää:**```bash
curl -X POST http://localhost:20128/v1/audio/transcriptions \
 -H "Authorization: Bearer your-api-key" \
 -F "file=@recording.mp3" \
 -F "model=deepgram/nova-3"

````

**Vastaus:**```json
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

**Tuetut palveluntarjoajat:**"deepgram/nova-3", "assemblyai/best".

**Tuetut muodot:**"mp3", "wav", "m4a", "flac", "ogg", "webm".---

## Ollama Compatibility

Asiakkaille, jotka käyttävät Ollaman API-muotoa:```bash

# Chat endpoint (Ollama format)

POST /v1/api/chat

# Model listing (Ollama format)

GET /api/tags

````

Pyynnöt käännetään automaattisesti Ollaman ja sisäisten muotojen välillä.---
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

**Vastaus:**```json
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

1. Asiakas lähettää pyynnön osoitteeseen `/v1/*`
2. Reitinkäsittelijä kutsuu "handleChat", "handleEmbedding", "handleAudioTranscription" tai "handleImageGeneration"
3. Malli on ratkaistu (suora toimittaja/malli tai alias/yhdistelmä)
4. Tunnustiedot on valittu paikallisesta tietokannasta tilin saatavuussuodatuksella
5. Chatille: "handleChatCore" — muodon tunnistus, käännös, välimuistin tarkistus, idempotenssin tarkistus
6. Palveluntarjoajan toteuttaja lähettää alkupään pyynnön
7. Vastaus käännetty takaisin asiakasmuotoon (chat) tai palautettu sellaisenaan (upotukset/kuvat/ääni)
8. Käyttö/loki kirjattu
9. Virheet koskevat yhdistelmäsääntöjä

Koko arkkitehtuuriviite: [`ARCHITECTURE.md`](ARCHITECTURE.md)---

## Authentication

- Hallintapaneelin reitit (`/dashboard/*`) käyttävät auth_token-evästettä
- Kirjautuminen käyttää tallennettua salasanahajautusta; varaa 'INITIAL_PASSWORD'
- `requireLogin` vaihdettavissa kohdassa `/api/settings/require-login`
- `/v1/*` reitit vaativat valinnaisesti Bearer API -avaimen, kun `REQUIRE_API_KEY=true`
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
