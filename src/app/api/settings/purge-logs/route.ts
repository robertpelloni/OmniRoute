import { NextResponse } from "next/server";
<<<<<<< HEAD
import { getCallLogRetentionDays } from "@/lib/logEnv";
import { deleteCallLogsBefore } from "@/lib/usage/callLogs";
=======
import { getDbInstance } from "@/lib/db/core";
import { getCallLogRetentionDays } from "@/lib/logEnv";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import { isAuthenticated } from "@/shared/utils/apiAuth";

export async function POST(request: Request) {
  if (!(await isAuthenticated(request))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
<<<<<<< HEAD
    const retentionMs = getCallLogRetentionDays() * 24 * 60 * 60 * 1000;
    const cutoff = new Date(Date.now() - retentionMs).toISOString();
    const result = deleteCallLogsBefore(cutoff);
    return NextResponse.json({
      deleted: result.deletedRows,
      deletedArtifacts: result.deletedArtifacts,
    });
=======
    const db = getDbInstance();
    const retentionMs = getCallLogRetentionDays() * 24 * 60 * 60 * 1000;
    const cutoff = new Date(Date.now() - retentionMs).toISOString();
    const result = db.prepare("DELETE FROM call_logs WHERE timestamp < ?").run(cutoff);
    return NextResponse.json({ deleted: result.changes });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error }, { status: 500 });
  }
}
