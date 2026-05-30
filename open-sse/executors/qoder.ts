<<<<<<< Updated upstream
import {
  BaseExecutor,
  mergeUpstreamExtraHeaders,
  type ExecuteInput,
  type ProviderCredentials,
} from "./base.ts";
import { PROVIDERS } from "../config/constants.ts";
import { getQoderDashscopeCompatHeaders } from "../config/providerHeaderProfiles.ts";
import { sanitizeQwenThinkingToolChoice } from "../services/qwenThinking.ts";

function getAuthToken(credentials: ProviderCredentials): string {
  if (typeof credentials.apiKey === "string" && credentials.apiKey.trim()) {
    return credentials.apiKey.trim();
  }
  if (typeof credentials.accessToken === "string" && credentials.accessToken.trim()) {
    return credentials.accessToken.trim();
  }
  if (typeof credentials.refreshToken === "string" && credentials.refreshToken.trim()) {
    return credentials.refreshToken.trim();
  }
  // Fallback: QODER_PERSONAL_ACCESS_TOKEN env var (#966)
  const envToken = String(process.env.QODER_PERSONAL_ACCESS_TOKEN || "").trim();
  if (envToken) return envToken;
  return "";
}

=======
import crypto from "crypto";
import { BaseExecutor } from "./base.ts";
import { PROVIDERS } from "../config/constants.ts";

type QoderCredentials = {
  apiKey?: string;
  accessToken?: string;
};

/**
 * QoderExecutor - Executor for Qoder API with HMAC-SHA256 signature.
 *
 * Qoder requires custom headers including a session ID, timestamp,
 * and an HMAC-SHA256 signature for request authentication.
 * Without these headers, the API returns a 406 error.
 *
 * Fixes: https://github.com/diegosouzapw/OmniRoute/issues/114
 */
>>>>>>> Stashed changes
export class QoderExecutor extends BaseExecutor {
  constructor() {
    super("qoder", PROVIDERS.qoder);
  }

<<<<<<< Updated upstream
  transformRequest(model: string, body: unknown): Record<string, unknown> {
    const payload = {
      ...(typeof body === "object" && body !== null ? body : {}),
      model,
    };

    return sanitizeQwenThinkingToolChoice(payload, "QoderExecutor");
  }

  async execute({ model, body, stream, credentials, signal, upstreamExtraHeaders }: ExecuteInput) {
    const token = getAuthToken(credentials);

    if (!token) {
      return {
        response: new Response(
          JSON.stringify({
            error: {
              message: "Qoder access token or API Key is required. Please sign in or set a PAT.",
              type: "authentication_error",
              code: "token_required",
            },
          }),
          { status: 401, headers: { "Content-Type": "application/json" } }
        ),
        url: "https://dashscope.aliyuncs.com",
        headers: { "Content-Type": "application/json" },
        transformedBody: body,
      };
    }

    const resolvedModel = model || "qwen3-coder-plus";

    // Check if it's a model-alias matching QwenCode
    let mappedModel = resolvedModel;
    if (resolvedModel === "qwen3.5-plus" || resolvedModel === "qwen3.6-plus") {
      mappedModel = "coder-model"; // Translate alias to what DashScope compatible endpoint accepts via QwenCode tokens
    } else if (resolvedModel === "vision-model") {
      mappedModel = "qwen3-vl-plus";
    }

    // Determine the resource URL: Qwen CLI tokens usually target portal.qwen.ai natively,
    // but the DashScope compatible endpoint works out of the box when authtype is set.
    // If the token was mapped to a custom `resource_url`, we should use it. Otherwise default to dashscope Aliyun.
    let endpointUrl = "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions";

    // We allow setting custom API base via credentials
    let credentialsApiBase: unknown;
    if (typeof credentials === "object" && credentials !== null) {
      const credsObj = credentials as Record<string, unknown>;
      credentialsApiBase = credsObj.customApiBase || credsObj.resourceUrl;
    }
    if (typeof credentialsApiBase === "string" && credentialsApiBase.trim()) {
      let base = credentialsApiBase.trim();
      if (!base.startsWith("http")) base = `https://${base}`;
      if (!base.endsWith("/v1")) base = base.endsWith("/") ? `${base}v1` : `${base}/v1`;
      endpointUrl = `${base}/chat/completions`;
    }

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...getQoderDashscopeCompatHeaders(),
    };

