import { NextResponse } from "next/server";
<<<<<<< HEAD
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";
import { getSuite } from "@/lib/evals/evalRunner";

export async function GET(request: Request, { params }: { params: Promise<{ suiteId: string }> }) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

=======
import { getSuite } from "@/lib/evals/evalRunner";

export async function GET(request, { params }) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  try {
    const { suiteId } = await params;
    const suite = getSuite(suiteId);
    if (!suite) {
      return NextResponse.json({ error: `Suite not found: ${suiteId}` }, { status: 404 });
    }
    return NextResponse.json(suite);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
