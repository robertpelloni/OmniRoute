<<<<<<< HEAD

---

Last updated: 2026-03-28

## Baseline

There are multiple coverage numbers depending on how the report is computed. For planning, only one of them is useful.

| Metric               | Scope                                                 | Statements / Lines | Branches | Functions | Notes                                               |
| -------------------- | ----------------------------------------------------- | -----------------: | -------: | --------: | --------------------------------------------------- |
| Legacy               | Old `npm run test:coverage`                           |             79.42% |   75.15% |    67.94% | Inflated: counts test files and excludes `open-sse` |
| Diagnostic           | Source-only, excluding tests and excluding `open-sse` |             68.16% |   63.55% |    64.06% | Useful only to isolate `src/**`                     |
| Recommended baseline | Source-only, excluding tests and including `open-sse` |             56.95% |   66.05% |    57.80% | This is the project-wide baseline to improve        |

The recommended baseline is the number to optimize against.

## Rules

- Coverage targets apply to source files, not to `tests/**`.
- `open-sse/**` is part of the product and must remain in scope.
- New code should not reduce coverage in touched areas.
- Prefer testing behavior and branch outcomes over implementation details.
- Prefer temp SQLite databases and small fixtures over broad mocks for `src/lib/db/**`.

## Current command set

- `npm run test:coverage`
  - Main source coverage gate for the unit test suite
  - Generates `text-summary`, `html`, `json-summary`, and `lcov`
- `npm run coverage:report`
  - Detailed file-by-file report from the latest run
- `npm run test:coverage:legacy`
  - Historical comparison only

## Milestones

| Phase   |                 Target | Focus                                             |
| ------- | ---------------------: | ------------------------------------------------- |
| Phase 1 | 60% statements / lines | Quick wins and low-risk utility coverage          |
| Phase 2 | 65% statements / lines | DB and route foundations                          |
| Phase 3 | 70% statements / lines | Provider validation and usage analytics           |
| Phase 4 | 75% statements / lines | `open-sse` translators and helpers                |
| Phase 5 | 80% statements / lines | `open-sse` handlers and executor branches         |
| Phase 6 | 85% statements / lines | Harder edge cases, branch debt, regression suites |
| Phase 7 | 90% statements / lines | Final sweep, gap closure, strict ratchet          |

Branches and functions should ratchet upward with each phase, but the primary hard target is statements / lines.

## Priority hotspots

These files or areas offer the best return for the next phases:

1. `open-sse/handlers`
   - `chatCore.ts` at 7.57%
   - Overall directory at 29.07%
2. `open-sse/translator/request`
   - Overall directory at 36.39%
   - Many translators are still near single-digit coverage
3. `open-sse/translator/response`
   - Overall directory at 8.07%
4. `open-sse/executors`
   - Overall directory at 36.62%
5. `src/lib/db`
   - `models.ts` at 20.66%
   - `registeredKeys.ts` at 34.46%
   - `modelComboMappings.ts` at 36.25%
   - `settings.ts` at 46.40%
   - `webhooks.ts` at 33.33%
6. `src/lib/usage`
   - `usageHistory.ts` at 21.12%
   - `usageStats.ts` at 9.56%
   - `costCalculator.ts` at 30.00%
7. `src/lib/providers`
   - `validation.ts` at 41.16%
8. Low-risk utility and API files for early gains
=======
# Test Coverage Plan (हिन्दी (IN))

