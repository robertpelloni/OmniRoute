<<<<<<< HEAD
import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { getEvalScorecard, listEvalRuns, getApiKeys } from "@/lib/localDb";
import { listSuites, runSuite, createScorecard } from "@/lib/evals/evalRunner";
import { buildEvalTargetOptions, runEvalSuiteAgainstTarget } from "@/lib/evals/runtime";
import { requireManagementAuth } from "@/lib/api/requireManagementAuth";
import { evalRunSuiteSchema } from "@/shared/validation/schemas";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";

export async function GET(request: Request) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

  try {
    const [suites, recentRuns, scorecard, targets, apiKeys] = await Promise.all([
      Promise.resolve(listSuites()),
      Promise.resolve(listEvalRuns({ limit: 20 })),
      Promise.resolve(getEvalScorecard({ limit: 50 })),
      buildEvalTargetOptions(),
      getApiKeys(),
    ]);

    return NextResponse.json({
      suites,
      recentRuns,
      scorecard,
      targets,
      apiKeys: apiKeys.map((key) => ({
        id: key.id,
        name: key.name,
        isActive: key.isActive !== false,
      })),
    });
  } catch (error: any) {
=======
import { NextResponse } from "next/server";
import { listSuites, runSuite } from "@/lib/evals/evalRunner";
import { evalRunSuiteSchema } from "@/shared/validation/schemas";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";

export async function GET() {
  try {
    const suites = listSuites();
    return NextResponse.json(suites);
  } catch (error) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

<<<<<<< HEAD
export async function POST(request: Request) {
  const authError = await requireManagementAuth(request);
  if (authError) return authError;

=======
export async function POST(request) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  let rawBody;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      {
        error: {
          message: "Invalid request",
          details: [{ field: "body", message: "Invalid JSON body" }],
        },
      },
      { status: 400 }
    );
  }

  try {
    const validation = validateBody(evalRunSuiteSchema, rawBody);
    if (isValidationFailure(validation)) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }
<<<<<<< HEAD

    const { suiteId, outputs, target, compareTarget, apiKeyId } = validation.data;

    if (outputs && Object.keys(outputs).length > 0) {
      const result = runSuite(suiteId, outputs);
      return NextResponse.json(result);
    }

    const targetsToRun = [target || { type: "suite-default" as const, id: null }];
    if (compareTarget) {
      targetsToRun.push(compareTarget);
    }

    const runGroupId = targetsToRun.length > 1 ? randomUUID() : null;
    const runs = await Promise.all(
      targetsToRun.map((entry) =>
        runEvalSuiteAgainstTarget({
          suiteId,
          target: entry,
          apiKeyId,
          runGroupId,
        })
      )
    );

    const scorecard =
      runs.length > 0
        ? createScorecard(
            runs.map((run) => ({
              suiteId: `${run.suiteId}:${run.target.key}`,
              suiteName: `${run.suiteName} · ${run.target.label}`,
              results: run.results,
              summary: run.summary,
            }))
          )
        : null;

    return NextResponse.json({
      suiteId,
      runGroupId,
      runs,
      scorecard,
      recentRuns: listEvalRuns({ limit: 20 }),
      historyScorecard: getEvalScorecard({ limit: 50 }),
    });
  } catch (error: any) {
=======
    const { suiteId, outputs } = validation.data;
    const result = runSuite(suiteId, outputs);
    return NextResponse.json(result);
  } catch (error) {
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
