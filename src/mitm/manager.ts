<<<<<<< HEAD
import { spawn, type ChildProcess } from "child_process";
import path from "path";
import fs from "fs";
import { resolveMitmDataDir } from "./dataDir.ts";
import { addDNSEntry, removeDNSEntry } from "./dns/dnsConfig.ts";
import { generateCert } from "./cert/generate.ts";
import { installCert } from "./cert/install.ts";

// Store server process
let serverProcess: ChildProcess | null = null;
let serverPid: number | null = null;

// Module-scoped password cache (not exposed on globalThis).
// Cleared automatically when the MITM proxy is stopped.
let _cachedPassword: string | null = null;
export function getCachedPassword(): string | null {
  return _cachedPassword;
}
export function setCachedPassword(pwd: string | null | undefined): void {
  _cachedPassword = pwd || null;
}
export function clearCachedPassword(): void {
  _cachedPassword = null;
}

const PID_FILE = path.join(resolveMitmDataDir(), "mitm", ".mitm.pid");
const MITM_SERVER_URL = new URL("./server.cjs", import.meta.url);
const urlPath =
=======
import { spawn } from "child_process";
import path from "path";
import fs from "fs";
import { resolveDataDir } from "@/lib/dataPaths";
import { addDNSEntry, removeDNSEntry } from "./dns/dnsConfig";
import { generateCert } from "./cert/generate";
import { installCert } from "./cert/install";

// Store server process
let serverProcess = null;
let serverPid = null;

// Module-scoped password cache (not exposed on globalThis).
// Cleared automatically when the MITM proxy is stopped.
let _cachedPassword = null;
export function getCachedPassword() {
  return _cachedPassword;
}
export function setCachedPassword(pwd) {
  _cachedPassword = pwd || null;
}
export function clearCachedPassword() {
  _cachedPassword = null;
}

const PID_FILE = path.join(resolveDataDir(), "mitm", ".mitm.pid");
const MITM_SERVER_URL = new URL("./server.cjs", import.meta.url);
const MITM_SERVER_PATH =
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  process.platform === "win32" && MITM_SERVER_URL.pathname.startsWith("/")
    ? decodeURIComponent(MITM_SERVER_URL.pathname.slice(1))
    : decodeURIComponent(MITM_SERVER_URL.pathname);

<<<<<<< HEAD
const cwdPath = path.join(process.cwd(), "src", "mitm", "server.cjs");
const MITM_SERVER_PATH = fs.existsSync(cwdPath) ? cwdPath : urlPath;

