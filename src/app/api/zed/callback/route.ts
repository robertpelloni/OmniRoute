import { NextResponse } from "next/server";
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";
import { createProviderConnection } from "@/lib/db/providers";

export async function POST(request: Request) {
  // Ensure the route is secured
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

  try {
    const body = await request.json().catch(() => ({}));
    const { code, redirectUri, clientId, clientSecret } = body;

    if (!code) {
      return NextResponse.json(
        { success: false, error: "Missing authorization code" },
        { status: 400 }
      );
    }

    // Exchange the authorization code for access/refresh tokens using the Zed OAuth endpoint
    const tokenResponse = await fetch("https://api.zed.dev/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret,
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error(`Failed to exchange token: ${tokenResponse.status}`);
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      throw new Error("Invalid token response from Zed API");
    }

    // Validate the token to get the user info
    let zedAccount = "Zed Authenticated User";
    try {
      const userResponse = await fetch("https://api.zed.dev/api/user", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (userResponse.ok) {
        const userData = await userResponse.json();
        if (userData && userData.login) {
          zedAccount = userData.login;
        }
      }
    } catch (e) {
      console.warn("Could not fetch user details, proceeding with token creation");
    }

    // Store the tokens in the database using the existing OAuth provider infrastructure
    const newProvider = await createProviderConnection({
      provider: "zed",
      authType: "oauth",
      apiKey: accessToken, // Store the primary access token as the API key
      name: `Zed Connection (${zedAccount})`,
      isActive: true,
      customConfig: JSON.stringify({
        refresh_token: tokenData.refresh_token,
        expires_in: tokenData.expires_in,
        client_id: clientId,
      }),
    });

    // Return a success response with the provider ID for the frontend to display
    return NextResponse.json({
      success: true,
      message: "Successfully authenticated with Zed IDE",
      providerId: newProvider.id,
    });
  } catch (error: any) {
    console.error("[Zed OAuth Callback] Error processing callback:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process Zed OAuth callback" },
      { status: 500 }
    );
  }
}
