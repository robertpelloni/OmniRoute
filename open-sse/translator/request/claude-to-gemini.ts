import { register } from "../registry.ts";
import { FORMATS } from "../formats.ts";
import {
  DEFAULT_SAFETY_SETTINGS,
  tryParseJSON,
  cleanJSONSchemaForAntigravity,
} from "../helpers/geminiHelper.ts";
import { DEFAULT_THINKING_GEMINI_SIGNATURE } from "../../config/defaultThinkingSignature.ts";
<<<<<<< HEAD
import { buildGeminiTools, sanitizeGeminiToolName } from "../helpers/geminiToolsSanitizer.ts";
import { capMaxOutputTokens } from "../../../src/lib/modelCapabilities.ts";
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

/**
 * Direct Claude → Gemini request translator.
 * Converts Claude Messages API body directly to Gemini format,
 * skipping the OpenAI hub intermediate step.
 */
export function claudeToGeminiRequest(model, body, stream) {
<<<<<<< HEAD
  const toolNameMap = new Map<string, string>();
  const sanitizeToolName = (name: string) =>
    sanitizeGeminiToolName(name, {
      toolNameMap,
    });
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  const result: {
    model: string;
    contents: Array<Record<string, unknown>>;
    generationConfig: Record<string, unknown>;
    safetySettings: unknown;
    systemInstruction?: { role: string; parts: Array<{ text: string }> };
<<<<<<< HEAD
    tools?: Array<{
      functionDeclarations?: Array<Record<string, unknown>>;
      googleSearch?: Record<string, unknown>;
      googleSearchRetrieval?: Record<string, unknown>;
    }>;
    _toolNameMap?: Map<string, string>;
=======
    tools?: Array<{ functionDeclarations: Array<Record<string, unknown>> }>;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  } = {
    model: model,
    contents: [],
    generationConfig: {},
    safetySettings: DEFAULT_SAFETY_SETTINGS,
  };

  // ── Generation config ──────────────────────────────────────────
  if (body.temperature !== undefined) {
    result.generationConfig.temperature = body.temperature;
  }
  if (body.top_p !== undefined) {
    result.generationConfig.topP = body.top_p;
  }
  if (body.top_k !== undefined) {
    result.generationConfig.topK = body.top_k;
  }
  if (body.max_tokens !== undefined) {
<<<<<<< HEAD
    result.generationConfig.maxOutputTokens = capMaxOutputTokens(model, body.max_tokens);
=======
    result.generationConfig.maxOutputTokens = body.max_tokens;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  }

  // ── System instruction ─────────────────────────────────────────
  if (body.system) {
    let systemText;
    if (Array.isArray(body.system)) {
      systemText = body.system.map((s) => s.text || "").join("\n");
    } else {
      systemText = String(body.system);
    }
    if (systemText) {
      result.systemInstruction = {
<<<<<<< HEAD
        role: "system",
=======
        role: "user",
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        parts: [{ text: systemText }],
      };
    }
  }

  // ── Build tool_use name lookup (for tool_result matching) ──────
  const toolUseNames = {};
  if (body.messages && Array.isArray(body.messages)) {
    for (const msg of body.messages) {
      if (msg.role === "assistant" && Array.isArray(msg.content)) {
        for (const block of msg.content) {
          if (block.type === "tool_use" && block.id && block.name) {
<<<<<<< HEAD
            toolUseNames[block.id] = sanitizeToolName(block.name);
=======
            toolUseNames[block.id] = block.name;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          }
        }
      }
    }
  }

  // ── Convert messages ───────────────────────────────────────────
  if (body.messages && Array.isArray(body.messages)) {
    for (const msg of body.messages) {
      const parts = [];

      if (Array.isArray(msg.content)) {
        for (const block of msg.content) {
          switch (block.type) {
            case "text":
              if (block.text) parts.push({ text: block.text });
              break;

            case "thinking":
              // Preserve thinking blocks as thought parts
              if (block.thinking) {
                parts.push({ thought: true, text: block.thinking });
<<<<<<< HEAD
=======
                parts.push({ thoughtSignature: DEFAULT_THINKING_GEMINI_SIGNATURE, text: "" });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
              }
              break;

            case "tool_use":
              parts.push({
                functionCall: {
                  id: block.id,
<<<<<<< HEAD
                  name: sanitizeToolName(block.name),
=======
                  name: block.name,
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
                  args: block.input || {},
                },
              });
              break;

            case "tool_result": {
              let content = block.content;
              if (Array.isArray(content)) {
                content = content
                  .map((c) => (c.type === "text" ? c.text : JSON.stringify(c)))
                  .join("\n");
              }
              let parsedContent = tryParseJSON(content);
              if (parsedContent === null) {
                parsedContent = { result: content };
              } else if (typeof parsedContent !== "object") {
                parsedContent = { result: parsedContent };
              }
              parts.push({
                functionResponse: {
                  id: block.tool_use_id,
                  name: toolUseNames[block.tool_use_id] || "unknown",
                  response: { result: parsedContent },
                },
              });
              break;
            }

            case "image":
              // Base64 image → Gemini inlineData
              if (block.source?.type === "base64") {
                parts.push({
                  inlineData: {
                    mimeType: block.source.media_type,
                    data: block.source.data,
                  },
                });
              }
              break;
          }
        }
      } else if (typeof msg.content === "string" && msg.content) {
        parts.push({ text: msg.content });
      }

      if (parts.length > 0) {
        // Map Claude roles to Gemini roles
        const geminiRole = msg.role === "assistant" ? "model" : "user";

<<<<<<< HEAD
        // Gemini 3+ expects the signature on all functionCall parts in a tool-call
        // batch. If there is no real signature, we don't inject a fake one because
        // Gemini API strictly validates it and returns 400.
        if (geminiRole === "model") {
          // No operation needed since we no longer inject fake signatures.
=======
        // Gemini 3+ expects the signature on the first functionCall part in a tool-call
        // batch. If the assistant turn had no explicit thinking block, inject a fallback
        // signature into that first functionCall. (#927)
        if (geminiRole === "model") {
          const hasFunctionCall = parts.some((p) => p.functionCall);
          const hasSignature = parts.some((p) => p.thoughtSignature);
          if (hasFunctionCall && !hasSignature) {
            const fcIndex = parts.findIndex((p) => p.functionCall);
            if (fcIndex >= 0) {
              parts[fcIndex] = {
                ...parts[fcIndex],
                thoughtSignature: DEFAULT_THINKING_GEMINI_SIGNATURE,
              };
            }
          }
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        }

        result.contents.push({ role: geminiRole, parts });
      }
    }
  }

  // ── Convert tools ──────────────────────────────────────────────
<<<<<<< HEAD
  }

  // ── Thinking config ────────────────────────────────────────────
  // Priority: thinking.budget_tokens (Claude native) > output_config.effort (Claude Code).
  if (model.startsWith("gemma-4")) {
    // gemma-4 models returns - 400: Thinking budget is not supported for this model
  } else if (body.thinking?.type === "enabled" && body.thinking.budget_tokens) {
=======
  if (body.tools && Array.isArray(body.tools) && body.tools.length > 0) {
    const functionDeclarations = [];
    for (const tool of body.tools) {
      if (tool.name) {
        functionDeclarations.push({
          name: tool.name,
          description: tool.description || "",
          parameters: cleanJSONSchemaForAntigravity(
            tool.input_schema || { type: "object", properties: {} }
          ),
        });
      }
    }
    if (functionDeclarations.length > 0) {
      result.tools = [{ functionDeclarations }];
    }
  }

  // ── Thinking config ────────────────────────────────────────────
  if (body.thinking?.type === "enabled" && body.thinking.budget_tokens) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    result.generationConfig.thinkingConfig = {
      thinkingBudget: body.thinking.budget_tokens,
      includeThoughts: true,
    };
<<<<<<< HEAD
  } else if (typeof body.output_config?.effort === "string") {
    const effort = body.output_config.effort.toLowerCase();
    const effortBudgetMap: Record<string, number> = {
      none: 0,
      low: 1024,
      medium: 10240,
      high: 32768,
      max: 131072,
      xhigh: 131072,
    };
    const budget = effortBudgetMap[effort];
    if (budget !== undefined && budget > 0) {
      result.generationConfig.thinkingConfig = {
        thinkingBudget: budget,
        includeThoughts: true,
      };
    }
  }

  const changedToolNameMap = new Map(
    [...toolNameMap.entries()].filter(
      ([sanitizedName, originalName]) => sanitizedName !== originalName
    )
  );
  if (changedToolNameMap.size > 0) {
    result._toolNameMap = changedToolNameMap;
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  }

  return result;
}

// Register direct path only for plain Gemini API.
// Gemini CLI / Antigravity require Cloud Code envelope wrapping,
// so they must use the existing hub path (Claude -> OpenAI -> target).
register(FORMATS.CLAUDE, FORMATS.GEMINI, claudeToGeminiRequest, null);
