<<<<<<< HEAD
import type { A2ATask, TaskArtifact } from "./taskManager";

=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
type TaskManagerLike = {
  updateTask: (
    taskId: string,
    state: "completed" | "failed",
    artifacts?: Array<{ type: string; content: string }>,
    message?: string
  ) => unknown;
};

<<<<<<< HEAD
type StreamTaskResult = {
  artifacts: TaskArtifact[];
  metadata: Record<string, unknown>;
};

export type A2ASkillHandler = (task: A2ATask) => Promise<StreamTaskResult>;

export const A2A_SKILL_HANDLERS: Record<string, A2ASkillHandler> = {
  "smart-routing": async (task) => {
    const skillModule = await import("./skills/smartRouting");
    return skillModule.executeSmartRouting(task);
  },
  "quota-management": async (task) => {
    const skillModule = await import("./skills/quotaManagement");
    return skillModule.executeQuotaManagement(task);
  },
  "provider-discovery": async (task) => {
    const skillModule = await import("./skills/providerDiscovery");
    return skillModule.executeProviderDiscovery(task);
  },
  "cost-analysis": async (task) => {
    const skillModule = await import("./skills/costAnalysis");
    return skillModule.executeCostAnalysis(task);
  },
  "health-report": async (task) => {
    const skillModule = await import("./skills/healthReport");
    return skillModule.executeHealthReport(task);
  },
=======
type StreamTaskLike = {
  id: string;
};

type StreamTaskResult = {
  artifacts: Array<{ type: string; content: string }>;
  metadata: Record<string, unknown>;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
};

export async function executeA2ATaskWithState(
  tm: TaskManagerLike,
<<<<<<< HEAD
  task: A2ATask,
  handler: (task: A2ATask) => Promise<StreamTaskResult>
=======
  task: StreamTaskLike,
  handler: (task: StreamTaskLike) => Promise<StreamTaskResult>
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
) {
  try {
    const result = await handler(task);
    tm.updateTask(task.id, "completed", result.artifacts);
    return result;
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    try {
      tm.updateTask(task.id, "failed", [{ type: "error", content: msg }], msg);
    } catch {
      // Task may already be terminal (e.g., cancelled). Preserve original error.
    }
    throw err;
  }
}
