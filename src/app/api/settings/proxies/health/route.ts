import { getProxyHealthStats } from "@/lib/localDb";
import { createErrorResponseFromUnknown } from "@/lib/api/errorResponse";
<<<<<<< HEAD
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";

export async function GET(request: Request) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

=======

export async function GET(request: Request) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  try {
    const { searchParams } = new URL(request.url);
    const hours = Number(searchParams.get("hours") || 24);
    const items = await getProxyHealthStats({ hours });
    return Response.json({ items, total: items.length, windowHours: hours });
  } catch (error) {
    return createErrorResponseFromUnknown(error, "Failed to load proxy health stats");
  }
}
