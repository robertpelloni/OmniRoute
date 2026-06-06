<<<<<<< HEAD
import { PROVIDER_MODELS } from "@/shared/constants/models";
import {
  getAllCustomModels,
  getAllSyncedAvailableModels,
  getSyncedAvailableModels,
} from "@/lib/db/models";
import { getResolvedModelCapabilities } from "@/lib/modelCapabilities";
import { getSyncedCapabilities } from "@/lib/modelsDevSync";
=======
import { CORS_ORIGIN } from "@/shared/utils/cors";
import { PROVIDER_MODELS } from "@/shared/constants/models";
import { getAllCustomModels, getSyncedAvailableModels } from "@/lib/db/models";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

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
 * GET /v1beta/models - Gemini compatible models list
 * Returns models in Gemini API format with real token limits when available.
 */
export async function GET() {
  try {
<<<<<<< HEAD
    getSyncedCapabilities();
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    const models = [];

    // Built-in models (hardcoded defaults)
    for (const [provider, providerModels] of Object.entries(PROVIDER_MODELS)) {
      for (const model of providerModels) {
<<<<<<< HEAD
        const resolved = getResolvedModelCapabilities({ provider, model: model.id });
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        models.push({
          name: `models/${provider}/${model.id}`,
          displayName: model.name || model.id,
          description: `${provider} model: ${model.name || model.id}`,
          supportedGenerationMethods: ["generateContent"],
<<<<<<< HEAD
          inputTokenLimit: resolved.maxInputTokens || resolved.contextWindow || 128000,
          outputTokenLimit: resolved.maxOutputTokens || 8192,
          ...(resolved.supportsThinking === true ? { thinking: true } : {}),
=======
          inputTokenLimit: 128000,
          outputTokenLimit: 8192,
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        });
      }
    }

    // Gemini: always replace hardcoded entries with synced models (no fallback)
    // Always remove hardcoded gemini entries — even if sync returns empty
    for (let i = models.length - 1; i >= 0; i--) {
      if (
        typeof (models[i] as any).name === "string" &&
        (models[i] as any).name.startsWith("models/gemini/")
      ) {
        models.splice(i, 1);
      }
    }
    try {
      const syncedGeminiModels = await getSyncedAvailableModels("gemini");
      for (const m of syncedGeminiModels) {
        models.push({
          name: `models/gemini/${m.id}`,
          displayName: m.name || m.id,
          ...(typeof m.description === "string" ? { description: m.description } : {}),
          supportedGenerationMethods: ["generateContent"],
          inputTokenLimit: typeof m.inputTokenLimit === "number" ? m.inputTokenLimit : 128000,
          outputTokenLimit: typeof m.outputTokenLimit === "number" ? m.outputTokenLimit : 8192,
          ...(m.supportsThinking === true ? { thinking: true } : {}),
        });
      }
    } catch (err) {
      console.error("[v1beta/models] Error fetching synced Gemini models:", err);
    }

<<<<<<< HEAD
    const existingNames = new Set(models.map((model) => (model as any).name));

    // Synced/imported models for non-Gemini providers
    try {
      const syncedModelsMap = await getAllSyncedAvailableModels();
      for (const [providerId, syncedModels] of Object.entries(syncedModelsMap)) {
        if (providerId === "gemini") continue;
        if (!Array.isArray(syncedModels)) continue;
        for (const m of syncedModels) {
          if (!m || typeof m.id !== "string") continue;
          const name = `models/${providerId}/${m.id}`;
          if (existingNames.has(name)) continue;
          const resolved = getResolvedModelCapabilities({
            provider: providerId,
            model: m.id,
          });
          models.push({
            name,
            displayName: m.name || m.id,
            ...(typeof m.description === "string" ? { description: m.description } : {}),
            supportedGenerationMethods: ["generateContent"],
            inputTokenLimit:
              typeof m.inputTokenLimit === "number"
                ? m.inputTokenLimit
                : resolved.maxInputTokens || resolved.contextWindow || 128000,
            outputTokenLimit:
              typeof m.outputTokenLimit === "number"
                ? m.outputTokenLimit
                : resolved.maxOutputTokens || 8192,
            ...(m.supportsThinking === true || resolved.supportsThinking === true
              ? { thinking: true }
              : {}),
          });
          existingNames.add(name);
        }
      }
    } catch {
      // Synced models are optional — skip on error
    }

=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    // Custom models (use stored metadata from provider APIs)
    try {
      const customModelsMap = (await getAllCustomModels()) as Record<string, unknown>;
      for (const [providerId, rawModels] of Object.entries(customModelsMap)) {
        if (!Array.isArray(rawModels)) continue;
        // Skip Gemini — handled by syncedAvailableModels above
        if (providerId === "gemini") continue;
        for (const model of rawModels) {
          if (!model || typeof model !== "object" || typeof (model as any).id !== "string")
            continue;
          const m = model as Record<string, unknown>;
          if (m.isHidden === true) continue;
<<<<<<< HEAD
          const resolved = getResolvedModelCapabilities({
            provider: providerId,
            model: String(m.id),
          });
          const name = `models/${providerId}/${m.id}`;
          if (existingNames.has(name)) continue;
          models.push({
            name,
            displayName: m.name || m.id,
            ...(typeof m.description === "string" ? { description: m.description } : {}),
            supportedGenerationMethods: ["generateContent"],
            inputTokenLimit:
              typeof m.inputTokenLimit === "number"
                ? m.inputTokenLimit
                : resolved.maxInputTokens || resolved.contextWindow || 128000,
            outputTokenLimit:
              typeof m.outputTokenLimit === "number"
                ? m.outputTokenLimit
                : resolved.maxOutputTokens || 8192,
            ...(m.supportsThinking === true || resolved.supportsThinking === true
              ? { thinking: true }
              : {}),
          });
          existingNames.add(name);
=======
          models.push({
            name: `models/${providerId}/${m.id}`,
            displayName: m.name || m.id,
            ...(typeof m.description === "string" ? { description: m.description } : {}),
            supportedGenerationMethods: ["generateContent"],
            inputTokenLimit: typeof m.inputTokenLimit === "number" ? m.inputTokenLimit : 128000,
            outputTokenLimit: typeof m.outputTokenLimit === "number" ? m.outputTokenLimit : 8192,
            ...(m.supportsThinking === true ? { thinking: true } : {}),
          });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        }
      }
    } catch {
      // Custom models are optional — skip on error
    }

    return Response.json({ models });
  } catch (error: any) {
    console.log("Error fetching models:", error);
    return Response.json({ error: { message: error.message } }, { status: 500 });
  }
}
