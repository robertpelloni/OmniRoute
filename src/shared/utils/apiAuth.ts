/**
<<<<<<< HEAD
 * API Authentication Guard — Shared utility for protecting API routes.
 *
 * Management APIs require a dashboard session, while client-facing APIs may still
 * accept Bearer API keys. Route scope is inferred from the request pathname.
=======
 * API Authentication Guard — Shared utility for protecting management API routes.
 *
 * Provides dual-mode auth: JWT cookie (dashboard session) or Bearer API key.
 * Used by the middleware (proxy.ts) to guard /api/* management routes.
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
 *
 * @module shared/utils/apiAuth
 */

import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { getSettings } from "@/lib/localDb";
<<<<<<< HEAD
import { isPublicApiRoute } from "@/shared/constants/publicApiRoutes";

type RequestLike = {
  cookies?: {
    get?: (name: string) => { value?: string } | undefined;
  };
  headers?: Headers;
  method?: string;
  nextUrl?: { hostname?: string | null; pathname?: string | null } | null;
  url?: string;
};

const LOOPBACK_HOSTNAMES = new Set(["localhost", "::1"]);

function hasConfiguredPassword(settings: Record<string, unknown>): boolean {
  return typeof settings.password === "string" && settings.password.length > 0;
}

function getRequestPathname(request: RequestLike | Request | null | undefined): string | null {
  const nextPathname =
    request &&
    typeof request === "object" &&
    "nextUrl" in request &&
    request.nextUrl &&
    typeof request.nextUrl.pathname === "string"
      ? request.nextUrl.pathname
      : null;

  if (nextPathname) return nextPathname;

  const rawUrl =
    request && typeof request === "object" && "url" in request && typeof request.url === "string"
      ? request.url
      : "";

  if (!rawUrl) return null;

  try {
    return new URL(rawUrl, "http://localhost").pathname;
  } catch {
    return null;
  }
}

function getRequestMethod(request: RequestLike | Request | null | undefined): string {
  if (
    request &&
    typeof request === "object" &&
    "method" in request &&
    typeof request.method === "string"
  ) {
    return request.method.toUpperCase();
  }
  return "GET";
}

function getRequestHostname(request: RequestLike | Request | null | undefined): string | null {
  const nextHostname =
    request &&
    typeof request === "object" &&
    "nextUrl" in request &&
    request.nextUrl &&
    typeof request.nextUrl.hostname === "string"
      ? request.nextUrl.hostname
      : null;

  if (nextHostname) return nextHostname;

  const rawUrl =
    request && typeof request === "object" && "url" in request && typeof request.url === "string"
      ? request.url
      : "";

  if (rawUrl) {
    try {
      return new URL(rawUrl, "http://localhost").hostname;
    } catch {
      // Fall through to Host header parsing.
    }
  }

  const requestHeaders =
    request && typeof request === "object" && "headers" in request ? request.headers : undefined;
  const host = requestHeaders?.get("host") || requestHeaders?.get("Host") || null;
  if (!host) return null;

  try {
    return new URL(`http://${host}`).hostname;
  } catch {
    return host.split(":")[0] || null;
  }
}

export function isLoopbackRequest(request: RequestLike | Request | null | undefined): boolean {
  const hostname = getRequestHostname(request);
  if (!hostname) return false;

  const normalized = hostname
    .trim()
    .toLowerCase()
    .replace(/^\[(.*)\]$/, "$1");
  if (LOOPBACK_HOSTNAMES.has(normalized)) return true;
  if (/^127(?:\.\d{1,3}){3}$/.test(normalized)) return true;
  return false;
}

function getCookieValueFromHeader(headers: Headers | undefined, name: string): string | null {
  const cookieHeader = headers?.get("cookie") || headers?.get("Cookie");
  if (!cookieHeader) return null;

  for (const segment of cookieHeader.split(";")) {
    const [rawKey, ...rawValue] = segment.split("=");
    if (!rawKey || rawValue.length === 0) continue;
    if (rawKey.trim() !== name) continue;
    return rawValue.join("=").trim();
  }

  return null;
}

