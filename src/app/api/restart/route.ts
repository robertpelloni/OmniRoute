import { NextResponse } from "next/server";
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";

<<<<<<< Updated upstream
export async function POST(request: Request) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

=======
export async function POST() {
>>>>>>> Stashed changes
  // Graceful restart: SIGTERM flows through the shutdown handler before the process manager restarts
  setTimeout(() => {
    process.kill(process.pid, "SIGTERM");
  }, 500);

  return NextResponse.json({ status: "restarting" });
}
