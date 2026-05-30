import { NextResponse } from "next/server";
import {
  isClaudeCodeCompatibleProvider,
  isAnthropicCompatibleProvider,
  isOpenAICompatibleProvider,
  isSelfHostedChatProvider,
} from "@/shared/constants/providers";
import { getRegistryEntry } from "@omniroute/open-sse/config/providerRegistry.ts";
import { getModelsByProviderId } from "@/shared/constants/models";
import {
  getProviderConnectionById,
  getModelIsHidden,
  resolveProxyForProvider,
} from "@/lib/localDb";
import {
  SAFE_OUTBOUND_FETCH_PRESETS,
  SafeOutboundFetchError,
  getSafeOutboundFetchErrorStatus,
  safeOutboundFetch,
} from "@/shared/network/safeOutboundFetch";
import { getProviderOutboundGuard } from "@/shared/network/outboundUrlGuard";
import { getStaticQoderModels } from "@omniroute/open-sse/services/qoderCli.ts";
import { getAntigravityHeaders } from "@omniroute/open-sse/services/antigravityHeaders.ts";
import { getAntigravityModelsDiscoveryUrls } from "@omniroute/open-sse/config/antigravityUpstream.ts";
import { getGlmModelsUrl } from "@omniroute/open-sse/config/glmProvider.ts";
import { getImageProvider } from "@omniroute/open-sse/config/imageRegistry.ts";
import { getVideoProvider } from "@omniroute/open-sse/config/videoRegistry.ts";
import { resolveAntigravityVersion } from "@omniroute/open-sse/services/antigravityVersion.ts";
import {
  AZURE_AI_DEFAULT_BASE_URL,
  buildAzureAiModelsUrl,
} from "@omniroute/open-sse/config/azureAi.ts";
import { normalizeBedrockBaseUrl } from "@omniroute/open-sse/config/bedrock.ts";
import {
  DATAROBOT_DEFAULT_BASE_URL,
  buildDataRobotCatalogUrl,
  isDataRobotDeploymentUrl,
} from "@omniroute/open-sse/config/datarobot.ts";
import { OCI_DEFAULT_BASE_URL, buildOciModelsUrl } from "@omniroute/open-sse/config/oci.ts";
import {
  SAP_DEFAULT_BASE_URL,
  buildSapModelsUrl,
  getSapResourceGroup,
} from "@omniroute/open-sse/config/sap.ts";
import {
  WATSONX_DEFAULT_BASE_URL,
  buildWatsonxModelsUrl,
} from "@omniroute/open-sse/config/watsonx.ts";
import {
  ANTIGRAVITY_PUBLIC_MODELS,
  getClientVisibleAntigravityModelName,
  isUserCallableAntigravityModelId,
  toClientAntigravityModelId,
} from "@omniroute/open-sse/config/antigravityModelAliases.ts";
import { getEmbeddingProvider } from "@omniroute/open-sse/config/embeddingRegistry.ts";
import { getRerankProvider } from "@omniroute/open-sse/config/rerankRegistry.ts";
import {
  getSpeechProvider,
  getTranscriptionProvider,
} from "@omniroute/open-sse/config/audioRegistry.ts";
import {
  getCachedDiscoveredModels,
  isAutoFetchModelsEnabled,
  persistDiscoveredModels,
} from "@/lib/providerModels/modelDiscovery";
=======
import { PROVIDER_MODELS } from "@/shared/constants/models";
import { getModelIsHidden } from "@/lib/localDb";
>>>>>>> Stashed changes

type JsonRecord = Record<string, unknown>;
type LocalCatalogModel = {
  id: string;
  name?: string;
  apiFormat?: string;
  supportedEndpoints?: string[];
};

const antigravityDiscoveryInflight = new Map<
  string,
  Promise<Array<{ id: string; name: string }>>
>();

function asRecord(value: unknown): JsonRecord {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as JsonRecord) : {};
}

function toNonEmptyString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function getProviderBaseUrl(providerSpecificData: unknown): string | null {
  const data = asRecord(providerSpecificData);
  const baseUrl = data.baseUrl;
  return typeof baseUrl === "string" && baseUrl.trim().length > 0 ? baseUrl : null;
}

