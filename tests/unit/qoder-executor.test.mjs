import test from "node:test";
import assert from "node:assert/strict";
<<<<<<< HEAD
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

import { QoderExecutor } from "../../open-sse/executors/qoder.ts";
import {
  buildQoderPrompt,
  getStaticQoderModels,
  mapQoderModelToLevel,
  normalizeQoderPatProviderData,
  parseQoderCliFailure,
  validateQoderCliPat,
} from "../../open-sse/services/qoderCli.ts";

<<<<<<< HEAD
function createTempDir() {
  const testRoot = path.join(os.tmpdir(), "omniroute-test-tmp");
  fs.mkdirSync(testRoot, { recursive: true });
  return fs.mkdtempSync(path.join(testRoot, "qoder-"));
}

function writeExecutable(dir, name, body) {
  const filePath = path.join(dir, name);
  fs.writeFileSync(filePath, body, "utf8");
  if (process.platform !== "win32") {
    fs.chmodSync(filePath, 0o755);
  }
  return filePath;
}

function createQoderCliScript(dir, name, mode) {
  if (process.platform === "win32") {
    const successJson = '{"message":{"content":"OK"}}';
    const successStream = [
      '{"message":{"content":"O"}}',
      '{"message":{"content":"OK"}}',
      '{"type":"result","done":true}',
    ].join("\\n");
    const body =
      mode === "invalid"
        ? `@echo off\r\nif "%1"=="--version" echo qodercli 0.1.37 & exit /b 0\r\necho Invalid API key 1>&2\r\nexit /b 1\r\n`
        : `@echo off\r\nif "%1"=="--version" echo qodercli 0.1.37 & exit /b 0\r\nset MODE=json\r\n:loop\r\nif "%1"=="" goto done\r\nif "%1"=="--output-format" (\r\n  set MODE=%2\r\n)\r\nshift\r\ngoto loop\r\n:done\r\nif "%MODE%"=="stream-json" (\r\n  echo ${successStream}\r\n) else (\r\n  echo ${successJson}\r\n)\r\nexit /b 0\r\n`;
    return writeExecutable(dir, `${name}.cmd`, body);
  }

  const successJson = `{"message":{"content":"OK"}}`;
  const successStream = `{"message":{"content":"O"}}\n{"message":{"content":"OK"}}\n{"type":"result","done":true}`;
  const body =
    mode === "invalid"
      ? `#!/bin/sh
if [ "$1" = "--version" ] || [ "$1" = "-v" ]; then
  echo "qodercli 0.1.37"
  exit 0
fi
echo "Invalid API key" >&2
exit 1
`
      : `#!/bin/sh
if [ "$1" = "--version" ] || [ "$1" = "-v" ]; then
  echo "qodercli 0.1.37"
  exit 0
fi
MODE=json
PREV=""
for ARG in "$@"; do
  if [ "$PREV" = "--output-format" ]; then
    MODE="$ARG"
  fi
  PREV="$ARG"
done
if [ "$MODE" = "stream-json" ]; then
  printf '%s\n' '${successStream}'
else
  printf '%s\n' '${successJson}'
fi
exit 0
`;

  return writeExecutable(dir, name, body);
}

=======
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
test("QoderExecutor: constructor sets provider to qoder", () => {
  const executor = new QoderExecutor();
  assert.equal(executor.getProvider(), "qoder");
});

