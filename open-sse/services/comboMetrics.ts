/**
 * In-memory combo metrics tracker
<<<<<<< HEAD
 * Tracks per-combo, per-model, and per-target request counts, latency, success/failure rates.
 * Provides API for reading metrics from the dashboard.
=======
 * Tracks per-combo and per-model request counts, latency, success/failure rates
 * Provides API for reading metrics from the dashboard
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
 */

interface ModelMetrics {
  requests: number;
  successes: number;
  failures: number;
  totalLatencyMs: number;
  lastStatus: "ok" | "error" | null;
  lastUsedAt: string | null;
}

<<<<<<< HEAD
interface ComboTargetMetrics extends ModelMetrics {
  executionKey: string;
  stepId: string | null;
  model: string;
  provider: string | null;
  providerId: string | null;
  connectionId: string | null;
  label: string | null;
}

=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
interface ComboMetricsEntry {
  totalRequests: number;
  totalSuccesses: number;
  totalFailures: number;
  totalFallbacks: number;
  totalLatencyMs: number;
  strategy: string;
  lastUsedAt: string | null;
  intentCounts: Record<string, number>;
  byModel: Record<string, ModelMetrics>;
<<<<<<< HEAD
  byTarget: Record<string, ComboTargetMetrics>;
}

interface ModelMetricsView extends ModelMetrics {
  avgLatencyMs: number;
  successRate: number;
}

interface ComboTargetMetricsView extends ComboTargetMetrics {
  avgLatencyMs: number;
  successRate: number;
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
}

interface ComboMetricsView extends ComboMetricsEntry {
  avgLatencyMs: number;
  successRate: number;
  fallbackRate: number;
<<<<<<< HEAD
  byModel: Record<string, ModelMetricsView>;
  byTarget: Record<string, ComboTargetMetricsView>;
}

export interface ComboRequestTargetMeta {
  executionKey?: string | null;
  stepId?: string | null;
  provider?: string | null;
  providerId?: string | null;
  connectionId?: string | null;
  label?: string | null;
}

function toNonEmptyString(value: unknown): string | null {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : null;
}

function inferProvider(modelStr: string | null): string | null {
  const model = toNonEmptyString(modelStr);
  if (!model) return null;
  const [provider] = model.split("/");
  return toNonEmptyString(provider);
}

function createModelMetrics(): ModelMetrics {
  return {
    requests: 0,
    successes: 0,
    failures: 0,
    totalLatencyMs: 0,
    lastStatus: null,
    lastUsedAt: null,
  };
}

function createComboEntry(strategy: string): ComboMetricsEntry {
  return {
    totalRequests: 0,
    totalSuccesses: 0,
    totalFailures: 0,
    totalFallbacks: 0,
    totalLatencyMs: 0,
    strategy,
    lastUsedAt: null,
    intentCounts: {},
    byModel: {},
    byTarget: {},
  };
}

function applyMetricOutcome(
  metric: ModelMetrics,
  success: boolean,
  latencyMs: number,
  usedAt: string
): void {
  metric.requests++;
  metric.totalLatencyMs += latencyMs;
  metric.lastUsedAt = usedAt;

  if (success) {
    metric.successes++;
    metric.lastStatus = "ok";
    return;
  }

  metric.failures++;
  metric.lastStatus = "error";
}

function buildTargetMetric(
  modelStr: string,
  target: ComboRequestTargetMeta
): ComboTargetMetrics | null {
  const executionKey = toNonEmptyString(target.executionKey) || toNonEmptyString(modelStr);
  const model = toNonEmptyString(modelStr);
  if (!executionKey || !model) return null;

  return {
    executionKey,
    stepId: toNonEmptyString(target.stepId),
    model,
    provider: toNonEmptyString(target.provider) || inferProvider(model),
    providerId: toNonEmptyString(target.providerId),
    connectionId:
      target.connectionId === null ? null : (toNonEmptyString(target.connectionId) ?? null),
    label: target.label === null ? null : (toNonEmptyString(target.label) ?? null),
    ...createModelMetrics(),
  };
}

