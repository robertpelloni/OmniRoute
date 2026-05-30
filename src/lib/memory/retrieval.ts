import { getDbInstance } from "../db/core";
import { Memory, MemoryConfig, MemoryType } from "./types";
import { MemoryConfigSchema } from "./schemas";
import { logger } from "../../../open-sse/utils/logger.ts";

const log = logger("MEMORY_RETRIEVAL");

interface MemoryRow {
  id: string;
  api_key_id?: string;
  apiKeyId?: string;
  session_id?: string | null;
  sessionId?: string | null;
  type: MemoryType;
  key?: string | null;
  content: string;
  metadata?: string | null;
  created_at?: string;
  createdAt?: string;
  updated_at?: string;
  updatedAt?: string;
  expires_at?: string | null;
  expiresAt?: string | null;
}

interface RetrievalOptions extends Partial<MemoryConfig> {
  query?: string;
  sessionId?: string;
}
=======

/**
 * Simple token estimation function (roughly 1 token per 4 characters)
 */
export function estimateTokens(text: string): number {
  if (!text || typeof text !== "string") return 0;
  return Math.ceil(text.length / 4);
}

function hasTable(tableName: string): boolean {
  const db = getDbInstance();
  const row = db
    .prepare("SELECT name FROM sqlite_master WHERE type = 'table' AND name = ?")
    .get(tableName) as { name?: string } | undefined;
  return row?.name === tableName;
}

function parseMetadata(raw: unknown): Record<string, unknown> {
  if (!raw || typeof raw !== "string") return {};
  try {
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

function rowToMemory(row: MemoryRow): Memory {
  const createdAt = row.created_at || row.createdAt || new Date().toISOString();
  const updatedAt = row.updated_at || row.updatedAt || createdAt;
  const expiresAt = row.expires_at ?? row.expiresAt ?? null;

  return {
    id: String(row.id),
    apiKeyId: String(row.api_key_id || row.apiKeyId || ""),
    sessionId: String(row.session_id ?? row.sessionId ?? ""),
    type: row.type as MemoryType,
    key: String(row.key || ""),
    content: String(row.content || ""),
    metadata: parseMetadata(row.metadata),
    createdAt: new Date(createdAt),
    updatedAt: new Date(updatedAt),
    expiresAt: expiresAt ? new Date(String(expiresAt)) : null,
  };
}

function getRelevanceScore(memory: Memory, query: string): number {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return 0;

  const haystacks = [
    memory.content.toLowerCase(),
    memory.key.toLowerCase(),
    JSON.stringify(memory.metadata).toLowerCase(),
  ];
  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);

  let score = 0;
  for (const haystack of haystacks) {
    if (haystack.includes(normalizedQuery)) {
      score += 20;
    }

    for (const token of tokens) {
      if (!token) continue;

      if (haystack === memory.key.toLowerCase() && haystack.includes(token)) {
        score += 6;
        continue;
      }

      const matches = haystack.match(new RegExp(token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"));
      score += (matches?.length || 0) * 3;
    }
  }

  return score;
}

=======
/**
 * Retrieve memories with token budget enforcement
 */
export async function retrieveMemories(
  apiKeyId: string,
  // Validate and normalize config
  const normalizedConfig = MemoryConfigSchema.parse({
    enabled: true,
    maxTokens: 2000,
    autoSummarize: false,
    persistAcrossModels: false,
    retentionDays: 30,
    scope: "apiKey",
    ...config,
  });

    // Estimate tokens for this memory
    const memoryTokens = estimateTokens(memory.content);

    // Check if adding this memory would exceed budget
    if (totalTokens + memoryTokens > maxTokens) {
      // If we haven't added any memories yet, add this one anyway
      if (memories.length === 0) {
        totalTokens += memoryTokens;
      }
      break;
    }

    // Add memory to results
}
