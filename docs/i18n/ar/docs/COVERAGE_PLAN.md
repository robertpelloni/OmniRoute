# Test Coverage Plan (العربية)

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
🌐 **Languages:** 🇺🇸 [English](../../../../docs/COVERAGE_PLAN.md) · 🇪🇸 [es](../../es/docs/COVERAGE_PLAN.md) · 🇫🇷 [fr](../../fr/docs/COVERAGE_PLAN.md) · 🇩🇪 [de](../../de/docs/COVERAGE_PLAN.md) · 🇮🇹 [it](../../it/docs/COVERAGE_PLAN.md) · 🇷🇺 [ru](../../ru/docs/COVERAGE_PLAN.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/COVERAGE_PLAN.md) · 🇯🇵 [ja](../../ja/docs/COVERAGE_PLAN.md) · 🇰🇷 [ko](../../ko/docs/COVERAGE_PLAN.md) · 🇸🇦 [ar](../../ar/docs/COVERAGE_PLAN.md) · 🇮🇳 [hi](../../hi/docs/COVERAGE_PLAN.md) · 🇮🇳 [in](../../in/docs/COVERAGE_PLAN.md) · 🇹🇭 [th](../../th/docs/COVERAGE_PLAN.md) · 🇻🇳 [vi](../../vi/docs/COVERAGE_PLAN.md) · 🇮🇩 [id](../../id/docs/COVERAGE_PLAN.md) · 🇲🇾 [ms](../../ms/docs/COVERAGE_PLAN.md) · 🇳🇱 [nl](../../nl/docs/COVERAGE_PLAN.md) · 🇵🇱 [pl](../../pl/docs/COVERAGE_PLAN.md) · 🇸🇪 [sv](../../sv/docs/COVERAGE_PLAN.md) · 🇳🇴 [no](../../no/docs/COVERAGE_PLAN.md) · 🇩🇰 [da](../../da/docs/COVERAGE_PLAN.md) · 🇫🇮 [fi](../../fi/docs/COVERAGE_PLAN.md) · 🇵🇹 [pt](../../pt/docs/COVERAGE_PLAN.md) · 🇷🇴 [ro](../../ro/docs/COVERAGE_PLAN.md) · 🇭🇺 [hu](../../hu/docs/COVERAGE_PLAN.md) · 🇧🇬 [bg](../../bg/docs/COVERAGE_PLAN.md) · 🇸🇰 [sk](../../sk/docs/COVERAGE_PLAN.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/COVERAGE_PLAN.md) · 🇮🇱 [he](../../he/docs/COVERAGE_PLAN.md) · 🇵🇭 [phi](../../phi/docs/COVERAGE_PLAN.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/COVERAGE_PLAN.md) · 🇨🇿 [cs](../../cs/docs/COVERAGE_PLAN.md) · 🇹🇷 [tr](../../tr/docs/COVERAGE_PLAN.md)

---

آخر تحديث: 2026-03-28##

هناك تفاصيل تفصيلية متعددة حول كيفية حساب التقرير. للتخطيط، واحد منهم فقط مفيد.

| متري         | النطاق                                 | بقدر / سطور |    فرع | الوظائف | تعليقات                                         |
| ------------ | -------------------------------------- | ----------: | -----: | ------: | ----------------------------------------------- |
| تراث         | اختبار تشغيل npm القديم: غلاف          |      79.42% | 75.15% |  67.94% | مضخم: يحصي اختبارات الاختبار ويستبعد `open-sse` |
| التشخيص      | المصدر فقط، التمييز و السبب `open-sse` |      68.16% | 63.55% |  64.06% | مفيد فقط لعزل `src/**`                          |
| خط الأساس له | المصدر فقط، لغرض القسم `open-sse`      |      56.95% | 66.05% |  57.80% | هذا هو خط الأساس لتحسين المشروع                 |

خط الأساس به هو الرقم المطلوب وتحسينه.## Rules

