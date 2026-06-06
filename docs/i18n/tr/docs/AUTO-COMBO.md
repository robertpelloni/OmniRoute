<<<<<<< HEAD
<<<<<<<< Updated upstream:docs/i18n/tr/docs/AUTO-COMBO.md
# OmniRoute Auto-Combo Engine (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/AUTO-COMBO.md) · 🇸🇦 [ar](../../ar/docs/AUTO-COMBO.md) · 🇧🇬 [bg](../../bg/docs/AUTO-COMBO.md) · 🇧🇩 [bn](../../bn/docs/AUTO-COMBO.md) · 🇨🇿 [cs](../../cs/docs/AUTO-COMBO.md) · 🇩🇰 [da](../../da/docs/AUTO-COMBO.md) · 🇩🇪 [de](../../de/docs/AUTO-COMBO.md) · 🇪🇸 [es](../../es/docs/AUTO-COMBO.md) · 🇮🇷 [fa](../../fa/docs/AUTO-COMBO.md) · 🇫🇮 [fi](../../fi/docs/AUTO-COMBO.md) · 🇫🇷 [fr](../../fr/docs/AUTO-COMBO.md) · 🇮🇳 [gu](../../gu/docs/AUTO-COMBO.md) · 🇮🇱 [he](../../he/docs/AUTO-COMBO.md) · 🇮🇳 [hi](../../hi/docs/AUTO-COMBO.md) · 🇭🇺 [hu](../../hu/docs/AUTO-COMBO.md) · 🇮🇩 [id](../../id/docs/AUTO-COMBO.md) · 🇮🇹 [it](../../it/docs/AUTO-COMBO.md) · 🇯🇵 [ja](../../ja/docs/AUTO-COMBO.md) · 🇰🇷 [ko](../../ko/docs/AUTO-COMBO.md) · 🇮🇳 [mr](../../mr/docs/AUTO-COMBO.md) · 🇲🇾 [ms](../../ms/docs/AUTO-COMBO.md) · 🇳🇱 [nl](../../nl/docs/AUTO-COMBO.md) · 🇳🇴 [no](../../no/docs/AUTO-COMBO.md) · 🇵🇭 [phi](../../phi/docs/AUTO-COMBO.md) · 🇵🇱 [pl](../../pl/docs/AUTO-COMBO.md) · 🇵🇹 [pt](../../pt/docs/AUTO-COMBO.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/AUTO-COMBO.md) · 🇷🇴 [ro](../../ro/docs/AUTO-COMBO.md) · 🇷🇺 [ru](../../ru/docs/AUTO-COMBO.md) · 🇸🇰 [sk](../../sk/docs/AUTO-COMBO.md) · 🇸🇪 [sv](../../sv/docs/AUTO-COMBO.md) · 🇰🇪 [sw](../../sw/docs/AUTO-COMBO.md) · 🇮🇳 [ta](../../ta/docs/AUTO-COMBO.md) · 🇮🇳 [te](../../te/docs/AUTO-COMBO.md) · 🇹🇭 [th](../../th/docs/AUTO-COMBO.md) · 🇹🇷 [tr](../../tr/docs/AUTO-COMBO.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/AUTO-COMBO.md) · 🇵🇰 [ur](../../ur/docs/AUTO-COMBO.md) · 🇻🇳 [vi](../../vi/docs/AUTO-COMBO.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/AUTO-COMBO.md)
========
# OmniRoute Auto-Combo Engine (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/AUTO-COMBO.md) · 🇪🇸 [es](../../es/docs/AUTO-COMBO.md) · 🇫🇷 [fr](../../fr/docs/AUTO-COMBO.md) · 🇩🇪 [de](../../de/docs/AUTO-COMBO.md) · 🇮🇹 [it](../../it/docs/AUTO-COMBO.md) · 🇷🇺 [ru](../../ru/docs/AUTO-COMBO.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/AUTO-COMBO.md) · 🇯🇵 [ja](../../ja/docs/AUTO-COMBO.md) · 🇰🇷 [ko](../../ko/docs/AUTO-COMBO.md) · 🇸🇦 [ar](../../ar/docs/AUTO-COMBO.md) · 🇮🇳 [in](../../in/docs/AUTO-COMBO.md) · 🇹🇭 [th](../../th/docs/AUTO-COMBO.md) · 🇻🇳 [vi](../../vi/docs/AUTO-COMBO.md) · 🇮🇩 [id](../../id/docs/AUTO-COMBO.md) · 🇲🇾 [ms](../../ms/docs/AUTO-COMBO.md) · 🇳🇱 [nl](../../nl/docs/AUTO-COMBO.md) · 🇵🇱 [pl](../../pl/docs/AUTO-COMBO.md) · 🇸🇪 [sv](../../sv/docs/AUTO-COMBO.md) · 🇳🇴 [no](../../no/docs/AUTO-COMBO.md) · 🇩🇰 [da](../../da/docs/AUTO-COMBO.md) · 🇫🇮 [fi](../../fi/docs/AUTO-COMBO.md) · 🇵🇹 [pt](../../pt/docs/AUTO-COMBO.md) · 🇷🇴 [ro](../../ro/docs/AUTO-COMBO.md) · 🇭🇺 [hu](../../hu/docs/AUTO-COMBO.md) · 🇧🇬 [bg](../../bg/docs/AUTO-COMBO.md) · 🇸🇰 [sk](../../sk/docs/AUTO-COMBO.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/AUTO-COMBO.md) · 🇮🇱 [he](../../he/docs/AUTO-COMBO.md) · 🇵🇭 [phi](../../phi/docs/AUTO-COMBO.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/AUTO-COMBO.md) · 🇨🇿 [cs](../../cs/docs/AUTO-COMBO.md)
>>>>>>>> Stashed changes:docs/i18n/hu/docs/AUTO-COMBO.md

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
# OmniRoute Auto-Combo Engine (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/AUTO-COMBO.md) · 🇪🇸 [es](../../es/docs/AUTO-COMBO.md) · 🇫🇷 [fr](../../fr/docs/AUTO-COMBO.md) · 🇩🇪 [de](../../de/docs/AUTO-COMBO.md) · 🇮🇹 [it](../../it/docs/AUTO-COMBO.md) · 🇷🇺 [ru](../../ru/docs/AUTO-COMBO.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/AUTO-COMBO.md) · 🇯🇵 [ja](../../ja/docs/AUTO-COMBO.md) · 🇰🇷 [ko](../../ko/docs/AUTO-COMBO.md) · 🇸🇦 [ar](../../ar/docs/AUTO-COMBO.md) · 🇮🇳 [hi](../../hi/docs/AUTO-COMBO.md) · 🇮🇳 [in](../../in/docs/AUTO-COMBO.md) · 🇹🇭 [th](../../th/docs/AUTO-COMBO.md) · 🇻🇳 [vi](../../vi/docs/AUTO-COMBO.md) · 🇮🇩 [id](../../id/docs/AUTO-COMBO.md) · 🇲🇾 [ms](../../ms/docs/AUTO-COMBO.md) · 🇳🇱 [nl](../../nl/docs/AUTO-COMBO.md) · 🇵🇱 [pl](../../pl/docs/AUTO-COMBO.md) · 🇸🇪 [sv](../../sv/docs/AUTO-COMBO.md) · 🇳🇴 [no](../../no/docs/AUTO-COMBO.md) · 🇩🇰 [da](../../da/docs/AUTO-COMBO.md) · 🇫🇮 [fi](../../fi/docs/AUTO-COMBO.md) · 🇵🇹 [pt](../../pt/docs/AUTO-COMBO.md) · 🇷🇴 [ro](../../ro/docs/AUTO-COMBO.md) · 🇭🇺 [hu](../../hu/docs/AUTO-COMBO.md) · 🇧🇬 [bg](../../bg/docs/AUTO-COMBO.md) · 🇸🇰 [sk](../../sk/docs/AUTO-COMBO.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/AUTO-COMBO.md) · 🇮🇱 [he](../../he/docs/AUTO-COMBO.md) · 🇵🇭 [phi](../../phi/docs/AUTO-COMBO.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/AUTO-COMBO.md) · 🇨🇿 [cs](../../cs/docs/AUTO-COMBO.md) · 🇹🇷 [tr](../../tr/docs/AUTO-COMBO.md)

