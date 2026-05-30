import { SkillHandler } from "./types";
      context: context.apiKeyId,
    };
  },

  eval_code: async (input, context) => {
      context: context.apiKeyId,
    };
  },
};

export function registerBuiltinSkills(executor: any): void {
  for (const [name, handler] of Object.entries(builtinSkills)) {
    executor.registerHandler(name, handler);
  }
}
