import { NextResponse } from "next/server";
import { getModelAliases, setModelAlias, deleteModelAlias, isCloudEnabled } from "@/models";
import { getConsistentMachineId } from "@/shared/utils/machineId";
import { syncToCloud } from "@/lib/cloudSync";
<<<<<<< HEAD
import { cloudModelAliasUpdateSchema } from "@/shared/validation/schemas";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";
import {
  INTERNAL_PROXY_ERROR,
  getCatalogDiagnosticsHeaders,
  resolveModelAliasLookup,
} from "@/lib/modelMetadataRegistry";
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";

// GET /api/models/alias - Get all aliases
export async function GET(request) {
  const alias = new URL(request.url).searchParams.get("alias");
  try {
    const authError = await requireManagementAuth(request);
    if (authError) {
      const headers = getCatalogDiagnosticsHeaders({ request, resolvedAlias: alias });
      for (const [key, value] of Object.entries(headers)) {
        authError.headers.set(key, value);
      }
      return authError;
    }

    if (alias) {
      const resolved = await resolveModelAliasLookup(alias);
      if (!resolved.ok) {
        return NextResponse.json(
          {
            error: {
              message: resolved.error.message,
              code: resolved.error.code,
              ...(resolved.error.candidates ? { candidates: resolved.error.candidates } : {}),
            },
          },
          {
            status: resolved.error.status,
            headers: getCatalogDiagnosticsHeaders({ request, resolvedAlias: alias }),
          }
        );
      }

      return NextResponse.json(
        {
          alias: resolved.value.alias,
          resolved: {
            provider: resolved.value.provider,
            providerAlias: resolved.value.providerAlias,
            model: resolved.value.model,
            qualifiedId: resolved.value.resolvedAlias,
            source: resolved.value.source,
            target: resolved.value.target,
            metadata: resolved.value.metadata,
          },
          catalogVersion: getCatalogDiagnosticsHeaders({ request })["X-Model-Catalog-Version"],
        },
        {
          headers: getCatalogDiagnosticsHeaders({
            request,
            resolvedAlias: resolved.value.resolvedAlias,
          }),
        }
      );
    }

    const aliases = await getModelAliases();
    return NextResponse.json(
      {
        aliases,
        catalogVersion: getCatalogDiagnosticsHeaders({ request })["X-Model-Catalog-Version"],
      },
      {
        headers: getCatalogDiagnosticsHeaders({ request }),
      }
    );
  } catch (error) {
    console.log("Error fetching aliases:", error);
    return NextResponse.json(
      {
        error: {
          message: "Failed to fetch aliases",
          code: INTERNAL_PROXY_ERROR,
        },
      },
      {
        status: 500,
        headers: getCatalogDiagnosticsHeaders({ request, resolvedAlias: alias }),
      }
    );
=======
import { isAuthenticated } from "@/shared/utils/apiAuth";
import { cloudModelAliasUpdateSchema } from "@/shared/validation/schemas";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";

// GET /api/models/alias - Get all aliases
export async function GET(request) {
  try {
    // Require authentication for security
    if (!(await isAuthenticated(request))) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 });
    }

    const aliases = await getModelAliases();
    return NextResponse.json({ aliases });
  } catch (error) {
    console.log("Error fetching aliases:", error);
    return NextResponse.json({ error: "Failed to fetch aliases" }, { status: 500 });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  }
}

// PUT /api/models/alias - Set model alias
export async function PUT(request) {
<<<<<<< HEAD
  const diagnosticHeaders = getCatalogDiagnosticsHeaders({ request });
=======
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
<<<<<<< HEAD
      { status: 400, headers: diagnosticHeaders }
=======
      { status: 400 }
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    );
  }

  try {
<<<<<<< HEAD
    const authError = await requireManagementAuth(request);
    if (authError) {
      for (const [key, value] of Object.entries(diagnosticHeaders)) {
        authError.headers.set(key, value);
      }
      return authError;
=======
    // Require authentication for security
    if (!(await isAuthenticated(request))) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    }

    const validation = validateBody(cloudModelAliasUpdateSchema, rawBody);
    if (isValidationFailure(validation)) {
<<<<<<< HEAD
      return NextResponse.json(
        { error: validation.error },
        { status: 400, headers: diagnosticHeaders }
      );
=======
      return NextResponse.json({ error: validation.error }, { status: 400 });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    }
    const { model, alias } = validation.data;

    await setModelAlias(alias, model);
    await syncToCloudIfEnabled();

<<<<<<< HEAD
    return NextResponse.json(
      { success: true, model, alias },
      {
        headers: getCatalogDiagnosticsHeaders({ request, resolvedAlias: alias }),
      }
    );
  } catch (error) {
    console.log("Error updating alias:", error);
    return NextResponse.json(
      {
        error: {
          message: "Failed to update alias",
          code: INTERNAL_PROXY_ERROR,
        },
      },
      { status: 500, headers: diagnosticHeaders }
    );
=======
    return NextResponse.json({ success: true, model, alias });
  } catch (error) {
    console.log("Error updating alias:", error);
    return NextResponse.json({ error: "Failed to update alias" }, { status: 500 });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  }
}

// DELETE /api/models/alias?alias=xxx - Delete alias
export async function DELETE(request) {
<<<<<<< HEAD
  const diagnosticHeaders = getCatalogDiagnosticsHeaders({ request });
  try {
    const authError = await requireManagementAuth(request);
    if (authError) {
      for (const [key, value] of Object.entries(diagnosticHeaders)) {
        authError.headers.set(key, value);
      }
      return authError;
=======
  try {
    // Require authentication for security
    if (!(await isAuthenticated(request))) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    }

    const { searchParams } = new URL(request.url);
    const alias = searchParams.get("alias");

    if (!alias) {
<<<<<<< HEAD
      return NextResponse.json(
        { error: "Alias required" },
        { status: 400, headers: diagnosticHeaders }
      );
=======
      return NextResponse.json({ error: "Alias required" }, { status: 400 });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    }

    await deleteModelAlias(alias);
    await syncToCloudIfEnabled();

<<<<<<< HEAD
    return NextResponse.json(
      { success: true },
      {
        headers: getCatalogDiagnosticsHeaders({ request, resolvedAlias: alias }),
      }
    );
  } catch (error) {
    console.log("Error deleting alias:", error);
    return NextResponse.json(
      {
        error: {
          message: "Failed to delete alias",
          code: INTERNAL_PROXY_ERROR,
        },
      },
      { status: 500, headers: diagnosticHeaders }
    );
=======
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("Error deleting alias:", error);
    return NextResponse.json({ error: "Failed to delete alias" }, { status: 500 });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  }
}

async function syncToCloudIfEnabled() {
  try {
    const cloudEnabled = await isCloudEnabled();
    if (!cloudEnabled) return;

    const machineId = await getConsistentMachineId();
    await syncToCloud(machineId);
  } catch (error) {
    console.log("Error syncing aliases to cloud:", error);
  }
}
