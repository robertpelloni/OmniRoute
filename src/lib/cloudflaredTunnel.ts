import { spawn, execFile } from "child_process";
import { createHash } from "crypto";
=======
import { promisify } from "util";
import fs from "fs/promises";
import fsSync from "fs";
import path from "path";
import proxyFetch from "@omniroute/open-sse/utils/proxyFetch.ts";
import { resolveDataDir } from "@/lib/dataPaths";
import { getRuntimePorts } from "@/lib/runtime/ports";

const execFileAsync = promisify(execFile);

const CLOUDFLARED_RELEASE_API_URL =
  "https://api.github.com/repos/cloudflare/cloudflared/releases/latest";
=======
const CLOUDFLARED_RELEASE_BASE =
  "https://github.com/cloudflare/cloudflared/releases/latest/download";
>>>>>>> Stashed changes
const START_TIMEOUT_MS = 30000;
const STOP_TIMEOUT_MS = 5000;
const GENERIC_EXIT_ERROR_PREFIX = "cloudflared exited";
const DEFAULT_CERT_FILE_CANDIDATES = [
  "/etc/ssl/certs/ca-certificates.crt",
  "/etc/pki/tls/certs/ca-bundle.crt",
  "/etc/ssl/cert.pem",
  "/private/etc/ssl/cert.pem",
] as const;
const DEFAULT_CERT_DIR_CANDIDATES = [
  "/etc/ssl/certs",
  "/etc/pki/tls/certs",
  "/system/etc/security/cacerts",
] as const;

type CloudflaredInstallSource = "managed" | "path" | "env";
type TunnelPhase = "unsupported" | "not_installed" | "stopped" | "starting" | "running" | "error";

type AssetSpec = {
  assetName: string;
  binaryName: string;
  archive: "none" | "tgz";
};

type ResolvedAssetSpec = AssetSpec & {
  downloadUrl: string;
  expectedSha256: string;
};

type CloudflaredRuntimeDirs = {
  runtimeRoot: string;
  homeDir: string;
  configDir: string;
  cacheDir: string;
  dataDir: string;
  tempDir: string;
  userProfileDir: string;
  appDataDir: string;
  localAppDataDir: string;
};

type BinaryResolution = {
  binaryPath: string | null;
  source: CloudflaredInstallSource | null;
  managed: boolean;
};

type PersistedTunnelState = {
  binaryPath?: string | null;
  installSource?: CloudflaredInstallSource | null;
  ownerPid?: number | null;
}

function normalizeCloudflaredLogLine(line: string) {
  return line
    .trim()
    .replace(/^\d{4}-\d{2}-\d{2}T\S+\s+(?:INF|WRN|ERR)\s+/i, "")
    .trim();
}

export function extractCloudflaredErrorMessage(text: string) {
  const lines = String(text || "")
    .split(/\r?\n/)
    .map(normalizeCloudflaredLogLine)
    .filter(Boolean);

  for (let i = lines.length - 1; i >= 0; i--) {
    if (NON_ACTIONABLE_CLOUDFLARED_WARNING_PATTERNS.some((pattern) => pattern.test(lines[i]))) {
      continue;
    }
    linux: {
      x64: {
        assetName: "cloudflared-linux-amd64",
        binaryName: "cloudflared",
        archive: "none",
      },
      arm64: {
        assetName: "cloudflared-linux-arm64",
        binaryName: "cloudflared",
        archive: "none",
      },
    },
    darwin: {
      x64: {
        assetName: "cloudflared-darwin-amd64.tgz",
        binaryName: "cloudflared",
        archive: "tgz",
      },
      arm64: {
        assetName: "cloudflared-darwin-arm64.tgz",
        binaryName: "cloudflared",
        archive: "tgz",
      },
    },
    win32: {
      x64: {
        assetName: "cloudflared-windows-amd64.exe",
        binaryName: "cloudflared.exe",
        archive: "none",
      },
      arm64: {
        assetName: "cloudflared-windows-arm64.exe",
        binaryName: "cloudflared.exe",
        archive: "none",
      },
    },
  };

  const spec = matrix[platform]?.[arch];
  if (!spec) return null;

  return spec;
}

