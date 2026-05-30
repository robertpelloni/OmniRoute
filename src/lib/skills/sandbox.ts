<<<<<<< Updated upstream
import { createRequire } from "module";
import type { ChildProcess } from "child_process";
import { randomUUID } from "crypto";

const require = createRequire(import.meta.url);
const childProcess = require("child_process") as typeof import("child_process");

=======
import { spawn, ChildProcess } from "child_process";
import { randomUUID } from "crypto";

>>>>>>> Stashed changes
interface SandboxConfig {
  cpuLimit: number;
  memoryLimit: number;
  timeout: number;
  networkEnabled: boolean;
  readOnly: boolean;
}

interface SandboxResult {
  id: string;
  exitCode: number | null;
  stdout: string;
  stderr: string;
  duration: number;
  killed: boolean;
}

const DEFAULT_CONFIG: SandboxConfig = {
  cpuLimit: 100,
  memoryLimit: 256,
  timeout: 30000,
  networkEnabled: false,
  readOnly: true,
};

class SandboxRunner {
  private static instance: SandboxRunner;
  private runningContainers: Map<string, ChildProcess> = new Map();
  private config: SandboxConfig;

  private constructor(config: Partial<SandboxConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  static getInstance(config?: Partial<SandboxConfig>): SandboxRunner {
    if (!SandboxRunner.instance) {
      SandboxRunner.instance = new SandboxRunner(config);
    }
    return SandboxRunner.instance;
  }

  setConfig(config: Partial<SandboxConfig>): void {
    this.config = { ...this.config, ...config };
  }

  async run(
    image: string,
    command: string[],
<<<<<<< Updated upstream
    env: Record<string, string> = {},
    configOverride: Partial<SandboxConfig> = {}
  ): Promise<SandboxResult> {
    const sandboxId = randomUUID();
    const startTime = Date.now();
    const config = { ...this.config, ...configOverride };
=======
    env: Record<string, string> = {}
  ): Promise<SandboxResult> {
    const sandboxId = randomUUID();
    const startTime = Date.now();
>>>>>>> Stashed changes

    const dockerArgs = [
      "run",
      "--rm",
      "--name",
      `omniroute-sandbox-${sandboxId}`,
      "--cpus",
<<<<<<< Updated upstream
      `${config.cpuLimit / 1000}`,
      "--memory",
      `${config.memoryLimit}m`,
      "--network",
      config.networkEnabled ? "bridge" : "none",
      "--cap-drop",
      "ALL",
      "--security-opt",
      "no-new-privileges",
      "--pids-limit",
      "100",
      "--tmpfs",
      "/tmp:rw,noexec,nosuid,size=64m",
      "--tmpfs",
      "/workspace:rw,noexec,nosuid,size=64m",
      "--workdir",
      "/workspace",
    ];

    if (config.readOnly) {
      dockerArgs.push("--read-only");
    }

    dockerArgs.push(image, ...command);

    return new Promise((resolve) => {
      const proc = childProcess.spawn("docker", dockerArgs, {
=======
      `${this.config.cpuLimit / 1000}`,
      "--memory",
      `${this.config.memoryLimit}m`,
      "--network",
      this.config.networkEnabled ? "bridge" : "none",
      "--read-only",
      this.config.readOnly.toString(),
      "--cap-add",
      "SYS_TIME",
      "--pids-limit",
      "100",
      image,
      ...command,
    ];

    return new Promise((resolve) => {
      const proc = spawn("docker", dockerArgs, {
>>>>>>> Stashed changes
        env: { ...process.env, ...env },
        stdio: ["ignore", "pipe", "pipe"],
      });

      this.runningContainers.set(sandboxId, proc);

      let stdout = "";
      let stderr = "";

      proc.stdout?.on("data", (data) => {
        stdout += data.toString();
      });

      proc.stderr?.on("data", (data) => {
        stderr += data.toString();
      });

      const timeoutId = setTimeout(() => {
        this.kill(sandboxId);
<<<<<<< Updated upstream
      }, config.timeout);
=======
      }, this.config.timeout);
>>>>>>> Stashed changes

      proc.on("close", (code) => {
        clearTimeout(timeoutId);
        this.runningContainers.delete(sandboxId);

        resolve({
          id: sandboxId,
          exitCode: code,
          stdout,
          stderr,
          duration: Date.now() - startTime,
          killed: code === null,
        });
      });

      proc.on("error", (err) => {
        clearTimeout(timeoutId);
        this.runningContainers.delete(sandboxId);

        resolve({
          id: sandboxId,
          exitCode: -1,
          stdout,
          stderr: err.message,
          duration: Date.now() - startTime,
          killed: false,
        });
      });
    });
  }

  kill(sandboxId: string): boolean {
    const proc = this.runningContainers.get(sandboxId);
    if (proc) {
      proc.kill("SIGTERM");
      this.runningContainers.delete(sandboxId);
<<<<<<< Updated upstream
      childProcess.spawn("docker", ["kill", `omniroute-sandbox-${sandboxId}`], {
        stdio: "ignore",
      });
=======
      spawn("docker", ["kill", `omniroute-sandbox-${sandboxId}`], { stdio: "ignore" });
>>>>>>> Stashed changes
      return true;
    }
    return false;
  }

  killAll(): void {
    for (const [id, proc] of this.runningContainers) {
      proc.kill("SIGTERM");
<<<<<<< Updated upstream
      childProcess.spawn("docker", ["kill", `omniroute-sandbox-${id}`], { stdio: "ignore" });
=======
      spawn("docker", ["kill", `omniroute-sandbox-${id}`], { stdio: "ignore" });
>>>>>>> Stashed changes
    }
    this.runningContainers.clear();
  }

  isRunning(sandboxId: string): boolean {
    return this.runningContainers.has(sandboxId);
  }

  getRunningCount(): number {
    return this.runningContainers.size;
  }
}

export const sandboxRunner = SandboxRunner.getInstance();
export type { SandboxConfig, SandboxResult };
