/**
 * Request ID — Correlation ID Middleware (T-23)
 *
 * Generates and propagates `x-request-id` headers for
 * request tracing across the proxy pipeline.
 *
 * Uses AsyncLocalStorage to make request ID available
 * anywhere in the call stack without explicit passing.
 *
 * @module shared/utils/requestId
 */

import { AsyncLocalStorage } from "node:async_hooks";
import { randomUUID } from "crypto";

<<<<<<< HEAD
type HeaderReader = {
  get?: (name: string) => string | null | undefined;
};

type RequestLike = {
  headers?: HeaderReader | null;
} | null;

const requestIdStore = new AsyncLocalStorage<string>();

function getHeaderValue(request: RequestLike, name: string): string | null {
  const value = request?.headers?.get?.(name);
  return typeof value === "string" && value.length > 0 ? value : null;
}
=======
const requestIdStore = new AsyncLocalStorage();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

/**
 * Get the current request ID from the async context.
 * Returns null if not inside a request context.
 *
 * @returns {string | null}
 */
export function getRequestId() {
  return requestIdStore.getStore() || null;
}

/**
 * Run a handler with a request ID in the async context.
 * If the incoming request has an `x-request-id` header, it is reused;
 * otherwise a new UUID v4 is generated.
 *
 * @template T
 * @param {Request} request - Incoming request
 * @param {() => T | Promise<T>} handler - Handler to execute
 * @returns {Promise<T>}
 */
<<<<<<< HEAD
export async function withRequestId<T>(
  request: RequestLike,
  handler: () => T | Promise<T>
): Promise<T> {
  const existingId = getHeaderValue(request, "x-request-id");
=======
export async function withRequestId(request, handler) {
  const existingId = request?.headers?.get?.("x-request-id");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  const requestId = existingId || randomUUID();
  return requestIdStore.run(requestId, handler);
}

/**
 * Create headers object with the current request ID.
 * Useful for outgoing provider requests.
 *
 * @param {Record<string, string>} [headers={}] - Existing headers
 * @returns {Record<string, string>} Headers with x-request-id added
 */
<<<<<<< HEAD
export function addRequestIdHeader(headers: Record<string, string> = {}): Record<string, string> {
=======
export function addRequestIdHeader(headers = {}) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  const requestId = getRequestId();
  if (requestId) {
    return { ...headers, "x-request-id": requestId };
  }
  return headers;
}

/**
 * Next.js middleware-compatible wrapper.
 * Attaches `x-request-id` to response headers.
 *
 * @param {Request} request
 * @param {Response} response
 * @returns {Response} Response with request ID header
 */
<<<<<<< HEAD
export function attachRequestIdToResponse(request: RequestLike, response: Response): Response {
  const requestId = getRequestId() || getHeaderValue(request, "x-request-id") || randomUUID();
=======
export function attachRequestIdToResponse(request, response) {
  const requestId = getRequestId() || request?.headers?.get?.("x-request-id") || randomUUID();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

  const headers = new Headers(response.headers);
  headers.set("x-request-id", requestId);

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

/**
 * Generate a new request ID (UUID v4).
 * @returns {string}
 */
export function generateRequestId() {
  return randomUUID();
}
