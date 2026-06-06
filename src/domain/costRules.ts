/**
 * Cost Rules — Domain Layer (T-19)
 *
 * Business rules for cost management: budget thresholds,
<<<<<<< HEAD
 * scheduled reset windows, and cost summaries per API key.
 *
 * State is persisted in SQLite via domainState.ts.
=======
 * quota checking, and cost summaries per API key.
 *
 * State is persisted in SQLite via domainState.js.
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
 *
 * @module domain/costRules
 */

import {
<<<<<<< HEAD
  deleteAllCostData,
  deleteBudget as dbDeleteBudget,
  deleteCostEntries,
  loadAllBudgets,
  loadBudget,
  loadCostEntries,
  loadCostEntriesInRange,
  saveBudget,
  saveBudgetResetLog,
} from "../lib/db/domainState";
import {
  discardSpendBatchEntries,
  resetSpendBatchWriterForTests,
  spendBatchWriter,
} from "@/lib/spend/batchWriter";

export type BudgetResetInterval = "daily" | "weekly" | "monthly";

interface BudgetConfig {
  dailyLimitUsd?: number;
  weeklyLimitUsd?: number;
  monthlyLimitUsd?: number;
  warningThreshold?: number;
  resetInterval?: BudgetResetInterval;
  resetTime?: string;
  budgetResetAt?: number | null;
  lastBudgetResetAt?: number | null;
  warningEmittedAt?: number | null;
  warningPeriodStart?: number | null;
}

interface NormalizedBudgetConfig {
  dailyLimitUsd: number;
  weeklyLimitUsd: number;
  monthlyLimitUsd: number;
  warningThreshold: number;
  resetInterval: BudgetResetInterval;
  resetTime: string;
  budgetResetAt: number | null;
  lastBudgetResetAt: number | null;
  warningEmittedAt: number | null;
  warningPeriodStart: number | null;
=======
  saveBudget,
  loadBudget,
  saveCostEntry,
  loadCostEntries,
  deleteAllCostData,
  deleteBudget as dbDeleteBudget,
  deleteCostEntries,
} from "../lib/db/domainState";

interface BudgetConfig {
  dailyLimitUsd: number;
  monthlyLimitUsd?: number;
  warningThreshold?: number;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
}

interface CostEntry {
  cost: number;
  timestamp: number;
}

<<<<<<< HEAD
interface BudgetWindow {
  periodStartAt: number;
  nextResetAt: number;
}

interface SyncBudgetScheduleOptions {
  logReset?: boolean;
  persist?: boolean;
}

interface BudgetSummary {
  dailyTotal: number;
  monthlyTotal: number;
  totalEntries: number;
  budget: NormalizedBudgetConfig | null;
  totalCostToday: number;
  totalCostMonth: number;
  totalCostPeriod: number;
  activeLimitUsd: number;
  resetInterval: BudgetResetInterval | null;
  resetTime: string | null;
  budgetResetAt: number | null;
  lastBudgetResetAt: number | null;
  periodStartAt: number | null;
  nextResetAt: number | null;
  dailyLimitUsd: number;
  weeklyLimitUsd: number;
  monthlyLimitUsd: number;
  warningThreshold: number | null;
}

const VALID_RESET_INTERVALS = new Set<BudgetResetInterval>(["daily", "weekly", "monthly"]);
const RESET_TIME_REGEX = /^(\d{2}):(\d{2})$/;

/** @type {Map<string, NormalizedBudgetConfig>} In-memory cache for budgets */
const budgets = new Map<string, NormalizedBudgetConfig>();

function toNumber(value: unknown, fallback = 0): number {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim().length > 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }
  return fallback;
}

=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
function toCostEntries(value: unknown): CostEntry[] {
  if (!Array.isArray(value)) return [];
  const entries: CostEntry[] = [];
  for (const item of value) {
    if (!item || typeof item !== "object" || Array.isArray(item)) continue;
    const record = item as Record<string, unknown>;
<<<<<<< HEAD
    const cost = toNumber(record.cost, Number.NaN);
    const timestamp = toNumber(record.timestamp, Number.NaN);
=======
    const cost = typeof record.cost === "number" ? record.cost : Number(record.cost ?? 0);
    const timestamp =
      typeof record.timestamp === "number" ? record.timestamp : Number(record.timestamp ?? 0);
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    if (!Number.isFinite(cost) || !Number.isFinite(timestamp)) continue;
    entries.push({ cost, timestamp });
  }
  return entries;
}