- تستهدف تحديد الملفات المصدر، وليس على "الاختبارات/\*\*".
- `open-sse/**` هو جزء من المنتج ويجب أن يختفي في نطاقه.
- يجب ألا تحدد الكود الجديد من المناطق التي تم لمسها.
- تفضيل الاختبار ونتائج الجهة على تفاصيل التنفيذ.
- تفضيلات متطلبات بيانات SQLite المطر والتركيبات الصغيرة على الارتباطات المتخصصة لـ src/lib/db/\*\*`.## مجموعة الأوامر الحالية

- `اختبار تشغيل npm: التغطية`
  - بوابة المصدر الرئيسي لمجموعة اختبار الوحدة
  - إنشاء ملخص النص، وhtml، وملخص json، ولكوف
- `تغطية تشغيل npm: تقرير`
  - تقرير مفصل لملف الآخر من العملية الأخيرة
- `اختبار تشغيل npm:التغطية:تراث`
  - لتحدث التاريخية فقط## المعالم

| المرحلة         |         الهدف | التركيز                                           |
| --------------- | ------------: | ------------------------------------------------- |
| المرحلة 1       | 60% لذلك/سطور | مكاسب سريعة وتغطية شاملة لمختلف الفئات            |
| المرحلة الثانية | 65% لذلك/سطور | أسس قاعدة البيانات والطريق                        |
| المرحلة 3       | 70% لذلك/سطور | التحقق من صحة الموفر وتحليلات الاستخدام           |
| الخطوة الرابعة  | 75% لذلك/سطور | مترجمون ومساعدون `open-sse'                       |
| المرحلة الخامسة | 80% لذلك/سطور | رامات وروعة الزجاجة `open-sse`                    |
| المرحلة السادسة | 85% لذلك/سطور | الحالات القصوى، الديون الدينية، وأجنحة الانحدار   |
| المرحلة السابعة | 90% لذلك/سطور | الاجتياح النهائي، الإغلاق الشامل، السقاطة الساكنة |

يجب أن ترتكز الجذور والوظائف مع كل مرحلة، ولكن الهدف الأساسي الثابت هو البيانات/السطور.## النقاط الساخنة ذات الأولوية

توفر هذه الملفات أو المناطق أفضل عائد للمراحل التالية:1. "فتح sse/معالجات".

- `chatCore.ts` بنسبة 7.57%
- الدليل الشامل بنسبة 29.07% 2.`open-sse/translator/request`
- الرد المرسل إليه 36.39%
- لا يزال العديد من المترجمين على مقربة من تغطية ما يكفي من رقم واحد

3. "open-sse/translator/response".
   - الرد المرسل إليه 8.07%
