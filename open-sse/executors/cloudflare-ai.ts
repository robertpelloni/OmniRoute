import { BaseExecutor } from "./base.ts";
import { PROVIDERS } from "../config/constants.ts";

<<<<<<< HEAD
type CloudflareCredentials = {
  apiKey?: string;
  accessToken?: string;
  accountId?: string;
  providerSpecificData?: {
    accountId?: string;
  } | null;
} | null;

=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
/**
 * CloudflareAIExecutor — handles dynamic URL construction with accountId.
 * Cloudflare Workers AI uses the authenticated user's account ID in the URL.
 *
 * URL pattern: https://api.cloudflare.com/client/v4/accounts/{accountId}/ai/v1/chat/completions
 * Auth: Bearer <API Token>
 * Docs: https://developers.cloudflare.com/workers-ai/
 *
 * Free tier: 10,000 Neurons/day = ~150 LLM responses or 500s Whisper audio
 * API Token: dash.cloudflare.com/profile/api-tokens
 * Account ID: right sidebar of dash.cloudflare.com
 */
export class CloudflareAIExecutor extends BaseExecutor {
  constructor() {
    super("cloudflare-ai", PROVIDERS["cloudflare-ai"] || { format: "openai" });
  }

<<<<<<< HEAD
  buildUrl(
    _model: string,
    _stream: boolean,
    _urlIndex = 0,
    credentials: CloudflareCredentials = null
  ): string {
=======
  buildUrl(_model: string, _stream: boolean, _urlIndex = 0, credentials: any = null): string {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    // Account ID can be stored in providerSpecificData or at top level credentials
    const accountId =
      credentials?.providerSpecificData?.accountId ||
      credentials?.accountId ||
      process.env.CLOUDFLARE_ACCOUNT_ID;

    if (!accountId) {
      throw new Error(
        "Cloudflare Workers AI requires an Account ID. " +
          "Add it in provider settings under 'Account ID'. " +
          "Find it at: https://dash.cloudflare.com (right sidebar)."
      );
    }

    return `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/v1/chat/completions`;
  }

<<<<<<< HEAD
  buildHeaders(credentials: CloudflareCredentials, stream = true): Record<string, string> {
=======
  buildHeaders(credentials: any, stream = true): Record<string, string> {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${credentials.apiKey || credentials.accessToken}`,
    };

    if (stream) {
      headers["Accept"] = "text/event-stream";
    }

    return headers;
  }

<<<<<<< HEAD
  transformRequest(
    _model: string,
    body: Record<string, unknown>,
    _stream: boolean,
    _credentials: CloudflareCredentials
  ): Record<string, unknown> {
=======
  transformRequest(_model: string, body: any, _stream: boolean, _credentials: any): any {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    // Cloudflare uses full model paths like @cf/meta/llama-3.3-70b-instruct
    // No transformation needed — user sends the full Cloudflare model path.
    return body;
  }
}

export default CloudflareAIExecutor;
