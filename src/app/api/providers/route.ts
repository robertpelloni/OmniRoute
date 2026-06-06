import { NextResponse } from "next/server";
<<<<<<< HEAD
import { getAuditRequestContext, logAuditEvent } from "@/lib/compliance/index";
import {
  getProviderAuditTarget,
  summarizeProviderConnectionForAudit,
} from "@/lib/compliance/providerAudit";
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import {
  getProviderConnections,
  createProviderConnection,
  getProviderNodeById,
  isCloudEnabled,
} from "@/models";
<<<<<<< HEAD
=======
import { APIKEY_PROVIDERS } from "@/shared/constants/config";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import {
  isClaudeCodeCompatibleProvider,
  isOpenAICompatibleProvider,
  isAnthropicCompatibleProvider,
} from "@/shared/constants/providers";
import { getConsistentMachineId } from "@/shared/utils/machineId";
import { syncToCloud } from "@/lib/cloudSync";
import { createProviderSchema } from "@/shared/validation/schemas";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";
import { normalizeQoderPatProviderData } from "@omniroute/open-sse/services/qoderCli";
<<<<<<< HEAD
import {
  normalizeProviderSpecificData,
  sanitizeProviderSpecificDataForResponse,
} from "@/lib/providers/requestDefaults";
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";
import { isManagedProviderConnectionId } from "@/lib/providers/catalog";

// GET /api/providers - List all connections
export async function GET(request: Request) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

=======

// GET /api/providers - List all connections
export async function GET() {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  try {
    const connections = await getProviderConnections();

    // Hide sensitive fields
    const safeConnections = connections.map((c) => ({
      ...c,
      apiKey: undefined,
      accessToken: undefined,
      refreshToken: undefined,
      idToken: undefined,
<<<<<<< HEAD
      providerSpecificData: c.providerSpecificData
        ? sanitizeProviderSpecificDataForResponse(c.providerSpecificData)
        : undefined,
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    }));

    return NextResponse.json({ connections: safeConnections });
  } catch (error) {
    console.log("Error fetching providers:", error);
    return NextResponse.json({ error: "Failed to fetch providers" }, { status: 500 });
  }
}

// POST /api/providers - Create new connection (API Key only, OAuth via separate flow)
export async function POST(request: Request) {
<<<<<<< HEAD
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

  const auditContext = getAuditRequestContext(request);

=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  try {
    const body = await request.json();

    // Zod validation
    const validation = validateBody(createProviderSchema, body);
    if (isValidationFailure(validation)) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }
    const {
      provider,
      apiKey,
      name,
      priority,
      globalPriority,
      defaultModel,
      testStatus,
      providerSpecificData: incomingPsd,
    } = validation.data;

    // Business validation
    const isValidProvider =
<<<<<<< HEAD
      isManagedProviderConnectionId(provider) ||
=======
      APIKEY_PROVIDERS[provider] ||
      provider === "qoder" ||
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      isOpenAICompatibleProvider(provider) ||
      isAnthropicCompatibleProvider(provider);

    if (!isValidProvider) {
      return NextResponse.json({ error: "Invalid provider" }, { status: 400 });
    }

    let providerSpecificData = incomingPsd || null;
    const allowMultipleCompatibleConnections =
      process.env.ALLOW_MULTI_CONNECTIONS_PER_COMPAT_NODE === "true";

    if (provider === "qoder") {
      providerSpecificData = normalizeQoderPatProviderData(providerSpecificData || {});
    }

    if (isOpenAICompatibleProvider(provider)) {
      const node: any = await getProviderNodeById(provider);
      if (!node) {
        return NextResponse.json({ error: "OpenAI Compatible node not found" }, { status: 404 });
      }

      const existingConnections = await getProviderConnections({ provider });
<<<<<<< HEAD
      // Allow multiple connections for compatible nodes exactly like first-party providers
=======
      if (!allowMultipleCompatibleConnections && existingConnections.length > 0) {
        return NextResponse.json(
          { error: "Only one connection is allowed for this OpenAI Compatible node" },
          { status: 400 }
        );
      }
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

      providerSpecificData = {
        ...(providerSpecificData || {}),
        prefix: node.prefix,
        apiType: node.apiType,
        baseUrl: node.baseUrl,
        nodeName: node.name,
        ...(node.chatPath ? { chatPath: node.chatPath } : {}),
        ...(node.modelsPath ? { modelsPath: node.modelsPath } : {}),
      };
    } else if (isAnthropicCompatibleProvider(provider)) {
      const node: any = await getProviderNodeById(provider);
      if (!node) {
        return NextResponse.json(
          {
            error: isClaudeCodeCompatibleProvider(provider)
              ? "CC Compatible node not found"
              : "Anthropic Compatible node not found",
          },
          { status: 404 }
        );
      }

      const existingConnections = await getProviderConnections({ provider });
<<<<<<< HEAD
      // Allow multiple connections for compatible nodes exactly like first-party providers
=======
      if (!allowMultipleCompatibleConnections && existingConnections.length > 0) {
        return NextResponse.json(
          { error: "Only one connection is allowed for this Anthropic Compatible node" },
          { status: 400 }
        );
      }
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

      providerSpecificData = {
        ...(providerSpecificData || {}),
        prefix: node.prefix,
        baseUrl: node.baseUrl,
        nodeName: node.name,
        ...(node.chatPath ? { chatPath: node.chatPath } : {}),
        ...(node.modelsPath ? { modelsPath: node.modelsPath } : {}),
      };
    }

<<<<<<< HEAD
    providerSpecificData = normalizeProviderSpecificData(provider, providerSpecificData) || null;

=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    const newConnection = await createProviderConnection({
      provider,
      authType: "apikey",
      name,
      apiKey,
      priority: priority || 1,
      globalPriority: globalPriority || null,
      defaultModel: defaultModel || null,
      providerSpecificData,
      isActive: true,
      testStatus: testStatus || "unknown",
    });

    // Note: Gemini model sync is now triggered client-side with progress dialog

    // Hide sensitive fields
    const result: Record<string, any> = { ...newConnection };
    delete result.apiKey;
<<<<<<< HEAD
    if (result.providerSpecificData) {
      result.providerSpecificData = sanitizeProviderSpecificDataForResponse(
        result.providerSpecificData
      );
    }
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

    // Auto sync to Cloud if enabled
    await syncToCloudIfEnabled();

<<<<<<< HEAD
    logAuditEvent({
      action: "provider.credentials.created",
      actor: "admin",
      target: getProviderAuditTarget(newConnection),
      resourceType: "provider_credentials",
      status: "success",
      ipAddress: auditContext.ipAddress || undefined,
      requestId: auditContext.requestId,
      metadata: {
        provider: provider,
        connection: summarizeProviderConnectionForAudit(newConnection),
      },
    });

=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    return NextResponse.json({ connection: result }, { status: 201 });
  } catch (error) {
    console.log("Error creating provider:", error);
    return NextResponse.json({ error: "Failed to create provider" }, { status: 500 });
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
    console.log("Error syncing providers to cloud:", error);
  }
}
