import { NextResponse } from "next/server";
import { getProviderConnectionById } from "@/models";
<<<<<<< HEAD
import { getSyncedAvailableModelsForConnection } from "@/lib/db/models";
import {
  importManagedModels,
  type ManagedModelImportMode,
} from "@/lib/providerModels/managedModelImport";
=======
import { getCustomModels, replaceCustomModels } from "@/lib/db/models";
=======
import {
  getCustomModels,
  replaceCustomModels,
  replaceSyncedAvailableModelsForConnection,
} from "@/lib/db/models";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import {
  syncManagedAvailableModelAliases,
  usesManagedAvailableModels,
} from "@/lib/providerModels/managedAvailableModels";
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import { saveCallLog } from "@/lib/usage/callLogs";
import { isAuthenticated } from "@/shared/utils/apiAuth";
import {
  buildModelSyncInternalHeaders,
  isModelSyncInternalRequest,
} from "@/shared/services/modelSyncScheduler";
<<<<<<< HEAD
import { GET as getProviderModels } from "../models/route";
=======
import { getModelsByProviderId } from "@/shared/constants/models";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

type JsonRecord = Record<string, unknown>;

function asRecord(value: unknown): JsonRecord {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as JsonRecord) : {};
}

function toNonEmptyString(value: unknown): string | null {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : null;
}

function normalizeModelForComparison(model: unknown) {
  const record = asRecord(model);
  const id = toNonEmptyString(record.id) || "";
  const name = toNonEmptyString(record.name) || id;
<<<<<<< HEAD
  const rawSource = toNonEmptyString(record.source)?.toLowerCase();
  const source =
    rawSource === "api-sync" || rawSource === "auto-sync" || rawSource === "imported"
      ? "imported"
      : rawSource || "manual";
=======
  const source = toNonEmptyString(record.source) || "auto-sync";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  const apiFormat = toNonEmptyString(record.apiFormat) || "chat-completions";
  const supportedEndpoints = Array.isArray(record.supportedEndpoints)
    ? Array.from(
        new Set(
          record.supportedEndpoints
            .map((endpoint) => toNonEmptyString(endpoint))
            .filter((endpoint): endpoint is string => Boolean(endpoint))
        )
      ).sort()
    : ["chat"];

  return {
    id,
    name,
    source,
    apiFormat,
    supportedEndpoints,
  };
}

<<<<<<< HEAD
function isManagedSyncedModel(model: unknown) {
  const record = asRecord(model);
  const source = toNonEmptyString(record.source)?.toLowerCase();
  return source === "api-sync" || source === "auto-sync" || source === "imported";
}

function getErrorMessageFromPayload(payload: JsonRecord): string | null {
  const error = payload.error;
  if (typeof error === "string" && error.trim().length > 0) {
    return error.trim();
  }

  const errorRecord = asRecord(error);
  return toNonEmptyString(errorRecord.message) || toNonEmptyString(payload.message);
}

async function readJsonResponse(response: Response): Promise<{
  data: JsonRecord;
  parseError: string | null;
}> {
  const body = await response.text();
  if (!body.trim()) {
    return {
      data: {},
      parseError: "Empty response body from /models",
    };
  }

  try {
    return {
      data: asRecord(JSON.parse(body)),
      parseError: null,
    };
  } catch {
    return {
      data: {},
      parseError: "Invalid JSON response from /models",
    };
  }
}

=======
function summarizeModelChanges(previousModels: unknown, nextModels: unknown) {
  const previousList = Array.isArray(previousModels) ? previousModels : [];
  const nextList = Array.isArray(nextModels) ? nextModels : [];

  const previousMap = new Map(
    previousList
      .map((model) => normalizeModelForComparison(model))
      .filter((model) => model.id)
      .map((model) => [model.id, JSON.stringify(model)])
  );
  const nextMap = new Map(
    nextList
      .map((model) => normalizeModelForComparison(model))
      .filter((model) => model.id)
      .map((model) => [model.id, JSON.stringify(model)])
  );

  let added = 0;
  let removed = 0;
  let updated = 0;

  for (const [id, nextValue] of nextMap.entries()) {
    const previousValue = previousMap.get(id);
    if (!previousValue) {
      added += 1;
      continue;
    }
    if (previousValue !== nextValue) {
      updated += 1;
    }
  }

  for (const id of previousMap.keys()) {
    if (!nextMap.has(id)) {
      removed += 1;
    }
  }

  return {
    added,
    removed,
    updated,
    total: added + removed + updated,
  };
}