<<<<<<< HEAD
function sumEntries(entries: CostEntry[]): number {
  return entries.reduce((sum, entry) => sum + entry.cost, 0);
}

function normalizeResetInterval(value: unknown): BudgetResetInterval {
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase() as BudgetResetInterval;
    if (VALID_RESET_INTERVALS.has(normalized)) {
      return normalized;
    }
  }
  return "daily";
}

function normalizeResetTime(value: unknown): string {
  if (typeof value === "string") {
    const match = value.trim().match(RESET_TIME_REGEX);
    if (match) {
      const hours = Math.min(Math.max(parseInt(match[1], 10), 0), 23);
      const minutes = Math.min(Math.max(parseInt(match[2], 10), 0), 59);
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
    }
  }
  return "00:00";
}

function normalizeTimestamp(value: unknown): number | null {
  const numeric = toNumber(value, Number.NaN);
  return Number.isFinite(numeric) && numeric > 0 ? numeric : null;
}

function normalizeBudgetConfig(config: BudgetConfig): NormalizedBudgetConfig {
  return {
    dailyLimitUsd: Math.max(0, toNumber(config.dailyLimitUsd)),
    weeklyLimitUsd: Math.max(0, toNumber(config.weeklyLimitUsd)),
    monthlyLimitUsd: Math.max(0, toNumber(config.monthlyLimitUsd)),
    warningThreshold: Math.min(Math.max(toNumber(config.warningThreshold, 0.8), 0), 1),
    resetInterval: normalizeResetInterval(config.resetInterval),
    resetTime: normalizeResetTime(config.resetTime),
    budgetResetAt: normalizeTimestamp(config.budgetResetAt),
    lastBudgetResetAt: normalizeTimestamp(config.lastBudgetResetAt),
    warningEmittedAt: normalizeTimestamp(config.warningEmittedAt),
    warningPeriodStart: normalizeTimestamp(config.warningPeriodStart),
  };
}

function getResetTimeParts(resetTime: string): [number, number] {
  const match = resetTime.match(RESET_TIME_REGEX);
  if (!match) return [0, 0];
  return [parseInt(match[1], 10), parseInt(match[2], 10)];
}

function getUtcDateMs(year: number, month: number, day: number, hours: number, minutes: number) {
  return Date.UTC(year, month, day, hours, minutes, 0, 0);
}

export function getBudgetWindow(
  resetInterval: BudgetResetInterval,
  resetTime = "00:00",
  now = Date.now()
): BudgetWindow {
  const current = new Date(now);
  const [hours, minutes] = getResetTimeParts(normalizeResetTime(resetTime));
  const year = current.getUTCFullYear();
  const month = current.getUTCMonth();
  const day = current.getUTCDate();

  if (resetInterval === "weekly") {
    const daysSinceMonday = (current.getUTCDay() + 6) % 7;
    const thisWeekReset = getUtcDateMs(year, month, day - daysSinceMonday, hours, minutes);
    return now >= thisWeekReset
      ? {
          periodStartAt: thisWeekReset,
          nextResetAt: getUtcDateMs(year, month, day - daysSinceMonday + 7, hours, minutes),
        }
      : {
          periodStartAt: getUtcDateMs(year, month, day - daysSinceMonday - 7, hours, minutes),
          nextResetAt: thisWeekReset,
        };
  }

  if (resetInterval === "monthly") {
    const thisMonthReset = getUtcDateMs(year, month, 1, hours, minutes);
    return now >= thisMonthReset
      ? {
          periodStartAt: thisMonthReset,
          nextResetAt: getUtcDateMs(year, month + 1, 1, hours, minutes),
        }
      : {
          periodStartAt: getUtcDateMs(year, month - 1, 1, hours, minutes),
          nextResetAt: thisMonthReset,
        };
  }

  const todayReset = getUtcDateMs(year, month, day, hours, minutes);
  return now >= todayReset
    ? {
        periodStartAt: todayReset,
        nextResetAt: getUtcDateMs(year, month, day + 1, hours, minutes),
      }
    : {
        periodStartAt: getUtcDateMs(year, month, day - 1, hours, minutes),
        nextResetAt: todayReset,
      };
}

function getActiveBudgetLimit(budget: NormalizedBudgetConfig): number {
  if (budget.resetInterval === "monthly") {
    return budget.monthlyLimitUsd > 0 ? budget.monthlyLimitUsd : budget.dailyLimitUsd;
  }
  if (budget.resetInterval === "weekly") {
    return budget.weeklyLimitUsd > 0 ? budget.weeklyLimitUsd : budget.dailyLimitUsd;
  }
  return budget.dailyLimitUsd;
}

