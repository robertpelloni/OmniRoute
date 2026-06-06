import { NextResponse } from "next/server";
import { homedir } from "os";
import { join } from "path";
<<<<<<< HEAD
import { readFile } from "fs/promises";
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import Database from "better-sqlite3";
import { isAuthRequired, isAuthenticated } from "@/shared/utils/apiAuth";

/**
<<<<<<< HEAD
 * Try to read credentials from cursor-agent's auth.json
 * (written by `cursor-agent` CLI after login).
 */
async function tryAgentAuth(): Promise<{
  found: boolean;
  accessToken?: string;
  source?: string;
  error?: string;
}> {
  try {
    const authPath = join(homedir(), ".config", "cursor", "auth.json");
    const raw = await readFile(authPath, "utf-8");
    const auth = JSON.parse(raw);
    if (auth.accessToken && typeof auth.accessToken === "string") {
      return { found: true, accessToken: auth.accessToken, source: "cursor-agent" };
    }
    return { found: false, error: "cursor-agent auth.json has no accessToken" };
  } catch {
    return { found: false, error: "cursor-agent auth.json not found" };
  }
}

/**
 * Try to read credentials from Cursor IDE's state.vscdb
 */
function tryIdeAuth(): {
  found: boolean;
  accessToken?: string;
  machineId?: string;
  source?: string;
  error?: string;
} {
  const platform = process.platform;
  let dbPath;

  if (platform === "darwin") {
    dbPath = join(homedir(), "Library/Application Support/Cursor/User/globalStorage/state.vscdb");
  } else if (platform === "linux") {
    dbPath = join(homedir(), ".config/Cursor/User/globalStorage/state.vscdb");
  } else if (platform === "win32") {
    dbPath = join(process.env.APPDATA || "", "Cursor/User/globalStorage/state.vscdb");
  } else {
    return { found: false, error: "Unsupported platform" };
  }

  let db;
  try {
    db = new Database(dbPath, { readonly: true, fileMustExist: true });
  } catch {
    return { found: false, error: "Cursor IDE database not found" };
  }

  try {
    const rows = db
      .prepare("SELECT key, value FROM itemTable WHERE key IN (?, ?)")
      .all("cursorAuth/accessToken", "storage.serviceMachineId") as {
      key: string;
      value: string;
    }[];

    const tokens: Record<string, string> = {};
    for (const row of rows) {
      if (row.key === "cursorAuth/accessToken") tokens.accessToken = row.value;
      else if (row.key === "storage.serviceMachineId") tokens.machineId = row.value;
    }

    db.close();

    if (!tokens.accessToken) {
      return { found: false, error: "Tokens not found in database" };
    }

    return {
      found: true,
      accessToken: tokens.accessToken,
      machineId: tokens.machineId,
      source: "cursor-ide",
    };
  } catch (error) {
    db?.close();
    return { found: false, error: `Failed to read database: ${(error as any).message}` };
  }
}

/**
 * GET /api/oauth/cursor/auto-import
 * Auto-detect and extract Cursor tokens from:
 *   1. Cursor IDE's local SQLite database (state.vscdb) — includes machineId
 *   2. cursor-agent CLI's auth.json — fallback, no machineId
=======
 * GET /api/oauth/cursor/auto-import
 * Auto-detect and extract Cursor tokens from local SQLite database.
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
 *
 * 🔒 Auth-guarded: requires JWT cookie or Bearer API key (finding #258-4).
 */
export async function GET(request: Request) {
<<<<<<< HEAD
  if (await isAuthRequired(request)) {
=======
  if (await isAuthRequired()) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    if (!(await isAuthenticated(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
<<<<<<< HEAD
    // Try Cursor IDE first (has both accessToken and machineId)
    const ideResult = tryIdeAuth();
    if (ideResult.found) {
      return NextResponse.json({
        found: true,
        accessToken: ideResult.accessToken,
        machineId: ideResult.machineId,
        source: ideResult.source,
      });
    }

    // Fall back to cursor-agent CLI auth (accessToken only, no machineId)
    const agentResult = await tryAgentAuth();
    if (agentResult.found) {
      return NextResponse.json({
        found: true,
        accessToken: agentResult.accessToken,
        source: agentResult.source,
      });
    }

    return NextResponse.json({
      found: false,
      error: "No Cursor credentials found. Install Cursor IDE or login with cursor-agent.",
    });
=======
    const platform = process.platform;
    let dbPath;

    // Determine database path based on platform
    if (platform === "darwin") {
      dbPath = join(homedir(), "Library/Application Support/Cursor/User/globalStorage/state.vscdb");
    } else if (platform === "linux") {
      dbPath = join(homedir(), ".config/Cursor/User/globalStorage/state.vscdb");
    } else if (platform === "win32") {
      dbPath = join(process.env.APPDATA || "", "Cursor/User/globalStorage/state.vscdb");
    } else {
      return NextResponse.json({ error: "Unsupported platform", found: false }, { status: 400 });
    }

    // Try to open database
    let db;
    try {
      db = new Database(dbPath, { readonly: true, fileMustExist: true });
    } catch (error) {
      return NextResponse.json({
        found: false,
        error:
          "Cursor database not found. Make sure Cursor IDE is installed and you are logged in.",
      });
    }

    try {
      // Extract tokens from database
      const rows = db
        .prepare("SELECT key, value FROM itemTable WHERE key IN (?, ?)")
        .all("cursorAuth/accessToken", "storage.serviceMachineId");

      const tokens: Record<string, any> = {};
      for (const row of rows) {
        if (row.key === "cursorAuth/accessToken") {
          tokens.accessToken = row.value;
        } else if (row.key === "storage.serviceMachineId") {
          tokens.machineId = row.value;
        }
      }

      db.close();

      // Validate tokens exist
      if (!tokens.accessToken || !tokens.machineId) {
        return NextResponse.json({
          found: false,
          error: "Tokens not found in database. Please login to Cursor IDE first.",
        });
      }

      return NextResponse.json({
        found: true,
        accessToken: tokens.accessToken,
        machineId: tokens.machineId,
      });
    } catch (error) {
      db?.close();
      return NextResponse.json({
        found: false,
        error: `Failed to read database: ${(error as any).message}`,
      });
    }
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  } catch (error) {
    console.log("Cursor auto-import error:", error);
    return NextResponse.json({ found: false, error: (error as any).message }, { status: 500 });
  }
}