---

> Uyarlanabilir puanlamaya sahip kendi kendini yöneten model zincirleri## How It Works

Auto-Combo Engine,**6 faktörlü puanlama işlevini**kullanarak her istek için en iyi sağlayıcıyı/modeli dinamik olarak seçer:

| Faktör     | Ağırlık | Açıklama                                      |
| :--------- | :------ | :-------------------------------------------- | ------------- |
| Kota       | 0.20    | Kalan kapasite [0..1]                         |
| Sağlık     | 0,25    | Devre kesici: KAPALI=1,0, YARIM=0,5, AÇIK=0,0 |
| MaliyetEnv | 0.20    | Ters maliyet (daha ucuz = daha yüksek puan)   |
| GecikmeInv | 0.15    | Ters p95 gecikmesi (daha hızlı = daha yüksek) |
| GörevFit   | 0.10    | Model × görev türü uygunluk puanı             |
| Kararlılık | 0.10    | Gecikme/hatalarda düşük fark                  | ## Mode Packs |

| Paketi                  | Odaklanma         | Anahtar Ağırlığı     |
| :---------------------- | :---------------- | :------------------- | --------------- |
| 🚀**Hızlı Gönderim**    | Hız               | gecikme süresi: 0,35 |
| 💰**Maliyet Tasarrufu** | Ekonomi           | maliyetInv: 0,40     |
| 🎯**Önce Kalite**       | En iyi model      | görevFit: 0,40       |
| 📡**Çevrimdışı Dostu**  | Kullanılabilirlik | kota: 0,40           | ## Self-Healing |

