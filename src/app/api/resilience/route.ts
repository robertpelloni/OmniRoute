import { NextResponse } from "next/server";
import { getSettings, updateSettings } from "@/lib/localDb";
<<<<<<< HEAD
import {
  buildLegacyResilienceCompat,
  mergeResilienceSettings,
  resolveResilienceSettings,
  type ResilienceSettings,
  type ResilienceSettingsPatch,
} from "@/lib/resilience/settings";
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import { updateResilienceSchema } from "@/shared/validation/schemas";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";

type JsonRecord = Record<string, unknown>;

function asRecord(value: unknown): JsonRecord {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as JsonRecord) : {};
}

function getErrorMessage(error: unknown, fallback: string): string {
  return error instanceof Error && error.message ? error.message : fallback;
}

<<<<<<< HEAD
function normalizeLegacyPatch(body: JsonRecord): ResilienceSettingsPatch {
  const profiles = asRecord(body.profiles);
  const defaults = asRecord(body.defaults);
  const oauth = asRecord(profiles.oauth);
  const apikey = asRecord(profiles.apikey);

  const patch: ResilienceSettingsPatch = {};

  if (Object.keys(defaults).length > 0) {
    patch.requestQueue = {
      ...(typeof defaults.requestsPerMinute === "number"
        ? { requestsPerMinute: defaults.requestsPerMinute }
        : {}),
      ...(typeof defaults.minTimeBetweenRequests === "number"
        ? { minTimeBetweenRequestsMs: defaults.minTimeBetweenRequests }
        : {}),
      ...(typeof defaults.concurrentRequests === "number"
        ? { concurrentRequests: defaults.concurrentRequests }
        : {}),
    };
  }

  if (Object.keys(oauth).length > 0 || Object.keys(apikey).length > 0) {
    const buildLegacyCooldownPatch = (profile: JsonRecord) => {
      const cooldownCandidates = [
        typeof profile.transientCooldown === "number" ? profile.transientCooldown : null,
        typeof profile.rateLimitCooldown === "number" && profile.rateLimitCooldown > 0
          ? profile.rateLimitCooldown
          : null,
      ].filter((value): value is number => typeof value === "number");

      return {
        ...(cooldownCandidates.length > 0
          ? { baseCooldownMs: Math.max(...cooldownCandidates) }
          : {}),
        ...(typeof profile.rateLimitCooldown === "number"
          ? { useUpstreamRetryHints: profile.rateLimitCooldown === 0 }
          : {}),
        ...(typeof profile.maxBackoffLevel === "number"
          ? { maxBackoffSteps: profile.maxBackoffLevel }
          : {}),
      };
    };

    patch.connectionCooldown = {
      ...(Object.keys(oauth).length > 0
        ? {
            oauth: buildLegacyCooldownPatch(oauth),
          }
        : {}),
      ...(Object.keys(apikey).length > 0
        ? {
            apikey: buildLegacyCooldownPatch(apikey),
          }
        : {}),
    };

    patch.providerBreaker = {
      ...(Object.keys(oauth).length > 0
        ? {
            oauth: {
              ...(typeof oauth.circuitBreakerThreshold === "number"
                ? { failureThreshold: oauth.circuitBreakerThreshold }
                : {}),
              ...(typeof oauth.circuitBreakerReset === "number"
                ? { resetTimeoutMs: oauth.circuitBreakerReset }
                : {}),
            },
          }
        : {}),
      ...(Object.keys(apikey).length > 0
        ? {
            apikey: {
              ...(typeof apikey.circuitBreakerThreshold === "number"
                ? { failureThreshold: apikey.circuitBreakerThreshold }
                : {}),
              ...(typeof apikey.circuitBreakerReset === "number"
                ? { resetTimeoutMs: apikey.circuitBreakerReset }
                : {}),
            },
          }
        : {}),
    };
  }

  return patch;
}

async function syncRuntimeSettings(resilienceSettings: ResilienceSettings) {
  const { applyRequestQueueSettings } =
    await import("@omniroute/open-sse/services/rateLimitManager");
  await applyRequestQueueSettings(resilienceSettings.requestQueue);
}

/**
 * GET /api/resilience — Get current resilience configuration
 */