function getBudgetWindowTotal(apiKeyId: string, periodStartAt: number): number {
  try {
    return (
      sumEntries(toCostEntries(loadCostEntries(apiKeyId, periodStartAt))) +
      spendBatchWriter.getPendingCostTotal(apiKeyId, periodStartAt)
    );
  } catch {
    return 0;
  }
}

function getBudgetWindowRangeTotal(
  apiKeyId: string,
  periodStartAt: number,
  periodEndAt: number
): number {
  try {
    return (
      sumEntries(toCostEntries(loadCostEntriesInRange(apiKeyId, periodStartAt, periodEndAt))) +
      spendBatchWriter.getPendingCostTotal(apiKeyId, periodStartAt, periodEndAt)
    );
  } catch {
    return 0;
  }
}

function emitBudgetWarning(
  apiKeyId: string,
  budget: NormalizedBudgetConfig,
  projectedTotal: number,
  activeLimitUsd: number,
  nextResetAt: number
) {
  const percentage =
    activeLimitUsd > 0 ? ((projectedTotal / activeLimitUsd) * 100).toFixed(1) : "0.0";
  console.warn(
    `[BudgetWarning] ${apiKeyId} reached ${percentage}% of ${budget.resetInterval} budget ($${projectedTotal.toFixed(4)} / $${activeLimitUsd.toFixed(2)}) — next reset ${new Date(nextResetAt).toISOString()}`
  );
}

function syncBudgetSchedule(
  apiKeyId: string,
  config: BudgetConfig,
  now = Date.now(),
  options: SyncBudgetScheduleOptions = {}
): NormalizedBudgetConfig {
  const normalized = normalizeBudgetConfig(config);
  const window = getBudgetWindow(normalized.resetInterval, normalized.resetTime, now);
  const resetRolled =
    normalized.lastBudgetResetAt !== null && window.periodStartAt > normalized.lastBudgetResetAt;

  if (resetRolled && options.logReset !== false) {
    const previousSpend = getBudgetWindowRangeTotal(
      apiKeyId,
      normalized.lastBudgetResetAt as number,
      window.periodStartAt
    );
    try {
      saveBudgetResetLog({
        apiKeyId,
        resetInterval: normalized.resetInterval,
        previousSpend,
        resetAt: window.periodStartAt,
        nextResetAt: window.nextResetAt,
        periodStart: window.periodStartAt,
        periodEnd: window.nextResetAt,
      });
    } catch {
      // Non-fatal: budget logic still proceeds even if logging fails.
    }
  }

  const updated: NormalizedBudgetConfig = {
    ...normalized,
    budgetResetAt: window.nextResetAt,
    lastBudgetResetAt: window.periodStartAt,
    warningEmittedAt: resetRolled ? null : normalized.warningEmittedAt,
    warningPeriodStart: resetRolled ? null : normalized.warningPeriodStart,
  };

  const changed =
    normalized.budgetResetAt !== updated.budgetResetAt ||
    normalized.lastBudgetResetAt !== updated.lastBudgetResetAt ||
    normalized.warningEmittedAt !== updated.warningEmittedAt ||
    normalized.warningPeriodStart !== updated.warningPeriodStart ||
    normalized.dailyLimitUsd !== updated.dailyLimitUsd ||
    normalized.weeklyLimitUsd !== updated.weeklyLimitUsd ||
    normalized.monthlyLimitUsd !== updated.monthlyLimitUsd ||
    normalized.warningThreshold !== updated.warningThreshold ||
    normalized.resetInterval !== updated.resetInterval ||
    normalized.resetTime !== updated.resetTime;

  if (changed && options.persist !== false) {
    try {
      saveBudget(apiKeyId, updated);
    } catch {
      // Non-critical: in-memory cache still works.
    }
  }

  budgets.set(apiKeyId, updated);
  return updated;
}
=======
/**
 * @typedef {Object} BudgetConfig
 * @property {number} dailyLimitUsd - Max daily spend in USD
 * @property {number} [monthlyLimitUsd] - Max monthly spend in USD
 * @property {number} [warningThreshold=0.8] - Alert when usage reaches this fraction
 */

/**
 * @typedef {Object} CostEntry
 * @property {number} cost - Cost in USD
 * @property {number} timestamp - Unix timestamp
 */

