<<<<<<< HEAD
import { AI_PROVIDERS } from "@/shared/constants/providers";
import { getUnifiedModelsResponse } from "@/app/api/v1/models/catalog";
import { INTERNAL_PROXY_ERROR, getCatalogDiagnosticsHeaders } from "@/lib/modelMetadataRegistry";
=======
import { getProviderConnections, getAllCustomModels } from "@/lib/localDb";
import { PROVIDER_MODELS, PROVIDER_ID_TO_ALIAS } from "@/shared/constants/models";
import { getAllEmbeddingModels } from "@omniroute/open-sse/config/embeddingRegistry.ts";
import { getAllImageModels } from "@omniroute/open-sse/config/imageRegistry.ts";
import { AI_PROVIDERS, ALIAS_TO_ID } from "@/shared/constants/providers";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

/**
 * GET /api/models/catalog
 * Returns all models grouped by provider, with metadata (type, custom flag)
 */
<<<<<<< HEAD
export async function GET(request: Request) {
  const diagnosticHeaders = getCatalogDiagnosticsHeaders({ request });
  try {
    const response = await getUnifiedModelsResponse(request, {});
    const body = await response.json();

    if (!response.ok) {
      return Response.json(body, {
        status: response.status,
        headers: {
          ...diagnosticHeaders,
        },
      });
    }

    const catalog: Record<string, any> = {};
    for (const model of body.data || []) {
      const providerId =
        typeof model.owned_by === "string" && model.owned_by.length > 0
          ? model.owned_by
          : "unknown";
      const bucket = catalog[providerId] || {
        provider: AI_PROVIDERS[providerId]?.name || providerId,
        active: providerId !== "unknown",
        models: [],
      };

      bucket.models.push({
        id: model.id,
        name: model.name || model.root || model.id,
        type: model.type || "chat",
        custom: model.custom === true,
        ...(model.capabilities ? { capabilities: model.capabilities } : {}),
        ...(typeof model.context_length === "number"
          ? { context_length: model.context_length }
          : {}),
        ...(typeof model.max_output_tokens === "number"
          ? { max_output_tokens: model.max_output_tokens }
          : {}),
        ...(Array.isArray(model.input_modalities)
          ? { input_modalities: model.input_modalities }
          : {}),
        ...(Array.isArray(model.output_modalities)
          ? { output_modalities: model.output_modalities }
          : {}),
        ...(Array.isArray(model.supported_endpoints)
          ? { supported_endpoints: model.supported_endpoints }
          : {}),
      });

      catalog[providerId] = bucket;
    }

    return Response.json(
      { catalog, catalogVersion: response.headers.get("X-Model-Catalog-Version") },
      {
        headers: {
          ...diagnosticHeaders,
        },
      }
    );
  } catch (error) {
    return Response.json(
      {
        error: {
          message: (error as any).message,
          type: "server_error",
          code: INTERNAL_PROXY_ERROR,
        },
      },
      {
        status: 500,
        headers: {
          ...diagnosticHeaders,
        },
      }
=======
export async function GET() {
  try {
    const connections = await getProviderConnections();
    const activeProviders = new Set(connections.map((c) => c.provider));
    const customModelsMap = await getAllCustomModels().catch(() => ({}));

    const catalog: Record<string, any> = {};

    // Built-in chat models
    for (const [alias, models] of Object.entries(PROVIDER_MODELS)) {
      const providerId = ALIAS_TO_ID[alias] || alias;
      if (!catalog[alias]) {
        catalog[alias] = {
          provider: AI_PROVIDERS[providerId]?.name || alias,
          active: activeProviders.has(providerId),
          models: [],
        };
      }

      for (const model of models) {
        catalog[alias].models.push({
          id: `${alias}/${model.id}`,
          name: model.name,
          type: "chat",
          custom: false,
        });
      }
    }

    // Embedding models
    for (const emb of getAllEmbeddingModels()) {
      const parts = emb.id.split("/");
      const provAlias = parts[0];
      if (!catalog[provAlias]) {
        catalog[provAlias] = {
          provider: provAlias,
          active: false,
          models: [],
        };
      }
      catalog[provAlias].models.push({
        id: emb.id,
        name: emb.name || emb.id,
        type: "embedding",
        custom: false,
      });
    }

    // Image models
    for (const img of getAllImageModels()) {
      const provAlias = img.provider;
      if (!catalog[provAlias]) {
        catalog[provAlias] = {
          provider: provAlias,
          active: false,
          models: [],
        };
      }
      catalog[provAlias].models.push({
        id: img.id,
        name: img.name || img.id,
        type: "image",
        custom: false,
      });
    }

    // Custom models (from DB)
    for (const [providerId, models] of Object.entries(customModelsMap)) {
      const alias = PROVIDER_ID_TO_ALIAS[providerId] || providerId;
      if (!catalog[alias]) {
        catalog[alias] = {
          provider: AI_PROVIDERS[providerId]?.name || alias,
          active: activeProviders.has(providerId),
          models: [],
        };
      }

      for (const model of models as any[]) {
        const fullId = `${alias}/${model.id}`;
        // Skip duplicates
        if (catalog[alias].models.some((m) => m.id === fullId)) continue;
        // Imported models are treated as default (not custom)
        const isCustom = model.source !== "imported";
        catalog[alias].models.push({
          id: fullId,
          name: model.name || model.id,
          type: "chat",
          custom: isCustom,
        });
      }
    }

    return Response.json({ catalog });
  } catch (error) {
    return Response.json(
      { error: { message: (error as any).message, type: "server_error" } },
      { status: 500 }
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    );
  }
}