export function getSha256FromGitHubDigest(digest: string): string | null {
  const prefix = "sha256:";
  if (!digest.toLowerCase().startsWith(prefix)) return null;

  const value = digest.slice(prefix.length);
  if (value.length !== 64) return null;
  for (const char of value) {
    const code = char.charCodeAt(0);
    const digit = code >= 48 && code <= 57;
    const lowerHex = code >= 97 && code <= 102;
    const upperHex = code >= 65 && code <= 70;
    if (!digit && !lowerHex && !upperHex) return null;
  }

  return value.toLowerCase();
}

export function verifyCloudflaredDownloadDigest(
  buffer: Buffer,
  expectedSha256: string,
  assetName = "cloudflared"
): void {
  const actualSha256 = createHash("sha256").update(buffer).digest("hex");
  if (actualSha256 !== expectedSha256.toLowerCase()) {
    throw new Error(
      `cloudflared download checksum mismatch for ${assetName}: expected ${expectedSha256}, got ${actualSha256}`
    );
  }
}

async function resolveCloudflaredDownloadSpec(spec: AssetSpec): Promise<ResolvedAssetSpec> {
  const response = await proxyFetch(CLOUDFLARED_RELEASE_API_URL, {
    headers: { Accept: "application/vnd.github+json" },
    redirect: "follow",
  });
  if (!response.ok) {
    throw new Error(
      `Failed to resolve cloudflared release metadata with status ${response.status}`
    );
  }

  const release = (await response.json()) as { assets?: unknown };
  const assets = Array.isArray(release.assets) ? release.assets : [];
  const asset = assets
    .map((entry) =>
      entry && typeof entry === "object" ? (entry as Record<string, unknown>) : null
    )
    .find((entry) => entry?.name === spec.assetName);

  if (!asset) {
    throw new Error(`cloudflared release asset not found: ${spec.assetName}`);
  }

  const downloadUrl =
    typeof asset.browser_download_url === "string" ? asset.browser_download_url : "";
  const digest = typeof asset.digest === "string" ? asset.digest : "";
  const expectedSha256 = getSha256FromGitHubDigest(digest);

  if (!downloadUrl || !expectedSha256) {
    throw new Error(`cloudflared release asset ${spec.assetName} is missing a sha256 digest`);
  }

  return {
    ...spec,
    downloadUrl,
    expectedSha256,
  };
}

async function resolvePathCommand(command: string) {
  const lookupCommand = process.platform === "win32" ? "where" : "which";
  const args = [command];

  try {
    const { stdout } = await execFileAsync(lookupCommand, args, { timeout: 3000 });
    const first = stdout
      .split(/\r?\n/)
      .map((line) => line.trim())
      .find(Boolean);
    return first || null;
  } catch {
    return null;
  }
}

async function resolveBinary(): Promise<BinaryResolution> {
  const envPath = String(process.env.CLOUDFLARED_BIN || "").trim();
  if (envPath && fsSync.existsSync(envPath)) {
    return { binaryPath: envPath, source: "env", managed: false };
  }

  const managedPath = getManagedBinaryPath();
  if (fsSync.existsSync(managedPath)) {
    return { binaryPath: managedPath, source: "managed", managed: true };
  }

  const pathBinary = await resolvePathCommand("cloudflared");
  if (pathBinary) {
    return { binaryPath: pathBinary, source: "path", managed: false };
  }

  return { binaryPath: null, source: null, managed: false };
}

async function extractArchive(archivePath: string, destinationDir: string) {
  await execFileAsync("tar", ["-xzf", archivePath, "-C", destinationDir], { timeout: 15000 });
}