function normalizeAzureOpenAIBaseUrl(baseUrl: string) {
  return baseUrl
    .trim()
    .replace(/\/+$/, "")
    .replace(/\/openai$/i, "")
    .replace(/\/openai\/deployments\/[^/]+\/chat\/completions.*$/i, "");
}

function getAzureOpenAIApiVersion(providerSpecificData: unknown) {
  const data = asRecord(providerSpecificData);
  const apiVersion =
    toNonEmptyString(data.apiVersion) || toNonEmptyString(data.validationApiVersion);
  return apiVersion || "2024-12-01-preview";
}

function isLocalOpenAIStyleProvider(provider: string): boolean {
  return isSelfHostedChatProvider(provider);
}

const NAMED_OPENAI_STYLE_PROVIDERS = new Set([
  "bedrock",
  "modal",
  "reka",
  "empower",
  "nous-research",
  "poe",
]);

function isNamedOpenAIStyleProvider(provider: string): boolean {
  return NAMED_OPENAI_STYLE_PROVIDERS.has(provider);
}

function mergeLocalCatalogModels<T extends LocalCatalogModel, U extends LocalCatalogModel>(
  registryCatalogModels: T[],
  specialtyCatalogModels: U[]
): Array<T | U> {
  if (registryCatalogModels.length === 0) return specialtyCatalogModels;

  const registryModelIds = new Set(registryCatalogModels.map((model) => model.id));
  return [
    ...registryCatalogModels,
    ...specialtyCatalogModels.filter((model) => !registryModelIds.has(model.id)),
  ];
}

