import { NextResponse } from "next/server";
<<<<<<< HEAD
=======
import { getUsageDb } from "@/lib/usageDb";
import { computeAnalytics } from "@/lib/usageAnalytics";
import { getDbInstance } from "@/lib/db/core";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

function getRangeStartIso(range: string): string | null {
  const end = new Date();
  const start = new Date(end);

  switch (range) {
    case "1d":
      start.setDate(start.getDate() - 1);
      break;
    case "7d":
      start.setDate(start.getDate() - 7);
      break;
    case "30d":
      start.setDate(start.getDate() - 30);
      break;
    case "90d":
      start.setDate(start.getDate() - 90);
      break;
    case "ytd":
      start.setMonth(0, 1);
      start.setHours(0, 0, 0, 0);
      break;
    case "all":
    default:
      return null;
  }

  return start.toISOString();
}

<<<<<<< HEAD
const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type PricingByProvider = Record<string, Record<string, Record<string, unknown>>>;
type ComputeCostFromPricing = (
  pricing: Record<string, unknown> | null | undefined,
  tokens: Record<string, number | undefined> | null | undefined
) => number;

function toNumber(value: unknown): number {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim().length > 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
}

function toStringValue(value: unknown, fallback = ""): string {
  return typeof value === "string" && value.trim().length > 0 ? value : fallback;
}

function roundCost(value: number): number {
  return Math.round(value * 1_000_000) / 1_000_000;
}

function appendWhereCondition(whereClause: string, condition: string): string {
  return whereClause ? `${whereClause} AND (${condition})` : `WHERE (${condition})`;
}

function findKeyInsensitive(obj: Record<string, any> | undefined | null, key: string): any {
  if (!obj || !key) return undefined;
  return obj[key.toLowerCase()];
}

function uniqueValues(values: Array<string | null | undefined>): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const value of values) {
    const normalized = typeof value === "string" ? value.trim().toLowerCase() : "";
    if (!normalized || seen.has(normalized)) continue;
    seen.add(normalized);
    result.push(normalized);
  }
  return result;
}

function stripCodexEffortSuffix(model: string): string {
  return model.replace(/-(?:xhigh|high|medium|low|none)$/i, "");
}

function getPricingModelCandidates(
  model: string,
  normalizeModelName: (model: string) => string
): string[] {
  const normalizedModel = normalizeModelName(model);
  const lowerModel = model.toLowerCase();
  const lowerNormalized = normalizedModel.toLowerCase();
  const hyphenModel = lowerModel.replace(/\./g, "-");
  const hyphenNormalized = lowerNormalized.replace(/\./g, "-");
  const effortBaseModel = stripCodexEffortSuffix(lowerNormalized);

  return uniqueValues([
    lowerModel,
    lowerNormalized,
    hyphenModel,
    hyphenNormalized,
    effortBaseModel,
    effortBaseModel.replace(/\./g, "-"),
    lowerNormalized === "codex-auto-review" ? "gpt-5.5" : null,
  ]);
}

function resolveModelPricing(
  pricingByProvider: PricingByProvider,
  providerAliasMap: Record<string, string>,
  providerRaw: string,
  model: string,
  normalizeModelName: (model: string) => string
): Record<string, unknown> | null {
  const pLower = (providerRaw || "").toLowerCase();

  let providerPricing = findKeyInsensitive(pricingByProvider, pLower);

  if (!providerPricing) {
    // providerAliasMap maps ID -> ALIAS. So if pLower is "codex", alias is "cx".
    const alias = providerAliasMap[pLower];
    if (alias) {
      providerPricing = findKeyInsensitive(pricingByProvider, alias);
    }
  }

  if (!providerPricing) {
    // In case pLower was ALIAS and we want to try the ID (reverse search values)
    for (const [id, alias] of Object.entries(providerAliasMap)) {
      if (alias.toLowerCase() === pLower) {
        providerPricing = findKeyInsensitive(pricingByProvider, id);
        if (providerPricing) break;
      }
    }
  }

  if (!providerPricing) {
    const np = pLower.replace(/-cn$/, "");
    if (np && np !== pLower) {
      providerPricing = findKeyInsensitive(pricingByProvider, np);
    }
  }

  // Hardcoded known fallbacks
  if (!providerPricing) {
    if (pLower === "antigravity") providerPricing = findKeyInsensitive(pricingByProvider, "ag");
  }

  const modelCandidates = getPricingModelCandidates(model, normalizeModelName);

  const tryFind = (prov: Record<string, unknown> | null | undefined) => {
    if (!prov || typeof prov !== "object") return null;
    for (const candidate of modelCandidates) {
      const pricing = findKeyInsensitive(prov as Record<string, unknown>, candidate);
      if (pricing) return pricing;
    }
    return null;
  };

  let pricing = providerPricing ? tryFind(providerPricing) : null;

  if (!pricing) {
    // Global fallback: search all providers for this exact model (helps with aliases)
    for (const prov of Object.values(pricingByProvider)) {
      const found = tryFind(prov as Record<string, unknown>);
      if (found) {
        pricing = found;
        break;
      }
    }
  }

  // Last resort fallback for historical usage (e.g. "gpt-4" missing, matches "gpt-4.1" or first available)
  if (!pricing && providerPricing && typeof providerPricing === "object") {
    for (const [key, val] of Object.entries(providerPricing as Record<string, unknown>)) {
      const lm = model.toLowerCase();
      if (key.includes(lm) || lm.includes(key)) {
        pricing = val;
        break;
      }
    }
    if (!pricing) {
      const keys = Object.keys(providerPricing as Record<string, unknown>);
      if (keys.length > 0) pricing = (providerPricing as Record<string, unknown>)[keys[0]];
    }
  }

  return pricing as Record<string, unknown> | null;
}