🌐 **Languages:** 🇺🇸 [English](../../../../docs/COVERAGE_PLAN.md) · 🇪🇸 [es](../../es/docs/COVERAGE_PLAN.md) · 🇫🇷 [fr](../../fr/docs/COVERAGE_PLAN.md) · 🇩🇪 [de](../../de/docs/COVERAGE_PLAN.md) · 🇮🇹 [it](../../it/docs/COVERAGE_PLAN.md) · 🇷🇺 [ru](../../ru/docs/COVERAGE_PLAN.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/COVERAGE_PLAN.md) · 🇯🇵 [ja](../../ja/docs/COVERAGE_PLAN.md) · 🇰🇷 [ko](../../ko/docs/COVERAGE_PLAN.md) · 🇸🇦 [ar](../../ar/docs/COVERAGE_PLAN.md) · 🇮🇳 [hi](../../hi/docs/COVERAGE_PLAN.md) · 🇮🇳 [in](../../in/docs/COVERAGE_PLAN.md) · 🇹🇭 [th](../../th/docs/COVERAGE_PLAN.md) · 🇻🇳 [vi](../../vi/docs/COVERAGE_PLAN.md) · 🇮🇩 [id](../../id/docs/COVERAGE_PLAN.md) · 🇲🇾 [ms](../../ms/docs/COVERAGE_PLAN.md) · 🇳🇱 [nl](../../nl/docs/COVERAGE_PLAN.md) · 🇵🇱 [pl](../../pl/docs/COVERAGE_PLAN.md) · 🇸🇪 [sv](../../sv/docs/COVERAGE_PLAN.md) · 🇳🇴 [no](../../no/docs/COVERAGE_PLAN.md) · 🇩🇰 [da](../../da/docs/COVERAGE_PLAN.md) · 🇫🇮 [fi](../../fi/docs/COVERAGE_PLAN.md) · 🇵🇹 [pt](../../pt/docs/COVERAGE_PLAN.md) · 🇷🇴 [ro](../../ro/docs/COVERAGE_PLAN.md) · 🇭🇺 [hu](../../hu/docs/COVERAGE_PLAN.md) · 🇧🇬 [bg](../../bg/docs/COVERAGE_PLAN.md) · 🇸🇰 [sk](../../sk/docs/COVERAGE_PLAN.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/COVERAGE_PLAN.md) · 🇮🇱 [he](../../he/docs/COVERAGE_PLAN.md) · 🇵🇭 [phi](../../phi/docs/COVERAGE_PLAN.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/COVERAGE_PLAN.md) · 🇨🇿 [cs](../../cs/docs/COVERAGE_PLAN.md) · 🇹🇷 [tr](../../tr/docs/COVERAGE_PLAN.md)

---

अंतिम अद्यतन: 2026-03-28## Baseline

रिपोर्ट की गणना कैसे की जाती है, इसके आधार पर कई कवरेज संख्याएँ हैं। नियोजन के लिए इनमें से केवल एक ही उपयोगी है।

| मीट्रिक            | दायरा                                                    | कथन/पंक्तियाँ | शाखाएँ |  कार्य | नोट्स                                                                      |
| ------------------ | -------------------------------------------------------- | ------------: | -----: | -----: | -------------------------------------------------------------------------- |
| विरासत             | पुराना `एनपीएम रन टेस्ट:कवरेज`                           |        79.42% | 75.15% | 67.94% | फुलाया गया: परीक्षण फ़ाइलों की गणना करता है और `ओपन-एसएसई` को बाहर करता है |
| निदान              | केवल-स्रोत, परीक्षणों को छोड़कर और `ओपन-एसएसई` को छोड़कर |        68.16% | 63.55% | 64.06% | केवल `src/**` को अलग करने के लिए उपयोगी                                    |
| अनुशंसित आधार रेखा | केवल स्रोत, परीक्षणों को छोड़कर और `ओपन-एसएसई` सहित      |        56.95% | 66.05% | 57.80% | यह सुधार के लिए परियोजना-व्यापी आधार रेखा है                               |

अनुशंसित आधार रेखा वह संख्या है जिसके विरुद्ध अनुकूलन किया जाना है।## Rules

- कवरेज लक्ष्य स्रोत फ़ाइलों पर लागू होते हैं, `परीक्षण/**` पर नहीं।
- `ओपन-एसएसई/**` उत्पाद का हिस्सा है और इसे दायरे में रहना चाहिए।
- नए कोड से प्रभावित क्षेत्रों में कवरेज कम नहीं होनी चाहिए।
- कार्यान्वयन विवरण पर परीक्षण व्यवहार और शाखा परिणामों को प्राथमिकता दें।
- `src/lib/db/**` के लिए व्यापक मॉक की तुलना में अस्थायी SQLite डेटाबेस और छोटे फिक्स्चर को प्राथमिकता दें।## Current command set

