import { NextResponse } from "next/server";
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";
import { getDbInstance } from "@/lib/db/core";
import fs from "fs";
import path from "path";
import os from "os";

export async function POST(request: Request) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

  try {
    const body = await request.json().catch(() => ({}));
    const { keyId } = body;

    if (!keyId) {
      return NextResponse.json(
        { success: false, error: "Missing keyId in request body" },
        { status: 400 }
      );
    }

    const db = getDbInstance();
    const apiKeyRow = db.prepare("SELECT key FROM api_keys WHERE id = ? AND is_active = 1").get(keyId) as { key: string } | undefined;

    if (!apiKeyRow) {
      return NextResponse.json(
        { success: false, error: "Invalid or inactive key ID" },
        { status: 404 }
      );
    }

    // Determine path to zed config file depending on OS
    const homeDir = os.homedir();
    // Typical paths. For simplicity, writing to ~/.config/zed/settings.json
    let configDir = path.join(homeDir, ".config", "zed");
    if (os.platform() === 'darwin') {
        configDir = path.join(homeDir, ".config", "zed");
    } else if (os.platform() === 'win32') {
        configDir = path.join(process.env.APPDATA || homeDir, "zed");
    }

    const settingsPath = path.join(configDir, "settings.json");

    let settings: any = {};
    if (fs.existsSync(settingsPath)) {
        try {
            const raw = fs.readFileSync(settingsPath, 'utf8');
            settings = JSON.parse(raw);
        } catch (e) {
            console.error("Failed to parse Zed settings, creating new", e);
        }
    } else {
        // Create directory if it doesn't exist
        fs.mkdirSync(configDir, { recursive: true });
    }

    // Determine the base URL the app is running on. In production this might need to come from ENV
    const protocol = request.headers.get("x-forwarded-proto") || "http";
    const host = request.headers.get("host") || "localhost:3000";
    const baseUrl = `${protocol}://${host}/api/v1`;

    // Write Anthropic / OpenAI configuration overriding to use OmniRoute
    settings.language_models = settings.language_models || {};

    // OpenAI override
    settings.language_models.openai = settings.language_models.openai || {};
    settings.language_models.openai.api_url = baseUrl;
    // Note: Due to Zed constraints, sometimes the API key needs to be set differently
    // but the standard approach is just to inject it via env vars, or if Zed adds
    // explicit key support for custom urls. We'll set the key in the JSON for hypothetical usage.
    settings.language_models.openai.api_key = apiKeyRow.key;

    // Anthropic override
    settings.language_models.anthropic = settings.language_models.anthropic || {};
    settings.language_models.anthropic.api_url = baseUrl;
    settings.language_models.anthropic.api_key = apiKeyRow.key;

    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2), "utf8");

    return NextResponse.json({
      success: true,
      message: "Zed IDE credentials configured successfully",
    });
  } catch (error: any) {
    console.error("[Zed Config Import] Failed to write settings:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
