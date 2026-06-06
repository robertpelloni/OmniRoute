import { BaseExecutor } from "./base.ts";
<<<<<<< HEAD
import { randomUUID } from "crypto";
import { PROVIDERS, OAUTH_ENDPOINTS } from "../config/constants.ts";
import { getGeminiCliHeaders } from "../services/geminiCliHeaders.ts";
import { scrubProxyAndFingerprintHeaders } from "../services/antigravityHeaderScrub.ts";
import { obfuscateSensitiveWords } from "../services/antigravityObfuscation.ts";
import {
  shouldStripCloudCodeThinking,
  stripCloudCodeThinkingConfig,
} from "../services/cloudCodeThinking.ts";

const LOAD_CODE_ASSIST_URL = "https://cloudcode-pa.googleapis.com/v1internal:loadCodeAssist";
const ONBOARD_USER_URL = "https://cloudcode-pa.googleapis.com/v1internal:onboardUser";
const PROJECT_TTL_MS = 30_000; // 30 seconds — matches native Gemini CLI
const MAX_CACHE_SIZE = 100;
const LOAD_CODE_ASSIST_TIMEOUT_MS = 10_000; // 10 seconds timeout
const ONBOARD_TIMEOUT_MS = 30_000;
const ONBOARD_MAX_ATTEMPTS = 10;
const ONBOARD_DELAY_MS = 5_000;
const DEFAULT_PROJECT_ID = "default-project";
const DEFAULT_ONBOARD_TIER = "free-tier";
const LOAD_CODE_ASSIST_METADATA = Object.freeze({
  ideType: "IDE_UNSPECIFIED",
  platform: "PLATFORM_UNSPECIFIED",
  pluginType: "GEMINI",
});
const ONBOARD_METADATA = Object.freeze({
  ideType: "IDE_UNSPECIFIED",
  pluginType: "GEMINI",
});
=======
import { PROVIDERS, OAUTH_ENDPOINTS } from "../config/constants.ts";

const LOAD_CODE_ASSIST_URL = "https://cloudcode-pa.googleapis.com/v1internal:loadCodeAssist";
const PROJECT_TTL_MS = 30_000; // 30 seconds — matches native Gemini CLI
const MAX_CACHE_SIZE = 100;
const LOAD_CODE_ASSIST_TIMEOUT_MS = 10_000; // 10 seconds timeout
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

// Per-account cache: accessToken -> { projectId, expiresAt }
const projectCache = new Map<string, { projectId: string; expiresAt: number }>();
// In-flight deduplication: prevents thundering herd on cache miss
const inflightRefresh = new Map<string, Promise<string | null>>();

<<<<<<< HEAD
type LoadCodeAssistResponse = {
  cloudaicompanionProject?: string | { id?: string | null } | null;
  allowedTiers?: Array<{ id?: string | null; isDefault?: boolean | null }> | null;
};

type OnboardOptions = {
  attempts?: number;
  delayMs?: number;
};

function normalizeGeminiModel(model: string): string {
  return typeof model === "string" && model.trim().length > 0
    ? model.replace(/^models\//, "").trim()
    : "unknown";
}

function generateGeminiCliRequestId(): string {
  return `agent-${randomUUID()}`;
}

function generateGeminiCliSessionId(): string {
  return `-${Date.now()}`;
}

function cloneGeminiCliRecord(value: Record<string, any>): Record<string, any> {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }

  return JSON.parse(JSON.stringify(value));
}

function extractProjectId(payload: unknown): string {
  if (!payload || typeof payload !== "object") return "";
  const data = payload as LoadCodeAssistResponse;
  if (typeof data.cloudaicompanionProject === "string") {
    return data.cloudaicompanionProject.trim();
  }
  if (typeof data.cloudaicompanionProject?.id === "string") {
    return data.cloudaicompanionProject.id.trim();
  }
  return "";
}

function extractDefaultTierId(payload: unknown): string {
  if (!payload || typeof payload !== "object") return DEFAULT_ONBOARD_TIER;
  const tiers = Array.isArray((payload as LoadCodeAssistResponse).allowedTiers)
    ? (payload as LoadCodeAssistResponse).allowedTiers
    : [];
  for (const tier of tiers) {
    if (tier?.isDefault && typeof tier.id === "string" && tier.id.trim()) {
      return tier.id.trim();
    }
  }
  return DEFAULT_ONBOARD_TIER;
}

