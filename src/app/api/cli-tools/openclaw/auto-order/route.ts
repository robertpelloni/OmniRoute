/**
 * OpenClaw Integration — Dynamic provider.order based on Auto-Combo scores.
 *
 * GET /api/cli-tools/openclaw/auto-order
 */

import { NextResponse } from "next/server";
<<<<<<< HEAD
import { requireCliToolsAuth } from "@/lib/api/requireCliToolsAuth";
import { getComboModelProvider } from "@/lib/combos/steps";
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import { resolveOmniRouteBaseUrl } from "@/shared/utils/resolveOmniRouteBaseUrl";

const OMNIROUTE_BASE_URL = resolveOmniRouteBaseUrl();

<<<<<<< HEAD
export async function GET(request: Request) {
  const authError = await requireCliToolsAuth(request);
  if (authError) return authError;

=======
export async function GET() {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  try {
    // Fetch current health and combos to determine best provider ordering
    const [healthRes, combosRes] = await Promise.allSettled([
      fetch(`${OMNIROUTE_BASE_URL}/api/monitoring/health`, { signal: AbortSignal.timeout(5000) }),
      fetch(`${OMNIROUTE_BASE_URL}/api/combos`, { signal: AbortSignal.timeout(5000) }),
    ]);

    const health = healthRes.status === "fulfilled" ? await healthRes.value.json() : {};
<<<<<<< HEAD
    const combosPayload = combosRes.status === "fulfilled" ? await combosRes.value.json() : [];
    const combos = Array.isArray(combosPayload)
      ? combosPayload
      : Array.isArray(combosPayload?.combos)
        ? combosPayload.combos
        : [];
=======
    const combos = combosRes.status === "fulfilled" ? await combosRes.value.json() : [];
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

    // Build provider scores from circuit breaker state
    const breakers: any[] = health?.circuitBreakers || [];
    const providerScores = new Map<string, number>();

    // Start all providers with base score
    const allProviders = new Set<string>();
    if (Array.isArray(combos)) {
      for (const combo of combos) {
        for (const model of combo.models || combo.data?.models || []) {
<<<<<<< HEAD
          const provider = getComboModelProvider(model);
          if (!provider) continue;
          allProviders.add(provider);
          providerScores.set(provider, (providerScores.get(provider) || 0) + 1);
=======
          allProviders.add(model.provider);
          providerScores.set(model.provider, (providerScores.get(model.provider) || 0) + 1);
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        }
      }
    }

    // Adjust by circuit breaker state
    for (const cb of breakers) {
      const current = providerScores.get(cb.provider) || 0;
      if (cb.state === "OPEN") providerScores.set(cb.provider, current * 0.1);
      else if (cb.state === "HALF_OPEN") providerScores.set(cb.provider, current * 0.5);
    }

    // Sort by score descending
    const ordered = [...providerScores.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([provider]) => provider);

    return NextResponse.json({
      provider: {
        order: ordered,
        allow_fallbacks: true,
      },
      generated_at: new Date().toISOString(),
      source: "omniroute-auto-combo",
    });
  } catch {
    return NextResponse.json({
      provider: {
        order: ["anthropic", "google", "openai"],
        allow_fallbacks: true,
      },
      generated_at: new Date().toISOString(),
      source: "omniroute-fallback",
    });
  }
}
