import { NextResponse } from "next/server";
<<<<<<< HEAD
=======
import { getAllCircuitBreakerStatuses } from "@/shared/utils/circuitBreaker";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import { getLockedIdentifiers, forceUnlock } from "@/domain/lockoutPolicy";
import { policyActionSchema } from "@/shared/validation/schemas";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";

export async function GET() {
  try {
<<<<<<< HEAD
    const lockedIdentifiers = getLockedIdentifiers();
    return NextResponse.json({ lockedIdentifiers });
=======
    const circuitBreakers = getAllCircuitBreakerStatuses();
    const lockedIdentifiers = getLockedIdentifiers();
    return NextResponse.json({ circuitBreakers, lockedIdentifiers });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  } catch (error) {
    console.error("Error loading policies:", error);
    return NextResponse.json({ error: "Failed to load policies" }, { status: 500 });
  }
}

export async function POST(request) {
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
    const validation = validateBody(policyActionSchema, rawBody);
    if (isValidationFailure(validation)) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }
    const { action, identifier } = validation.data;

    if (action === "unlock" && identifier) {
      forceUnlock(identifier);
      return NextResponse.json({ success: true, action: "unlocked", identifier });
    }

    return NextResponse.json({ error: "Unknown action. Supported: unlock" }, { status: 400 });
  } catch (error) {
    console.error("Error updating policies:", error);
    return NextResponse.json({ error: "Failed to update policies" }, { status: 500 });
  }
}
