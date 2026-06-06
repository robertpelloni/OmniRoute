import { NextResponse } from "next/server";
import { getApiKeyById } from "@/lib/localDb";
import { isApiKeyRevealEnabled } from "@/lib/apiKeyExposure";
<<<<<<< HEAD
=======
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";

// GET /api/keys/[id]/reveal - Reveal full API key for explicit copy actions
export async function GET(request, { params }) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  try {
    if (!isApiKeyRevealEnabled()) {
      return NextResponse.json({ error: "API key reveal is disabled" }, { status: 403 });
    }

    const { id } = await params;
    const key = await getApiKeyById(id);

    if (!key || typeof key.key !== "string") {
      return NextResponse.json({ error: "Key not found" }, { status: 404 });
    }

    return NextResponse.json({ key: key.key });
  } catch (error) {
<<<<<<< HEAD
=======
    console.log("Error revealing key:", error);
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    return NextResponse.json({ error: "Failed to reveal key" }, { status: 500 });
  }
}