function toMetricView<T extends ModelMetrics>(
  metric: T
): T & {
  avgLatencyMs: number;
  successRate: number;
} {
  return {
    ...metric,
    avgLatencyMs: metric.requests > 0 ? Math.round(metric.totalLatencyMs / metric.requests) : 0,
    successRate: metric.requests > 0 ? Math.round((metric.successes / metric.requests) * 100) : 0,
  };
=======
  byModel: Record<
    string,
    ModelMetrics & {
      avgLatencyMs: number;
      successRate: number;
    }
  >;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
}

// In-memory store
const metrics = new Map<string, ComboMetricsEntry>();

/**
<<<<<<< HEAD
 * Record a combo request result.
=======
 * Record a combo request result
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
 * @param {string} comboName
 * @param {string} modelStr - The model that handled the request (or null if all failed)
 * @param {Object} options
 * @param {boolean} options.success
 * @param {number} options.latencyMs
 * @param {number} options.fallbackCount - How many fallbacks occurred
<<<<<<< HEAD
 * @param {string} [options.strategy] - Routing strategy name
 * @param {Object} [options.target] - Step/execution metadata for structured combos
=======
 * @param {string} [options.strategy] - "priority" or "weighted"
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
 */
export function recordComboRequest(
  comboName: string,
  modelStr: string | null,
  {
    success,
    latencyMs,
    fallbackCount = 0,
    strategy = "priority",
<<<<<<< HEAD
    target,
  }: {
    success: boolean;
    latencyMs: number;
    fallbackCount?: number;
    strategy?: string;
    target?: ComboRequestTargetMeta | null;
  }
): void {
  if (!metrics.has(comboName)) {
    metrics.set(comboName, createComboEntry(strategy));
=======
  }: { success: boolean; latencyMs: number; fallbackCount?: number; strategy?: string }
): void {
  if (!metrics.has(comboName)) {
    metrics.set(comboName, {
      totalRequests: 0,
      totalSuccesses: 0,
      totalFailures: 0,
      totalFallbacks: 0,
      totalLatencyMs: 0,
      strategy,
      lastUsedAt: null,
      intentCounts: {},
      byModel: {},
    });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  }

  const combo = metrics.get(comboName);
  if (!combo) return;
<<<<<<< HEAD

  const usedAt = new Date().toISOString();
  combo.totalRequests++;
  combo.totalLatencyMs += latencyMs;
  combo.totalFallbacks += fallbackCount;
  combo.lastUsedAt = usedAt;
=======
  combo.totalRequests++;
  combo.totalLatencyMs += latencyMs;
  combo.totalFallbacks += fallbackCount;
  combo.lastUsedAt = new Date().toISOString();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  combo.strategy = strategy;

  if (success) {
    combo.totalSuccesses++;
  } else {
    combo.totalFailures++;
  }

<<<<<<< HEAD
  if (!modelStr) return;

  if (!combo.byModel[modelStr]) {
    combo.byModel[modelStr] = createModelMetrics();
  }
  applyMetricOutcome(combo.byModel[modelStr], success, latencyMs, usedAt);

  const targetMetric = buildTargetMetric(modelStr, target || {});
  if (!targetMetric) return;

  if (!combo.byTarget[targetMetric.executionKey]) {
    combo.byTarget[targetMetric.executionKey] = targetMetric;
  }

  const existingTargetMetric = combo.byTarget[targetMetric.executionKey];
  existingTargetMetric.stepId = targetMetric.stepId || existingTargetMetric.stepId;
  existingTargetMetric.provider = targetMetric.provider || existingTargetMetric.provider;
  existingTargetMetric.providerId = targetMetric.providerId || existingTargetMetric.providerId;
  existingTargetMetric.connectionId =
    target?.connectionId === null
      ? null
      : (targetMetric.connectionId ?? existingTargetMetric.connectionId);
  existingTargetMetric.label =
    target?.label === null ? null : (targetMetric.label ?? existingTargetMetric.label);

  applyMetricOutcome(existingTargetMetric, success, latencyMs, usedAt);
}

