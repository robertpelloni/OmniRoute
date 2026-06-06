import { NextResponse } from "next/server";
import { getCacheMetrics, resetCacheMetrics } from "@/lib/db/settings";
<<<<<<< HEAD
=======

export async function GET() {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  try {
    const metrics = await getCacheMetrics();
    return NextResponse.json(metrics);
  } catch (error) {
    console.error("Error getting cache metrics:", error);
    return NextResponse.json({ error: "Failed to load cache metrics" }, { status: 500 });
  }
}

<<<<<<< HEAD
=======
export async function DELETE() {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  try {
    const metrics = await resetCacheMetrics();
    return NextResponse.json(metrics);
  } catch (error) {
    console.error("Error resetting cache metrics:", error);
    return NextResponse.json({ error: "Failed to reset cache metrics" }, { status: 500 });
  }
}
