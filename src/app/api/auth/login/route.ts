import { NextResponse } from "next/server";
<<<<<<< HEAD
import { getAuditRequestContext, logAuditEvent } from "@/lib/compliance/index";
import { getSettings } from "@/lib/localDb";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import {
  ensurePersistentManagementPasswordHash,
  getStoredManagementPassword,
  verifyManagementPassword,
} from "@/lib/auth/managementPassword";
import { loginSchema } from "@/shared/validation/schemas";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";
import { checkLoginGuard, clearLoginAttempts, recordLoginFailure } from "@/server/auth/loginGuard";
=======
import { getSettings } from "@/lib/localDb";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { loginSchema } from "@/shared/validation/schemas";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

// SECURITY: No hardcoded fallback — JWT_SECRET must be configured.
if (!process.env.JWT_SECRET) {
  console.error("[SECURITY] FATAL: JWT_SECRET is not set. Login authentication is disabled.");
}
<<<<<<< HEAD

function getJwtSecret(): Uint8Array {
  return new TextEncoder().encode(process.env.JWT_SECRET || "");
}

// Test seam for cookie store injection without affecting runtime behavior.
export const authRouteInternals = {
  getCookieStore: cookies,
};

export async function POST(request) {
  const auditContext = getAuditRequestContext(request);

  try {
    // Fail-fast if JWT_SECRET is not configured
    if (!process.env.JWT_SECRET) {
      logAuditEvent({
        action: "auth.login.misconfigured",
        actor: "system",
        target: "dashboard-auth",
        resourceType: "auth_session",
        status: "failed",
        ipAddress: auditContext.ipAddress || undefined,
        requestId: auditContext.requestId,
        metadata: { reason: "missing_jwt_secret" },
      });
=======
const SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "");

export async function POST(request) {
  try {
    // Fail-fast if JWT_SECRET is not configured
    if (!process.env.JWT_SECRET) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      return NextResponse.json(
        { error: "Server misconfigured: JWT_SECRET not set. Contact administrator." },
        { status: 500 }
      );
    }

    const rawBody = await request.json();

    // Zod validation
    const validation = validateBody(loginSchema, rawBody);
    if (isValidationFailure(validation)) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }
    const password = typeof validation.data.password === "string" ? validation.data.password : "";
    if (!password) {
      return NextResponse.json({ error: "Invalid password payload" }, { status: 400 });
    }
    const settings = await getSettings();
<<<<<<< HEAD
    const bruteForceEnabled = settings.bruteForceProtection !== false;
    const clientIp = auditContext.ipAddress || null;

    const guardCheck = checkLoginGuard(clientIp, { enabled: bruteForceEnabled });
    if (!guardCheck.allowed) {
      logAuditEvent({
        action: "auth.login.locked",
        actor: "anonymous",
        target: "dashboard-auth",
        resourceType: "auth_session",
        status: "failed",
        ipAddress: clientIp || undefined,
        requestId: auditContext.requestId,
        metadata: { retryAfterSeconds: guardCheck.retryAfterSeconds || 0 },
      });
      return NextResponse.json(
        { error: "Too many failed attempts. Try again later." },
        {
          status: 429,
          headers: guardCheck.retryAfterSeconds
            ? { "Retry-After": String(guardCheck.retryAfterSeconds) }
            : {},
        }
      );
    }

    const passwordState = await ensurePersistentManagementPasswordHash({
      settings,
      source: "auth.login",
    });
    const storedHash = getStoredManagementPassword(passwordState.settings);

    if (!storedHash) {
      logAuditEvent({
        action: "auth.login.setup_required",
        actor: "anonymous",
        target: "dashboard-auth",
        resourceType: "auth_session",
        status: "failed",
        ipAddress: auditContext.ipAddress || undefined,
        requestId: auditContext.requestId,
        metadata: { reason: "missing_persisted_password" },
      });
      return NextResponse.json(
        { error: "No password configured. Complete onboarding first.", needsSetup: true },
        { status: 403 }
      );
    }

    const isValid = await verifyManagementPassword(password, storedHash);

=======

    const storedHash = typeof settings.password === "string" ? settings.password : "";

    let isValid = false;
    if (storedHash) {
      isValid = await bcrypt.compare(password, storedHash);
    } else {
      // SECURITY: No default password — must be set via env or onboarding
      if (!process.env.INITIAL_PASSWORD) {
        return NextResponse.json(
          { error: "No password configured. Complete onboarding first.", needsSetup: true },
          { status: 403 }
        );
      }
      const initialPassword = process.env.INITIAL_PASSWORD;
      isValid = password === initialPassword;
    }

>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    if (isValid) {
      const forceSecureCookie = process.env.AUTH_COOKIE_SECURE === "true";
      const forwardedProtoHeader = request.headers.get("x-forwarded-proto") || "";
      const forwardedProto = forwardedProtoHeader.split(",")[0].trim().toLowerCase();
      const isHttpsRequest = forwardedProto === "https" || request.nextUrl?.protocol === "https:";
      const useSecureCookie = forceSecureCookie || isHttpsRequest;

      const token = await new SignJWT({ authenticated: true })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("30d")
<<<<<<< HEAD
        .sign(getJwtSecret());

      const cookieStore = await authRouteInternals.getCookieStore();
=======
        .sign(SECRET);

      const cookieStore = await cookies();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      cookieStore.set("auth_token", token, {
        httpOnly: true,
        secure: useSecureCookie,
        sameSite: "lax",
        path: "/",
      });

<<<<<<< HEAD
      logAuditEvent({
        action: "auth.login.success",
        actor: "admin",
        target: "dashboard-auth",
        resourceType: "auth_session",
        status: "success",
        ipAddress: auditContext.ipAddress || undefined,
        requestId: auditContext.requestId,
        metadata: {
          hasStoredPassword: Boolean(storedHash),
          passwordMigrated: passwordState.migrated,
          secureCookie: useSecureCookie,
        },
      });

      clearLoginAttempts(clientIp);
      return NextResponse.json({ success: true });
    }

    const failureDecision = recordLoginFailure(clientIp, { enabled: bruteForceEnabled });

    logAuditEvent({
      action: "auth.login.failed",
      actor: "anonymous",
      target: "dashboard-auth",
      resourceType: "auth_session",
      status: "failed",
      ipAddress: auditContext.ipAddress || undefined,
      requestId: auditContext.requestId,
      metadata: { reason: "invalid_password", lockedOut: failureDecision.allowed === false },
    });

    if (!failureDecision.allowed) {
      return NextResponse.json(
        { error: "Too many failed attempts. Try again later." },
        {
          status: 429,
          headers: failureDecision.retryAfterSeconds
            ? { "Retry-After": String(failureDecision.retryAfterSeconds) }
            : {},
        }
      );
    }

    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  } catch (error) {
    console.error("[AUTH] Login failed:", error);
    logAuditEvent({
      action: "auth.login.error",
      actor: "system",
      target: "dashboard-auth",
      resourceType: "auth_session",
      status: "failed",
      ipAddress: auditContext.ipAddress || undefined,
      requestId: auditContext.requestId,
      metadata: {
        message: error instanceof Error ? error.message : "unknown_error",
      },
    });
=======
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  } catch (error) {
    console.error("[AUTH] Login failed:", error);
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
