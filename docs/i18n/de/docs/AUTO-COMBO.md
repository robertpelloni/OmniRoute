# OmniRoute Auto-Combo Engine (Deutsch)

<<<<<<< HEAD

---

> Self-managing model chains with adaptive scoring

## How It Works

The Auto-Combo Engine dynamically selects the best provider/model for each request using a **6-factor scoring function**:

| Factor     | Weight | Description                                     |
| :--------- | :----- | :---------------------------------------------- |
| Quota      | 0.20   | Remaining capacity [0..1]                       |
| Health     | 0.25   | Circuit breaker: CLOSED=1.0, HALF=0.5, OPEN=0.0 |
| CostInv    | 0.20   | Inverse cost (cheaper = higher score)           |
| LatencyInv | 0.15   | Inverse p95 latency (faster = higher)           |
| TaskFit    | 0.10   | Model × task type fitness score                 |
| Stability  | 0.10   | Low variance in latency/errors                  |

## Mode Packs

| Pack                    | Focus        | Key Weight       |
| :---------------------- | :----------- | :--------------- |
| 🚀 **Ship Fast**        | Speed        | latencyInv: 0.35 |
| 💰 **Cost Saver**       | Economy      | costInv: 0.40    |
| 🎯 **Quality First**    | Best model   | taskFit: 0.40    |
| 📡 **Offline Friendly** | Availability | quota: 0.40      |

## Self-Healing

- **Temporary exclusion**: Score < 0.2 → excluded for 5 min (progressive backoff, max 30 min)
- **Circuit breaker awareness**: OPEN → auto-excluded; HALF_OPEN → probe requests
- **Incident mode**: >50% OPEN → disable exploration, maximize stability
- **Cooldown recovery**: After exclusion, first request is a "probe" with reduced timeout

## Bandit Exploration

5% of requests (configurable) are routed to random providers for exploration. Disabled in incident mode.

## API
=======
🌐 **Languages:** 🇺🇸 [English](../../../../docs/AUTO-COMBO.md) · 🇪🇸 [es](../../es/docs/AUTO-COMBO.md) · 🇫🇷 [fr](../../fr/docs/AUTO-COMBO.md) · 🇩🇪 [de](../../de/docs/AUTO-COMBO.md) · 🇮🇹 [it](../../it/docs/AUTO-COMBO.md) · 🇷🇺 [ru](../../ru/docs/AUTO-COMBO.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/AUTO-COMBO.md) · 🇯🇵 [ja](../../ja/docs/AUTO-COMBO.md) · 🇰🇷 [ko](../../ko/docs/AUTO-COMBO.md) · 🇸🇦 [ar](../../ar/docs/AUTO-COMBO.md) · 🇮🇳 [hi](../../hi/docs/AUTO-COMBO.md) · 🇮🇳 [in](../../in/docs/AUTO-COMBO.md) · 🇹🇭 [th](../../th/docs/AUTO-COMBO.md) · 🇻🇳 [vi](../../vi/docs/AUTO-COMBO.md) · 🇮🇩 [id](../../id/docs/AUTO-COMBO.md) · 🇲🇾 [ms](../../ms/docs/AUTO-COMBO.md) · 🇳🇱 [nl](../../nl/docs/AUTO-COMBO.md) · 🇵🇱 [pl](../../pl/docs/AUTO-COMBO.md) · 🇸🇪 [sv](../../sv/docs/AUTO-COMBO.md) · 🇳🇴 [no](../../no/docs/AUTO-COMBO.md) · 🇩🇰 [da](../../da/docs/AUTO-COMBO.md) · 🇫🇮 [fi](../../fi/docs/AUTO-COMBO.md) · 🇵🇹 [pt](../../pt/docs/AUTO-COMBO.md) · 🇷🇴 [ro](../../ro/docs/AUTO-COMBO.md) · 🇭🇺 [hu](../../hu/docs/AUTO-COMBO.md) · 🇧🇬 [bg](../../bg/docs/AUTO-COMBO.md) · 🇸🇰 [sk](../../sk/docs/AUTO-COMBO.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/AUTO-COMBO.md) · 🇮🇱 [he](../../he/docs/AUTO-COMBO.md) · 🇵🇭 [phi](../../phi/docs/AUTO-COMBO.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/AUTO-COMBO.md) · 🇨🇿 [cs](../../cs/docs/AUTO-COMBO.md) · 🇹🇷 [tr](../../tr/docs/AUTO-COMBO.md)

---

> Selbstverwaltende Modellketten mit adaptiver Bewertung## How It Works

