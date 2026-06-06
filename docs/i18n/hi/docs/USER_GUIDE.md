# User Guide (हिन्दी)

<<<<<<< HEAD
🌐 **Languages:** 🇺🇸 [English](../../../../docs/USER_GUIDE.md) · 🇸🇦 [ar](../../ar/docs/USER_GUIDE.md) · 🇧🇬 [bg](../../bg/docs/USER_GUIDE.md) · 🇧🇩 [bn](../../bn/docs/USER_GUIDE.md) · 🇨🇿 [cs](../../cs/docs/USER_GUIDE.md) · 🇩🇰 [da](../../da/docs/USER_GUIDE.md) · 🇩🇪 [de](../../de/docs/USER_GUIDE.md) · 🇪🇸 [es](../../es/docs/USER_GUIDE.md) · 🇮🇷 [fa](../../fa/docs/USER_GUIDE.md) · 🇫🇮 [fi](../../fi/docs/USER_GUIDE.md) · 🇫🇷 [fr](../../fr/docs/USER_GUIDE.md) · 🇮🇳 [gu](../../gu/docs/USER_GUIDE.md) · 🇮🇱 [he](../../he/docs/USER_GUIDE.md) · 🇮🇳 [hi](../../hi/docs/USER_GUIDE.md) · 🇭🇺 [hu](../../hu/docs/USER_GUIDE.md) · 🇮🇩 [id](../../id/docs/USER_GUIDE.md) · 🇮🇹 [it](../../it/docs/USER_GUIDE.md) · 🇯🇵 [ja](../../ja/docs/USER_GUIDE.md) · 🇰🇷 [ko](../../ko/docs/USER_GUIDE.md) · 🇮🇳 [mr](../../mr/docs/USER_GUIDE.md) · 🇲🇾 [ms](../../ms/docs/USER_GUIDE.md) · 🇳🇱 [nl](../../nl/docs/USER_GUIDE.md) · 🇳🇴 [no](../../no/docs/USER_GUIDE.md) · 🇵🇭 [phi](../../phi/docs/USER_GUIDE.md) · 🇵🇱 [pl](../../pl/docs/USER_GUIDE.md) · 🇵🇹 [pt](../../pt/docs/USER_GUIDE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/USER_GUIDE.md) · 🇷🇴 [ro](../../ro/docs/USER_GUIDE.md) · 🇷🇺 [ru](../../ru/docs/USER_GUIDE.md) · 🇸🇰 [sk](../../sk/docs/USER_GUIDE.md) · 🇸🇪 [sv](../../sv/docs/USER_GUIDE.md) · 🇰🇪 [sw](../../sw/docs/USER_GUIDE.md) · 🇮🇳 [ta](../../ta/docs/USER_GUIDE.md) · 🇮🇳 [te](../../te/docs/USER_GUIDE.md) · 🇹🇭 [th](../../th/docs/USER_GUIDE.md) · 🇹🇷 [tr](../../tr/docs/USER_GUIDE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/USER_GUIDE.md) · 🇵🇰 [ur](../../ur/docs/USER_GUIDE.md) · 🇻🇳 [vi](../../vi/docs/USER_GUIDE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/USER_GUIDE.md)

---

Complete guide for configuring providers, creating combos, integrating CLI tools, and deploying OmniRoute.

---

## Table of Contents

