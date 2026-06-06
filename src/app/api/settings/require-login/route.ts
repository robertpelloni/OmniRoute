import { NextResponse } from "next/server";
import { getSettings, updateSettings } from "@/lib/localDb";
<<<<<<< HEAD
import {
  hasManagementPasswordConfigured,
  hashManagementPassword,
} from "@/lib/auth/managementPassword";
import { isAuthenticated } from "@/shared/utils/apiAuth";
import { getNodeRuntimeSupport } from "@/shared/utils/nodeRuntimeSupport.ts";
import { updateRequireLoginSchema } from "@/shared/validation/schemas";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";

// Node.js compatibility check — reflect the supported secure runtime floors used by CLI/CI.
function getNodeCompatibility() {
  const { nodeVersion, nodeCompatible } = getNodeRuntimeSupport();
  return { nodeVersion, nodeCompatible };
}

function hasConfiguredPassword(settings: Record<string, unknown>) {
  return hasManagementPasswordConfigured(settings);
}

function isBootstrapSecurityWindow(settings: Record<string, unknown>) {
  return settings.setupComplete !== true && !hasConfiguredPassword(settings);
=======
import bcrypt from "bcryptjs";
import { updateRequireLoginSchema } from "@/shared/validation/schemas";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";

// Node.js compatibility check — better-sqlite3 requires Node <24
function getNodeCompatibility() {
  const nodeVersion = process.version;
  const major = parseInt(nodeVersion.replace("v", "").split(".")[0], 10);
  return { nodeVersion, nodeCompatible: major >= 18 && major < 24 };
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
}

export async function GET() {
  const nodeInfo = getNodeCompatibility();
  try {
    const settings = await getSettings();
    const requireLogin = settings.requireLogin !== false;
<<<<<<< HEAD
    const hasPassword = hasManagementPasswordConfigured(settings);
=======
    const hasPassword = !!settings.password || !!process.env.INITIAL_PASSWORD;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    const setupComplete = !!settings.setupComplete;
    return NextResponse.json({ requireLogin, hasPassword, setupComplete, ...nodeInfo });
  } catch (error) {
    console.error("[API] Error fetching require-login settings:", error);
    return NextResponse.json(
      { requireLogin: true, hasPassword: true, setupComplete: true, ...nodeInfo },
      { status: 200 }
    );
  }
}

/**
 * POST /api/settings/require-login — Set password and/or toggle requireLogin.
<<<<<<< HEAD
 * Unauthenticated writes are only allowed during the initial bootstrap window.
 */
export async function POST(request: Request) {
  const settings = await getSettings();
  if (!isBootstrapSecurityWindow(settings) && !(await isAuthenticated(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

=======
 * Used by the onboarding wizard security step.
 */
export async function POST(request: Request) {
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
    const validation = validateBody(updateRequireLoginSchema, rawBody);
    if (isValidationFailure(validation)) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }
    const body = validation.data;
    const { requireLogin, password } = body;

    const updates: Record<string, any> = {};

    if (typeof requireLogin === "boolean") {
      updates.requireLogin = requireLogin;
    }

    if (password) {
<<<<<<< HEAD
      const hashedPassword = await hashManagementPassword(password);
=======
      const hashedPassword = await bcrypt.hash(password, 12);
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      updates.password = hashedPassword;
    }

    await updateSettings(updates);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[API] Error updating require-login settings:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to update settings" },
      { status: 500 }
    );
  }
}
