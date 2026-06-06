#!/usr/bin/env node

/**
 * OmniRoute CLI — Smart AI Router with Auto Fallback
 *
 * Usage:
<<<<<<< HEAD
 *   omniroute                          Start the server (default port 20128)
 *   omniroute --port 3000              Start on custom port
 *   omniroute --no-open                Start without opening browser
 *   omniroute --mcp                    Start MCP server (stdio transport for IDEs)
 *   omniroute reset-encrypted-columns  Reset broken encrypted credentials
 *   omniroute --help                   Show help
 *   omniroute --version                Show version
=======
 *   omniroute              Start the server (default port 20128)
 *   omniroute --port 3000  Start on custom port
 *   omniroute --no-open    Start without opening browser
 *   omniroute --mcp        Start MCP server (stdio transport for IDEs)
 *   omniroute --help       Show help
 *   omniroute --version    Show version
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
 */

import { spawn } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
<<<<<<< HEAD
import { fileURLToPath, pathToFileURL } from "node:url";
import { homedir, platform } from "node:os";
import { isNativeBinaryCompatible } from "../scripts/native-binary-compat.mjs";
import { getNodeRuntimeSupport, getNodeRuntimeWarning } from "./nodeRuntimeSupport.mjs";
=======
import { fileURLToPath } from "node:url";
import { homedir, platform } from "node:os";
import { isNativeBinaryCompatible } from "../scripts/native-binary-compat.mjs";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");
const APP_DIR = join(ROOT, "app");