/** @type {Map<string, BudgetConfig>} In-memory cache for budgets */
const budgets = new Map<string, BudgetConfig>();

/** @type {boolean} */
let _budgetsLoaded = false;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

/**
 * Set budget for an API key.
 *
 * @param {string} apiKeyId
 * @param {BudgetConfig} config
 */
export function setBudget(apiKeyId: string, config: BudgetConfig) {
<<<<<<< HEAD
  return syncBudgetSchedule(apiKeyId, config, Date.now(), { logReset: false, persist: true });
=======
  const normalized = {
    dailyLimitUsd: config.dailyLimitUsd,
    monthlyLimitUsd: config.monthlyLimitUsd || 0,
    warningThreshold: config.warningThreshold ?? 0.8,
  };
  budgets.set(apiKeyId, normalized);
  try {
    saveBudget(apiKeyId, normalized);
  } catch {
    // Non-critical: in-memory still works
  }
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
}

/**
 * Get budget config for an API key.
 *
 * @param {string} apiKeyId
<<<<<<< HEAD
 * @returns {NormalizedBudgetConfig | null}
 */
export function getBudget(apiKeyId: string): NormalizedBudgetConfig | null {
  const cached = budgets.get(apiKeyId);
  if (cached) {
    return syncBudgetSchedule(apiKeyId, cached);
  }

  try {
    const fromDb = loadBudget(apiKeyId) as BudgetConfig | null;
    if (fromDb) {
      return syncBudgetSchedule(apiKeyId, fromDb);
    }
  } catch {
    // DB may not be ready.
  }

=======
 * @returns {BudgetConfig | null}
 */
export function getBudget(apiKeyId: string): BudgetConfig | null {
  // Check in-memory cache first
  if (budgets.has(apiKeyId)) {
    return budgets.get(apiKeyId);
  }
  // Try loading from DB
  try {
    const fromDb = loadBudget(apiKeyId) as BudgetConfig | null;
    if (fromDb) {
      budgets.set(apiKeyId, fromDb);
      return fromDb;
    }
  } catch {
    // DB may not be ready
  }
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  return null;
}

/**
<<<<<<< HEAD
 * Delete budget config and recorded spend for an API key.
 *
 * @param {string} apiKeyId
 */
export function deleteBudget(apiKeyId: string) {
  budgets.delete(apiKeyId);
  discardSpendBatchEntries(apiKeyId);
  try {
    dbDeleteBudget(apiKeyId);
    deleteCostEntries(apiKeyId);
  } catch {
    // Non-critical.
  }
}

/**
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
 * Record a cost for an API key.
 *
 * @param {string} apiKeyId
 * @param {number} cost - Cost in USD
 */
export function recordCost(apiKeyId: string, cost: number): void {
<<<<<<< HEAD
  try {
    spendBatchWriter.increment(apiKeyId, cost, Date.now());
  } catch {
    // Non-critical.
=======
  const timestamp = Date.now();
  try {
    saveCostEntry(apiKeyId, cost, timestamp);
  } catch {
    // Non-critical
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  }
}

/**
<<<<<<< HEAD
 * Sync all budgets against the current clock so overdue resets get persisted.
 */
export function syncAllBudgetSchedules(now = Date.now()) {
  let processed = 0;
  let resetCount = 0;

  try {
    const allBudgets = loadAllBudgets();
    for (const [apiKeyId, budget] of Object.entries(allBudgets)) {
      processed += 1;
      const synced = syncBudgetSchedule(apiKeyId, budget, now, { logReset: true, persist: true });
      if (budget.lastBudgetResetAt !== synced.lastBudgetResetAt) {
        resetCount += 1;
      }
    }
  } catch {
    // Non-critical.
  }

  return { processed, resetCount };
}

/**
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
 * Check if an API key has remaining budget.
 *
 * @param {string} apiKeyId
 * @param {number} [additionalCost=0] - Projected cost to check
<<<<<<< HEAD
 * @returns {{ allowed: boolean, reason?: string, dailyUsed: number, dailyLimit: number, warningReached: boolean, remaining: number, periodUsed: number, activeLimitUsd: number, resetInterval: BudgetResetInterval | null, resetTime: string | null, budgetResetAt: number | null, lastBudgetResetAt: number | null, periodStartAt: number | null }}
=======
 * @returns {{ allowed: boolean, reason?: string, dailyUsed: number, dailyLimit: number, warningReached: boolean }}
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
 */
export function checkBudget(apiKeyId: string, additionalCost = 0) {
  const budget = getBudget(apiKeyId);
  if (!budget) {
<<<<<<< HEAD
    return {
      allowed: true,
      dailyUsed: 0,
      dailyLimit: 0,
      warningReached: false,
      remaining: 0,
      periodUsed: 0,
      activeLimitUsd: 0,
      resetInterval: null,
      resetTime: null,
      budgetResetAt: null,
      lastBudgetResetAt: null,
      periodStartAt: null,
    };
  }

  const window = getBudgetWindow(budget.resetInterval, budget.resetTime);
  const periodUsed = getBudgetWindowTotal(apiKeyId, window.periodStartAt);
  const projectedTotal = periodUsed + additionalCost;
  const activeLimitUsd = getActiveBudgetLimit(budget);
  const warningReached =
    activeLimitUsd > 0 && projectedTotal >= activeLimitUsd * budget.warningThreshold;
  const remaining = Math.max(activeLimitUsd - projectedTotal, 0);

  if (warningReached && budget.warningPeriodStart !== window.periodStartAt) {
    const updatedBudget = {
      ...budget,
      warningEmittedAt: Date.now(),
      warningPeriodStart: window.periodStartAt,
    };
    budgets.set(apiKeyId, updatedBudget);
    try {
      saveBudget(apiKeyId, updatedBudget);
      emitBudgetWarning(
        apiKeyId,
        updatedBudget,
        projectedTotal,
        activeLimitUsd,
        window.nextResetAt
      );
    } catch {
      // Non-critical.
    }
  }

  if (activeLimitUsd > 0 && projectedTotal > activeLimitUsd) {
    return {
      allowed: false,
      reason: `${budget.resetInterval[0].toUpperCase()}${budget.resetInterval.slice(1)} budget exceeded: $${projectedTotal.toFixed(4)} / $${activeLimitUsd.toFixed(2)}`,
      dailyUsed: periodUsed,
      dailyLimit: activeLimitUsd,
      warningReached: true,
      remaining,
      periodUsed,
      activeLimitUsd,
      resetInterval: budget.resetInterval,
      resetTime: budget.resetTime,
      budgetResetAt: window.nextResetAt,
      lastBudgetResetAt: window.periodStartAt,
      periodStartAt: window.periodStartAt,
=======
    return { allowed: true, dailyUsed: 0, dailyLimit: 0, warningReached: false };
  }

  const dailyUsed = getDailyTotal(apiKeyId);
  const projectedTotal = dailyUsed + additionalCost;
  const warningReached = projectedTotal >= budget.dailyLimitUsd * budget.warningThreshold;

  if (projectedTotal > budget.dailyLimitUsd) {
    return {
      allowed: false,
      reason: `Daily budget exceeded: $${projectedTotal.toFixed(4)} / $${budget.dailyLimitUsd.toFixed(2)}`,
      dailyUsed,
      dailyLimit: budget.dailyLimitUsd,
      warningReached: true,
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    };
  }

  return {
    allowed: true,
<<<<<<< HEAD
    dailyUsed: periodUsed,
    dailyLimit: activeLimitUsd,
    warningReached,
    remaining,
    periodUsed,
    activeLimitUsd,
    resetInterval: budget.resetInterval,
    resetTime: budget.resetTime,
    budgetResetAt: window.nextResetAt,
    lastBudgetResetAt: window.periodStartAt,
    periodStartAt: window.periodStartAt,
=======
    dailyUsed,
    dailyLimit: budget.dailyLimitUsd,
    warningReached,
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  };
}

/**
 * Get daily total cost for an API key.
 *
 * @param {string} apiKeyId
 * @returns {number} Total cost today in USD
 */
export function getDailyTotal(apiKeyId: string): number {
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
<<<<<<< HEAD

  try {
    return (
      sumEntries(toCostEntries(loadCostEntries(apiKeyId, todayStart.getTime()))) +
      spendBatchWriter.getPendingCostTotal(apiKeyId, todayStart.getTime())
    );
=======
  const startMs = todayStart.getTime();

  try {
    const entries = toCostEntries(loadCostEntries(apiKeyId, startMs));
    return entries.reduce((sum, e) => sum + e.cost, 0);
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  } catch {
    return 0;
  }
}

/**
 * Get cost summary for an API key.
 *
 * @param {string} apiKeyId
<<<<<<< HEAD
 * @returns {BudgetSummary}
 */
export function getCostSummary(apiKeyId: string): BudgetSummary {
  const now = new Date();
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

  const budget = getBudget(apiKeyId);
  const window = budget ? getBudgetWindow(budget.resetInterval, budget.resetTime) : null;

  try {
    const dailyEntries = [
      ...toCostEntries(loadCostEntries(apiKeyId, todayStart.getTime())),
      ...spendBatchWriter.getBufferedEntries(apiKeyId, todayStart.getTime()),
    ];
    const monthlyEntries = [
      ...toCostEntries(loadCostEntries(apiKeyId, monthStart.getTime())),
      ...spendBatchWriter.getBufferedEntries(apiKeyId, monthStart.getTime()),
    ];
    const periodEntries =
      window !== null
        ? [
            ...toCostEntries(loadCostEntries(apiKeyId, window.periodStartAt)),
            ...spendBatchWriter.getBufferedEntries(apiKeyId, window.periodStartAt),
          ]
        : [];

    const dailyTotal = sumEntries(dailyEntries);
    const monthlyTotal = sumEntries(monthlyEntries);
    const periodTotal = sumEntries(periodEntries);
    const activeLimitUsd = budget ? getActiveBudgetLimit(budget) : 0;
=======
 * @returns {{ dailyTotal: number, monthlyTotal: number, totalEntries: number, budget: BudgetConfig | null }}
 */
export function getCostSummary(apiKeyId: string) {
  const now = new Date();

  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);

  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

  try {
    const dailyEntries = toCostEntries(loadCostEntries(apiKeyId, todayStart.getTime()));
    const monthlyEntries = toCostEntries(loadCostEntries(apiKeyId, monthStart.getTime()));

    const dailyTotal = dailyEntries.reduce((sum, e) => sum + e.cost, 0);
    const monthlyTotal = monthlyEntries.reduce((sum, e) => sum + e.cost, 0);
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

    return {
      dailyTotal,
      monthlyTotal,
      totalEntries: monthlyEntries.length,
<<<<<<< HEAD
      budget,
      totalCostToday: dailyTotal,
      totalCostMonth: monthlyTotal,
      totalCostPeriod: periodTotal,
      activeLimitUsd,
      resetInterval: budget?.resetInterval ?? null,
      resetTime: budget?.resetTime ?? null,
      budgetResetAt: window?.nextResetAt ?? budget?.budgetResetAt ?? null,
      lastBudgetResetAt: window?.periodStartAt ?? budget?.lastBudgetResetAt ?? null,
      periodStartAt: window?.periodStartAt ?? null,
      nextResetAt: window?.nextResetAt ?? null,
      dailyLimitUsd: budget?.dailyLimitUsd ?? 0,
      weeklyLimitUsd: budget?.weeklyLimitUsd ?? 0,
      monthlyLimitUsd: budget?.monthlyLimitUsd ?? 0,
      warningThreshold: budget?.warningThreshold ?? null,
=======
      budget: getBudget(apiKeyId),
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    };
  } catch {
    return {
      dailyTotal: 0,
      monthlyTotal: 0,
      totalEntries: 0,
<<<<<<< HEAD
      budget,
      totalCostToday: 0,
      totalCostMonth: 0,
      totalCostPeriod: 0,
      activeLimitUsd: budget ? getActiveBudgetLimit(budget) : 0,
      resetInterval: budget?.resetInterval ?? null,
      resetTime: budget?.resetTime ?? null,
      budgetResetAt: budget?.budgetResetAt ?? null,
      lastBudgetResetAt: budget?.lastBudgetResetAt ?? null,
      periodStartAt: budget?.lastBudgetResetAt ?? null,
      nextResetAt: budget?.budgetResetAt ?? null,
      dailyLimitUsd: budget?.dailyLimitUsd ?? 0,
      weeklyLimitUsd: budget?.weeklyLimitUsd ?? 0,
      monthlyLimitUsd: budget?.monthlyLimitUsd ?? 0,
      warningThreshold: budget?.warningThreshold ?? null,
=======
      budget: getBudget(apiKeyId),
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    };
  }
}

/**
 * Clear all cost data (for testing).
 */
export function resetCostData() {
  budgets.clear();
<<<<<<< HEAD
  resetSpendBatchWriterForTests();
  try {
    deleteAllCostData();
  } catch {
    // Non-critical.
=======
  _budgetsLoaded = false;
  try {
    deleteAllCostData();
  } catch {
    // Non-critical
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  }
}
