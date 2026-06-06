# API Reference (Bahasa Melayu)

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

Rujukan lengkap untuk semua titik akhir API OmniRoute.---

## Table of Contents

- [Sembang Selesai](#sembang-selesai)
- [Pembenaman](#pembenaman)
- [Penjanaan Imej](#penjanaan imej)
- [Senarai Model](#senarai-model)
- [Titik Tamat Keserasian](#titik akhir keserasian)
- [Cache Semantik](#semantic-cache)
- [Papan Pemuka & Pengurusan](#papan pemuka--pengurusan)
- [Pemprosesan Permintaan](#pemprosesan-permintaan)
- [Pengesahan](#authentication)---
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
| Pengepala                | Arah         | Penerangan                                       |
| ------------------------ | ------------ | ------------------------------------------------ |
| `X-OmniRoute-No-Cache`   | Permintaan   | Tetapkan kepada `true` untuk memintas cache      |
| `X-OmniRoute-Progress`   | Permintaan   | Tetapkan kepada `true` untuk acara kemajuan      |
| `Id-Sesi-X`              | Permintaan   | Kunci sesi melekit untuk perkaitan sesi luaran   |
| `x_session_id`           | Permintaan   | Varian garis bawah juga diterima (HTTP langsung) |
| `Kunci Idempotensi`      | Permintaan   | Kekunci dedup (tetingkap 5s)                     |
| `Id-Permintaan-X`        | Permintaan   | Kunci pelupusan alternatif                       |
| `X-OmniRoute-Cache`      | Maklum balas | `HIT` atau `MISS` (bukan penstriman)             |
| `X-OmniRoute-Idempotent` | Maklum balas | `benar` jika dinyahduplikasi                     |
| `X-OmniRoute-Progress`   | Maklum balas | `didayakan` jika penjejakan kemajuan pada        |
| `Id-Sesi-X-OmniRoute`    | Maklum balas | ID sesi berkesan digunakan oleh OmniRoute        |

> Nota Nginx: jika anda bergantung pada pengepala underscore (contohnya `x_session_id`), dayakan `underscores_in_headers on;`.---
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
Pembekal yang tersedia: Nebius, OpenAI, Mistral, Together AI, Fireworks, NVIDIA.```bash

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

Pembekal tersedia: OpenAI (DALL-E), xAI (Grok Image), Together AI (FLUX), Fireworks AI.```bash

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
| Kaedah   | Laluan                     | Format                  |
| -------- | -------------------------- | ----------------------- | ----------------------------- |
| POS      | `/v1/sembang/penyelesaian` | OpenAI                  |
| POS      | `/v1/mesej`                | Antroppik               |
| POS      | `/v1/respons`              | Respons OpenAI          |
| POS      | `/v1/benam`                | OpenAI                  |
| POS      | `/v1/imej/generasi`        | OpenAI                  |
| DAPATKAN | `/v1/model`                | OpenAI                  |
| POS      | `/v1/message/count_token`  | Antroppik               |
| DAPATKAN | `/v1beta/model`            | Gemini                  |
| POS      | `/v1beta/models/{...path}` | Gemini menjanaKandungan |
| POS      | `/v1/api/sembang`          | Ollama                  | ### Dedicated Provider Routes |
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
Awalan pembekal ditambah secara automatik jika tiada. Model yang tidak sepadan mengembalikan `400`.---
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
Contoh jawapan:```json
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
| Titik akhir | Kaedah | Penerangan |
| ---------------------------- | ------- | ---------------------- |
| `/api/auth/log masuk` | POS | Log masuk |
| `/api/auth/logout` | POS | Log keluar |
| `/api/setting/require-login` | DAPATKAN/LETAK | Togol log masuk diperlukan |### Provider Management

| Titik akhir | Kaedah | Penerangan |
| ---------------------------- | --------------- | ------------------------- |
| `/api/penyedia` | DAPATKAN/POS | Senaraikan / buat pembekal |
| `/api/penyedia/[id]` | DAPATKAN/LETAK/PADAM | Urus pembekal |
| `/api/penyedia/[id]/ujian` | POS | Sambungan pembekal ujian |
| `/api/providers/[id]/models` | DAPATKAN | Senaraikan model pembekal |
| `/api/providers/validate` | POS | Sahkan konfigurasi pembekal |
| `/api/provider-nodes*` | Pelbagai | Pengurusan nod pembekal |
| `/api/provider-models` | DAPATKAN/POST/PADAM | Model tersuai |### OAuth Flows

| Titik akhir | Kaedah | Penerangan |
| -------------------------------- | ------- | ------------------------ |
| `/api/oauth/[penyedia]/[tindakan]` | Pelbagai | OAuth khusus pembekal |### Routing & Config

| Titik akhir | Kaedah | Penerangan |
| ---------------------- | -------- | ---------------------------- |
| `/api/models/alias` | DAPATKAN/POS | Alias ​​model |
| `/api/models/catalog` | DAPATKAN | Semua model mengikut pembekal + jenis |
| `/api/combos*` | Pelbagai | Pengurusan kombo |
| `/api/keys*` | Pelbagai | Pengurusan kunci API |
| `/api/pricing` | DAPATKAN | Harga model |### Usage & Analytics

| Titik akhir | Kaedah | Penerangan |
| --------------------------- | ------ | -------------------- |
| `/api/usage/history` | DAPATKAN | Sejarah penggunaan |
| `/api/usage/logs` | DAPATKAN | Log penggunaan |
| `/api/usage/request-logs` | DAPATKAN | Log peringkat permintaan |
| `/api/usage/[connectionId]` | DAPATKAN | Penggunaan setiap sambungan |### Settings

| Titik akhir | Kaedah | Penerangan |
| ------------------------------- | ------------- | ----------------------- |
| `/api/setting` | DAPATKAN/LETAK/PATCH | Tetapan umum |
| `/api/setting/proksi` | DAPATKAN/LETAK | Konfigurasi proksi rangkaian |
| `/api/settings/proxy/test` | POS | Uji sambungan proksi |
| `/api/setting/penapis-ip` | DAPATKAN/LETAK | Senarai dibenarkan/senarai sekatan IP |
| `/api/setting/thinking-budget` | DAPATKAN/LETAK | Belanjawan token penaakulan |
| `/api/setting/system-prompt` | DAPATKAN/LETAK | Gesaan sistem global |### Monitoring

| Titik akhir | Kaedah | Penerangan |
| ------------------------- | ---------- | --------------------------------------------------------------------------------------------------- |
| `/api/sessions` | DAPATKAN | Penjejakan sesi aktif |
| `/api/rate-limits` | DAPATKAN | Had kadar setiap akaun |
| `/api/pemantauan/kesihatan` | DAPATKAN | Semakan kesihatan + ringkasan pembekal (`catalogCount`, `configuredCount`, `activeCount`, `monitoredCount`) |
| `/api/cache/stats` | DAPATKAN/PADAM | Statistik cache / kosongkan |### Backup & Export/Import

| Titik akhir | Kaedah | Penerangan |
| --------------------------- | ------ | ---------------------------------------------------- |
| `/api/db-backups` | DAPATKAN | Senaraikan sandaran yang tersedia |
| `/api/db-backups` | LETAK | Buat sandaran manual |
| `/api/db-backups` | POS | Pulihkan daripada sandaran khusus |
| `/api/db-backups/eksport` | DAPATKAN | Muat turun pangkalan data sebagai fail .sqlite |
| `/api/db-backups/import` | POS | Muat naik fail .sqlite untuk menggantikan pangkalan data |
| `/api/db-backups/exportAll` | DAPATKAN | Muat turun sandaran penuh sebagai arkib .tar.gz |### Cloud Sync

| Titik akhir | Kaedah | Penerangan |
| ----------------------- | ------- | ---------------------- |
| `/api/sync/cloud` | Pelbagai | Operasi penyegerakan awan |
| `/api/sync/initialize` | POS | Mulakan penyegerakan |
| `/api/cloud/*` | Pelbagai | Pengurusan awan |### Tunnels

| Titik akhir | Kaedah | Penerangan |
| -------------------------- | ------ | ---------------------------------------------------------------------- |
| `/api/tunnels/cloudflared` | DAPATKAN | Baca status pemasangan/masa jalan Cloudflare Quick Tunnel untuk papan pemuka |
| `/api/tunnels/cloudflared` | POS | Dayakan atau lumpuhkan Cloudflare Quick Tunnel (`action=enable/disable`) |### CLI Tools

| Titik akhir | Kaedah | Penerangan |
| ---------------------------------- | ------ | ------------------- |
| `/api/cli-tools/claude-settings` | DAPATKAN | Status CLI Claude |
| `/api/cli-tools/codex-settings` | DAPATKAN | Status Codex CLI |
| `/api/cli-tools/droid-settings` | DAPATKAN | Status Droid CLI |
| `/api/cli-tools/openclaw-settings` | DAPATKAN | Status OpenClaw CLI |
| `/api/cli-tools/runtime/[toolId]` | DAPATKAN | Masa jalan CLI generik |

Respons CLI termasuk: `dipasang`, `boleh dijalankan`, `perintah`, `commandPath`, `runtimeMode`, `sebab`.### ACP Agents

| Titik akhir | Kaedah | Penerangan |
| ----------------- | ------ | -------------------------------------------------------- |
| `/api/acp/agen` | DAPATKAN | Senaraikan semua ejen yang dikesan (terbina dalam + tersuai) dengan status |
| `/api/acp/agen` | POS | Tambahkan ejen tersuai atau muat semula cache pengesanan |
| `/api/acp/agen` | PADAM | Alih keluar ejen tersuai mengikut param pertanyaan `id` |

GET respons termasuk `ejen[]` (id, nama, perduaan, versi, dipasang, protokol, isCustom) dan `ringkasan` (jumlah, dipasang, notFound, terbina Dalam, tersuai).### Resilience & Rate Limits

| Titik akhir | Kaedah | Penerangan |
| ------------------------ | --------- | ------------------------------- |
| `/api/ketahanan` | DAPATKAN/PATCH | Dapatkan/kemas kini profil ketahanan |
| `/api/resilience/reset` | POS | Tetapkan semula pemutus litar |
| `/api/rate-limits` | DAPATKAN | Status had kadar setiap akaun |
| `/api/rate-limit` | DAPATKAN | Konfigurasi had kadar global |### Evals

| Titik akhir | Kaedah | Penerangan |
| ------------ | -------- | --------------------------------- |
| `/api/evals` | DAPATKAN/POS | Senaraikan suite eval / penilaian jalankan |### Policies

| Titik akhir | Kaedah | Penerangan |
| --------------- | --------------- | ------------------------ |
| `/api/dasar` | DAPATKAN/POST/PADAM | Urus dasar penghalaan |### Compliance

| Titik akhir | Kaedah | Penerangan |
| --------------------------- | ------ | ---------------------------- |
| `/api/compliance/audit-log` | DAPATKAN | Log audit pematuhan (N terakhir) |### v1beta (Gemini-Compatible)

| Titik akhir | Kaedah | Penerangan |
| -------------------------- | ------ | --------------------------------- |
| `/v1beta/model` | DAPATKAN | Senaraikan model dalam format Gemini |
| `/v1beta/models/{...path}` | POS | Gemini `generateContent` titik akhir |

Titik akhir ini mencerminkan format API Gemini untuk pelanggan yang mengharapkan keserasian SDK Gemini asli.### Internal / System APIs

| Titik akhir | Kaedah | Penerangan |
| --------------- | ------ | ---------------------------------------------------- |
| `/api/init` | DAPATKAN | Semakan permulaan aplikasi (digunakan pada larian pertama) |
| `/api/tags` | DAPATKAN | Tag model yang serasi dengan Ollama (untuk pelanggan Ollama) |
| `/api/restart` | POS | Pencetus pelayan anggun mulakan semula |
| `/api/shutdown` | POS | Cetuskan penutupan pelayan yang anggun |

>**Nota:**Titik akhir ini digunakan secara dalaman oleh sistem atau untuk keserasian pelanggan Ollama. Mereka biasanya tidak dipanggil oleh pengguna akhir.---

## Audio Transcription

```bash
POST /v1/audio/transcriptions
Authorization: Bearer your-api-key
Content-Type: multipart/form-data
````

Transkripsikan fail audio menggunakan Deepgram atau AssemblyAI.

**Permintaan:**```bash
curl -X POST http://localhost:20128/v1/audio/transcriptions \
 -H "Authorization: Bearer your-api-key" \
 -F "file=@recording.mp3" \
 -F "model=deepgram/nova-3"

````

**Jawapan:**```json
{
  "text": "Hello, this is the transcribed audio content.",
  "task": "transcribe",
  "language": "en",
  "duration": 12.5
}
````

**Pembekal yang disokong:**`deepgram/nova-3`, `assemblyai/best`.

**Format yang disokong:**`mp3`, `wav`, `m4a`, `flac`, `ogg`, `webm`.---

## Ollama Compatibility

Untuk pelanggan yang menggunakan format API Ollama:```bash

# Chat endpoint (Ollama format)

POST /v1/api/chat

# Model listing (Ollama format)

GET /api/tags

````

Permintaan diterjemahkan secara automatik antara Ollama dan format dalaman.---

## Telemetry

```bash
# Get latency telemetry summary (p50/p95/p99 per provider)
GET /api/telemetry/summary
````

**Jawapan:**```json
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

1. Pelanggan menghantar permintaan kepada `/v1/*`
2. Pengendali laluan memanggil `handleChat`, `handleEmbedding`, `handleAudioTranscription` atau `handleImageGeneration`
3. Model telah diselesaikan (pembekal langsung/model atau alias/kombo)
4. Bukti kelayakan dipilih daripada DB tempatan dengan penapisan ketersediaan akaun
5. Untuk sembang: `handleChatCore` — pengesanan format, terjemahan, semakan cache, semakan mati pucuk
6. Pelaksana pembekal menghantar permintaan huluan
7. Respons diterjemahkan kembali kepada format pelanggan (sembang) atau dikembalikan seperti sedia ada (benam/imej/audio)
8. Penggunaan / pembalakan direkodkan
9. Fallback terpakai pada ralat mengikut peraturan kombo

Rujukan seni bina penuh: [`ARCHITECTURE.md`](ARCHITECTURE.md)---

## Authentication

- Laluan papan pemuka (`/papan pemuka/*`) menggunakan kuki `auth_token`
- Log masuk menggunakan cincang kata laluan yang disimpan; sandarkan kepada `INITIAL_PASSWORD`
- `requireLogin` boleh togol melalui `/api/settings/require-login`
- Laluan `/v1/*` secara pilihan memerlukan kunci API Pembawa apabila `REQUIRE_API_KEY=true`
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
