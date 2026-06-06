import { NextResponse } from "next/server";
import { getSettings, updateSettings } from "@/lib/localDb";
<<<<<<< HEAD
import { getRuntimePorts } from "@/lib/runtime/ports";
import { updateSettingsSchema } from "@/shared/validation/settingsSchemas";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";

=======
import { clearHealthCheckLogCache } from "@/lib/tokenHealthCheck";
import bcrypt from "bcryptjs";
import { timingSafeEqual } from "crypto";
import { getRuntimePorts } from "@/lib/runtime/ports";
import { updateSettingsSchema } from "@/shared/validation/settingsSchemas";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";
import { setCliCompatProviders } from "../../../../open-sse/config/cliFingerprints";
import { getConsistentMachineId } from "@/shared/utils/machineId";
import { validateProxyUrl, upsertUpstreamProxyConfig } from "@/lib/db/upstreamProxy";

export async function GET() {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  try {
    const settings = await getSettings();
    const { password, ...safeSettings } = settings;

<<<<<<< HEAD
=======
    // Sync CLI fingerprint providers to runtime cache on load
    if (settings.cliCompatProviders) {
      setCliCompatProviders(settings.cliCompatProviders as string[]);
    }

>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    const runtimePorts = getRuntimePorts();
    const cloudUrl = process.env.CLOUD_URL || process.env.NEXT_PUBLIC_CLOUD_URL || null;
    const machineId = await getConsistentMachineId();

    return NextResponse.json({
      ...safeSettings,
<<<<<<< HEAD
=======
      hasPassword: !!password || !!process.env.INITIAL_PASSWORD,
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      runtimePorts,
      apiPort: runtimePorts.apiPort,
      dashboardPort: runtimePorts.dashboardPort,
      cloudConfigured: Boolean(cloudUrl),
      cloudUrl,
      machineId,
    });
  } catch (error) {
    console.log("Error getting settings:", error);
    return NextResponse.json({ error: "Failed to load settings" }, { status: 500 });
  }
}

