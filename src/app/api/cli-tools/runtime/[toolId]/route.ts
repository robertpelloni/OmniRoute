"use server";

import { NextResponse } from "next/server";
<<<<<<< HEAD
import { requireCliToolsAuth } from "@/lib/api/requireCliToolsAuth";
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import {
  CLI_TOOL_IDS,
  getCliPrimaryConfigPath,
  getCliRuntimeStatus,
} from "@/shared/services/cliRuntime";

<<<<<<< HEAD
export async function GET(request, { params }) {
  const authError = await requireCliToolsAuth(request);
  if (authError) return authError;

=======
export async function GET(_request, { params }) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  try {
    const { toolId } = await params;
    const normalizedToolId = String(toolId || "")
      .trim()
      .toLowerCase();

    if (!CLI_TOOL_IDS.includes(normalizedToolId)) {
      return NextResponse.json({ error: "Unsupported CLI tool" }, { status: 404 });
    }

    const runtime = await getCliRuntimeStatus(normalizedToolId);
    return NextResponse.json({
      ...runtime,
      toolId: normalizedToolId,
      configPath: getCliPrimaryConfigPath(normalizedToolId),
      message:
        runtime.reason === "not_required"
          ? "This integration is guide-based and does not require a local CLI binary"
          : runtime.installed && runtime.runnable
            ? "CLI detected and runnable"
            : runtime.installed
              ? "CLI detected but not runnable"
              : "CLI not detected",
    });
  } catch (error) {
    console.log("Error checking CLI runtime:", error);
    return NextResponse.json({ error: "Failed to check CLI runtime" }, { status: 500 });
  }
}