export async function GET() {
  try {
    const settings = await getSettings();
    const resilience = resolveResilienceSettings(settings);

    return NextResponse.json({
      requestQueue: resilience.requestQueue,
      connectionCooldown: resilience.connectionCooldown,
      providerBreaker: resilience.providerBreaker,
      waitForCooldown: {
        enabled: resilience.waitForCooldown.enabled,
        maxRetries: resilience.waitForCooldown.maxRetries,
        maxRetryWaitSec: resilience.waitForCooldown.maxRetryWaitSec,
      },
      legacy: buildLegacyResilienceCompat(resilience),
=======
/**
 * GET /api/resilience — Get current resilience configuration and status
 */
export async function GET() {
  try {
    // Dynamic imports for open-sse modules
    const { getAllCircuitBreakerStatuses } = await import("@/shared/utils/circuitBreaker");
    const { getAllRateLimitStatus } = await import("@omniroute/open-sse/services/rateLimitManager");
    const { PROVIDER_PROFILES, DEFAULT_API_LIMITS } =
      await import("@omniroute/open-sse/config/constants");

    const settings = await getSettings();
    const circuitBreakers = getAllCircuitBreakerStatuses();
    const rateLimitStatus = getAllRateLimitStatus();

    return NextResponse.json({
      profiles: settings.providerProfiles || PROVIDER_PROFILES,
      defaults: {
        ...DEFAULT_API_LIMITS,
        ...asRecord(settings.rateLimitDefaults),
      },
      circuitBreakers,
      rateLimitStatus,
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    });
  } catch (err: unknown) {
    console.error("[API] GET /api/resilience error:", err);
    return NextResponse.json(
<<<<<<< HEAD
      { error: getErrorMessage(err, "Failed to load resilience settings") },
=======
      { error: getErrorMessage(err, "Failed to load resilience status") },
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      { status: 500 }
    );
  }
}

/**
<<<<<<< HEAD
 * PATCH /api/resilience — Update resilience configuration
=======
 * PATCH /api/resilience — Update provider resilience profiles and/or rate limit defaults
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
 */
export async function PATCH(request) {
  let rawBody;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      {
        error: {
          message: "Invalid request",
          details: [{ field: "body", message: "Invalid JSON body" }],
        },
      },
      { status: 400 }
    );
  }

  try {
    const validation = validateBody(updateResilienceSchema, rawBody);
    if (isValidationFailure(validation)) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }
<<<<<<< HEAD

    const body = validation.data as JsonRecord;
    const currentSettings = await getSettings();
    const currentResilience = resolveResilienceSettings(currentSettings);
    const nextResilience = mergeResilienceSettings(currentResilience, {
      ...(body.requestQueue
        ? { requestQueue: body.requestQueue as ResilienceSettingsPatch["requestQueue"] }
        : {}),
      ...(body.connectionCooldown
        ? {
            connectionCooldown:
              body.connectionCooldown as ResilienceSettingsPatch["connectionCooldown"],
          }
        : {}),
      ...(body.providerBreaker
        ? { providerBreaker: body.providerBreaker as ResilienceSettingsPatch["providerBreaker"] }
        : {}),
      ...(body.waitForCooldown
        ? { waitForCooldown: body.waitForCooldown as ResilienceSettingsPatch["waitForCooldown"] }
        : {}),
      ...normalizeLegacyPatch(body),
    });

    await updateSettings({
      resilienceSettings: nextResilience,
      requestRetry: nextResilience.waitForCooldown.maxRetries,
      maxRetryIntervalSec: nextResilience.waitForCooldown.maxRetryWaitSec,
    });
    await syncRuntimeSettings(nextResilience);

    return NextResponse.json({
      ok: true,
      requestQueue: nextResilience.requestQueue,
      connectionCooldown: nextResilience.connectionCooldown,
      providerBreaker: nextResilience.providerBreaker,
      waitForCooldown: {
        enabled: nextResilience.waitForCooldown.enabled,
        maxRetries: nextResilience.waitForCooldown.maxRetries,
        maxRetryWaitSec: nextResilience.waitForCooldown.maxRetryWaitSec,
      },
      legacy: buildLegacyResilienceCompat(nextResilience),
=======
    const { profiles, defaults } = validation.data;

    const updates: Record<string, any> = {};
    if (profiles) updates.providerProfiles = profiles;
    if (defaults) updates.rateLimitDefaults = defaults;

    await updateSettings(updates);

    return NextResponse.json({
      ok: true,
      ...(profiles ? { profiles } : {}),
      ...(defaults ? { defaults } : {}),
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    });
  } catch (err: unknown) {
    console.error("[API] PATCH /api/resilience error:", err);
    return NextResponse.json(
      { error: getErrorMessage(err, "Failed to save resilience settings") },
      { status: 500 }
    );
  }
}
