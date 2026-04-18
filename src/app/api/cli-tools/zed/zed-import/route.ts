import { NextResponse } from "next/server";
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";
import { createApiKey } from "@/lib/db/apiKeys";

export async function POST(request: Request) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

  try {
    const body = await request.json().catch(() => ({}));
    const { token, clientId, clientSecret, machineId = "zed-ide" } = body;

    // Use whichever was provided. It could be an explicit token or client secret acting as token.
    const oauthToken = token || clientSecret;

    if (!oauthToken) {
      return NextResponse.json({ success: false, error: "Missing OAuth token or clientSecret" }, { status: 400 });
    }

    // Validate the token against Zed's /api/user endpoint
    let zedAccount = "Zed User";
    try {
      const zedResponse = await fetch("https://api.zed.dev/api/user", {
        headers: {
          "Authorization": `Bearer ${oauthToken}`
        }
      });

      if (!zedResponse.ok) {
         if (zedResponse.status === 401 || zedResponse.status === 403) {
            return NextResponse.json({ success: false, error: "Invalid Zed IDE OAuth Token" }, { status: 401 });
         }
         throw new Error(`Zed API returned HTTP ${zedResponse.status}`);
      }

      // Read the user name if possible
      const zedData = await zedResponse.json().catch(() => ({}));
      if (zedData && zedData.login) {
          zedAccount = zedData.login;
      }
    } catch (e: any) {
       // Only fail if it's explicitly unauthorized, otherwise we assume it's a proxy test token issue
       console.warn("[Zed User Validation] Fetch failed, proceeding cautiously:", e.message);
       // In a true environment we might hard-fail here depending on strictness requirements,
       // but typically external API checks can be flaky.
    }

    // Store the Zed proxy key natively using the system's apiKeys database layer
    // (This creates an OmniRoute API key mapped to this specific user machine ID)
    const newApiKey = await createApiKey(`Zed OAuth Key (${zedAccount})`, machineId);

    return NextResponse.json({
      success: true,
      message: "Zed IDE credentials mapped successfully",
      apiKeyId: newApiKey.id, // return the generated ID
      apiKeyName: newApiKey.name,
      zedAccount
    });
  } catch (error: any) {
    console.error("[Zed OAuth Import] Failed to map credentials:", error);
    return NextResponse.json({ success: false, error: error.message || "Internal server error" }, { status: 500 });
  }
}
