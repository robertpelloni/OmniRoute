<<<<<<< HEAD
=======
import { CORS_ORIGIN } from "@/shared/utils/cors";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import { PROVIDER_MODELS, PROVIDER_ID_TO_ALIAS } from "@/shared/constants/models";
import { AI_PROVIDERS } from "@/shared/constants/providers";
import {
  getProviderConnections,
  getCombos,
  getAllCustomModels,
  getSettings,
  getProviderNodes,
  getModelIsHidden,
} from "@/lib/localDb";
<<<<<<< HEAD
=======
import { isAuthenticated } from "@/shared/utils/apiAuth";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import { getAllEmbeddingModels } from "@omniroute/open-sse/config/embeddingRegistry.ts";
import { getAllImageModels } from "@omniroute/open-sse/config/imageRegistry.ts";
import { getAllRerankModels } from "@omniroute/open-sse/config/rerankRegistry.ts";
import { getAllAudioModels } from "@omniroute/open-sse/config/audioRegistry.ts";
import { getAllModerationModels } from "@omniroute/open-sse/config/moderationRegistry.ts";
import { getAllVideoModels } from "@omniroute/open-sse/config/videoRegistry.ts";
import { getAllMusicModels } from "@omniroute/open-sse/config/musicRegistry.ts";
import { REGISTRY } from "@omniroute/open-sse/config/providerRegistry.ts";
<<<<<<< HEAD
import { getAllSyncedAvailableModels } from "@/lib/db/models";
import { getCompatibleFallbackModels } from "@/lib/providers/managedAvailableModels";
import { hasEligibleConnectionForModel } from "@/domain/connectionModelRules";
import {
  INTERNAL_PROXY_ERROR,
  enrichCatalogModelEntry,
  getCatalogDiagnosticsHeaders,
} from "@/lib/modelMetadataRegistry";
import { isAuthRequired, isDashboardSessionAuthenticated } from "@/shared/utils/apiAuth";
=======
=======
import { getSyncedAvailableModels } from "@/lib/db/models";
import { getCompatibleFallbackModels } from "@/lib/providers/managedAvailableModels";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

const FALLBACK_ALIAS_TO_PROVIDER = {
  ag: "antigravity",
  cc: "claude",
  cl: "cline",
  cu: "cursor",
  cx: "codex",
  gc: "gemini-cli",
  gh: "github",
<<<<<<< HEAD
=======
  if: "iflow",
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  kc: "kilocode",
  kmc: "kimi-coding",
  kr: "kiro",
  qw: "qwen",
};

const VISION_MODEL_KEYWORDS = [
  "gpt-4o",
  "gpt-4.1",
  "gpt-4-vision",
  "gpt-4-turbo",
  "claude-3",
  "claude-3.5",
  "claude-3-5",
  "claude-4",
  "claude-opus",
  "claude-sonnet",
  "claude-haiku",
  "gemini",
  "gemma",
  "llava",
  "bakllava",
  "pixtral",
  "mistral-pixtral",
  "qwen-vl",
  "qvq",
  "glm-4.6v",
  "glm-4.5v",
  "vision",
  "multimodal",
];

function isVisionModelId(modelId: string): boolean {
  const normalized = String(modelId || "").toLowerCase();
  if (!normalized) return false;
  return VISION_MODEL_KEYWORDS.some((keyword) => normalized.includes(keyword));
}

function getVisionCapabilityFields(modelId: string) {
  if (!isVisionModelId(modelId)) return null;
  return {
    capabilities: { vision: true },
    input_modalities: ["text", "image"],
    output_modalities: ["text"],
  };
}

<<<<<<< HEAD
function extractBearer(headers: Headers): string | null {
  const authHeader = headers.get("authorization") || headers.get("Authorization");
  if (!authHeader?.trim().toLowerCase().startsWith("bearer ")) return null;
  return authHeader.trim().slice(7).trim() || null;
}

async function validateCatalogBearer(apiKey: string): Promise<boolean> {
  const { validateApiKey } = await import("@/lib/db/apiKeys");
  return validateApiKey(apiKey);
}