// Check if a PID is alive
function isProcessAlive(pid: number): boolean {
=======
// Check if a PID is alive
function isProcessAlive(pid) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

/**
 * Get MITM status
 */
<<<<<<< HEAD
export async function getMitmStatus(): Promise<{
  running: boolean;
  pid: number | null;
  dnsConfigured: boolean;
  certExists: boolean;
}> {
=======
export async function getMitmStatus() {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  // Check in-memory process first, then fallback to PID file
  let running = serverProcess !== null && !serverProcess.killed;
  let pid = serverPid;

  if (!running) {
    try {
      if (fs.existsSync(PID_FILE)) {
        const savedPid = parseInt(fs.readFileSync(PID_FILE, "utf-8").trim(), 10);
        if (savedPid && isProcessAlive(savedPid)) {
          running = true;
          pid = savedPid;
        } else {
          // Stale PID file, clean up
          fs.unlinkSync(PID_FILE);
        }
      }
    } catch {
      // Ignore
    }
  }

  // Check DNS configuration
  let dnsConfigured = false;
  try {
    const hostsContent = fs.readFileSync("/etc/hosts", "utf-8");
    dnsConfigured = /\bdaily-cloudcode-pa\.googleapis\.com\b/.test(hostsContent);
  } catch {
    // Ignore
  }

  // Check cert
<<<<<<< HEAD
  const certDir = path.join(resolveMitmDataDir(), "mitm");
=======
  const certDir = path.join(resolveDataDir(), "mitm");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  const certExists = fs.existsSync(path.join(certDir, "server.crt"));

  return { running, pid, dnsConfigured, certExists };
}

/**
 * Start MITM proxy
 * @param {string} apiKey - OmniRoute API key
 * @param {string} sudoPassword - Sudo password for DNS/cert operations
 */
<<<<<<< HEAD
export async function startMitm(
  apiKey: string,
  sudoPassword: string,
  options: { port?: number } = {}
): Promise<{ running: true; pid: number | null }> {
=======
export async function startMitm(apiKey, sudoPassword) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  // Check if already running
  if (serverProcess && !serverProcess.killed) {
    throw new Error("MITM proxy is already running");
  }

  // 1. Generate SSL certificate if not exists
<<<<<<< HEAD
  const certPath = path.join(resolveMitmDataDir(), "mitm", "server.crt");
=======
  const certPath = path.join(resolveDataDir(), "mitm", "server.crt");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  if (!fs.existsSync(certPath)) {
    console.log("Generating SSL certificate...");
    await generateCert();
  }

  // 2. Install certificate to system keychain
  await installCert(sudoPassword, certPath);

  // 3. Add DNS entry
  console.log("Adding DNS entry...");
  await addDNSEntry(sudoPassword);

  // 4. Start MITM server
  console.log("Starting MITM server...");
<<<<<<< HEAD
  const port =
    typeof options.port === "number" &&
    Number.isInteger(options.port) &&
    options.port > 0 &&
    options.port <= 65535
      ? options.port
      : 443;
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  serverProcess = spawn(process.execPath, [MITM_SERVER_PATH], {
    env: {
      ...process.env,
      ROUTER_API_KEY: apiKey,
<<<<<<< HEAD
      MITM_LOCAL_PORT: String(port),
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      NODE_ENV: "production",
    },
    detached: false,
    stdio: ["ignore", "pipe", "pipe"],
  });

<<<<<<< HEAD
  const proc = serverProcess;
  serverPid = proc.pid ?? null;

  // Save PID to file
  if (serverPid !== null) {
    fs.writeFileSync(PID_FILE, String(serverPid));
  }

  // Log server output
  proc.stdout?.on("data", (data) => {
    console.log(`[MITM Server] ${data.toString().trim()}`);
  });

  proc.stderr?.on("data", (data) => {
    console.error(`[MITM Server Error] ${data.toString().trim()}`);
  });

  proc.on("exit", (code) => {
=======
  serverPid = serverProcess.pid;

  // Save PID to file
  fs.writeFileSync(PID_FILE, String(serverPid));

  // Log server output
  serverProcess.stdout.on("data", (data) => {
    console.log(`[MITM Server] ${data.toString().trim()}`);
  });

  serverProcess.stderr.on("data", (data) => {
    console.error(`[MITM Server Error] ${data.toString().trim()}`);
  });

  serverProcess.on("exit", (code) => {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    console.log(`MITM server exited with code ${code}`);
    serverProcess = null;
    serverPid = null;

    // Remove PID file
    try {
      fs.unlinkSync(PID_FILE);
    } catch (error) {
      // Ignore
    }
  });

  // Wait and verify server actually started
<<<<<<< HEAD
  const started = await new Promise<boolean>((resolve) => {
=======
  const started = await new Promise((resolve) => {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    let resolved = false;
    const timeout = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        resolve(true);
      }
    }, 2000);

<<<<<<< HEAD
    proc.on("exit", () => {
=======
    serverProcess.on("exit", (code) => {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      clearTimeout(timeout);
      if (!resolved) {
        resolved = true;
        resolve(false);
      }
    });

    // Check stderr for error messages
<<<<<<< HEAD
    proc.stderr?.on("data", (data) => {
=======
    serverProcess.stderr.on("data", (data) => {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      const msg = data.toString().trim();
      if (msg.includes("Port") && msg.includes("already in use")) {
        clearTimeout(timeout);
        if (!resolved) {
          resolved = true;
          resolve(false);
        }
      }
    });
  });

  if (!started) {
    throw new Error("MITM server failed to start (port 443 may be in use)");
  }

  return {
    running: true,
    pid: serverPid,
  };
}

/**
 * Stop MITM proxy
 * @param {string} sudoPassword - Sudo password for DNS cleanup
 */
<<<<<<< HEAD
export async function stopMitm(sudoPassword: string): Promise<{ running: false; pid: null }> {
=======
export async function stopMitm(sudoPassword) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  // 1. Kill server process (in-memory or from PID file)
  const proc = serverProcess;
  if (proc && !proc.killed) {
    console.log("Stopping MITM server...");
    proc.kill("SIGTERM");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (!proc.killed) {
      proc.kill("SIGKILL");
    }
    serverProcess = null;
    serverPid = null;
  } else {
    // Fallback: kill by PID file
    try {
      if (fs.existsSync(PID_FILE)) {
        const savedPid = parseInt(fs.readFileSync(PID_FILE, "utf-8").trim(), 10);
        if (savedPid && isProcessAlive(savedPid)) {
          console.log(`Killing MITM server (PID: ${savedPid})...`);
          process.kill(savedPid, "SIGTERM");
          await new Promise((resolve) => setTimeout(resolve, 1000));
          if (isProcessAlive(savedPid)) {
            process.kill(savedPid, "SIGKILL");
          }
        }
      }
    } catch {
      // Ignore
    }
    serverProcess = null;
    serverPid = null;
  }

  // 2. Remove DNS entry
  console.log("Removing DNS entry...");
  await removeDNSEntry(sudoPassword);

  // 3. Clean up
  clearCachedPassword(); // Clear password from memory when proxy stops
  try {
    fs.unlinkSync(PID_FILE);
  } catch (error) {
    // Ignore
  }

  return {
    running: false,
    pid: null,
  };
}
