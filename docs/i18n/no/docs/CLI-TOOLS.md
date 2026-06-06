<<<<<<< HEAD
=======
<| **Qwen Code**      | `qwen`        | `qwen`     | custom     | npm            |
========
>>>>>>>> Stashed changes:docs/i18n/no/docs/CLI-TOOLS.md
>>>>>>> Stashed changes

### CLI fingerprint sync (Agents + Settings)

`/dashboard/agents` and `Settings > CLI Fingerprint` use `src/shared/constants/cliCompatProviders.ts`.
This keeps provider IDs aligned with CLI cards and legacy IDs.

| CLI ID                                                                                               | Fingerprint Provider ID |
| ---------------------------------------------------------------------------------------------------- | ----------------------- |
| `kilo`                                                                                               | `kilocode`              |
| `copilot`                                                                                            | `github`                |
| `claude` / `codex` / `antigravity` / `kiro` / `cursor` / `cline` / `opencode` / `droid` / `openclaw` | same ID                 |

Legacy IDs still accepted for compatibility: `copilot`, `kimi-coding`, `qwen`.

---

## Step 1 — Get an OmniRoute API Key

1. Open the OmniRoute dashboard → **API Manager** (`/dashboard/api-manager`)
2. Click **Create API Key**
3. Give it a name (e.g. `cli-tools`) and select all permissions
4. Copy the key — you'll need it for every CLI below

> Your key looks like: `sk-xxxxxxxxxxxxxxxx-xxxxxxxxx`

---

## Step 2 — Install CLI Tools

All npm-based tools require Node.js 18+:

```bash
# Claude Code (Anthropic)
npm install -g @anthropic-ai/claude-code

# OpenAI Codex
npm install -g @openai/codex

# OpenCode
npm install -g opencode-ai

# Cline
npm install -g cline

# KiloCode
npm install -g kilocode

# Kiro CLI (Amazon — requires curl + unzip)
apt-get install -y unzip   # on Debian/Ubuntu
curl -fsSL https://cli.kiro.dev/install | bash
export PATH="$HOME/.local/bin:$PATH"   # add to ~/.bashrc
```

**Verify:**

```bash
=======
# CLI Tools Setup Guide — OmniRoute (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/CLI-TOOLS.md) · 🇪🇸 [es](../../es/docs/CLI-TOOLS.md) · 🇫🇷 [fr](../../fr/docs/CLI-TOOLS.md) · 🇩🇪 [de](../../de/docs/CLI-TOOLS.md) · 🇮🇹 [it](../../it/docs/CLI-TOOLS.md) · 🇷🇺 [ru](../../ru/docs/CLI-TOOLS.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/CLI-TOOLS.md) · 🇯🇵 [ja](../../ja/docs/CLI-TOOLS.md) · 🇰🇷 [ko](../../ko/docs/CLI-TOOLS.md) · 🇸🇦 [ar](../../ar/docs/CLI-TOOLS.md) · 🇮🇳 [hi](../../hi/docs/CLI-TOOLS.md) · 🇮🇳 [in](../../in/docs/CLI-TOOLS.md) · 🇹🇭 [th](../../th/docs/CLI-TOOLS.md) · 🇻🇳 [vi](../../vi/docs/CLI-TOOLS.md) · 🇮🇩 [id](../../id/docs/CLI-TOOLS.md) · 🇲🇾 [ms](../../ms/docs/CLI-TOOLS.md) · 🇳🇱 [nl](../../nl/docs/CLI-TOOLS.md) · 🇵🇱 [pl](../../pl/docs/CLI-TOOLS.md) · 🇸🇪 [sv](../../sv/docs/CLI-TOOLS.md) · 🇳🇴 [no](../../no/docs/CLI-TOOLS.md) · 🇩🇰 [da](../../da/docs/CLI-TOOLS.md) · 🇫🇮 [fi](../../fi/docs/CLI-TOOLS.md) · 🇵🇹 [pt](../../pt/docs/CLI-TOOLS.md) · 🇷🇴 [ro](../../ro/docs/CLI-TOOLS.md) · 🇭🇺 [hu](../../hu/docs/CLI-TOOLS.md) · 🇧🇬 [bg](../../bg/docs/CLI-TOOLS.md) · 🇸🇰 [sk](../../sk/docs/CLI-TOOLS.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/CLI-TOOLS.md) · 🇮🇱 [he](../../he/docs/CLI-TOOLS.md) · 🇵🇭 [phi](../../phi/docs/CLI-TOOLS.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/CLI-TOOLS.md) · 🇨🇿 [cs](../../cs/docs/CLI-TOOLS.md) · 🇹🇷 [tr](../../tr/docs/CLI-TOOLS.md)

---

Denne veiledningen forklarer hvordan du installerer og konfigurerer alle støttede AI-kodings-CLI-verktøy
å bruke**OmniRoute**som den enhetlige backend, noe som gir deg sentralisert nøkkeladministrasjon,
kostnadssporing, modellbytte og forespørselslogging på tvers av hvert verktøy.---

## How It Works

```
Claude / Codex / OpenCode / Cline / KiloCode / Continue / Kiro / Cursor / Copilot
           │
           ▼  (all point to OmniRoute)
    http://YOUR_SERVER:20128/v1
           │
           ▼  (OmniRoute routes to the right provider)
    Anthropic / OpenAI / Gemini / DeepSeek / Groq / Mistral / ...
