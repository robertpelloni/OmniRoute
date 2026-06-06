import type { HideableSidebarItemId } from "@/shared/constants/sidebarVisibility";
<<<<<<< HEAD
import type { ResilienceSettings } from "@/lib/resilience/settings";
import type {
  AccountFallbackStrategyValue,
  RoutingStrategyValue,
} from "@/shared/constants/routingStrategies";
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

/**
 * Application settings stored in SQLite key-value pairs.
 */
export interface Settings {
  requireLogin: boolean;
  hasPassword: boolean;
<<<<<<< HEAD
  fallbackStrategy: AccountFallbackStrategyValue;
  stickyRoundRobinLimit: number;
  requestRetry: number;
  maxRetryIntervalSec: number;
  maxBodySizeMb?: number;
  jwtSecret?: string;
  mcpEnabled?: boolean;
  mcpTransport?: "stdio" | "sse" | "streamable-http";
  a2aEnabled?: boolean;
  hideHealthCheckLogs?: boolean;
  hideEndpointCloudflaredTunnel?: boolean;
  hideEndpointTailscaleFunnel?: boolean;
  hideEndpointNgrokTunnel?: boolean;
  hiddenSidebarItems?: HideableSidebarItemId[];
  resilienceSettings?: ResilienceSettings;
}

export interface ComboDefaults {
  strategy: RoutingStrategyValue;
  maxRetries: number;
  retryDelayMs: number;
=======
  fallbackStrategy:
    | "fill-first"
    | "round-robin"
    | "p2c"
    | "random"
    | "least-used"
    | "cost-optimized"
    | "strict-random";
  stickyRoundRobinLimit: number;
  jwtSecret?: string;
  hideHealthCheckLogs?: boolean;
  hiddenSidebarItems?: HideableSidebarItemId[];
}

export interface ComboDefaults {
  strategy: "priority" | "weighted" | "round-robin" | "context-relay";
  maxRetries: number;
  retryDelayMs: number;
  timeoutMs: number;
  healthCheckEnabled: boolean;
  healthCheckTimeoutMs: number;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  maxComboDepth: number;
  trackMetrics: boolean;
  concurrencyPerModel?: number;
  queueTimeoutMs?: number;
  handoffThreshold?: number;
  handoffModel?: string;
  handoffProviders?: string[];
  maxMessagesForSummary?: number;
}

export interface ProxyConfig {
  type: "http" | "https" | "socks5";
  host: string;
  port: number;
  username?: string;
  password?: string;
}

export interface KVPair {
  key: string;
  value: string;
}
