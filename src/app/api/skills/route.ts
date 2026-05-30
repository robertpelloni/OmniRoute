import { NextResponse } from "next/server";
import { skillRegistry } from "@/lib/skills/registry";
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error }, { status: 500 });
  }
}