```

**Fordeler:**

- Én API-nøkkel for å administrere alle verktøy
- Kostnadssporing på tvers av alle CLI-er i dashbordet
- Modellbytte uten å rekonfigurere hvert verktøy
- Fungerer lokalt og på eksterne servere (VPS)---

## Supported Tools (Dashboard Source of Truth)

Dashboard-kortene i `/dashboard/cli-tools` er generert fra `src/shared/constants/cliTools.ts`.
Gjeldende liste (v3.0.0-rc.16):

| Verktøy             | ID                | Kommando   | Oppsettmodus | Installasjonsmetode |
| ------------------- | ----------------- | ---------- | ------------ | ------------------- | -------------------------------------------- |
| **Claude-kode**     | `claude`          | `claude`   | env          | npm                 |
| **OpenAI Codex**    | `kodeks`          | `kodeks`   | tilpasset    | npm                 |
| **Factory Droid**   | `droid`           | `droid`    | tilpasset    | buntet/CLI          |
| **OpenClaw**        | `openclaw`        | `openclaw` | tilpasset    | buntet/CLI          |
| **Markør**          | `markør`          | app        | guide        | desktop app         |
| **Cline**           | `cline`           | `cline`    | tilpasset    | npm                 |
| **Kilokode**        | `kilo`            | `kilokode` | tilpasset    | npm                 |
| **Fortsett**        | `fortsett`        | utvidelse  | guide        | VS-kode             |
| **Antigravitasjon** | `antigravitasjon` | intern     | mitm         | OmniRoute           |
| **GitHub Copilot**  | `copilot`         | utvidelse  | tilpasset    | VS-kode             |
| **OpenCode**        | `opencode`        | `opencode` | guide        | npm                 |
| **Kiro AI**         | `kiro`            | app/cli    | mitm         | desktop/CLI         | ### CLI fingerprint sync (Agents + Settings) |

`/dashboard/agents` og `Settings > CLI Fingerprint` bruker `src/shared/constants/cliCompatProviders.ts`.
Dette holder leverandør-ID-er på linje med CLI-kort og eldre ID-er.

| CLI ID                                                                                               | Fingeravtrykkleverandør-ID |
| ---------------------------------------------------------------------------------------------------- | -------------------------- |
| `kilo`                                                                                               | `kilokode`                 |
| `copilot`                                                                                            | `github`                   |
| `claude` / `codex` / `antigravity` / `kiro` / `cursor` / `cline` / `opencode` / `droid` / `openclaw` | samme ID                   |

Eldre ID-er er fortsatt akseptert for kompatibilitet: "copilot", "kimi-coding", "qwen".---

## Step 1 — Get an OmniRoute API Key

1. Åpne OmniRoute-dashbordet →**API Manager**(`/dashboard/api-manager`)
2. Klikk på**Create API Key**
3. Gi den et navn (f.eks. "cli-tools") og velg alle tillatelser
4. Kopier nøkkelen – du trenger den for hver CLI nedenfor

> Nøkkelen din ser slik ut: `sk-xxxxxxxxxxxxxxxx-xxxxxxxxxx`---

## Step 2 — Install CLI Tools

Alle npm-baserte verktøy krever Node.js 18+:```bash

