import initializeCloudSync from "@/shared/services/initializeCloudSync";
<<<<<<< HEAD
import { startBudgetResetJob } from "@/lib/jobs/budgetResetJob";
import { startModelSyncScheduler } from "@/shared/services/modelSyncScheduler";

// Initialize runtime background sync services once per server process.
=======
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import { startModelSyncScheduler } from "@/shared/services/modelSyncScheduler";
import "@/lib/tokenHealthCheck"; // Proactive token health-check scheduler

// Initialize background sync services when this module is imported
<<<<<<< HEAD
>>>>>>> Stashed changes
let initialized = false;

function isAutomatedTestProcess(
  env: NodeJS.ProcessEnv = process.env,
  argv: string[] = process.argv
): boolean {
  return (
    env.NODE_ENV === "test" || env.VITEST !== undefined || argv.some((arg) => arg.includes("test"))
  );
}

export function shouldSkipCloudSyncInitialization(
  env: NodeJS.ProcessEnv = process.env,
  argv: string[] = process.argv
): boolean {
  if (env.NEXT_PHASE === "phase-production-build") {
    return true;
  }

  const raw = env.OMNIROUTE_DISABLE_BACKGROUND_SERVICES;
  if (raw && new Set(["1", "true", "yes", "on"]).has(raw.trim().toLowerCase())) {
    return true;
  }

  return isAutomatedTestProcess(env, argv) && env.OMNIROUTE_ENABLE_RUNTIME_BACKGROUND_TASKS !== "1";
}

export async function ensureCloudSyncInitialized() {
  if (shouldSkipCloudSyncInitialization()) {
=======
let initialized = false;

function isBackgroundServicesDisabled(): boolean {
  const raw = process.env.OMNIROUTE_DISABLE_BACKGROUND_SERVICES;
  if (!raw) return false;
  return new Set(["1", "true", "yes", "on"]).has(raw.trim().toLowerCase());
}

export async function ensureCloudSyncInitialized() {
  if (isBackgroundServicesDisabled()) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    return false;
  }
  if (!initialized) {
    try {
<<<<<<< HEAD
      const { initTokenHealthCheck } = await import("@/lib/tokenHealthCheck");
      initTokenHealthCheck();
      await initializeCloudSync();
      startModelSyncScheduler();
<<<<<<< Updated upstream
      startBudgetResetJob();
=======
=======
      await initializeCloudSync();
      startModelSyncScheduler();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      initialized = true;
    } catch (error) {
      console.error("[ServerInit] Error initializing background sync services:", error);
    }
  }
  return initialized;
}

<<<<<<< HEAD
=======
// Auto-initialize when module loads
ensureCloudSyncInitialized().catch((err) => console.error("[CloudSync] ensure failed:", err));

>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
export default ensureCloudSyncInitialized;
