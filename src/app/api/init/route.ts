<<<<<<< HEAD
import { ensureCloudSyncInitialized } from "@/lib/initCloudSync";

// This API route is called automatically to initialize sync
export async function GET() {
  const initialized = await ensureCloudSyncInitialized();
  return Response.json({ initialized });
=======
// Auto-initialize cloud sync when server starts
import "@/lib/initCloudSync";

// This API route is called automatically to initialize sync
export async function GET() {
  return new Response("Initialized", { status: 200 });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
}
