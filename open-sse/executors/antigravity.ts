import crypto, { randomUUID } from "crypto";
import { BaseExecutor, mergeUpstreamExtraHeaders, type ExecuteInput } from "./base.ts";
import { applyFingerprint, isCliCompatEnabled } from "../config/cliFingerprints.ts";
=======
import crypto from "crypto";
import { BaseExecutor, mergeUpstreamExtraHeaders } from "./base.ts";
>>>>>>> Stashed changes
import { PROVIDERS, OAUTH_ENDPOINTS, HTTP_STATUS } from "../config/constants.ts";
import { scrubProxyAndFingerprintHeaders } from "../services/antigravityHeaderScrub.ts";
import { antigravityUserAgent } from "../services/antigravityHeaders.ts";
import { classify429, decide429, type Decision } from "../services/antigravity429Engine.ts";
import {
  injectCreditsField,
  shouldRetryWithCredits,
  shouldUseCreditsFirst,
  getCreditsMode,
  handleCreditsFailure,
} from "../services/antigravityCredits.ts";
import { persistCreditBalance, getAllPersistedCreditBalances } from "@/lib/db/creditBalance";
import { obfuscateSensitiveWords } from "../services/antigravityObfuscation.ts";
import { resolveAntigravityVersion } from "../services/antigravityVersion.ts";
import { resolveAntigravityModelId } from "../config/antigravityModelAliases.ts";
import { cloakAntigravityToolPayload } from "../config/toolCloaking.ts";
import {
  shouldStripCloudCodeThinking,
  stripCloudCodeThinkingConfig,
} from "../services/cloudCodeThinking.ts";

const MAX_RETRY_AFTER_MS = 60_000;
const LONG_RETRY_THRESHOLD_MS = 60_000;
const CREDITS_EXHAUSTED_TTL_MS = 5 * 60 * 60 * 1000; // 5 hours

const BARE_PRO_IDS = new Set(["gemini-3.1-pro"]);

function cloneAntigravityRequestBody(body: unknown): unknown {
  if (!body || typeof body !== "object") {
    return body;
  }

  try {
    return structuredClone(body);
  } catch {
    return JSON.parse(JSON.stringify(body));
  }
}

function serializeAntigravityRequest(
  provider: string,
  headers: Record<string, string>,
  body: unknown
): { headers: Record<string, string>; bodyString: string } {
  const serializedBody = cloneAntigravityRequestBody(body);

  if (!isCliCompatEnabled(provider)) {
    return { headers, bodyString: JSON.stringify(serializedBody) };
  }
  return applyFingerprint(provider, { ...headers }, serializedBody);
}

type AntigravityCollectedStream = {
  textContent: string;
  finishReason: string;
  usage: Record<string, unknown> | null;
  remainingCredits: Array<{ creditType: string; creditAmount: string }> | null;
};

type AntigravityRequestEnvelope = Record<string, unknown> & {
  project: string;
  model: string;
  userAgent: "antigravity";
  requestType: "agent";
  requestId: string;
  request: Record<string, unknown>;
};

/**
 * Per-account GOOGLE_ONE_AI credits-exhausted tracker.
 * Key: accountId (OAuth subject / email). Value: expiry timestamp.
 * When credits hit 0 we skip the credit retry for CREDITS_EXHAUSTED_TTL_MS.
 */
const creditsExhaustedUntil = new Map<string, number>();

/**
 * Per-account GOOGLE_ONE_AI remaining credit balance cache.
 * Populated from the final SSE chunk's `remainingCredits` field after every
 * successful credit-injected request. Keyed by accountId.
 * On first access, hydrated from the DB-persisted balances so values survive restarts.
 */
const creditBalanceCache = new Map<string, number>();
let creditCacheHydrated = false;

function hydrateCreditCacheFromDb(): void {
  if (creditCacheHydrated) return;
  creditCacheHydrated = true;
  try {
    const persisted = getAllPersistedCreditBalances();
    for (const [accountId, balance] of persisted) {
      // Only fill in accounts not already populated by a live SSE response
      if (!creditBalanceCache.has(accountId)) {
        creditBalanceCache.set(accountId, balance);
      }
    }
  } catch {
    // DB not ready yet (build phase, etc.) — ignore silently
  }
}

