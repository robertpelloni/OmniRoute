# OmniRoute Auto-Combo Engine (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/AUTO-COMBO.md) · 🇪🇸 [es](../../es/docs/AUTO-COMBO.md) · 🇫🇷 [fr](../../fr/docs/AUTO-COMBO.md) · 🇩🇪 [de](../../de/docs/AUTO-COMBO.md) · 🇮🇹 [it](../../it/docs/AUTO-COMBO.md) · 🇷🇺 [ru](../../ru/docs/AUTO-COMBO.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/AUTO-COMBO.md) · 🇯🇵 [ja](../../ja/docs/AUTO-COMBO.md) · 🇰🇷 [ko](../../ko/docs/AUTO-COMBO.md) · 🇸🇦 [ar](../../ar/docs/AUTO-COMBO.md) · 🇮🇳 [hi](../../hi/docs/AUTO-COMBO.md) · 🇮🇳 [in](../../in/docs/AUTO-COMBO.md) · 🇹🇭 [th](../../th/docs/AUTO-COMBO.md) · 🇻🇳 [vi](../../vi/docs/AUTO-COMBO.md) · 🇮🇩 [id](../../id/docs/AUTO-COMBO.md) · 🇲🇾 [ms](../../ms/docs/AUTO-COMBO.md) · 🇳🇱 [nl](../../nl/docs/AUTO-COMBO.md) · 🇵🇱 [pl](../../pl/docs/AUTO-COMBO.md) · 🇸🇪 [sv](../../sv/docs/AUTO-COMBO.md) · 🇳🇴 [no](../../no/docs/AUTO-COMBO.md) · 🇩🇰 [da](../../da/docs/AUTO-COMBO.md) · 🇫🇮 [fi](../../fi/docs/AUTO-COMBO.md) · 🇵🇹 [pt](../../pt/docs/AUTO-COMBO.md) · 🇷🇴 [ro](../../ro/docs/AUTO-COMBO.md) · 🇭🇺 [hu](../../hu/docs/AUTO-COMBO.md) · 🇧🇬 [bg](../../bg/docs/AUTO-COMBO.md) · 🇸🇰 [sk](../../sk/docs/AUTO-COMBO.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/AUTO-COMBO.md) · 🇮🇱 [he](../../he/docs/AUTO-COMBO.md) · 🇵🇭 [phi](../../phi/docs/AUTO-COMBO.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/AUTO-COMBO.md) · 🇨🇿 [cs](../../cs/docs/AUTO-COMBO.md) · 🇹🇷 [tr](../../tr/docs/AUTO-COMBO.md)

---

<<<<<<< HEAD
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
> Samozarządzające się łańcuchy modeli z adaptacyjną punktacją## How It Works

Silnik Auto-Combo dynamicznie wybiera najlepszego dostawcę/model dla każdego żądania, korzystając z**funkcji punktacji 6-czynnikowej**:

| Czynnik       | Waga | Opis                                              |
| :------------ | :--- | :------------------------------------------------ | ------------- |
| Kwota         | 0,20 | Pozostała pojemność [0..1]                        |
| Zdrowie       | 0,25 | Wyłącznik: ZAMKNIĘTY=1,0, PÓŁOWA=0,5, OTWARTY=0,0 |
| KosztInw      | 0,20 | Koszt odwrotny (tańszy = wyższy wynik)            |
| OpóźnienieInv | 0,15 | Odwrotne opóźnienie p95 (szybciej = wyżej)        |
| ZadanieFit    | 0,10 | Model × wynik sprawności typu zadania             |
| Stabilność    | 0,10 | Niska zmienność opóźnień/błędów                   | ## Mode Packs |

| Paczka                            | Skup się        | Waga klucza         |
| :-------------------------------- | :-------------- | :------------------ | --------------- |
| 🚀**Wysyłaj szybko**              | Prędkość        | opóźnienieInv: 0,35 |
| 💰**Oszczędność kosztów**         | Gospodarka      | kosztInw: 0,40      |
| 🎯**Jakość na pierwszym miejscu** | Najlepszy model | zadanieFit: 0,40    |
| 📡**Przyjazny offline**           | Dostępność      | kwota: 0,40         | ## Self-Healing |

-**Tymczasowe wykluczenie**: Wynik < 0,2 → wykluczenie na 5 min (stopniowe wycofywanie, maks. 30 min) -**Wykrywanie wyłącznika**: OTWARTE → automatyczne wykluczenie; HALF_OPEN → żądania sondowania -**Tryb incydentu**: >50% OTWARTY → wyłącz eksplorację, zmaksymalizuj stabilność -**Odzyskiwanie czasu odnowienia**: Po wykluczeniu pierwszym żądaniem jest „sonda” ze skróconym limitem czasu## Bandit Exploration

5% żądań (konfigurowalnych) jest kierowanych do losowych dostawców w celu eksploracji. Wyłączone w trybie incydentalnym.## API
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
Ponad 30 modeli ocenianych w ramach 6 typów zadań („kodowanie”, „przegląd”, „planowanie”, „analiza”, „debugowanie”, „dokumentacja”). Obsługuje wzorce wieloznaczne (np. `*-coder` → wysoki wynik kodowania).## Files

| Plik                                         | Cel                                              |
| :------------------------------------------- | :----------------------------------------------- |
| `open-sse/services/autoCombo/scoring.ts`     | Funkcja punktacji i normalizacja puli            |
| `open-sse/services/autoCombo/taskFitness.ts` | Wyszukiwanie sprawności modelu × zadania         |
| `open-sse/services/autoCombo/engine.ts`      | Logika selekcji, bandyta, ograniczenie budżetowe |
| `open-sse/services/autoCombo/selfHealing.ts` | Wykluczenie, sondy, tryb incydentalny            |
| `open-sse/services/autoCombo/modePacks.ts`   | 4 profile wagowe                                 |
| `src/app/api/combos/auto/route.ts`           | API REST                                         |
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
