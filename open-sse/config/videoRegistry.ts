/**
 * Video Generation Provider Registry
 *
 * Defines providers that support the /v1/videos/generations endpoint.
<<<<<<< HEAD
 * Supports local providers plus hosted task-based APIs such as Runway.
 */

import { parseModelFromRegistry, getAllModelsFromRegistry } from "./registryUtils.ts";
import { RUNWAYML_SUPPORTED_VIDEO_MODELS } from "./runway.ts";
=======
 * Currently supports local providers (ComfyUI, SD WebUI with AnimateDiff).
 */

import { parseModelFromRegistry, getAllModelsFromRegistry } from "./registryUtils.ts";
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

interface VideoModel {
  id: string;
  name: string;
}

interface VideoProvider {
  id: string;
  baseUrl: string;
  authType: string;
  authHeader: string;
  format: string;
  models: VideoModel[];
}

export const VIDEO_PROVIDERS: Record<string, VideoProvider> = {
  comfyui: {
    id: "comfyui",
    baseUrl: "http://localhost:8188",
    authType: "none",
    authHeader: "none",
    format: "comfyui",
    models: [
      { id: "animatediff", name: "AnimateDiff" },
      { id: "svd-xt", name: "Stable Video Diffusion XT" },
    ],
  },

  sdwebui: {
    id: "sdwebui",
    baseUrl: "http://localhost:7860",
    authType: "none",
    authHeader: "none",
    format: "sdwebui-video",
    models: [{ id: "animatediff-webui", name: "AnimateDiff (WebUI)" }],
  },
<<<<<<< HEAD

  runwayml: {
    id: "runwayml",
    baseUrl: "https://api.dev.runwayml.com/v1",
    authType: "bearer",
    authHeader: "Authorization",
    format: "runwayml",
    models: RUNWAYML_SUPPORTED_VIDEO_MODELS,
  },
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
};

/**
 * Get video provider config by ID
 */
export function getVideoProvider(providerId: string): VideoProvider | null {
  return VIDEO_PROVIDERS[providerId] || null;
}

/**
 * Parse video model string (format: "provider/model" or just "model")
 */
export function parseVideoModel(modelStr: string | null) {
  return parseModelFromRegistry(modelStr, VIDEO_PROVIDERS);
}

/**
 * Get all video models as a flat list
 */
export function getAllVideoModels() {
  return getAllModelsFromRegistry(VIDEO_PROVIDERS);
}
