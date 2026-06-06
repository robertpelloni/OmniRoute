/**
<<<<<<< HEAD
 * Static CORS headers for route handlers.
 *
 * `Access-Control-Allow-Origin` is intentionally NOT set here. The middleware
 * (`src/middleware.ts` → `applyCorsHeaders`) is the single source of truth for
 * which origin to echo, based on the central allowlist in
 * `src/server/cors/origins.ts`. Route handlers may keep spreading
 * `CORS_HEADERS` for the standard methods/allowed-headers; the middleware
 * overlays the proper origin on the way out.
 */
export const CORS_HEADERS = {
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, x-api-key, anthropic-version, x-omniroute-connection, x-internal-test, accept",
} as const;

/**
 * Preflight responder kept for routes that still ship their own OPTIONS handler.
 * Returning 204 with `CORS_HEADERS` is enough; the middleware will add the
 * allowed origin and `Vary: Origin` before the response leaves the server.
 */
export function handleCorsOptions(): Response {
=======
 * Shared CORS configuration for all API routes.
 *
 * Centralizes the Access-Control-Allow-Origin header so it can be
 * configured via the CORS_ORIGIN environment variable instead of
 * being hardcoded as "*" in every route handler.
 *
 * Usage:
 *   import { CORS_HEADERS, handleCorsOptions } from "@/shared/utils/cors";
 *
 *   // In route responses:
 *   return new Response(body, { headers: { ...CORS_HEADERS, "Content-Type": "application/json" } });
 *
 *   // For OPTIONS preflight:
 *   export function OPTIONS() { return handleCorsOptions(); }
 */

export const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";

/**
 * Standard CORS headers to spread into any Response.
 * @type {Record<string, string>}
 */
export const CORS_HEADERS = {
  "Access-Control-Allow-Origin": CORS_ORIGIN,
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, x-api-key, anthropic-version",
};

/**
 * Handle CORS preflight (OPTIONS) request.
 * @returns {Response} 204 No Content with CORS headers
 */
export function handleCorsOptions() {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}