- [Pricing at a Glance](#-pricing-at-a-glance)
- [Use Cases](#-use-cases)
- [Provider Setup](#-provider-setup)
- [CLI Integration](#-cli-integration)
- [Deployment](#-deployment)
- [Available Models](#-available-models)
- [Advanced Features](#-advanced-features)

---

## 💰 Pricing at a Glance

| Tier                | Provider          | Cost        | Quota Reset      | Best For             |
| ------------------- | ----------------- | ----------- | ---------------- | -------------------- |
| **💳 SUBSCRIPTION** | Claude Code (Pro) | $20/mo      | 5h + weekly      | Already subscribed   |
|                     | Codex (Plus/Pro)  | $20-200/mo  | 5h + weekly      | OpenAI users         |
|                     | Gemini CLI        | **FREE**    | 180K/mo + 1K/day | Everyone!            |
|                     | GitHub Copilot    | $10-19/mo   | Monthly          | GitHub users         |
| **🔑 API KEY**      | DeepSeek          | Pay per use | None             | Cheap reasoning      |
|                     | Groq              | Pay per use | None             | Ultra-fast inference |
|                     | xAI (Grok)        | Pay per use | None             | Grok 4 reasoning     |
|                     | Mistral           | Pay per use | None             | EU-hosted models     |
|                     | Perplexity        | Pay per use | None             | Search-augmented     |
|                     | Together AI       | Pay per use | None             | Open-source models   |
|                     | Fireworks AI      | Pay per use | None             | Fast FLUX images     |
|                     | Cerebras          | Pay per use | None             | Wafer-scale speed    |
|                     | Cohere            | Pay per use | None             | Command R+ RAG       |
|                     | NVIDIA NIM        | Pay per use | None             | Enterprise models    |
| **💰 CHEAP**        | GLM-4.7           | $0.6/1M     | Daily 10AM       | Budget backup        |
|                     | MiniMax M2.1      | $0.2/1M     | 5-hour rolling   | Cheapest option      |
|                     | Kimi K2           | $9/mo flat  | 10M tokens/mo    | Predictable cost     |
| **🆓 FREE**         | Qoder             | $0          | Unlimited        | 8 models free        |
|                     | Qwen              | $0          | Unlimited        | 3 models free        |
|                     | Kiro              | $0          | Unlimited        | Claude free          |

**💡 Pro Tip:** Start with Gemini CLI (180K free/month) + Qoder (unlimited free) combo = $0 cost!

---
=======
🌐 **Languages:** 🇺🇸 [English](../../../../docs/USER_GUIDE.md) · 🇪🇸 [es](../../es/docs/USER_GUIDE.md) · 🇫🇷 [fr](../../fr/docs/USER_GUIDE.md) · 🇩🇪 [de](../../de/docs/USER_GUIDE.md) · 🇮🇹 [it](../../it/docs/USER_GUIDE.md) · 🇷🇺 [ru](../../ru/docs/USER_GUIDE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/USER_GUIDE.md) · 🇯🇵 [ja](../../ja/docs/USER_GUIDE.md) · 🇰🇷 [ko](../../ko/docs/USER_GUIDE.md) · 🇸🇦 [ar](../../ar/docs/USER_GUIDE.md) · 🇮🇳 [hi](../../hi/docs/USER_GUIDE.md) · 🇮🇳 [in](../../in/docs/USER_GUIDE.md) · 🇹🇭 [th](../../th/docs/USER_GUIDE.md) · 🇻🇳 [vi](../../vi/docs/USER_GUIDE.md) · 🇮🇩 [id](../../id/docs/USER_GUIDE.md) · 🇲🇾 [ms](../../ms/docs/USER_GUIDE.md) · 🇳🇱 [nl](../../nl/docs/USER_GUIDE.md) · 🇵🇱 [pl](../../pl/docs/USER_GUIDE.md) · 🇸🇪 [sv](../../sv/docs/USER_GUIDE.md) · 🇳🇴 [no](../../no/docs/USER_GUIDE.md) · 🇩🇰 [da](../../da/docs/USER_GUIDE.md) · 🇫🇮 [fi](../../fi/docs/USER_GUIDE.md) · 🇵🇹 [pt](../../pt/docs/USER_GUIDE.md) · 🇷🇴 [ro](../../ro/docs/USER_GUIDE.md) · 🇭🇺 [hu](../../hu/docs/USER_GUIDE.md) · 🇧🇬 [bg](../../bg/docs/USER_GUIDE.md) · 🇸🇰 [sk](../../sk/docs/USER_GUIDE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/USER_GUIDE.md) · 🇮🇱 [he](../../he/docs/USER_GUIDE.md) · 🇵🇭 [phi](../../phi/docs/USER_GUIDE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/USER_GUIDE.md) · 🇨🇿 [cs](../../cs/docs/USER_GUIDE.md) · 🇹🇷 [tr](../../tr/docs/USER_GUIDE.md)

---

प्रदाताओं को कॉन्फ़िगर करने, कॉम्बो बनाने, सीएलआई टूल को एकीकृत करने और ओमनीरूट को तैनात करने के लिए संपूर्ण मार्गदर्शिका।---

## Table of Contents

- [मूल्य निर्धारण एक नजर में](#-मूल्य निर्धारण एक नजर में)
- [उपयोग मामले](#-उपयोग मामले)
- [प्रदाता सेटअप](#-प्रदाता-सेटअप)
- [सीएलआई एकीकरण](#-सीएलआई-एकीकरण)
- [तैनाती](#-तैनाती)
- [उपलब्ध मॉडल](#-उपलब्ध-मॉडल)
- [उन्नत सुविधाएँ](#-उन्नत-सुविधाएँ)---

## 💰 Pricing at a Glance

| टियर              | प्रदाता             | लागत                    | कोटा रीसेट           | के लिए सर्वश्रेष्ठ           |
| ----------------- | ------------------- | ----------------------- | -------------------- | ---------------------------- |
| **💳 सदस्यता**    | क्लाउड कोड (प्रो)   | $20/माह                 | 5 घंटे + साप्ताहिक   | पहले ही सदस्यता ले ली है     |
|                   | कोडेक्स (प्लस/प्रो) | $20-200/महीना           | 5 घंटे + साप्ताहिक   | OpenAI उपयोगकर्ता            |
|                   | जेमिनी सीएलआई       | **मुफ़्त**              | 180K/माह + 1K/दिन    | सब लोग!                      |
|                   | गिटहब कोपायलट       | $10-19/माह              | मासिक                | GitHub users                 |
| **🔑एपीआई कुंजी** | डीपसीक              | प्रति उपयोग भुगतान करें | कोई नहीं             | सस्ता तर्क                   |
|                   | ग्रोक               | प्रति उपयोग भुगतान करें | कोई नहीं             | अल्ट्रा-फास्ट अनुमान         |
|                   | एक्सएआई (ग्रोक)     | प्रति उपयोग भुगतान करें | कोई नहीं             | ग्रोक 4 तर्क                 |
|                   | मिस्ट्रल            | प्रति उपयोग भुगतान करें | कोई नहीं             | ईयू द्वारा होस्ट किए गए मॉडल |
|                   | उलझन                | प्रति उपयोग भुगतान करें | कोई नहीं             | खोज-संवर्धित                 |
|                   | एक साथ एआई          | प्रति उपयोग भुगतान करें | कोई नहीं             | ओपन-सोर्स मॉडल               |
|                   | आतिशबाजी एआई        | प्रति उपयोग भुगतान करें | कोई नहीं             | फास्ट फ्लक्स छवियां          |
|                   | सेरेब्रस            | प्रति उपयोग भुगतान करें | कोई नहीं             | वेफर-स्केल गति               |
|                   | सहभागी              | प्रति उपयोग भुगतान करें | कोई नहीं             | कमांड आर+आरएजी               |
|                   | एनवीडिया एनआईएम     | प्रति उपयोग भुगतान करें | कोई नहीं             | एंटरप्राइज़ मॉडल             |
| **💰सस्ता**       | जीएलएम-4.7          | $0.6/1 मिलियन           | प्रतिदिन सुबह 10 बजे | बजट बैकअप                    |
|                   | मिनीमैक्स एम2.1     | $0.2/1 मिलियन           | 5 घंटे की रोलिंग     | सबसे सस्ता विकल्प            |
|                   | किमी K2             | $9/महीना फ्लैट          | 10एम टोकन/माह        | अनुमानित लागत                |
| **🆓 मुफ़्त**     | कोडर                | $0                      | Unlimited            | 8 मॉडल निःशुल्क              |
|                   | क्वेन               | $0                      | असीमित               | 3 मॉडल मुफ़्त                |
|                   | किरो                | $0                      | असीमित               | क्लाउड मुक्त                 |

**💡प्रो टिप:**जेमिनी सीएलआई (180K मुफ़्त/माह) + कोडर (असीमित मुफ़्त) कॉम्बो = $0 लागत से शुरू करें!---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## 🎯 Use Cases

### Case 1: "I have Claude Pro subscription"

<<<<<<< HEAD
**Problem:** Quota expires unused, rate limits during heavy coding

```
Combo: "maximize-claude"
  1. cc/claude-opus-4-7        (use subscription fully)
  2. glm/glm-4.7               (cheap backup when quota out)
  3. if/kimi-k2-thinking       (free emergency fallback)

Monthly cost: $20 (subscription) + ~$5 (backup) = $25 total
vs. $20 + hitting limits = frustration
```

### Case 2: "I want zero cost"

**Problem:** Can't afford subscriptions, need reliable AI coding

```
=======
**समस्या:**भारी कोडिंग के दौरान कोटा अप्रयुक्त, दर सीमा समाप्त हो जाता है```
Combo: "maximize-claude"

1. cc/claude-opus-4-6 (use subscription fully)
2. glm/glm-4.7 (cheap backup when quota out)
3. if/kimi-k2-thinking (free emergency fallback)

Monthly cost: $20 (subscription) + ~$5 (backup) = $25 total
vs. $20 + hitting limits = frustration

````

### Case 2: "I want zero cost"

**समस्या:**सदस्यताएं वहन नहीं कर सकते, विश्वसनीय एआई कोडिंग की आवश्यकता है```
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
Combo: "free-forever"
  1. gc/gemini-3-flash         (180K free/month)
  2. if/kimi-k2-thinking       (unlimited free)
  3. qw/qwen3-coder-plus       (unlimited free)

Monthly cost: $0
Quality: Production-ready models
<<<<<<< HEAD
```

### Case 3: "I need 24/7 coding, no interruptions"

**Problem:** Deadlines, can't afford downtime

```
Combo: "always-on"
  1. cc/claude-opus-4-7        (best quality)
  2. cx/gpt-5.2-codex          (second subscription)
  3. glm/glm-4.7               (cheap, resets daily)
  4. minimax/MiniMax-M2.1      (cheapest, 5h reset)
  5. if/kimi-k2-thinking       (free unlimited)

Result: 5 layers of fallback = zero downtime
Monthly cost: $20-200 (subscriptions) + $10-20 (backup)
```

### Case 4: "I want FREE AI in OpenClaw"

**Problem:** Need AI assistant in messaging apps, completely free

```
=======
````

### Case 3: "I need 24/7 coding, no interruptions"

**समस्या:**समय सीमा, डाउनटाइम बर्दाश्त नहीं कर सकते```
Combo: "always-on"

1. cc/claude-opus-4-6 (best quality)
2. cx/gpt-5.2-codex (second subscription)
3. glm/glm-4.7 (cheap, resets daily)
4. minimax/MiniMax-M2.1 (cheapest, 5h reset)
5. if/kimi-k2-thinking (free unlimited)

Result: 5 layers of fallback = zero downtime
Monthly cost: $20-200 (subscriptions) + $10-20 (backup)

````

### Case 4: "I want FREE AI in OpenClaw"

**समस्या:**मैसेजिंग ऐप्स में AI सहायक की आवश्यकता है, पूरी तरह से निःशुल्क```
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
Combo: "openclaw-free"
  1. if/glm-4.7                (unlimited free)
  2. if/minimax-m2.1           (unlimited free)
  3. if/kimi-k2-thinking       (unlimited free)

Monthly cost: $0
Access via: WhatsApp, Telegram, Slack, Discord, iMessage, Signal...
<<<<<<< HEAD
```
=======
````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

---

## 📖 Provider Setup

### 🔐 Subscription Providers

#### Claude Code (Pro/Max)

```bash
Dashboard → Providers → Connect Claude Code
→ OAuth login → Auto token refresh
→ 5-hour + weekly quota tracking

Models:
<<<<<<< HEAD
  cc/claude-opus-4-7
=======
  cc/claude-opus-4-6
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  cc/claude-sonnet-4-5-20250929
  cc/claude-haiku-4-5-20251001
```

<<<<<<< HEAD
**Pro Tip:** Use Opus for complex tasks, Sonnet for speed. OmniRoute tracks quota per model!

#### OpenAI Codex (Plus/Pro)
=======
**प्रो टिप:**जटिल कार्यों के लिए ओपस और गति के लिए सॉनेट का उपयोग करें। ओमनीरूट प्रति मॉडल कोटा ट्रैक करता है!#### OpenAI Codex (Plus/Pro)
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

```bash
Dashboard → Providers → Connect Codex
→ OAuth login (port 1455)
→ 5-hour + weekly reset

Models:
  cx/gpt-5.2-codex
  cx/gpt-5.1-codex-max
```

#### Gemini CLI (FREE 180K/month!)

```bash
Dashboard → Providers → Connect Gemini CLI
→ Google OAuth
→ 180K completions/month + 1K/day

Models:
  gc/gemini-3-flash-preview
  gc/gemini-2.5-pro
```

<<<<<<< HEAD
**Best Value:** Huge free tier! Use this before paid tiers.

#### GitHub Copilot
=======
**सर्वोत्तम मूल्य:**विशाल निःशुल्क स्तर! सशुल्क स्तरों से पहले इसका उपयोग करें।#### GitHub Copilot
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

```bash
Dashboard → Providers → Connect GitHub
→ OAuth via GitHub
→ Monthly reset (1st of month)

Models:
  gh/gpt-5
  gh/claude-4.5-sonnet
  gh/gemini-3.1-pro-preview
```

### 💰 Cheap Providers

#### GLM-4.7 (Daily reset, $0.6/1M)

<<<<<<< HEAD
1. Sign up: [Zhipu AI](https://open.bigmodel.cn/)
2. Get API key from Coding Plan
3. Dashboard → Add API Key: Provider: `glm`, API Key: `your-key`

**Use:** `glm/glm-4.7` — **Pro Tip:** Coding Plan offers 3× quota at 1/7 cost! Reset daily 10:00 AM.

#### MiniMax M2.1 (5h reset, $0.20/1M)

1. Sign up: [MiniMax](https://www.minimax.io/)
2. Get API key → Dashboard → Add API Key

**Use:** `minimax/MiniMax-M2.1` — **Pro Tip:** Cheapest option for long context (1M tokens)!

#### Kimi K2 ($9/month flat)

1. Subscribe: [Moonshot AI](https://platform.moonshot.ai/)
2. Get API key → Dashboard → Add API Key

**Use:** `kimi/kimi-latest` — **Pro Tip:** Fixed $9/month for 10M tokens = $0.90/1M effective cost!

### 🆓 FREE Providers
=======
1. साइन अप करें: [झिपु एआई](https://open.bigmodel.cn/)
2. कोडिंग योजना से एपीआई कुंजी प्राप्त करें
3. डैशबोर्ड → एपीआई कुंजी जोड़ें: प्रदाता: `glm`, एपीआई कुंजी: `आपकी-कुंजी`

**उपयोग:**`glm/glm-4.7` -**प्रो टिप:**कोडिंग प्लान 1/7 लागत पर 3× कोटा प्रदान करता है! प्रतिदिन सुबह 10:00 बजे रीसेट करें।#### MiniMax M2.1 (5h reset, $0.20/1M)

1. साइन अप करें: [मिनीमैक्स](https://www.minimax.io/)
2. एपीआई कुंजी प्राप्त करें → डैशबोर्ड → एपीआई कुंजी जोड़ें

**उपयोग करें:**`मिनीमैक्स/मिनीमैक्स-एम2.1` -**प्रो टिप:**लंबे संदर्भ के लिए सबसे सस्ता विकल्प (1एम टोकन)!#### Kimi K2 ($9/month flat)

1. सदस्यता लें: [मूनशॉट एआई](https://platform.moonshot.ai/)
2. एपीआई कुंजी प्राप्त करें → डैशबोर्ड → एपीआई कुंजी जोड़ें

**उपयोग:**`किमी/किमी-नवीनतम` -**प्रो टिप:**10एम टोकन के लिए निश्चित $9/माह = $0.90/1एम प्रभावी लागत!### 🆓 FREE Providers
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

#### Qoder (8 FREE models)

```bash
Dashboard → Connect Qoder → OAuth login → Unlimited usage

Models: if/kimi-k2-thinking, if/qwen3-coder-plus, if/glm-4.7, if/minimax-m2, if/deepseek-r1
```

#### Qwen (3 FREE models)

```bash
Dashboard → Connect Qwen → Device code auth → Unlimited usage

Models: qw/qwen3-coder-plus, qw/qwen3-coder-flash
```

#### Kiro (Claude FREE)

```bash
Dashboard → Connect Kiro → AWS Builder ID or Google/GitHub → Unlimited

Models: kr/claude-sonnet-4.5, kr/claude-haiku-4.5
```

---

## 🎨 Combos

<<<<<<< HEAD
You can reorder combo cards directly in **Dashboard → Combos** by dragging the handle on each card. The order is stored in SQLite and restored on reload.

=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
### Example 1: Maximize Subscription → Cheap Backup

```
Dashboard → Combos → Create New

Name: premium-coding
Models:
<<<<<<< HEAD
  1. cc/claude-opus-4-7 (Subscription primary)
=======
  1. cc/claude-opus-4-6 (Subscription primary)
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  2. glm/glm-4.7 (Cheap backup, $0.6/1M)
  3. minimax/MiniMax-M2.1 (Cheapest fallback, $0.20/1M)

Use in CLI: premium-coding
```

### Example 2: Free-Only (Zero Cost)

```
Name: free-combo
Models:
  1. gc/gemini-3-flash-preview (180K free/month)
  2. if/kimi-k2-thinking (unlimited)
  3. qw/qwen3-coder-plus (unlimited)

Cost: $0 forever!
```

---

## 🔧 CLI Integration

### Cursor IDE

```
Settings → Models → Advanced:
  OpenAI API Base URL: http://localhost:20128/v1
  OpenAI API Key: [from omniroute dashboard]
<<<<<<< HEAD
  Model: cc/claude-opus-4-7
=======
  Model: cc/claude-opus-4-6
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
```

### Claude Code

<<<<<<< HEAD
Edit `~/.claude/config.json`:

```json
{
  "anthropic_api_base": "http://localhost:20128/v1",
  "anthropic_api_key": "your-omniroute-api-key"
}
```
=======
`~/.claude/config.json` संपादित करें:```json
{
"anthropic_api_base": "http://localhost:20128/v1",
"anthropic_api_key": "your-omniroute-api-key"
}

````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### Codex CLI

```bash
export OPENAI_BASE_URL="http://localhost:20128"
export OPENAI_API_KEY="your-omniroute-api-key"
codex "your prompt"
<<<<<<< HEAD
```

### OpenClaw

Edit `~/.openclaw/openclaw.json`:

```json
{
  "agents": {
    "defaults": {
      "model": { "primary": "omniroute/if/glm-4.7" }
    }
  },
  "models": {
    "providers": {
      "omniroute": {
        "baseUrl": "http://localhost:20128/v1",
        "apiKey": "your-omniroute-api-key",
        "api": "openai-completions",
        "models": [{ "id": "if/glm-4.7", "name": "glm-4.7" }]
      }
    }
  }
}
```

**Or use Dashboard:** CLI Tools → OpenClaw → Auto-config

### Cline / Continue / RooCode

```
Provider: OpenAI Compatible
Base URL: http://localhost:20128/v1
API Key: [from dashboard]
Model: cc/claude-opus-4-7
```
=======
````

### OpenClaw

`~/.openclaw/openclaw.json` संपादित करें:```json
{
"agents": {
"defaults": {
"model": { "primary": "omniroute/if/glm-4.7" }
}
},
"models": {
"providers": {
"omniroute": {
"baseUrl": "http://localhost:20128/v1",
"apiKey": "your-omniroute-api-key",
"api": "openai-completions",
"models": [{ "id": "if/glm-4.7", "name": "glm-4.7" }]
}
}
}
}

```

**या डैशबोर्ड का उपयोग करें:**सीएलआई टूल्स → ओपनक्लॉ → ऑटो-कॉन्फ़िगरेशन### Cline / Continue / RooCode

```

Provider: OpenAI Compatible
Base URL: http://localhost:20128/v1
API Key: [from dashboard]
Model: cc/claude-opus-4-6

````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

---

## तैनाती

### Global npm install (Recommended)

```bash
npm install -g omniroute

# Create config directory
mkdir -p ~/.omniroute

# Create .env file (see .env.example)
cp .env.example ~/.omniroute/.env

# Start server
omniroute
# Or with custom port:
omniroute --port 3000
<<<<<<< HEAD
```

The CLI automatically loads `.env` from `~/.omniroute/.env` or `./.env`.

### Uninstalling

When you no longer need OmniRoute, we provide two quick scripts for a clean removal:

| Command                  | Action                                                                              |
| ------------------------ | ----------------------------------------------------------------------------------- |
| `npm run uninstall`      | Removes the system app but **keeps your DB and configurations** in `~/.omniroute`.  |
| `npm run uninstall:full` | Removes the app AND permanently **erases all configurations, keys, and databases**. |

> Note: To run these commands, navigate to the OmniRoute project folder (if you cloned it) and run them. Alternatively, if globally installed, you can simply run `npm uninstall -g omniroute`.

### VPS Deployment
=======
````

सीएलआई स्वचालित रूप से `.env` को `~/.omniroute/.env` या `./.env` से लोड करता है।### VPS Deployment
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

```bash
git clone https://github.com/diegosouzapw/OmniRoute.git
cd OmniRoute && npm install && npm run build

export JWT_SECRET="your-secure-secret-change-this"
export INITIAL_PASSWORD="your-password"
export DATA_DIR="/var/lib/omniroute"
export PORT="20128"
export HOSTNAME="0.0.0.0"
export NODE_ENV="production"
export NEXT_PUBLIC_BASE_URL="http://localhost:20128"
export API_KEY_SECRET="endpoint-proxy-api-key-secret"

npm run start
# Or: pm2 start npm --name omniroute -- start
```

### PM2 Deployment (Low Memory)

<<<<<<< HEAD
For servers with limited RAM, use the memory limit option:

```bash
# With 512MB limit (default)
pm2 start npm --name omniroute -- start

# Or with custom memory limit
OMNIROUTE_MEMORY_MB=512 pm2 start npm --name omniroute -- start

# Or using ecosystem.config.js
pm2 start ecosystem.config.js
```

Create `ecosystem.config.js`:

```javascript
=======
सीमित रैम वाले सर्वर के लिए, मेमोरी सीमा विकल्प का उपयोग करें:```bash

# With 512MB limit (default)

pm2 start npm --name omniroute -- start

# Or with custom memory limit

OMNIROUTE_MEMORY_MB=512 pm2 start npm --name omniroute -- start

# Or using ecosystem.config.js

pm2 start ecosystem.config.js

````

`ecosystem.config.js` बनाएं:```javascript
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
module.exports = {
  apps: [
    {
      name: "omniroute",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        OMNIROUTE_MEMORY_MB: "512",
        JWT_SECRET: "your-secret",
        INITIAL_PASSWORD: "your-password",
      },
      node_args: "--max-old-space-size=512",
      max_memory_restart: "300M",
    },
  ],
};
<<<<<<< HEAD
```
=======
````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### Docker

```bash
# Build image (default = runner-cli with codex/claude/droid preinstalled)
docker build -t omniroute:cli .

# Portable mode (recommended)
docker run -d --name omniroute -p 20128:20128 --env-file ./.env -v omniroute-data:/app/data omniroute:cli
```

<<<<<<< HEAD
For host-integrated mode with CLI binaries, see the Docker section in the main docs.

### Void Linux (xbps-src)

Void Linux users can package and install OmniRoute natively using the `xbps-src` cross-compilation framework. This automates the Node.js standalone build along with the required `better-sqlite3` native bindings.

<details>
<summary><b>View xbps-src template</b></summary>

```bash
# Template file for 'omniroute'
=======
सीएलआई बायनेरिज़ के साथ होस्ट-एकीकृत मोड के लिए, मुख्य दस्तावेज़ में डॉकर अनुभाग देखें।### Void Linux (xbps-src)

शून्य लिनक्स उपयोगकर्ता `xbps-src` क्रॉस-संकलन ढांचे का उपयोग करके मूल रूप से ओमनीरूट को पैकेज और इंस्टॉल कर सकते हैं। यह आवश्यक `better-sqlite3` मूल बाइंडिंग के साथ Node.js स्टैंडअलोन बिल्ड को स्वचालित करता है।

<विवरण>
<सारांश><b>xbps-src टेम्पलेट देखें</b></सारांश>```bash

# Template file for 'omniroute'

>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
pkgname=omniroute
version=3.2.4
revision=1
hostmakedepends="nodejs python3 make"
depends="openssl"
short_desc="Universal AI gateway with smart routing for multiple LLM providers"
maintainer="zenobit <zenobit@disroot.org>"
license="MIT"
homepage="https://github.com/diegosouzapw/OmniRoute"
distfiles="https://github.com/diegosouzapw/OmniRoute/archive/refs/tags/v${version}.tar.gz"
checksum=009400afee90a9f32599d8fe734145cfd84098140b7287990183dde45ae2245b
<<<<<<< HEAD
system_accounts="_omniroute"
=======
system_accounts="\_omniroute"
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
omniroute_homedir="/var/lib/omniroute"
export NODE_ENV=production
export npm_config_engine_strict=false
export npm_config_loglevel=error
export npm_config_fund=false
export npm_config_audit=false

<<<<<<< HEAD
do_build() {
	# Determine target CPU arch for node-gyp
	local _gyp_arch
	case "$XBPS_TARGET_MACHINE" in
		aarch64*) _gyp_arch=arm64 ;;
		armv7*|armv6*) _gyp_arch=arm ;;
		i686*) _gyp_arch=ia32 ;;
		*) _gyp_arch=x64 ;;
	esac

	# 1) Install all deps – skip scripts
	NODE_ENV=development npm ci --ignore-scripts

	# 2) Build the Next.js standalone bundle
	npm run build

	# 3) Copy static assets into standalone
	cp -r .next/static .next/standalone/.next/static
	[ -d public ] && cp -r public .next/standalone/public || true

	# 4) Compile better-sqlite3 native binding
	local _node_gyp=/usr/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js
	(cd node_modules/better-sqlite3 && node "$_node_gyp" rebuild --arch="$_gyp_arch")

	# 5) Place the compiled binding into the standalone bundle
	local _bs3_release=.next/standalone/node_modules/better-sqlite3/build/Release
	mkdir -p "$_bs3_release"
	cp node_modules/better-sqlite3/build/Release/better_sqlite3.node "$_bs3_release/"

	# 6) Remove arch-specific sharp bundles
	rm -rf .next/standalone/node_modules/@img

	# 7) Copy pino runtime deps omitted by Next.js static analysis:
	for _mod in pino-abstract-transport split2 process-warning; do
		cp -r "node_modules/$_mod" .next/standalone/node_modules/
	done
}

do_check() {
	npm run test:unit
}

do_install() {
	vmkdir usr/lib/omniroute/.next
	vcopy .next/standalone/. usr/lib/omniroute/.next/standalone

	# Prevent removal of empty Next.js app router dirs by the post-install hook
	for _d in \
		.next/standalone/.next/server/app/dashboard \
		.next/standalone/.next/server/app/dashboard/settings \
		.next/standalone/.next/server/app/dashboard/providers; do
		touch "${DESTDIR}/usr/lib/omniroute/${_d}/.keep"
	done

	cat > "${WRKDIR}/omniroute" <<'EOF'
=======
do_build() { # Determine target CPU arch for node-gyp
local \_gyp_arch
case "$XBPS_TARGET_MACHINE" in
aarch64*) \_gyp_arch=arm64 ;;
armv7*|armv6*) \_gyp_arch=arm ;;
i686*) \_gyp_arch=ia32 ;;
\*) \_gyp_arch=x64 ;;
esac

    # 1) Install all deps – skip scripts
    NODE_ENV=development npm ci --ignore-scripts

    # 2) Build the Next.js standalone bundle
    npm run build

    # 3) Copy static assets into standalone
    cp -r .next/static .next/standalone/.next/static
    [ -d public ] && cp -r public .next/standalone/public || true

    # 4) Compile better-sqlite3 native binding
    local _node_gyp=/usr/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js
    (cd node_modules/better-sqlite3 && node "$_node_gyp" rebuild --arch="$_gyp_arch")

    # 5) Place the compiled binding into the standalone bundle
    local _bs3_release=.next/standalone/node_modules/better-sqlite3/build/Release
    mkdir -p "$_bs3_release"
    cp node_modules/better-sqlite3/build/Release/better_sqlite3.node "$_bs3_release/"

    # 6) Remove arch-specific sharp bundles
    rm -rf .next/standalone/node_modules/@img

    # 7) Copy pino runtime deps omitted by Next.js static analysis:
    for _mod in pino-abstract-transport split2 process-warning; do
    	cp -r "node_modules/$_mod" .next/standalone/node_modules/
    done

}

do_check() {
npm run test:unit
}

do_install() {
vmkdir usr/lib/omniroute/.next
vcopy .next/standalone/. usr/lib/omniroute/.next/standalone

    # Prevent removal of empty Next.js app router dirs by the post-install hook
    for _d in \
    	.next/standalone/.next/server/app/dashboard \
    	.next/standalone/.next/server/app/dashboard/settings \
    	.next/standalone/.next/server/app/dashboard/providers; do
    	touch "${DESTDIR}/usr/lib/omniroute/${_d}/.keep"
    done

    cat > "${WRKDIR}/omniroute" <<'EOF'

>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
#!/bin/sh
export PORT="${PORT:-20128}"
export DATA_DIR="${DATA_DIR:-${XDG_DATA_HOME:-${HOME}/.local/share}/omniroute}"
export APP_LOG_TO_FILE="${APP_LOG_TO_FILE:-false}"
mkdir -p "${DATA_DIR}"
exec node /usr/lib/omniroute/.next/standalone/server.js "$@"
EOF
	vbin "${WRKDIR}/omniroute"
}

post_install() {
<<<<<<< HEAD
	vlicense LICENSE
}
```
=======
vlicense LICENSE
}

````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

</details>

### Environment Variables

<<<<<<< HEAD
| Variable                                | Default                              | Description                                                                                               |
| --------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `JWT_SECRET`                            | `omniroute-default-secret-change-me` | JWT signing secret (**change in production**)                                                             |
| `INITIAL_PASSWORD`                      | `123456`                             | First login password                                                                                      |
| `DATA_DIR`                              | `~/.omniroute`                       | Data directory (db, usage, logs)                                                                          |
| `PORT`                                  | framework default                    | Service port (`20128` in examples)                                                                        |
| `HOSTNAME`                              | framework default                    | Bind host (Docker defaults to `0.0.0.0`)                                                                  |
| `NODE_ENV`                              | runtime default                      | Set `production` for deploy                                                                               |
| `BASE_URL`                              | `http://localhost:20128`             | Server-side internal base URL                                                                             |
| `CLOUD_URL`                             | `https://omniroute.dev`              | Cloud sync endpoint base URL                                                                              |
| `API_KEY_SECRET`                        | `endpoint-proxy-api-key-secret`      | HMAC secret for generated API keys                                                                        |
| `REQUIRE_API_KEY`                       | `false`                              | Enforce Bearer API key on `/v1/*`                                                                         |
| `ALLOW_API_KEY_REVEAL`                  | `false`                              | Allow Api Manager to copy full API keys on demand                                                         |
| `PROVIDER_LIMITS_SYNC_INTERVAL_MINUTES` | `70`                                 | Server-side refresh cadence for cached Provider Limits data; UI refresh buttons still trigger manual sync |
| `DISABLE_SQLITE_AUTO_BACKUP`            | `false`                              | Disable automatic SQLite snapshots before writes/import/restore; manual backups still work                |
| `APP_LOG_TO_FILE`                       | `true`                               | Enables application and audit log output to disk                                                          |
| `AUTH_COOKIE_SECURE`                    | `false`                              | Force `Secure` auth cookie (behind HTTPS reverse proxy)                                                   |
| `CLOUDFLARED_BIN`                       | unset                                | Use an existing `cloudflared` binary instead of managed download                                          |
| `CLOUDFLARED_PROTOCOL`                  | `http2`                              | Transport for managed Quick Tunnels (`http2`, `quic`, or `auto`)                                          |
| `OMNIROUTE_MEMORY_MB`                   | `512`                                | Node.js heap limit in MB                                                                                  |
| `PROMPT_CACHE_MAX_SIZE`                 | `50`                                 | Max prompt cache entries                                                                                  |
| `SEMANTIC_CACHE_MAX_SIZE`               | `100`                                | Max semantic cache entries                                                                                |

For the full environment variable reference, see the [README](../README.md).

---

## 📊 Available Models

<details>
<summary><b>View all available models</b></summary>

**Claude Code (`cc/`)** — Pro/Max: `cc/claude-opus-4-7`, `cc/claude-sonnet-4-5-20250929`, `cc/claude-haiku-4-5-20251001`

**Codex (`cx/`)** — Plus/Pro: `cx/gpt-5.2-codex`, `cx/gpt-5.1-codex-max`

**Gemini CLI (`gc/`)** — FREE: `gc/gemini-3-flash-preview`, `gc/gemini-2.5-pro`

**GitHub Copilot (`gh/`)**: `gh/gpt-5`, `gh/claude-4.5-sonnet`

**GLM (`glm/`)** — $0.6/1M: `glm/glm-4.7`

**MiniMax (`minimax/`)** — $0.2/1M: `minimax/MiniMax-M2.1`

**Qoder (`if/`)** — FREE: `if/kimi-k2-thinking`, `if/qwen3-coder-plus`, `if/deepseek-r1`

**Qwen (`qw/`)** — FREE: `qw/qwen3-coder-plus`, `qw/qwen3-coder-flash`

**Kiro (`kr/`)** — FREE: `kr/claude-sonnet-4.5`, `kr/claude-haiku-4.5`

**DeepSeek (`ds/`)**: `ds/deepseek-chat`, `ds/deepseek-reasoner`

**Groq (`groq/`)**: `groq/llama-3.3-70b-versatile`, `groq/llama-4-maverick-17b-128e-instruct`

**xAI (`xai/`)**: `xai/grok-4`, `xai/grok-4-0709-fast-reasoning`, `xai/grok-code-mini`

**Mistral (`mistral/`)**: `mistral/mistral-large-2501`, `mistral/codestral-2501`

**Perplexity (`pplx/`)**: `pplx/sonar-pro`, `pplx/sonar`

**Together AI (`together/`)**: `together/meta-llama/Llama-3.3-70B-Instruct-Turbo`

**Fireworks AI (`fireworks/`)**: `fireworks/accounts/fireworks/models/deepseek-v3p1`

**Cerebras (`cerebras/`)**: `cerebras/llama-3.3-70b`

**Cohere (`cohere/`)**: `cohere/command-r-plus-08-2024`

**NVIDIA NIM (`nvidia/`)**: `nvidia/nvidia/llama-3.3-70b-instruct`

</details>
=======
| परिवर्तनीय | डिफ़ॉल्ट | विवरण |
| ------------------------------------------------ | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| `JWT_SECRET` | `सर्वव्यापी-डिफ़ॉल्ट-गुप्त-परिवर्तन-मुझे` | JWT हस्ताक्षर रहस्य (**उत्पादन में परिवर्तन**) |
| `प्रारंभिक_पासवर्ड` | `123456` | पहला लॉगिन पासवर्ड |
| `DATA_DIR` | `~/.omniroute` | डेटा निर्देशिका (डीबी, उपयोग, लॉग) |
| `पोर्ट` | फ्रेमवर्क डिफ़ॉल्ट | सर्विस पोर्ट (उदाहरणों में `20128`) |
| `होस्टनाम` | फ्रेमवर्क डिफ़ॉल्ट | बाइंड होस्ट (डॉकर डिफ़ॉल्ट `0.0.0.0`) |
| `NODE_ENV` | रनटाइम डिफ़ॉल्ट | तैनाती के लिए 'उत्पादन' सेट करें |
| `बेस_यूआरएल` | `http://localhost:20128` | सर्वर-साइड आंतरिक आधार URL |
| `CLOUD_URL` | `https://omniroute.dev` | क्लाउड सिंक एंडपॉइंट बेस यूआरएल |
| `API_KEY_SECRET` | `एंडपॉइंट-प्रॉक्सी-एपीआई-की-सीक्रेट` | जेनरेट की गई एपीआई कुंजियों के लिए एचएमएसी रहस्य |
| `REQUIRE_API_KEY` | 'झूठा' | `/v1/*` पर बियरर एपीआई कुंजी लागू करें |
| `अनुमति_एपीआई_कुंजी_प्रकटीकरण` | 'झूठा' | एपीआई प्रबंधक को मांग पर पूर्ण एपीआई कुंजियाँ कॉपी करने की अनुमति दें |
| `PROVIDER_LIMITS_SYNC_INTERVAL_MINUTES` | `70` | कैश्ड प्रदाता सीमा डेटा के लिए सर्वर-साइड ताज़ा ताल; यूआई रीफ्रेश बटन अभी भी मैन्युअल सिंक ट्रिगर करते हैं |
| `DISABLE_SQLITE_AUTO_BACKUP` | 'झूठा' | लिखने/आयात/पुनर्स्थापित करने से पहले स्वचालित SQLite स्नैपशॉट अक्षम करें; मैन्युअल बैकअप अभी भी काम करते हैं |
| `APP_LOG_TO_FILE`                       | `true`                               | Enables application and audit log output to disk                                                          |
| `AUTH_COOKIE_SECURE` | 'झूठा' | `सिक्योर` ऑथ कुकी को बाध्य करें (एचटीटीपीएस रिवर्स प्रॉक्सी के पीछे) |
| `CLOUDFLARED_BIN` | परेशान | प्रबंधित डाउनलोड के बजाय मौजूदा `क्लाउडफ्लेयर्ड` बाइनरी का उपयोग करें
| `क्लाउडफ्लेयर्ड_प्रोटोकॉल` | `http2` | प्रबंधित त्वरित सुरंगों के लिए परिवहन ('http2', 'त्वरित', या 'ऑटो') |
| `OMNIROUTE_MEMORY_MB` | `512` | MB में Node.js हीप सीमा |
| `PROMPT_CACHE_MAX_SIZE` | `50` | अधिकतम शीघ्र कैश प्रविष्टियाँ |
| `SEMANTIC_CACHE_MAX_SIZE` | `100` | अधिकतम सिमेंटिक कैश प्रविष्टियाँ |संपूर्ण पर्यावरण चर संदर्भ के लिए, [README](../README.md) देखें।---

## 📊 Available Models

<विवरण>
<सारांश><b>सभी उपलब्ध मॉडल देखें</b></सारांश>

**क्लाउड कोड (`cc/`)**— प्रो/मैक्स: `cc/क्लाउड-ओपस-4-6`, `cc/क्लाउड-सोनेट-4-5-20250929`, `cc/क्लाउड-हाइकु-4-5-20251001`

**कोडेक्स (`सीएक्स/`)**— प्लस/प्रो: `सीएक्स/जीपीटी-5.2-कोडेक्स`, `सीएक्स/जीपीटी-5.1-कोडेक्स-मैक्स`

**मिथुन सीएलआई (`gc/`)**— मुफ़्त: `gc/gemini-3-flash-preview`, `gc/gemini-2.5-pro`

**गिटहब कोपायलट (`gh/`)**: `gh/gpt-5`, `gh/क्लाउड-4.5-सॉनेट`

**जीएलएम (`जीएलएम/`)**— $0.6/1एम: `जीएलएम/जीएलएम-4.7`

**मिनीमैक्स (`मिनीमैक्स/`)**— $0.2/1 मिलियन: `मिनीमैक्स/मिनीमैक्स-एम2.1`

**Qoder (`if/`)**— मुफ़्त: `if/kimi-k2-thinking`, `if/qwen3-coder-plus`, `if/depseek-r1`

**क्वेन (`qw/`)**— मुफ़्त: `qw/qwen3-कोडर-प्लस`, `qw/qwen3-कोडर-फ़्लैश`

**किरो (`kr/`)**— मुफ़्त: `kr/क्लाउड-सॉनेट-4.5`, `kr/क्लाउड-हाइकु-4.5`

**DeepSeek (`ds/`)**: `ds/deepseek-chat`, `ds/deepseek-reasoner`

**ग्रोक (`ग्रोक/`)**: `ग्रोक/लामा-3.3-70बी-बहुमुखी`, `ग्रोक/लामा-4-मेवरिक-17बी-128ई-इंस्ट्रक्ट`

**xAI (`xai/`)**: `xai/grok-4`, `xai/grok-4-0709-fast-reasoning`, `xai/grok-code-mini`

**मिस्ट्रल (`मिस्ट्रल/`)**: `मिस्ट्रल/मिस्ट्रल-लार्ज-2501`, `मिस्ट्रल/कोडेस्ट्रल-2501`

**व्याकुलता (`पीपीएलएक्स/`)**: `पीपीएलएक्स/सोनार-प्रो`, `पीपीएलएक्स/सोनार`

**टुगेदर एआई (`टुगेदर/`)**: `टुगेदर/मेटा-लामा/लामा-3.3-70बी-इंस्ट्रक्ट-टर्बो`

**आतिशबाज़ी एआई (`आतिशबाज़ी/`)**: `आतिशबाजी/खाते/आतिशबाज़ी/मॉडल/डीपसीक-v3p1`

**सेरेब्रस (`सेरेब्रस/`)**: `सेरेब्रस/लामा-3.3-70बी`

**Cohere (`cohere/`)**: `cohere/command-r-plus-08-2024`

**NVIDIA NIM (`nvidia/`)**: `nvidia/nvidia/llama-3.3-70b-instruct`</details>
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

---

## 🧩 Advanced Features

### Custom Models

<<<<<<< HEAD
Add any model ID to any provider without waiting for an app update:

```bash
=======
ऐप अपडेट की प्रतीक्षा किए बिना किसी भी प्रदाता से कोई भी मॉडल आईडी जोड़ें:```bash
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
# Via API
curl -X POST http://localhost:20128/api/provider-models \
  -H "Content-Type: application/json" \
  -d '{"provider": "openai", "modelId": "gpt-4.5-preview", "modelName": "GPT-4.5 Preview"}'

# List: curl http://localhost:20128/api/provider-models?provider=openai
# Remove: curl -X DELETE "http://localhost:20128/api/provider-models?provider=openai&model=gpt-4.5-preview"
<<<<<<< HEAD
```

Or use Dashboard: **Providers → [Provider] → Custom Models**.

Notes:

- OpenRouter and OpenAI/Anthropic-compatible providers are managed from **Available Models** only. Manual add, import, and auto-sync all land in the same available-model list, so there is no separate Custom Models section for those providers.
- The **Custom Models** section is intended for providers that do not expose managed available-model imports.

### Dedicated Provider Routes

Route requests directly to a specific provider with model validation:

```bash
POST http://localhost:20128/v1/providers/openai/chat/completions
POST http://localhost:20128/v1/providers/openai/embeddings
POST http://localhost:20128/v1/providers/fireworks/images/generations
```

The provider prefix is auto-added if missing. Mismatched models return `400`.

### Network Proxy Configuration
=======
````

या डैशबोर्ड का उपयोग करें:**प्रदाता → [प्रदाता] → कस्टम मॉडल**।

टिप्पणियाँ:

- ओपनराउटर और ओपनएआई/एंथ्रोपिक-संगत प्रदाताओं को केवल**उपलब्ध मॉडल**से प्रबंधित किया जाता है। मैन्युअल ऐड, आयात और ऑटो-सिंक सभी एक ही उपलब्ध-मॉडल सूची में आते हैं, इसलिए उन प्रदाताओं के लिए कोई अलग कस्टम मॉडल अनुभाग नहीं है। -**कस्टम मॉडल**अनुभाग उन प्रदाताओं के लिए है जो प्रबंधित उपलब्ध-मॉडल आयात को उजागर नहीं करते हैं।### Dedicated Provider Routes

मॉडल सत्यापन के साथ सीधे एक विशिष्ट प्रदाता को रूट अनुरोध:```bash
POST http://localhost:20128/v1/providers/openai/chat/completions
POST http://localhost:20128/v1/providers/openai/embeddings
POST http://localhost:20128/v1/providers/fireworks/images/generations

````

गायब होने पर प्रदाता उपसर्ग स्वतः जुड़ जाता है। बेमेल मॉडल `400` लौटाते हैं।### Network Proxy Configuration
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

```bash
# Set global proxy
curl -X PUT http://localhost:20128/api/settings/proxy \
  -d '{"global": {"type":"http","host":"proxy.example.com","port":"8080"}}'

# Per-provider proxy
curl -X PUT http://localhost:20128/api/settings/proxy \
  -d '{"providers": {"openai": {"type":"socks5","host":"proxy.example.com","port":"1080"}}}'

# Test proxy
curl -X POST http://localhost:20128/api/settings/proxy/test \
  -d '{"proxy":{"type":"socks5","host":"proxy.example.com","port":"1080"}}'
<<<<<<< HEAD
```

**Precedence:** Key-specific → Combo-specific → Provider-specific → Global → Environment.

### Model Catalog API
=======
````

**प्राथमिकता:**कुंजी-विशिष्ट → कॉम्बो-विशिष्ट → प्रदाता-विशिष्ट → वैश्विक → पर्यावरण।### Model Catalog API
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

```bash
curl http://localhost:20128/api/models/catalog
```

<<<<<<< HEAD
Returns models grouped by provider with types (`chat`, `embedding`, `image`).

### Cloud Sync

- Sync providers, combos, and settings across devices
- Automatic background sync with timeout + fail-fast
- Prefer server-side `BASE_URL`/`CLOUD_URL` in production

### Cloudflare Quick Tunnel

- Available in **Dashboard → Endpoints** for Docker and other self-hosted deployments
- Creates a temporary `https://*.trycloudflare.com` URL that forwards to your current OpenAI-compatible `/v1` endpoint
- First enable installs `cloudflared` only when needed; later restarts reuse the same managed binary
- Quick Tunnels are not auto-restored after an OmniRoute or container restart; re-enable them from the dashboard when needed
- Tunnel URLs are ephemeral and change every time you stop/start the tunnel
- Managed Quick Tunnels default to HTTP/2 transport to avoid noisy QUIC UDP buffer warnings in constrained containers
- Set `CLOUDFLARED_PROTOCOL=quic` or `auto` if you want to override the managed transport choice
- Set `CLOUDFLARED_BIN` if you prefer using a preinstalled `cloudflared` binary instead of the managed download

### LLM Gateway Intelligence (Phase 9)

- **Semantic Cache** — Auto-caches non-streaming, temperature=0 responses (bypass with `X-OmniRoute-No-Cache: true`)
- **Request Idempotency** — Deduplicates requests within 5s via `Idempotency-Key` or `X-Request-Id` header
- **Progress Tracking** — Opt-in SSE `event: progress` events via `X-OmniRoute-Progress: true` header

---

### Translator Playground

Access via **Dashboard → Translator**. Debug and visualize how OmniRoute translates API requests between providers.

| Mode             | Purpose                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| **Playground**   | Select source/target formats, paste a request, and see the translated output instantly |
| **Chat Tester**  | Send live chat messages through the proxy and inspect the full request/response cycle  |
| **Test Bench**   | Run batch tests across multiple format combinations to verify translation correctness  |
| **Live Monitor** | Watch real-time translations as requests flow through the proxy                        |

**Use cases:**

- Debug why a specific client/provider combination fails
- Verify that thinking tags, tool calls, and system prompts translate correctly
- Compare format differences between OpenAI, Claude, Gemini, and Responses API formats

---

### Routing Strategies

Configure via **Dashboard → Settings → Routing**.

| Strategy                       | Description                                                                                      |
| ------------------------------ | ------------------------------------------------------------------------------------------------ |
| **Fill First**                 | Uses accounts in priority order — primary account handles all requests until unavailable         |
| **Round Robin**                | Cycles through all accounts with a configurable sticky limit (default: 3 calls per account)      |
| **P2C (Power of Two Choices)** | Picks 2 random accounts and routes to the healthier one — balances load with awareness of health |
| **Random**                     | Randomly selects an account for each request using Fisher-Yates shuffle                          |
| **Least Used**                 | Routes to the account with the oldest `lastUsedAt` timestamp, distributing traffic evenly        |
| **Cost Optimized**             | Routes to the account with the lowest priority value, optimizing for lowest-cost providers       |

#### External Sticky Session Header

For external session affinity (for example, Claude Code/Codex agents behind reverse proxies), send:

```http
X-Session-Id: your-session-key
```

OmniRoute also accepts `x_session_id` and returns the effective session key in `X-OmniRoute-Session-Id`.

If you use Nginx and send underscore-form headers, enable:

```nginx
underscores_in_headers on;
```

#### Wildcard Model Aliases

Create wildcard patterns to remap model names:

```
Pattern: claude-sonnet-*     →  Target: cc/claude-sonnet-4-5-20250929
Pattern: gpt-*               →  Target: gh/gpt-5.1-codex
```

Wildcards support `*` (any characters) and `?` (single character).

#### Fallback Chains

Define global fallback chains that apply across all requests:

```
Chain: production-fallback
  1. cc/claude-opus-4-7
  2. gh/gpt-5.1-codex
  3. glm/glm-4.7
```
=======
प्रदाता द्वारा प्रकारों (`चैट`, `एम्बेडिंग`, `छवि`) के साथ समूहीकृत मॉडल लौटाता है।### Cloud Sync

- सभी डिवाइसों में सिंक प्रदाता, कॉम्बो और सेटिंग्स
- टाइमआउट + फेल-फास्ट के साथ स्वचालित पृष्ठभूमि सिंक
- उत्पादन में सर्वर-साइड `BASE_URL`/`CLOUD_URL` को प्राथमिकता दें### Cloudflare Quick Tunnel

- डॉकर और अन्य स्व-होस्टेड परिनियोजन के लिए**डैशबोर्ड → एंडपॉइंट**में उपलब्ध है
- एक अस्थायी `https://*.trycloudflare.com` URL बनाता है जो आपके वर्तमान OpenAI-संगत `/v1` समापन बिंदु पर अग्रेषित होता है
- सबसे पहले जरूरत पड़ने पर ही `क्लाउडफ्लेयर` इंस्टॉल सक्षम करें; बाद में पुनरारंभ उसी प्रबंधित बाइनरी का पुन: उपयोग करता है
- ओम्निरूट या कंटेनर पुनरारंभ के बाद त्वरित सुरंगें स्वतः बहाल नहीं होती हैं; आवश्यकता पड़ने पर उन्हें डैशबोर्ड से पुनः सक्षम करें
- टनल यूआरएल अल्पकालिक होते हैं और हर बार जब आप टनल रोकते/शुरू करते हैं तो बदल जाते हैं
- प्रबंधित त्वरित सुरंगें प्रतिबंधित कंटेनरों में शोर वाले QUIC UDP बफर चेतावनियों से बचने के लिए HTTP/2 परिवहन के लिए डिफ़ॉल्ट हैं।
- यदि आप प्रबंधित परिवहन विकल्प को ओवरराइड करना चाहते हैं तो `CLOUDFLARED_PROTOCOL=quic` या `auto` सेट करें
- यदि आप प्रबंधित डाउनलोड के बजाय पूर्वस्थापित `क्लाउडफ्लेयर्ड` बाइनरी का उपयोग करना पसंद करते हैं तो `CLOUDFLARED_BIN` सेट करें### LLM Gateway Intelligence (Phase 9)

-**सिमेंटिक कैश**- ऑटो-कैश नॉन-स्ट्रीमिंग, तापमान = 0 प्रतिक्रियाएँ ('एक्स-ओमनीरूट-नो-कैश: ट्रू' के साथ बायपास) -**अनुरोध Idempotency**- `Idempotency-Key` या `X-Request-Id` हेडर के माध्यम से 5 सेकंड के भीतर अनुरोधों को हटा देता है -**प्रगति ट्रैकिंग**- ऑप्ट-इन एसएसई `इवेंट: प्रगति` इवेंट `X-OmniRoute-Progress: true` हेडर के माध्यम से---

### Translator Playground

**डैशबोर्ड → अनुवादक**के माध्यम से पहुंच। डीबग करें और कल्पना करें कि कैसे ओमनीरूट प्रदाताओं के बीच एपीआई अनुरोधों का अनुवाद करता है।

| मोड              | उद्देश्य                                                                                     |
| ---------------- | -------------------------------------------------------------------------------------------- |
| **खेल का मैदान** | स्रोत/लक्ष्य प्रारूप चुनें, एक अनुरोध चिपकाएँ, और अनुवादित आउटपुट तुरंत देखें                |
| **चैट परीक्षक**  | प्रॉक्सी के माध्यम से लाइव चैट संदेश भेजें और पूर्ण अनुरोध/प्रतिक्रिया चक्र का निरीक्षण करें |
| **टेस्ट बेंच**   | अनुवाद की शुद्धता को सत्यापित करने के लिए कई प्रारूप संयोजनों में बैच परीक्षण चलाएँ          |
| **लाइव मॉनिटर**  | प्रॉक्सी के माध्यम से अनुरोध प्रवाहित होने पर वास्तविक समय में अनुवाद देखें                  |

**उपयोग के मामले:**

- डीबग करें कि कोई विशिष्ट ग्राहक/प्रदाता संयोजन विफल क्यों होता है
- सत्यापित करें कि थिंकिंग टैग, टूल कॉल और सिस्टम प्रॉम्प्ट सही ढंग से अनुवाद करते हैं
- ओपनएआई, क्लाउड, जेमिनी और रिस्पॉन्स एपीआई प्रारूपों के बीच प्रारूप अंतर की तुलना करें---

### Routing Strategies

**डैशबोर्ड → सेटिंग्स → रूटिंग**के माध्यम से कॉन्फ़िगर करें।

| रणनीति                           | विवरण                                                                                                              |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| **पहले भरें**                    | प्राथमिकता क्रम में खातों का उपयोग करता है - प्राथमिक खाता अनुपलब्ध होने तक सभी अनुरोधों को संभालता है             |
| **राउंड रॉबिन**                  | एक विन्यास योग्य चिपचिपा सीमा के साथ सभी खातों के माध्यम से चक्र (डिफ़ॉल्ट: प्रति खाता 3 कॉल)                      |
| **पी2सी (दो विकल्पों की शक्ति)** | 2 यादृच्छिक खाते चुनता है और स्वस्थ खाते की ओर ले जाता है - स्वास्थ्य के प्रति जागरूकता के साथ भार संतुलित करता है |
| **यादृच्छिक**                    | फिशर-येट्स शफल                                                                                                     | का उपयोग करके प्रत्येक अनुरोध के लिए यादृच्छिक रूप से एक खाता चुनता है |
| **कम से कम इस्तेमाल**            | सबसे पुराने `lastUsedAt` टाइमस्टैम्प के साथ खाते तक रूट, ट्रैफ़िक को समान रूप से वितरित करना                       |
| **लागत अनुकूलित**                | सबसे कम लागत वाले प्रदाताओं के लिए अनुकूलन, सबसे कम प्राथमिकता मूल्य वाले खाते तक रूट                              | #### External Sticky Session Header                                    |

बाहरी सत्र एफ़िनिटी के लिए (उदाहरण के लिए, रिवर्स प्रॉक्सी के पीछे क्लाउड कोड/कोडेक्स एजेंट), भेजें:```http
X-Session-Id: your-session-key

````

ओमनीरूट `x_session_id` को भी स्वीकार करता है और `X-OmniRoute-Session-Id` में प्रभावी सत्र कुंजी लौटाता है।

यदि आप Nginx का उपयोग करते हैं और अंडरस्कोर-फॉर्म हेडर भेजते हैं, तो सक्षम करें:```nginx
underscores_in_headers on;
````

#### Wildcard Model Aliases

मॉडल नामों को रीमैप करने के लिए वाइल्डकार्ड पैटर्न बनाएं:```
Pattern: claude-sonnet-_ → Target: cc/claude-sonnet-4-5-20250929
Pattern: gpt-_ → Target: gh/gpt-5.1-codex

````

वाइल्डकार्ड `*` (कोई भी वर्ण) और `?` (एकल वर्ण) का समर्थन करते हैं।#### Fallback Chains

वैश्विक फ़ॉलबैक श्रृंखलाओं को परिभाषित करें जो सभी अनुरोधों पर लागू होती हैं:```
Chain: production-fallback
  1. cc/claude-opus-4-6
  2. gh/gpt-5.1-codex
  3. glm/glm-4.7
````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

---

### Resilience & Circuit Breakers

<<<<<<< HEAD
Configure via **Dashboard → Settings → Resilience**.

OmniRoute implements provider-level resilience with five components:

1. **Request Queue & Pacing** — System-level request shaping:
   - **Requests Per Minute (RPM)** — Maximum requests per minute per account
   - **Min Time Between Requests** — Minimum gap in milliseconds between requests
   - **Max Concurrent Requests** — Maximum simultaneous requests per account

2. **Connection Cooldown** — Per-auth-type configuration for a single connection after retryable failures:
   - **Base Cooldown** — Default cooldown window for retryable upstream failures
   - **Use Upstream Retry Hints** — Honors authoritative `Retry-After` or reset hints when provided
   - **Max Backoff Steps** — Maximum exponential backoff level for repeated failures

3. **Provider Circuit Breaker** — Tracks end-to-end provider failures and automatically opens the breaker when the configured threshold is reached:
   - **Failure Threshold** — Consecutive provider failures before opening the breaker
   - **Reset Timeout** — Time window before the provider is tested again
   - **CLOSED** (Healthy) — Requests flow normally
   - **OPEN** — Provider is temporarily blocked after repeated failures
   - **HALF_OPEN** — Testing if provider has recovered

   Connection-scoped `429` rate limits stay in **Connection Cooldown** and do not count toward the provider breaker.

   The provider breaker runtime state is shown on **Dashboard → Health** only.

4. **Wait For Cooldown** — If every candidate connection is already cooling down, OmniRoute can wait for the earliest cooldown and retry the same client request automatically.

5. **Rate Limit Auto-Detection** — When upstream providers return explicit wait windows, those hints override the local connection cooldown when the setting is enabled.

**Pro Tip:** Use the **Health** page to inspect and reset live provider breakers after an outage. The Resilience page only changes configuration.

---

### Database Export / Import

Manage database backups in **Dashboard → Settings → System & Storage**.

| Action                   | Description                                                                                                                                    |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Export Database**      | Downloads the current SQLite database as a `.sqlite` file                                                                                      |
| **Export All (.tar.gz)** | Downloads a full backup archive including: database, settings, combos, provider connections (no credentials), API key metadata                 |
| **Import Database**      | Upload a `.sqlite` file to replace the current database. A pre-import backup is automatically created unless `DISABLE_SQLITE_AUTO_BACKUP=true` |

```bash
# API: Export database
curl -o backup.sqlite http://localhost:20128/api/db-backups/export

# API: Export all (full archive)
curl -o backup.tar.gz http://localhost:20128/api/db-backups/exportAll

# API: Import database
curl -X POST http://localhost:20128/api/db-backups/import \
  -F "file=@backup.sqlite"
```

**Import Validation:** The imported file is validated for integrity (SQLite pragma check), required tables (`provider_connections`, `provider_nodes`, `combos`, `api_keys`), and size (max 100MB).

**Use Cases:**

- Migrate OmniRoute between machines
- Create external backups for disaster recovery
- Share configurations between team members (export all → share archive)

---

### Settings Dashboard

The settings page is organized into 6 tabs for easy navigation:

| Tab            | Contents                                                                                     |
| -------------- | -------------------------------------------------------------------------------------------- |
| **General**    | System storage tools, appearance settings, theme controls, and per-item sidebar visibility   |
| **Security**   | Login/Password settings, IP Access Control, API auth for `/models`, and Provider Blocking    |
| **Routing**    | Global routing strategy (6 options), wildcard model aliases, fallback chains, combo defaults |
| **Resilience** | Request queue, connection cooldown, provider breaker config, and wait-for-cooldown behavior  |
| **AI**         | Thinking budget configuration, global system prompt injection, prompt cache stats            |
| **Advanced**   | Global proxy configuration (HTTP/SOCKS5)                                                     |

---

### Costs & Budget Management

Access via **Dashboard → Costs**.

| Tab         | Purpose                                                                                  |
| ----------- | ---------------------------------------------------------------------------------------- |
| **Budget**  | Set spending limits per API key with daily/weekly/monthly budgets and real-time tracking |
| **Pricing** | View and edit model pricing entries — cost per 1K input/output tokens per provider       |

```bash
=======
**डैशबोर्ड → सेटिंग्स → लचीलापन**के माध्यम से कॉन्फ़िगर करें।

ओमनीरूट चार घटकों के साथ प्रदाता-स्तरीय लचीलापन लागू करता है:

1.**प्रदाता प्रोफाइल**- प्रति-प्रदाता कॉन्फ़िगरेशन:

- विफलता सीमा (उद्घाटन से पहले कितनी विफलताएँ)
- कूलडाउन अवधि
- दर सीमा का पता लगाने की संवेदनशीलता
- घातीय बैकऑफ़ पैरामीटर

  2.**संपादन योग्य दर सीमाएँ**— डैशबोर्ड में कॉन्फ़िगर करने योग्य सिस्टम-स्तरीय डिफ़ॉल्ट: -**प्रति मिनट अनुरोध (आरपीएम)**- प्रति खाता प्रति मिनट अधिकतम अनुरोध -**अनुरोधों के बीच न्यूनतम समय**- अनुरोधों के बीच मिलीसेकंड में न्यूनतम अंतर -**अधिकतम समवर्ती अनुरोध**— प्रति खाता अधिकतम एक साथ अनुरोध

- संशोधित करने के लिए**संपादित करें**पर क्लिक करें, फिर**सहेजें**या**रद्द करें**पर क्लिक करें। मान लचीलापन एपीआई के माध्यम से बने रहते हैं।

  3.**सर्किट ब्रेकर**- प्रति प्रदाता विफलताओं को ट्रैक करता है और सीमा तक पहुंचने पर स्वचालित रूप से सर्किट खोलता है: -**बंद**(स्वस्थ) - अनुरोध सामान्य रूप से प्रवाहित होते हैं -**खुला**- बार-बार विफलताओं के बाद प्रदाता अस्थायी रूप से अवरुद्ध हो जाता है -**आधा_खुला**— परीक्षण किया जा रहा है कि प्रदाता ठीक हो गया है या नहीं

  4.**नीतियाँ और लॉक किए गए पहचानकर्ता**- बल-अनलॉक क्षमता के साथ सर्किट ब्रेकर की स्थिति और लॉक किए गए पहचानकर्ताओं को दिखाता है।

  5.**दर सीमा ऑटो-डिटेक्शन**- प्रदाता दर सीमा से बचने के लिए सक्रिय रूप से `429` और `पुनः प्रयास करें` हेडर पर नज़र रखता है।

**प्रो टिप:**जब कोई प्रदाता आउटेज से उबरता है तो सभी सर्किट ब्रेकर और कूलडाउन को साफ़ करने के लिए**रीसेट ऑल**बटन का उपयोग करें।---

### Database Export / Import

**डैशबोर्ड → सेटिंग्स → सिस्टम और स्टोरेज**में डेटाबेस बैकअप प्रबंधित करें।

| कार्रवाई                       | विवरण                                                                                                                                                                 |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| **डेटाबेस निर्यात करें**       | वर्तमान SQLite डेटाबेस को `.sqlite` फ़ाइल के रूप में डाउनलोड करता है                                                                                                  |
| **सभी निर्यात करें (.tar.gz)** | एक पूर्ण बैकअप संग्रह डाउनलोड करता है जिसमें शामिल हैं: डेटाबेस, सेटिंग्स, कॉम्बो, प्रदाता कनेक्शन (कोई क्रेडेंशियल नहीं), एपीआई कुंजी मेटाडेटा                       |
| **डेटाबेस आयात करें**          | वर्तमान डेटाबेस को बदलने के लिए `.sqlite` फ़ाइल अपलोड करें। जब तक `DISABLE_SQLITE_AUTO_BACKUP=true` नहीं हो जाता तब तक प्री-इम्पोर्ट बैकअप स्वचालित रूप से बन जाता है | ```bash |

# API: Export database

curl -o backup.sqlite http://localhost:20128/api/db-backups/export

# API: Export all (full archive)

curl -o backup.tar.gz http://localhost:20128/api/db-backups/exportAll

# API: Import database

curl -X POST http://localhost:20128/api/db-backups/import \
 -F "file=@backup.sqlite"

````

**आयात सत्यापन:**आयातित फ़ाइल को अखंडता (SQLite प्राग्मा चेक), आवश्यक तालिकाओं (`प्रदाता_कनेक्शन`, `प्रदाता_नोड्स`, `कॉम्बोस`, `एपीआई_कीज़`), और आकार (अधिकतम 100एमबी) के लिए मान्य किया गया है।

**उपयोग के मामले:**

- मशीनों के बीच ओम्निरूट माइग्रेट करें
- आपदा पुनर्प्राप्ति के लिए बाहरी बैकअप बनाएं
- टीम के सदस्यों के बीच कॉन्फ़िगरेशन साझा करें (सभी निर्यात करें → संग्रह साझा करें)---

### Settings Dashboard

आसान नेविगेशन के लिए सेटिंग पेज को 6 टैब में व्यवस्थित किया गया है:

| टैब | सामग्री |
| -------------- | -------------------------------------------------------------------------------------------------- |
|**सामान्य**| सिस्टम भंडारण उपकरण, उपस्थिति सेटिंग्स, थीम नियंत्रण और प्रति-आइटम साइडबार दृश्यता |
|**सुरक्षा**| लॉगिन/पासवर्ड सेटिंग्स, आईपी एक्सेस कंट्रोल, `/मॉडल` के लिए एपीआई प्रमाणीकरण, और प्रदाता ब्लॉकिंग |
|**रूटिंग**| वैश्विक रूटिंग रणनीति (6 विकल्प), वाइल्डकार्ड मॉडल उपनाम, फ़ॉलबैक चेन, कॉम्बो डिफ़ॉल्ट |
|**लचीलापन**| प्रदाता प्रोफाइल, संपादन योग्य दर सीमा, सर्किट ब्रेकर स्थिति, नीतियां और लॉक पहचानकर्ता |
|**एआई**| बजट कॉन्फ़िगरेशन, ग्लोबल सिस्टम प्रॉम्प्ट इंजेक्शन, प्रॉम्प्ट कैश आँकड़े सोचना |
|**उन्नत**| वैश्विक प्रॉक्सी कॉन्फ़िगरेशन (HTTP/SOCKS5) |---

### Costs & Budget Management

**डैशबोर्ड → लागत**के माध्यम से पहुंच।

| टैब | उद्देश्य |
| ----------- | ------------------------------------------------------------------------------------------------ |
|**बजट**| दैनिक/साप्ताहिक/मासिक बजट और वास्तविक समय ट्रैकिंग के साथ प्रति एपीआई कुंजी खर्च सीमा निर्धारित करें
|**मूल्य निर्धारण**| मॉडल मूल्य निर्धारण प्रविष्टियाँ देखें और संपादित करें - प्रति प्रदाता प्रति 1K इनपुट/आउटपुट टोकन की लागत |```bash
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
# API: Set a budget
curl -X POST http://localhost:20128/api/usage/budget \
  -H "Content-Type: application/json" \
  -d '{"keyId": "key-123", "limit": 50.00, "period": "monthly"}'

# API: Get current budget status
curl http://localhost:20128/api/usage/budget
<<<<<<< HEAD
```

**Cost Tracking:** Every request logs token usage and calculates cost using the pricing table. View breakdowns in **Dashboard → Usage** by provider, model, and API key.

---

### Audio Transcription

OmniRoute supports audio transcription via the OpenAI-compatible endpoint:

```bash
=======
````

**लागत ट्रैकिंग:**प्रत्येक अनुरोध टोकन उपयोग को लॉग करता है और मूल्य निर्धारण तालिका का उपयोग करके लागत की गणना करता है। प्रदाता, मॉडल और एपीआई कुंजी द्वारा**डैशबोर्ड → उपयोग**में विश्लेषण देखें।---

### Audio Transcription

ओमनीरूट ओपनएआई-संगत एंडपॉइंट के माध्यम से ऑडियो ट्रांसक्रिप्शन का समर्थन करता है:```bash
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
POST /v1/audio/transcriptions
Authorization: Bearer your-api-key
Content-Type: multipart/form-data

# Example with curl
<<<<<<< HEAD
curl -X POST http://localhost:20128/v1/audio/transcriptions \
  -H "Authorization: Bearer your-api-key" \
  -F "file=@audio.mp3" \
  -F "model=deepgram/nova-3"
```

Available providers: **Deepgram** (`deepgram/`), **AssemblyAI** (`assemblyai/`).

Supported audio formats: `mp3`, `wav`, `m4a`, `flac`, `ogg`, `webm`.

---

### Combo Balancing Strategies

Configure per-combo balancing in **Dashboard → Combos → Create/Edit → Strategy**.

| Strategy           | Description                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| **Round-Robin**    | Rotates through models sequentially                                      |
| **Priority**       | Always tries the first model; falls back only on error                   |
| **Random**         | Picks a random model from the combo for each request                     |
| **Weighted**       | Routes proportionally based on assigned weights per model                |
| **Least-Used**     | Routes to the model with the fewest recent requests (uses combo metrics) |
| **Cost-Optimized** | Routes to the cheapest available model (uses pricing table)              |

Global combo defaults can be set in **Dashboard → Settings → Routing → Combo Defaults**.

---

### Health Dashboard

Access via **Dashboard → Health**. Real-time system health overview with 6 cards:

| Card                  | What It Shows                                               |
| --------------------- | ----------------------------------------------------------- |
| **System Status**     | Uptime, version, memory usage, data directory               |
| **Provider Health**   | Global provider circuit breaker runtime state               |
| **Rate Limits**       | Active connection cooldowns per account with remaining time |
| **Active Lockouts**   | Active model-scoped lockouts and temporary exclusions       |
| **Signature Cache**   | Deduplication cache stats (active keys, hit rate)           |
| **Latency Telemetry** | p50/p95/p99 latency aggregation per provider                |

**Pro Tip:** The Health page auto-refreshes every 10 seconds. Use the circuit breaker card to identify which providers are experiencing issues.

---

## 🖥️ Desktop Application (Electron)

OmniRoute is available as a native desktop application for Windows, macOS, and Linux.

### स्थापित करें
=======

curl -X POST http://localhost:20128/v1/audio/transcriptions \
 -H "Authorization: Bearer your-api-key" \
 -F "file=@audio.mp3" \
 -F "model=deepgram/nova-3"

````

उपलब्ध प्रदाता:**डीपग्राम**(`डीपग्राम/`),**असेंबलीएआई**(`असेंबलीएआई/`)।

समर्थित ऑडियो प्रारूप: `mp3`, `wav`, `m4a`, `flac`, `ogg`, `webm`।---

### Combo Balancing Strategies

**डैशबोर्ड → कॉम्बो → बनाएं/संपादित करें → रणनीति**में प्रति-कॉम्बो संतुलन कॉन्फ़िगर करें।

| रणनीति | विवरण |
| ------------------ | -------------------------------------------------------------------------------- |
|**राउंड-रॉबिन**| मॉडलों के माध्यम से क्रमिक रूप से घूमता है |
|**प्राथमिकता**| हमेशा पहला मॉडल आज़माता है; केवल त्रुटि पर वापस आता है |
|**यादृच्छिक**| प्रत्येक अनुरोध के लिए कॉम्बो से एक यादृच्छिक मॉडल चुनता है |
|**भारित**| प्रति मॉडल निर्दिष्ट भार के आधार पर आनुपातिक रूप से मार्ग |
|**कम से कम इस्तेमाल**| सबसे कम हालिया अनुरोधों के साथ मॉडल पर रूट (कॉम्बो मेट्रिक्स का उपयोग करता है) |
|**लागत-अनुकूलित**| सबसे सस्ते उपलब्ध मॉडल के लिए मार्ग (मूल्य निर्धारण तालिका का उपयोग करता है) |

ग्लोबल कॉम्बो डिफॉल्ट्स को**डैशबोर्ड → सेटिंग्स → रूटिंग → कॉम्बो डिफॉल्ट्स**में सेट किया जा सकता है।---

### Health Dashboard

**डैशबोर्ड → स्वास्थ्य**के माध्यम से पहुंच। 6 कार्डों के साथ वास्तविक समय प्रणाली स्वास्थ्य अवलोकन:

| कार्ड | यह क्या दिखाता है |
| ---------------------- | ---------------------------------------------------------------- |
|**सिस्टम स्थिति**| अपटाइम, संस्करण, मेमोरी उपयोग, डेटा निर्देशिका |
|**प्रदाता स्वास्थ्य**| प्रति-प्रदाता सर्किट ब्रेकर स्थिति (बंद/खुला/आधा-खुला) |
|**दर सीमा**| शेष समय के साथ प्रति खाता सक्रिय दर सीमा को शांत करना |
|**सक्रिय तालाबंदी**| प्रदाताओं को तालाबंदी नीति द्वारा अस्थायी रूप से अवरुद्ध कर दिया गया है |
|**हस्ताक्षर कैश**| डिडुप्लीकेशन कैश आँकड़े (सक्रिय कुंजियाँ, हिट दर) |
|**विलंबता टेलीमेट्री**| प्रति प्रदाता p50/p95/p99 विलंबता एकत्रीकरण |

**प्रो टिप:**स्वास्थ्य पृष्ठ हर 10 सेकंड में स्वतः ताज़ा हो जाता है। यह पहचानने के लिए सर्किट ब्रेकर कार्ड का उपयोग करें कि कौन से प्रदाता समस्याओं का सामना कर रहे हैं।---

## 🖥️ Desktop Application (Electron)

ओमनीरूट विंडोज़, मैकओएस और लिनक्स के लिए एक मूल डेस्कटॉप एप्लिकेशन के रूप में उपलब्ध है।### स्थापित करें
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

```bash
# From the electron directory:
cd electron
npm install

# Development mode (connect to running Next.js dev server):
npm run dev

# Production mode (uses standalone build):
npm start
<<<<<<< HEAD
```
=======
````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### Building Installers

```bash
cd electron
npm run build          # Current platform
npm run build:win      # Windows (.exe NSIS)
npm run build:mac      # macOS (.dmg universal)
npm run build:linux    # Linux (.AppImage)
```

<<<<<<< HEAD
Output → `electron/dist-electron/`

### Key Features

| Feature                     | Description                                          |
| --------------------------- | ---------------------------------------------------- |
| **Server Readiness**        | Polls server before showing window (no blank screen) |
| **System Tray**             | Minimize to tray, change port, quit from tray menu   |
| **Port Management**         | Change server port from tray (auto-restarts server)  |
| **Content Security Policy** | Restrictive CSP via session headers                  |
| **Single Instance**         | Only one app instance can run at a time              |
| **Offline Mode**            | Bundled Next.js server works without internet        |

### Environment Variables

| Variable              | Default | Description                      |
| --------------------- | ------- | -------------------------------- |
| `OMNIROUTE_PORT`      | `20128` | Server port                      |
| `OMNIROUTE_MEMORY_MB` | `512`   | Node.js heap limit (64–16384 MB) |

📖 Full documentation: [`electron/README.md`](../electron/README.md)
=======
आउटपुट → `इलेक्ट्रॉन/डिस्ट-इलेक्ट्रॉन/`### Key Features

| फ़ीचर                    | विवरण                                                    |
| ------------------------ | -------------------------------------------------------- | ------------------------- |
| **सर्वर की तैयारी**      | विंडो दिखाने से पहले पोल सर्वर (कोई खाली स्क्रीन नहीं)   |
| **सिस्टम ट्रे**          | ट्रे को छोटा करें, पोर्ट बदलें, ट्रे मेनू से बाहर निकलें |
| **पोर्ट प्रबंधन**        | ट्रे से सर्वर पोर्ट बदलें (ऑटो-रीस्टार्ट सर्वर)          |
| **सामग्री सुरक्षा नीति** | सत्र शीर्षलेखों के माध्यम से प्रतिबंधात्मक सीएसपी        |
| **एकल उदाहरण**           | एक समय में केवल एक ऐप इंस्टेंस चल सकता है                |
| **ऑफ़लाइन मोड**          | बंडल नेक्स्ट.जेएस सर्वर इंटरनेट के बिना काम करता है      | ### Environment Variables |

| परिवर्तनीय            | डिफ़ॉल्ट | विवरण                            |
| --------------------- | -------- | -------------------------------- |
| `OMNIROUTE_PORT`      | `20128`  | सर्वर पोर्ट                      |
| `OMNIROUTE_MEMORY_MB` | `512`    | Node.js ढेर सीमा (64-16384 एमबी) |

📖 पूर्ण दस्तावेज़: [`electron/README.md`](../electron/README.md)
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
