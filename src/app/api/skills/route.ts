import { NextResponse } from "next/server";
import { skillRegistry } from "@/lib/skills/registry";
<<<<<<< HEAD
=======

export async function GET() {
  try {
    await skillRegistry.loadFromDatabase();
    const skills = skillRegistry.list();
    return NextResponse.json({ skills });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error }, { status: 500 });
  }
}
