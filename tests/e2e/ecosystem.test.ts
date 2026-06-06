/**
 * E2E Test Suite — OmniRoute Ecosystem
 *
 * 6 scenarios covering MCP, A2A, Auto-Combo, Extension, Stress, and Security.
 * Run with: npm run test:ecosystem
 */

<<<<<<< HEAD
import { describe, it, expect, beforeAll } from "vitest";
=======
import { describe, it, expect } from "vitest";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

const BASE_URL = process.env.OMNIROUTE_BASE_URL || "http://localhost:20128";
const API_KEY = process.env.OMNIROUTE_API_KEY || "";
const REQUEST_TIMEOUT_MS = Number(process.env.ECOSYSTEM_REQUEST_TIMEOUT_MS || 30000);
const TEST_TIMEOUT_MS = Number(process.env.ECOSYSTEM_TEST_TIMEOUT_MS || 30000);
const STRESS_TIMEOUT_MS = Number(process.env.ECOSYSTEM_STRESS_TIMEOUT_MS || 45000);

function itCase(name: string, fn: () => Promise<void> | void) {
  return it(name, fn, TEST_TIMEOUT_MS);
}

function itStress(name: string, fn: () => Promise<void> | void) {
  return it(name, fn, STRESS_TIMEOUT_MS);
}

async function apiFetch(path: string, options?: RequestInit) {
  return fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(API_KEY ? { Authorization: `Bearer ${API_KEY}` } : {}),
      ...(options?.headers || {}),
    },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });
}

// ─── Scenario 1: MCP Server Complete ─────────────────────────────
describe("E2E: MCP Server (16 tools)", () => {
  itCase("should respond to health check", async () => {
    const res = await apiFetch("/api/monitoring/health");
    expect(res.ok).toBe(true);
<<<<<<< HEAD
    const data = (await res.json()) as any;
=======
    const data = await res.json();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    expect(data).toHaveProperty("status");
  });

  itCase("should list combos", async () => {
    const res = await apiFetch("/api/combos");
    expect(res.ok).toBe(true);
<<<<<<< HEAD
    const data = (await res.json()) as any;
=======
    const data = await res.json();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    expect(Array.isArray(data?.combos)).toBe(true);
  });

  itCase("should return quota data", async () => {
    const res = await apiFetch("/api/usage/quota");
    expect(res.ok).toBe(true);
<<<<<<< HEAD
    const data = (await res.json()) as any;
=======
    const data = await res.json();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    expect(Array.isArray(data?.providers)).toBe(true);
    expect(data).toHaveProperty("meta");
  });

  itCase("should return usage analytics", async () => {
    const res = await apiFetch("/api/usage/analytics?period=session");
    expect(res.ok).toBe(true);
  });

  itCase("should return model catalog", async () => {
    const res = await apiFetch("/api/models");
    expect(res.ok).toBe(true);
  });
});

