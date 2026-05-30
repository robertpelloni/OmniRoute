import { NextResponse } from "next/server";
import { z } from "zod";
import { getDbInstance } from "@/lib/db/core";
import { getComboById, getCombos } from "@/lib/db/combos";
import { getQuotaSnapshots } from "@/lib/db/quotaSnapshots";
import { getComboMetrics } from "@omniroute/open-sse/services/comboMetrics.ts";
import { resolveNestedComboTargets } from "@omniroute/open-sse/services/combo.ts";
=======
import type {
  ComboHealthMetrics,
  ComboHealthResponse,
  QuotaSnapshotRow,
  UtilizationTimeRange,
} from "@/shared/types/utilization";

=======
type ComboModelNode = string | { model?: string | null };

>>>>>>> Stashed changes
type ComboRecord = {
  id?: string;
  name?: string;
  strategy?: string;
  models?: unknown[];
};

type ModelUsageRow = {
  model: string | null;
  requests: number | null;
  totalTokens: number | null;
};

type PerformanceRow = {
  totalRequests: number | null;
  successCount: number | null;
  avgLatencyMs: number | null;
};

type QuotaSnapshotView = {
  connectionId?: string;
  remainingPercentage?: number | null;
  isExhausted?: number;
  createdAt?: string;
};

type ProviderHealth = {
  provider: string;
  remainingPct: number;
  isExhausted: boolean;
  trend: "improving" | "stable" | "declining";
};

type ResolvedComboTargetView = {
  stepId: string;
  executionKey: string;
  modelStr: string;
  provider: string;
  connectionId: string | null;
  label: string | null;
};

type RuntimeTargetMetricView = {
  requests?: number;
  successRate?: number;
  avgLatencyMs?: number;
  lastStatus?: "ok" | "error" | null;
  lastUsedAt?: string | null;
};

type HistoricalTargetUsageRow = {
  combo_execution_key: string | null;
  combo_step_id: string | null;
  status: number | null;
  duration: number | null;
  timestamp: string | null;
};

type HistoricalTargetMetricView = {
  stepId: string | null;
  requests: number;
  successRate: number;
  avgLatencyMs: number;
  lastStatus: "ok" | "error" | null;
  lastUsedAt: string | null;
};

function extractProvider(model: string): string {
  const [provider] = model.split("/");
  return provider?.trim() || "unknown";
}

function toNonEmptyString(value: unknown): string | null {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : null;
}

  const comboId = typeof combo.id === "string" ? combo.id : "";
  const comboName = typeof combo.name === "string" ? combo.name : "";
  if (!comboId || !comboName) return null;

  const targets = resolveNestedComboTargets(combo, allCombos) as ResolvedComboTargetView[];
  const models = targets.map((target) => target.modelStr);
  const providers = Array.from(new Set(targets.map((target) => target.provider)));

  return {
    comboId,
    comboName,
    strategy:
      typeof combo.strategy === "string" && combo.strategy.trim().length > 0
        ? combo.strategy
        : "priority",
    models,
<<<<<<< Updated upstream
    targetHealth: buildTargetHealth(comboName, targets, since),
=======
    quotaHealth: buildQuotaHealth(providers, since),
    usageSkew: buildUsageSkew(comboName, models, since),
    performance: buildPerformance(comboName, since),
  };
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const parsedQuery = querySchema.safeParse({
      range: searchParams.get("range"),
      comboId: searchParams.get("comboId") || undefined,
    });

    if (!parsedQuery.success) {
      return NextResponse.json(
        {
          error: parsedQuery.error.issues[0]?.message ?? "Invalid query parameters",
        },
        { status: 400 }
      );
    }

    const { range, comboId } = parsedQuery.data;
    const since = getRangeStartIso(range);

      if (!combo) {
        return NextResponse.json({ error: "Combo not found" }, { status: 404 });
      }
      combos = [combo];
    } else {
    }

    const response: ComboHealthResponse = {
      timeRange: range,
      combos: combos
        .filter((combo): combo is ComboHealthMetrics => combo !== null),
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching combo health:", error);
    return NextResponse.json({ error: "Failed to fetch combo health" }, { status: 500 });
  }
}