# Claude Code (Anthropic)

npm install -g @anthropic-ai/claude-code

# OpenAI Codex

npm install -g @openai/codex

# OpenCode

npm install -g opencode-ai

# Cline

npm install -g cline

# KiloCode

npm install -g kilocode

# Kiro CLI (Amazon — requires curl + unzip)

apt-get install -y unzip # on Debian/Ubuntu
curl -fsSL https://cli.kiro.dev/install | bash
export PATH="$HOME/.local/bin:$PATH" # add to ~/.bashrc

````

**Verifisere:**```bash
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
claude --version     # 2.x.x
codex --version      # 0.x.x
opencode --version   # x.x.x
cline --version      # 2.x.x
kilocode --version   # x.x.x (or: kilo --version)
kiro-cli --version   # 1.x.x
<<<<<<< HEAD
```
=======
````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

---

## Step 3 — Set Global Environment Variables

<<<<<<< HEAD
Add to `~/.bashrc` (or `~/.zshrc`), then run `source ~/.bashrc`:

```bash
# OmniRoute Universal Endpoint
=======
Legg til `~/.bashrc` (eller `~/.zshrc`), og kjør deretter `source ~/.bashrc`:```bash

# OmniRoute Universal Endpoint

>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
export OPENAI_BASE_URL="http://localhost:20128/v1"
export OPENAI_API_KEY="sk-your-omniroute-key"
export ANTHROPIC_BASE_URL="http://localhost:20128/v1"
export ANTHROPIC_API_KEY="sk-your-omniroute-key"
export GEMINI_BASE_URL="http://localhost:20128/v1"
export GEMINI_API_KEY="sk-your-omniroute-key"
<<<<<<< HEAD
```

> For a **remote server** replace `localhost:20128` with the server IP or domain,
> e.g. `http://192.168.0.15:20128`.

---
=======

````

> For en**ekstern server**erstatte `localhost:20128` med serverens IP eller domene,
> f.eks. "http://192.168.0.15:20128".---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## Step 4 — Configure Each Tool

### Claude Code

```bash
# Via CLI:
claude config set --global api-base-url http://localhost:20128/v1

# Or create ~/.claude/settings.json:
mkdir -p ~/.claude && cat > ~/.claude/settings.json << EOF
{
  "apiBaseUrl": "http://localhost:20128/v1",
  "apiKey": "sk-your-omniroute-key"
}
EOF
<<<<<<< HEAD
```

**Test:** `claude "say hello"`

---
=======
````

**Test:**`claude "si hei"`---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### OpenAI Codex

```bash
mkdir -p ~/.codex && cat > ~/.codex/config.yaml << EOF
model: auto
apiKey: sk-your-omniroute-key
apiBaseUrl: http://localhost:20128/v1
EOF
```

<<<<<<< HEAD
**Test:** `codex "what is 2+2?"`

---
=======
**Test:**`kodeks "hva er 2+2?"`---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### OpenCode

```bash
mkdir -p ~/.config/opencode && cat > ~/.config/opencode/config.toml << EOF
[provider.openai]
base_url = "http://localhost:20128/v1"
api_key = "sk-your-omniroute-key"
EOF
```

