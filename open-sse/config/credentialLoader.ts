/**
 * Credential Loader — Reads provider credentials from an external JSON file.
 *
 * Loads `provider-credentials.json` from the data directory and merges it
 * over the hardcoded defaults in PROVIDERS. This keeps credentials out of
 * source control while maintaining backwards compatibility (hardcoded values
 * serve as defaults when the file is absent).
 *
 * Expected JSON structure:
 * {
 *   "claude": { "clientId": "..." },
 *   "gemini": { "clientId": "...", "clientSecret": "..." },
 *   ...
 * }
 */

import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { resolveDataDir } from "../../src/lib/dataPaths";

// Fields that can be overridden per provider
<<<<<<< HEAD
const CREDENTIAL_FIELDS = [
  "clientId",
  "clientSecret",
  "tokenUrl",
  "authUrl",
  "refreshUrl",
] as const;
type CredentialField = (typeof CREDENTIAL_FIELDS)[number];
type ProviderCredentialOverrides = Partial<Record<CredentialField, unknown>>;
type MutableProviderRecord = Record<string, Record<string, unknown>>;
=======
const CREDENTIAL_FIELDS = ["clientId", "clientSecret", "tokenUrl", "authUrl", "refreshUrl"];
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

// TTL-based cache — reloads credentials from disk at most once per minute
const CONFIG_TTL_MS = 60_000;
let lastLoadTime = 0;
<<<<<<< HEAD
let cachedProviders: Record<string, unknown> | null = null;
=======
let cachedProviders = null;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

// Survives Next.js dev HMR: module-level cache resets but process is the same (V4 pattern).
type CredGlobals = typeof globalThis & { __omnirouteCredNoFileLogged?: boolean };
function credGlobals(): CredGlobals {
  return globalThis as CredGlobals;
}

<<<<<<< HEAD
function resolveCredentialsPath(): string {
  let resolveDataDir: (options?: { isCloud?: boolean }) => string;

  try {
    resolveDataDir = require("@/lib/dataPaths").resolveDataDir;
  } catch (err) {
    const fallbackDataDir = process.env.DATA_DIR || join(process.cwd(), "data");
    console.warn(
      `[CREDENTIALS] Could not load dataPaths module, using fallback: ${fallbackDataDir}`
    );
    return join(fallbackDataDir, "provider-credentials.json");
  }

  return join(resolveDataDir(), "provider-credentials.json");
}

export function loadProviderCredentials<T extends Record<string, unknown>>(providers: T): T {
  if (cachedProviders && Date.now() - lastLoadTime < CONFIG_TTL_MS) {
    return cachedProviders as T;
=======
/**
 * Resolves the path to provider-credentials.json using the application's
 * data directory. Delegates to resolveDataDir() which handles DATA_DIR env,
 * platform-specific defaults, and fallback logic.
 *
 * previous: Priority: DATA_DIR env → ./data (project root)
 */
function resolveCredentialsPath() {
  return join(resolveDataDir(), "provider-credentials.json");
}

/**
 * Load and merge external credentials into the PROVIDERS object.
 * Uses TTL-based caching (60s) so credential file changes are picked up
 * without requiring a server restart.
 *
 * @param {object} providers - The PROVIDERS object from constants.js
 * @returns {object} The same PROVIDERS object (mutated in place)
 */
export function loadProviderCredentials(providers) {
  // Return cached result if within TTL
  if (cachedProviders && Date.now() - lastLoadTime < CONFIG_TTL_MS) {
    return cachedProviders;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  }

  const credPath = resolveCredentialsPath();

  if (!existsSync(credPath)) {
    if (!credGlobals().__omnirouteCredNoFileLogged) {
      console.log("[CREDENTIALS] No external credentials file found, using defaults.");
      credGlobals().__omnirouteCredNoFileLogged = true;
    }
    cachedProviders = providers;
    lastLoadTime = Date.now();
    return providers;
  }

  try {
    const raw = readFileSync(credPath, "utf-8");
<<<<<<< HEAD
    const external = JSON.parse(raw) as Record<string, unknown>;

    let overrideCount = 0;

    const mutableProviders = providers as MutableProviderRecord;

    for (const [providerKey, creds] of Object.entries(external)) {
      if (!mutableProviders[providerKey]) {
=======
    const external = JSON.parse(raw);

    let overrideCount = 0;

    for (const [providerKey, creds] of Object.entries(external)) {
      if (!providers[providerKey]) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        console.log(
          `[CREDENTIALS] Warning: unknown provider "${providerKey}" in credentials file, skipping.`
        );
        continue;
      }

      if (!creds || typeof creds !== "object") {
        console.log(
          `[CREDENTIALS] Warning: provider "${providerKey}" value must be an object, got ${typeof creds}. Skipping.`
        );
        continue;
      }

<<<<<<< HEAD
      const credentialOverrides = creds as ProviderCredentialOverrides;
      for (const field of CREDENTIAL_FIELDS) {
        if (credentialOverrides[field] !== undefined) {
          mutableProviders[providerKey][field] = credentialOverrides[field];
=======
      for (const field of CREDENTIAL_FIELDS) {
        if (creds[field] !== undefined) {
          providers[providerKey][field] = creds[field];
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          overrideCount++;
        }
      }
    }

    const isReload = cachedProviders !== null;
    console.log(
      `[CREDENTIALS] ${isReload ? "Reloaded" : "Loaded"} external credentials: ${overrideCount} field(s) from ${credPath}`
    );
  } catch (err) {
    const reason =
      err instanceof SyntaxError
        ? "Invalid JSON format"
        : (err as NodeJS.ErrnoException).code || "read error";
    console.log(`[CREDENTIALS] Error reading credentials file (${reason}). Using defaults.`);
  }

  cachedProviders = providers;
  lastLoadTime = Date.now();
  return providers;
}
