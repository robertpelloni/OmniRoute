import { NextResponse } from "next/server";

/**
<<<<<<< HEAD
 * POST /api/resilience/reset — Reset all provider circuit breakers
 */
export async function POST() {
  try {
=======
 * POST /api/resilience/reset — Reset all circuit breakers and clear cooldowns
 */
export async function POST() {
  try {
    // Reset all circuit breakers
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    const { getAllCircuitBreakerStatuses, getCircuitBreaker } =
      await import("@/shared/utils/circuitBreaker");

    const statuses = getAllCircuitBreakerStatuses();
    let resetCount = 0;

    for (const { name } of statuses) {
      const breaker = getCircuitBreaker(name);
      breaker.reset();
      resetCount++;
    }

    return NextResponse.json({
      ok: true,
      resetCount,
      message: `Reset ${resetCount} circuit breaker(s)`,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to reset resilience state";
    console.error("[API] POST /api/resilience/reset error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
