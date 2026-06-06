/**
 * Provider connection — a configured cloud AI provider account.
 */
export interface ProviderConnection {
  id: string;
  provider: string;
  label: string;
  url: string;
  apiKey?: string;
  oauthToken?: string;
  oauthRefreshToken?: string;
  oauthExpiresAt?: string;
  isActive: boolean;
  priority: number;
  createdAt: string;
  updatedAt: string;
}

/**
 * Provider node — a specific endpoint within a provider.
 */
export interface ProviderNode {
  id: string;
  connectionId: string;
  provider: string;
  model: string;
  baseUrl: string;
  isActive: boolean;
  priority: number;
}
<<<<<<< HEAD

export interface ModelCooldownErrorPayload {
  error: {
    message: string;
    type: "rate_limit_error";
    code: "model_cooldown";
    model?: string;
    reset_seconds: number;
  };
}
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
