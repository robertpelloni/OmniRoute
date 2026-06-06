import { NextResponse } from "next/server";
<<<<<<< HEAD
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";

export async function POST(request: Request) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

=======

export async function POST() {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  const response = NextResponse.json({ success: true, message: "Shutting down..." });

  setTimeout(() => {
    process.kill(process.pid, "SIGTERM");
  }, 500);

  return response;
}
