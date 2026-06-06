# OmniRoute Auto-Combo Engine (Bahasa Melayu)

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

> Rantai model urus sendiri dengan pemarkahan adaptif## How It Works

Enjin Kombo Auto secara dinamik memilih pembekal/model terbaik untuk setiap permintaan menggunakan**fungsi pemarkahan 6 faktor**:

| Faktor     | Berat | Penerangan                                        |
| :--------- | :---- | :------------------------------------------------ | ------------- |
| Kuota      | 0.20  | Baki kapasiti [0..1]                              |
| Kesihatan  | 0.25  | Pemutus litar: TUTUP=1.0, SEPARUH=0.5, BUKA=0.0   |
| CostInv    | 0.20  | Kos songsang (lebih murah = skor lebih tinggi)    |
| LatencyInv | 0.15  | Latensi p95 songsang (lebih cepat = lebih tinggi) |
| TaskFit    | 0.10  | Model × skor kecergasan jenis tugasan             |
| Kestabilan | 0.10  | Varians rendah dalam kependaman/ralat             | ## Mode Packs |

| Pek                      | Fokus         | Berat Utama      |
| :----------------------- | :------------ | :--------------- | --------------- |
| 🚀**Penghantaran Cepat** | Kelajuan      | latencyInv: 0.35 |
| 💰**Penjimat Kos**       | Ekonomi       | costInv: 0.40    |
| 🎯**Kualiti Diutamakan** | Model terbaik | TaskFit: 0.40    |
| 📡**Mesra Luar Talian**  | Ketersediaan  | kuota: 0.40      | ## Self-Healing |

-**Pengecualian sementara**: Skor < 0.2 → dikecualikan selama 5 minit (undur progresif, maks 30 min) -**Kesedaran pemutus litar**: DIBUKA → dikecualikan secara automatik; HALF_OPEN → permintaan siasatan -**Mod insiden**: >50% BUKA → lumpuhkan penerokaan, maksimumkan kestabilan -**Pemulihan Cooldown**: Selepas pengecualian, permintaan pertama ialah "probe" dengan tamat masa yang dikurangkan## Bandit Exploration

5% daripada permintaan (boleh dikonfigurasikan) dihalakan kepada pembekal rawak untuk penerokaan. Dilumpuhkan dalam mod insiden.## API
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
30+ model mendapat markah merentas 6 jenis tugasan (`pengekodan`, `semakan`, `perancangan`, `analisis`, `penyahpepijat`, `dokumentasi`). Menyokong corak kad bebas (cth., `*-coder` → skor pengekodan tinggi).## Files

| Fail                                         | Tujuan                               |
| :------------------------------------------- | :----------------------------------- |
| `open-sse/services/autoCombo/scoring.ts`     | Fungsi pemarkahan & penormalan kolam |
| `open-sse/services/autoCombo/taskFitness.ts` | Model × carian kecergasan tugasan    |
| `open-sse/services/autoCombo/engine.ts`      | Logik pemilihan, penyamun, had bajet |
| `open-sse/services/autoCombo/selfHealing.ts` | Pengecualian, siasatan, mod kejadian |
| `open-sse/services/autoCombo/modePacks.ts`   | 4 profil berat                       |
| `src/app/api/combos/auto/route.ts`           | API REST                             |
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
