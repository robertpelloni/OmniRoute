import { SkillHandler } from "../types";

export const browserSkill: SkillHandler = async (input, context) => {
    action: "navigate" | "click" | "type" | "screenshot" | "extract";
    url?: string;
    selector?: string;
    text?: string;
  };

};

export function registerBrowserSkill(executor: any): void {
  executor.registerHandler("browser", browserSkill);
}