-**Geçici uzaklaştırma**: Puan < 0,2 → 5 dakika süreyle hariç tutuldu (aşamalı geri çekilme, maksimum 30 dakika) -**Devre kesici farkındalığı**: AÇIK → otomatik olarak hariç tutuldu; HALF_OPEN → araştırma istekleri -**Olay modu**: >%50 AÇIK → keşfi devre dışı bırakın, kararlılığı en üst düzeye çıkarın -**Bekleme süresi kurtarma**: Hariç tutmanın ardından ilk istek, zaman aşımı azaltılmış bir "araştırmadır"## Bandit Exploration

İsteklerin %5'i (yapılandırılabilir), araştırma için rastgele sağlayıcılara yönlendirilir. Olay modunda devre dışı bırakıldı.## API
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
6 görev türünde ("kodlama", "inceleme", "planlama", "analiz", "hata ayıklama", "belgeleme") 30'dan fazla model puanlandı. Joker karakter desenlerini destekler (örneğin, '\*-coder' → yüksek kodlama puanı).## Files

| Dosya                                        | Amaç                                    |
| :------------------------------------------- | :-------------------------------------- |
| 'open-sse/services/autoCombo/scoring.ts'     | Puanlama işlevi ve havuz normalizasyonu |
| 'open-sse/services/autoCombo/taskFitness.ts' | Model × görev uygunluğu araması         |
| 'open-sse/services/autoCombo/engine.ts'      | Seçim mantığı, haydut, bütçe sınırı     |
| 'open-sse/services/autoCombo/selfHealing.ts' | Dışlama, sondalar, olay modu            |
| 'open-sse/services/autoCombo/modePacks.ts'   | 4 ağırlık profili                       |
| `src/app/api/combos/auto/route.ts`           | REST API'si                             |
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