function getModelSyncChannelLabel(connection: unknown) {
  const record = asRecord(connection);
  const providerSpecificData = asRecord(record.providerSpecificData);

  return (
    toNonEmptyString(record.displayName) ||
    toNonEmptyString(record.email) ||
    toNonEmptyString(providerSpecificData.tag) ||
    toNonEmptyString(record.name) ||
    toNonEmptyString(record.provider) ||
    (toNonEmptyString(record.id) ? `connection:${String(record.id).slice(0, 8)}` : null) ||
    "unknown"
  );
}

/**
 * POST /api/providers/[id]/sync-models
 *
 * Fetches the model list from a provider's /models endpoint and replaces the
 * full custom models list for that provider. Successful syncs only write a
 * call log when the fetched channel actually changes the stored model list.
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
 *
 * Used by:
 * - modelSyncScheduler (auto-sync on interval)
 * - Manual trigger from UI
 */
export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const start = Date.now();
  const { id } = await params;
<<<<<<< HEAD
  const mode = (
    new URL(request.url).searchParams.get("mode") === "import" ? "merge" : "sync"
  ) as ManagedModelImportMode;
=======
  let logProvider = "unknown";
  let channelLabel: string | null = null;

  try {
    if (!(await isAuthenticated(request)) && !isModelSyncInternalRequest(request)) {
      return NextResponse.json(
        { error: { message: "Authentication required", type: "invalid_api_key" } },
        { status: 401 }
      );
    }

    const connection = await getProviderConnectionById(id);
    if (!connection) {
      return NextResponse.json({ error: "Connection not found" }, { status: 404 });
    }

    logProvider = toNonEmptyString(connection.provider) || "unknown";
    channelLabel = getModelSyncChannelLabel(connection);

    // Fetch models from the existing /api/providers/[id]/models endpoint.
    // Construct a safe localhost URL from the incoming request's origin.
    // The route only accepts authenticated or internal-scheduler requests,
    // and the path is hardcoded — no user-controlled URL components reach fetch.
    const SAFE_HOSTS = new Set(["localhost", "127.0.0.1", "0.0.0.0", "::1"]);
    const incomingUrl = new URL(request.url);
    const safeOrigin = SAFE_HOSTS.has(incomingUrl.hostname)
      ? incomingUrl.origin
      : `http://127.0.0.1:${process.env.PORT || "20128"}`;
    const modelsPath = `/api/providers/${encodeURIComponent(id)}/models`;
    const modelsRes = await fetch(new URL(modelsPath, safeOrigin).href, {
      method: "GET",
      headers: {
        cookie: request.headers.get("cookie") || "",
        ...buildModelSyncInternalHeaders(),
      },
    });

    const duration = Date.now() - start;
    const modelsData = await modelsRes.json();

    if (!modelsRes.ok) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      // Log the failed attempt
      await saveCallLog({
        method: "GET",
        path: `/api/providers/${id}/models`,
        status: modelsRes.status,
        model: "model-sync",
        provider: logProvider,
        sourceFormat: "-",
        connectionId: id,
        duration,
<<<<<<< HEAD
        error: logError,
        requestType: "model-sync",
        ...(parseError
          ? {
              responseBody: {
                upstreamStatus: modelsRes.status,
                parseError,
              },
            }
          : {}),
      });

      return NextResponse.json(
        {
          error: responseError,
          ...(parseError ? { upstreamStatus: modelsRes.status } : {}),
        },
        { status: responseStatus }
=======
        error: modelsData.error || `HTTP ${modelsRes.status}`,
        requestType: "model-sync",
      });

      return NextResponse.json(
        { error: modelsData.error || "Failed to fetch models" },
        { status: modelsRes.status }
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      );
    }

    const fetchedModels = modelsData.models || [];