/**
 * Get metrics for a specific combo.
=======
  // Per-model tracking
  if (modelStr) {
    if (!combo.byModel[modelStr]) {
      combo.byModel[modelStr] = {
        requests: 0,
        successes: 0,
        failures: 0,
        totalLatencyMs: 0,
        lastStatus: null,
        lastUsedAt: null,
      };
    }
    const modelMetric = combo.byModel[modelStr];
    modelMetric.requests++;
    modelMetric.totalLatencyMs += latencyMs;
    modelMetric.lastUsedAt = new Date().toISOString();

    if (success) {
      modelMetric.successes++;
      modelMetric.lastStatus = "ok";
    } else {
      modelMetric.failures++;
      modelMetric.lastStatus = "error";
    }
  }
}

/**
 * Get metrics for a specific combo
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
 * @param {string} comboName
 * @returns {Object|null}
 */
export function getComboMetrics(comboName: string): ComboMetricsView | null {
  const combo = metrics.get(comboName);
  if (!combo) return null;

  return {
    ...combo,
    avgLatencyMs:
      combo.totalRequests > 0 ? Math.round(combo.totalLatencyMs / combo.totalRequests) : 0,
    successRate:
      combo.totalRequests > 0 ? Math.round((combo.totalSuccesses / combo.totalRequests) * 100) : 0,
    fallbackRate:
      combo.totalRequests > 0 ? Math.round((combo.totalFallbacks / combo.totalRequests) * 100) : 0,
    intentCounts: { ...combo.intentCounts },
    byModel: Object.fromEntries(
<<<<<<< HEAD
      Object.entries(combo.byModel).map(([model, metric]) => [model, toMetricView(metric)])
    ),
    byTarget: Object.fromEntries(
      Object.entries(combo.byTarget).map(([executionKey, metric]) => [
        executionKey,
        toMetricView(metric),
=======
      Object.entries(combo.byModel).map(([model, m]) => [
        model,
        {
          ...m,
          avgLatencyMs: m.requests > 0 ? Math.round(m.totalLatencyMs / m.requests) : 0,
          successRate: m.requests > 0 ? Math.round((m.successes / m.requests) * 100) : 0,
        },
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      ])
    ),
  };
}

/**
<<<<<<< HEAD
 * Get metrics for all combos.
=======
 * Get metrics for all combos
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
 * @returns {Object} Map of comboName → metrics
 */
export function getAllComboMetrics(): Record<string, ComboMetricsView | null> {
  const result: Record<string, ComboMetricsView | null> = {};
  for (const [name] of metrics) {
    result[name] = getComboMetrics(name);
  }
  return result;
}

/**
 * Record detected prompt intent for a combo (used by multilingual routing analytics).
 */
export function recordComboIntent(comboName: string, intent: string): void {
  if (!metrics.has(comboName)) {
<<<<<<< HEAD
    metrics.set(comboName, createComboEntry("priority"));
=======
    metrics.set(comboName, {
      totalRequests: 0,
      totalSuccesses: 0,
      totalFailures: 0,
      totalFallbacks: 0,
      totalLatencyMs: 0,
      strategy: "priority",
      lastUsedAt: null,
      intentCounts: {},
      byModel: {},
    });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  }

  const combo = metrics.get(comboName);
  if (!combo) return;
  const key = String(intent || "unknown");
  combo.intentCounts[key] = (combo.intentCounts[key] || 0) + 1;
}

/**
<<<<<<< HEAD
 * Reset metrics for a specific combo.
=======
 * Reset metrics for a specific combo
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
 */
export function resetComboMetrics(comboName: string): void {
  metrics.delete(comboName);
}

/**
<<<<<<< HEAD
 * Reset all combo metrics.
=======
 * Reset all combo metrics
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
 */
export function resetAllComboMetrics(): void {
  metrics.clear();
}