- `एनपीएम रन टेस्ट:कवरेज`
  - यूनिट परीक्षण सूट के लिए मुख्य स्रोत कवरेज गेट
  - `पाठ-सारांश`, `html`, `json-सारांश`, और `lcov` उत्पन्न करता है
- `एनपीएम रन कवरेज: रिपोर्ट`
  - नवीनतम रन से विस्तृत फ़ाइल-दर-फ़ाइल रिपोर्ट
- `एनपीएम रन टेस्ट:कवरेज:लिगेसी`
  - केवल ऐतिहासिक तुलना## Milestones

| चरण   |            लक्ष्य | फोकस                                       |
| ----- | ----------------: | ------------------------------------------ |
| चरण 1 | 60% कथन/पंक्तियाँ | त्वरित जीत और कम जोखिम वाली उपयोगिता कवरेज |
| चरण 2 | 65% कथन/पंक्तियाँ | डीबी और मार्ग नींव                         |
| चरण 3 | 70% कथन/पंक्तियाँ | प्रदाता सत्यापन और उपयोग विश्लेषण          |
| चरण 4 | 75% कथन/पंक्तियाँ | `ओपन-एसएसई` अनुवादक और सहायक               |
| चरण 5 | 80% कथन/पंक्तियाँ | `ओपन-एसएसई` हैंडलर और निष्पादक शाखाएं      |
| चरण 6 | 85% कथन/पंक्तियाँ | हार्डर एज मामले, शाखा ऋण, प्रतिगमन सुइट्स  |
| चरण 7 | 90% कथन/पंक्तियाँ | अंतिम स्वीप, गैप क्लोजर, सख्त रैचेट        |

शाखाओं और कार्यों को प्रत्येक चरण के साथ ऊपर की ओर बढ़ना चाहिए, लेकिन प्राथमिक कठिन लक्ष्य कथन/पंक्तियाँ हैं।## Priority hotspots

ये फ़ाइलें या क्षेत्र अगले चरणों के लिए सर्वोत्तम रिटर्न प्रदान करते हैं:

1. `ओपन-एसएसई/हैंडलर`
   - `chatCore.ts` 7.57% पर
   - समग्र निर्देशिका 29.07% पर
2. `ओपन-एसएसई/अनुवादक/अनुरोध`
   - समग्र निर्देशिका 36.39% पर
   - कई अनुवादक अभी भी एकल-अंकीय कवरेज के करीब हैं
3. `ओपन-एसएसई/अनुवादक/प्रतिक्रिया`
   - कुल निर्देशिका 8.07% पर
4. `ओपन-एसएसई/निष्पादक`
   - समग्र निर्देशिका 36.62% पर
5. `src/lib/db`
   - `models.ts` 20.66% पर
   - `पंजीकृतKeys.ts` 34.46% पर
   - `modelComboMappings.ts` 36.25% पर
   - `settings.ts` 46.40% पर
   - `webhooks.ts` 33.33% पर
6. `src/lib/usage`
   - `useHistory.ts` 21.12% पर
   - `useStats.ts` 9.56% पर
   - `costcalculator.ts` 30.00% पर
7. `src/lib/प्रदाता`
   - `validation.ts` 41.16% पर
8. शीघ्र लाभ के लिए कम जोखिम वाली उपयोगिता और एपीआई फ़ाइलें
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
   - `src/shared/utils/upstreamError.ts`
   - `src/shared/utils/apiAuth.ts`
   - `src/lib/api/errorResponse.ts`
   - `src/app/api/settings/require-login/route.ts`
<<<<<<< HEAD
   - `src/app/api/providers/[id]/models/route.ts`

## Execution checklist

### Phase 1: 56.95% -> 60%

