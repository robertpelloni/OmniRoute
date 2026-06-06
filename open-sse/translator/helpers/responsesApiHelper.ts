/**
 * Convert OpenAI Responses API format to standard chat completions format.
 * Delegates to the canonical translator to avoid logic duplication.
 */
import { openaiResponsesToOpenAIRequest } from "../request/openai-responses.ts";

<<<<<<< HEAD
=======
export function convertResponsesApiFormat(body) {
  return openaiResponsesToOpenAIRequest(null, body, null, null);
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
}
