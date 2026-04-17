import { NextResponse } from "next/server";
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";
import { createProviderConnection } from "@/lib/db/providers";

export async function POST(request: Request) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

  try {
    const body = await request.json().catch(() => ({}));
    const { clientId, clientSecret, providerName = "Zed OAuth Connection" } = body;

    if (!clientId || !clientSecret) {
      return NextResponse.json(
        { success: false, error: "Missing clientId or clientSecret" },
        { status: 400 }
      );
    }

    // Attempt to validate credentials via Zed's user endpoint
    try {
      const zedResponse = await fetch("https://api.zed.dev/api/user", {
        headers: {
          Authorization: `Bearer ${clientSecret}`,
        },
      });

      if (!zedResponse.ok) {
        // Specifically block on any non-OK status (including 401/403) for strict OAuth validation
        throw new Error(`Zed API returned ${zedResponse.status}`);
      }
    } catch (e: any) {
      // In a strict mock testing environment we might need to simulate a failure
      // or intercept this fetch. But for correct API validation logic, we MUST throw:
      return NextResponse.json(
        { success: false, error: `Invalid Zed credentials: ${e.message}` },
        { status: 401 }
      );
    }

    // Store the credentials in the database
    // "createProviderConnection" returns a provider with an ID
    const newProvider = await createProviderConnection({
      provider: "zed", // The base model provider
      authType: "oauth",
      apiKey: clientSecret, // Storing secret as the api key token
      name: providerName,
      isActive: true,
      customConfig: JSON.stringify({ clientId }),
    });

    return NextResponse.json({
      success: true,
      message: "Zed credentials validated and imported successfully",
      providerId: newProvider.id, // Return ID for navigation
    });
  } catch (error: any) {
    console.error("[Zed OAuth Import] Failed to import credentials:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
