import { NextResponse } from "next/server";
import { readFile, readdir } from "fs/promises";
import { homedir } from "os";
import { join } from "path";
import { isAuthRequired, isAuthenticated } from "@/shared/utils/apiAuth";

/**
 * GET /api/oauth/kiro/auto-import
 * Auto-detect and extract Kiro refresh token from AWS SSO cache.
 *
 * 🔒 Auth-guarded: requires JWT cookie or Bearer API key (finding #258-5).
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
    const { searchParams } = new URL(request.url);
    const targetProvider = searchParams.get("targetProvider") === "amazon-q" ? "amazon-q" : "kiro";
    const providerLabel = targetProvider === "amazon-q" ? "Amazon Q" : "Kiro";
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    const cachePath = join(homedir(), ".aws/sso/cache");

    // Try to read cache directory
    let files;
    try {
      files = await readdir(cachePath);
    } catch (error) {
      return NextResponse.json({
        found: false,
<<<<<<< HEAD
        error: `AWS SSO cache not found. Please login to ${providerLabel} first.`,
=======
        error: "AWS SSO cache not found. Please login to Kiro IDE first.",
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      });
    }

    // Look for kiro-auth-token.json or any .json file with refreshToken
    let refreshToken = null;
    let foundFile = null;

    // First try kiro-auth-token.json
<<<<<<< HEAD
    const preferredTokenFile =
      targetProvider === "amazon-q" ? "amazon-q-auth-token.json" : "kiro-auth-token.json";
    if (files.includes(preferredTokenFile)) {
      try {
        const content = await readFile(join(cachePath, preferredTokenFile), "utf-8");
        const data = JSON.parse(content);
        if (data.refreshToken && data.refreshToken.startsWith("aorAAAAAG")) {
          refreshToken = data.refreshToken;
          foundFile = preferredTokenFile;
=======
    const kiroTokenFile = "kiro-auth-token.json";
    if (files.includes(kiroTokenFile)) {
      try {
        const content = await readFile(join(cachePath, kiroTokenFile), "utf-8");
        const data = JSON.parse(content);
        if (data.refreshToken && data.refreshToken.startsWith("aorAAAAAG")) {
          refreshToken = data.refreshToken;
          foundFile = kiroTokenFile;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
        }
      } catch (error) {
        // Continue to search other files
      }
    }

    // If not found, search all .json files
    if (!refreshToken) {
      for (const file of files) {
        if (!file.endsWith(".json")) continue;

        try {
          const content = await readFile(join(cachePath, file), "utf-8");
          const data = JSON.parse(content);

          // Look for Kiro refresh token (starts with aorAAAAAG)
          if (data.refreshToken && data.refreshToken.startsWith("aorAAAAAG")) {
            refreshToken = data.refreshToken;
            foundFile = file;
            break;
          }
        } catch (error) {
          // Skip invalid JSON files
          continue;
        }
      }
    }

    if (!refreshToken) {
      return NextResponse.json({
        found: false,
<<<<<<< HEAD
        error: `${providerLabel} token not found in AWS SSO cache. Please login to ${providerLabel} first.`,
=======
        error: "Kiro token not found in AWS SSO cache. Please login to Kiro IDE first.",
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      });
    }

    return NextResponse.json({
      found: true,
      refreshToken,
      source: foundFile,
    });
  } catch (error) {
    console.log("Kiro auto-import error:", error);
    return NextResponse.json({ found: false, error: error.message }, { status: 500 });
  }
}
