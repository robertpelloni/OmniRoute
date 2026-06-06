<<<<<<< HEAD
=======
import { CORS_ORIGIN } from "@/shared/utils/cors";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import { handleChat } from "@/sse/handlers/chat";
import { initTranslators } from "@omniroute/open-sse/translator/index.ts";

let initialized = false;

async function ensureInitialized() {
  if (!initialized) {
    await initTranslators();
    initialized = true;
    console.log("[SSE] Translators initialized for /v1/responses/*");
  }
}

export async function OPTIONS() {
  return new Response(null, {
    headers: {
<<<<<<< HEAD
=======
      "Access-Control-Allow-Origin": CORS_ORIGIN,
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
  });
}

/**
 * POST /v1/responses/:path* - OpenAI Responses subpaths
 * Reuses the shared chat handler so native Codex passthrough can keep
 * arbitrary Responses suffixes all the way to the upstream provider.
 */
export async function POST(request) {
  await ensureInitialized();
  return await handleChat(request);
}