async function downloadToFile(
  url: string,
  destinationPath: string,
  expectedSha256: string,
  assetName: string
) {
  const response = await proxyFetch(url, { redirect: "follow" });
  if (!response.ok) {
    throw new Error(`Download failed with status ${response.status}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  verifyCloudflaredDownloadDigest(buffer, expectedSha256, assetName);

      if (spec.archive === "tgz") {
        await extractArchive(tempDownloadPath, path.dirname(managedBinaryPath));
      } else {
        await fs.rename(tempDownloadPath, managedBinaryPath);
      }

      await ensureExecutable(managedBinaryPath);
      await updateStateFile({
        binaryPath: managedBinaryPath,
        installSource: "managed",
        installedAt: new Date().toISOString(),
        lastError: null,
      });

      return managedBinaryPath;
    } finally {
      try {
        await fs.unlink(tempDownloadPath);
      } catch {
        // Ignore temp cleanup issues.
      }
      installPromise = null;
    }
  })();

  return installPromise;
}

async function ensureBinary() {
  const resolved = await resolveBinary();
  if (resolved.binaryPath) {
    return resolved;
  }

  const binaryPath = await installManagedBinary();
  return {
    binaryPath,
    source: "managed" as const,
    managed: true,
  };
}

async function finalizeProcessExit(code: number | null, signal: NodeJS.Signals | null) {
  const currentState = await readStateFile();
  const lastError =
    code === 0 || signal === "SIGTERM" || signal === "SIGINT"
      ? null
      : isSpecificCloudflaredError(currentState.lastError)
        ? currentState.lastError
        : getGenericExitError(code, signal);

  tunnelProcess = null;
  tunnelPid = null;
  await clearPidFile();
  await writeStateFile({
    ...currentState,
    pid: null,
    publicUrl: null,
    apiUrl: null,
    status: lastError ? "error" : "stopped",
    lastError,
  });
}

async function killPid(pid: number) {
  process.kill(pid, "SIGTERM");
  const start = Date.now();
  while (Date.now() - start < STOP_TIMEOUT_MS) {
    if (!isProcessAlive(pid)) return;
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  if (isProcessAlive(pid)) {
    process.kill(pid, "SIGKILL");
  }
}

async function stopExistingTunnel() {
  if (tunnelProcess && tunnelPid && !tunnelProcess.killed) {
    const pid = tunnelPid;
    tunnelProcess.kill("SIGTERM");
    await killPid(pid);
    return;
  }

  const state = await readStateFile();
  if (!isStateOwnedByCurrentProcess(state)) {
    await clearPidFile();
    return;
  }

  const phase =
    !getCloudflaredAssetSpec() && !resolved.binaryPath
      ? "unsupported"
      : running
        ? publicUrl
          ? "running"
          : "starting"
        : resolved.binaryPath
          ? effectiveState.lastError
            ? "error"
            : "stopped"
          : "not_installed";

  if (!running && state.pid) {
    await clearPidFile();
  }

  return {
    supported: !!(getCloudflaredAssetSpec() || resolved.binaryPath),
    installed: !!resolved.binaryPath,
    managedInstall: resolved.managed,
    installSource: resolved.source,
    binaryPath: resolved.binaryPath,
    running,
    pid: running ? pidFromState : null,
    publicUrl,
    apiUrl: publicUrl ? getTunnelApiUrl(publicUrl) : null,
    targetUrl: effectiveState.targetUrl || getLocalTargetUrl(),
    phase,
    lastError: running ? null : effectiveState.lastError || null,
    logPath: getLogFilePath(),
  };
}

export async function startCloudflaredTunnel(): Promise<CloudflaredTunnelStatus> {
  const current = await getCloudflaredTunnelStatus();
  if (current.running) return current;
  if (startPromise) return startPromise;

  startPromise = (async () => {
    const spec = getCloudflaredAssetSpec();
    if (!spec && !(await resolveBinary()).binaryPath) {
      throw new Error(
        `Unsupported platform for cloudflared tunnel: ${process.platform}/${process.arch}`
      );
    }

    const binary = await ensureBinary();
    const targetUrl = getLocalTargetUrl();

    await stopExistingTunnel();
    await ensureTunnelDir();
    await ensureTunnelRuntimeDirs();
    await fs.writeFile(getLogFilePath(), "", "utf8");

    await writeStateFile({
      binaryPath: binary.binaryPath,
      installSource: binary.source,
<<<<<<< Updated upstream
      ownerPid: process.pid,
=======
      pid: null,
      publicUrl: null,
      apiUrl: null,
      targetUrl,
      status: "starting",
      lastError: null,
      startedAt: new Date().toISOString(),
    });

    const child = spawn(binary.binaryPath as string, getCloudflaredStartArgs(targetUrl), {
      stdio: ["ignore", "pipe", "pipe"],
      env: buildCloudflaredChildEnv(),
    });

    tunnelProcess = child;
    tunnelPid = child.pid ?? null;

    if (!child.pid) {
      throw new Error("cloudflared failed to start");
    }

    await writePidFile(child.pid);
    await updateStateFile({ pid: child.pid, status: "starting" });

    const ready = await new Promise<CloudflaredTunnelStatus>((resolve, reject) => {
      let settled = false;
      let timeout: ReturnType<typeof setTimeout> | null = null;

      const settle = (handler: () => void) => {
        if (settled) return;
        settled = true;
        if (timeout) clearTimeout(timeout);
        handler();
      };

      const handleOutput = async (source: "stdout" | "stderr", chunk: Buffer) => {
        const text = chunk.toString("utf8").trim();
        if (!text) return;

        await appendTunnelLog(source, text);
        const errorMessage = source === "stderr" ? extractCloudflaredErrorMessage(text) : null;
        if (errorMessage) {
          await updateStateFile({
            ownerPid: process.pid,
=======
            pid: child.pid,
            status: "error",
            lastError: errorMessage,
          });
        }
        const url = extractTryCloudflareUrl(text);
        if (!url) return;

        const apiUrl = getTunnelApiUrl(url);
        await updateStateFile({
          ownerPid: process.pid,
=======
          pid: child.pid,
          publicUrl: url,
          apiUrl,
          status: "running",
          lastError: null,
        });

        const status = await getCloudflaredTunnelStatus();
        settle(() => resolve(status));
      };

      child.stdout.on("data", (chunk: Buffer) => {
        void handleOutput("stdout", chunk);
      });
      child.stderr.on("data", (chunk: Buffer) => {
        void handleOutput("stderr", chunk);
      });

      child.once("exit", (code, signal) => {
        void finalizeProcessExit(code, signal);
        settle(() =>
          reject(
            new Error(
              `cloudflared exited before tunnel URL was ready (${code ?? "signal"}${signal ? `/${signal}` : ""})`
            )
          )
        );
      });

      timeout = setTimeout(async () => {
        await stopExistingTunnel();
        settle(() => reject(new Error("Timed out while waiting for Cloudflare tunnel URL")));
      }, START_TIMEOUT_MS);
    });

    return ready;
  })();

  try {
    return await startPromise;
  } catch (error) {
    const currentState = await readStateFile();
    const message = isSpecificCloudflaredError(currentState.lastError)
      ? currentState.lastError
      : error instanceof Error
        ? error.message
        : "Failed to start cloudflared tunnel";

    await updateStateFile({
      ownerPid: process.pid,
=======
      status: "error",
      lastError: message,
    });
    throw new Error(message);
  } finally {
    startPromise = null;
  }
}

export async function stopCloudflaredTunnel() {
  await stopExistingTunnel();
  const current = await readStateFile();
  await writeStateFile({
  });
  tunnelProcess = null;
  tunnelPid = null;
  await clearPidFile();
  return getCloudflaredTunnelStatus();
}