- [x] Fix coverage metric so it reflects source code instead of test files
- [x] Keep a legacy coverage script for comparison
- [x] Record the baseline and hotspots in-repo
- [ ] Add focused tests for low-risk utilities:
=======
   - `src/app/api/providers/[id]/models/route.ts`## Execution checklist

### Phase 1: 56.95% -> 60%

- [x] कवरेज मीट्रिक को ठीक करें ताकि यह परीक्षण फ़ाइलों के बजाय स्रोत कोड को प्रतिबिंबित करे
- [x] तुलना के लिए एक विरासत कवरेज स्क्रिप्ट रखें
- [x] बेसलाइन और हॉटस्पॉट को रेपो में रिकॉर्ड करें
- [ ] कम जोखिम वाली उपयोगिताओं के लिए केंद्रित परीक्षण जोड़ें:
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  - `src/shared/utils/upstreamError.ts`
  - `src/shared/utils/fetchTimeout.ts`
  - `src/lib/api/errorResponse.ts`
  - `src/shared/utils/apiAuth.ts`
  - `src/lib/display/names.ts`
<<<<<<< HEAD
- [ ] Add route tests for:
  - `src/app/api/settings/require-login/route.ts`
  - `src/app/api/providers/[id]/models/route.ts`

### Phase 2: 60% -> 65%

- [ ] Add DB-backed tests for:
  - `src/lib/db/modelComboMappings.ts`
  - `src/lib/db/settings.ts`
  - `src/lib/db/registeredKeys.ts`
- [ ] Cover branch behavior in:
  - `src/lib/providers/validation.ts`
  - `src/app/api/v1/embeddings/route.ts`
  - `src/app/api/v1/moderations/route.ts`

### Phase 3: 65% -> 70%

- [ ] Add usage analytics tests for:
  - `src/lib/usage/usageHistory.ts`
  - `src/lib/usage/usageStats.ts`
  - `src/lib/usage/costCalculator.ts`
- [ ] Expand route coverage for proxy management and settings branches

### Phase 4: 70% -> 75%

- [ ] Cover translator helpers and central translation paths:
  - `open-sse/translator/index.ts`
  - `open-sse/translator/helpers/*`
  - `open-sse/translator/request/*`
  - `open-sse/translator/response/*`

### Phase 5: 75% -> 80%

- [ ] Add handler-level tests for:
  - `open-sse/handlers/chatCore.ts`
  - `open-sse/handlers/responsesHandler.js`
  - `open-sse/handlers/imageGeneration.js`
  - `open-sse/handlers/embeddings.js`
- [ ] Add executor branch coverage for provider-specific auth, retries, and endpoint overrides

### Phase 6: 80% -> 85%

- [ ] Merge more edge-case suites into the main coverage path
- [ ] Increase function coverage for DB modules with weak constructor/helper coverage
- [ ] Close branch gaps in `settings.ts`, `registeredKeys.ts`, `validation.ts`, and translator helpers

### Phase 7: 85% -> 90%

- [ ] Treat the remaining low-coverage files as blockers
- [ ] Add regression tests for every uncovered production bug fixed during the push to 90%
- [ ] Raise the coverage gate in CI only after the local baseline is stable for at least two consecutive runs

## Ratchet policy

Update `npm run test:coverage` thresholds only after the project actually exceeds the next milestone with a comfortable buffer.

Recommended ratchet sequence:

1. 55/60/55
2. 60/62/58
3. 65/64/62
4. 70/66/66
5. 75/70/72
6. 80/75/78
7. 85/80/84
8. 90/85/88

Order is `statements-lines / branches / functions`.

## Known gap

The current coverage command measures the main Node unit suite and includes source reached from it, including `open-sse`. It does not yet merge Vitest coverage into a single unified report. That merge is worth doing later, but it is not a blocker for starting the 60% -> 80% climb.
=======
- [ ] इसके लिए रूट परीक्षण जोड़ें:
  - `src/app/api/settings/require-login/route.ts`
  - `src/app/api/providers/[id]/models/route.ts`### Phase 2: 60% -> 65%