<<<<<<< HEAD
**Test:** `opencode`

---

### Cline (CLI or VS Code)

**CLI mode:**

```bash
mkdir -p ~/.cline/data && cat > ~/.cline/data/globalState.json << EOF
{
  "apiProvider": "openai",
  "openAiBaseUrl": "http://localhost:20128/v1",
  "openAiApiKey": "sk-your-omniroute-key"
}
EOF
```

**VS Code mode:**
Cline extension settings → API Provider: `OpenAI Compatible` → Base URL: `http://localhost:20128/v1`

Or use the OmniRoute dashboard → **CLI Tools → Cline → Apply Config**.

---

### KiloCode (CLI or VS Code)

**CLI mode:**

```bash
kilocode --api-base http://localhost:20128/v1 --api-key sk-your-omniroute-key
```

**VS Code settings:**

```json
{
  "kilo-code.openAiBaseUrl": "http://localhost:20128/v1",
  "kilo-code.apiKey": "sk-your-omniroute-key"
}
```

Or use the OmniRoute dashboard → **CLI Tools → KiloCode → Apply Config**.

---

### Continue (VS Code Extension)

Edit `~/.continue/config.yaml`:

```yaml
=======
**Test:**'opencode'---

### Cline (CLI or VS Code)

**CLI-modus:**```bash
mkdir -p ~/.cline/data && cat > ~/.cline/data/globalState.json << EOF
{
"apiProvider": "openai",
"openAiBaseUrl": "http://localhost:20128/v1",
"openAiApiKey": "sk-your-omniroute-key"
}
EOF

````

**VS-kodemodus:**
Cline-utvidelsesinnstillinger → API-leverandør: `OpenAI-kompatibel` → Base-URL: `http://localhost:20128/v1`

Eller bruk OmniRoute-dashbordet →**CLI Tools → Cline → Apply Config**.---

### KiloCode (CLI or VS Code)

**CLI-modus:**```bash
kilocode --api-base http://localhost:20128/v1 --api-key sk-your-omniroute-key
````

**VS-kodeinnstillinger:**```json
{
"kilo-code.openAiBaseUrl": "http://localhost:20128/v1",
"kilo-code.apiKey": "sk-your-omniroute-key"
}

````

Eller bruk OmniRoute-dashbordet →**CLI Tools → KiloCode → Apply Config**.---

### Continue (VS Code Extension)

Rediger `~/.continue/config.yaml`:```yaml
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
models:
  - name: OmniRoute
    provider: openai
    model: auto
    apiBase: http://localhost:20128/v1
    apiKey: sk-your-omniroute-key
    default: true
<<<<<<< HEAD
```

Restart VS Code after editing.

---
=======
````

Start VS-koden på nytt etter redigering.---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### Kiro CLI (Amazon)

```bash
# Login to your AWS/Kiro account:
kiro-cli login

# The CLI uses its own auth — OmniRoute is not needed as backend for Kiro CLI itself.
# Use kiro-cli alongside OmniRoute for other tools.
kiro-cli status
```

---

<<<<<<< HEAD
### Qwen Code (Alibaba)

Qwen Code supports OpenAI-compatible API endpoints via environment variables or `settings.json`.

**Option 1: Environment variables (`~/.qwen/.env`)**

```bash
mkdir -p ~/.qwen && cat > ~/.qwen/.env << EOF
OPENAI_API_KEY="sk-your-omniroute-key"
OPENAI_BASE_URL="http://localhost:20128/v1"
OPENAI_MODEL="auto"
EOF
```

**Option 2: `settings.json` with model providers**

