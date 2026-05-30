/**
 * Structured call log management.
 *
 * SQLite stores only summary metadata. Detailed request/response payloads live in
 * filesystem artifacts and are loaded only for explicit detail/export flows.
=======
 * Structured call log management: save, query, rotate, and
 * unified single-artifact disk storage for the Logger UI.
 *
 * @module lib/usage/callLogs
>>>>>>> Stashed changes
 */

import fs from "fs";
import path from "path";
import type { RequestPipelinePayloads } from "@omniroute/open-sse/utils/requestLogger.ts";
import { getDbInstance } from "../db/core";
import { getRequestDetailLogByCallLogId } from "../db/detailedLogs";
import { shouldPersistToDisk } from "./migrations";
import {
  getLoggedInputTokens,
  getLoggedOutputTokens,
  getPromptCacheReadTokensOrNull,
  getPromptCacheCreationTokensOrNull,
  getReasoningTokensOrNull,
} from "./tokenAccounting";
import { isNoLog } from "../compliance";
import { sanitizePII } from "../piiSanitizer";
import { protectPayloadForLog, parseStoredPayload } from "../logPayloads";
import { getCallLogMaxEntries, getCallLogRetentionDays, getCallLogsTableMaxRows } from "../logEnv";
import { pickMaskedDisplayValue } from "@/shared/utils/maskEmail";
import {
  CALL_LOGS_DIR,
  cleanupEmptyCallLogDirs,
  deleteCallArtifact,
  listCallLogArtifactFiles,
  readCallArtifact,
  writeCallArtifact,
  type CallLogArtifact,
  type CallLogDetailState,
} from "./callLogArtifacts";

type JsonRecord = Record<string, unknown>;

type CallLogSummaryRow = {
  id: string;
  timestamp: string | null;
  method: string | null;
  path: string | null;
  status: number | null;
  model: string | null;
  requested_model: string | null;
  provider: string | null;
  account: string | null;
  connection_id: string | null;
  duration: number | null;
  tokens_in: number | null;
  tokens_out: number | null;
  tokens_cache_read: number | null;
  tokens_cache_creation: number | null;
  tokens_reasoning: number | null;
  tokens_compressed: number | null;
  cache_source: string | null;
  request_type: string | null;
  source_format: string | null;
  target_format: string | null;
  api_key_id: string | null;
  api_key_name: string | null;
  combo_name: string | null;
  combo_step_id: string | null;
  combo_execution_key: string | null;
  error_summary: string | null;
  detail_state: string | null;
  artifact_relpath: string | null;
  artifact_size_bytes: number | null;
  artifact_sha256: string | null;
  has_request_body: number | null;
  has_response_body: number | null;
  has_pipeline_details: number | null;
  request_summary: string | null;
  provider_node_prefix?: string | null;
};

type LegacyInlineRow = {
  request_body: string | null;
  response_body: string | null;
  error: string | null;
};

type DeleteResult = {
  deletedRows: number;
  deletedArtifacts: number;
};

let logIdCounter = 0;

function asRecord(value: unknown): JsonRecord {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as JsonRecord) : {};
}

function toNumber(value: unknown): number {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim().length > 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
}

function toStringOrNull(value: unknown): string | null {
  return typeof value === "string" && value.trim().length > 0 ? value : null;
<<<<<<< Updated upstream
}

function truncateText(value: string, maxLength: number) {
  return value.length > maxLength ? value.slice(0, maxLength) : value;
}

function parseInlineError(value: unknown): unknown {
  if (typeof value !== "string" || value.trim().length === 0) return null;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
=======
}

function normalizeDetailState(value: unknown): CallLogDetailState {
  if (
    value === "ready" ||
    value === "missing" ||
    value === "corrupt" ||
    value === "legacy-inline"
  ) {
    return value;
  }
  return "none";
}

function sanitizeErrorForLog(error: unknown): unknown {
  if (error === null || error === undefined) return null;
  if (typeof error === "string") return sanitizePII(error).text;
  if (error instanceof Error) {
    return {
      message: sanitizePII(error.message).text,
      stack: sanitizePII(error.stack || "").text || undefined,
      name: error.name,
    };
  }
  return protectPayloadForLog(error);
}

function generateLogId() {
  logIdCounter++;
  return `${Date.now()}-${logIdCounter}`;
}

async function resolveAccountName(connectionId: string | null | undefined) {
  let account = connectionId ? connectionId.slice(0, 8) : "-";

  if (!connectionId) {
    return account;
  }
  }

  return account;
}

    }
  } catch {
    // Best-effort lookup only.
  }