<<<<<<< HEAD
export async function PATCH(request: Request) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

  try {
    const rawBody = await request.json();

=======
export async function PATCH(request) {
  try {
    const rawBody = await request.json();

    // Capture old settings BEFORE update for comparison (needed for models.dev sync toggle)
    const oldSettings =
      "modelsDevSyncEnabled" in rawBody || "modelsDevSyncInterval" in rawBody
        ? await getSettings()
        : null;

>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    // Zod validation
    const validation = validateBody(updateSettingsSchema, rawBody);
    if (isValidationFailure(validation)) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }
    const body: typeof validation.data & { password?: string } = { ...validation.data };

    // If updating password, hash it
    if (body.newPassword) {
      const settings = await getSettings();
<<<<<<< HEAD
      const passwordState = await ensurePersistentManagementPasswordHash({
        settings,
        source: "settings.password_change",
      });
      const currentHash = getStoredManagementPassword(passwordState.settings);

=======
      const currentHash = typeof settings.password === "string" ? settings.password : "";

      // Verify current password if it exists
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      if (currentHash) {
        if (!body.currentPassword) {
          return NextResponse.json({ error: "Current password required" }, { status: 400 });
        }
<<<<<<< HEAD
        const isValid = await verifyManagementPassword(body.currentPassword, currentHash);
        if (!isValid) {
          return NextResponse.json({ error: "Invalid current password" }, { status: 401 });
        }
      }

      body.password = await hashManagementPassword(body.newPassword);
=======
        const isValid = await bcrypt.compare(body.currentPassword, currentHash);
        if (!isValid) {
          return NextResponse.json({ error: "Invalid current password" }, { status: 401 });
        }
      } else {
        // First-time password set (no DB hash yet).
        const LEGACY_DEFAULT_PASSWORD = "123456";
        const initialPassword = process.env.INITIAL_PASSWORD;
        const currentPassword = body.currentPassword || "";

        if (initialPassword) {
          // If deploy is configured with INITIAL_PASSWORD, require explicit match.
          if (!currentPassword) {
            return NextResponse.json({ error: "Current password required" }, { status: 400 });
          }

          const providedBuffer = Buffer.from(currentPassword, "utf8");
          const expectedBuffer = Buffer.from(initialPassword, "utf8");
          const isValidInitialPassword =
            providedBuffer.length === expectedBuffer.length &&
            timingSafeEqual(providedBuffer, expectedBuffer);

          if (!isValidInitialPassword) {
            return NextResponse.json({ error: "Invalid current password" }, { status: 401 });
          }
        } else {
          // Legacy compatibility: instances without INITIAL_PASSWORD may still use old default.
          const allowedWithoutHash = ["", LEGACY_DEFAULT_PASSWORD];
          if (!allowedWithoutHash.includes(currentPassword)) {
            return NextResponse.json({ error: "Invalid current password" }, { status: 401 });
          }
        }
      }

      const salt = await bcrypt.genSalt(10);
      body.password = await bcrypt.hash(body.newPassword, salt);
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      delete body.newPassword;
      delete body.currentPassword;
    }

    const settings = await updateSettings(body);

    // Sync CLIProxyAPI settings to upstream_proxy_config table
    const cpaUrl = rawBody.cliproxyapi_url as string | undefined;
    const cpaFallback = rawBody.cliproxyapi_fallback_enabled as boolean | undefined;
    if (cpaUrl && typeof cpaUrl === "string") {
      const urlValidation = validateProxyUrl(cpaUrl);
      if (urlValidation.valid === false) {
        return NextResponse.json(
          { error: `Invalid CLIProxyAPI URL: ${urlValidation.error}` },
          { status: 400 }
        );
      }
    }
<<<<<<< HEAD
=======
    // Sync usage token buffer to runtime cache
    if ("usageTokenBuffer" in body) {
      const { invalidateBufferTokensCache } =
        await import("@omniroute/open-sse/utils/usageTracking.ts");
      invalidateBufferTokensCache();
    }
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

    if (cpaFallback !== undefined || cpaUrl !== undefined) {
      const enabled =
        cpaFallback ?? (settings as Record<string, unknown>).cliproxyapi_fallback_enabled;
      const mode = enabled ? "fallback" : "native";
      await upsertUpstreamProxyConfig({
        providerId: "cliproxyapi",
        mode,
        enabled: !!enabled,
      });
    }

<<<<<<< HEAD
    // Sync cache control settings to runtime cache
    if ("alwaysPreserveClientCache" in body) {
      const { invalidateCacheControlSettingsCache } = await import("@/lib/cacheControlSettings");
      invalidateCacheControlSettingsCache();
=======
    // Clear health check log cache if that setting was updated
    if ("hideHealthCheckLogs" in body) {
      clearHealthCheckLogCache();
    }

    // Sync CLI fingerprint providers to runtime cache
    if ("cliCompatProviders" in body) {
      setCliCompatProviders(body.cliCompatProviders || []);
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    }

    // Sync cache control settings to runtime cache
    if ("alwaysPreserveClientCache" in body) {
      const { invalidateCacheControlSettingsCache } = await import("@/lib/cacheControlSettings");
      invalidateCacheControlSettingsCache();
    }

<<<<<<< HEAD
=======
    // Sync models.dev sync settings (compare old vs new state)
    if (oldSettings && ("modelsDevSyncEnabled" in body || "modelsDevSyncInterval" in body)) {
      const { stopPeriodicSync, startPeriodicSync } = await import("@/lib/modelsDevSync");
      const wasEnabled = (oldSettings as Record<string, unknown>).modelsDevSyncEnabled === true;
      const isEnabled = settings.modelsDevSyncEnabled === true;
      const oldInterval = (oldSettings as Record<string, unknown>).modelsDevSyncInterval as
        | number
        | undefined;
      const newInterval = settings.modelsDevSyncInterval as number | undefined;

      if (wasEnabled && !isEnabled) {
        stopPeriodicSync();
      } else if (!wasEnabled && isEnabled) {
        startPeriodicSync(newInterval);
      } else if (isEnabled && oldInterval !== newInterval) {
        stopPeriodicSync();
        startPeriodicSync(newInterval);
      }
    }

>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    const { password, ...safeSettings } = settings;
    return NextResponse.json(safeSettings);
  } catch (error) {
    console.log("Error updating settings:", error);
    return NextResponse.json({ error: "Failed to update settings" }, { status: 500 });
  }
}
<<<<<<< HEAD

export async function PUT(request: Request) {
  return PATCH(request);
}
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