```json
// ~/.qwen/settings.json
{
  "env": {
    "OPENAI_API_KEY": "sk-your-omniroute-key",
    "OPENAI_BASE_URL": "http://localhost:20128/v1"
  },
  "modelProviders": {
    "openai": [
      {
        "id": "omniroute-default",
        "name": "OmniRoute (Auto)",
        "envKey": "OPENAI_API_KEY",
        "baseUrl": "http://localhost:20128/v1"
      }
    ]
  }
}
```

**Option 3: Inline CLI flags**

```bash
OPENAI_BASE_URL="http://localhost:20128/v1" \
OPENAI_API_KEY="sk-your-omniroute-key" \
OPENAI_MODEL="auto" \
qwen
```

> For a **remote server** replace `localhost:20128` with the server IP or domain.

**Test:** `qwen "say hello"`

### Cursor (Desktop App)

> **Note:** Cursor routes requests through its cloud. For OmniRoute integration,
> enable **Cloud Endpoint** in OmniRoute Settings and use your public domain URL.

Via GUI: **Settings → Models → OpenAI API Key**

- Base URL: `https://your-domain.com/v1`
- API Key: your OmniRoute key

---

## Dashboard Auto-Configuration

The OmniRoute dashboard automates configuration for most tools:

1. Go to `http://localhost:20128/dashboard/cli-tools`
2. Expand any tool card
3. Select your API key from the dropdown
4. Click **Apply Config** (if tool is detected as installed)
5. Or copy the generated config snippet manually

---

## Built-in Agents: Droid & OpenClaw

**Droid** and **OpenClaw** are AI agents built directly into OmniRoute — no installation needed.
They run as internal routes and use OmniRoute's model routing automatically.

- Access: `http://localhost:20128/dashboard/agents`
- Configure: same combos and providers as all other tools
- No API key or CLI install required

---

## Available API Endpoints

| Endpoint                   | Description                   | Use For                     |
| -------------------------- | ----------------------------- | --------------------------- |
| `/v1/chat/completions`     | Standard chat (all providers) | All modern tools            |
| `/v1/responses`            | Responses API (OpenAI format) | Codex, agentic workflows    |
| `/v1/completions`          | Legacy text completions       | Older tools using `prompt:` |
| `/v1/embeddings`           | Text embeddings               | RAG, search                 |
| `/v1/images/generations`   | Image generation              | DALL-E, Flux, etc.          |
| `/v1/audio/speech`         | Text-to-speech                | ElevenLabs, OpenAI TTS      |
| `/v1/audio/transcriptions` | Speech-to-text                | Deepgram, AssemblyAI        |

---


| Error                     | Cause                   | Fix                                        |
| ------------------------- | ----------------------- | ------------------------------------------ |
| `Connection refused`      | OmniRoute not running   | `pm2 start omniroute`                      |
| `401 Unauthorized`        | Wrong API key           | Check in `/dashboard/api-manager`          |
| `No combo configured`     | No active routing combo | Set up in `/dashboard/combos`              |
| `invalid model`           | Model not in catalog    | Use `auto` or check `/dashboard/providers` |
| CLI shows "not installed" | Binary not in PATH      | Check `which <command>`                    |
| `kiro-cli: not found`     | Not in PATH             | `export PATH="$HOME/.local/bin:$PATH"`     |

---
=======
### Cursor (Desktop App)

> **Merk:**Markøren ruter forespørsler gjennom skyen. For OmniRoute-integrasjon,
> aktiver**Cloud Endpoint**i OmniRoute-innstillingene og bruk nettadressen for det offentlige domene.

Via GUI:**Innstillinger → Modeller → OpenAI API Key**

- Base URL: `https://ditt-domene.com/v1`
- API Key: din OmniRoute-nøkkel---

## Dashboard Auto-Configuration

OmniRoute-dashbordet automatiserer konfigurasjonen for de fleste verktøy:

1. Gå til `http://localhost:20128/dashboard/cli-tools`
2. Utvid et hvilket som helst verktøykort
3. Velg din API-nøkkel fra rullegardinmenyen
4. Klikk på**Apply Config**(hvis verktøyet oppdages som installert)
5. Eller kopier den genererte konfigurasjonskodebiten manuelt---