/** Read the last-known GOOGLE_ONE_AI credit balance for a given account. */
export function getAntigravityRemainingCredits(accountId: string): number | null {
  hydrateCreditCacheFromDb();
  const balance = creditBalanceCache.get(accountId);
  return balance !== undefined ? balance : null;
}

/** Update the balance cache — called when we parse `remainingCredits` from an SSE stream. */
export function updateAntigravityRemainingCredits(accountId: string, balance: number): void {
  creditBalanceCache.set(accountId, balance);
  // Persist to DB so the value survives server restarts
  try {
    persistCreditBalance(accountId, balance);
  } catch {
    // Non-critical — in-memory cache is the primary source
  }
}

function isCreditsExhausted(accountId: string): boolean {
  const until = creditsExhaustedUntil.get(accountId);
  if (!until) return false;
  if (Date.now() >= until) {
    creditsExhaustedUntil.delete(accountId);
    return false;
  }
  return true;
}

function markCreditsExhausted(accountId: string): void {
  creditsExhaustedUntil.set(accountId, Date.now() + CREDITS_EXHAUSTED_TTL_MS);
}

function processAntigravitySSEPayload(
  payload: string,
  collected: AntigravityCollectedStream,
  log?: { debug?: (scope: string, message: string) => void }
) {
  if (!payload || payload === "[DONE]") return;
  try {
    const parsed = JSON.parse(payload);
    const candidate = parsed?.response?.candidates?.[0];
    if (candidate?.content?.parts) {
      for (const part of candidate.content.parts) {
        if (typeof part.text === "string" && !part.thought && !part.thoughtSignature) {
          collected.textContent += part.text;
        }
      }
    }
    if (candidate?.finishReason) {
      collected.finishReason =
        candidate.finishReason.toLowerCase() === "stop"
          ? "stop"
          : candidate.finishReason.toLowerCase();
    }
    if (parsed?.response?.usageMetadata) {
      const um = parsed.response.usageMetadata;
      collected.usage = {
        prompt_tokens: um.promptTokenCount || 0,
        completion_tokens: um.candidatesTokenCount || 0,
        total_tokens: um.totalTokenCount || 0,
      };
    }
    if (Array.isArray(parsed?.remainingCredits)) {
      collected.remainingCredits = parsed.remainingCredits;
    }
  } catch {
    log?.debug?.("SSE_PARSE", `Skipping malformed SSE line: ${payload.slice(0, 80)}`);
  }
}

function processAntigravitySSEText(
  text: string,
  partialLine: { value: string },
  collected: AntigravityCollectedStream,
  log?: { debug?: (scope: string, message: string) => void }
) {
  partialLine.value += text;
  const lines = partialLine.value.split("\n");
  partialLine.value = lines.pop() || "";

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("data:")) continue;
    processAntigravitySSEPayload(trimmed.slice(5).trim(), collected, log);
  }
}

function flushAntigravitySSEText(
  partialLine: { value: string },
  collected: AntigravityCollectedStream,
  log?: { debug?: (scope: string, message: string) => void }
) {
  const trimmed = partialLine.value.trim();
  partialLine.value = "";
  if (!trimmed.startsWith("data:")) return;
  processAntigravitySSEPayload(trimmed.slice(5).trim(), collected, log);
}

/**
 * Strip provider prefixes (e.g. "antigravity/model" → "model").
 * Ensures the model name sent to the upstream API never contains a routing prefix.
 */
