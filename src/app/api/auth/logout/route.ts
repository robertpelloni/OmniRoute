import { NextResponse } from "next/server";
<<<<<<< HEAD
import { getAuditRequestContext, logAuditEvent } from "@/lib/compliance/index";
import { cookies } from "next/headers";

export const logoutRouteInternals = {
  getCookieStore: cookies,
};

export async function POST(request) {
  const auditContext = getAuditRequestContext(request);
  const cookieStore = await logoutRouteInternals.getCookieStore();
  cookieStore.delete("auth_token");
  logAuditEvent({
    action: "auth.logout.success",
    actor: "admin",
    target: "dashboard-auth",
    resourceType: "auth_session",
    status: "success",
    ipAddress: auditContext.ipAddress || undefined,
    requestId: auditContext.requestId,
  });
=======
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete("auth_token");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  return NextResponse.json({ success: true });
}