function buildOptionalBearerHeaders(token: string | null | undefined): Record<string, string> {
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

function buildNamedOpenAiStyleHeaders(
  provider: string,
  token: string | null | undefined
): Record<string, string> {
  const headers = buildOptionalBearerHeaders(token);

  if (provider === "reka" && token) {
    headers["X-Api-Key"] = token;
  }

  return headers;
}

function normalizeAntigravityModelsResponse(data: unknown): Array<{ id: string; name: string }> {
  const payload = asRecord(data).models;

  if (Array.isArray(payload)) {
    return payload
      .map((value) => {
        const item = asRecord(value);
        const id =
          typeof item.id === "string"
            ? item.id
            : typeof item.name === "string"
              ? item.name
              : typeof item.model === "string"
                ? item.model
                : "";
        const name =
          typeof item.displayName === "string"
            ? item.displayName
            : typeof item.name === "string"
              ? item.name
              : id;
        return id ? { id, name } : null;
      })
      .filter((value): value is { id: string; name: string } => Boolean(value));
  }

  const modelsById = asRecord(payload);
  return Object.entries(modelsById)
    .map(([id, value]) => {
      const item = asRecord(value);
      const name =
        typeof item.displayName === "string"
          ? item.displayName
          : typeof item.name === "string"
            ? item.name
            : id;
      return id ? { id, name } : null;
    })
    .filter((value): value is { id: string; name: string } => Boolean(value));
}

function filterUserCallableAntigravityModels(models: Array<{ id: string; name: string }>) {
  return models.filter((model) => isUserCallableAntigravityModelId(model.id));
}

function mapAntigravityModelForClient(model: { id: string; name: string }): {
  id: string;
  name: string;
} {
  const clientId = toClientAntigravityModelId(model.id);
  return {
    id: clientId,
    name: getClientVisibleAntigravityModelName(clientId, model.name),
  };
}

async function fetchAntigravityDiscoveryModelsCached(
  accessToken: string,
  connectionId: string,
  proxy: unknown
): Promise<Array<{ id: string; name: string }>> {
  const cacheKey = `${connectionId}:${accessToken.substring(0, 16)}`;
  const inflight = antigravityDiscoveryInflight.get(cacheKey);
  if (inflight) return inflight;

  const promise = (async () => {
    await resolveAntigravityVersion();

    for (const discoveryUrl of getAntigravityModelsDiscoveryUrls()) {
      try {
        const response = await safeOutboundFetch(discoveryUrl, {
          ...SAFE_OUTBOUND_FETCH_PRESETS.modelsDiscovery,
          guard: getProviderOutboundGuard(),
          proxyConfig: proxy,
          method: "POST",
          headers: getAntigravityHeaders("models", accessToken),
          body: JSON.stringify({}),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.warn(
            `[models] antigravity discovery failed at ${discoveryUrl} (${response.status}): ${errorText}`
          );
          continue;
        }

        const models = filterUserCallableAntigravityModels(
          normalizeAntigravityModelsResponse(await response.json())
        ).map(mapAntigravityModelForClient);
        if (models.length > 0) {
          return models;
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.warn(`[models] antigravity discovery threw for ${discoveryUrl}: ${message}`);
      }
    }

    return [];
  })().finally(() => {
    antigravityDiscoveryInflight.delete(cacheKey);
  });

  antigravityDiscoveryInflight.set(cacheKey, promise);
  return promise;
}

function normalizeDataRobotCatalogResponse(data: unknown): Array<{ id: string; name: string }> {
  const items = Array.isArray(asRecord(data).data) ? (asRecord(data).data as unknown[]) : [];

  return items
    .map((value) => {
      const item = asRecord(value);
      const model =
        toNonEmptyString(item.model) || toNonEmptyString(item.id) || toNonEmptyString(item.name);
      if (!model) return null;
      if (item.isActive === false) return null;
      const name = toNonEmptyString(item.label) || toNonEmptyString(item.displayName) || model;
      return { id: model, name };
    })
    .filter((value): value is { id: string; name: string } => Boolean(value));
}

function normalizeOpenAiLikeModelsResponse(
  data: unknown,
  fallbackOwner: string
): Array<{ id: string; name: string; owned_by: string }> {
  const payload = asRecord(data);
  const items = Array.isArray(data)
    ? data
    : Array.isArray(payload.data)
      ? (payload.data as unknown[])
      : Array.isArray(payload.models)
        ? (payload.models as unknown[])
        : [];

  return items
    .map((value) => {
      const item = asRecord(value);
      const id =
        toNonEmptyString(item.id) || toNonEmptyString(item.model) || toNonEmptyString(item.name);
      if (!id) return null;
      const name =
        toNonEmptyString(item.display_name) ||
        toNonEmptyString(item.displayName) ||
        toNonEmptyString(item.name) ||
        id;
      const ownedBy =
        toNonEmptyString(item.owned_by) || toNonEmptyString(item.provider) || fallbackOwner;
      return { id, name, owned_by: ownedBy };
    })
    .filter((value): value is { id: string; name: string; owned_by: string } => Boolean(value));
}

function normalizeSapModelsResponse(
  data: unknown
): Array<{ id: string; name: string; owned_by: string }> {
  const payload = asRecord(data);
  const items = Array.isArray(payload.resources) ? (payload.resources as unknown[]) : [];

  return items
    .map((value) => {
      const item = asRecord(value);
      const id =
        toNonEmptyString(item.model) || toNonEmptyString(item.id) || toNonEmptyString(item.name);
      if (!id) return null;
      const name =
        toNonEmptyString(item.displayName) ||
        toNonEmptyString(item.display_name) ||
        toNonEmptyString(item.name) ||
        id;
      const ownedBy = toNonEmptyString(item.provider) || "sap";
      return { id, name, owned_by: ownedBy };
    })
    .filter((value): value is { id: string; name: string; owned_by: string } => Boolean(value));
}

type ProviderModelsConfigEntry = {
  url: string;
  method: "GET" | "POST";
  headers: Record<string, string>;
  authHeader?: string;
  authPrefix?: string;
  authQuery?: string;
  body?: unknown;
  parseResponse: (data: any) => any;
};

const KIMI_CODING_MODELS_CONFIG: ProviderModelsConfigEntry = {
  url: "https://api.kimi.com/coding/v1/models",
  method: "GET",
  headers: { "Content-Type": "application/json" },
  authHeader: "x-api-key",
  parseResponse: (data) => data.data || data.models || [],
};

// Providers that return hardcoded models (no remote /models API)
const STATIC_MODEL_PROVIDERS: Record<string, () => Array<{ id: string; name: string }>> = {
  deepgram: () => [
    { id: "nova-3", name: "Nova 3 (Transcription)" },
    { id: "nova-2", name: "Nova 2 (Transcription)" },
    { id: "whisper-large", name: "Whisper Large (Transcription)" },
    { id: "aura-asteria-en", name: "Aura Asteria EN (TTS)" },
    { id: "aura-luna-en", name: "Aura Luna EN (TTS)" },
    { id: "aura-stella-en", name: "Aura Stella EN (TTS)" },
  ],
  assemblyai: () => [
    { id: "universal-3-pro", name: "Universal 3 Pro (Transcription)" },
    { id: "universal-2", name: "Universal 2 (Transcription)" },
  ],
  nanobanana: () => [
    { id: "nanobanana-flash", name: "NanoBanana Flash (Gemini 2.5 Flash)" },
    { id: "nanobanana-pro", name: "NanoBanana Pro (Gemini 3 Pro)" },
  ],
  antigravity: () => ANTIGRAVITY_PUBLIC_MODELS.map((model) => ({ ...model })),
  claude: () => [
    { id: "claude-opus-4-7", name: "Claude Opus 4.7" },
    { id: "claude-opus-4-6", name: "Claude Opus 4.6" },
    { id: "claude-sonnet-4-6", name: "Claude Sonnet 4.6" },
    { id: "claude-opus-4-5-20251101", name: "Claude Opus 4.5 (2025-11-01)" },
    { id: "claude-sonnet-4-5-20250929", name: "Claude Sonnet 4.5 (2025-09-29)" },
    { id: "claude-haiku-4-5-20251001", name: "Claude Haiku 4.5 (2025-10-01)" },
  ],
  perplexity: () => [
    { id: "sonar", name: "Sonar (Fast Search)" },
    { id: "sonar-pro", name: "Sonar Pro (Advanced Search)" },
    { id: "sonar-reasoning", name: "Sonar Reasoning (CoT + Search)" },
    { id: "sonar-reasoning-pro", name: "Sonar Reasoning Pro (Advanced CoT + Search)" },
    { id: "sonar-deep-research", name: "Sonar Deep Research (Expert Analysis)" },
  ],
  "bailian-coding-plan": () => [
    { id: "qwen3.5-plus", name: "Qwen3.5 Plus" },
    { id: "qwen3-max-2026-01-23", name: "Qwen3 Max (2026-01-23)" },
    { id: "qwen3-coder-next", name: "Qwen3 Coder Next" },
    { id: "qwen3-coder-plus", name: "Qwen3 Coder Plus" },
    { id: "MiniMax-M2.5", name: "MiniMax M2.5" },
    { id: "glm-5", name: "GLM 5" },
    { id: "glm-4.7", name: "GLM 4.7" },
    { id: "kimi-k2.5", name: "Kimi K2.5" },
  ],
  gitlab: () => [{ id: "gitlab-duo-code-suggestions", name: "GitLab Duo Code Suggestions" }],
  nlpcloud: () =>
    getModelsByProviderId("nlpcloud").map((model) => ({
      id: model.id,
      name: model.name || model.id,
    })),
  qoder: () => getStaticQoderModels(),
};

/**
 * Get static models for a provider (if available).
 * Exported for testing purposes.
 * @param provider - Provider ID
 * @returns Array of models or undefined if provider doesn't use static models
 */
export function getStaticModelsForProvider(provider: string): LocalCatalogModel[] | undefined {
  const staticModelsFn = STATIC_MODEL_PROVIDERS[provider];
  if (staticModelsFn) {
    return staticModelsFn();
  }

  const specialtyModels: LocalCatalogModel[] = [];
  const appendModels = (
    models: Array<{ id: string; name?: string }>,
    metadata?: Pick<LocalCatalogModel, "apiFormat" | "supportedEndpoints">
  ) => {
    for (const model of models) {
      if (specialtyModels.some((existing) => existing.id === model.id)) continue;
      specialtyModels.push({
        id: model.id,
        name: model.name || model.id,
        ...metadata,
      });
    }
  };

  const embeddingProvider = getEmbeddingProvider(provider);
  if (embeddingProvider) {
    appendModels(embeddingProvider.models, {
      apiFormat: "embeddings",
      supportedEndpoints: ["embeddings"],
    });
  }

  const rerankProvider = getRerankProvider(provider);
  if (rerankProvider) {
    appendModels(rerankProvider.models, {
      apiFormat: "rerank",
      supportedEndpoints: ["rerank"],
    });
  }

  const imageProvider = getImageProvider(provider);
  if (imageProvider) {
    appendModels(imageProvider.models);
  }

  const videoProvider = getVideoProvider(provider);
  if (videoProvider) {
    appendModels(videoProvider.models);
  }

  const speechProvider = getSpeechProvider(provider);
  if (speechProvider) {
    appendModels(speechProvider.models);
  }

  const transcriptionProvider = getTranscriptionProvider(provider);
  if (transcriptionProvider) {
    appendModels(transcriptionProvider.models);
  }

  return specialtyModels.length > 0 ? specialtyModels : undefined;
}

// Provider models endpoints configuration
const PROVIDER_MODELS_CONFIG: Record<string, ProviderModelsConfigEntry> = {
  claude: {
    url: "https://api.anthropic.com/v1/models",
    method: "GET",
    headers: {
      "Anthropic-Version": "2023-06-01",
      "Content-Type": "application/json",
    },
    authHeader: "x-api-key",
    parseResponse: (data) => data.data || [],
  },
  gemini: {
    url: "https://generativelanguage.googleapis.com/v1beta/models?pageSize=1000",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authQuery: "key", // Use query param for API key
    parseResponse: (data) => {
      const METHOD_TO_ENDPOINT: Record<string, string> = {
        generateContent: "chat",
        embedContent: "embeddings",
        predict: "images",
        predictLongRunning: "images",
        bidiGenerateContent: "audio",
        generateAnswer: "chat",
      };
      const IGNORED_METHODS = new Set([
        "countTokens",
        "countTextTokens",
        "createCachedContent",
        "batchGenerateContent",
        "asyncBatchEmbedContent",
      ]);

      return (data.models || []).map((m: Record<string, unknown>) => {
        const methods: string[] = Array.isArray(m.supportedGenerationMethods)
          ? m.supportedGenerationMethods
          : [];
        const endpoints = [
          ...new Set(
            methods
              .filter((method) => !IGNORED_METHODS.has(method))
              .map((method) => METHOD_TO_ENDPOINT[method] || "chat")
          ),
        ];
        if (endpoints.length === 0) endpoints.push("chat");

        return {
          ...m,
          id: ((m.name as string) || (m.id as string) || "").replace(/^models\//, ""),
          name: (m.displayName as string) || ((m.name as string) || "").replace(/^models\//, ""),
          supportedEndpoints: endpoints,
          ...(typeof m.inputTokenLimit === "number" ? { inputTokenLimit: m.inputTokenLimit } : {}),
          ...(typeof m.outputTokenLimit === "number"
            ? { outputTokenLimit: m.outputTokenLimit }
            : {}),
          ...(typeof m.description === "string" ? { description: m.description } : {}),
          ...(m.thinking === true ? { supportsThinking: true } : {}),
        };
      });
    },
  },
  // gemini-cli handled via retrieveUserQuota (see GET handler)
  qwen: {
    url: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || [],
  },
  antigravity: {
    url: getAntigravityModelsDiscoveryUrls()[0],
    method: "POST",
    headers: getAntigravityHeaders("models"),
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    body: {},
    parseResponse: (data) => data.models || [],
  },
  openai: {
    url: "https://api.openai.com/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || [],
  },
  openrouter: {
    url: "https://openrouter.ai/api/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || [],
  },
  glhf: {
    url: "https://glhf.chat/api/openai/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
  cablyai: {
    url: "https://cablyai.com/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
  thebai: {
    url: "https://api.theb.ai/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
  fenayai: {
    url: "https://fenayai.com/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
  chutes: {
    url: "https://llm.chutes.ai/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
  clarifai: {
    url: "https://api.clarifai.com/v2/ext/openai/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Key ",
    parseResponse: (data) => normalizeOpenAiLikeModelsResponse(data, "clarifai"),
  },
  kimi: {
    url: "https://api.moonshot.ai/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || [],
  },
  "kimi-coding": {
    ...KIMI_CODING_MODELS_CONFIG,
  },
  "kimi-coding-apikey": {
    ...KIMI_CODING_MODELS_CONFIG,
  },
  anthropic: {
    url: "https://api.anthropic.com/v1/models",
    method: "GET",
    headers: {
      "Anthropic-Version": "2023-06-01",
      "Content-Type": "application/json",
    },
    authHeader: "x-api-key",
    parseResponse: (data) => data.data || [],
  },
  deepseek: {
    url: "https://api.deepseek.com/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
  groq: {
    url: "https://api.groq.com/openai/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
  blackbox: {
    url: "https://api.blackbox.ai/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
  xai: {
    url: "https://api.x.ai/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
  mistral: {
    url: "https://api.mistral.ai/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },

  together: {
    url: "https://api.together.xyz/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
  fireworks: {
    url: "https://api.fireworks.ai/inference/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
  cerebras: {
    url: "https://api.cerebras.ai/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
  cohere: {
    url: "https://api.cohere.com/v2/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
  nvidia: {
    url: "https://integrate.api.nvidia.com/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
  nebius: {
    url: "https://api.tokenfactory.nebius.com/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
  kilocode: {
    url: "https://api.kilo.ai/api/openrouter/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
  "ollama-cloud": {
    url: "https://api.ollama.com/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.models || data.data || [],
  },
  "cloudflare-ai": {
    url: "https://api.cloudflare.com/client/v4/accounts/{accountId}/ai/models/search",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.result || [],
  },
  synthetic: {
    url: "https://api.synthetic.new/openai/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
  "kilo-gateway": {
    url: "https://api.kilo.ai/api/gateway/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
  "opencode-zen": {
    url: "https://opencode.ai/zen/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
  "opencode-go": {
    url: "https://opencode.ai/zen/go/v1/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
  "glm-cn": {
    url: "https://open.bigmodel.cn/api/coding/paas/v4/models",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    authHeader: "Authorization",
    authPrefix: "Bearer ",
    parseResponse: (data) => data.data || data.models || [],
  },
          });

          if (response.ok) {
            const data = await response.json();
            models = isNamedOpenAIStyleProvider(provider)
              ? normalizeOpenAiLikeModelsResponse(data, provider)
              : data.data || data.models || [];
            break; // Success!
          }

          if (response.status === 401 || response.status === 403) {
            lastErrorStatus = response.status;
            throw new Error("auth_failed");
          }
        } catch (err: any) {
          if (err.message === "auth_failed") break; // Don't try other endpoints if auth failed
          const status = getSafeOutboundFetchErrorStatus(err);
          if (status) {
            throw err;
          }
        return NextResponse.json(
          { error: `Failed to fetch models: ${response.status}` },
          { status: response.status }
        );
      }

      const data = await response.json();
      const models = data.data || data.models || [];

      return buildApiDiscoveryResponse(models);
    }

    if (provider === "gemini-cli") {
      const cachedResponse = maybeReturnCachedDiscovery();
      if (cachedResponse) return cachedResponse;

      const autoFetchDisabledResponse = maybeReturnAutoFetchDisabled();
      if (autoFetchDisabledResponse) return autoFetchDisabledResponse;

      // Gemini CLI doesn't have a /models endpoint. Instead, query the quota
      // endpoint to discover available models from the quota buckets.
      if (!accessToken) {
        return NextResponse.json(
          { error: "No access token for Gemini CLI. Please reconnect OAuth." },
          { status: 400 }
        );
      }

      const psd = asRecord(connection.providerSpecificData);
      const projectId = connection.projectId || psd.projectId || null;

      if (!projectId) {
        return NextResponse.json(
          { error: "Gemini CLI project ID not available. Please reconnect OAuth." },
          { status: 400 }
        );
      }

      try {
        const quotaRes = await safeOutboundFetch(
          "https://cloudcode-pa.googleapis.com/v1internal:retrieveUserQuota",
          {
            ...SAFE_OUTBOUND_FETCH_PRESETS.modelsDiscovery,
            guard: getProviderOutboundGuard(),
            proxyConfig: proxy,
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ project: projectId }),
          }
        );

        if (!quotaRes.ok) {
          const errText = await quotaRes.text();
          console.log(`[models] Gemini CLI quota fetch failed (${quotaRes.status}):`, errText);
<<<<<<< Updated upstream
          const fallback = buildDiscoveryFallbackResponse();
          if (fallback) return fallback;
=======
          return NextResponse.json(
            { error: `Failed to fetch Gemini CLI models: ${quotaRes.status}` },
            { status: quotaRes.status }
          );
        }

        const quotaData = await quotaRes.json();
        const buckets: Array<{ modelId?: string; tokenType?: string }> = quotaData.buckets || [];

        const models = buckets
          .filter((b) => b.modelId)
          .map((b) => ({
            id: b.modelId,
            name: b.modelId,
            owned_by: "google",
          }));

    }

    if (isAnthropicCompatibleProvider(provider)) {
      const cachedResponse = maybeReturnCachedDiscovery();
      if (cachedResponse) return cachedResponse;

      const autoFetchDisabledResponse = maybeReturnAutoFetchDisabled();
      if (autoFetchDisabledResponse) return autoFetchDisabledResponse;

      if (isClaudeCodeCompatibleProvider(provider)) {
        return NextResponse.json(
          { error: `Provider ${provider} does not support models listing` },
          { status: 400 }
        );
      }

      let baseUrl = getProviderBaseUrl(connection.providerSpecificData);
      if (!baseUrl) {
        const fallback = buildDiscoveryFallbackResponse({
          cacheWarning: "Base URL unavailable — using cached catalog",
          localWarning: "Base URL unavailable — using local catalog",
        });
        if (fallback) return fallback;
        return NextResponse.json(
          { error: "No base URL configured for Anthropic compatible provider" },
          { status: 400 }
        );
      }

      baseUrl = baseUrl.replace(/\/$/, "");
      if (baseUrl.endsWith("/messages")) {
        baseUrl = baseUrl.slice(0, -9);
      }


      if (!response.ok) {
        const errorText = await response.text();
        console.log(`Error fetching models from ${provider}:`, errorText);
        const fallback = buildDiscoveryFallbackResponse();
        if (fallback) return fallback;
        return NextResponse.json(
          { error: `Failed to fetch models: ${response.status}` },
          { status: response.status }
        );
      }

      const data = await response.json();
      const models = data.data || data.models || [];

    }

    const config =
      provider in PROVIDER_MODELS_CONFIG
        ? PROVIDER_MODELS_CONFIG[provider as keyof typeof PROVIDER_MODELS_CONFIG]
        : undefined;

    // Static model providers (no remote /models API)
    // Qwen OAuth Fallback: The Dashscope /models API rejects OAuth tokens with 401
    if (provider === "qwen" && connection.authType === "oauth") {
      const qwenModels = getModelsByProviderId("qwen");
      return buildResponse({
        provider,
        connectionId,
        models: qwenModels.map((m: any) => ({
          id: m.id,
          name: m.name || m.id,
          owned_by: "qwen",
        })),
        source: "local_catalog",
      });
    }

    const localCatalog = mergeLocalCatalogModels(registryCatalogModels, specialtyCatalogModels);
    if (!config && localCatalog.length > 0) {
      return buildResponse({
        provider,
        connectionId,
        models: localCatalog.map((m) => ({
          id: m.id,
          name: m.name || m.id,
          ...(m.apiFormat ? { apiFormat: m.apiFormat } : {}),
          ...(m.supportedEndpoints ? { supportedEndpoints: m.supportedEndpoints } : {}),
          ...(registryCatalogModels.length > 0 ? { owned_by: provider } : {}),
        })),
        source: "local_catalog",
        warning: "API unavailable — using local catalog",
      });
    }
    if (!config) {
      return NextResponse.json(
        { error: `Provider ${provider} does not support models listing` },
        { status: 400 }
      );
    }

    const cachedResponse = maybeReturnCachedDiscovery();
    if (cachedResponse) return cachedResponse;

    const autoFetchDisabledResponse = maybeReturnAutoFetchDisabled();
    if (autoFetchDisabledResponse) return autoFetchDisabledResponse;

    // Get auth token
    const token = accessToken || apiKey;
    if (!token) {
      const fallback = buildDiscoveryFallbackResponse({
        cacheWarning: "No token configured — using cached catalog",
        localWarning: "No token configured — using local catalog",
      });
      if (fallback) return fallback;
      return NextResponse.json(
        {
          error:
            "No API key configured for this provider. Please add an API key in the provider settings.",
        },
        { status: 400 }
      );
    }

    // Build request URL
    let url = config.url;
    if (provider === "cloudflare-ai") {
      const pData = asRecord(connection.providerSpecificData);
      const accountId =
        (typeof pData.accountId === "string" && pData.accountId) ||
        process.env.CLOUDFLARE_ACCOUNT_ID;
      if (!accountId) {
        return NextResponse.json(
          { error: "Cloudflare Workers AI requires an Account ID in provider settings." },
          { status: 400 }
        );
      }
      url = url.replace("{accountId}", accountId);
    }
    if (config.authQuery) {
      url += `${url.includes("?") ? "&" : "?"}${config.authQuery}=${token}`;
    }

    // Build headers
    const headers = { ...config.headers };
    if (config.authHeader && !config.authQuery) {
      headers[config.authHeader] = (config.authPrefix || "") + token;
    }

    // Make request (with pagination for providers that use nextPageToken, e.g. Gemini)
    const fetchOptions: any = {
      method: config.method,
      headers,
    };

    if (config.body && config.method === "POST") {
      fetchOptions.body = JSON.stringify(config.body);
    }

    let allModels: any[] = [];
    let pageUrl = url;
    let pageCount = 0;
    const MAX_PAGES = 20; // Safety limit
    const seenTokens = new Set<string>();

    while (pageUrl && pageCount < MAX_PAGES) {
      pageCount++;
      let response: Response;
      try {
        response = await safeOutboundFetch(pageUrl, {
          ...SAFE_OUTBOUND_FETCH_PRESETS.modelsPagination,
          guard: getProviderOutboundGuard(),
          proxyConfig: proxy,
          // Ollama Cloud /v1/models returns 301 redirects (#1381)
          ...(provider === "ollama-cloud" ? { allowRedirect: true } : {}),
          ...fetchOptions,
        });
      } catch (error) {
        const fallback = buildDiscoveryErrorFallbackResponse(error);
        if (fallback) return fallback;
        throw error;
      }

      if (!response.ok) {
        const errorText = await response.text();
        console.log(`Error fetching models from ${provider}:`, errorText);
        const fallback = buildDiscoveryFallbackResponse();
        if (fallback) return fallback;
        return NextResponse.json(
          { error: `Failed to fetch models: ${response.status}` },
          { status: response.status }
        );
      }

      const data = await response.json();
      const pageModels = config.parseResponse(data);
      allModels = allModels.concat(pageModels);

      const nextPageToken = data.nextPageToken;
      if (!nextPageToken) break;
      if (seenTokens.has(nextPageToken)) {
        console.warn(`[models] ${provider}: duplicate nextPageToken detected, stopping pagination`);
        break;
      }
      seenTokens.add(nextPageToken);
      pageUrl = `${config.url}${config.url.includes("?") ? "&" : "?"}pageToken=${encodeURIComponent(nextPageToken)}`;
      if (config.authQuery) {
        pageUrl += `&${config.authQuery}=${token}`;
      }
    }

    if (pageCount > 1) {
      console.log(
        `[models] ${provider}: fetched ${allModels.length} models across ${pageCount} pages`
      );
    }

  } catch (error) {
    if (error instanceof SafeOutboundFetchError && error.code === "URL_GUARD_BLOCKED") {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    const status = getSafeOutboundFetchErrorStatus(error);
    if (status) {
      const message = error instanceof Error ? error.message : "Failed to fetch models";
      return NextResponse.json({ error: message }, { status });
    }
    console.log("Error fetching provider models:", error);
    return NextResponse.json({ error: "Failed to fetch models" }, { status: 500 });
  }
}