<<<<<<< HEAD
    const {
      previousModels,
      previousSyncedAvailableModels,
      persistedModels,
      importedModels,
      discoveredModels,
      syncedAvailableModels,
      syncedAliases,
      importedChanges,
    } = await importManagedModels({
      providerId: logProvider,
      connectionId: id,
      fetchedModels,
      mode,
      previousSyncedAvailableModels: previousSyncedAvailableModelsForConnection,
    });

    const effectiveAvailableModels =
      discoveredModels.length > 0 ? discoveredModels : syncedAvailableModels;
    const modelChanges = summarizeModelChanges(
      previousSyncedAvailableModels,
      effectiveAvailableModels
    );
    const customModelChanges = summarizeModelChanges(previousModels, persistedModels);
    const syncedModelsCount =
      effectiveAvailableModels.length > 0
        ? effectiveAvailableModels.length
        : persistedModels.filter((model) => isManagedSyncedModel(model)).length;
    const availableModelsCount = new Set(
      [...persistedModels, ...effectiveAvailableModels]
        .map((model) => toNonEmptyString(asRecord(model).id))
        .filter((modelId): modelId is string => Boolean(modelId))
    ).size;
    const importedCount = importedChanges.added;
    const updatedCount = importedChanges.updated;
    const shouldLog = modelChanges.total > 0 || customModelChanges.total > 0;

    if (shouldLog) {
=======

    // Filter out models already in the built-in registry
    const registryIds = new Set(getModelsByProviderId(logProvider).map((m: any) => m.id));

    // Replace the full model list
    const models = fetchedModels
      .map((m: any) => ({
        id: m.id || m.name || m.model,
        name: m.name || m.displayName || m.id || m.model,
        source: "auto-sync",
        ...(Array.isArray(m.supportedEndpoints) && m.supportedEndpoints.length > 0
          ? { supportedEndpoints: m.supportedEndpoints }
          : {}),
        ...(typeof m.inputTokenLimit === "number" ? { inputTokenLimit: m.inputTokenLimit } : {}),
        ...(typeof m.outputTokenLimit === "number" ? { outputTokenLimit: m.outputTokenLimit } : {}),
        ...(typeof m.description === "string" ? { description: m.description } : {}),
        ...(m.supportsThinking === true ? { supportsThinking: true } : {}),
      }))
      .filter((m: any) => m.id && !registryIds.has(m.id));

    const previousModels = await getCustomModels(logProvider);
    const replaced = await replaceCustomModels(logProvider, models);

    // For Gemini: also write to syncedAvailableModels (unioned across API keys)
    if (logProvider === "gemini") {
      try {
        const syncedModels = models.map((m: any) => ({
          id: m.id,
          name: m.name || m.id,
          source: "api-sync" as const,
          ...(m.supportedEndpoints ? { supportedEndpoints: m.supportedEndpoints } : {}),
          ...(typeof m.inputTokenLimit === "number" ? { inputTokenLimit: m.inputTokenLimit } : {}),
          ...(typeof m.outputTokenLimit === "number"
            ? { outputTokenLimit: m.outputTokenLimit }
            : {}),
          ...(typeof m.description === "string" ? { description: m.description } : {}),
          ...(m.supportsThinking === true ? { supportsThinking: true } : {}),
        }));
        await replaceSyncedAvailableModelsForConnection(logProvider, id, syncedModels);
      } catch (e) {
        console.error("Failed to union synced available models for gemini:", e);
      }
    }

    const modelChanges = summarizeModelChanges(previousModels, replaced);

    let syncedAliases = 0;
    if (usesManagedAvailableModels(logProvider)) {
      const aliasSync = await syncManagedAvailableModelAliases(
        logProvider,
        models.map((model: any) => model.id)
      );
      syncedAliases = aliasSync.assignedAliases.length;
    }

    if (modelChanges.total > 0) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      await saveCallLog({
        method: "GET",
        path: `/api/providers/${id}/models`,
        status: 200,
        model: "model-sync",
        provider: logProvider,
        sourceFormat: "-",
        connectionId: id,
        duration: Date.now() - start,
        requestType: "model-sync",
        responseBody: {
<<<<<<< HEAD
          syncedModels: syncedModelsCount,
          availableModelsCount,
=======
          syncedModels: models.length,
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          syncedAliases,
          provider: logProvider,
          channel: channelLabel,
          modelChanges,
<<<<<<< HEAD
<<<<<<< Updated upstream
          customModelChanges,
          importedCount,
          updatedCount,
          mode,
=======
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        },
      });
    }

    return NextResponse.json({
      ok: true,
      provider: logProvider,
<<<<<<< HEAD
=======
      syncedModels: replaced.length,
      syncedAliases,
      modelChanges,
      logged: modelChanges.total > 0,
      models: replaced,
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    });
  } catch (error: any) {
    // Log error
    await saveCallLog({
      method: "POST",
      path: `/api/providers/${id}/sync-models`,
      status: 500,
      model: "model-sync",
      provider: logProvider,
      sourceFormat: "-",
      connectionId: id,
      duration: Date.now() - start,
      error: error.message || "Sync failed",
      requestType: "model-sync",
      ...(channelLabel
        ? {
            responseBody: {
              channel: channelLabel,
            },
          }
        : {}),
    }).catch(() => {});

    return NextResponse.json({ error: error.message || "Failed to sync models" }, { status: 500 });
  }
}