<<<<<<< HEAD
function loadEnvFile() {
  const envPaths = [];

=======
// ── Load .env file (for global npm install) ─────────────────
function loadEnvFile() {
  const envPaths = [];

  // 1. DATA_DIR/.env if set
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  if (process.env.DATA_DIR) {
    envPaths.push(join(process.env.DATA_DIR, ".env"));
  }

<<<<<<< HEAD
=======
  // 2. ~/.omniroute/.env (default data dir)
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  const home = homedir();
  if (home) {
    if (platform() === "win32") {
      const appData = process.env.APPDATA || join(home, "AppData", "Roaming");
      envPaths.push(join(appData, "omniroute", ".env"));
    } else {
      envPaths.push(join(home, ".omniroute", ".env"));
    }
  }

<<<<<<< HEAD
=======
  // 3. ./.env (current working directory)
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  envPaths.push(join(process.cwd(), ".env"));

  for (const envPath of envPaths) {
    try {
      if (existsSync(envPath)) {
        const content = readFileSync(envPath, "utf-8");
        for (const line of content.split("\n")) {
          const trimmed = line.trim();
<<<<<<< HEAD
=======
          // Skip empty lines and comments
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          if (!trimmed || trimmed.startsWith("#")) continue;
          const eqIdx = trimmed.indexOf("=");
          if (eqIdx > 0) {
            const key = trimmed.slice(0, eqIdx).trim();
            const value = trimmed.slice(eqIdx + 1).trim();
<<<<<<< HEAD
            if (process.env[key] === undefined) {
=======
            // Don't override existing env vars
            if (process.env[key] === undefined) {
              // Remove surrounding quotes
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
              process.env[key] = value.replace(/^["']|["']$/g, "");
            }
          }
        }
        console.log(`  \x1b[2m📋 Loaded env from ${envPath}\x1b[0m`);
        return;
      }
    } catch {
<<<<<<< HEAD
      // Ignore errors reading env files.
=======
      // Ignore errors reading env files
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    }
  }
}

loadEnvFile();

<<<<<<< HEAD
=======
// ── Parse args ─────────────────────────────────────────────
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
  console.log(`
  \x1b[1m\x1b[36m⚡ OmniRoute\x1b[0m — Smart AI Router with Auto Fallback

  \x1b[1mUsage:\x1b[0m
    omniroute                 Start the server
    omniroute --port <port>   Use custom API port (default: 20128)
    omniroute --no-open       Don't open browser automatically
    omniroute --mcp           Start MCP server (stdio transport for IDEs)
<<<<<<< HEAD
    omniroute reset-encrypted-columns  Reset encrypted credentials (recovery)
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    omniroute --help          Show this help
    omniroute --version       Show version

  \x1b[1mMCP Integration:\x1b[0m
    The --mcp flag starts an MCP server over stdio, exposing OmniRoute
    tools for AI agents in VS Code, Cursor, Claude Desktop, and Copilot.

    Available tools: omniroute_get_health, omniroute_list_combos,
    omniroute_check_quota, omniroute_route_request, and more.

  \x1b[1mConfig:\x1b[0m
    Loads .env from: ~/.omniroute/.env or ./.env
    Memory limit: OMNIROUTE_MEMORY_MB (default: 512)

  \x1b[1mAfter starting:\x1b[0m
    Dashboard:  http://localhost:<dashboard-port>
    API:        http://localhost:<api-port>/v1

  \x1b[1mConnect your tools:\x1b[0m
    Set your CLI tool (Cursor, Cline, Codex, etc.) to use:
    \x1b[33mhttp://localhost:<api-port>/v1\x1b[0m
  `);
  process.exit(0);
}

if (args.includes("--version") || args.includes("-v")) {
  try {
    const { version } = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"));
    console.log(version);
  } catch {
    console.log("unknown");
  }
  process.exit(0);
}

<<<<<<< HEAD
// ── reset-encrypted-columns subcommand ──────────────────────────────────────
// Recovery tool for users who lost STORAGE_ENCRYPTION_KEY after upgrade (#1622)
if (args.includes("reset-encrypted-columns")) {
  const dataDir = (() => {
    const configured = process.env.DATA_DIR?.trim();
    if (configured) return configured;
    if (platform() === "win32") {
      const appData = process.env.APPDATA || join(homedir(), "AppData", "Roaming");
      return join(appData, "omniroute");
    }
    const xdg = process.env.XDG_CONFIG_HOME?.trim();
    if (xdg) return join(xdg, "omniroute");
    return join(homedir(), ".omniroute");
  })();

  const dbPath = join(dataDir, "storage.sqlite");

  if (!existsSync(dbPath)) {
    console.log(`\x1b[33m⚠ No database found at ${dbPath}\x1b[0m`);
    process.exit(0);
  }

  const force = args.includes("--force");
  if (!force) {
    console.log(`
  \x1b[1m\x1b[33m⚠ WARNING: This will erase all encrypted credentials\x1b[0m

  This command will NULL out the following columns in provider_connections:
    • api_key
    • access_token
    • refresh_token
    • id_token

  Provider metadata (name, provider_id, settings) will be preserved.
  You will need to re-authenticate all providers after this operation.

  Database: ${dbPath}

  \x1b[1mTo confirm, run:\x1b[0m
    omniroute reset-encrypted-columns --force
    `);
    process.exit(0);
  }

  try {
    const { createRequire } = await import("node:module");
    const require = createRequire(import.meta.url);
    const Database = require("better-sqlite3");
    const db = new Database(dbPath);

    const countResult = db
      .prepare(
        `SELECT COUNT(*) as cnt FROM provider_connections
         WHERE api_key LIKE 'enc:v1:%'
            OR access_token LIKE 'enc:v1:%'
            OR refresh_token LIKE 'enc:v1:%'
            OR id_token LIKE 'enc:v1:%'`
      )
      .get();

    const affected = countResult?.cnt ?? 0;

    if (affected === 0) {
      console.log("\x1b[32m✔ No encrypted credentials found — nothing to reset.\x1b[0m");
      db.close();
      process.exit(0);
    }

    const result = db
      .prepare(
        `UPDATE provider_connections
            SET api_key = NULL,
                access_token = NULL,
                refresh_token = NULL,
                id_token = NULL
          WHERE api_key LIKE 'enc:v1:%'
             OR access_token LIKE 'enc:v1:%'
             OR refresh_token LIKE 'enc:v1:%'
             OR id_token LIKE 'enc:v1:%'`
      )
      .run();

    db.close();

    console.log(
      `\x1b[32m✔ Reset ${result.changes} provider connection(s).\x1b[0m\n` +
        `  Re-authenticate your providers in the dashboard or re-add API keys.\n`
    );
  } catch (err) {
    console.error(
      `\x1b[31m✖ Failed to reset encrypted columns:\x1b[0m ${err.message || err}`
    );
    process.exit(1);
  }
  process.exit(0);
}

if (args.includes("--mcp")) {
  try {
    const { startMcpCli } = await import(pathToFileURL(join(ROOT, "bin", "mcp-server.mjs")).href);
=======
// ── MCP Server Mode ───────────────────────────────────────
if (args.includes("--mcp")) {
  try {
    const { startMcpCli } = await import(join(ROOT, "bin", "mcp-server.mjs"));
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    await startMcpCli(ROOT);
  } catch (err) {
    console.error("\x1b[31m✖ Failed to start MCP server:\x1b[0m", err.message || err);
    process.exit(1);
  }
  process.exit(0);
}

function parsePort(value, fallback) {
  const parsed = parseInt(String(value), 10);
  return Number.isFinite(parsed) && parsed > 0 && parsed <= 65535 ? parsed : fallback;
}

<<<<<<< HEAD
=======
// Parse --port (canonical/base port)
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
let port = parsePort(process.env.PORT || "20128", 20128);
const portIdx = args.indexOf("--port");
if (portIdx !== -1 && args[portIdx + 1]) {
  const cliPort = parsePort(args[portIdx + 1], null);
  if (cliPort === null) {
    console.error("\x1b[31m✖ Invalid port number\x1b[0m");
    process.exit(1);
  }
  port = cliPort;
}

const apiPort = parsePort(process.env.API_PORT || String(port), port);
const dashboardPort = parsePort(process.env.DASHBOARD_PORT || String(port), port);
<<<<<<< HEAD
const noOpen = args.includes("--no-open");

console.log(`
\x1b[36m   ____                  _ ____              _
   / __ \\\\                (_) __ \\\\            | |
  | |  | |_ __ ___  _ __ _| |__) |___  _   _| |_ ___
  | |  | | '_ \` _ \\\\| '_ \\\\ |  _  // _ \\\\| | | | __/ _ \\\\
  | |__| | | | | | | | | | | | \\\\ \\\\ (_) | |_| | ||  __/
   \\\\____/|_| |_| |_|_| |_|_|_|  \\\\_\\\\___/ \\\\__,_|\\\\__\\\\___|
\x1b[0m`);

const nodeSupport = getNodeRuntimeSupport();
if (!nodeSupport.nodeCompatible) {
  const runtimeWarning = getNodeRuntimeWarning() || "Unsupported Node.js runtime detected.";
  console.warn(`\x1b[33m  ⚠  Warning: You are running Node.js ${process.versions.node}.
     ${runtimeWarning}

     Supported secure runtimes: ${nodeSupport.supportedDisplay}
     Recommended: use Node.js ${nodeSupport.recommendedVersion} or newer on the 22.x LTS line.
=======

const noOpen = args.includes("--no-open");

// ── Banner ─────────────────────────────────────────────────
console.log(`
\x1b[36m   ____                  _ ____              _
   / __ \\                (_) __ \\            | |
  | |  | |_ __ ___  _ __ _| |__) |___  _   _| |_ ___
  | |  | | '_ \` _ \\| '_ \\ |  _  // _ \\| | | | __/ _ \\
  | |__| | | | | | | | | | | | \\ \\ (_) | |_| | ||  __/
   \\____/|_| |_| |_|_| |_|_|_|  \\_\\___/ \\__,_|\\__\\___|
\x1b[0m`);

// ── Node.js version check ──────────────────────────────────
const nodeMajor = parseInt(process.versions.node.split(".")[0], 10);
if (nodeMajor >= 24) {
  console.warn(`\x1b[33m  ⚠  Warning: You are running Node.js ${process.versions.node}.
     OmniRoute uses better-sqlite3, a native addon that does not yet
     have compatible prebuilt binaries for Node.js 24+.
     You may experience errors like "is not a valid Win32 application"
     or "NODE_MODULE_VERSION mismatch".

     Recommended: use Node.js 22 LTS (or 20 LTS).
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
     Workaround:  npm rebuild better-sqlite3\x1b[0m
`);
}

<<<<<<< HEAD
const serverWsJs = join(APP_DIR, "server-ws.mjs");
const serverJs = existsSync(serverWsJs) ? serverWsJs : join(APP_DIR, "server.js");
=======
// ── Resolve server entry ───────────────────────────────────
const serverJs = join(APP_DIR, "server.js");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

if (!existsSync(serverJs)) {
  console.error("\x1b[31m✖ Server not found at:\x1b[0m", serverJs);
  console.error("  The package may not have been built correctly.");
  console.error("");
<<<<<<< HEAD
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
  // (#492) Detect common non-standard Node managers that cause this issue
>>>>>>> Stashed changes
=======
  // (#492) Detect common non-standard Node managers that cause this issue
>>>>>>> Stashed changes
=======
  // (#492) Detect common non-standard Node managers that cause this issue
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  const nodeExec = process.execPath || "";
  const isMise = nodeExec.includes("mise") || nodeExec.includes(".local/share/mise");
  const isNvm = nodeExec.includes(".nvm") || nodeExec.includes("nvm");
  if (isMise) {
    console.error(
      "  \x1b[33m⚠ mise detected:\x1b[0m If you installed via `npm install -g omniroute`,"
    );
    console.error("    try: \x1b[36mnpx omniroute@latest\x1b[0m  (downloads a fresh copy)");
    console.error("    or:  \x1b[36mmise exec -- npx omniroute\x1b[0m");
  } else if (isNvm) {
    console.error(
      "  \x1b[33m⚠ nvm detected:\x1b[0m Try reinstalling after loading the correct Node version:"
    );
    console.error("    \x1b[36mnvm use --lts && npm install -g omniroute\x1b[0m");
  } else {
    console.error("  Try: \x1b[36mnpm install -g omniroute\x1b[0m  (reinstall)");
    console.error("  Or:  \x1b[36mnpx omniroute@latest\x1b[0m");
  }
  process.exit(1);
}

<<<<<<< HEAD
=======
// ── Pre-flight: verify better-sqlite3 native binary ───────
// Verify the binary's actual target platform/arch before trusting dlopen.
// This avoids the macOS false positive where a bundled linux-x64 addon can
// appear to load even though the runtime will fail when better-sqlite3 starts.
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
const sqliteBinary = join(
  APP_DIR,
  "node_modules",
  "better-sqlite3",
  "build",
  "Release",
  "better_sqlite3.node"
);
if (existsSync(sqliteBinary) && !isNativeBinaryCompatible(sqliteBinary)) {
  console.error(
    "\x1b[31m✖ better-sqlite3 native module is incompatible with this platform.\x1b[0m"
  );
  console.error(`  Run: cd ${APP_DIR} && npm rebuild better-sqlite3`);
  if (platform() === "darwin") {
    console.error("  If build tools are missing: xcode-select --install");
  }
  process.exit(1);
}

<<<<<<< HEAD
console.log(`  \x1b[2m⏳ Starting server...\x1b[0m\n`);

=======
// ── Start server ───────────────────────────────────────────
console.log(`  \x1b[2m⏳ Starting server...\x1b[0m\n`);

// Sanitize memory limit — parseInt to prevent command injection (#150)
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
const rawMemory = parseInt(process.env.OMNIROUTE_MEMORY_MB || "512", 10);
const memoryLimit =
  Number.isFinite(rawMemory) && rawMemory >= 64 && rawMemory <= 16384 ? rawMemory : 512;

const env = {
  ...process.env,
  OMNIROUTE_PORT: String(port),
  PORT: String(dashboardPort),
  DASHBOARD_PORT: String(dashboardPort),
  API_PORT: String(apiPort),
  HOSTNAME: "0.0.0.0",
  NODE_ENV: "production",
  NODE_OPTIONS: `--max-old-space-size=${memoryLimit}`,
};

const server = spawn("node", [`--max-old-space-size=${memoryLimit}`, serverJs], {
  cwd: APP_DIR,
  env,
  stdio: "pipe",
});

let started = false;

server.stdout.on("data", (data) => {
  const text = data.toString();
  process.stdout.write(text);

<<<<<<< HEAD
=======
  // Detect server ready
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  if (
    !started &&
    (text.includes("Ready") || text.includes("started") || text.includes("listening"))
  ) {
    started = true;
    onReady();
  }
});

server.stderr.on("data", (data) => {
  process.stderr.write(data);
});

server.on("error", (err) => {
  console.error("\x1b[31m✖ Failed to start server:\x1b[0m", err.message);
  process.exit(1);
});

server.on("exit", (code) => {
  if (code !== 0 && code !== null) {
    console.error(`\x1b[31m✖ Server exited with code ${code}\x1b[0m`);
  }
  process.exit(code ?? 0);
});

<<<<<<< HEAD
=======
// ── Graceful shutdown ──────────────────────────────────────
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
function shutdown() {
  console.log("\n\x1b[33m⏹ Shutting down OmniRoute...\x1b[0m");
  server.kill("SIGTERM");
  setTimeout(() => {
    server.kill("SIGKILL");
    process.exit(0);
  }, 5000);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

<<<<<<< HEAD
=======
// ── On ready ───────────────────────────────────────────────
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
async function onReady() {
  const dashboardUrl = `http://localhost:${dashboardPort}`;
  const apiUrl = `http://localhost:${apiPort}`;

  console.log(`
  \x1b[32m✔ OmniRoute is running!\x1b[0m

  \x1b[1m  Dashboard:\x1b[0m  ${dashboardUrl}
  \x1b[1m  API Base:\x1b[0m   ${apiUrl}/v1

  \x1b[2m  Point your CLI tool (Cursor, Cline, Codex) to:\x1b[0m
  \x1b[33m  ${apiUrl}/v1\x1b[0m

  \x1b[2m  Press Ctrl+C to stop\x1b[0m
  `);

  if (!noOpen) {
    try {
      const open = await import("open");
      await open.default(dashboardUrl);
    } catch {
<<<<<<< HEAD
      // open is optional — if not available, just skip.
=======
      // open is optional — if not available, just skip
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    }
  }
}

<<<<<<< HEAD
=======
// Fallback: if no "Ready" message detected in 15s, assume server is up
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
setTimeout(() => {
  if (!started) {
    started = true;
    onReady();
  }
}, 15000);
