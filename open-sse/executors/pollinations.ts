import { BaseExecutor } from "./base.ts";
import { PROVIDERS } from "../config/constants.ts";

/**
<<<<<<< HEAD
 * PollinationsExecutor — OpenAI-compatible Pollinations text endpoint.
 *
 * Pollinations currently exposes a public endpoint and an optional key-backed tier.
 * OmniRoute sends the bearer token when configured, but no auth header is required
 * for the anonymous endpoint.
=======
 * PollinationsExecutor — handles optional API key auth.
 * Pollinations AI works WITHOUT any API key for basic use (1 req/15s).
 * If an API key is provided, higher rate limits apply.
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
 *
 * Endpoint: https://text.pollinations.ai/openai/chat/completions
 * Docs: https://pollinations.ai/docs
 */
export class PollinationsExecutor extends BaseExecutor {
  constructor() {
    super("pollinations", PROVIDERS["pollinations"] || { format: "openai" });
  }

<<<<<<< HEAD
  buildUrl(_model: string, _stream: boolean, urlIndex = 0, _credentials = null): string {
    const baseUrls = this.getBaseUrls();
    return (
      baseUrls[urlIndex] || baseUrls[0] || "https://text.pollinations.ai/openai/chat/completions"
    );
  }

  buildHeaders(credentials: any, stream = true): Record<string, string> {
    const key = credentials?.apiKey || credentials?.accessToken;

=======
  buildUrl(_model: string, _stream: boolean, _urlIndex = 0, _credentials = null): string {
    return "https://text.pollinations.ai/openai/chat/completions";
  }

  buildHeaders(credentials: any, stream = true): Record<string, string> {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

<<<<<<< HEAD
    if (key) {
      headers.Authorization = `Bearer ${key}`;
=======
    // API key is OPTIONAL — skip Authorization header if no key provided
    const key = credentials?.apiKey || credentials?.accessToken;
    if (key) {
      headers["Authorization"] = `Bearer ${key}`;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    }

    if (stream) {
      headers["Accept"] = "text/event-stream";
    }

    return headers;
  }

  transformRequest(model: string, body: any, _stream: boolean, _credentials: any): any {
<<<<<<< HEAD
    // Pollinations uses provider aliases directly: "openai", "claude", "gemini", etc.
=======
    // Pollinations uses model names directly like "openai", "claude", "deepseek", etc.
    // No transformation needed — the model name is already the Pollinations alias.
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    return body;
  }
}

export default PollinationsExecutor;