    mergeUpstreamExtraHeaders(headers, upstreamExtraHeaders);

    const payload = this.transformRequest(mappedModel, body, stream, credentials);

    const bodyStr = JSON.stringify(payload);

    try {
      const response = await fetch(endpointUrl, {
        method: "POST",
        headers,
        body: bodyStr,
        signal,
      });

      const newHeaders = new Headers(response.headers);

      if (!response.ok) {
        let errText = await response.text();
        return {
          response: new Response(
            JSON.stringify({
              error: {
                message: `Qoder API failed with status ${response.status}: ${errText}`,
                type: response.status === 401 ? "authentication_error" : "provider_error",
              },
            }),
            { status: response.status, headers: { "Content-Type": "application/json" } }
          ),
          url: endpointUrl,
          headers,
          transformedBody: payload,
        };
      }

      return {
        response: new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders,
        }),
        url: endpointUrl,
        headers,
        transformedBody: payload,
      };
    } catch (e: unknown) {
      const error = e as Error;
      if (error.name === "AbortError") {
        throw error;
      }
      return {
        response: new Response(
          JSON.stringify({
            error: {
              message: `Qoder fetch error: ${error.message}`,
              type: "provider_error",
            },
          }),
          { status: 502, headers: { "Content-Type": "application/json" } }
        ),
        url: endpointUrl,
        headers,
        transformedBody: payload,
      };
    }
=======
  /**
   * Create Qoder signature using HMAC-SHA256
   * @param userAgent - User agent string
   * @param sessionID - Session ID
   * @param timestamp - Unix timestamp in milliseconds
   * @param apiKey - API key for signing
   * @returns Hex-encoded signature
   */
  createQoderSignature(
    userAgent: string,
    sessionID: string,
    timestamp: number,
    apiKey: string
  ): string {
    if (!apiKey) return "";
    const payload = `${userAgent}:${sessionID}:${timestamp}`;
    const hmac = crypto.createHmac("sha256", apiKey);
    hmac.update(payload);
    return hmac.digest("hex");
  }

  /**
   * Build headers with Qoder-specific HMAC-SHA256 signature.
   * Includes session-id, x-qoder-timestamp, and x-qoder-signature.
   */
  buildHeaders(credentials: QoderCredentials, stream = true) {
    // Generate session ID and timestamp
    const sessionID = `session-${crypto.randomUUID()}`;
    const timestamp = Date.now();

    // Get user agent from config
    const userAgent = this.config.headers?.["User-Agent"] || "Qoder-Cli";

    // Get API key (prefer apiKey, fallback to accessToken)
    const apiKey = credentials.apiKey || credentials.accessToken || "";

    // Create HMAC-SHA256 signature
    const signature = this.createQoderSignature(userAgent, sessionID, timestamp, apiKey);

    // Build headers
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...this.config.headers,
      "session-id": sessionID,
      "x-qoder-timestamp": timestamp.toString(),
      "x-qoder-signature": signature,
    };

    // Add authorization
    if (credentials.apiKey) {
      headers["Authorization"] = `Bearer ${credentials.apiKey}`;
    } else if (credentials.accessToken) {
      headers["Authorization"] = `Bearer ${credentials.accessToken}`;
    }

    // Add streaming header
    if (stream) {
      headers["Accept"] = "text/event-stream";
    }

    return headers;
  }

  /**
   * Build URL for Qoder API — uses baseUrl directly.
   */
  buildUrl(
    model: string,
    stream: boolean,
    urlIndex = 0,
    credentials: QoderCredentials | null = null
  ) {
    void model;
    void stream;
    void urlIndex;
    void credentials;
    return this.config.baseUrl;
  }

  /**
   * Transform request body (passthrough for Qoder).
   */
  transformRequest(model: string, body: unknown, stream: boolean, credentials: QoderCredentials) {
    void model;
    void stream;
    void credentials;
    return body;
>>>>>>> Stashed changes
  }
}

export default QoderExecutor;
