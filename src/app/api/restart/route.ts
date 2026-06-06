import { NextResponse } from "next/server";
<<<<<<< HEAD
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";

=======

export async function POST() {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  // Graceful restart: SIGTERM flows through the shutdown handler before the process manager restarts
  setTimeout(() => {
    process.kill(process.pid, "SIGTERM");
  }, 500);

  return NextResponse.json({ status: "restarting" });
}