async function getModelCatalogAuthRejection(
  request: Request,
  settings: Record<string, any>,
  headers: Record<string, string>
): Promise<Response | null> {
  if (settings.requireAuthForModels !== true || !(await isAuthRequired(request))) return null;

  const bearer = extractBearer(request.headers);
  if (bearer) {
    if (await validateCatalogBearer(bearer)) return null;
    return Response.json(
      {
        error: {
          message: "Invalid API key",
          type: "invalid_api_key",
          code: "invalid_api_key",
        },
      },
      {
        status: 401,
        headers,
      }
    );
  }

  if (await isDashboardSessionAuthenticated(request)) return null;

  return Response.json(
    {
      error: {
        message: "Authentication required",
        type: "invalid_api_key",
        code: "invalid_api_key",
      },
    },
    {
      status: 401,
      headers,
    }
  );
}

=======
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
function buildAliasMaps() {
  const aliasToProviderId: Record<string, string> = {};
  const providerIdToAlias: Record<string, string> = {};

  // Canonical source for ID/alias pairs used across dashboard/provider config.
  for (const provider of Object.values(AI_PROVIDERS)) {
    const providerId = provider?.id;
    const alias = provider?.alias || providerId;
    if (!providerId) continue;
    aliasToProviderId[providerId] = providerId;
    aliasToProviderId[alias] = providerId;
    if (!providerIdToAlias[providerId]) {
      providerIdToAlias[providerId] = alias;
    }
  }

  for (const [left, right] of Object.entries(PROVIDER_ID_TO_ALIAS)) {
    // Handle both possible directions:
    // - providerId -> alias
    // - alias -> providerId
    if (PROVIDER_MODELS[left]) {
      aliasToProviderId[left] = aliasToProviderId[left] || right;
      continue;
    }
    if (PROVIDER_MODELS[right]) {
      aliasToProviderId[right] = aliasToProviderId[right] || left;
      continue;
    }
    aliasToProviderId[right] = aliasToProviderId[right] || left;
  }

  for (const alias of Object.keys(PROVIDER_MODELS)) {
    if (!aliasToProviderId[alias]) {
      aliasToProviderId[alias] = alias;
    }
  }

  for (const [alias, providerId] of Object.entries(aliasToProviderId)) {
    if (!providerIdToAlias[providerId]) {
      providerIdToAlias[providerId] = alias;
    }
  }

  // Safety net for environments where alias maps are partially loaded during
  // module initialization/circular imports.
  for (const [alias, providerId] of Object.entries(FALLBACK_ALIAS_TO_PROVIDER)) {
    if (!aliasToProviderId[alias]) aliasToProviderId[alias] = providerId;
    if (!aliasToProviderId[providerId]) aliasToProviderId[providerId] = providerId;
    if (!providerIdToAlias[providerId]) providerIdToAlias[providerId] = alias;
  }

  return { aliasToProviderId, providerIdToAlias };
}

/**
 * Build unified OpenAI-compatible model catalog response.
 * Reused by `/api/v1/models` and `/api/v1` to avoid semantic drift (T09).
 */