function getBearerToken(request: RequestLike | Request | null | undefined): string | null {
  const headers =
    request && typeof request === "object" && "headers" in request ? request.headers : undefined;
  const authHeader = headers?.get("authorization") || headers?.get("Authorization");
  if (typeof authHeader !== "string") return null;

  const trimmedHeader = authHeader.trim();
  if (!trimmedHeader.toLowerCase().startsWith("bearer ")) return null;
  return trimmedHeader.slice(7).trim() || null;
}

async function validateBearerApiKey(apiKey: string | null): Promise<boolean> {
  if (!apiKey) return false;

  try {
    const { validateApiKey } = await import("@/lib/db/apiKeys");
    return await validateApiKey(apiKey);
  } catch {
    return false;
  }
}

export function isManagementApiRequest(request: RequestLike | Request): boolean {
  const pathname = getRequestPathname(request);
  if (!pathname?.startsWith("/api/")) return false;
  if (pathname.startsWith("/api/v1/")) return false;
  return !isPublicApiRoute(pathname, getRequestMethod(request));
}

export async function isDashboardSessionAuthenticated(
  request?: RequestLike | Request | null
): Promise<boolean> {
  if (!process.env.JWT_SECRET) return false;

  let token =
    request &&
    typeof request === "object" &&
    "cookies" in request &&
    request.cookies?.get?.("auth_token")?.value
      ? request.cookies.get("auth_token")?.value || null
      : null;

  const requestHeaders =
    request && typeof request === "object" && "headers" in request ? request.headers : undefined;

  if (!token) {
    token = getCookieValueFromHeader(requestHeaders, "auth_token");
  }

  if (!token) {
    try {
      const cookieStore = await cookies();
      token = cookieStore.get("auth_token")?.value || null;
    } catch {
      token = null;
    }
  }

  if (!token) return false;

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}
=======

// ──────────────── Public Routes (No Auth Required) ────────────────

/**
 * Routes that are ALWAYS accessible without authentication.
 * Pattern matching: startsWith check against the pathname.
 */
const PUBLIC_API_ROUTES = [
  // Auth flow — must be accessible to unauthenticated users
  "/api/auth/login",
  "/api/auth/logout",
  "/api/auth/status",

  // Settings check — used by login page / onboarding
  "/api/settings/require-login",

  // Init — first-run setup
  "/api/init",

  // Health monitoring — probes must work without auth
  "/api/monitoring/health",

  // LLM proxy routes — use their own API key auth in the SSE layer
  "/api/v1/",

  // Cloud routes — use Bearer API key auth internally
  "/api/cloud/",

  // OAuth callback routes — provider redirects back here
  "/api/oauth/",
];
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

// ──────────────── Auth Verification ────────────────

/**
<<<<<<< HEAD
 * Check if a request is authenticated.
=======
 * Check if a request is authenticated via JWT cookie or Bearer API key.
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
 *
 * @returns null if authenticated, error message string if not
 */
export async function verifyAuth(request: any): Promise<string | null> {
<<<<<<< HEAD
  if (await isDashboardSessionAuthenticated(request)) {
    return null;
  }

  const bearerToken = getBearerToken(request);
  if (isManagementApiRequest(request)) {
    return bearerToken ? "Invalid management token" : "Authentication required";
  }

  if (await validateBearerApiKey(bearerToken)) {
    return null;
=======
  // 1. Check JWT cookie (dashboard session)
  const token = request.cookies.get("auth_token")?.value;
  if (token && process.env.JWT_SECRET) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      await jwtVerify(token, secret);
      return null; // ✔ Authenticated via cookie
    } catch {
      // Invalid/expired token — fall through to API key check
    }
  }

  // 2. Check Bearer API key
  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    const apiKey = authHeader.slice(7);
    try {
      // Dynamic import to avoid circular dependencies during build
      const { validateApiKey } = await import("@/lib/db/apiKeys");
      const isValid = await validateApiKey(apiKey);
      if (isValid) return null; // ✔ Authenticated via API key
    } catch {
      // DB not ready or import error — deny access
    }
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  }

  return "Authentication required";
}

