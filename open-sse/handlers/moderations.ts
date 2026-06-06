<<<<<<< HEAD
import { CORS_HEADERS } from "../utils/cors.ts";
=======
import { getCorsOrigin } from "../utils/cors.ts";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
/**
 * Moderation Handler
 *
 * Handles POST /v1/moderations (OpenAI Moderations API format).
 */

import { getModerationProvider, parseModerationModel } from "../config/moderationRegistry.ts";
import { errorResponse } from "../utils/error.ts";

/**
 * Handle moderation request
 *
 * @param {Object} options
 * @param {Object} options.body - JSON body { model, input }
 * @param {Object} options.credentials - Provider credentials { apiKey }
 * @returns {Response}
 */
/** @returns {Promise<unknown>} */
export async function handleModeration({ body, credentials }) {
  if (!body.input) {
    return errorResponse(400, "input is required");
  }

  // Default to latest moderation model
  const model = body.model || "omni-moderation-latest";
  const { provider: providerId, model: modelId } = parseModerationModel(model);
  const providerConfig = providerId ? getModerationProvider(providerId) : null;

  if (!providerConfig) {
    return errorResponse(
      400,
      `No moderation provider found for model "${model}". Available: openai`
    );
  }

  const token = credentials?.apiKey || credentials?.accessToken;
  if (!token) {
    return errorResponse(401, `No credentials for moderation provider: ${providerId}`);
  }

  try {
    const res = await fetch(providerConfig.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        model: modelId,
        input: body.input,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return new Response(errText, {
        status: res.status,
        headers: {
          "Content-Type": "application/json",
<<<<<<< HEAD
          ...CORS_HEADERS,
=======
          "Access-Control-Allow-Origin": getCorsOrigin(),
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        },
      });
    }

    const data = await res.json();
    return Response.json(data, {
<<<<<<< HEAD
      headers: { ...CORS_HEADERS },
=======
      headers: { "Access-Control-Allow-Origin": getCorsOrigin() },
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    });
  } catch (err) {
    return errorResponse(500, `Moderation request failed: ${err.message}`);
  }
}
