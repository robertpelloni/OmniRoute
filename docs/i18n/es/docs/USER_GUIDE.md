=======
<## 部署
========
## Despliegue
>>>>>>>> Stashed changes:docs/i18n/es/docs/USER_GUIDE.md
>>>>>>> Stashed changes

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
```

### Docker

```bash
# Build image (default = runner-cli with codex/claude/droid preinstalled)
docker build -t omniroute:cli .

# Portable mode (recommended)
docker run -d --name omniroute -p 20128:20128 --env-file ./.env -v omniroute-data:/app/data omniroute:cli
```

For host-integrated mode with CLI binaries, see the Docker section in the main docs.

### Void Linux (xbps-src)

Void Linux users can package and install OmniRoute natively using the `xbps-src` cross-compilation framework. This automates the Node.js standalone build along with the required `better-sqlite3` native bindings.

<details>
<summary><b>View xbps-src template</b></summary>

```bash
# Template file for 'omniroute'
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
system_accounts="_omniroute"
omniroute_homedir="/var/lib/omniroute"
export NODE_ENV=production
export npm_config_engine_strict=false
export npm_config_loglevel=error
export npm_config_fund=false
export npm_config_audit=false

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
#!/bin/sh
export PORT="${PORT:-20128}"
export DATA_DIR="${DATA_DIR:-${XDG_DATA_HOME:-${HOME}/.local/share}/omniroute}"
=======
<>>>>>>> Stashed changes
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
=======
<>>>>>>> Stashed changes
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

---

### Resilience & Circuit Breakers

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

=======
<
```bash
# From the electron directory:
cd electron
npm install

# Development mode (connect to running Next.js dev server):
npm run dev

# Production mode (uses standalone build):
npm start
```

### Building Installers

```bash
cd electron
npm run build          # Current platform
npm run build:win      # Windows (.exe NSIS)
npm run build:mac      # macOS (.dmg universal)
npm run build:linux    # Linux (.AppImage)
```

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
