import { NextResponse } from "next/server";
import { getCostSummary, setBudget, checkBudget } from "@/domain/costRules";
import { setBudgetSchema } from "@/shared/validation/schemas";
import { isValidationFailure, validateBody } from "@/shared/validation/helpers";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const apiKeyId = searchParams.get("apiKeyId");
    if (!apiKeyId) {
      return NextResponse.json({ error: "apiKeyId query param is required" }, { status: 400 });
    }
    const summary = getCostSummary(apiKeyId);
    const budgetCheck = checkBudget(apiKeyId);
<<<<<<< HEAD
    return NextResponse.json({
      ...summary,
      budgetCheck,
      dailyLimitUsd: summary.dailyLimitUsd,
      weeklyLimitUsd: summary.weeklyLimitUsd,
      monthlyLimitUsd: summary.monthlyLimitUsd,
      warningThreshold: summary.warningThreshold,
      resetInterval: summary.resetInterval,
      resetTime: summary.resetTime,
      budgetResetAt: summary.budgetResetAt,
      lastBudgetResetAt: summary.lastBudgetResetAt,
      totalCostToday: summary.totalCostToday,
      totalCostMonth: summary.totalCostMonth,
      totalCostPeriod: summary.totalCostPeriod,
      activeLimitUsd: summary.activeLimitUsd,
      nextResetAt: summary.nextResetAt,
      periodStartAt: summary.periodStartAt,
    });
=======
    return NextResponse.json({ ...summary, budgetCheck });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  } catch (error) {
    console.error("Error fetching budget summary:", error);
    return NextResponse.json({ error: "Failed to fetch budget summary" }, { status: 500 });
  }
}

export async function POST(request) {
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
    const validation = validateBody(setBudgetSchema, rawBody);
    if (isValidationFailure(validation)) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }
<<<<<<< HEAD
    const {
      apiKeyId,
      dailyLimitUsd,
      weeklyLimitUsd,
      monthlyLimitUsd,
      warningThreshold,
      resetInterval,
      resetTime,
    } = validation.data;

    const budget = setBudget(apiKeyId, {
      dailyLimitUsd,
      weeklyLimitUsd,
      monthlyLimitUsd,
      warningThreshold,
      resetInterval,
      resetTime,
    });
    return NextResponse.json({ success: true, apiKeyId, budget });
=======
    const { apiKeyId, dailyLimitUsd, monthlyLimitUsd, warningThreshold } = validation.data;

    setBudget(apiKeyId, { dailyLimitUsd, monthlyLimitUsd, warningThreshold });
    return NextResponse.json({ success: true, apiKeyId, dailyLimitUsd });
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
  } catch (error) {
    console.error("Error setting budget:", error);
    return NextResponse.json({ error: "Failed to set budget" }, { status: 500 });
  }
}
