#!/usr/bin/env node

import fs from "node:fs/promises";
<<<<<<< HEAD
<<<<<<< Updated upstream
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import { pathToFileURL } from "node:url";
=======
import path from "node:path";
import { spawn } from "node:child_process";
>>>>>>> Stashed changes
=======
import path from "node:path";
import { spawn } from "node:child_process";
import { pathToFileURL } from "node:url";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

/**
 * This repository contains a legacy `app/` snapshot (packaging/runtime artifacts)
 * alongside the active Next.js source in `src/app/`. Next.js route discovery scans
 * both and fails the build on legacy files. We temporarily move the legacy folder
 * out of the project root during `next build`, then restore it in all outcomes.
 */

const projectRoot = process.cwd();
<<<<<<< HEAD
<<<<<<< Updated upstream
const backupRoot = path.join(os.tmpdir(), `omniroute-build-isolated-${process.pid}-${Date.now()}`);

export function getTransientBuildPaths(rootDir = projectRoot, env = process.env) {
  const paths = [
    {
      label: "legacy app snapshot",
      sourcePath: path.join(rootDir, "app"),
      backupPath: path.join(backupRoot, "app"),
    },
    {
      label: "local Wine prefix",
      sourcePath: path.join(rootDir, ".tmp", "wine32"),
      backupPath: path.join(backupRoot, "wine32"),
    },
  ];

  if (env.OMNIROUTE_BUILD_MOVE_TASKS === "1") {
    paths.push({
      label: "task planning workspace",
      sourcePath: path.join(rootDir, "_tasks"),
      backupPath: path.join(backupRoot, "_tasks"),
    });
  }

  return paths;
}
=======
const legacyAppDir = path.join(projectRoot, "app");
const backupDir = path.join(projectRoot, `.app-build-backup-${process.pid}-${Date.now()}`);
>>>>>>> Stashed changes
=======
const legacyAppDir = path.join(projectRoot, "app");
const backupDir = path.join(projectRoot, `.app-build-backup-${process.pid}-${Date.now()}`);
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

async function exists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

<<<<<<< HEAD
<<<<<<< Updated upstream
export async function movePath(sourcePath, destinationPath, fsImpl = fs) {
  const mkdir = typeof fsImpl.mkdir === "function" ? fsImpl.mkdir.bind(fsImpl) : fs.mkdir.bind(fs);
  await mkdir(path.dirname(destinationPath), { recursive: true });

=======
export async function movePath(sourcePath, destinationPath, fsImpl = fs) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  try {
    await fsImpl.rename(sourcePath, destinationPath);
  } catch (error) {
    if (error?.code !== "EXDEV") {
      throw error;
    }

    console.warn(
      `[build-next-isolated] EXDEV while moving ${sourcePath} -> ${destinationPath}; falling back to copy/remove`
    );
    await fsImpl.cp(sourcePath, destinationPath, {
      recursive: true,
      preserveTimestamps: true,
      force: false,
      errorOnExist: true,
    });
    await fsImpl.rm(sourcePath, { recursive: true, force: true });
  }
}

