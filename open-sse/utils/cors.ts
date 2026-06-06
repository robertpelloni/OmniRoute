/**
<<<<<<< HEAD
 * Static CORS headers for open-sse handlers.
 *
 * `Access-Control-Allow-Origin` is set by the Next.js middleware
 * (`src/server/cors/origins.ts`). Handlers in this package only need the
 * methods/headers list; the middleware overlays the allowed origin per
 * the central allowlist on the way out.
 */
export const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, x-api-key, anthropic-version, x-omniroute-connection, x-internal-test, accept",
};
=======
 * CORS configuration for open-sse handlers.
 *
 * Reads `CORS_ORIGIN` env var (default: "*") so that all handlers
 * use the same configurable origin. Equivalent to src/shared/utils/cors.ts
 * for the open-sse package boundary.
 */

const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";

export const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": CORS_ORIGIN,
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, x-api-key, anthropic-version",
};

/**
 * Returns just the origin header for merging into existing header objects.
 */
export function getCorsOrigin(): string {
  return CORS_ORIGIN;
}
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