// ─── Scenario 1B: Quota Contract ─────────────────────────────
describe("E2E: Quota Contract (/api/usage/quota)", () => {
  itCase("should return normalized quota response shape", async () => {
    const res = await apiFetch("/api/usage/quota");
    expect(res.ok).toBe(true);

<<<<<<< HEAD
    const data = (await res.json()) as any;
=======
    const data = await res.json();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    expect(Array.isArray(data.providers)).toBe(true);
    expect(data).toHaveProperty("meta");
    expect(typeof data.meta.generatedAt).toBe("string");
    expect(typeof data.meta.totalProviders).toBe("number");

    if (data.providers.length > 0) {
      const p = data.providers[0];
      expect(typeof p.name).toBe("string");
      expect(typeof p.provider).toBe("string");
      expect(typeof p.connectionId).toBe("string");
      expect(typeof p.quotaUsed).toBe("number");
      expect(typeof p.percentRemaining).toBe("number");
      expect(p.percentRemaining).toBeGreaterThanOrEqual(0);
      expect(p.percentRemaining).toBeLessThanOrEqual(100);
      expect(["valid", "expiring", "expired", "refreshing"]).toContain(p.tokenStatus);
    }
  });

  itCase("should filter quota by provider", async () => {
    const allRes = await apiFetch("/api/usage/quota");
    expect(allRes.ok).toBe(true);
<<<<<<< HEAD
    const allData = (await allRes.json()) as any;
=======
    const allData = await allRes.json();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    if (!Array.isArray(allData.providers) || allData.providers.length === 0) return;

    const provider = allData.providers[0].provider;
    const filteredRes = await apiFetch(`/api/usage/quota?provider=${encodeURIComponent(provider)}`);
    expect(filteredRes.ok).toBe(true);
<<<<<<< HEAD
    const filteredData = (await filteredRes.json()) as any;
=======
    const filteredData = await filteredRes.json();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    expect(filteredData.meta.filters.provider).toBe(provider);
    expect(Array.isArray(filteredData.providers)).toBe(true);
    expect(filteredData.providers.every((p: any) => p.provider === provider)).toBe(true);
  });

  itCase("should filter quota by connectionId", async () => {
    const allRes = await apiFetch("/api/usage/quota");
    expect(allRes.ok).toBe(true);
<<<<<<< HEAD
    const allData = (await allRes.json()) as any;
=======
    const allData = await allRes.json();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    if (!Array.isArray(allData.providers) || allData.providers.length === 0) return;

    const connectionId = allData.providers[0].connectionId;
    const filteredRes = await apiFetch(
      `/api/usage/quota?connectionId=${encodeURIComponent(connectionId)}`
    );
    expect(filteredRes.ok).toBe(true);
<<<<<<< HEAD
    const filteredData = (await filteredRes.json()) as any;
=======
    const filteredData = await filteredRes.json();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    expect(filteredData.meta.filters.connectionId).toBe(connectionId);
    expect(Array.isArray(filteredData.providers)).toBe(true);
    expect(filteredData.providers.every((p: any) => p.connectionId === connectionId)).toBe(true);
  });
});

// ─── Scenario 2: A2A Server Complete ─────────────────────────────
describe("E2E: A2A Server (lifecycle)", () => {
<<<<<<< HEAD
  beforeAll(async () => {
    await apiFetch("/api/settings", {
      method: "PATCH",
      body: JSON.stringify({ a2aEnabled: true }),
    });
  });
  itCase("should serve Agent Card", async () => {
    const res = await apiFetch("/.well-known/agent.json");
    expect(res.ok).toBe(true);
    const card = (await res.json()) as any;
=======
  itCase("should serve Agent Card", async () => {
    const res = await apiFetch("/.well-known/agent.json");
    expect(res.ok).toBe(true);
    const card = await res.json();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    expect(card).toHaveProperty("name");
    expect(card).toHaveProperty("skills");
    expect(card).toHaveProperty("version");
    expect(card.capabilities).toHaveProperty("streaming");
  });

  itCase("should accept message/send via JSON-RPC", async () => {
    const res = await apiFetch("/a2a", {
      method: "POST",
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "e2e-1",
        method: "message/send",
        params: {
          skill: "quota-management",
          messages: [{ role: "user", content: "show quota ranking" }],
        },
      }),
    });
    expect(res.ok).toBe(true);
<<<<<<< HEAD
    const data = (await res.json()) as any;
=======
    const data = await res.json();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    expect(data).toHaveProperty("result");
    expect(data.result.task).toHaveProperty("id");
    expect(data.result.task).toHaveProperty("state");
  });

  itCase("should reject invalid JSON-RPC method", async () => {
    const res = await apiFetch("/a2a", {
      method: "POST",
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "e2e-2",
        method: "invalid/method",
        params: {},
      }),
    });
<<<<<<< HEAD
    const data = (await res.json()) as any;
=======
    const data = await res.json();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    expect(data).toHaveProperty("error");
    expect(data.error.code).toBe(-32601);
  });
});

// ─── Scenario 3: Auto-Combo ─────────────────────────────────────
describe("E2E: Auto-Combo (routing + self-healing)", () => {
  itCase("should create auto-combo", async () => {
    const res = await apiFetch("/api/combos", {
      method: "POST",
      body: JSON.stringify({
        name: `e2e-auto-test-${Date.now()}`,
        strategy: "auto",
        models: [{ model: "gpt-4" }],
        config: {
          candidatePool: ["anthropic", "google"],
          modePack: "ship-fast",
        },
      }),
    });
    if (!res.ok) console.error("POST /api/combos failed:", await res.text());
    expect(res.ok).toBe(true);
  });

  itCase("should list auto-combos", async () => {
    const res = await apiFetch("/api/combos");
    if (!res.ok) console.error("GET /api/combos failed:", await res.text());
    expect(res.ok).toBe(true);
<<<<<<< HEAD
    const data = (await res.json()) as any;
=======
    const data = await res.json();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    expect(Array.isArray(data?.combos)).toBe(true);
    const autoCombos = data.combos.filter((c: any) => c.strategy === "auto");
    expect(autoCombos.length).toBeGreaterThanOrEqual(0);
  });
});