function computeUsageRowCost(
  row: Record<string, unknown>,
  pricingByProvider: PricingByProvider,
  providerAliasMap: Record<string, string>,
  normalizeModelName: (model: string) => string,
  computeCostFromPricing: ComputeCostFromPricing
): number {
  const provider = toStringValue(row.provider);
  const model = toStringValue(row.model);
  if (!provider || !model) return 0;

  const pricing = resolveModelPricing(
    pricingByProvider,
    providerAliasMap,
    provider,
    model,
    normalizeModelName
  );
  if (!pricing) return 0;

  return computeCostFromPricing(pricing, {
    input: toNumber(row.promptTokens),
    output: toNumber(row.completionTokens),
    cacheRead: toNumber(row.cacheReadTokens),
    cacheCreation: toNumber(row.cacheCreationTokens),
    reasoning: toNumber(row.reasoningTokens),
  });
}

function formatUtcDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

function computeActivityStreak(activityMap: Record<string, number>): number {
  const cursor = new Date();
  let streak = 0;

  while ((activityMap[formatUtcDate(cursor)] || 0) > 0) {
    streak += 1;
    cursor.setUTCDate(cursor.getUTCDate() - 1);
  }

  return streak;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const range = searchParams.get("range") || "30d";
    const startDate = searchParams.get("startDate") || undefined;
    const endDate = searchParams.get("endDate") || undefined;
    const apiKeyIdsParam = searchParams.get("apiKeyIds") || "";
    const apiKeyIds = apiKeyIdsParam ? apiKeyIdsParam.split(",").filter(Boolean) : [];

    const sinceIso = startDate || getRangeStartIso(range);
    const untilIso = endDate || null;
    const presetsParam = searchParams.get("presets");

    const db = getDbInstance();

    const conditions = [];
    const params: Record<string, string> = {};

    if (sinceIso) {
      conditions.push("timestamp >= @since");
      params.since = sinceIso;
    }
    if (untilIso) {
      conditions.push("timestamp <= @until");
      params.until = untilIso;
    }

=======
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const range = searchParams.get("range") || "30d";

    // Cap history load to last 365 days — the heatmap never looks beyond that,
    // and all named ranges (1d/7d/30d/90d/ytd) fall within this window.
    const heatmapSince = new Date();
    heatmapSince.setDate(heatmapSince.getDate() - 365);
    const db = await getUsageDb(heatmapSince.toISOString());
    const history = db.data.history || [];

    // Build connection map for account names
    const { getProviderConnections } = await import("@/lib/localDb");
    const connectionMap: Record<string, string> = {};
    try {
      const connections = await getProviderConnections();
      for (const connRaw of connections as unknown[]) {
        const conn =
          connRaw && typeof connRaw === "object" && !Array.isArray(connRaw)
            ? (connRaw as Record<string, unknown>)
            : {};
        const connectionId =
          typeof conn.id === "string" && conn.id.trim().length > 0 ? conn.id : null;
        if (!connectionId) continue;

        const name =
          (typeof conn.name === "string" && conn.name.trim()) ||
          (typeof conn.email === "string" && conn.email.trim()) ||
          connectionId;
        connectionMap[connectionId] = name;
      }
    } catch {
      /* ignore */
    }

    const analytics: any = await computeAnalytics(history, range, connectionMap);

    // T01: fallback transparency metrics from call_logs (requested_model vs routed model).
    try {
      const db = getDbInstance();
      const sinceIso = getRangeStartIso(range);
      const whereClause = sinceIso ? "WHERE timestamp >= @since" : "";
      const row = db
        .prepare(
          `
          SELECT
            COUNT(*) as total,
            SUM(CASE WHEN requested_model IS NOT NULL AND requested_model != '' THEN 1 ELSE 0 END) as with_requested,
            SUM(CASE
              WHEN requested_model IS NOT NULL
               AND requested_model != ''
               AND model IS NOT NULL
               AND requested_model != model
              THEN 1 ELSE 0 END
            ) as fallbacks
          FROM call_logs
          ${whereClause}
        `
        )
        .get(sinceIso ? { since: sinceIso } : {}) as
        | { total?: number; with_requested?: number; fallbacks?: number }
        | undefined;

      const total = Number(row?.total || 0);
      const withRequested = Number(row?.with_requested || 0);
      const fallbackCount = Number(row?.fallbacks || 0);

      analytics.summary.fallbackCount = fallbackCount;
      analytics.summary.fallbackRatePct =
        withRequested > 0 ? Number(((fallbackCount / withRequested) * 100).toFixed(2)) : 0;
      analytics.summary.requestedModelCoveragePct =
        total > 0 ? Number(((withRequested / total) * 100).toFixed(2)) : 0;
    } catch {
      analytics.summary.fallbackCount = 0;
      analytics.summary.fallbackRatePct = 0;
      analytics.summary.requestedModelCoveragePct = 0;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    }

    return NextResponse.json(analytics);
  } catch (error) {
    console.error("Error computing analytics:", error);
    return NextResponse.json({ error: "Failed to compute analytics" }, { status: 500 });
  }
}
