import { NextResponse } from "next/server";
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";
import { createProviderConnection } from "@/lib/db/providers";
import { discoverZedCredentials, isZedInstalled } from "@/lib/zed-oauth/keychain-reader";

export async function POST(request: Request, { params }: { params: { action: string } }) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

  const action = params.action;

  if (action === "import") {
    try {
      const body = await request.json().catch(() => ({}));

      // Direct token import flow from dashboard form
      if (body.clientId && body.clientSecret) {
        const providerId = `zed-manual-${Date.now()}`;

        await createProviderConnection({
          provider: "zed",
          authType: "oauth",
          apiKey: `${body.clientId}:${body.clientSecret}`,
          name: `Zed OAuth (${body.clientId.substring(0, 5)}...)`,
          isActive: true,
        });

        return NextResponse.json({
          success: true,
          providerId: "zed",
          message: "Zed credentials imported successfully",
        });
      }

      // Auto-discovery flow from OS keychain
      const installed = await isZedInstalled();
      if (!installed) {
        return NextResponse.json(
          { success: false, error: "Zed IDE is not installed." },
          { status: 404 }
        );
      }

      const credentials = await discoverZedCredentials();
      let imported = 0;

      for (const cred of credentials) {
        if (!cred.token) continue;
        await createProviderConnection({
          provider: cred.provider,
          authType: "apikey",
          apiKey: cred.token,
          name: `Zed Import (${cred.account})`,
          isActive: true,
        });
        imported++;
      }

      return NextResponse.json({ success: true, count: imported });
    } catch (error: any) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
  }

  return NextResponse.json({ success: false, error: "Invalid action" }, { status: 400 });
}