## Built-in Agents: Droid & OpenClaw

**Droid**og**OpenClaw**er AI-agenter innebygd direkte i OmniRoute – ingen installasjon nødvendig.
De kjører som interne ruter og bruker OmniRoutes modellruting automatisk.

- Tilgang: `http://localhost:20128/dashboard/agents`
- Konfigurer: samme kombinasjoner og leverandører som alle andre verktøy
- Ingen API-nøkkel eller CLI-installasjon kreves---

## Available API Endpoints

| Endepunkt                  | Beskrivelse                       | Bruk for                           |
| -------------------------- | --------------------------------- | ---------------------------------- | --- |
| `/v1/chat/fullføringer`    | Standard chat (alle leverandører) | Alle moderne verktøy               |
| `/v1/responses`            | Responses API (OpenAI-format)     | Codex, agentiske arbeidsflyter     |
| `/v1/fullføringer`         | Eldre tekstfullføringer           | Eldre verktøy som bruker "prompt:" |
| `/v1/embeddings`           | Tekstinnbygging                   | RAG, søk                           |
| `/v1/bilder/generasjoner`  | Bildegenerering                   | DALL-E, Flux, etc.                 |
| `/v1/lyd/tale`             | Tekst-til-tale                    | ElevenLabs, OpenAI TTS             |
| `/v1/audio/transcriptions` | Tale-til-tekst                    | Deepgram, AssemblyAI               | --- |

## Feilsøking

| Feil                            | Årsak                         | Fiks                                           |
| ------------------------------- | ----------------------------- | ---------------------------------------------- | --- |
| `Tilkobling nektet`             | OmniRoute kjører ikke         | `pm2 start omniroute`                          |
| `401 Uautorisert`               | Feil API-nøkkel               | Sjekk inn `/dashboard/api-manager`             |
| `Ingen kombinasjon konfigurert` | Ingen aktiv rutingkombinasjon | Sett opp i `/dashboard/combos`                 |
| "ugyldig modell"                | Modell ikke i katalogen       | Bruk `auto` eller sjekk `/dashboard/providers` |
| CLI viser "ikke installert"     | Binær ikke i PATH             | Sjekk `hvilken <kommando>`                     |
| `kiro-cli: ikke funnet`         | Ikke i PATH                   | `eksport PATH="$HOME/.local/bin:$PATH"`        | --- |
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## Quick Setup Script (One Command)

```bash
# Install all CLIs and configure for OmniRoute (replace with your key and server URL)
OMNIROUTE_URL="http://localhost:20128/v1"
OMNIROUTE_KEY="sk-your-omniroute-key"

<<<<<<< HEAD
=======
>>>>>>> Stashed changes
=======
npm install -g @anthropic-ai/claude-code @openai/codex opencode-ai cline kilocode
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

# Kiro CLI
apt-get install -y unzip 2>/dev/null; curl -fsSL https://cli.kiro.dev/install | bash

# Write configs
mkdir -p ~/.claude ~/.codex ~/.config/opencode ~/.continue

cat > ~/.claude/settings.json   <<< "{\"apiBaseUrl\":\"$OMNIROUTE_URL\",\"apiKey\":\"$OMNIROUTE_KEY\"}"
cat > ~/.codex/config.yaml      <<< "model: auto\napiKey: $OMNIROUTE_KEY\napiBaseUrl: $OMNIROUTE_URL"
cat >> ~/.bashrc << EOF
export OPENAI_BASE_URL="$OMNIROUTE_URL"
export OPENAI_API_KEY="$OMNIROUTE_KEY"
export ANTHROPIC_BASE_URL="$OMNIROUTE_URL"
export ANTHROPIC_API_KEY="$OMNIROUTE_KEY"
EOF

source ~/.bashrc
echo "✅ All CLIs installed and configured for OmniRoute"
```