4. "open-sse/المنفذين".
   - البريد المرسل إليه 36.62% 5.`src/lib/db`
   - `models.ts` بنسبة 20.66%
   - "المفاتيح الجديدة" بنسبة 34.46%
   - `modelComboMappings.ts` بنسبة 36.25%
   - `settings.ts` عند 46.40%
   - `webhooks.ts' بنسبة 33.33%
6.`src/lib/usage`
   - `usageHistory.ts` بنسبة 21.12%
   - `usageStats.ts` بنسبة 9.56%
   - `costCalculator.ts` بنسبة 30.00% 7.`src/lib/providers`
   - `validation.ts` بنسبة 41.16%
5. ملفات المساعدة وواجهة برمجة التطبيقات (API) ذات القدرة الضعيفة على فقدان القليل
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
   - `src/app/api/providers/[id]/models/route.ts`## قائمة التحقق من التنفيذ### Phase 1: 56.95% -> 60%

- [x] مقياس التغطية بحيث يعكس اللون الأفضل من ملفات الاختبار
- [x] تستخدم بنص التغطية القديم للمقارنة
- [x] قام بعدم وجود خط الأساس ونقاط الاتصال في الريبو
- [ ] إضافة السيولة المركزية للمرافق المتعددة:
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
=======
- [ ] إضافة السيولة لـ:
  - `src/app/api/settings/require-login/route.ts`
  - `src/app/api/providers/[id]/models/route.ts`### المرحلة الثانية: 60% -> 65%

- [ ] إضافة السيولة المدعومة بقاعدة البيانات لـ:
  - `src/lib/db/modelComboMappings.ts`
  - `src/lib/db/settings.ts`
  - `src/lib/db/registeredKeys.ts`
- [ ] اشتباكات الفرع في:
  - `src/lib/providers/validation.ts`
  - `src/app/api/v1/embeddings/route.ts`
  - `src/app/api/v1/moderations/route.ts`### المرحلة الثالثة: 65% -> 70%

- [ ] إضافة السيولة تحليلات الاستخدام لـ:
  - `src/lib/usage/usageHistory.ts`
  - `src/lib/usage/usageStats.ts`
  - `src/lib/usage/costCalculator.ts`
- [ ] التغطية المكثفة للمحتوى الإبداعي متنوع ### المرحلة 4: 70% -> 75%

- [ ] تغطية مساعدي المترجم ومسارات الترجمة المركزية:
  - `open-sse/translator/index.ts`
  - `open-sse/translator/helpers/*`
  - `open-sse/translator/request/*`
  - `open-sse/translator/response/*`### المرحلة الخامسة: 75% -> 80%

- [ ] إضافة السيولة على مستوى رام لـ:
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  - `open-sse/handlers/chatCore.ts`
  - `open-sse/handlers/responsesHandler.js`
  - `open-sse/handlers/imageGeneration.js`
  - `open-sse/handlers/embeddings.js`
<<<<<<< HEAD
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
=======
- [ ] إضافة المنفذ الفرعي للمصادقة الخاصة بالموفر، لتقديم المحاولة، وتجاوزات نقطة النهاية### المرحلة 6: 80% -> 85%

- [ ] دمج المزيد من مجموعات الأحداث المتقدمة في مسار التغطية الرئيسية
- [ ] الزيادة الوظيفية للوحدات قاعدة البيانات ذات التغطية الضعيفة للمنشئ/المساعد
- [ ] إغلاق فجوات الفروع في "settings.ts"، و"registeredKeys.ts"، و"validation.ts"، ومساعدي المترجم### المرحلة السابعة: 85% -> 90%

- [ ] بعض القضايا ذات الميزانية المحدودة المتبقية على أدوات الحظر
- [ ] إضافة نسبة الانحدار لكل خطأ إنتاجي تم اكتشافه وإصلاحه أثناء الدفع إلى 90%
- [ ] رفع بوابة التغطية في CI فقط بعد أن يكون الخط المحلي الأساسي قائمًا لتشغيلتين متتاليتين على الأقل## Ratchet Policy

قم بالتأكيد بعتبات تشغيل npm: التغطية فقط بعد التجاوز الفعلي فعليًا، المرحلة الرئيسية التالية في مخزن الراحة.

سلسلة السقاطة لسبب:
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

1. 55/60/55
2. 60/62/58
3. 65/64/62
4. 70/66/66
5. 75/70/72
6. 80/75/78
7. 85/80/84
8. 90/85/88

<<<<<<< HEAD
Order is `statements-lines / branches / functions`.

## Known gap

The current coverage command measures the main Node unit suite and includes source reached from it, including `open-sse`. It does not yet merge Vitest coverage into a single unified report. That merge is worth doing later, but it is not a blocker for starting the 60% -> 80% climb.
=======
الترتيب هو "أسطر البيانات / الفروع / الوظائف".## الثغرة المعروفة

يقيس أمر التغطية الحالية لمجموعة العقد الرئيسية بمشاركة المصدر الذي يتم الوصول إليه منه، بما في ذلك `open-sse`. لم أدمج بعد تغطية Vitest في التقرير الموحد الواحد. وقد تم إنجاز هذا لاحقًا، ولكن لا تزيد سرعة زيادة الذاكرة بنسبة 60% -> 80%.
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