Die Auto-Combo Engine wählt mithilfe einer**6-Faktor-Bewertungsfunktion**dynamisch den besten Anbieter/das beste Modell für jede Anfrage aus:

| Faktor     | Gewicht | Beschreibung                                              |
| :--------- | :------ | :-------------------------------------------------------- | ------------- |
| Quote      | 0,20    | Restkapazität [0..1]                                      |
| Gesundheit | 0,25    | Leistungsschalter: GESCHLOSSEN=1,0, HÄLFTE=0,5, OFFEN=0,0 |
| CostInv    | 0,20    | Inverse Kosten (billiger = höhere Punktzahl)              |
| LatencyInv | 0,15    | Inverse p95-Latenz (schneller = höher)                    |
| TaskFit    | 0,10    | Modell × Aufgabentyp-Fitness-Score                        |
| Stabilität | 0,10    | Geringe Varianz bei Latenz/Fehlern                        | ## Mode Packs |

| Packung                  | Fokus           | Schlüsselgewicht |
| :----------------------- | :-------------- | :--------------- | --------------- |
| 🚀**Schnell versenden**  | Geschwindigkeit | LatencyInv: 0,35 |
| 💰**Kostenersparnis**    | Wirtschaft      | costInv: 0,40    |
| 🎯**Qualität geht vor**  | Bestes Modell   | taskFit: 0,40    |
| 📡**Offline-freundlich** | Verfügbarkeit   | Quote: 0,40      | ## Self-Healing |

-**Vorübergehender Ausschluss**: Punktzahl < 0,2 → für 5 Min. ausgeschlossen (progressiver Backoff, max. 30 Min.) -**Leistungsschalter-Bewusstsein**: OFFEN → automatisch ausgeschlossen; HALF_OPEN → Prüfanfragen -**Vorfallmodus**: >50 % OFFEN → Erkundung deaktivieren, Stabilität maximieren -**Wiederherstellung der Abklingzeit**: Nach dem Ausschluss ist die erste Anfrage eine „Probe“ mit reduziertem Timeout## Bandit Exploration

5 % der Anfragen (konfigurierbar) werden zur Erkundung an zufällige Anbieter weitergeleitet. Im Incident-Modus deaktiviert.## API
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

```bash
# Create auto-combo
curl -X POST http://localhost:20128/api/combos/auto \
  -H "Content-Type: application/json" \
  -d '{"id":"my-auto","name":"Auto Coder","candidatePool":["anthropic","google","openai"],"modePack":"ship-fast"}'

# List auto-combos
curl http://localhost:20128/api/combos/auto
```

## Task Fitness

<<<<<<< HEAD
30+ models scored across 6 task types (`coding`, `review`, `planning`, `analysis`, `debugging`, `documentation`). Supports wildcard patterns (e.g., `*-coder` → high coding score).

## Files

| File                                         | Purpose                               |
| :------------------------------------------- | :------------------------------------ |
| `open-sse/services/autoCombo/scoring.ts`     | Scoring function & pool normalization |
| `open-sse/services/autoCombo/taskFitness.ts` | Model × task fitness lookup           |
| `open-sse/services/autoCombo/engine.ts`      | Selection logic, bandit, budget cap   |
| `open-sse/services/autoCombo/selfHealing.ts` | Exclusion, probes, incident mode      |
| `open-sse/services/autoCombo/modePacks.ts`   | 4 weight profiles                     |
| `src/app/api/combos/auto/route.ts`           | REST API                              |
=======
Über 30 Modelle wurden in 6 Aufgabentypen („Codierung“, „Überprüfung“, „Planung“, „Analyse“, „Debugging“, „Dokumentation“) bewertet. Unterstützt Platzhaltermuster (z. B. „\*-coder“ → hoher Codierungs-Score).## Files

| Datei                                        | Zweck                                     |
| :------------------------------------------- | :---------------------------------------- |
| `open-sse/services/autoCombo/scoring.ts`     | Bewertungsfunktion und Poolnormalisierung |
| `open-sse/services/autoCombo/taskFitness.ts` | Modell × Task-Fitness-Suche               |
| `open-sse/services/autoCombo/engine.ts`      | Auswahllogik, Bandit, Budgetobergrenze    |
| `open-sse/services/autoCombo/selfHealing.ts` | Ausschluss, Untersuchungen, Vorfallmodus  |
| `open-sse/services/autoCombo/modePacks.ts`   | 4 Gewichtsprofile                         |
| `src/app/api/combos/auto/route.ts`           | REST-API                                  |
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