- [ ] इसके लिए डीबी-समर्थित परीक्षण जोड़ें:
  - `src/lib/db/modelComboMappings.ts`
  - `src/lib/db/settings.ts`
  - `src/lib/db/registeredKeys.ts`
- [ ] इसमें शाखा व्यवहार को कवर करें:
  - `src/lib/providers/validation.ts`
  - `src/app/api/v1/embeddings/route.ts`
  - `src/app/api/v1/moderations/route.ts`### Phase 3: 65% -> 70%

- [ ] इसके लिए उपयोग विश्लेषण परीक्षण जोड़ें:
  - `src/lib/usage/usageHistory.ts`
  - `src/lib/usage/usageStats.ts`
  - `src/lib/usage/costकैलकुलेटर.ts`
- [ ] प्रॉक्सी प्रबंधन और सेटिंग्स शाखाओं के लिए रूट कवरेज का विस्तार करें### Phase 4: 70% -> 75%

- [ ] अनुवादक सहायकों और केंद्रीय अनुवाद पथों को कवर करें:
  - `ओपन-sse/translator/index.ts`
  - `ओपन-एसएसई/अनुवादक/हेल्पर्स/*`
  - `ओपन-एसएसई/अनुवादक/अनुरोध/*`
  - `ओपन-एसएसई/अनुवादक/प्रतिक्रिया/*`### Phase 5: 75% -> 80%

- [ ] इसके लिए हैंडलर-स्तरीय परीक्षण जोड़ें:
  - `ओपन-एसएसई/हैंडलर/चैटकोर.टीएस`
  - `ओपन-एसएसई/हैंडलर/रेस्पॉन्सहैंडलर.जेएस`
  - `ओपन-एसएसई/हैंडलर/इमेजजेनरेशन.जेएस`
  - `ओपन-एसएसई/हैंडलर/एम्बेडिंग्स.जेएस`
- [ ] प्रदाता-विशिष्ट प्रमाणीकरण, पुनः प्रयास और समापन बिंदु ओवरराइड के लिए निष्पादक शाखा कवरेज जोड़ें### Phase 6: 80% -> 85%

- [ ] अधिक एज-केस सुइट्स को मुख्य कवरेज पथ में मर्ज करें
- [ ] कमजोर कंस्ट्रक्टर/हेल्पर कवरेज वाले डीबी मॉड्यूल के लिए फ़ंक्शन कवरेज बढ़ाएं
- [ ] `settings.ts`, `registeredKeys.ts`, `validation.ts` और अनुवादक सहायकों में शाखा अंतराल बंद करें### Phase 7: 85% -> 90%

- [ ] शेष कम-कवरेज फ़ाइलों को अवरोधक मानें
- [ ] पुश के दौरान 90% तक ठीक किए गए प्रत्येक उजागर उत्पादन बग के लिए प्रतिगमन परीक्षण जोड़ें
- [ ] स्थानीय बेसलाइन कम से कम दो लगातार रन के लिए स्थिर होने के बाद ही सीआई में कवरेज गेट बढ़ाएं## Ratchet policy

`एनपीएम रन टेस्ट:कवरेज` थ्रेसहोल्ड को तभी अपडेट करें जब प्रोजेक्ट वास्तव में एक आरामदायक बफर के साथ अगले मील के पत्थर को पार कर जाए।

अनुशंसित शाफ़्ट अनुक्रम:

1.55/60/55 2. 60/62/58 3. 65/64/62 4. 70/66/66 5. 75/70/72 6. 80/75/78 7. 85/80/84 8. 90/85/88

आदेश `कथन-पंक्तियाँ/शाखाएँ/फ़ंक्शन` है।## Known gap

वर्तमान कवरेज कमांड मुख्य नोड यूनिट सुइट को मापता है और इसमें `ओपन-एसएसई` सहित उससे प्राप्त स्रोत शामिल होता है। यह अभी तक विटेस्ट कवरेज को एक एकीकृत रिपोर्ट में विलय नहीं करता है। वह विलय बाद में करने लायक है, लेकिन यह 60% -> 80% चढ़ाई शुरू करने में अवरोधक नहीं है।
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