function cleanModelName(model: string): string {
  if (!model) return model;
  let clean = model.includes("/") ? model.split("/").pop()! : model;
  clean = resolveAntigravityModelId(clean);
    };
    // Scrub proxy/fingerprint headers that reveal non-native traffic
    return scrubProxyAndFingerprintHeaders(raw);
  }

  transformRequest(model, body, stream, credentials): AntigravityRequestEnvelope | Response {
    // TODO: Consider removing project override like gemini-cli.ts — stored projectId
    // can become stale for Cloud Code accounts, causing 403 "has not been used in project X".
    // Antigravity accounts may have more stable project IDs, but the risk exists.
    const bodyProjectId = body?.project;
    const credentialsProjectId = credentials?.projectId;
    const allowBodyProjectOverride = process.env.OMNIROUTE_ALLOW_BODY_PROJECT_OVERRIDE === "1";

    // Default: prefer OAuth-stored projectId over incoming body.project to avoid
    // stale/wrong client-side values causing 404/403 from Cloud Code endpoints.
    // Opt-in escape hatch: set OMNIROUTE_ALLOW_BODY_PROJECT_OVERRIDE=1.
    const projectId =
      allowBodyProjectOverride && bodyProjectId
        ? bodyProjectId
        : credentialsProjectId || bodyProjectId;

    if (!projectId) {
      // (#489) Return a structured error instead of throwing — gives the client a clear signal
      // to show a "Reconnect OAuth" prompt rather than an opaque "Internal Server Error".
      const errorMsg =
        "Missing Google projectId for Antigravity account. Please reconnect OAuth in Providers → Antigravity so OmniRoute can fetch your Cloud Code project.";
      const errorBody = {
        error: {
          message: errorMsg,
          type: "oauth_missing_project_id",
          code: "missing_project_id",
        },
      };
      const resp = new Response(JSON.stringify(errorBody), {
        status: 422,
        headers: { "Content-Type": "application/json" },
      });
      // Returning a Response object signals the executor to stop and forward it
      return resp as unknown as never;
    }

    const upstreamModel = cleanModelName(model);
    const isClaude = upstreamModel.toLowerCase().includes("claude");
    const baseBody = body && typeof body === "object" ? body : {};
    const normalizedBody = shouldStripCloudCodeThinking(this.provider, upstreamModel)
      ? stripCloudCodeThinkingConfig(baseBody)
      : baseBody;

    let transformedRequest;

    if (isClaude) {
      // Claude models on Vertex AI Cloud Code expect the native Anthropic payload
      // exactly as generated by openaiToClaudeRequestForAntigravity, without Gemini mappings.
      transformedRequest = {
        ...normalizedBody.request,
        sessionId: normalizedBody.request?.sessionId || this.generateSessionId(),
      };
    } else {
      // Fix contents for Gemini models via Antigravity
      const normalizedContents =
        normalizedBody.request?.contents?.map((c) => {
          let role = c.role;
          if (c.parts?.some((p) => p.functionResponse)) {
            role = "user";
          }

          const hasFunctionCall = c.parts?.some((p) => p.functionCall) || false;

          const parts =
            c.parts?.filter((p) => {
              if (typeof p.text === "string" && p.text === "") return false;
              if (p.functionCall && !p.functionCall.name) return false;

              return !p.thought && (hasFunctionCall || !p.thoughtSignature);
            }) || [];
          return { ...c, role, parts };
        }) || [];

      const contents = [];
      for (const c of normalizedContents) {
        if (!Array.isArray(c.parts) || c.parts.length === 0) continue;
        if (contents.length > 0 && contents[contents.length - 1].role === c.role) {
          contents[contents.length - 1].parts.push(...c.parts);
        } else {
          contents.push(c);
        }
      }

      transformedRequest = {
        ...normalizedBody.request,
        ...(contents.length > 0 && { contents }),
        sessionId: normalizedBody.request?.sessionId || this.generateSessionId(),
        safetySettings: undefined,
        toolConfig:
          normalizedBody.request?.tools?.length > 0
            ? { functionCallingConfig: { mode: "VALIDATED" } }
            : normalizedBody.request?.toolConfig,
      };

      // Obfuscate sensitive client names in user content (e.g. "OpenCode", "Cursor")
      const requestContents = transformedRequest.contents;
      if (Array.isArray(requestContents)) {
        for (const msg of requestContents) {
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

    const {
      project: _project,
      model: _model,
      userAgent: _userAgent,
      requestType: _requestType,
      requestId: _requestId,
      request: _request,
      ...passthroughFields
    } = normalizedBody;

    return {
      project: projectId,
      model: upstreamModel,
      userAgent: "antigravity",
      requestType: "agent",
      requestId: `agent-${crypto.randomUUID()}`,
      request: transformedRequest,
      ...passthroughFields,
    };
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
      log?.info?.("TOKEN", "Antigravity refreshed");

      return {
        accessToken: tokens.access_token,
        refreshToken: tokens.refresh_token || credentials.refreshToken,
        expiresIn: tokens.expires_in,
        projectId: credentials.projectId,
      };
    } catch (error) {
      log?.error?.("TOKEN", `Antigravity refresh error: ${error.message}`);
      return null;
    }
  }

  generateSessionId() {
    return `-${parseInt(randomUUID().replace(/-/g, "").substring(0, 8), 16) % 9_000_000_000_000_000_000}`;
  }

  parseRetryHeaders(headers) {
    if (!headers?.get) return null;

    const retryAfter = headers.get("retry-after");
    if (retryAfter) {
      const seconds = parseInt(retryAfter, 10);
      if (!isNaN(seconds) && seconds > 0) return seconds * 1000;

      const date = new Date(retryAfter);
      if (!isNaN(date.getTime())) {
        const diff = date.getTime() - Date.now();
        return diff > 0 ? diff : null;
      }
    }

    const resetAfter = headers.get("x-ratelimit-reset-after");
    if (resetAfter) {
      const seconds = parseInt(resetAfter, 10);
      if (!isNaN(seconds) && seconds > 0) return seconds * 1000;
    }

    const resetTimestamp = headers.get("x-ratelimit-reset");
    if (resetTimestamp) {
      const ts = parseInt(resetTimestamp, 10) * 1000;
      const diff = ts - Date.now();
      return diff > 0 ? diff : null;
    }

    return null;
  }

  // Parse retry time from Antigravity error message body
  // Format: "Your quota will reset after 2h7m23s" or "1h30m" or "45m" or "30s"
  parseRetryFromErrorMessage(errorMessage) {
    if (!errorMessage || typeof errorMessage !== "string") return null;

    const match = errorMessage.match(/reset (?:after|in) (\d+h)?(\d+m)?(\d+s)?/i);
    if (!match) return null;

    let totalMs = 0;
    if (match[1]) totalMs += parseInt(match[1]) * 3600 * 1000; // hours
    if (match[2]) totalMs += parseInt(match[2]) * 60 * 1000; // minutes
    if (match[3]) totalMs += parseInt(match[3]) * 1000; // seconds

    // "reset after 0s" = burst/RPM limit, not quota exhaustion.
    // Return a minimum backoff so the auto-retry loop handles it
    // instead of falling through to the 24h exhaustion classifier.
    if (totalMs === 0) return 2_000; // 2s minimum burst-limit backoff

    return totalMs;
  }

  /**
   * Collect an SSE streaming response into a single non-streaming JSON response.
   * Parses Gemini-format SSE chunks and assembles text content + usage into one
   * OpenAI-format chat.completion payload.
   */
  collectStreamToResponse(response, model, url, headers, transformedBody, log?, signal?) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    const SSE_COLLECT_TIMEOUT_MS = 120_000;

    const collect = async () => {
      const collected: AntigravityCollectedStream = {
        textContent: "",
        finishReason: "stop",
        usage: null,
        remainingCredits: null,
      };
      const partialLine = { value: "" };
      let timedOut = false;
      const timeout = AbortSignal.timeout(SSE_COLLECT_TIMEOUT_MS);
      try {
        while (true) {
          if (signal?.aborted) throw new Error("Request aborted during SSE collection");
          const { done, value } = await Promise.race([
            reader.read(),
            new Promise<never>((_, reject) =>
              timeout.addEventListener(
                "abort",
                () => reject(new Error("SSE collection timed out")),
                { once: true }
              )
            ),
          ]);
          if (done) break;
          processAntigravitySSEText(
            decoder.decode(value, { stream: true }),
            partialLine,
            collected,
            log
          );
        }
      } catch (err) {
        const msg = err?.message || String(err);
        timedOut = msg.includes("timed out");
        log?.warn?.("SSE_COLLECT", `Error collecting SSE stream: ${msg}`);
        // Fall through — return whatever was collected so far
      }
      processAntigravitySSEText(decoder.decode(), partialLine, collected, log);
      flushAntigravitySSEText(partialLine, collected, log);

      const result = {
        id: `chatcmpl-${Date.now()}-${crypto.randomUUID().slice(0, 8)}`,
        object: "chat.completion",
        created: Math.floor(Date.now() / 1000),
        model,
        choices: [
          {
            index: 0,
            message: { role: "assistant", content: collected.textContent },
            finish_reason: timedOut ? "length" : collected.finishReason,
          },
        ],
        ...(collected.usage && { usage: collected.usage }),
        // Expose credit balance for upstream consumers (usage service, dashboard)
        ...(collected.remainingCredits && { _remainingCredits: collected.remainingCredits }),
      };

      const syntheticStatus = timedOut ? 504 : response.status;
      const syntheticResponse = new Response(JSON.stringify(result), {
        status: syntheticStatus,
        statusText: timedOut ? "Gateway Timeout" : response.statusText,
        headers: [["Content-Type", "application/json"]],
      });

      return { response: syntheticResponse, url, headers, transformedBody };
    };

    return collect();
  }

  async execute({
    model,
    body,
    stream,
    credentials,
    signal,
    log,
    upstreamExtraHeaders,
  }: ExecuteInput) {
    await resolveAntigravityVersion();
    const fallbackCount = this.getFallbackCount();
    let lastError = null;
    let lastStatus = 0;
    const MAX_AUTO_RETRIES = 3;
    const retryAttemptsByUrl = {}; // Track retry attempts per URL

    // Always stream upstream — buildUrl always returns the streaming endpoint.
    // For non-streaming clients, we collect the SSE below and return a synthetic
    // non-streaming Response so chatCore's non-streaming path stays unchanged.
    const upstreamStream = true;

    // Account ID for credits tracking.
    // Use connectionId as the stable cache key — it's available in both the executor
    // (via credentials.connectionId) and the usage fetcher (via connection.id).
    // The email-based key was unreliable because email isn't always on the credentials object.
    const accountId: string = credentials?.connectionId || "unknown";

    // Resolve credits mode once per execute() call. "always" injects
    // enabledCreditTypes: ["GOOGLE_ONE_AI"] on the first request so the
    // preflight normal call is skipped entirely.
    const creditsMode = getCreditsMode();
    const useCreditsFirst = shouldUseCreditsFirst(credentials?.accessToken || "", creditsMode);


      // Initialize retry counter for this URL
      if (!retryAttemptsByUrl[urlIndex]) {
        retryAttemptsByUrl[urlIndex] = 0;
      }

      try {
        const serializedRequest = serializeAntigravityRequest(
          this.provider,
          headers,
          transformedBody
        );
        const finalHeaders = serializedRequest.headers;

        log?.debug?.(
          "TELEMETRY",
          `[Antigravity] Execute - URL: ${url}, Model: ${model}, Target: ${getRequestTargetModel(transformedBody)}, RetryAttempt: ${retryAttemptsByUrl[urlIndex]}`
        );

        const response = await fetch(url, {
          method: "POST",
          headers: finalHeaders,
          body: serializedRequest.bodyString,
          signal,
        });

<<<<<<< Updated upstream
        if (!response.ok) {
          log?.warn?.(
            "TELEMETRY",
            `[Antigravity] Error Response - URL: ${url}, Status: ${response.status}, Model: ${model}`
          );
        }

=======
        // Parse retry time for 429/503 responses
        let retryMs = null;

        if (
          response.status === HTTP_STATUS.RATE_LIMITED ||
          response.status === HTTP_STATUS.SERVICE_UNAVAILABLE
        ) {
          // Try to get retry time from headers first
          retryMs = this.parseRetryHeaders(response.headers);

          // If no retry time in headers, try to parse from error message body
          if (!retryMs) {
            try {
              const errorBody = await response.clone().text();
              const errorJson = JSON.parse(errorBody);
              const errorMessage = errorJson?.error?.message || errorJson?.message || "";
            } catch (e) {
              // Ignore parse errors, will fall back to exponential backoff
            }
          }

          if (retryMs && retryMs <= LONG_RETRY_THRESHOLD_MS) {
            const effectiveRetryMs = Math.min(retryMs, MAX_RETRY_AFTER_MS);
            log?.debug?.(
              "RETRY",
              `${response.status} with Retry-After: ${Math.ceil(effectiveRetryMs / 1000)}s, waiting...`
            );
            await new Promise((resolve) => setTimeout(resolve, effectiveRetryMs));
            urlIndex--;
            continue;
          }

          // Auto retry only for 429 when retryMs is 0 or undefined
          if (
            response.status === HTTP_STATUS.RATE_LIMITED &&
            (!retryMs || retryMs === 0) &&
            retryAttemptsByUrl[urlIndex] < MAX_AUTO_RETRIES
          ) {
            retryAttemptsByUrl[urlIndex]++;
            // Exponential backoff: 2s, 4s, 8s...
            const backoffMs = Math.min(
              1000 * 2 ** retryAttemptsByUrl[urlIndex],
              MAX_RETRY_AFTER_MS
            );
            log?.debug?.(
              "RETRY",
              `429 auto retry ${retryAttemptsByUrl[urlIndex]}/${MAX_AUTO_RETRIES} after ${backoffMs / 1000}s`
            );
            await new Promise((resolve) => setTimeout(resolve, backoffMs));
            urlIndex--;
            continue;
          }

          log?.debug?.(
            "RETRY",
            `${response.status}, Retry-After ${retryMs ? `too long (${Math.ceil(retryMs / 1000)}s)` : "missing"}, trying fallback`
          );
          lastStatus = response.status;

          if (urlIndex + 1 < fallbackCount) {
            continue;
          }
        }

        if (this.shouldRetry(response.status, urlIndex)) {
          log?.debug?.("RETRY", `${response.status} on ${url}, trying fallback ${urlIndex + 1}`);
          lastStatus = response.status;
          continue;
        }

        // If we have a 429 with long retry time, embed it in response body
        if (
          response.status === HTTP_STATUS.RATE_LIMITED &&
          retryMs &&
          retryMs > LONG_RETRY_THRESHOLD_MS
        ) {
          try {
            const respBody = await response.clone().text();
            let obj;
            try {
              obj = JSON.parse(respBody);
            } catch {
              obj = {};
            }
            obj.retryAfterMs = retryMs;
            const modifiedBody = JSON.stringify(obj);
            const modifiedResponse = new Response(modifiedBody, {
              status: response.status,
              headers: response.headers,
            });
          } catch (err) {
            log?.warn?.("RETRY", `Failed to embed retryAfterMs: ${err}`);
            // Fall back to original response
          }
        }

        // For non-streaming clients, collect the SSE stream and return a synthetic
        // non-streaming Response so chatCore doesn't need to handle SSE conversion.
        if (!stream) {
            transformedBody,
            log,
            signal
          );
      } catch (error) {
        lastError = error;
        log?.error?.(
          "TELEMETRY",
          `[Antigravity] Network/Fetch Error - URL: ${url}, Model: ${model}, Error: ${error instanceof Error ? error.message : String(error)}`
        );
        if (urlIndex + 1 < fallbackCount) {
          log?.debug?.("RETRY", `Error on ${url}, trying fallback ${urlIndex + 1}`);
          continue;
        }
        throw error;
      }
    }

    throw lastError || new Error(`All ${fallbackCount} URLs failed with status ${lastStatus}`);
  }
}

export default AntigravityExecutor;
