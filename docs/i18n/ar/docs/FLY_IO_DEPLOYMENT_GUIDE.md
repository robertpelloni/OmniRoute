# OmniRoute Fly.io 部署指南 (العربية)

<<<<<<< HEAD
🌐 **Languages:** 🇺🇸 [English](../../../../docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇸🇦 [ar](../../ar/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇧🇬 [bg](../../bg/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇧🇩 [bn](../../bn/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇨🇿 [cs](../../cs/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇩🇰 [da](../../da/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇩🇪 [de](../../de/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇪🇸 [es](../../es/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇷 [fa](../../fa/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇫🇮 [fi](../../fi/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇫🇷 [fr](../../fr/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇳 [gu](../../gu/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇱 [he](../../he/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇳 [hi](../../hi/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇭🇺 [hu](../../hu/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇩 [id](../../id/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇹 [it](../../it/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇯🇵 [ja](../../ja/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇰🇷 [ko](../../ko/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇳 [mr](../../mr/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇲🇾 [ms](../../ms/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇳🇱 [nl](../../nl/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇳🇴 [no](../../no/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇵🇭 [phi](../../phi/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇵🇱 [pl](../../pl/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇵🇹 [pt](../../pt/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇷🇴 [ro](../../ro/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇷🇺 [ru](../../ru/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇸🇰 [sk](../../sk/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇸🇪 [sv](../../sv/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇰🇪 [sw](../../sw/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇳 [ta](../../ta/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇳 [te](../../te/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇹🇭 [th](../../th/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇹🇷 [tr](../../tr/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇵🇰 [ur](../../ur/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇻🇳 [vi](../../vi/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/FLY_IO_DEPLOYMENT_GUIDE.md)

---

本文档记录 OmniRoute 在 Fly.io 上的实际部署方法，适用于两类场景：

- 首次把当前项目部署到 Fly.io
- 后续代码更新后继续发布
- 新项目参考同样流程部署

本文基于当前项目已经验证通过的配置整理，应用名为 `omniroute`。

---

## 1. 部署目标

- 平台：Fly.io
- 部署方式：本地 `flyctl` 直接发布
- 运行方式：使用仓库内现有 `Dockerfile` 和 `fly.toml`
- 数据持久化：Fly Volume 挂载到 `/data`
- 访问地址：`https://omniroute.fly.dev/`

---

## 2. 当前项目关键配置

当前仓库中的 `fly.toml` 已确认包含以下关键项：

```toml
app = 'omniroute'
primary_region = 'sin'

[[mounts]]
  source = 'data'
  destination = '/data'

[processes]
  app = 'node run-standalone.mjs'

[http_service]
  internal_port = 20128

[env]
  TZ = "Asia/Shanghai"
  HOST = "0.0.0.0"
  HOSTNAME = "0.0.0.0"
  BIND = "0.0.0.0"
```

说明：

- `app = 'omniroute'` 决定实际部署到哪个 Fly 应用
- `destination = '/data'` 决定持久卷挂载目录
- 本项目必须让 `DATA_DIR=/data`，否则数据库和密钥会写到容器临时目录

---
=======
🌐 **Languages:** 🇺🇸 [English](../../../../docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇪🇸 [es](../../es/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇫🇷 [fr](../../fr/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇩🇪 [de](../../de/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇹 [it](../../it/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇷🇺 [ru](../../ru/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇯🇵 [ja](../../ja/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇰🇷 [ko](../../ko/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇸🇦 [ar](../../ar/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇳 [hi](../../hi/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇳 [in](../../in/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇹🇭 [th](../../th/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇻🇳 [vi](../../vi/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇩 [id](../../id/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇲🇾 [ms](../../ms/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇳🇱 [nl](../../nl/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇵🇱 [pl](../../pl/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇸🇪 [sv](../../sv/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇳🇴 [no](../../no/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇩🇰 [da](../../da/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇫🇮 [fi](../../fi/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇵🇹 [pt](../../pt/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇷🇴 [ro](../../ro/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇭🇺 [hu](../../hu/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇧🇬 [bg](../../bg/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇸🇰 [sk](../../sk/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇮🇱 [he](../../he/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇵🇭 [phi](../../phi/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇨🇿 [cs](../../cs/docs/FLY_IO_DEPLOYMENT_GUIDE.md) · 🇹🇷 [tr](../../tr/docs/FLY_IO_DEPLOYMENT_GUIDE.md)

---

تم إنشاء OmniRoute في Fly.io من خلال الرابط التالي:

- تم تطويره بواسطة Fly.io
- 后续代码更新后继续发布
- 新项目参考同样流程部署

من المحتمل أن هذا هو السبب في أن كل ما عليك فعله هو ` Omniroute`.---## 1. 部署目标

- الاسم: Fly.io
- 部署方式: تم إنشاء `flyctl` 直接接发布
- قم بتنزيل الرابط: قم بتنزيل الملف `Dockerfile` و`fly.toml`.
- الاسم الأصلي: Fly Volume موجود في `/data`
- الرابط:`https://omniroute.fly.dev/`---## 2. 当前项目关键配置

قم بزيارة الرابط التالي `fly.toml` من خلال الرابط التالي:```toml
التطبيق = "الطريق الشامل"
Primary_region = 'الخطيئة'

[[يتصاعد]]
المصدر = "البيانات"
الوجهة = '/ البيانات'

[العمليات]
التطبيق = 'عقدة تشغيل Standalone.mjs'

[http_service]
منفذ داخلي = 20128

[بيئة]
TZ = "آسيا/شنغهاي"
المضيف = "0.0.0.0"
اسم المضيف = "0.0.0.0"
ربط = "0.0.0.0"```

الاسم:

- `app = 'omniroute'' تطبيق Fly 应用
- `الوجهة = '/ البيانات''
- قم بإلغاء تحديد `DATA_DIR=/data`، وقم بإلغاء تحديد موقع الويب الخاص بك---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## 3. 必备工具

### 3.1 安装 Fly CLI

<<<<<<< HEAD
Windows PowerShell：

```powershell
pwsh -Command "iwr https://fly.io/install.ps1 -useb | iex"
```

如果安装脚本在当前环境失败，也可以手动下载 `flyctl` 二进制并放到 `PATH` 中。

### 3.2 登录 Fly 账号

```powershell
flyctl auth login
```
=======
ويندوز بوويرشيل:```powershell
pwsh -Command "iwr https://fly.io/install.ps1 -useb | iex"

````

يمكن أن يكون هذا هو الحال بالنسبة لـ "flyctl" أو "PATH" أو "PATH".### 3.2 登录 Fly 账号```powershell
flyctl auth login
````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### 3.3 检查登录状态

```powershell
flyctl auth whoami
flyctl version
```

---

## 4. 首次部署当前项目

### 4.1 获取代码并进入目录

```powershell
git clone https://github.com/xiaoge1688/OmniRoute.git
cd OmniRoute
```

### 4.2 确认应用名

<<<<<<< HEAD
打开 `fly.toml`，重点看这一行：

```toml
app = 'omniroute'
```

如果你准备部署到自己的新应用，可改成全局唯一名称，例如：

```toml
app = 'omniroute-yourname'
```

注意：

- 控制台里要看的是与 `fly.toml` 里 `app` 一致的应用
- 以前如果用过别的名字，例如 `oroute`，不要和 `omniroute` 混淆

### 4.3 创建应用

如果该应用尚不存在：

```powershell
flyctl apps create omniroute
```

如果你已经改成别的应用名，把 `omniroute` 替换成你的名字。

### 4.4 首次部署

```powershell
flyctl deploy
```
=======
قم بزيارة `fly.toml`، باستخدام الرابط التالي:`toml
التطبيق = "الطريق الشامل"`

يجب أن تكون قادرًا على التعامل مع هذه المشكلة على النحو التالي:```toml
app = 'omniroute-yourname'

````

الاسم:

- قم بالنقر على زر "fly.toml" من خلال "التطبيق" الموجود على الرابط
- 以前如果用过别的名字، 例如 `الطريق`، 不要 و``الطريق الشامل` 混淆### 4.3 创建应用

اسم المنتج:```powershell
تقوم تطبيقات flyctl بإنشاء طريق شامل```

من المؤكد أن هذا يعني أن "الطريق الشامل" هو الطريق الصحيح.### 4.4 首次部署

```powershell
نشر flyctl```
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

---

## 5. 必配参数

<<<<<<< HEAD
本项目在 Fly.io 上建议至少配置以下参数。

### 5.1 已验证使用的参数

这些参数已经在当前 `omniroute` 应用上实际部署：
=======
تم إطلاق لعبة Fly.io على جهاز الكمبيوتر الخاص بك.### 5.1 已验证使用的参数

أفضل الطرق للوصول إلى الطريق الشامل هي:
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

- `API_KEY_SECRET`
- `DATA_DIR`
- `JWT_SECRET`
- `MACHINE_ID_SALT`
- `NEXT_PUBLIC_BASE_URL`
<<<<<<< HEAD
- `STORAGE_ENCRYPTION_KEY`

### 5.2 关于 `INITIAL_PASSWORD`

当前项目没有设置 `INITIAL_PASSWORD`，因为本次部署按需求不使用它。

如果不设置：

- 启动日志会提示默认密码是 `CHANGEME`
- 部署后应尽快在系统设置中修改登录密码

如果你希望无人值守初始化后台密码，也可以后续补：

- `INITIAL_PASSWORD`

---
=======
- `STORAGE_ENCRYPTION_KEY`### 5.2 关于 `INITIAL_PASSWORD`

اختر كلمة مرور `INITIAL_PASSWORD`، وقم بإلغاء تحديدها.

العنوان:

- 启动日志会提示默认密码是 `CHANGEME'
- ماكينات غسيل الملابس

يجب أن تكون قادرًا على التعامل مع هذه المشكلة:

- `INITIAL_PASSWORD`---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## 6. 推荐参数说明

### 6.1 Secrets 中设置

<<<<<<< HEAD
建议放入 Fly Secrets：

| 变量名                   | 是否推荐 | 说明                           |
| ------------------------ | -------- | ------------------------------ |
| `API_KEY_SECRET`         | 必需     | API Key 生成与校验使用         |
| `JWT_SECRET`             | 必需     | 登录态和 JWT 签名使用          |
| `STORAGE_ENCRYPTION_KEY` | 强烈推荐 | 加密存储敏感连接信息           |
| `MACHINE_ID_SALT`        | 推荐     | 生成稳定机器标识               |
| `INITIAL_PASSWORD`       | 可选     | 首次部署时直接指定后台初始密码 |
| OAuth/API 私密凭证       | 按需     | 各类外部平台鉴权配置           |

### 6.2 当前项目推荐值

| 变量名                 | 推荐值                      |
| ---------------------- | --------------------------- |
| `DATA_DIR`             | `/data`                     |
| `NEXT_PUBLIC_BASE_URL` | `https://omniroute.fly.dev` |

说明：

- `DATA_DIR=/data` 非常关键，必须与 Fly Volume 挂载点一致
- `NEXT_PUBLIC_BASE_URL` 用于调度器和前端回调等场景

---

## 7. 一键设置参数

下面命令会生成安全随机值，并把当前项目需要的参数一次性写入 Fly Secrets。

说明：

- 不包含 `INITIAL_PASSWORD`
- 适用于当前项目 `omniroute`

```powershell
=======
أسرار الطيران:

| 变量名 | 是否推荐 | 说明 |
| ------------------------ | -------- | ------------------------------ |
| `API_KEY_SECRET` | 必需 | مفتاح API 生成与校验使用 |
| `JWT_SECRET` | 必需 | 登录态和 JWT 签名使用 |
| `STORAGE_ENCRYPTION_KEY` | 强烈推荐 | 加密存储敏感连接信息 |
| `MACHINE_ID_SALT` | جديد | 生成稳定机器标识 |
| `INITIAL_PASSWORD` | 可选 | ماكينات غسيل الملابس في الصين |
| OAuth/API 私密凭证 | الصفحة الرئيسية | 各类外部平台鉴权配置 |### 6.2 当前项目推荐值

| 变量名 | جديد |
| ---------------------- | --------------------------- |
| `DATA_DIR` | `/ البيانات` |
| `NEXT_PUBLIC_BASE_URL` | `https://omniroute.fly.dev` |

الاسم:

- `DATA_DIR=/data` 非常关键،تحديد حجم الطيران
- `NEXT_PUBLIC_BASE_URL' عنوان البريد الإلكتروني الخاص بنا---

## 7. 一键设置参数

تم إنشاء هذا الرابط من قبل شركة Fly Secrets.

الاسم:

- اختر "INITIAL_PASSWORD".
- 适用于当前项目 "شامل"```powershell
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
$apiKeySecret = [Convert]::ToHexString((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 })).ToLower()
$jwtSecret = [Convert]::ToHexString((1..64 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 })).ToLower()
$machineIdSalt = [Convert]::ToHexString((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 })).ToLower()
$storageKey = [Convert]::ToHexString((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 })).ToLower()

flyctl secrets set `
  API_KEY_SECRET=$apiKeySecret `
  JWT_SECRET=$jwtSecret `
  MACHINE_ID_SALT=$machineIdSalt `
  STORAGE_ENCRYPTION_KEY=$storageKey `
  DATA_DIR=/data `
  NEXT_PUBLIC_BASE_URL=https://omniroute.fly.dev `
  -a omniroute
<<<<<<< HEAD
```

如果你还要加初始密码：

```powershell
flyctl secrets set INITIAL_PASSWORD=你的强密码 -a omniroute
```
=======
````

ما هي أفضل الطرق التي يجب اتباعها:`powershell
مجموعة أسرار flyctl INITIAL_PASSWORD=你的强密码 - طريق شامل`
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

---

## 8. 查看当前参数

<<<<<<< HEAD
```powershell
flyctl secrets list -a omniroute
```

如果控制台 `Secrets` 页面没有显示你期待的变量，先检查：

- 看的应用是不是 `omniroute`
- `fly.toml` 的 `app` 是否和控制台应用一致

---

## 9. 后续更新发布

代码有更新后，发布步骤很简单：

```powershell
git pull
flyctl deploy
```

如果只更新参数，不改代码：

```powershell
flyctl secrets set KEY=value -a omniroute
```

Fly 会自动滚动更新机器。

### 9.1 跟踪原仓库更新并保留 fork 的 `fly.toml`

如果当前仓库是 fork，并且你要同步上游 `https://github.com/diegosouzapw/OmniRoute` 的更新，推荐按下面流程执行。

先确认远程：

```powershell
git remote -v
```

应至少包含：

- `origin` 指向你自己的 fork
- `upstream` 指向原仓库

如果没有 `upstream`，先添加：

```powershell
git remote add upstream https://github.com/diegosouzapw/OmniRoute.git
```

同步上游前，先抓取最新提交和标签：

```powershell
git fetch upstream --tags
```

查看当前版本和上游标签：

```powershell
git describe --tags --always
git show --no-patch --oneline v3.4.7
```

如果你想合并上游最新 `main`，并强制保留 fork 当前的 `fly.toml`，可按下面流程执行：

```powershell
=======
````powershell
قائمة أسرار flyctl - طريق شامل```

如果控制台 ``الأسرار`` 页面没有显示你期待的变量،先检查:

- omniroute omniroute
- `fly.toml' 的 `app` 是否和控制台应用一致---

## 9. 后续更新发布

أفضل ما في الأمر:```powershell
git pull
flyctl deploy
````

أفضل ما في الأمر:`powershell
تعيين أسرار flyctl KEY=value -a omniroute`

يطير هنا.### 9.1 跟踪原仓库更新并保留 fork 的 `fly.toml`

شوكة 如果当前仓库是، 并且你要同步上游 `https://github.com/diegosouzapw/OmniRoute` 的更新، 推荐按下面流程执行.

العنوان:```powershell
git remote -v

````

اسم المنتج:

- "الأصل" 指向你自己的
- `المنبع` 指向原仓库

المنبع ``المنبع``:```powershell
git عن بعد إضافة المنبع https://github.com/diegosouzapw/OmniRoute.git```

أفضل ما في الأمر:```powershell
git fetch upstream --tags
````

أفضل ما في الأمر:`powershell
وصف git --tags --دائما
عرض git --no-patch --oneline v3.4.7`

如果你想合并上游最新 `main`، 并强制保留 fork 当前的 `fly.toml`، 可按下面流程执行:```powershell
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
git merge upstream/main
git checkout HEAD~1 -- fly.toml
git add -- fly.toml
git commit -m "chore(deploy): keep fork fly.toml"
git push origin main
<<<<<<< HEAD
```

说明：

- `git merge upstream/main` 用于同步原仓库最新代码
- `git checkout HEAD~1 -- fly.toml` 用于恢复合并前你 fork 自己的 `fly.toml`
- 如果上游没有改 `fly.toml`，这一步不会带来额外差异
- 如果上游改了 `fly.toml`，这一步能确保 Fly 应用名、挂载卷、区域等 fork 自定义部署配置不被覆盖

如果你明确只想对齐某个发布标签，例如 `v3.4.7`，也可以先确认标签是否已经包含在 `upstream/main`：

```powershell
git merge-base --is-ancestor v3.4.7 upstream/main
```

返回成功表示 `upstream/main` 已经包含该版本，直接合并 `upstream/main` 即可。

### 9.2 同步上游后的标准发布顺序

同步原仓库完成后，推荐按下面顺序发布：

1. `git fetch upstream --tags`
2. `git merge upstream/main`
3. 恢复 fork 的 `fly.toml`
4. `git push origin main`
5. `flyctl deploy`
6. `flyctl status -a omniroute`
7. `flyctl logs --no-tail -a omniroute`

这就是当前项目升级到 `v3.4.7` 时使用的实际流程。

---
=======

````

الاسم:

- ``دمج بوابة المنبع/الرئيسية''
- `git checkout HEAD~1 -- fly.toml` 用于恢复合并前你 fork 自己的 `fly.toml`
- 如果上游没有改 `fly.toml`، 这一步不会带来额外差异
- اضغط على `fly.toml`، واستخدام حماية Fly لملفات تعريف الارتباط، والملفات، وشوكة شوكة.

تم إنشاء الإصدار 3.4.7 من الإصدار 3.4.7، وقد تم تصميمه بواسطة ``المنبع/الرئيسي``:```powershell
git merge-base --is-ancestor v3.4.7 upstream/main```

يتم تحديد المنبع/الرئيسي بواسطة المنبع/الرئيسي.### 9.2 同步上游后的标准发布顺序

أفضل ما في الأمر هو الحصول على أفضل الأسعار:

1. جلب git المنبع --tags
2. "دمج بوابة المنبع/الرئيسية".
3. شوكة شوكة "fly.toml".
4. `جيت دفع الأصل الرئيسي`
5. "نشر flyctl".
6. ``حالة flyctl - طريق شامل``
7. ``flyctl logs --no-tail -a omniroute`

تم تحديث الإصدار `v3.4.7` من الإصدار الجديد.---
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

## 10. 发布后检查

### 10.1 查看应用状态

```powershell
<<<<<<< HEAD
flyctl status -a omniroute
```
=======
حالة flyctl - طريق شامل```
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### 10.2 查看启动日志

```powershell
<<<<<<< HEAD
flyctl logs --no-tail -a omniroute
```
=======
سجلات flyctl - بدون ذيل - طريق شامل```
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

### 10.3 检查网站可访问

```powershell
<<<<<<< HEAD
try {
  (Invoke-WebRequest -Uri "https://omniroute.fly.dev" -MaximumRedirection 5 -UseBasicParsing).StatusCode
} catch {
  if ($_.Exception.Response) {
    $_.Exception.Response.StatusCode.value__
  } else {
    throw
  }
}
```

返回 `200` 说明站点已正常响应。

---

## 11. 成功标志

部署成功后，日志里应看到类似内容：

```text
[bootstrap] Secrets persisted to: /data/server.env
[DB] SQLite database ready: /data/storage.sqlite
```

这两个点很关键：

- `/data/server.env` 说明运行时密钥落到了持久卷
- `/data/storage.sqlite` 说明数据库写入持久卷

如果你看到的是 `/app/data/...`，说明 `DATA_DIR` 没配对，需要立即修正。

---

## 12. 常见问题

### 12.1 `Secrets` 页面是空的

通常有两种原因：

- 你还没执行 `flyctl secrets set`
- 你打开的是另一个应用，例如 `oroute`，不是 `omniroute`

### 12.2 `flyctl deploy` 报 `app not found`

先创建应用：

```powershell
flyctl apps create omniroute
```

### 12.3 `fly.toml` 解析失败

重点检查：

- 注释里是否有乱码字符
- TOML 引号和缩进是否正确

### 12.4 数据没有持久化

检查以下两点：

- `fly.toml` 中是否存在 `destination = '/data'`
- `DATA_DIR` 是否设置为 `/data`

### 12.5 不设置 `INITIAL_PASSWORD` 是否能跑

可以运行，但会回退到默认 `CHANGEME`。生产环境建议尽快修改后台密码。

---

## 13. 新项目复用建议

如果以后是新项目照着这份文档部署，最少改这几项：

1. 修改 `fly.toml` 里的 `app`
2. 修改 `NEXT_PUBLIC_BASE_URL`
3. 保持 `DATA_DIR=/data`
4. 重新生成 `API_KEY_SECRET`、`JWT_SECRET`、`MACHINE_ID_SALT`、`STORAGE_ENCRYPTION_KEY`
5. 首次部署后检查日志是否写入 `/data`

不要直接复用旧项目的密钥。

---

## 14. 当前项目的最小发布清单

当前项目后续最常用的命令如下：

```powershell
=======
حاول {
  (استدعاء WebRequest -Uri "https://omniroute.fly.dev" -MaximumRedirection 5 -UseBasicParsing).رمز الحالة
} أمسك {
  إذا ($_.Exception.Response) {
    $_.Exception.Response.StatusCode.value__
  } آخر {
    رمي
  }
}```

`200` 说明站点已正常响应.---

## 11. 成功标志

أفضل ما في الأمر:```text
[bootstrap] Secrets persisted to: /data/server.env
[DB] SQLite database ready: /data/storage.sqlite
````

هذا هو الحل:

- `/data/server.env`
- `/data/storage.sqlite` تم تخزين البيانات فيه

تم إلغاء الطلب `/app/data/...`، ``DATA_DIR` إلغاء الطلب، 需要立即修正.---## 12. 常见问题

### 12.1 `Secrets` 页面是空的

اسم المنتج:

- 你还没执行 "مجموعة أسرار flyctl".
- تم إلغاء التثبيت، `الطريق`، `الطريق الشامل`### 12.2 `flyctlploy` `لم يتم العثور على التطبيق`

اسم المنتج:`powershell
تقوم تطبيقات flyctl بإنشاء طريق شامل`

### 12.3 `fly.toml` 解析失败

اسم المنتج:

- 注释里是否有乱码字符
- TOML 引号和缩进是否正确### 12.4 数据没有持久化

检查以下两点:

- `fly.toml` `الوجهة = '/ البيانات''
- `DATA_DIR` 是否设置为 `/data`### 12.5 不设置 `INITIAL_PASSWORD` 是否能跑

هذا هو السبب في أن هذا هو السبب وراء `CHANGEME`.---

## 13. 新项目复用建议

لا داعي للقلق بشأن هذه المشكلة:

1. قم بتنزيل "fly.toml" على "التطبيق"
2. قم بزيارة `NEXT_PUBLIC_BASE_URL`
3. اختر "DATA_DIR=/data".
4. قم بالضغط على `API_KEY_SECRET`、`JWT_SECRET`、`MACHINE_ID_SALT`、`STORAGE_ENCRYPTION_KEY`
5. قم بإنشاء بيانات جديدة `/data`

لا داعي للقلق بشأن هذا الأمر.---

## 14. 当前项目的最小发布清单

أفضل ما في الأمر هو الحصول على أفضل النتائج:```powershell
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
flyctl auth whoami
flyctl status -a omniroute
flyctl secrets list -a omniroute
flyctl deploy
flyctl logs --no-tail -a omniroute
<<<<<<< HEAD
```

如果只是正常发版，核心就是：

```powershell
flyctl deploy
```

如果是新环境首次部署，核心就是：

1. `flyctl auth login`
2. `flyctl apps create omniroute`
3. `flyctl secrets set ... -a omniroute`
4. `flyctl deploy`
5. `flyctl logs --no-tail -a omniroute`
=======

````

أفضل ما في الأمر:```powershell
نشر flyctl```

أفضل ما في الأمر:

1. "تسجيل الدخول بمصادقة flyctl".
2. `تطبيقات flyctl تنشئ طريقًا شاملاً`
3. ``مجموعة أسرار flyctl ... -طريق شامل``
4. "نشر flyctl".
5. `سجلات flyctl --no-tail -a omniroute`
````
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
