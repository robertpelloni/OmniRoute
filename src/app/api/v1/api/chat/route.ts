<<<<<<< HEAD
=======
import { CORS_ORIGIN } from "@/shared/utils/cors";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import { handleChat } from "@/sse/handlers/chat";
import { initTranslators } from "@omniroute/open-sse/translator/index.ts";
import { transformToOllama } from "@omniroute/open-sse/utils/ollamaTransform.ts";

let initialized = false;

async function ensureInitialized() {
  if (!initialized) {
    await initTranslators();
    initialized = true;
    console.log("[SSE] Translators initialized");
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

export async function POST(request) {
  await ensureInitialized();

  const clonedReq = request.clone();
  let modelName = "llama3.2";
  try {
    const body = await clonedReq.json();
    modelName = body.model || "llama3.2";
  } catch {}

  const response = await handleChat(request);
  return transformToOllama(response, modelName);
}
