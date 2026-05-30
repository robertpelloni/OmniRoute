import { skillRegistry } from "./registry";
import { SkillExecution, SkillStatus, SkillHandler } from "./types";
import { getDbInstance } from "../db/core";
import { getSettings } from "../db/settings";
import { randomUUID } from "crypto";
import { logger } from "../../../open-sse/utils/logger.ts";

const log = logger("SKILLS_EXECUTOR");
=======
import { randomUUID } from "crypto";
>>>>>>> Stashed changes

class SkillExecutor {
  private static instance: SkillExecutor;
  private handlers: Map<string, SkillHandler> = new Map();
  private timeout: number = 30000;
  private maxRetries: number = 3;

  private constructor() {}

  static getInstance(): SkillExecutor {
    if (!SkillExecutor.instance) {
      SkillExecutor.instance = new SkillExecutor();
    }
    return SkillExecutor.instance;
  }

  registerHandler(name: string, handler: SkillHandler): void {
    this.handlers.set(name, handler);
  }

  setTimeout(ms: number): void {
    this.timeout = ms;
  }

  setMaxRetries(count: number): void {
    this.maxRetries = count;
  }

  async execute(
    skillName: string,
    input: Record<string, unknown>,
    context: { apiKeyId: string; sessionId?: string }
  ): Promise<SkillExecution> {
    const settings = await getSettings();
    if (settings.skillsEnabled === false) {
      throw new Error("Skills execution is disabled. Enable Skills in Settings > AI.");
    }

    const db = getDbInstance();
    const rows = apiKeyId
      ? db
          .prepare(
            "SELECT * FROM skill_executions WHERE api_key_id = ? ORDER BY created_at DESC LIMIT ? OFFSET ?"
          )
          .all(apiKeyId, limit, offset)
      : db
          .prepare("SELECT * FROM skill_executions ORDER BY created_at DESC LIMIT ? OFFSET ?")
          .all(limit, offset);

    return (rows as any[]).map((row) => ({
      id: row.id,
      skillId: row.skill_id,
      apiKeyId: row.api_key_id,
      sessionId: row.session_id || "",
      input: JSON.parse(row.input),
      output: row.output ? JSON.parse(row.output) : null,
      status: row.status as SkillStatus,
      errorMessage: row.error_message,
      durationMs: row.duration_ms,
      createdAt: new Date(row.created_at),
    }));
  }
<<<<<<< Updated upstream

  countExecutions(apiKeyId?: string): number {
    const db = getDbInstance();
    const row = apiKeyId
      ? (db
          .prepare("SELECT COUNT(*) as count FROM skill_executions WHERE api_key_id = ?")
          .get(apiKeyId) as any)
      : (db.prepare("SELECT COUNT(*) as count FROM skill_executions").get() as any);
    return row?.count ?? 0;
  }
=======
}

export const skillExecutor = SkillExecutor.getInstance();
