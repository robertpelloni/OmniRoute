import { NextResponse } from "next/server";
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";
import { getDbInstance as getDb } from "@/lib/db/core";

export async function POST(request: Request) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

  try {
    const body = await request.json().catch(() => ({}));

    // Zed IDE integration hook in Claude-settings
    if (body.action === "importZedCredentials") {
      const { clientId, clientSecret } = body;

      // Store the Zed credentials correctly
      if (clientId && clientSecret) {
        const db = await getDb();
        const stmt = db.prepare(
          "INSERT OR REPLACE INTO providers (id, provider, auth_type, api_key, name, is_active) VALUES (?, ?, ?, ?, ?, ?)"
        );

        stmt.run(
          `zed-${Date.now()}`,
          "zed",
          "oauth",
          `${clientId}:${clientSecret}`,
          `Zed IDE (${clientId.substring(0, 5)}...)`,
          1
        );

        return NextResponse.json({
          success: true,
          message: "Zed credentials mapped successfully.",
        });
      }
      return NextResponse.json(
        { success: false, error: "Missing Zed parameters." },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: false, error: "Unknown action" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
