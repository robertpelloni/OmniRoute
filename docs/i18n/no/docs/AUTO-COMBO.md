<<<<<<< HEAD
=======
>>>>>>> Stashed changes

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
# OmniRoute Auto-Combo Engine (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/AUTO-COMBO.md) · 🇪🇸 [es](../../es/docs/AUTO-COMBO.md) · 🇫🇷 [fr](../../fr/docs/AUTO-COMBO.md) · 🇩🇪 [de](../../de/docs/AUTO-COMBO.md) · 🇮🇹 [it](../../it/docs/AUTO-COMBO.md) · 🇷🇺 [ru](../../ru/docs/AUTO-COMBO.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/AUTO-COMBO.md) · 🇯🇵 [ja](../../ja/docs/AUTO-COMBO.md) · 🇰🇷 [ko](../../ko/docs/AUTO-COMBO.md) · 🇸🇦 [ar](../../ar/docs/AUTO-COMBO.md) · 🇮🇳 [hi](../../hi/docs/AUTO-COMBO.md) · 🇮🇳 [in](../../in/docs/AUTO-COMBO.md) · 🇹🇭 [th](../../th/docs/AUTO-COMBO.md) · 🇻🇳 [vi](../../vi/docs/AUTO-COMBO.md) · 🇮🇩 [id](../../id/docs/AUTO-COMBO.md) · 🇲🇾 [ms](../../ms/docs/AUTO-COMBO.md) · 🇳🇱 [nl](../../nl/docs/AUTO-COMBO.md) · 🇵🇱 [pl](../../pl/docs/AUTO-COMBO.md) · 🇸🇪 [sv](../../sv/docs/AUTO-COMBO.md) · 🇳🇴 [no](../../no/docs/AUTO-COMBO.md) · 🇩🇰 [da](../../da/docs/AUTO-COMBO.md) · 🇫🇮 [fi](../../fi/docs/AUTO-COMBO.md) · 🇵🇹 [pt](../../pt/docs/AUTO-COMBO.md) · 🇷🇴 [ro](../../ro/docs/AUTO-COMBO.md) · 🇭🇺 [hu](../../hu/docs/AUTO-COMBO.md) · 🇧🇬 [bg](../../bg/docs/AUTO-COMBO.md) · 🇸🇰 [sk](../../sk/docs/AUTO-COMBO.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/AUTO-COMBO.md) · 🇮🇱 [he](../../he/docs/AUTO-COMBO.md) · 🇵🇭 [phi](../../phi/docs/AUTO-COMBO.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/AUTO-COMBO.md) · 🇨🇿 [cs](../../cs/docs/AUTO-COMBO.md) · 🇹🇷 [tr](../../tr/docs/AUTO-COMBO.md)

---

> Selvadministrerende modellkjeder med adaptiv scoring## How It Works

Auto-Combo Engine velger dynamisk den beste leverandøren/modellen for hver forespørsel ved hjelp av en**6-faktors scoringsfunksjon**:

| Faktor     | Vekt | Beskrivelse                                  |
| :--------- | :--- | :------------------------------------------- | ------------- |
| Kvote      | 0,20 | Gjenværende kapasitet [0..1]                 |
| Helse      | 0,25 | Strømbryter: STENGT=1,0, HALV=0,5, ÅPEN=0,0  |
| CostInv    | 0,20 | Invers kostnad (billigere = høyere poengsum) |
| LatencyInv | 0,15 | Invers p95-latens (raskere = høyere)         |
| TaskFit    | 0,10 | Modell × oppgavetype fitness score           |
| Stabilitet | 0,10 | Lav varians i ventetid/feil                  | ## Mode Packs |

| Pakke                    | Fokus           | Nøkkelvekt       |
| :----------------------- | :-------------- | :--------------- | --------------- |
| 🚀**Send raskt**         | Hastighet       | latencyInv: 0,35 |
| 💰**Kostnadsbesparende** | Økonomi         | kostnadInv: 0,40 |
| 🎯**Kvalitet først**     | Beste modell    | oppgaveFit: 0,40 |
| 📡**Offlinevennlig**     | Tilgjengelighet | kvote: 0,40      | ## Self-Healing |

-**Midlertidig ekskludering**: Poeng < 0,2 → ekskludert i 5 min (progressiv backoff, maks 30 min) -**Bevissthet om kretsbryter**: ÅPEN → automatisk ekskludert; HALF_OPEN → sondeforespørsler -**Hendelsesmodus**: >50 % ÅPEN → deaktiver utforskning, maksimer stabiliteten -**Cooldown recovery**: Etter ekskludering er første forespørsel en "probe" med redusert tidsavbrudd## Bandit Exploration

5 % av forespørslene (konfigurerbare) blir rutet til tilfeldige leverandører for utforskning. Deaktivert i hendelsesmodus.## API
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
30+ modeller scoret på tvers av 6 oppgavetyper ('koding', 'gjennomgang', 'planlegging', 'analyse', 'feilsøking', 'dokumentasjon'). Støtter jokertegnmønstre (f.eks. "\*-koder" → høy kodingsscore).## Files

| Fil                                          | Formål                               |
| :------------------------------------------- | :----------------------------------- |
| `open-sse/services/autoCombo/scoring.ts`     | Poengfunksjon og puljenormalisering  |
| `open-sse/services/autoCombo/taskFitness.ts` | Modell × oppgave fitness oppslag     |
| `open-sse/services/autoCombo/engine.ts`      | Utvalgslogikk, banditt, budsjetttak  |
| `open-sse/services/autoCombo/selfHealing.ts` | Ekskludering, sonder, hendelsesmodus |
| `open-sse/services/autoCombo/modePacks.ts`   | 4 vektprofiler                       |
| `src/app/api/combos/auto/route.ts`           | REST API                             |
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
