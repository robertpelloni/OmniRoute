import { NextResponse } from "next/server";
import { KiroService } from "@/lib/oauth/services/kiro";
import { createProviderConnection, isCloudEnabled, resolveProxyForProvider } from "@/models";
import { getConsistentMachineId } from "@/shared/utils/machineId";
import { syncToCloud } from "@/lib/cloudSync";
import { kiroImportSchema } from "@/shared/validation/schemas";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";
<<<<<<< HEAD
import { isAuthRequired, isAuthenticated } from "@/shared/utils/apiAuth";
import { runWithProxyContext } from "@omniroute/open-sse/utils/proxyFetch.ts";

async function requireOAuthImportAuth(request: Request) {
  if (!(await isAuthRequired(request))) return null;
  if (await isAuthenticated(request)) return null;
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

=======
import { runWithProxyContext } from "@omniroute/open-sse/utils/proxyFetch.ts";

>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
/**
 * POST /api/oauth/kiro/import
 * Import and validate refresh token from Kiro IDE
 */
<<<<<<< HEAD
export async function POST(request: Request) {
  const authResponse = await requireOAuthImportAuth(request);
  if (authResponse) return authResponse;

=======
export async function POST(request: any) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  let rawBody;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      {
        error: {
          message: "Invalid request",
          details: [{ field: "body", message: "Invalid JSON body" }],
        },
      },
      { status: 400 }
    );
  }

  try {
<<<<<<< HEAD
    const { searchParams } = new URL(request.url);
    const targetProvider = searchParams.get("targetProvider") === "amazon-q" ? "amazon-q" : "kiro";
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    const validation = validateBody(kiroImportSchema, rawBody);
    if (isValidationFailure(validation)) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }
    const { refreshToken } = validation.data;

    const kiroService = new KiroService();

    // Resolve proxy for this provider (provider-level → global → direct)
<<<<<<< HEAD
    const proxy = await resolveProxyForProvider(targetProvider);
=======
    const proxy = await resolveProxyForProvider("kiro");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

    // Validate and refresh token (through proxy if configured)
    const tokenData = await runWithProxyContext(proxy, () =>
      kiroService.validateImportToken(refreshToken.trim())
    );

    // Extract email from JWT if available
    const email = kiroService.extractEmailFromJWT(tokenData.accessToken);

    // Save to database
    const connection: any = await createProviderConnection({
<<<<<<< HEAD
      provider: targetProvider,
=======
      provider: "kiro",
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      authType: "oauth",
      accessToken: tokenData.accessToken,
      refreshToken: tokenData.refreshToken,
      expiresAt: new Date(Date.now() + tokenData.expiresIn * 1000).toISOString(),
      email: email || null,
      providerSpecificData: {
        profileArn: tokenData.profileArn,
        authMethod: "imported",
        provider: "Imported",
      },
      testStatus: "active",
    });

    // Auto sync to Cloud if enabled
    await syncToCloudIfEnabled();

    return NextResponse.json({
      success: true,
      connection: {
        id: connection.id,
        provider: connection.provider,
        email: connection.email,
      },
    });
  } catch (error: any) {
<<<<<<< HEAD
    console.log("Kiro-compatible import token error:", error);
=======
    console.log("Kiro import token error:", error);
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/**
 * Sync to Cloud if enabled
 */
async function syncToCloudIfEnabled() {
  try {
    const cloudEnabled = await isCloudEnabled();
    if (!cloudEnabled) return;

    const machineId = await getConsistentMachineId();
    await syncToCloud(machineId);
  } catch (error) {
    console.log("Error syncing to cloud after Kiro import:", error);
  }
}