<<<<<<< HEAD
test("QoderExecutor: buildHeaders only keeps generic JSON and stream headers", () => {
  const executor = new QoderExecutor();
  assert.deepEqual(executor.buildHeaders({ apiKey: "pat" }, true), {
    "Content-Type": "application/json",
    "User-Agent": "Qoder-Cli",
    Authorization: "Bearer pat",
    Accept: "text/event-stream",
  });
  assert.deepEqual(executor.buildHeaders({ apiKey: "pat" }, false), {
    "Content-Type": "application/json",
=======
test("QoderExecutor: buildHeaders inherits configured user agent, auth and stream headers", () => {
  const executor = new QoderExecutor();

  assert.deepEqual(executor.buildHeaders({ apiKey: "pat" }, true), {
    "Content-Type": "application/json",
    "User-Agent": "Qoder-Cli",
    Authorization: "Bearer pat",
    Accept: "text/event-stream",
  });
  assert.deepEqual(executor.buildHeaders({ accessToken: "token" }, false), {
    "Content-Type": "application/json",
    "User-Agent": "Qoder-Cli",
    Authorization: "Bearer token",
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  });
});

test("QoderExecutor: buildUrl uses the live qoder.com API base", () => {
  const executor = new QoderExecutor();
<<<<<<< HEAD
  assert.equal(executor.buildUrl("qoder-rome-30ba3b", false), "https://api.qoder.com/v1/chat/completions");
=======
  assert.equal(
    executor.buildUrl("qoder-rome-30ba3b", false),
    "https://api.qoder.com/v1/chat/completions"
  );
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
});

test("normalizeQoderPatProviderData forces PAT + qodercli transport", () => {
  assert.deepEqual(normalizeQoderPatProviderData({ region: "sa-east-1" }), {
    region: "sa-east-1",
    authMode: "pat",
    transport: "qodercli",
  });
});

test("mapQoderModelToLevel maps static models to qodercli levels", () => {
  assert.equal(mapQoderModelToLevel("qoder-rome-30ba3b"), "qmodel");
  assert.equal(mapQoderModelToLevel("deepseek-r1"), "ultimate");
  assert.equal(mapQoderModelToLevel("qwen3-max"), "performance");
  assert.equal(mapQoderModelToLevel(""), null);
});

test("getStaticQoderModels exposes the static if/* catalog seed", () => {
  const models = getStaticQoderModels();
  assert.ok(models.some((model) => model.id === "qoder-rome-30ba3b"));
  assert.ok(models.some((model) => model.id === "deepseek-r1"));
});

test("buildQoderPrompt flattens transcript and warns against local tools", () => {
  const prompt = buildQoderPrompt({
    messages: [
      { role: "system", content: "Follow the user request." },
      {
        role: "user",
        content: [{ type: "text", text: "Reply with OK." }],
      },
      {
        role: "assistant",
        tool_calls: [
          {
            type: "function",
            function: { name: "pwd", arguments: "{}" },
          },
        ],
        content: "",
      },
    ],
    tools: [{ type: "function", function: { name: "pwd" } }],
  });

  assert.match(prompt, /Conversation transcript:/);
  assert.match(prompt, /USER:\nReply with OK\./);
  assert.match(prompt, /TOOL_CALL pwd: \{\}/);
  assert.match(prompt, /Do not call those tools yourself\./);
});

<<<<<<< HEAD
test("parseQoderCliFailure classifies auth, runtime and timeout failures", () => {
=======
test("parseQoderCliFailure classifies auth, upstream and timeout failures", () => {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  assert.deepEqual(parseQoderCliFailure("Invalid API key"), {
    status: 401,
    message: "Invalid API key",
    code: "upstream_auth_error",
  });
  assert.deepEqual(parseQoderCliFailure("command not found: qodercli"), {
<<<<<<< HEAD
    status: 503,
    message: "command not found: qodercli",
    code: "runtime_error",
=======
    status: 502,
    message: "command not found: qodercli",
    code: "upstream_error",
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  });
  assert.deepEqual(parseQoderCliFailure("request timed out"), {
    status: 504,
    message: "request timed out",
    code: "timeout",
  });
});

<<<<<<< HEAD
test("validateQoderCliPat succeeds when qodercli returns a JSON response", async () => {
  const prev = process.env.CLI_QODER_BIN;
  const tmpDir = createTempDir();
  const script = createQoderCliScript(tmpDir, "qodercli-ok", "success");
  process.env.CLI_QODER_BIN = script;
=======
test("validateQoderCliPat succeeds when the validation endpoint returns OK", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url, options) => {
    const urlStr = String(url);
    // Handle ping check
    if (urlStr.includes("/ping")) {
      return new Response("pong", { status: 200 });
    }
    assert.match(urlStr, /api1\.qoder\.sh\/algo\/api\/v2\/service\/pro\/sse\/agent_chat_generation/);
    assert.equal(options.method, "POST");
    assert.match(String(options.headers.Authorization), /^Bearer COSY\./);
    return new Response("{}", { status: 200 });
  };
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

  try {
    const result = await validateQoderCliPat({ apiKey: "pat_test" });
    assert.deepEqual(result, { valid: true, error: null, unsupported: false });
  } finally {
<<<<<<< HEAD
    if (prev === undefined) delete process.env.CLI_QODER_BIN;
    else process.env.CLI_QODER_BIN = prev;
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
});

test("validateQoderCliPat returns invalid api key for auth failures", async () => {
  const previousFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response("Invalid API key", { status: 401 });

  try {
    const result = await validateQoderCliPat({ apiKey: "pat_bad" });
    assert.deepEqual(result, {
      valid: false,
      error: "HTTP 401: Invalid API key",
      unsupported: false,
    });
  } finally {
    globalThis.fetch = previousFetch;
  }
});

test("QoderExecutor: non-stream calls return an OpenAI-compatible completion payload", async () => {
  const previousFetch = globalThis.fetch;
  globalThis.fetch = async () =>
    new Response(
      JSON.stringify({
        id: "chatcmpl-test",
        object: "chat.completion",
        choices: [
          { index: 0, message: { role: "assistant", content: "OK" }, finish_reason: "stop" },
        ],
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  try {
    const executor = new QoderExecutor();
    const { response, url } = await executor.execute({
      model: "qoder-rome-30ba3b",
=======
    globalThis.fetch = originalFetch;
  }
});

test("validateQoderCliPat returns auth failures with actionable error", async () => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url) => {
    if (String(url).includes("/ping")) return new Response("pong", { status: 200 });
    return new Response("Invalid API key", { status: 401 });
  };

  try {
    const result = await validateQoderCliPat({ apiKey: "pat_bad" });
    assert.equal(result.valid, false);
    assert.match(result.error, /Authentication failed/);
    assert.equal(result.unsupported, false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("QoderExecutor: missing tokens return an authentication error response", async () => {
  const executor = new QoderExecutor();
  const { response, url } = await executor.execute({
    model: "qoder-rome-30ba3b",
    body: { messages: [{ role: "user", content: "hi" }] },
    stream: false,
    credentials: {},
  });

  assert.equal(url, "https://dashscope.aliyuncs.com");
  assert.equal(response.status, 401);
  const payload = await response.json();
  assert.equal(payload.error.code, "token_required");
});

test("QoderExecutor: non-stream calls target DashScope and map alias models", async () => {
  const executor = new QoderExecutor();
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url, options) => {
    assert.equal(String(url), "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions");
    assert.equal(options.method, "POST");
    assert.equal(options.headers.Authorization, "Bearer pat_test");
    assert.equal(options.headers["x-dashscope-authtype"], "qwen-oauth");
    const parsedBody = JSON.parse(String(options.body));
    assert.equal(parsedBody.model, "coder-model");
    return new Response(
      JSON.stringify({
        id: "chatcmpl-qoder",
        object: "chat.completion",
        choices: [
          {
            index: 0,
            message: { role: "assistant", content: "OK" },
            finish_reason: "stop",
          },
        ],
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  };

  try {
    const { response, url, transformedBody } = await executor.execute({
      model: "qwen3.5-plus",
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
      body: { messages: [{ role: "user", content: "Reply with OK only." }] },
      stream: false,
      credentials: { apiKey: "pat_test" },
    });

<<<<<<< HEAD
    assert.equal(url, "qodercli://local");
=======
    assert.equal(url, "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions");
    assert.equal(transformedBody.model, "coder-model");
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    assert.equal(response.status, 200);
    const payload = await response.json();
    assert.equal(payload.object, "chat.completion");
    assert.equal(payload.choices[0].message.role, "assistant");
    assert.equal(payload.choices[0].message.content, "OK");
  } finally {
<<<<<<< HEAD
    if (prev === undefined) delete process.env.CLI_QODER_BIN;
    else process.env.CLI_QODER_BIN = prev;
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }
});

test("QoderExecutor: stream calls emit OpenAI-compatible SSE chunks", async () => {
  const previousFetch = globalThis.fetch;
  globalThis.fetch = async () =>
    new Response(
      'data: {"id":"x","object":"chat.completion.chunk","choices":[{"index":0,"delta":{"role":"assistant","content":"O"},"finish_reason":null}]}\n\n' +
        'data: {"id":"x","object":"chat.completion.chunk","choices":[{"index":0,"delta":{"content":"K"},"finish_reason":null}]}\n\n' +
        "data: [DONE]\n\n",
      {
        status: 200,
        headers: { "Content-Type": "text/event-stream" },
      }
    );

  try {
    const executor = new QoderExecutor();
=======
    globalThis.fetch = originalFetch;
  }
});

test("QoderExecutor: stream calls pass through successful SSE responses", async () => {
  const executor = new QoderExecutor();
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () =>
    new Response('data: {"choices":[{"delta":{"content":"O"}}]}\n\ndata: [DONE]\n\n', {
      status: 200,
      headers: { "Content-Type": "text/event-stream" },
    });

  try {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    const { response } = await executor.execute({
      model: "qoder-rome-30ba3b",
      body: { messages: [{ role: "user", content: "Reply with OK only." }] },
      stream: true,
      credentials: { apiKey: "pat_test" },
    });

    assert.equal(response.status, 200);
    const body = await response.text();
<<<<<<< HEAD
    assert.match(body, /chat\.completion\.chunk/);
    assert.match(body, /"role":"assistant"/);
    assert.match(body, /"content":"O"/);
    assert.match(body, /"content":"K"/);
    assert.match(body, /\[DONE\]/);
  } finally {
    if (prev === undefined) delete process.env.CLI_QODER_BIN;
    else process.env.CLI_QODER_BIN = prev;
    fs.rmSync(tmpDir, { recursive: true, force: true });
=======
    assert.match(body, /"content":"O"/);
    assert.match(body, /\[DONE\]/);
  } finally {
    globalThis.fetch = originalFetch;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  }
});
