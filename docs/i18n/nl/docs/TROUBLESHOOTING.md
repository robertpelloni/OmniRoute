# Troubleshooting (Nederlands)


---

Common problems and solutions for OmniRoute.

---

## Quick Fixes

=======
### Enable Request Logs

Set `ENABLE_REQUEST_LOGS=true` in your `.env` file. Logs appear under `logs/` directory.
>>>>>>> Stashed changes

### Check Provider Health

```bash
# Health dashboard
http://localhost:20128/dashboard/health

# API health check
curl http://localhost:20128/api/monitoring/health
```

### Runtime Storage

- Main state: `${DATA_DIR}/storage.sqlite` (providers, combos, aliases, keys, settings)

---

## Circuit Breaker Issues

### Provider stuck in OPEN state

When a provider's circuit breaker is OPEN, requests are blocked until the cooldown expires.

**Fix:**

1. Go to **Dashboard → Settings → Resilience**
2. Check the circuit breaker card for the affected provider
3. Click **Reset All** to clear all breakers, or wait for the cooldown to expire
4. Verify the provider is actually available before resetting

### Provider keeps tripping the circuit breaker

If a provider repeatedly enters OPEN state:

1. Check **Dashboard → Health → Provider Health** for the failure pattern
2. Go to **Settings → Resilience → Provider Profiles** and increase the failure threshold
3. Check if the provider has changed API limits or requires re-authentication
4. Review latency telemetry — high latency may cause timeout-based failures

---

## Audio Transcription Issues

### "Unsupported model" error

- Ensure you're using the correct prefix: `deepgram/nova-3` or `assemblyai/best`
- Verify the provider is connected in **Dashboard → Providers**

### Transcription returns empty or fails

- Check supported audio formats: `mp3`, `wav`, `m4a`, `flac`, `ogg`, `webm`
- Verify file size is within provider limits (typically < 25MB)
- Check provider API key validity in the provider card

---

## Translator Debugging

Use **Dashboard → Translator** to debug format translation issues:

| Mode             | When to Use                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------- |
| **Playground**   | Compare input/output formats side by side — paste a failing request to see how it translates |
| **Chat Tester**  | Send live messages and inspect the full request/response payload including headers           |
| **Test Bench**   | Run batch tests across format combinations to find which translations are broken             |
| **Live Monitor** | Watch real-time request flow to catch intermittent translation issues                        |

### Common format issues

- **Thinking tags not appearing** — Check if the target provider supports thinking and the thinking budget setting
- **Tool calls dropping** — Some format translations may strip unsupported fields; verify in Playground mode
- **System prompt missing** — Claude and Gemini handle system prompts differently; check translation output
- **SDK returns raw string instead of object** — Fixed in v1.1.0: response sanitizer now strips non-standard fields (`x_groq`, `usage_breakdown`, etc.) that cause OpenAI SDK Pydantic validation failures
- **GLM/ERNIE rejects `system` role** — Fixed in v1.1.0: role normalizer automatically merges system messages into user messages for incompatible models
- **`developer` role not recognized** — Fixed in v1.1.0: automatically converted to `system` for non-OpenAI providers
- **`json_schema` not working with Gemini** — Fixed in v1.1.0: `response_format` is now converted to Gemini's `responseMimeType` + `responseSchema`

---

## Resilience Settings

### Auto rate-limit not triggering

- Auto rate-limit only applies to API key providers (not OAuth/subscription)
- Verify **Settings → Resilience → Provider Profiles** has auto-rate-limit enabled
- Check if the provider returns `429` status codes or `Retry-After` headers

### Tuning exponential backoff

Provider profiles support these settings:

- **Base delay** — Initial wait time after first failure (default: 1s)
- **Max delay** — Maximum wait time cap (default: 30s)
- **Multiplier** — How much to increase delay per consecutive failure (default: 2x)

### Anti-thundering herd

When many concurrent requests hit a rate-limited provider, OmniRoute uses mutex + auto rate-limiting to serialize requests and prevent cascading failures. This is automatic for API key providers.

---

## Optional RAG / LLM failure taxonomy (16 problems)

Some OmniRoute users place the gateway in front of RAG or agent stacks. In those setups it is common to see a strange pattern: OmniRoute looks healthy (providers up, routing profiles ok, no rate limit alerts) but the final answer is still wrong.

In practice these incidents usually come from the downstream RAG pipeline, not from the gateway itself.

If you want a shared vocabulary to describe those failures you can use the WFGY ProblemMap, an external MIT license text resource that defines sixteen recurring RAG / LLM failure patterns. At a high level it covers:

- retrieval drift and broken context boundaries
- empty or stale indexes and vector stores
- embedding versus semantic mismatch
- prompt assembly and context window issues
- logic collapse and overconfident answers
- long chain and agent coordination failures
- multi agent memory and role drift
- deployment and bootstrap ordering problems

The idea is simple:

1. When you investigate a bad response, capture:
   - user task and request
   - route or provider combo in OmniRoute
   - any RAG context used downstream (retrieved documents, tool calls, etc)
2. Map the incident to one or two WFGY ProblemMap numbers (`No.1` … `No.16`).
3. Store the number in your own dashboard, runbook, or incident tracker next to the OmniRoute logs.
4. Use the corresponding WFGY page to decide whether you need to change your RAG stack, retriever, or routing strategy.

Full text and concrete recipes live here (MIT license, text only):

[WFGY ProblemMap README](https://github.com/onestardao/WFGY/blob/main/ProblemMap/README.md)

You can ignore this section if you do not run RAG or agent pipelines behind OmniRoute.

---

## Still Stuck?

- **GitHub Issues**: [github.com/diegosouzapw/OmniRoute/issues](https://github.com/diegosouzapw/OmniRoute/issues)
- **Architecture**: See [`docs/ARCHITECTURE.md`](ARCHITECTURE.md) for internal details
- **API Reference**: See [`docs/API_REFERENCE.md`](API_REFERENCE.md) for all endpoints
- **Health Dashboard**: Check **Dashboard → Health** for real-time system status
- **Translator**: Use **Dashboard → Translator** to debug format issues
