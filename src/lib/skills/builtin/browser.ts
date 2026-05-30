import { SkillHandler } from "../types";

export const browserSkill: SkillHandler = async (input, context) => {
<<<<<<< Updated upstream
  const { action } = input as {
=======
  const { action, ...params } = input as {
>>>>>>> Stashed changes
    action: "navigate" | "click" | "type" | "screenshot" | "extract";
    url?: string;
    selector?: string;
    text?: string;
  };

<<<<<<< Updated upstream
  if (!["navigate", "click", "type", "screenshot", "extract"].includes(action)) {
    throw new Error(`Unknown action: ${action}`);
  }

  throw new Error(
    "Browser automation skill is disabled. Configure a Playwright-backed browser runtime before enabling this skill."
  );
=======
  switch (action) {
    case "navigate":
      return { success: true, action: "navigate", url: params.url, stub: true };
    case "click":
      return { success: true, action: "click", selector: params.selector, stub: true };
    case "type":
      return {
        success: true,
        action: "type",
        selector: params.selector,
        text: params.text,
        stub: true,
      };
    case "screenshot":
      return { success: true, action: "screenshot", stub: true };
    case "extract":
      return { success: true, action: "extract", selector: params.selector, data: {}, stub: true };
    default:
      throw new Error(`Unknown action: ${action}`);
  }
>>>>>>> Stashed changes
};

export function registerBrowserSkill(executor: any): void {
  executor.registerHandler("browser", browserSkill);
}
