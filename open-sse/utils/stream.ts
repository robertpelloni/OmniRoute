import { translateResponse, initState } from "../translator/index.ts";
import { FORMATS } from "../translator/formats.ts";
import { trackPendingRequest, appendRequestLog } from "@/lib/usageDb";
import {
  extractUsage,
  hasValidUsage,
  estimateUsage,
  logUsage,
  addBufferToUsage,
  filterUsageForFormat,
  COLORS,
} from "./usageTracking.ts";
import {
  parseSSELine,
  hasValuableContent,
  fixInvalidId,
  formatSSE,
  unwrapGeminiChunk,
} from "./streamHelpers.ts";
<<<<<<< HEAD
import { calculateCost } from "@/lib/usage/costCalculator";
import { buildOmniRouteSseMetadataComment } from "@/domain/omnirouteResponseMeta";
=======
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import {
  createStructuredSSECollector,
  buildStreamSummaryFromEvents,
} from "./streamPayloadCollector.ts";
<<<<<<< HEAD
import { STREAM_IDLE_TIMEOUT_MS, FETCH_BODY_TIMEOUT_MS, HTTP_STATUS } from "../config/constants.ts";
=======
import { STREAM_IDLE_TIMEOUT_MS, HTTP_STATUS } from "../config/constants.ts";
>>>>>>> Stashed changes
=======
import { STREAM_IDLE_TIMEOUT_MS, HTTP_STATUS } from "../config/constants.ts";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import {
  sanitizeStreamingChunk,
  extractThinkingFromContent,
} from "../handlers/responseSanitizer.ts";
<<<<<<< HEAD
import {
  rememberResponseConversationState,
  rememberResponseFunctionCalls,
} from "../services/responsesToolCallState.ts";
import { buildErrorBody } from "./error.ts";

/**
 * Race a response body read against a timeout.
 * Prevents indefinite hangs when the upstream sends headers but stalls on the body.
 */
export function withBodyTimeout<T>(
  promise: Promise<T>,
  timeoutMs: number = FETCH_BODY_TIMEOUT_MS
): Promise<T> {
  if (timeoutMs <= 0) return promise;
  let timer: ReturnType<typeof setTimeout>;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => {
      const err = new Error(`Response body read timeout after ${timeoutMs}ms`);
      err.name = "BodyTimeoutError";
      reject(err);
    }, timeoutMs);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer)) as Promise<T>;
}

=======
import { buildErrorBody } from "./error.ts";

>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
export { COLORS, formatSSE };

type JsonRecord = Record<string, unknown>;

<<<<<<< HEAD
const PENDING_REQUEST_CLEARED_MARKER = "__omniroutePendingRequestCleared";

function markPendingRequestCleared(error: Error): Error {
  (error as Error & Record<string, unknown>)[PENDING_REQUEST_CLEARED_MARKER] = true;
  return error;
}

function buildResponsesOutputItemKey(item: unknown): string | null {
  if (!item || typeof item !== "object" || Array.isArray(item)) {
    return null;
  }

  const record = item as JsonRecord;
  const type = typeof record.type === "string" ? record.type : "";
  const id = typeof record.id === "string" ? record.id : "";
  const callId = typeof record.call_id === "string" ? record.call_id : "";
  const outputIndex = typeof record.output_index === "number" ? record.output_index : "";
  const name = typeof record.name === "string" ? record.name : "";

  if (!type && !id && !callId) {
    return null;
  }

  return `${type}:${id}:${callId}:${outputIndex}:${name}`;
}

function pushUniqueResponsesOutputItems(target: unknown[], items: readonly unknown[]) {
  const seen = new Set<string>();

  for (const existingItem of target) {
    const key = buildResponsesOutputItemKey(existingItem);
    if (key) {
      seen.add(key);
    }
  }

  for (const item of items) {
    const key = buildResponsesOutputItemKey(item);
    if (key && seen.has(key)) {
      continue;
    }

    target.push(item);
    if (key) {
      seen.add(key);
    }
  }
}

=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
type StreamLogger = {
  appendProviderChunk?: (value: string) => void;
  appendConvertedChunk?: (value: string) => void;
  appendOpenAIChunk?: (value: string) => void;
};

type StreamCompletePayload = {
  status: number;
  usage: unknown;
  /** Minimal response body for call log (streaming: usage + note; non-streaming not used) */
  responseBody?: unknown;
  providerPayload?: unknown;
  clientPayload?: unknown;
};