/**
 * Check if a request is authenticated — boolean convenience wrapper for route handlers.
 *
 * Uses `cookies()` from next/headers (App Router compatible) and Bearer API key.
 * Returns true if authenticated, false otherwise.
 *
 * Unlike `verifyAuth`, this does NOT check `isAuthRequired()` — callers that
 * need to conditionally skip auth should check that separately.
 */
export async function isAuthenticated(request: Request): Promise<boolean> {
  // If settings say login/auth is disabled, treat all requests as authenticated
<<<<<<< HEAD
  if (!(await isAuthRequired(request))) {
    return true;
  }

  if (await isDashboardSessionAuthenticated(request)) {
    return true;
  }

  if (isManagementApiRequest(request)) {
    return false;
  }

  return validateBearerApiKey(getBearerToken(request));
=======
  if (!(await isAuthRequired())) {
    return true;
  }
  // 1. Check API key (for external clients)
  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    const apiKey = authHeader.slice(7);
    try {
      const { validateApiKey } = await import("@/lib/db/apiKeys");
      if (await validateApiKey(apiKey)) return true;
    } catch {
      // DB not ready or import error
    }
  }

  // 2. Check JWT cookie (for dashboard session)
  if (process.env.JWT_SECRET) {
    try {
      const cookieStore = await cookies();
      const token = cookieStore.get("auth_token")?.value;
      if (token) {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        await jwtVerify(token, secret);
        return true;
      }
    } catch {
      // Invalid/expired token or cookies not available
    }
  }

  return false;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
}

/**
 * Check if a route is in the public (no-auth) allowlist.
 */
<<<<<<< HEAD
export function isPublicRoute(pathname: string, method = "GET"): boolean {
  return isPublicApiRoute(pathname, method);
=======
export function isPublicRoute(pathname: string): boolean {
  return PUBLIC_API_ROUTES.some((route) => pathname.startsWith(route));
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
}

/**
 * Check if authentication is required based on settings.
<<<<<<< HEAD
 * If requireLogin is explicitly false, auth is skipped. Fresh installs without
 * a password keep their unauthenticated bootstrap path only on loopback
 * requests; exposed network requests must configure INITIAL_PASSWORD or log in.
 */
export async function isAuthRequired(
  request?: RequestLike | Request | null | undefined
): Promise<boolean> {
  try {
    const settings = await getSettings();
    if (settings.requireLogin === false) return false;

    if (!hasConfiguredPassword(settings) && !process.env.INITIAL_PASSWORD) {
      if (!request) return false;

      const pathname = getRequestPathname(request);
      if (pathname && isPublicApiRoute(pathname, getRequestMethod(request))) {
        return false;
      }

      return settings.setupComplete === true || !isLoopbackRequest(request);
    }

=======
 * If requireLogin is false AND no password is set, auth is skipped.
 */
export async function isAuthRequired(): Promise<boolean> {
  try {
    const settings = await getSettings();
    if (settings.requireLogin === false) return false;
    // Allow access with no password set — there's nothing to authenticate against.
    // This covers two cases:
    //   1. Fresh installs (setupComplete=false) — first-run, no password yet
    //   2. setupComplete=true but password was skipped during onboarding (#256)
    //      The user needs unauthenticated access to /dashboard/settings to set a password.
    // Note: this is safe because Bearer API key auth is still checked in verifyAuth().
    // The security concern from #151 (password row lost after being set) is handled by the
    // hasPassword flag — if a password WAS set and then somehow lost, the user can use the
    // reset-password CLI tool (bin/reset-password.mjs).
    if (!settings.password && !process.env.INITIAL_PASSWORD) return false;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    return true;
  } catch (error: any) {
    // On error, require auth (secure by default)
    // Log the error so failures (e.g., SQLITE_BUSY) aren't silent 401s
    console.error(
      "[API_AUTH_GUARD] isAuthRequired failed, defaulting to true:",
      error?.message || error
    );
    return true;
  }
}