function runNextBuild() {
  return new Promise((resolve) => {
    const nextBin = path.join(projectRoot, "node_modules", "next", "dist", "bin", "next");
<<<<<<< HEAD
    const child = spawn(process.execPath, [nextBin, "build", resolveNextBuildBundlerFlag()], {
      cwd: projectRoot,
      stdio: "inherit",
      env: resolveNextBuildEnv(process.env),
=======
function runNextBuild() {
  return new Promise((resolve) => {
    const nextBin = path.join(projectRoot, "node_modules", "next", "dist", "bin", "next");
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    const child = spawn(process.execPath, [nextBin, "build"], {
      cwd: projectRoot,
      stdio: "inherit",
      env: process.env,
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    });

    const forward = (signal) => {
      if (!child.killed) child.kill(signal);
    };

    process.on("SIGINT", forward);
    process.on("SIGTERM", forward);

    child.on("exit", (code, signal) => {
      process.off("SIGINT", forward);
      process.off("SIGTERM", forward);
      if (signal) {
        resolve({ code: 1, signal });
        return;
      }
      resolve({ code: code ?? 1, signal: null });
    });
  });
}

<<<<<<< HEAD
<<<<<<< Updated upstream
export function resolveNextBuildBundlerFlag(baseEnv = process.env) {
  return baseEnv.OMNIROUTE_USE_TURBOPACK === "1" ? "--turbopack" : "--webpack";
}

export function resolveNextBuildEnv(baseEnv = process.env) {
  return {
    ...baseEnv,
    NEXT_PRIVATE_BUILD_WORKER: baseEnv.NEXT_PRIVATE_BUILD_WORKER || "0",
  };
}

async function resetStandaloneOutput(rootDir = projectRoot, fsImpl = fs) {
  const standaloneRoot = path.join(rootDir, ".next", "standalone");
  if (!(await exists(standaloneRoot))) return;

  const staleStandaloneBackup = path.join(backupRoot, "standalone-stale");

  await movePath(standaloneRoot, staleStandaloneBackup, fsImpl);
  console.log("[build-next-isolated] Moved stale standalone output out of the build path");
}

export async function pruneStandaloneArtifacts(rootDir = projectRoot, fsImpl = fs) {
  const standaloneRoot = path.join(rootDir, ".next", "standalone");
  const pruneTargets = [path.join(standaloneRoot, "_tasks")];

  for (const targetPath of pruneTargets) {
    if (!(await exists(targetPath))) continue;
    await fsImpl.rm(targetPath, { recursive: true, force: true });
    console.log(
      `[build-next-isolated] Pruned standalone artifact: ${path.relative(rootDir, targetPath)}`
    );
  }
}

export async function syncStandaloneNativeAssets(
  rootDir = projectRoot,
  fsImpl = fs,
  log = console
) {
  const nativeAssetDirs = [
    {
      label: "wreq-js native runtime",
      sourcePath: path.join(rootDir, "node_modules", "wreq-js", "rust"),
      destinationPath: path.join(rootDir, ".next", "standalone", "node_modules", "wreq-js", "rust"),
    },
  ];

  let changed = false;

  for (const entry of nativeAssetDirs) {
    if (!(await exists(entry.sourcePath))) continue;

    await fsImpl.mkdir(path.dirname(entry.destinationPath), { recursive: true });
    await fsImpl.cp(entry.sourcePath, entry.destinationPath, {
      recursive: true,
      force: true,
    });
    log.log(
      `[build-next-isolated] Copied native standalone asset: ${path.relative(
        rootDir,
        entry.destinationPath
      )}`
    );
    changed = true;
  }

  return changed;
}

export async function main() {
  const movedPaths = [];
  const transientBuildPaths = getTransientBuildPaths();

  try {
    for (const entry of transientBuildPaths) {
      if (!(await exists(entry.sourcePath))) continue;
      await movePath(entry.sourcePath, entry.backupPath);
      movedPaths.push(entry);
    }

    await resetStandaloneOutput(projectRoot);

    console.log("[build-next-isolated] Generating docs index...");
    try {
      const { execSync } = await import("node:child_process");
      execSync("node scripts/generate-docs-index.mjs", { cwd: projectRoot, stdio: "inherit" });
    } catch (docGenErr) {
      console.warn(
        "[build-next-isolated] Docs index generation failed (non-fatal):",
        docGenErr?.message
      );
=======
export async function main() {
  let moved = false;

  try {
    if (await exists(legacyAppDir)) {
      await movePath(legacyAppDir, backupDir);
      moved = true;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    }

    const result = await runNextBuild();
    if (result.code === 0 && (await exists(path.join(projectRoot, ".next", "standalone")))) {
      console.log("[build-next-isolated] Copying static assets for standalone server...");
      try {
        await fs.cp(
<<<<<<< HEAD
=======
          path.join(projectRoot, "public"),
          path.join(projectRoot, ".next", "standalone", "public"),
          { recursive: true }
        );
        await fs.cp(
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          path.join(projectRoot, ".next", "static"),
          path.join(projectRoot, ".next", "standalone", ".next", "static"),
          { recursive: true }
        );
      } catch (copyErr) {
        console.warn("[build-next-isolated] Non-fatal error copying static assets:", copyErr);
      }
<<<<<<< HEAD

      try {
        await fs.cp(
          path.join(projectRoot, "docs"),
          path.join(projectRoot, ".next", "standalone", "docs"),
          { recursive: true }
        );
        console.log("[build-next-isolated] Copied docs/ to standalone output");
      } catch (docsCopyErr) {
        console.warn("[build-next-isolated] Non-fatal error copying docs/:", docsCopyErr?.message);
      }

      try {
        await pruneStandaloneArtifacts(projectRoot);
      } catch (pruneErr) {
        console.warn(
          "[build-next-isolated] Non-fatal error pruning standalone artifacts:",
          pruneErr
        );
      }

      try {
        await syncStandaloneNativeAssets(projectRoot);
      } catch (nativeAssetErr) {
        console.warn(
          "[build-next-isolated] Non-fatal error copying native standalone assets:",
          nativeAssetErr
        );
      }
    }
=======
async function main() {
  let moved = false;

  try {
    if (await exists(legacyAppDir)) {
      await fs.rename(legacyAppDir, backupDir);
      moved = true;
    }

    const result = await runNextBuild();
>>>>>>> Stashed changes
=======
    }
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    process.exitCode = result.code;
  } catch (error) {
    console.error("[build-next-isolated] Build failed:", error);
    process.exitCode = 1;
  } finally {
<<<<<<< HEAD
<<<<<<< Updated upstream
    while (movedPaths.length > 0) {
      const entry = movedPaths.pop();
      if (!entry) continue;
      try {
        await movePath(entry.backupPath, entry.sourcePath);
      } catch (restoreError) {
        console.error(
          `[build-next-isolated] Failed to restore ${entry.label} from ${entry.backupPath}:`,
=======
    if (moved) {
      try {
        await fs.rename(backupDir, legacyAppDir);
      } catch (restoreError) {
        console.error(
          `[build-next-isolated] Failed to restore legacy app dir from ${backupDir}:`,
>>>>>>> Stashed changes
=======
    if (moved) {
      try {
        await movePath(backupDir, legacyAppDir);
      } catch (restoreError) {
        console.error(
          `[build-next-isolated] Failed to restore legacy app dir from ${backupDir}:`,
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
          restoreError
        );
        process.exitCode = 1;
      }
    }
<<<<<<< HEAD
<<<<<<< Updated upstream

    try {
      await fs.rm(backupRoot, { recursive: true, force: true });
    } catch (cleanupError) {
      console.warn("[build-next-isolated] Failed to clean temporary backup root:", cleanupError);
    }
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  }
}

const entryScript = process.argv[1] ? pathToFileURL(process.argv[1]).href : null;

if (entryScript === import.meta.url) {
  await main();
}
<<<<<<< HEAD
=======
  }
}

await main();
>>>>>>> Stashed changes
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