<<<<<<< HEAD
type StreamFailurePayload = {
  status: number;
  message: string;
  code?: string;
  type?: string;
=======
type StreamOptions = {
  mode?: string;
  targetFormat?: string;
  sourceFormat?: string;
  provider?: string | null;
  reqLogger?: StreamLogger | null;
  toolNameMap?: unknown;
  model?: string | null;
  connectionId?: string | null;
  apiKeyInfo?: unknown;
  body?: unknown;
  onComplete?: ((payload: StreamCompletePayload) => void) | null;
};

type TranslateState = ReturnType<typeof initState> & {
  provider?: string | null;
  toolNameMap?: unknown;
  usage?: unknown;
  finishReason?: unknown;
  /** Accumulated message content for call log response body */
  accumulatedContent?: string;
  upstreamError?: {
    status: number;
    type: string;
    code: string;
    message: string;
  } | null;
};

type ToolCall = {
  id: string | null;
  index: number;
  type: string;
  function: { name: string; arguments: string };
};

type UsageTokenRecord = Record<string, number>;

function getOpenAIIntermediateChunks(value: unknown): unknown[] {
  if (!value || typeof value !== "object") return [];
  const candidate = (value as JsonRecord)._openaiIntermediate;
  return Array.isArray(candidate) ? candidate : [];
}

function restoreClaudePassthroughToolUseName(parsed: JsonRecord, toolNameMap: unknown): boolean {
  if (!(toolNameMap instanceof Map)) return false;
  if (!parsed || typeof parsed !== "object") return false;

  const block =
    parsed.content_block && typeof parsed.content_block === "object"
      ? (parsed.content_block as JsonRecord)
      : null;
  if (!block || block.type !== "tool_use" || typeof block.name !== "string") return false;

  const restoredName = toolNameMap.get(block.name) ?? block.name;
  if (restoredName === block.name) return false;
  block.name = restoredName;
  return true;
}

// Note: TextDecoder/TextEncoder are created per-stream inside createSSEStream()
// to avoid shared state issues with concurrent streams (TextDecoder with {stream:true}
// maintains internal buffering state between decode() calls).

/**
 * Stream modes
 */
const STREAM_MODE = {
  TRANSLATE: "translate", // Full translation between formats
  PASSTHROUGH: "passthrough", // No translation, normalize output, extract usage
};

/**
 * Create unified SSE transform stream with idle timeout protection.
 * If the upstream provider stops sending data for STREAM_IDLE_TIMEOUT_MS,
 * the stream emits an error event and closes to prevent indefinite hanging.
 *
 * @param {object} options
 * @param {string} options.mode - Stream mode: translate, passthrough
 * @param {string} options.targetFormat - Provider format (for translate mode)
 * @param {string} options.sourceFormat - Client format (for translate mode)
 * @param {string} options.provider - Provider name
 * @param {object} options.reqLogger - Request logger instance
 * @param {string} options.model - Model name
 * @param {string} options.connectionId - Connection ID for usage tracking
 * @param {object|null} options.apiKeyInfo - API key metadata for usage attribution
 * @param {object} options.body - Request body (for input token estimation)
 * @param {function} options.onComplete - Callback when stream finishes: ({ status, usage }) => void
 */
export function createSSEStream(options: StreamOptions = {}) {
  const {
    mode = STREAM_MODE.TRANSLATE,
    targetFormat,
    sourceFormat,
    provider = null,
    reqLogger = null,
    toolNameMap = null,
    model = null,
    connectionId = null,
    apiKeyInfo = null,
    body = null,
    onComplete = null,
  } = options;

  let buffer = "";
  let usage: UsageTokenRecord | null = null;
  /** Passthrough (OpenAI CC shape): saw tool_calls in stream before finish_reason */
  let passthroughHasToolCalls = false;
  /** Passthrough: accumulate tool_calls deltas for call log responseBody */
  const passthroughToolCalls = new Map<string, ToolCall>();
  let passthroughToolCallSeq = 0;

  // State for translate mode (accumulatedContent for call log response body)
  const state: TranslateState | null =
    mode === STREAM_MODE.TRANSLATE
      ? {
          ...(initState(sourceFormat) as TranslateState),
          provider,
          toolNameMap,
          accumulatedContent: "",
        }
      : null;

  // Track content length for usage estimation (both modes)
  let totalContentLength = 0;
  // Passthrough: accumulate content and reasoning separately for call log response body
  let passthroughAccumulatedContent = "";
  let passthroughAccumulatedReasoning = "";

  // Guard against duplicate [DONE] events — ensures exactly one per stream
  let doneSent = false;
  const providerPayloadCollector = createStructuredSSECollector({
    stage: "provider_response",
  });
  const clientPayloadCollector = createStructuredSSECollector({
    stage: "client_response",
  });

  // Per-stream instances to avoid shared state with concurrent streams
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  // Idle timeout state — closes stream if provider stops sending data
  let lastChunkTime = Date.now();
  let idleTimer: ReturnType<typeof setInterval> | null = null;
  let streamTimedOut = false;

  return new TransformStream(
    {
      start(controller) {
        // Start idle watchdog — checks every 10s if provider has stopped sending
        if (STREAM_IDLE_TIMEOUT_MS > 0) {
          idleTimer = setInterval(() => {
            if (!streamTimedOut && Date.now() - lastChunkTime > STREAM_IDLE_TIMEOUT_MS) {
              streamTimedOut = true;
              clearInterval(idleTimer);
              idleTimer = null;
              const timeoutMsg = `[STREAM] Idle timeout: no data from ${provider || "provider"} for ${STREAM_IDLE_TIMEOUT_MS}ms (model: ${model || "unknown"})`;
              console.warn(timeoutMsg);
              trackPendingRequest(model, provider, connectionId, false);
              appendRequestLog({
                model,
                provider,
                connectionId,
                status: `FAILED ${HTTP_STATUS.GATEWAY_TIMEOUT}`,
              }).catch(() => {});
              const timeoutError = new Error(timeoutMsg);
              timeoutError.name = "StreamIdleTimeoutError";
              controller.error(timeoutError);
            }
          }, 10_000);
        }
      },

      transform(chunk, controller) {
        if (streamTimedOut) return;
        lastChunkTime = Date.now();
        const text = decoder.decode(chunk, { stream: true });
        buffer += text;
        reqLogger?.appendProviderChunk?.(text);

        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmed = line.trim();

          // Passthrough mode: normalize and forward
          if (mode === STREAM_MODE.PASSTHROUGH) {
            let output;
            let injectedUsage = false;
            let clientPayload: unknown = null;

            if (trimmed.startsWith("data:")) {
              const providerPayload = parseSSELine(trimmed);
              if (providerPayload) {
                providerPayloadCollector.push(providerPayload);
                if ((providerPayload as { done?: unknown }).done === true) {
                  clientPayloadCollector.push(providerPayload);
                }
              }
            }
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

            if (trimmed.startsWith("data:") && trimmed.slice(5).trim() !== "[DONE]") {
              try {
                let parsed = JSON.parse(trimmed.slice(5).trim());

                // Detect Responses SSE payloads (have a `type` field like "response.created",
                // "response.output_item.added", etc.) and skip Chat Completions-specific
                // sanitization to avoid corrupting the stream for Responses-native clients.
                const isResponsesSSE =
                  parsed.type &&
                  typeof parsed.type === "string" &&
                  parsed.type.startsWith("response.");

                // Detect Claude SSE payloads. Includes "ping" and "error" to ensure
                // they bypass the Chat Completions sanitization path which would
                // incorrectly process or drop them.
                const isClaudeSSE =
                  parsed.type &&
                  typeof parsed.type === "string" &&
                  (parsed.type.startsWith("message") ||
                    parsed.type.startsWith("content_block") ||
                    parsed.type === "ping" ||
                    parsed.type === "error");

                if (isResponsesSSE) {
<<<<<<< HEAD
                  const responseId =
                    typeof parsed.response?.id === "string"
                      ? parsed.response.id
                      : typeof parsed.response_id === "string"
                        ? parsed.response_id
                        : null;
                  if (responseId) {
                    passthroughResponsesId = responseId;
                  }
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                  // Responses SSE: only extract usage, forward payload as-is
                  const extracted = extractUsage(parsed);
                  if (extracted) {
                    usage = extracted;
                  }
<<<<<<< HEAD
                  // Keep generic Responses deltas for fallback usage estimates,
                  // but only visible text deltas may become assistant content in
                  // logs/replay payloads.
                  if (typeof parsed.delta === "string") {
                    totalContentLength += parsed.delta.length;
                  }
                  if (
                    parsed.type === "response.output_text.delta" &&
                    typeof parsed.delta === "string"
                  ) {
                    passthroughAccumulatedContent = appendBoundedText(
                      passthroughAccumulatedContent,
                      parsed.delta
                    );
                  }
                  if (parsed.type === "response.failed") {
                    failurePayload = normalizeStreamFailurePayload(parsed);
                  }
                  if (
                    parsed.type === "response.reasoning_summary_text.delta" ||
                    parsed.type === "response.reasoning_summary_text.done" ||
                    parsed.type === "response.reasoning_summary_part.done"
                  ) {
                    const reasoningKey = getResponsesReasoningKey(parsed);
                    if (reasoningKey) {
                      passthroughResponsesReasoningSummarySeen.add(reasoningKey);
                    }
                  }
                  if (
                    parsed.type === "response.output_item.added" &&
                    parsed.item?.type === "function_call"
                  ) {
                    const item =
                      parsed.item && typeof parsed.item === "object" && !Array.isArray(parsed.item)
                        ? { ...(parsed.item as JsonRecord) }
                        : null;
                    const pendingKey =
                      item && typeof item.id === "string"
                        ? item.id
                        : item && typeof item.call_id === "string"
                          ? item.call_id
                          : null;
                    if (item && pendingKey) {
                      if (typeof item.arguments !== "string") {
                        item.arguments = "";
                      }
                      passthroughResponsesPendingFunctionCalls.set(pendingKey, item);
                      passthroughResponsesCurrentFunctionCallKey = pendingKey;
                    }
                  }
                  if (parsed.type === "response.function_call_arguments.delta") {
                    const pendingKey =
                      typeof parsed.item_id === "string"
                        ? parsed.item_id
                        : passthroughResponsesCurrentFunctionCallKey;
                    const pending = pendingKey
                      ? passthroughResponsesPendingFunctionCalls.get(pendingKey)
                      : undefined;
                    if (pending && typeof parsed.delta === "string") {
                      const previousArgs =
                        typeof pending.arguments === "string" ? pending.arguments : "";
                      pending.arguments = previousArgs + parsed.delta;
                    }
                  }
                  if (parsed.type === "response.function_call_arguments.done") {
                    const pendingKey =
                      typeof parsed.item_id === "string"
                        ? parsed.item_id
                        : passthroughResponsesCurrentFunctionCallKey;
                    const pending = pendingKey
                      ? passthroughResponsesPendingFunctionCalls.get(pendingKey)
                      : undefined;
                    if (pending) {
                      if (typeof parsed.arguments === "string") {
                        pending.arguments = parsed.arguments;
                      }
                      pushUniqueResponsesOutputItems(passthroughResponsesOutputItems, [pending]);
                    }
                  }
                  // Capture each completed output item so the final
                  // response.completed snapshot can be backfilled when upstream
                  // returns an empty `output` (happens with store: false).
                  if (parsed.type === "response.output_item.done" && parsed.item) {
                    emitSyntheticResponsesReasoningSummary(controller, parsed);
                    pushUniqueResponsesOutputItems(passthroughResponsesOutputItems, [parsed.item]);
                    if (parsed.item?.type === "function_call") {
                      const pendingKey =
                        typeof parsed.item.id === "string"
                          ? parsed.item.id
                          : typeof parsed.item.call_id === "string"
                            ? parsed.item.call_id
                            : null;
                      if (pendingKey) {
                        passthroughResponsesPendingFunctionCalls.delete(pendingKey);
                        if (passthroughResponsesCurrentFunctionCallKey === pendingKey) {
                          passthroughResponsesCurrentFunctionCallKey = null;
                        }
                      }
                    }
                  }
                  if (
                    parsed.type === "response.completed" &&
                    Array.isArray(parsed.response?.output) &&
                    parsed.response.output.length > 0
                  ) {
                    pushUniqueResponsesOutputItems(
                      passthroughResponsesOutputItems,
                      parsed.response.output
                    );
                  }
                  if (
                    parsed.type === "response.completed" &&
                    passthroughResponsesPendingFunctionCalls.size > 0
                  ) {
                    pushUniqueResponsesOutputItems(passthroughResponsesOutputItems, [
                      ...passthroughResponsesPendingFunctionCalls.values(),
                    ]);
                    passthroughResponsesPendingFunctionCalls.clear();
                    passthroughResponsesCurrentFunctionCallKey = null;
                  }
                  // Two transport-level fixes for Responses passthrough:
                  //   1) Strip echoed `instructions` + `tools` from lifecycle
                  //      events — they can balloon a single SSE event past
                  //      100 KB and break parsers (e.g. GitHub Copilot CLI).
                  //   2) Backfill `response.completed.response.output` when
                  //      upstream sent it empty (store: false) — some clients
                  //      build their tool-call list from that snapshot rather
                  //      than from per-item events.
                  const stripped = stripResponsesLifecycleEcho(parsed);
                  const backfilled = backfillResponsesCompletedOutput(
                    parsed,
                    passthroughResponsesOutputItems
                  );
                  if (stripped || backfilled) {
                    output = `data: ${JSON.stringify(parsed)}\n`;
                    injectedUsage = true;
=======
                  // Track content length and accumulate for call log
                  if (parsed.delta && typeof parsed.delta === "string") {
                    totalContentLength += parsed.delta.length;
                    passthroughAccumulatedContent += parsed.delta;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                  }
                } else if (isClaudeSSE) {
                  // Claude SSE: extract usage, track content, forward as-is
                  const extracted = extractUsage(parsed);
                  if (extracted) {
                    // Non-destructive merge: never overwrite a positive value with 0
                    // message_start carries input_tokens, message_delta carries output_tokens;
                    if (!usage) usage = {};
                    const u = usage;
                    const eu = extracted as UsageTokenRecord;
                    if (eu.prompt_tokens > 0) u.prompt_tokens = eu.prompt_tokens;
                    if (eu.completion_tokens > 0) u.completion_tokens = eu.completion_tokens;
                    if (eu.total_tokens > 0) u.total_tokens = eu.total_tokens;
                    if (eu.cache_read_input_tokens)
                      u.cache_read_input_tokens = eu.cache_read_input_tokens;
                    if (eu.cache_creation_input_tokens)
                      u.cache_creation_input_tokens = eu.cache_creation_input_tokens;
                  }
<<<<<<< HEAD
                  if (
                    shouldInjectClaudeEmptyResponseBeforeCurrentEvent(
                      claudeEmptyResponseLifecycle,
                      parsed
                    )
                  ) {
                    emitSyntheticClaudeEmptyResponse(controller, {
                      includeContentBlock: true,
                      includeMessageDelta:
                        parsed.type === "message_stop" &&
                        !claudeEmptyResponseLifecycle.hasMessageDelta,
                      includeMessageStop: false,
                    });
                  }
                  updateClaudeEmptyResponseLifecycle(claudeEmptyResponseLifecycle, parsed);
=======
                  const restoredToolName = restoreClaudePassthroughToolUseName(parsed, toolNameMap);
                  // Track content length and accumulate from Claude format
                  if (parsed.delta?.text) {
                    totalContentLength += parsed.delta.text.length;
                    passthroughAccumulatedContent += parsed.delta.text;
                  }
                  if (parsed.delta?.thinking) {
                    totalContentLength += parsed.delta.thinking.length;
                    passthroughAccumulatedContent += parsed.delta.thinking;
                  }
                  if (restoredToolName) {
                    output = `data: ${JSON.stringify(parsed)}
`;
                    injectedUsage = true;
                  }
                } else {
                  // Chat Completions: full sanitization pipeline

                  // Detect reasoning alias before sanitization strips it
                  const hadReasoningAlias = !!(
                    parsed.choices?.[0]?.delta?.reasoning &&
                    typeof parsed.choices[0].delta.reasoning === "string" &&
                    !parsed.choices[0].delta.reasoning_content
                  );

                  parsed = sanitizeStreamingChunk(parsed);

                  const idFixed = fixInvalidId(parsed);

                  if (!hasValuableContent(parsed, FORMATS.OPENAI)) {
                    continue;
                  }

                  const delta = parsed.choices?.[0]?.delta;

                  // Extract <think> tags from streaming content
                  if (delta?.content && typeof delta.content === "string") {
                    const { content, thinking } = extractThinkingFromContent(delta.content);
                    delta.content = content;
                    if (thinking && !delta.reasoning_content) {
                      delta.reasoning_content = thinking;
                    }
                  }

                  // Split combined reasoning+content deltas into separate SSE events.
                  // Standard OpenAI streaming never mixes both fields in one delta;
                  // clients (e.g. LobeChat) may skip content when reasoning_content
                  // is present, causing the first content token to be lost.
                  if (delta?.reasoning_content && delta?.content) {
                    const reasoningChunk = JSON.parse(JSON.stringify(parsed));
                    const rDelta = reasoningChunk.choices[0].delta;
                    delete rDelta.content;
                    reasoningChunk.choices[0].finish_reason = null;
                    delete reasoningChunk.usage;
                    const rOutput = `data: ${JSON.stringify(reasoningChunk)}\n`;
                    passthroughAccumulatedReasoning += delta.reasoning_content;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                    totalContentLength += delta.reasoning_content.length;
                    clientPayloadCollector.push(reasoningChunk);
                    reqLogger?.appendConvertedChunk?.(rOutput);
                    controller.enqueue(encoder.encode(rOutput));
                    controller.enqueue(encoder.encode("\n"));
                    delete delta.reasoning_content;
                  }

                  // Track whether we need to re-serialize (separate from injectedUsage
                  // to avoid blocking subsequent finish_reason / usage mutations)
                  const needsReserialization =
                    hadReasoningAlias || (delta?.content === "" && delta?.reasoning_content);

                  // T18: Track if we saw tool calls & accumulate for call log
                  if (delta?.tool_calls && delta.tool_calls.length > 0) {
                    passthroughHasToolCalls = true;
                    for (const tc of delta.tool_calls) {
                      // Key by index first — id only appears on the first delta in OpenAI streaming
                      let key: string;
                      if (Number.isInteger(tc?.index)) {
                        key = `idx:${tc.index}`;
                      } else if (tc?.id) {
                        key = `id:${tc.id}`;
                      } else {
                        key = `seq:${++passthroughToolCallSeq}`;
                      }
                      const existing = passthroughToolCalls.get(key);
                      const deltaArgs =
                        typeof tc?.function?.arguments === "string" ? tc.function.arguments : "";
                      if (!existing) {
                        passthroughToolCalls.set(key, {
                          id: tc?.id ?? null,
                          index: Number.isInteger(tc?.index) ? tc.index : passthroughToolCalls.size,
                          type: tc?.type || "function",
                          function: {
                            name: tc?.function?.name || "",
                            arguments: deltaArgs,
                          },
                        });
                      } else {
                        if (tc?.id) existing.id = existing.id || tc.id;
                        if (tc?.function?.name && !existing.function.name)
                          existing.function.name = tc.function.name;
                        existing.function.arguments += deltaArgs;
                      }
                    }
                  }

                  const content = delta?.content || delta?.reasoning_content;
                  if (content && typeof content === "string") {
                    totalContentLength += content.length;
                  }
                  if (typeof delta?.content === "string")
<<<<<<< HEAD
                    passthroughAccumulatedContent = appendBoundedText(
                      passthroughAccumulatedContent,
                      delta.content
                    );
                  if (typeof delta?.reasoning_content === "string")
                    passthroughAccumulatedReasoning = appendBoundedText(
                      passthroughAccumulatedReasoning,
                      delta.reasoning_content
                    );
=======
                    passthroughAccumulatedContent += delta.content;
                  if (typeof delta?.reasoning_content === "string")
                    passthroughAccumulatedReasoning += delta.reasoning_content;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

                  const extracted = extractUsage(parsed);
                  if (extracted) {
                    usage = extracted;
                  }

                  const isFinishChunk = parsed.choices?.[0]?.finish_reason;

                  // T18: Normalize finish_reason to 'tool_calls' if tool calls were used
                  if (
                    isFinishChunk &&
                    passthroughHasToolCalls &&
                    parsed.choices[0].finish_reason !== "tool_calls"
                  ) {
                    parsed.choices[0].finish_reason = "tool_calls";
                    // If we modify it, we must output the modified object
                    if (!injectedUsage && hasValidUsage(parsed.usage)) {
                      output = `data: ${JSON.stringify(parsed)}\n`;
                      injectedUsage = true;
                    }
                  }
                  if (isFinishChunk && !hasValidUsage(parsed.usage)) {
                    const estimated = estimateUsage(body, totalContentLength, FORMATS.OPENAI);
                    parsed.usage = filterUsageForFormat(estimated, FORMATS.OPENAI);
                    output = `data: ${JSON.stringify(parsed)}\n`;
                    usage = estimated;
                    injectedUsage = true;
                  } else if (isFinishChunk && usage) {
                    const buffered = addBufferToUsage(usage);
                    parsed.usage = filterUsageForFormat(buffered, FORMATS.OPENAI);
                    output = `data: ${JSON.stringify(parsed)}\n`;
                    injectedUsage = true;
                  } else if (idFixed || needsReserialization) {
                    output = `data: ${JSON.stringify(parsed)}\n`;
                    injectedUsage = true;
                  }
                }

                clientPayload = parsed;
              } catch {}
            }

            if (!injectedUsage) {
              if (line.startsWith("data:") && !line.startsWith("data: ")) {
                output = "data: " + line.slice(5) + "\n";
              } else {
                output = line + "\n";
              }
            }

<<<<<<< HEAD
<<<<<<< Updated upstream
            if (!trimmed && pendingPassthroughEventLine && !pendingPassthroughEventEmitted) {
              output = `${pendingPassthroughEventLine}\n${output}`;
              pendingPassthroughEventEmitted = true;
            }

            output = maybePrefixPendingPassthroughEvent(output, line);

=======
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
            if (clientPayload) {
              clientPayloadCollector.push(clientPayload);
            }

            reqLogger?.appendConvertedChunk?.(output);
            controller.enqueue(encoder.encode(output));
<<<<<<< HEAD
            if (failurePayload) {
              if (onFailure) {
                try {
                  void onFailure(failurePayload);
                } catch {}
              }
              clearIdleTimer();
              trackPendingRequest(model, provider, connectionId, false);
              controller.error(
                markPendingRequestCleared(new Error(failurePayload.message || "Upstream failure"))
              );
              return;
            }
            if (!trimmed) {
              clearPendingPassthroughEvent();
            }
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
            continue;
          }

          // Translate mode
          if (!trimmed) continue;

          if (state?.upstreamError) {
            continue;
          }

          const parsed = parseSSELine(trimmed);
          if (!parsed) continue;
          providerPayloadCollector.push(parsed);

          if (parsed && parsed.done) {
<<<<<<< HEAD
=======
            if (!doneSent) {
              doneSent = true;
              clientPayloadCollector.push({ done: true });
              const output = "data: [DONE]\n\n";
              reqLogger?.appendConvertedChunk?.(output);
              controller.enqueue(encoder.encode(output));
            }
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
            continue;
          }

          // Track content length and accumulate for call log (from raw provider chunk, so content is never missed)
          // Do this before translation so we capture content regardless of translator output shape

          // Claude format
          if (parsed.delta?.text) {
            const t = parsed.delta.text;
            totalContentLength += t.length;
            if (state?.accumulatedContent !== undefined && typeof t === "string")
<<<<<<< HEAD
              state.accumulatedContent = appendBoundedText(state.accumulatedContent, t);
=======
              state.accumulatedContent += t;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          }
          if (parsed.delta?.thinking) {
            const t = parsed.delta.thinking;
            totalContentLength += t.length;
            if (state?.accumulatedContent !== undefined && typeof t === "string")
<<<<<<< HEAD
              state.accumulatedContent = appendBoundedText(state.accumulatedContent, t);
=======
              state.accumulatedContent += t;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          }

          // OpenAI format
          if (parsed.choices?.[0]?.delta?.content) {
            const c = parsed.choices[0].delta.content;
            if (typeof c === "string") {
              totalContentLength += c.length;
<<<<<<< HEAD
              if (state?.accumulatedContent !== undefined)
                state.accumulatedContent = appendBoundedText(state.accumulatedContent, c);
=======
              if (state?.accumulatedContent !== undefined) state.accumulatedContent += c;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
            } else if (Array.isArray(c)) {
              for (const part of c) {
                if (part?.text && typeof part.text === "string") {
                  totalContentLength += part.text.length;
                  if (state?.accumulatedContent !== undefined)
<<<<<<< HEAD
                    state.accumulatedContent = appendBoundedText(
                      state.accumulatedContent,
                      part.text
                    );
=======
                    state.accumulatedContent += part.text;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                }
              }
            }
          }
          if (parsed.choices?.[0]?.delta?.reasoning_content) {
            const r = parsed.choices[0].delta.reasoning_content;
            if (typeof r === "string") {
              totalContentLength += r.length;
<<<<<<< HEAD
              if (state?.accumulatedContent !== undefined)
                state.accumulatedContent = appendBoundedText(state.accumulatedContent, r);
            }
          }
          // Normalize `reasoning` alias → `reasoning_content` (NVIDIA kimi-k2.5 etc.)
          if (
            parsed.choices?.[0]?.delta?.reasoning &&
            !parsed.choices?.[0]?.delta?.reasoning_content
          ) {
            const r = parsed.choices[0].delta.reasoning;
            if (typeof r === "string") {
              parsed.choices[0].delta.reasoning_content = r;
              delete parsed.choices[0].delta.reasoning;
              totalContentLength += r.length;
              if (state?.accumulatedContent !== undefined)
                state.accumulatedContent = appendBoundedText(state.accumulatedContent, r);
            }
          }
          // Normalize `reasoning` alias → `reasoning_content` (NVIDIA kimi-k2.5 etc.)
          if (
            parsed.choices?.[0]?.delta?.reasoning &&
            !parsed.choices?.[0]?.delta?.reasoning_content
          ) {
            const r = parsed.choices[0].delta.reasoning;
            if (typeof r === "string") {
              parsed.choices[0].delta.reasoning_content = r;
              delete parsed.choices[0].delta.reasoning;
              totalContentLength += r.length;
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
              if (state?.accumulatedContent !== undefined) state.accumulatedContent += r;
            }
          }
          // Normalize `reasoning` alias → `reasoning_content` (NVIDIA kimi-k2.5 etc.)
          if (
            parsed.choices?.[0]?.delta?.reasoning &&
            !parsed.choices?.[0]?.delta?.reasoning_content
          ) {
            const r = parsed.choices[0].delta.reasoning;
            if (typeof r === "string") {
              parsed.choices[0].delta.reasoning_content = r;
              delete parsed.choices[0].delta.reasoning;
              totalContentLength += r.length;
              if (state?.accumulatedContent !== undefined) state.accumulatedContent += r;
            }
          }

          // Gemini / Cloud Code format - may have multiple parts
          // Cloud Code API wraps in { response: { candidates: [...] } }, so unwrap.
          // Only applies to Gemini-family formats — skip for OpenAI, Claude, etc.
          const isGeminiFormat =
            targetFormat === FORMATS.GEMINI ||
            targetFormat === FORMATS.GEMINI_CLI ||
            targetFormat === FORMATS.ANTIGRAVITY;
          const geminiChunk = isGeminiFormat ? unwrapGeminiChunk(parsed) : parsed;
          if (geminiChunk.candidates?.[0]?.content?.parts) {
            for (const part of geminiChunk.candidates[0].content.parts) {
              if (part.text && typeof part.text === "string") {
                totalContentLength += part.text.length;
<<<<<<< HEAD
                if (state?.accumulatedContent !== undefined)
                  state.accumulatedContent = appendBoundedText(state.accumulatedContent, part.text);
=======
                if (state?.accumulatedContent !== undefined) state.accumulatedContent += part.text;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
              }
            }
          }

          // Generic fallback: delta string, top-level content/text (e.g. some SSE payloads)
          if (state?.accumulatedContent !== undefined) {
            if (typeof (parsed as JsonRecord).delta === "string") {
              const d = (parsed as JsonRecord).delta as string;
<<<<<<< HEAD
              state.accumulatedContent = appendBoundedText(state.accumulatedContent, d);
=======
              state.accumulatedContent += d;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
              totalContentLength += d.length;
            }
            if (typeof (parsed as JsonRecord).content === "string") {
              const c = (parsed as JsonRecord).content as string;
<<<<<<< HEAD
              state.accumulatedContent = appendBoundedText(state.accumulatedContent, c);
=======
              state.accumulatedContent += c;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
              totalContentLength += c.length;
            }
            if (typeof (parsed as JsonRecord).text === "string") {
              const t = (parsed as JsonRecord).text as string;
<<<<<<< HEAD
              state.accumulatedContent = appendBoundedText(state.accumulatedContent, t);
=======
              state.accumulatedContent += t;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
              totalContentLength += t.length;
            }
          }

          // Extract usage
          const extracted = extractUsage(parsed);
          if (extracted) state.usage = extracted; // Keep original usage for logging

          // Translate: targetFormat -> openai -> sourceFormat
          const translated = translateResponse(targetFormat, sourceFormat, parsed, state);

          // Log OpenAI intermediate chunks (if available)
          for (const item of getOpenAIIntermediateChunks(translated)) {
            const openaiOutput = formatSSE(item, FORMATS.OPENAI);
            reqLogger?.appendOpenAIChunk?.(openaiOutput);
          }

          if (translated?.length > 0) {
            for (const item of translated) {
<<<<<<< HEAD
=======
              // Content for call log is accumulated only from parsed (above) to avoid double-counting;
              // do not add again from item here.

              // #723, #727: Sanitize only when the client-facing stream is OpenAI Chat format.
              // When translating Responses -> Claude, `item` is already a Claude SSE event;
              // sanitizing it as an OpenAI chunk strips message_start/content_block_delta/message_stop
              // and causes Claude Code to drop the assistant message.
              // #761: Responses API events have {event, data} structure — skip sanitization
              // entirely as it strips them to {"object":"chat.completion.chunk"}, losing all content.
              let itemSanitized: Record<string, unknown> = item;
              const isResponsesEvent =
                typeof item?.event === "string" && item.event.startsWith("response.");
              if (sourceFormat === FORMATS.OPENAI && !isResponsesEvent) {
                itemSanitized = sanitizeStreamingChunk(itemSanitized) as Record<string, unknown>;

                // Extract reasoning tags from content if translation generated them
                const delta = itemSanitized?.choices?.[0]?.delta;
                if (delta?.content && typeof delta.content === "string") {
                  const { content, thinking } = extractThinkingFromContent(delta.content);
                  delta.content = content;
                  if (thinking && !delta.reasoning_content) {
                    delta.reasoning_content = thinking;
                  }
                }
              }

              // Filter empty chunks
              if (!hasValuableContent(itemSanitized, sourceFormat)) {
                continue; // Skip this empty chunk
              }

              // Inject estimated usage if finish chunk has no valid usage
              const isFinishChunk =
                itemSanitized.type === "message_delta" || itemSanitized.choices?.[0]?.finish_reason;
              if (
                state.finishReason &&
                isFinishChunk &&
                !hasValidUsage(itemSanitized.usage) &&
                totalContentLength > 0
              ) {
                const estimated = estimateUsage(body, totalContentLength, sourceFormat);
                itemSanitized.usage = filterUsageForFormat(estimated, sourceFormat); // Filter + already has buffer
                state.usage = estimated;
              } else if (state.finishReason && isFinishChunk && state.usage) {
                // Add buffer and filter usage for client (but keep original in state.usage for logging)
                const buffered = addBufferToUsage(state.usage);
                itemSanitized.usage = filterUsageForFormat(buffered, sourceFormat);
              }

              const output = formatSSE(itemSanitized, sourceFormat);
              clientPayloadCollector.push(itemSanitized);
              reqLogger?.appendConvertedChunk?.(output);
              controller.enqueue(encoder.encode(output));
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
            }
          }
        }
      },

<<<<<<< HEAD
      async flush(controller) {
        // Clean up idle watchdog timer
        if (idleTimer) {
          clearIdleTimer();
=======
      flush(controller) {
        // Clean up idle watchdog timer
        if (idleTimer) {
          clearInterval(idleTimer);
          idleTimer = null;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        }
        if (streamTimedOut) {
          return;
        }
        trackPendingRequest(model, provider, connectionId, false);
        try {
          const remaining = decoder.decode();
          if (remaining) buffer += remaining;

          if (mode === STREAM_MODE.PASSTHROUGH) {
<<<<<<< HEAD
            const bufferedLine = buffer.trim();
            if (skipPassthroughEvent || /^event:\s*keepalive\b/i.test(bufferedLine)) {
              skipPassthroughEvent = false;
              clearPendingPassthroughEvent();
            } else if (buffer) {
=======
            if (buffer) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
              let output = buffer;
              if (buffer.startsWith("data:") && !buffer.startsWith("data: ")) {
                output = "data: " + buffer.slice(5);
              }
<<<<<<< HEAD
=======
              const bufferedPayload = parseSSELine(buffer.trim());
              if (bufferedPayload) {
                providerPayloadCollector.push(bufferedPayload);
                clientPayloadCollector.push(bufferedPayload);
              }
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
              reqLogger?.appendConvertedChunk?.(output);
              controller.enqueue(encoder.encode(output));
            }

<<<<<<< HEAD
            if (shouldInjectClaudeEmptyResponseOnFlush(claudeEmptyResponseLifecycle)) {
              emitSyntheticClaudeEmptyResponse(controller, {
                includeContentBlock: true,
                includeMessageDelta: !claudeEmptyResponseLifecycle.hasMessageDelta,
                includeMessageStop: !claudeEmptyResponseLifecycle.hasMessageStop,
              });
            } else if (shouldInjectClaudeMissingFinalizersOnFlush(claudeEmptyResponseLifecycle)) {
              emitSyntheticClaudeEmptyResponse(controller, {
                includeContentBlock: false,
                includeMessageDelta: !claudeEmptyResponseLifecycle.hasMessageDelta,
                includeMessageStop: !claudeEmptyResponseLifecycle.hasMessageStop,
              });
            }
            clearPendingPassthroughEvent();

            if (passthroughResponsesId) {
              const requestInput =
                body && typeof body === "object" && Array.isArray((body as JsonRecord).input)
                  ? ((body as JsonRecord).input as unknown[])
                  : [];
              rememberResponseConversationState(
                passthroughResponsesId,
                requestInput,
                passthroughResponsesOutputItems
              );
            }

            if (passthroughResponsesId && passthroughResponsesOutputItems.length > 0) {
              rememberResponseFunctionCalls(
                passthroughResponsesId,
                passthroughResponsesOutputItems
              );
            }

=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
            // Estimate usage if provider didn't return valid usage
            if (!hasValidUsage(usage) && totalContentLength > 0) {
              usage = estimateUsage(body, totalContentLength, sourceFormat || FORMATS.OPENAI);
            }

            if (hasValidUsage(usage)) {
              logUsage(provider, usage, model, connectionId, apiKeyInfo);
            } else {
              appendRequestLog({
                model,
                provider,
                connectionId,
                tokens: null,
                status: "200 OK",
              }).catch(() => {});
            }
<<<<<<< HEAD
            if (!doneSent) {
              await emitFinalSseMetadata(controller, usage);
              doneSent = true;
              if (!clientExpectsResponsesStream) {
                clientPayloadCollector.push({ done: true });
                const doneOutput = "data: [DONE]\n\n";
                reqLogger?.appendConvertedChunk?.(doneOutput);
                controller.enqueue(encoder.encode(doneOutput));
              }
            }
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
            // Notify caller for call log persistence (include full response body with accumulated content)
            if (onComplete) {
              try {
                const u = usage as Record<string, unknown> | null;
                const prompt = Number(u?.prompt_tokens ?? u?.input_tokens ?? 0);
                const completion = Number(u?.completion_tokens ?? u?.output_tokens ?? 0);
                const content = passthroughAccumulatedContent.trim() || "";
                const message: Record<string, unknown> = {
                  role: "assistant",
                  content: content || null,
                };
                const reasoning = passthroughAccumulatedReasoning.trim();
                if (reasoning) {
                  message.reasoning_content = reasoning;
                }
                if (passthroughToolCalls.size > 0) {
                  message.tool_calls = [...passthroughToolCalls.values()].sort(
                    (a, b) => a.index - b.index
                  );
                }
                const responseBody = {
                  choices: [
                    {
                      message,
                      finish_reason: passthroughHasToolCalls ? "tool_calls" : "stop",
                    },
                  ],
                  usage: {
                    prompt_tokens: prompt,
                    completion_tokens: completion,
                    total_tokens: prompt + completion,
                  },
                  _streamed: true,
                };
                onComplete({
                  status: 200,
                  usage,
                  responseBody,
                  providerPayload: providerPayloadCollector.build(
                    buildStreamSummaryFromEvents(
                      providerPayloadCollector.getEvents(),
                      sourceFormat,
                      model
                    ),
                    { includeEvents: false }
                  ),
                  clientPayload: clientPayloadCollector.build(responseBody, {
                    includeEvents: false,
                  }),
                });
              } catch {}
            }
            return;
          }

          // Translate mode: process remaining buffer
          if (buffer.trim()) {
            const parsed = parseSSELine(buffer.trim());
            if (parsed && !parsed.done) {
              providerPayloadCollector.push(parsed);
              // Extract usage from remaining buffer — if the usage-bearing event
              // (e.g. response.completed) is the last SSE line, it ends up here
              // in the flush handler where extractUsage was not called.
              // Non-destructive merge: some providers send usage across multiple
              // events (e.g. prompt_tokens in message_start, completion_tokens
              // in message_delta). Direct assignment would lose earlier data.
              const extracted = extractUsage(parsed);
              if (extracted) {
                if (!state.usage) {
                  state.usage = extracted;
                } else {
                  const su = state.usage as Record<string, number>;
                  const eu = extracted as Record<string, number>;
                  if (eu.prompt_tokens > 0) su.prompt_tokens = eu.prompt_tokens;
                  if (eu.completion_tokens > 0) su.completion_tokens = eu.completion_tokens;
                  if (eu.total_tokens > 0) su.total_tokens = eu.total_tokens;
                  if (eu.cache_read_input_tokens > 0)
                    su.cache_read_input_tokens = eu.cache_read_input_tokens;
                  if (eu.cache_creation_input_tokens > 0)
                    su.cache_creation_input_tokens = eu.cache_creation_input_tokens;
                  if (eu.cached_tokens > 0) su.cached_tokens = eu.cached_tokens;
                  if (eu.reasoning_tokens > 0) su.reasoning_tokens = eu.reasoning_tokens;
                }
              }

              const translated = translateResponse(targetFormat, sourceFormat, parsed, state);

              // Log OpenAI intermediate chunks
              for (const item of getOpenAIIntermediateChunks(translated)) {
                const openaiOutput = formatSSE(item, FORMATS.OPENAI);
                reqLogger?.appendOpenAIChunk?.(openaiOutput);
              }

              if (translated?.length > 0) {
                for (const item of translated) {
<<<<<<< HEAD
=======
                  const output = formatSSE(item, sourceFormat);
                  clientPayloadCollector.push(item);
                  reqLogger?.appendConvertedChunk?.(output);
                  controller.enqueue(encoder.encode(output));
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                }
              }
            }
          }

          if (state?.upstreamError) {
            const err = state.upstreamError;
            trackPendingRequest(model, provider, connectionId, false);
<<<<<<< HEAD
            if (onFailure) {
              try {
                void onFailure({
                  status: err.status,
                  message: err.message,
                  code: err.code,
                  type: err.type,
                });
              } catch {}
            }
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

            const errorBody = buildErrorBody(err.status, err.message);
            if (onComplete) {
              try {
                onComplete({
                  status: err.status,
                  usage: state?.usage,
                  responseBody: errorBody,
                  providerPayload: providerPayloadCollector.build(
                    buildStreamSummaryFromEvents(
                      providerPayloadCollector.getEvents(),
                      targetFormat,
                      model
                    ),
                    { includeEvents: false }
                  ),
                  clientPayload: clientPayloadCollector.build(errorBody, {
                    includeEvents: false,
                  }),
                });
              } catch {}
            }

<<<<<<< HEAD
            clearIdleTimer();
            controller.error(
              markPendingRequestCleared(new Error(err.message || "Upstream failure"))
            );
=======
            controller.error(new Error(err.message || "Upstream failure"));
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
            return;
          }

          // Flush remaining events (only once at stream end)
          const flushed = translateResponse(targetFormat, sourceFormat, null, state);

          // Log OpenAI intermediate chunks for flushed events
          for (const item of getOpenAIIntermediateChunks(flushed)) {
            const openaiOutput = formatSSE(item, FORMATS.OPENAI);
            reqLogger?.appendOpenAIChunk?.(openaiOutput);
          }

          if (flushed?.length > 0) {
            for (const item of flushed) {
<<<<<<< HEAD
=======
              const output = formatSSE(item, sourceFormat);
              clientPayloadCollector.push(item);
              reqLogger?.appendConvertedChunk?.(output);
              controller.enqueue(encoder.encode(output));
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
            }
          }

          /**
           * Usage injection strategy:
           * Usage data (input/output tokens) is injected into the last content chunk
           * or the finish_reason chunk rather than sent as a separate SSE event.
           * This ensures all major clients (Claude CLI, Continue, Cursor) receive
           * usage data even if they stop reading after the finish signal.
           * The usage buffer (state.usage) accumulates across chunks and is only
           * emitted once at stream end when merged into the final translated chunk.
           */

          // Send [DONE] (only if not already sent during transform)
          if (!doneSent) {
<<<<<<< HEAD
            await emitFinalSseMetadata(controller, state?.usage as Record<string, unknown> | null);
            doneSent = true;
=======
            doneSent = true;
            clientPayloadCollector.push({ done: true });
            const doneOutput = "data: [DONE]\n\n";
            reqLogger?.appendConvertedChunk?.(doneOutput);
            controller.enqueue(encoder.encode(doneOutput));
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          }

          // Estimate usage if provider didn't return valid usage (for translate mode)
          if (!hasValidUsage(state?.usage) && totalContentLength > 0) {
            state.usage = estimateUsage(body, totalContentLength, sourceFormat);
          }

          if (hasValidUsage(state?.usage)) {
            logUsage(state.provider || targetFormat, state.usage, model, connectionId, apiKeyInfo);
          } else {
            appendRequestLog({
              model,
              provider,
              connectionId,
              tokens: null,
              status: "200 OK",
            }).catch(() => {});
          }
          // Notify caller for call log persistence (include full response body with accumulated content)
          if (onComplete) {
            try {
              const u = state?.usage as Record<string, unknown> | null | undefined;
              const prompt = Number(u?.prompt_tokens ?? u?.input_tokens ?? 0);
              const completion = Number(u?.completion_tokens ?? u?.output_tokens ?? 0);
              const content = (state?.accumulatedContent ?? "").trim() || "";
              const message: Record<string, unknown> = {
                role: "assistant",
                content: content || null,
              };
              const hasToolCalls = state?.toolCalls?.size > 0;
              if (hasToolCalls) {
                // Normalize shape — translators may store different structures
                message.tool_calls = [...state.toolCalls.values()]
                  .map(
                    (tc: Record<string, unknown>): ToolCall => ({
                      id: (tc.id as string) ?? null,
                      index: (tc.index as number) ?? (tc.blockIndex as number) ?? 0,
                      type: (tc.type as string) ?? "function",
                      function: (tc.function as ToolCall["function"]) ?? {
                        name: (tc.name as string) ?? "",
                        arguments: "",
                      },
                    })
                  )
                  .sort((a, b) => a.index - b.index);
              }
              const responseBody = {
                choices: [
                  {
                    message,
                    finish_reason: hasToolCalls ? "tool_calls" : "stop",
                  },
                ],
                usage: {
                  prompt_tokens: prompt,
                  completion_tokens: completion,
                  total_tokens: prompt + completion,
                },
                _streamed: true,
              };
              onComplete({
                status: 200,
                usage: state?.usage,
                responseBody,
                providerPayload: providerPayloadCollector.build(
                  buildStreamSummaryFromEvents(
                    providerPayloadCollector.getEvents(),
                    targetFormat,
                    model
                  ),
                  { includeEvents: false }
                ),
                clientPayload: clientPayloadCollector.build(responseBody, {
                  includeEvents: false,
                }),
              });
            } catch {}
          }
        } catch (error) {
          console.log(`[STREAM] Error in flush (${model || "unknown"}):`, error.message || error);
        }
      },
    },
    // Writable side backpressure — limit buffered chunks to avoid unbounded memory
    { highWaterMark: 16 },
    // Readable side backpressure — limit queued output chunks
    { highWaterMark: 16 }
  );
}

// Convenience functions for backward compatibility
export function createSSETransformStreamWithLogger(
  targetFormat: string,
  sourceFormat: string,
  provider: string | null = null,
  reqLogger: StreamLogger | null = null,
  toolNameMap: unknown = null,
  model: string | null = null,
  connectionId: string | null = null,
  body: unknown = null,
  onComplete: ((payload: StreamCompletePayload) => void) | null = null,
<<<<<<< HEAD
  apiKeyInfo: unknown = null,
  onFailure: ((payload: StreamFailurePayload) => void | Promise<void>) | null = null,
  copilotCompatibleReasoning = false
=======
  apiKeyInfo: unknown = null
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
) {
  return createSSEStream({
    mode: STREAM_MODE.TRANSLATE,
    targetFormat,
    sourceFormat,
    provider,
    reqLogger,
    toolNameMap,
    model,
    connectionId,
    apiKeyInfo,
    body,
    onComplete,
<<<<<<< HEAD
    onFailure,
    copilotCompatibleReasoning,
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  });
}

export function createPassthroughStreamWithLogger(
  provider: string | null = null,
  reqLogger: StreamLogger | null = null,
  toolNameMap: unknown = null,
  model: string | null = null,
  connectionId: string | null = null,
  body: unknown = null,
  onComplete: ((payload: StreamCompletePayload) => void) | null = null,
<<<<<<< HEAD
  apiKeyInfo: unknown = null,
  onFailure: ((payload: StreamFailurePayload) => void | Promise<void>) | null = null,
  clientResponseFormat: string | null = null
=======
  apiKeyInfo: unknown = null
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
) {
  return createSSEStream({
    mode: STREAM_MODE.PASSTHROUGH,
    provider,
    reqLogger,
    toolNameMap,
    model,
    connectionId,
    apiKeyInfo,
    body,
    onComplete,
<<<<<<< HEAD
    onFailure,
    clientResponseFormat,
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  });
}
