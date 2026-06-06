/**
 * API: OpenAPI "Try It" Proxy
 * POST — forwards a request to a local endpoint and returns the result
 */

import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";
<<<<<<< HEAD
=======
import { validateBody, isValidationFailure } from "@/shared/validation/helpers";

>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
const tryRequestSchema = z.object({
  method: z
    .enum(["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"])
    .optional()
    .default("GET"),
<<<<<<< HEAD
=======
  path: z.string().min(1, "Path is required").startsWith("/", "Path must start with /"),
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  headers: z.record(z.string(), z.string()).optional().default({}),
  body: z.any().optional(),
});

<<<<<<< HEAD
=======
export async function POST(request: NextRequest) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  try {
    const rawBody = await request.json();
    const validation = validateBody(tryRequestSchema, rawBody);
    if (isValidationFailure(validation)) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { method, path, headers, body: reqBody } = validation.data;

<<<<<<< HEAD
=======
    // Build the target URL using the incoming request's origin
    const origin = request.headers.get("x-forwarded-proto")
      ? `${request.headers.get("x-forwarded-proto")}://${request.headers.get("host")}`
      : `http://${request.headers.get("host") || "localhost:20128"}`;

    const targetUrl = `${origin}${path}`;
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

    const start = performance.now();

    // Forward cookies/auth from the original request
<<<<<<< HEAD
=======
    const forwardHeaders: Record<string, string> = {
      ...(headers as Record<string, string>),
    };
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139

    // Forward auth from the dashboard session
    const cookie = request.headers.get("cookie");
    if (cookie && !forwardHeaders["Cookie"]) {
      forwardHeaders["Cookie"] = cookie;
    }

    if (reqBody && !forwardHeaders["Content-Type"]) {
      forwardHeaders["Content-Type"] = "application/json";
    }

    const fetchOptions: RequestInit = {
      method: method.toUpperCase(),
      headers: forwardHeaders,
    };

    if (reqBody && method.toUpperCase() !== "GET") {
      fetchOptions.body = typeof reqBody === "string" ? reqBody : JSON.stringify(reqBody);
    }

    const res = await fetch(targetUrl, fetchOptions);
    const latencyMs = Math.round(performance.now() - start);

    // Read response
    const contentType = res.headers.get("content-type") || "";
    let responseBody: any;

    if (contentType.includes("application/json")) {
      responseBody = await res.json();
    } else {
      const text = await res.text();
      // Truncate very large responses
      responseBody = text.length > 10000 ? text.slice(0, 10000) + "\n... (truncated)" : text;
    }

    // Collect response headers
    const responseHeaders: Record<string, string> = {};
    res.headers.forEach((value, key) => {
      responseHeaders[key] = value;
    });

    return NextResponse.json({
      status: res.status,
      statusText: res.statusText,
      headers: responseHeaders,
      body: responseBody,
      latencyMs,
      contentType,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        status: 0,
        statusText: "Network Error",
        headers: {},
        body: { error: error.message || "Request failed" },
        latencyMs: 0,
        contentType: "application/json",
      },
      { status: 200 } // Return 200 so the frontend can display the error
    );
  }
}
