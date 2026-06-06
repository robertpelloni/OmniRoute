<<<<<<< HEAD
import { CORS_HEADERS, handleCorsOptions } from "@/shared/utils/cors";
=======
import { CORS_ORIGIN, CORS_HEADERS } from "@/shared/utils/cors";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import { callCloudWithMachineId } from "@/shared/utils/cloud";
import { handleChat } from "@/sse/handlers/chat";
import { initTranslators } from "@omniroute/open-sse/translator/index.ts";
import { createInjectionGuard } from "@/middleware/promptInjectionGuard";

let initPromise = null;

// Singleton injection guard instance
const injectionGuard = createInjectionGuard();

/**
 * Initialize translators once (Promise-based singleton — no race condition)
 */
function ensureInitialized() {
  if (!initPromise) {
    initPromise = Promise.resolve(initTranslators()).then(() => {
      console.log("[SSE] Translators initialized");
    });
  }
  return initPromise;
}

/**
 * Handle CORS preflight
 */
export async function OPTIONS() {
<<<<<<< HEAD
  return handleCorsOptions();
=======
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": CORS_ORIGIN,
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
  });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
}

export async function POST(request) {
  await ensureInitialized();

<<<<<<< HEAD
  // One-line marker for diagnosing 413 / Server-Action interceptions.
  // Logs only when Content-Length is present so debug noise stays low for
  // typical chat payloads. Toggle off via OMNIROUTE_LOG_REQUEST_SHAPE=0.
  if (process.env.OMNIROUTE_LOG_REQUEST_SHAPE !== "0") {
    const ct = request.headers.get("content-type") ?? "";
    const cl = request.headers.get("content-length");
    if (cl && Number(cl) > 256 * 1024) {
      console.error(`[CHAT-ROUTE] large body content-type="${ct}" content-length=${cl}`);
    }
  }

=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  // Prompt injection guard — inspect body before forwarding
  try {
    const cloned = request.clone();
    const body = await cloned.json().catch(() => null);
    if (body) {
      const { blocked, result } = injectionGuard(body);
      if (blocked) {
        return new Response(
          JSON.stringify({
            error: {
              message: "Request blocked: potential prompt injection detected",
              type: "injection_detected",
              code: "SECURITY_001",
              detections: result.detections.length,
            },
          }),
          { status: 400, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
        );
      }
    }
  } catch (error) {
    console.error("[SECURITY] Prompt injection guard failed:", error);
<<<<<<< HEAD
=======
    return new Response(
      JSON.stringify({
        error: {
          message: "Security validation temporarily unavailable",
          type: "security_guard_unavailable",
          code: "SECURITY_002",
        },
      }),
      { status: 503, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  }

  return await handleChat(request);
}
