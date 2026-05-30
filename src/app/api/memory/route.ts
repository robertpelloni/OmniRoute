import { NextResponse } from "next/server";
import { listMemories, createMemory } from "@/lib/memory/store";
<<<<<<< Updated upstream
import { MemoryType } from "@/lib/memory/types";
import { parsePaginationParams, buildPaginatedResponse } from "@/shared/types/pagination";
import { z } from "zod";
import { validateBody, isValidationFailure } from "@/shared/validation/helpers";

const createMemorySchema = z.object({
  content: z.string().min(1),
  key: z.string().min(1),
  type: z.nativeEnum(MemoryType).default(MemoryType.FACTUAL),
  sessionId: z.string().default(""),
  apiKeyId: z.string().default(""),
  metadata: z.record(z.string(), z.unknown()).default({}),
  expiresAt: z.coerce.date().nullable().default(null),
});

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const { searchParams } = url;

    const paginationParams = parsePaginationParams(searchParams);
    const rawOffset = searchParams.get("offset");
    const offset =
      typeof rawOffset === "string" && rawOffset.trim().length > 0
        ? Math.max(0, Number.parseInt(rawOffset, 10) || 0)
        : undefined;
    const query = searchParams.get("q") || undefined;

    const apiKeyId = searchParams.get("apiKeyId") || undefined;
    const type = (searchParams.get("type") as any) || undefined;
    const sessionId = searchParams.get("sessionId") || undefined;

    const result = await listMemories({
      apiKeyId,
      type,
      sessionId,
      query,
      limit: paginationParams.limit,
      offset,
      page: offset === undefined ? paginationParams.page : undefined,
    });

    const stats = {
      total: result.total,
      byType: result.byType ?? {},
    };

    const responsePagination =
      offset === undefined
        ? paginationParams
        : {
            ...paginationParams,
            page: Math.floor(offset / paginationParams.limit) + 1,
          };

    const paginatedResponse = buildPaginatedResponse(result.data, result.total, responsePagination);

    return NextResponse.json({
      ...paginatedResponse,
      stats,
    });
=======

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const apiKeyId = searchParams.get("apiKeyId") || undefined;
    const type = (searchParams.get("type") as any) || undefined;
    const sessionId = searchParams.get("sessionId") || undefined;
    const limitParams = searchParams.get("limit");
    const offsetParams = searchParams.get("offset");

    const memories = await listMemories({
      apiKeyId,
      type,
      sessionId,
      limit: limitParams ? parseInt(limitParams, 10) : undefined,
      offset: offsetParams ? parseInt(offsetParams, 10) : undefined,
    });
    return NextResponse.json({ memories });
>>>>>>> Stashed changes
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
<<<<<<< Updated upstream
    const rawBody = await request.json();
    const validation = validateBody(createMemorySchema, rawBody);
    if (isValidationFailure(validation)) {
      return NextResponse.json(validation.error, { status: 400 });
    }
    const memoryId = await createMemory(validation.data);
=======
    const body = await request.json();
    const memoryId = await createMemory(body);
>>>>>>> Stashed changes
    return NextResponse.json({ success: true, id: memoryId });
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error }, { status: 400 });
  }
}