export async function getUnifiedModelsResponse(
  request: Request,
<<<<<<< HEAD
  corsHeaders: Record<string, string> = {}
) {
  const diagnosticHeaders = getCatalogDiagnosticsHeaders({ request });
  try {
=======
  corsHeaders: Record<string, string> = {
    "Access-Control-Allow-Origin": CORS_ORIGIN,
  }
) {
  try {
    // Issue #100: Optionally require authentication for /models (security hardening)
    // When enabled, unauthenticated requests get 401 with proper error response.
    // Supports API key (Bearer token) for external clients and JWT cookie for dashboard.
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    let settings: Record<string, any> = {};
    try {
      settings = await getSettings();
    } catch {}
<<<<<<< HEAD

    const authRejection = await getModelCatalogAuthRejection(request, settings, {
      ...corsHeaders,
      ...diagnosticHeaders,
    });
    if (authRejection) return authRejection;

    const { aliasToProviderId, providerIdToAlias } = buildAliasMaps();
    const resolveCanonicalProviderId = (aliasOrProviderId: string, fallbackProviderId?: string) =>
      aliasToProviderId[aliasOrProviderId] ||
      (fallbackProviderId ? aliasToProviderId[fallbackProviderId] : undefined) ||
      FALLBACK_ALIAS_TO_PROVIDER[aliasOrProviderId] ||
      fallbackProviderId ||
      aliasOrProviderId;
=======
    if (settings.requireAuthForModels === true) {
      if (!(await isAuthenticated(request))) {
        return Response.json(
          {
            error: {
              message: "Authentication required",
              type: "invalid_request_error",
              code: "invalid_api_key",
            },
          },
          { status: 401 }
        );
      }
    }

    const { aliasToProviderId, providerIdToAlias } = buildAliasMaps();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

    // Issue #96: Allow blocking specific providers from the models list
    const blockedProviders: Set<string> = new Set(
      Array.isArray(settings.blockedProviders) ? settings.blockedProviders : []
    );

    // Get active provider connections
    let connections = [];
    let totalConnectionCount = 0; // Track if DB has ANY connections (even disabled)
    try {
      connections = await getProviderConnections();
      totalConnectionCount = connections.length;
      // Filter to only active connections
      connections = connections.filter((c) => c.isActive !== false);
    } catch (e) {
      // If database not available, show no provider models (safe default)
      console.log("[catalog] Could not fetch providers:", e);
    }

    // Get provider nodes (for compatible providers with custom prefixes)
    let providerNodes = [];
    try {
      providerNodes = await getProviderNodes();
    } catch (e) {
      console.log("Could not fetch provider nodes");
    }

    // Build map of provider node ID to prefix and type for compatible providers
    const providerIdToPrefix: Record<string, string> = {};
    const nodeIdToProviderType: Record<string, string> = {};
    for (const node of providerNodes) {
      if (node.prefix) {
        providerIdToPrefix[node.id] = node.prefix;
      }
      if (node.type) {
        nodeIdToProviderType[node.id] = node.type;
      }
    }

    // Get combos
    let combos = [];
    try {
      combos = await getCombos();
    } catch (e) {
      console.log("Could not fetch combos");
    }

    // Build set of active provider aliases
    const activeAliases = new Set();
<<<<<<< HEAD
    const connectionsByProvider = new Map<string, typeof connections>();
    const registerConnectionKey = (
      key: string | null | undefined,
      connection: (typeof connections)[number]
    ) => {
      if (!key) return;
      const existing = connectionsByProvider.get(key) || [];
      existing.push(connection);
      connectionsByProvider.set(key, existing);
    };
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    for (const conn of connections) {
      const alias = providerIdToAlias[conn.provider] || conn.provider;
      activeAliases.add(alias);
      activeAliases.add(conn.provider);
<<<<<<< HEAD
      registerConnectionKey(alias, conn);
      registerConnectionKey(conn.provider, conn);
    }

    const getConnectionsForProvider = (...keys: Array<string | null | undefined>) => {
      const seen = new Set<string>();
      const collected: typeof connections = [];
      for (const key of keys) {
        if (!key) continue;
        for (const connection of connectionsByProvider.get(key) || []) {
          if (!connection?.id || seen.has(connection.id)) continue;
          seen.add(connection.id);
          collected.push(connection);
        }
      }
      return collected;
    };

    const providerSupportsModel = (providerKey: string, modelId: string) => {
      const providerId = aliasToProviderId[providerKey] || providerKey;
      const alias = providerIdToAlias[providerId] || providerKey;
      return hasEligibleConnectionForModel(
        getConnectionsForProvider(providerKey, providerId, alias),
        modelId
      );
    };

=======
    }

>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    // Collect models from active providers (or all if none active)
    const models = [];
    const timestamp = Math.floor(Date.now() / 1000);

    // Add combos first (they appear at the top) — only active ones
    for (const combo of combos) {
      if (combo.isActive === false || combo.isHidden === true) continue;
      models.push({
        id: combo.name,
        object: "model",
        created: timestamp,
        owned_by: "combo",
        permission: [],
        root: combo.name,
        parent: null,
        ...(combo.context_length ? { context_length: combo.context_length } : {}),
      });
    }

    // Add provider models (chat)
    for (const [alias, providerModels] of Object.entries(PROVIDER_MODELS)) {
      const providerId = aliasToProviderId[alias] || alias;
<<<<<<< HEAD
      const canonicalProviderId = resolveCanonicalProviderId(alias, providerId);
=======
      const canonicalProviderId = FALLBACK_ALIAS_TO_PROVIDER[alias] || providerId;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

      // Skip blocked providers (Issue #96)
      if (blockedProviders.has(alias) || blockedProviders.has(canonicalProviderId)) continue;

      // Only include models from providers with active connections
      if (!activeAliases.has(alias) && !activeAliases.has(canonicalProviderId)) {
        continue;
      }

      // Get default context length from registry (provider-level default)
      const registryEntry = REGISTRY[alias] || REGISTRY[canonicalProviderId];
      const defaultContextLength = registryEntry?.defaultContextLength;

      for (const model of providerModels) {
<<<<<<< HEAD
        if (!providerSupportsModel(canonicalProviderId, model.id)) continue;
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        const aliasId = `${alias}/${model.id}`;
        if (getModelIsHidden(canonicalProviderId, model.id)) continue;

        const visionFields =
          getVisionCapabilityFields(aliasId) || getVisionCapabilityFields(model.id);
<<<<<<< HEAD
=======
        // Model-level context length overrides provider default
        const contextLength = model.contextLength || defaultContextLength;
>>>>>>> Stashed changes
=======
        // Model-level context length overrides provider default
        const contextLength = model.contextLength || defaultContextLength;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

        models.push({
          id: aliasId,
          object: "model",
          created: timestamp,
          owned_by: canonicalProviderId,
          permission: [],
          root: model.id,
          parent: null,
<<<<<<< HEAD
=======
          ...(contextLength ? { context_length: contextLength } : {}),
>>>>>>> Stashed changes
=======
          ...(contextLength ? { context_length: contextLength } : {}),
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          ...(visionFields || {}),
        });

        // Add provider-id prefix in addition to short alias (ex: kiro/model + kr/model).
        // This improves compatibility for clients that expect full provider names.
        if (canonicalProviderId !== alias) {
          const providerIdModel = `${canonicalProviderId}/${model.id}`;
          const providerVisionFields =
            getVisionCapabilityFields(providerIdModel) || getVisionCapabilityFields(model.id);
          models.push({
            id: providerIdModel,
            object: "model",
            created: timestamp,
            owned_by: canonicalProviderId,
            permission: [],
            root: model.id,
            parent: aliasId,
<<<<<<< HEAD
<<<<<<< Updated upstream
=======
            ...(contextLength ? { context_length: contextLength } : {}),
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
            ...(providerVisionFields || {}),
          });
        }
      }
    }

<<<<<<< HEAD
    try {
      const syncedModelsByProvider = await getAllSyncedAvailableModels();
      for (const [providerId, syncedModels] of Object.entries(syncedModelsByProvider)) {
        if (!Array.isArray(syncedModels) || syncedModels.length === 0) continue;
        if (blockedProviders.has(providerId)) continue;
        if (providerId === "reka") continue;

        const prefix = providerIdToPrefix[providerId];
        const alias = prefix || providerIdToAlias[providerId] || providerId;
        const canonicalProviderId = resolveCanonicalProviderId(alias, providerId);
        const parentProviderType = nodeIdToProviderType[providerId];

        if (
          !activeAliases.has(alias) &&
          !activeAliases.has(canonicalProviderId) &&
          !activeAliases.has(providerId) &&
          !(parentProviderType && activeAliases.has(parentProviderType))
        ) {
          continue;
        }

        for (const sm of syncedModels) {
          if (!providerSupportsModel(canonicalProviderId, sm.id)) continue;
          if (getModelIsHidden(providerId, sm.id)) continue;

          const aliasId = `${alias}/${sm.id}`;
          const endpoints = Array.isArray(sm.supportedEndpoints) ? sm.supportedEndpoints : ["chat"];
          const apiFormat = typeof sm.apiFormat === "string" ? sm.apiFormat : "chat-completions";
          let modelType: string | undefined;
          if (endpoints.includes("embeddings")) modelType = "embedding";
          else if (endpoints.includes("rerank")) modelType = "rerank";
          else if (endpoints.includes("images")) modelType = "image";
          else if (endpoints.includes("audio")) modelType = "audio";
          const syncedFields = {
            ...(modelType ? { type: modelType } : {}),
            ...(apiFormat !== "chat-completions" ? { api_format: apiFormat } : {}),
            ...(modelType === "audio" ? { subtype: "transcription" } : {}),
            ...(sm.inputTokenLimit ? { context_length: sm.inputTokenLimit } : {}),
            ...(endpoints.length > 1 || !endpoints.includes("chat")
              ? { supported_endpoints: endpoints }
              : {}),
          };

          const existingAliasModel = models.find((model) => model.id === aliasId);
          if (existingAliasModel) {
            Object.assign(existingAliasModel, syncedFields);
            continue;
          }
=======
    // Gemini: synced API models exclusively (outside PROVIDER_MODELS loop since registry is empty)
    if (activeAliases.has("gemini") && !blockedProviders.has("gemini")) {
      try {
        const syncedModels = await getSyncedAvailableModels("gemini");
        for (const sm of syncedModels) {
          const aliasId = `gemini/${sm.id}`;
          if (getModelIsHidden("gemini", sm.id)) continue;

          // Convert supportedEndpoints to type/subtype for endpoint categorization
          const endpoints = Array.isArray(sm.supportedEndpoints) ? sm.supportedEndpoints : ["chat"];
          let modelType: string | undefined;
          if (endpoints.includes("embeddings")) modelType = "embedding";
          else if (endpoints.includes("images")) modelType = "image";
          else if (endpoints.includes("audio")) modelType = "audio";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

          models.push({
            id: aliasId,
            object: "model",
            created: timestamp,
<<<<<<< HEAD
            owned_by: canonicalProviderId,
            permission: [],
            root: sm.id,
            parent: null,
            ...syncedFields,
          });

=======
            owned_by: "gemini",
            permission: [],
            root: sm.id,
            parent: null,
            ...(modelType ? { type: modelType } : {}),
            ...(modelType === "audio" ? { subtype: "transcription" } : {}),
            ...(sm.inputTokenLimit ? { context_length: sm.inputTokenLimit } : {}),
            ...(endpoints.length > 1 || !endpoints.includes("chat")
              ? { supported_endpoints: endpoints }
              : {}),
          });

          // For audio models, also add a speech variant so they appear in both sections
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          if (modelType === "audio") {
            models.push({
              id: aliasId,
              object: "model",
              created: timestamp,
<<<<<<< HEAD
              owned_by: canonicalProviderId,
=======
              owned_by: "gemini",
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
              permission: [],
              root: sm.id,
              parent: null,
              type: "audio",
              subtype: "speech",
              ...(sm.inputTokenLimit ? { context_length: sm.inputTokenLimit } : {}),
              ...(endpoints.length > 1 || !endpoints.includes("chat")
                ? { supported_endpoints: endpoints }
                : {}),
            });
          }
<<<<<<< HEAD

          if (canonicalProviderId !== alias && !prefix) {
            const providerPrefixedId = `${canonicalProviderId}/${sm.id}`;
            if (!models.some((model) => model.id === providerPrefixedId)) {
              models.push({
                id: providerPrefixedId,
                object: "model",
                created: timestamp,
                owned_by: canonicalProviderId,
                permission: [],
                root: sm.id,
                parent: aliasId,
                ...syncedFields,
              });
            }
          }
        }
      }
    } catch (err) {
      console.error("[catalog] Error fetching synced provider models:", err);
=======
        }
      } catch (err) {
        console.error("[catalog] Error fetching synced Gemini models:", err);
      }
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    }

    // Helper: check if a provider is active (by provider id or alias)
    const isProviderActive = (provider: string) => {
      if (activeAliases.size === 0) return false; // No active connections = show nothing
      const alias = providerIdToAlias[provider] || provider;
<<<<<<< HEAD
      const canonicalProviderId = resolveCanonicalProviderId(alias, provider);

      // FIX #1752: Ensure blocked providers are not returned for non-chat models
      if (
        blockedProviders.has(alias) ||
        blockedProviders.has(canonicalProviderId) ||
        blockedProviders.has(provider)
      ) {
        return false;
      }

      return activeAliases.has(alias) || activeAliases.has(provider);
    };

    const hasEquivalentSpecialtyModel = (
      providerId: string,
      rawModelId: string,
      type: string,
      scopedModelId: string
    ) =>
      models.some((model: any) => {
        if (model?.id === scopedModelId) return true;
        if (model?.owned_by !== providerId || model?.type !== type) return false;
        const existingRoot =
          typeof model?.root === "string"
            ? model.root
            : typeof model?.id === "string"
              ? model.id.split("/").pop()
              : null;
        return existingRoot === rawModelId;
      });

    // Add embedding models (filtered by active providers)
    for (const embModel of getAllEmbeddingModels()) {
      if (!isProviderActive(embModel.provider)) continue;
      const rawModelId = embModel.id.split("/").pop() || embModel.id;
      if (!providerSupportsModel(embModel.provider, rawModelId)) continue;
      if (hasEquivalentSpecialtyModel(embModel.provider, rawModelId, "embedding", embModel.id)) {
        continue;
      }
=======
      return activeAliases.has(alias) || activeAliases.has(provider);
    };

    // Add embedding models (filtered by active providers)
    for (const embModel of getAllEmbeddingModels()) {
      if (!isProviderActive(embModel.provider)) continue;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      models.push({
        id: embModel.id,
        object: "model",
        created: timestamp,
        owned_by: embModel.provider,
<<<<<<< HEAD
        root: rawModelId,
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        type: "embedding",
        dimensions: embModel.dimensions,
      });
    }

    // Add image models (filtered by active providers)
    for (const imgModel of getAllImageModels()) {
      if (!isProviderActive(imgModel.provider)) continue;
<<<<<<< HEAD
      const rawModelId = imgModel.id.split("/").pop() || imgModel.id;
      if (!providerSupportsModel(imgModel.provider, rawModelId)) continue;
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      models.push({
        id: imgModel.id,
        object: "model",
        created: timestamp,
        owned_by: imgModel.provider,
        type: "image",
        supported_sizes: imgModel.supportedSizes,
<<<<<<< HEAD
        input_modalities: imgModel.inputModalities || ["text"],
        output_modalities: ["image"],
        ...(imgModel.description ? { description: imgModel.description } : {}),
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      });
    }

    // Add rerank models (filtered by active providers)
    for (const rerankModel of getAllRerankModels()) {
      if (!isProviderActive(rerankModel.provider)) continue;
<<<<<<< HEAD
      const rawModelId = rerankModel.id.split("/").pop() || rerankModel.id;
      if (!providerSupportsModel(rerankModel.provider, rawModelId)) continue;
      if (hasEquivalentSpecialtyModel(rerankModel.provider, rawModelId, "rerank", rerankModel.id)) {
        continue;
      }
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      models.push({
        id: rerankModel.id,
        object: "model",
        created: timestamp,
        owned_by: rerankModel.provider,
<<<<<<< HEAD
        root: rawModelId,
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        type: "rerank",
      });
    }

    // Add audio models (filtered by active providers)
    for (const audioModel of getAllAudioModels()) {
      if (!isProviderActive(audioModel.provider)) continue;
<<<<<<< HEAD
      const rawModelId = audioModel.id.split("/").pop() || audioModel.id;
      if (!providerSupportsModel(audioModel.provider, rawModelId)) continue;
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      models.push({
        id: audioModel.id,
        object: "model",
        created: timestamp,
        owned_by: audioModel.provider,
        type: "audio",
        subtype: audioModel.subtype,
      });
    }

    // Add moderation models (filtered by active providers)
    for (const modModel of getAllModerationModels()) {
      if (!isProviderActive(modModel.provider)) continue;
<<<<<<< HEAD
      const rawModelId = modModel.id.split("/").pop() || modModel.id;
      if (!providerSupportsModel(modModel.provider, rawModelId)) continue;
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      models.push({
        id: modModel.id,
        object: "model",
        created: timestamp,
        owned_by: modModel.provider,
        type: "moderation",
      });
    }

    // Add video models (filtered by active providers)
    for (const videoModel of getAllVideoModels()) {
      if (!isProviderActive(videoModel.provider)) continue;
<<<<<<< HEAD
<<<<<<< Updated upstream
      const rawModelId = videoModel.id.split("/").pop() || videoModel.id;
      if (!providerSupportsModel(videoModel.provider, rawModelId)) continue;
=======
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      models.push({
        id: videoModel.id,
        object: "model",
        created: timestamp,
        owned_by: videoModel.provider,
        type: "video",
      });
    }

    // Add music models (filtered by active providers)
    for (const musicModel of getAllMusicModels()) {
      if (!isProviderActive(musicModel.provider)) continue;
<<<<<<< HEAD
      const rawModelId = musicModel.id.split("/").pop() || musicModel.id;
      if (!providerSupportsModel(musicModel.provider, rawModelId)) continue;
=======
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      models.push({
        id: musicModel.id,
        object: "model",
        created: timestamp,
        owned_by: musicModel.provider,
        type: "music",
      });
    }

    // Add custom models (user-defined)
    try {
      const customModelsMap = (await getAllCustomModels()) as Record<string, unknown>;
      for (const [providerId, rawProviderCustomModels] of Object.entries(customModelsMap)) {
        // Skip Gemini — handled by syncedAvailableModels above
        if (providerId === "gemini") continue;
<<<<<<< HEAD
        if (providerId === "reka") continue;
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        const providerCustomModels = Array.isArray(rawProviderCustomModels)
          ? rawProviderCustomModels.filter(
              (model): model is Record<string, unknown> =>
                !!model && typeof model === "object" && !Array.isArray(model)
            )
          : [];
        // For compatible providers, use the prefix from provider nodes
        const prefix = providerIdToPrefix[providerId];
        const alias = prefix || providerIdToAlias[providerId] || providerId;
<<<<<<< HEAD
        const canonicalProviderId = resolveCanonicalProviderId(alias, providerId);
=======
        const canonicalProviderId = FALLBACK_ALIAS_TO_PROVIDER[alias] || providerId;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

        // Only include if provider is active — check alias, canonical ID, raw providerId,
        // or the parent provider type (for compatible providers whose node ID is a UUID)
        const parentProviderType = nodeIdToProviderType[providerId];
        if (
          !activeAliases.has(alias) &&
          !activeAliases.has(canonicalProviderId) &&
          !activeAliases.has(providerId) &&
          !(parentProviderType && activeAliases.has(parentProviderType))
        )
          continue;

        for (const model of providerCustomModels) {
          const modelId = typeof model.id === "string" ? model.id : null;
          if (!modelId) continue;
          if (model.isHidden === true) continue;
<<<<<<< HEAD
          if (
            !hasEligibleConnectionForModel(
              getConnectionsForProvider(alias, canonicalProviderId, providerId, parentProviderType),
              modelId
            )
          ) {
            continue;
          }
=======
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

          // Skip if already added as built-in
          const aliasId = `${alias}/${modelId}`;
          if (models.some((m) => m.id === aliasId)) continue;

          // Determine type from supportedEndpoints
          const endpoints = Array.isArray(model.supportedEndpoints)
            ? model.supportedEndpoints
            : ["chat"];
          const apiFormat =
            typeof model.apiFormat === "string" ? model.apiFormat : "chat-completions";
          let modelType: string | undefined;
          if (endpoints.includes("embeddings")) modelType = "embedding";
<<<<<<< HEAD
          else if (endpoints.includes("rerank")) modelType = "rerank";
          else if (endpoints.includes("images")) modelType = "image";
          else if (endpoints.includes("audio")) modelType = "audio";
          if (
            modelType &&
            hasEquivalentSpecialtyModel(canonicalProviderId, modelId, modelType, aliasId)
          ) {
            continue;
          }
=======
=======
          else if (endpoints.includes("images")) modelType = "image";
          else if (endpoints.includes("audio")) modelType = "audio";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          const visionFields =
            modelType === "chat"
              ? getVisionCapabilityFields(aliasId) || getVisionCapabilityFields(modelId)
              : null;

          models.push({
            id: aliasId,
            object: "model",
            created: timestamp,
            owned_by: canonicalProviderId,
            permission: [],
            root: modelId,
            parent: null,
            custom: true,
            ...(modelType ? { type: modelType } : {}),
            ...(apiFormat !== "chat-completions" ? { api_format: apiFormat } : {}),
            ...(endpoints.length > 1 || !endpoints.includes("chat")
              ? { supported_endpoints: endpoints }
              : {}),
            ...(typeof (model as any).inputTokenLimit === "number"
              ? { context_length: (model as any).inputTokenLimit }
              : {}),
<<<<<<< HEAD
=======
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
            ...(visionFields || {}),
          });

          // Only add provider-prefixed version if different from alias
          if (canonicalProviderId !== alias && !prefix) {
            const providerPrefixedId = `${canonicalProviderId}/${modelId}`;
            if (models.some((m) => m.id === providerPrefixedId)) continue;
            const providerVisionFields =
              modelType === "chat"
                ? getVisionCapabilityFields(providerPrefixedId) ||
                  getVisionCapabilityFields(modelId)
                : null;
            models.push({
              id: providerPrefixedId,
              object: "model",
              created: timestamp,
              owned_by: canonicalProviderId,
              permission: [],
              root: modelId,
              parent: aliasId,
              custom: true,
              ...(modelType ? { type: modelType } : {}),
              ...(typeof (model as any).inputTokenLimit === "number"
                ? { context_length: (model as any).inputTokenLimit }
                : {}),
<<<<<<< HEAD
=======
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
              ...(providerVisionFields || {}),
            });
          }
        }
      }
    } catch (e) {
      console.log("Could not fetch custom models");
    }

<<<<<<< HEAD
=======
    // Add managed fallback models for compatible providers that don't import a model list.
    for (const conn of connections) {
      const providerId = typeof conn.provider === "string" ? conn.provider : null;
      if (!providerId) continue;
      if (blockedProviders.has(providerId)) continue;

      const fallbackModels = getCompatibleFallbackModels(providerId);
      if (!Array.isArray(fallbackModels) || fallbackModels.length === 0) continue;

      const prefix = providerIdToPrefix[providerId];
      const alias = prefix || providerIdToAlias[providerId] || providerId;

      for (const model of fallbackModels) {
        const modelId = typeof model.id === "string" ? model.id : null;
        if (!modelId) continue;
        if (getModelIsHidden(providerId, modelId)) continue;

        const aliasId = `${alias}/${modelId}`;
        if (models.some((m) => m.id === aliasId)) continue;

        const visionFields =
          getVisionCapabilityFields(aliasId) || getVisionCapabilityFields(modelId);
        const contextLength =
          typeof (model as any).contextLength === "number"
            ? (model as any).contextLength
            : undefined;

        models.push({
          id: aliasId,
          object: "model",
          created: timestamp,
          owned_by: providerId,
          permission: [],
          root: modelId,
          parent: null,
          ...(contextLength ? { context_length: contextLength } : {}),
          ...(visionFields || {}),
        });
      }
    }

    // Filter by API key permissions if requested
    const authHeader = request.headers.get("authorization");
    let finalModels = models;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const apiKey = authHeader.slice(7);
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      const { isModelAllowedForKey } = await import("@/lib/db/apiKeys");

      const filtered = [];
      for (const m of models) {
        // m.id is the full identifier (e.g. openai/gpt-4o), m.root is the raw model string
        // check either one as the config could use either patterns
        if (
          (await isModelAllowedForKey(apiKey, m.id)) ||
          (await isModelAllowedForKey(apiKey, m.root))
        ) {
          filtered.push(m);
        }
      }
      finalModels = filtered;
    }

<<<<<<< HEAD
      },
      {
        headers: {
          ...corsHeaders,
          ...diagnosticHeaders,
        },
=======
    return Response.json(
      {
        object: "list",
        data: finalModels,
      },
      {
        headers: corsHeaders,
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      }
    );
  } catch (error) {
    console.log("Error fetching models:", error);
    return Response.json(
<<<<<<< HEAD
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
          ...corsHeaders,
          ...diagnosticHeaders,
        },
      }
=======
      { error: { message: (error as any).message, type: "server_error" } },
      { status: 500 }
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    );
  }
}
