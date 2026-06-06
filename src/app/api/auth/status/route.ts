import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

<<<<<<< HEAD
function getJwtSecret(): Uint8Array | null {
  const secret = process.env.JWT_SECRET?.trim();
  return secret ? new TextEncoder().encode(secret) : null;
}
=======
const SECRET = process.env.JWT_SECRET ? new TextEncoder().encode(process.env.JWT_SECRET) : null;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;
<<<<<<< HEAD
    const secret = getJwtSecret();

    if (!token || !secret) {
      return NextResponse.json({ authenticated: false });
    }

    await jwtVerify(token, secret);
=======

    if (!token || !SECRET) {
      return NextResponse.json({ authenticated: false });
    }

    await jwtVerify(token, SECRET);
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    return NextResponse.json({ authenticated: true });
  } catch {
    return NextResponse.json({ authenticated: false });
  }
}