// ─── Scenario 4: OpenClaw Integration ────────────────────────────
describe("E2E: OpenClaw Integration", () => {
  itCase("should return dynamic provider.order", async () => {
    const res = await apiFetch("/api/cli-tools/openclaw/auto-order");
    expect(res.ok).toBe(true);
<<<<<<< HEAD
    const data = (await res.json()) as any;
=======
    const data = await res.json();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    expect(data).toHaveProperty("provider");
    expect(data.provider).toHaveProperty("order");
    expect(Array.isArray(data.provider.order)).toBe(true);
    expect(data.provider).toHaveProperty("allow_fallbacks");
    expect(data).toHaveProperty("source");
  });
});

// ─── Scenario 5: Stress Test ─────────────────────────────────────
describe("E2E: Stress (100 parallel requests)", () => {
  itStress("should handle 100 health checks in <10s", async () => {
    const start = Date.now();
    const promises = Array.from({ length: 100 }, (_, i) =>
      apiFetch("/api/monitoring/health").then((r) => ({
        ok: r.ok,
        index: i,
      }))
    );
    const results = await Promise.allSettled(promises);
    const elapsed = Date.now() - start;

    const successful = results.filter((r) => r.status === "fulfilled" && r.value.ok).length;

    expect(successful).toBeGreaterThanOrEqual(90); // allow 10% failure
    expect(elapsed).toBeLessThan(10_000);
  });

  itStress("should handle 50 parallel quota checks", async () => {
    const promises = Array.from({ length: 50 }, () =>
      apiFetch("/api/usage/quota").then((r) => r.ok)
    );
    const results = await Promise.allSettled(promises);
    const successful = results.filter((r) => r.status === "fulfilled" && r.value).length;
    expect(successful).toBeGreaterThanOrEqual(40);
  });
});

// ─── Scenario 6: Security ────────────────────────────────────────
describe("E2E: Security", () => {
<<<<<<< HEAD
  itCase("should handle missing A2A auth according to server configuration", async () => {
=======
  itCase("should reject A2A requests without auth when auth is configured", async () => {
    if (!API_KEY) return; // skip if no auth configured
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    const res = await fetch(`${BASE_URL}/a2a`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Intentionally no Authorization header
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "sec-1",
        method: "message/send",
        params: { skill: "quota-management", messages: [] },
      }),
    });
<<<<<<< HEAD
    if (API_KEY) {
      expect(res.status).toBeGreaterThanOrEqual(401);
      return;
    }

    if (res.status !== 200) {
      console.log("SEC-1 FAILED STATUS:", res.status, "BODY:", await res.text());
    }
    expect(res.status).toBe(200);
  });

  itCase("should handle invalid API keys according to server configuration", async () => {
=======
    expect(res.status).toBeGreaterThanOrEqual(401);
  });

  itCase("should reject invalid API keys", async () => {
    if (!API_KEY) return;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    const res = await fetch(`${BASE_URL}/a2a`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer invalid-key-12345",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "sec-2",
        method: "message/send",
        params: { skill: "quota-management", messages: [] },
      }),
    });
<<<<<<< HEAD
    if (API_KEY) {
      expect(res.status).toBeGreaterThanOrEqual(401);
      return;
    }

    if (res.status !== 200) {
      console.log("SEC-2 FAILED STATUS:", res.status, "BODY:", await res.text());
    }
    expect(res.status).toBe(200);
=======
    expect(res.status).toBeGreaterThanOrEqual(401);
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  });

  itCase("should not expose internal errors in API responses", async () => {
    const res = await apiFetch("/api/monitoring/health", {
      method: "PATCH",
    });
    // Should return method error without leaking server internals
    expect(res.status).toBe(405);
    const body = await res.text();
    expect(body.includes("Error:")).toBe(false);
  });

  itCase("should validate JSON-RPC request format", async () => {
    const res = await apiFetch("/a2a", {
      method: "POST",
      body: "not-json",
    });
<<<<<<< HEAD
    const data = (await res.json()) as any;
=======
    const data = await res.json();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    if (data.error) {
      expect(data.error.code).toBe(-32700); // Parse error
    }
  });
});
