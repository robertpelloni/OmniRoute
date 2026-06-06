import { NextResponse } from "next/server";
import { getSettings, updateSettings } from "@/lib/localDb";
import { updateComboDefaultsSchema } from "@/shared/validation/schemas";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";
<<<<<<< HEAD
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";

const LEGACY_COMBO_RESILIENCE_KEYS = new Set([
  "timeoutMs",
  "healthCheckEnabled",
  "healthCheckTimeoutMs",
]);

function sanitizeComboRuntimeConfig(config?: Record<string, any> | null) {
  if (!config || typeof config !== "object") return {};
  return Object.fromEntries(
    Object.entries(config).filter(
      ([key, value]) =>
        value !== undefined && value !== null && !LEGACY_COMBO_RESILIENCE_KEYS.has(key)
    )
  );
}

function sanitizeProviderOverrides(overrides?: Record<string, any> | null) {
  if (!overrides || typeof overrides !== "object") return {};
  return Object.fromEntries(
    Object.entries(overrides).map(([providerId, config]) => [
      providerId,
      sanitizeComboRuntimeConfig(config),
    ])
  );
}
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

/**
 * GET /api/settings/combo-defaults
 * Returns the current combo global defaults and provider overrides
 */
<<<<<<< HEAD
export async function GET(request: Request) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;
  try {
    const settings: any = await getSettings();
    const comboDefaults = sanitizeComboRuntimeConfig(settings.comboDefaults);
    const providerOverrides = sanitizeProviderOverrides(settings.providerOverrides);
    return NextResponse.json({
      comboDefaults:
        Object.keys(comboDefaults).length > 0
          ? comboDefaults
          : {
              strategy: "priority",
              maxRetries: 1,
              retryDelayMs: 2000,
              handoffThreshold: 0.85,
              handoffModel: "",
              maxMessagesForSummary: 30,
              maxComboDepth: 3,
              trackMetrics: true,
            },
      providerOverrides,
=======
export async function GET() {
  try {
    const settings: any = await getSettings();
    return NextResponse.json({
      comboDefaults: settings.comboDefaults || {
        strategy: "priority",
        maxRetries: 1,
        retryDelayMs: 2000,
        timeoutMs: 120000,
        healthCheckEnabled: true,
        healthCheckTimeoutMs: 3000,
        handoffThreshold: 0.85,
        handoffModel: "",
        maxMessagesForSummary: 30,
        maxComboDepth: 3,
        trackMetrics: true,
      },
      providerOverrides: settings.providerOverrides || {},
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    });
  } catch (error) {
    console.log("Error fetching combo defaults:", error);
    return NextResponse.json({ error: "Failed to fetch combo defaults" }, { status: 500 });
  }
}

/**
 * PATCH /api/settings/combo-defaults
 * Update combo global defaults and/or provider overrides
 * Body: { comboDefaults?: {...}, providerOverrides?: {...} }
 */
<<<<<<< HEAD
export async function PATCH(request: Request) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;
=======
export async function PATCH(request) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
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
    const validation = validateBody(updateComboDefaultsSchema, rawBody);
    if (isValidationFailure(validation)) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }
    const body = validation.data;

    const updates: Record<string, any> = {};

    if (body.comboDefaults) {
<<<<<<< HEAD
      updates.comboDefaults = sanitizeComboRuntimeConfig(body.comboDefaults);
    }
    if (body.providerOverrides) {
      updates.providerOverrides = sanitizeProviderOverrides(body.providerOverrides);
=======
      updates.comboDefaults = body.comboDefaults;
    }
    if (body.providerOverrides) {
      updates.providerOverrides = body.providerOverrides;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    }

    const settings: any = await updateSettings(updates);
    return NextResponse.json({
<<<<<<< HEAD
      comboDefaults: sanitizeComboRuntimeConfig(settings.comboDefaults),
      providerOverrides: sanitizeProviderOverrides(settings.providerOverrides),
=======
      comboDefaults: settings.comboDefaults || {},
      providerOverrides: settings.providerOverrides || {},
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    });
  } catch (error) {
    console.log("Error updating combo defaults:", error);
    return NextResponse.json({ error: "Failed to update combo defaults" }, { status: 500 });
  }
}
