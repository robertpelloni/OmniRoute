/**
 * OAuth Provider Registry — Extracted from monolithic providers.js
 *
 * Each provider is now defined in its own module under providers/.
 * This index re-exports the full PROVIDERS map and utility functions.
 *
 * Provider modules follow the interface:
 *   { config, flowType, buildAuthUrl?, exchangeToken?, requestDeviceCode?, pollToken?, postExchange?, mapTokens }
 *
 * @module lib/oauth/providers/index
 */

import { claude } from "./claude";
import { codex } from "./codex";
import { gemini } from "./gemini";
import { antigravity } from "./antigravity";
import { qoder } from "./qoder";
import { qwen } from "./qwen";
import { kimiCoding } from "./kimi-coding";
import { github } from "./github";
<<<<<<< HEAD
import { gitlabDuo } from "./gitlab-duo";
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
import { kiro } from "./kiro";
import { cursor } from "./cursor";
import { kilocode } from "./kilocode";
import { cline } from "./cline";

export const PROVIDERS = {
  claude,
  codex,
  "gemini-cli": gemini,
  antigravity,
  qoder,
  qwen,
  "kimi-coding": kimiCoding,
  github,
<<<<<<< HEAD
  "gitlab-duo": gitlabDuo,
  kiro,
  "amazon-q": kiro,
=======
  kiro,
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  cursor,
  kilocode,
  cline,
};

export default PROVIDERS;
