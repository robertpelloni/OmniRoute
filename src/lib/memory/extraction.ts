/**
 * Fact extraction from LLM responses.
 * Parses text for user preferences, decisions, and patterns.
 * Stores extracted facts asynchronously (non-blocking).
 */

<<<<<<< Updated upstream
import { logger } from "../../../open-sse/utils/logger.ts";
import { createMemory } from "./store";
import { MemoryType } from "./types";

const log = logger("MEMORY_EXTRACTION");

=======
import { createMemory } from "./store";
import { MemoryType } from "./types";

>>>>>>> Stashed changes
// ─── Pattern Definitions ────────────────────────────────────────────────────

/** Patterns indicating user preferences */
const PREFERENCE_PATTERNS: RegExp[] = [
<<<<<<< Updated upstream
  /\bI\s+(?:really\s+)?prefer\s+([^.,\n]+)/gi,
  /\bI\s+(?:really\s+)?like\s+([^.,\n]+)/gi,
  /\bmy\s+(?:favorite|favourite)\s+(?:is|are)\s+([^.,\n]+)/gi,
  /\bI\s+(?:don'?t|do\s+not)\s+like\s+([^.,\n]+)/gi,
  /\bI\s+(?:hate|dislike|avoid)\s+([^.,\n]+)/gi,
  /\bI\s+enjoy\s+([^.,\n]+)/gi,
  /\bI\s+love\s+([^.,\n]+)/gi,
=======
  /\bI\s+(?:really\s+)?prefer\s+(.+?)(?:\.|,|$)/gi,
  /\bI\s+(?:really\s+)?like\s+(.+?)(?:\.|,|$)/gi,
  /\bmy\s+(?:favorite|favourite)\s+(?:is|are)\s+(.+?)(?:\.|,|$)/gi,
  /\bI\s+(?:don'?t|do\s+not)\s+like\s+(.+?)(?:\.|,|$)/gi,
  /\bI\s+(?:hate|dislike|avoid)\s+(.+?)(?:\.|,|$)/gi,
  /\bI\s+enjoy\s+(.+?)(?:\.|,|$)/gi,
  /\bI\s+love\s+(.+?)(?:\.|,|$)/gi,
>>>>>>> Stashed changes
];

/** Patterns indicating user decisions */
const DECISION_PATTERNS: RegExp[] = [
<<<<<<< Updated upstream
  /\bI'?(?:ll|will)\s+use\s+([^.,\n]+)/gi,
  /\bI\s+chose\s+([^.,\n]+)/gi,
  /\bI\s+(?:have\s+)?decided\s+(?:to\s+)?([^.,\n]+)/gi,
  /\bI'?m\s+going\s+(?:to\s+)?(?:use|with|adopt)\s+([^.,\n]+)/gi,
  /\bI\s+selected\s+([^.,\n]+)/gi,
  /\bI\s+picked\s+([^.,\n]+)/gi,
  /\bI\s+went\s+with\s+([^.,\n]+)/gi,
=======
  /\bI'?(?:ll|will)\s+use\s+(.+?)(?:\.|,|$)/gi,
  /\bI\s+chose\s+(.+?)(?:\.|,|$)/gi,
  /\bI\s+(?:have\s+)?decided\s+(?:to\s+)?(.+?)(?:\.|,|$)/gi,
  /\bI'?m\s+going\s+(?:to\s+)?(?:use|with|adopt)\s+(.+?)(?:\.|,|$)/gi,
  /\bI\s+selected\s+(.+?)(?:\.|,|$)/gi,
  /\bI\s+picked\s+(.+?)(?:\.|,|$)/gi,
  /\bI\s+went\s+with\s+(.+?)(?:\.|,|$)/gi,
>>>>>>> Stashed changes
];

/** Patterns indicating user behavioral patterns */
const PATTERN_PATTERNS: RegExp[] = [
<<<<<<< Updated upstream
  /\bI\s+usually\s+([^.,\n]+)/gi,
  /\bI\s+always\s+([^.,\n]+)/gi,
  /\bI\s+never\s+([^.,\n]+)/gi,
  /\bI\s+typically\s+([^.,\n]+)/gi,
  /\bI\s+tend\s+to\s+([^.,\n]+)/gi,
  /\bI\s+(?:often|frequently|regularly)\s+([^.,\n]+)/gi,
=======
  /\bI\s+usually\s+(.+?)(?:\.|,|$)/gi,
  /\bI\s+always\s+(.+?)(?:\.|,|$)/gi,
  /\bI\s+never\s+(.+?)(?:\.|,|$)/gi,
  /\bI\s+typically\s+(.+?)(?:\.|,|$)/gi,
  /\bI\s+tend\s+to\s+(.+?)(?:\.|,|$)/gi,
  /\bI\s+(?:often|frequently|regularly)\s+(.+?)(?:\.|,|$)/gi,
>>>>>>> Stashed changes
];

// Maximum length for extracted content
const MAX_FACT_LENGTH = 500;
// Minimum content length to avoid noise
const MIN_FACT_LENGTH = 3;
<<<<<<< Updated upstream
const MAX_EXTRACTION_TEXT_LENGTH = 64 * 1024;
=======
>>>>>>> Stashed changes

// ─── Types ──────────────────────────────────────────────────────────────────

export interface ExtractedFact {
  key: string;
  content: string;
  type: MemoryType;
  category: "preference" | "decision" | "pattern";
}

// ─── Extraction Logic ────────────────────────────────────────────────────────

/**
 * Sanitize a matched string: trim, collapse whitespace, cap length
 */
function sanitizeMatch(raw: string): string {
  return raw.trim().replace(/\s+/g, " ").slice(0, MAX_FACT_LENGTH);
}

<<<<<<< Updated upstream
function capExtractionText(text: string): string {
  if (text.length <= MAX_EXTRACTION_TEXT_LENGTH) return text;
  return text.slice(-MAX_EXTRACTION_TEXT_LENGTH);
}

=======
>>>>>>> Stashed changes
/**
 * Generate a stable key for a fact (category + first 40 chars of content)
 */
function factKey(category: string, content: string): string {
  const slug = content
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .slice(0, 40)
    .replace(/_+$/, "");
  return `${category}:${slug}`;
}

/**
 * Run a set of patterns against text and collect extracted facts.
 * Deduplicates by key within the batch.
 */
function runPatterns(
  text: string,
  patterns: RegExp[],
  category: "preference" | "decision" | "pattern",
  memoryType: MemoryType,
  seen: Set<string>
): ExtractedFact[] {
  const facts: ExtractedFact[] = [];

  for (const pattern of patterns) {
    // Reset lastIndex for global regex
    pattern.lastIndex = 0;

    let match: RegExpExecArray | null;
    while ((match = pattern.exec(text)) !== null) {
      const raw = match[1];
      if (!raw) continue;

      const content = sanitizeMatch(raw);
      if (content.length < MIN_FACT_LENGTH) continue;

      const key = factKey(category, content);
      if (seen.has(key)) continue;
      seen.add(key);

      facts.push({ key, content, type: memoryType, category });
    }

    // Reset again after use
    pattern.lastIndex = 0;
  }

  return facts;
}

/**
 * Extract facts from a text string.
 * Returns structured fact objects without storing them.
 * Safe to call from tests without a DB.
 */
export function extractFactsFromText(text: string): ExtractedFact[] {
  if (!text || typeof text !== "string") return [];

<<<<<<< Updated upstream
  text = capExtractionText(text);

=======
>>>>>>> Stashed changes
  const seen = new Set<string>();
  const facts: ExtractedFact[] = [];

  // Preferences → factual memory
  facts.push(...runPatterns(text, PREFERENCE_PATTERNS, "preference", MemoryType.FACTUAL, seen));

  // Decisions → episodic memory (tied to a moment in time)
  facts.push(...runPatterns(text, DECISION_PATTERNS, "decision", MemoryType.EPISODIC, seen));

  // Patterns → factual memory (persistent behavioral facts)
  facts.push(...runPatterns(text, PATTERN_PATTERNS, "pattern", MemoryType.FACTUAL, seen));

  return facts;
}

/**
 * Extract facts from an LLM response and store them asynchronously.
 * Non-blocking: fires-and-forgets via setImmediate.
 * Does NOT extract from tool call results (tool_calls check).
 *
 * @param response - The LLM response text to parse
 * @param apiKeyId - API key owning this memory
 * @param sessionId - Session context for the memory
 */
export function extractFacts(response: string, apiKeyId: string, sessionId: string): void {
  if (!response || !apiKeyId || !sessionId) return;

<<<<<<< Updated upstream
  const cappedResponse = capExtractionText(response);

  log.info("memory.extraction.start", { apiKeyId });

  // Non-blocking: schedule after current event loop tick
  setImmediate(() => {
    const facts = extractFactsFromText(cappedResponse);
    if (facts.length === 0) return;

    for (const fact of facts) {
      log.debug("memory.extraction.fact_found", { key: fact.key, category: fact.category });

=======
  // Non-blocking: schedule after current event loop tick
  setImmediate(() => {
    const facts = extractFactsFromText(response);
    if (facts.length === 0) return;

    // Store each fact, swallow errors to never block the response pipeline
    for (const fact of facts) {
>>>>>>> Stashed changes
      createMemory({
        apiKeyId,
        sessionId,
        type: fact.type,
        key: fact.key,
        content: fact.content,
        metadata: {
          category: fact.category,
          extractedAt: new Date().toISOString(),
          source: "llm_response",
        },
        expiresAt: null,
      }).catch((err) => {
<<<<<<< Updated upstream
        log.error("memory.extraction.background.failed", { err: err?.message, apiKeyId });
      });
    }

    log.info("memory.extraction.complete", { apiKeyId, factCount: facts.length });
=======
        // Silent: extraction must never affect response delivery
        if (process.env.NODE_ENV !== "test") {
          console.warn("[memory:extraction] Failed to store fact:", err?.message);
        }
      });
    }
>>>>>>> Stashed changes
  });
}
