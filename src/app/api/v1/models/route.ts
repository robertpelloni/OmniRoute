<<<<<<< HEAD
=======
import { CORS_ORIGIN } from "@/shared/utils/cors";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import { getUnifiedModelsResponse } from "./catalog";

/**
 * Handle CORS preflight
 */
export async function OPTIONS() {
  return new Response(null, {
    headers: {
<<<<<<< HEAD
=======
      "Access-Control-Allow-Origin": CORS_ORIGIN,
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
  });
}

/**
 * GET /v1/models - OpenAI compatible models list
 */
export async function GET(request: Request) {
  return getUnifiedModelsResponse(request);
}