function cacheProject(accessToken: string, projectId: string): void {
  if (projectCache.size >= MAX_CACHE_SIZE) {
    const now = Date.now();
    for (const [key, val] of projectCache) {
      if (val.expiresAt <= now) projectCache.delete(key);
    }
    if (projectCache.size >= MAX_CACHE_SIZE) {
      const firstKey = projectCache.keys().next().value;
      if (firstKey !== undefined) projectCache.delete(firstKey);
    }
  }

  projectCache.set(accessToken, {
    projectId,
    expiresAt: Date.now() + PROJECT_TTL_MS,
  });
}

function sleep(ms: number): Promise<void> {
  if (!ms || ms <= 0) return Promise.resolve();
  return new Promise((resolve) => setTimeout(resolve, ms));
}

=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
export class GeminiCLIExecutor extends BaseExecutor {
  constructor() {
    super("gemini-cli", PROVIDERS["gemini-cli"]);
  }

  buildUrl(model, stream, urlIndex = 0) {
<<<<<<< HEAD
    void model;
    void urlIndex;
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    const action = stream ? "streamGenerateContent?alt=sse" : "generateContent";
    return `${this.config.baseUrl}:${action}`;
  }

<<<<<<< HEAD
=======
  buildHeaders(credentials, stream = true) {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${credentials.accessToken}`,
      // Fingerprint headers matching native GeminiCLI client (prevents upstream rejection)
      "User-Agent": "GeminiCLI/0.31.0/unknown (linux; x64)",
      "X-Goog-Api-Client": "google-genai-sdk/1.41.0 gl-node/v22.19.0",
      ...(stream && { Accept: "text/event-stream" }),
      // NOTE: x-goog-user-project removed — the stored projectId can become stale for
      // free-tier accounts, causing 403 "Cloud Code Private API has not been used in
      // project X". The API resolves the correct project from the OAuth token alone.
    };
  }

  /**
   * Fetch the current cloudaicompanionProject via loadCodeAssist API.
   * Native Gemini CLI refreshes this every 30 seconds — OmniRoute stores it once
   * at OAuth connection time, so it goes stale. This method keeps it fresh.
   */
  async refreshProject(accessToken: string): Promise<string | null> {
    // Check cache
    const cached = projectCache.get(accessToken);
    if (cached && cached.expiresAt > Date.now()) {
      return cached.projectId;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    }

    // Deduplicate in-flight requests (thundering herd prevention)
    const inflight = inflightRefresh.get(accessToken);
    if (inflight) return inflight;

<<<<<<< HEAD
    const promise = this._doRefresh(accessToken, model);
=======
    const promise = this._doRefresh(accessToken);
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    inflightRefresh.set(accessToken, promise);
    try {
      return await promise;
    } finally {
      inflightRefresh.delete(accessToken);
    }
  }

<<<<<<< HEAD
  async _doRefresh(accessToken: string, model = "unknown"): Promise<string | null> {
    const currentModel = normalizeGeminiModel(model);
=======
  async _doRefresh(accessToken: string): Promise<string | null> {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), LOAD_CODE_ASSIST_TIMEOUT_MS);

      let response;
      try {
        response = await fetch(LOAD_CODE_ASSIST_URL, {
          method: "POST",
<<<<<<< HEAD
          headers: getGeminiCliHeaders(currentModel, accessToken, "application/json"),
          body: JSON.stringify({
            metadata: { ...LOAD_CODE_ASSIST_METADATA },
=======
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            metadata: {
              ideType: "IDE_UNSPECIFIED",
              platform: "PLATFORM_UNSPECIFIED",
              pluginType: "GEMINI",
            },
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          }),
          signal: controller.signal,
        });
      } finally {
        clearTimeout(timeoutId);
      }

      if (!response.ok) {
        console.warn(
          `[OmniRoute] loadCodeAssist returned ${response.status} — falling back to stored projectId`
        );
        return null;
      }

<<<<<<< HEAD
      const data = (await response.json()) as LoadCodeAssistResponse;
      let projectId = extractProjectId(data);

      if (!projectId) {
        console.warn(
          "[OmniRoute] loadCodeAssist returned no project — attempting managed project onboarding"
        );
        projectId = await this.onboardManagedProject(
          accessToken,
          extractDefaultTierId(data),
          {},
          currentModel
        );
=======
      const data = await response.json();
      let projectId = "";
      if (typeof data.cloudaicompanionProject === "string") {
        projectId = data.cloudaicompanionProject.trim();
      } else if (typeof data.cloudaicompanionProject?.id === "string") {
        projectId = data.cloudaicompanionProject.id.trim();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      }

      if (!projectId) {
        console.warn(
<<<<<<< HEAD
          "[OmniRoute] managed project onboarding failed — falling back to stored projectId"
=======
          "[OmniRoute] loadCodeAssist returned no project — falling back to stored projectId"
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        );
        return null;
      }

<<<<<<< HEAD
      cacheProject(accessToken, projectId);
=======
      // Cache for 30 seconds (evict stale entries if cache is full)
      if (projectCache.size >= MAX_CACHE_SIZE) {
        const now = Date.now();
        for (const [key, val] of projectCache) {
          if (val.expiresAt <= now) projectCache.delete(key);
        }
        // If still full, evict the oldest entry (Map maintains insertion order)
        if (projectCache.size >= MAX_CACHE_SIZE) {
          const firstKey = projectCache.keys().next().value;
          if (firstKey !== undefined) projectCache.delete(firstKey);
        }
      }
      projectCache.set(accessToken, {
        projectId,
        expiresAt: Date.now() + PROJECT_TTL_MS,
      });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

      return projectId;
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      console.warn(`[OmniRoute] loadCodeAssist failed (${msg}) — falling back to stored projectId`);
      return null;
    }
  }

  async transformRequest(model, body, stream, credentials) {
<<<<<<< HEAD
    const currentModel = normalizeGeminiModel(model);
    const normalizedBody =
      shouldStripCloudCodeThinking(this.provider, currentModel) && body && typeof body === "object"
        ? stripCloudCodeThinkingConfig(body)
        : body;

    const bodyRecord =
      normalizedBody && typeof normalizedBody === "object"
        ? (normalizedBody as Record<string, any>)
        : { request: {} };
    const requestRecord =
      bodyRecord.request && typeof bodyRecord.request === "object"
        ? cloneGeminiCliRecord(bodyRecord.request as Record<string, any>)
        : {};

    const envelope: Record<string, any> = {
      model: currentModel,
      project: bodyRecord.project || credentials.projectId || "",
      user_prompt_id: bodyRecord.user_prompt_id || generateGeminiCliRequestId(),
      request: {
        ...requestRecord,
        session_id: requestRecord.session_id || generateGeminiCliSessionId(),
      },
    };

    for (const [key, value] of Object.entries(bodyRecord)) {
      if (!(key in envelope) && key !== "request") {
        envelope[key] = value;
      }
    }

    // Refresh the project ID via loadCodeAssist (cached for 30s).
    if (credentials.accessToken) {
      const freshProject = await this.refreshProject(credentials.accessToken, currentModel);
      if (freshProject) {
        envelope.project = freshProject;
      }
    }

    if (envelope.request) {
      // Obfuscate sensitive client names in user content
      const contents = envelope.request?.contents;
      if (Array.isArray(contents)) {
        for (const msg of contents) {
          if (Array.isArray(msg.parts)) {
            for (const part of msg.parts) {
              if (typeof part.text === "string") {
                part.text = obfuscateSensitiveWords(part.text);
              }
            }
          }
        }
      }
    }
    return envelope;
=======
    // Refresh the project ID via loadCodeAssist (cached for 30s).
    // The translator builds the envelope with the stale stored projectId —
    // we replace it here with the fresh one before sending to the API.
    if (body && typeof body === "object" && body.request && credentials.accessToken) {
      const freshProject = await this.refreshProject(credentials.accessToken);
      if (freshProject) {
        body.project = freshProject;
      }
      // If refresh failed, keep the stale projectId as a best-effort fallback
    }
    return body;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  }

  async refreshCredentials(credentials, log) {
    if (!credentials.refreshToken) return null;

    try {
      const response = await fetch(OAUTH_ENDPOINTS.google.token, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: credentials.refreshToken,
          client_id: this.config.clientId,
          client_secret: this.config.clientSecret,
        }),
      });

      if (!response.ok) return null;

      const tokens = await response.json();
      log?.info?.("TOKEN", "Gemini CLI refreshed");

      return {
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token || credentials.refreshToken,
        expiresIn: tokens.expires_in,
        projectId: credentials.projectId,
      };
    } catch (error) {
      log?.error?.("TOKEN", `Gemini CLI refresh error: ${error.message}`);
      return null;
    }
  }
}

export default GeminiCLIExecutor;
