import { test, expect } from "@playwright/test";
<<<<<<< HEAD
import { gotoDashboardRoute } from "./helpers/dashboardAuth";

test.describe("Protocol visibility", () => {
  test("shows MCP and A2A tabs inside the endpoint page", async ({ page }) => {
    await gotoDashboardRoute(page, "/dashboard/endpoint");
    await page.waitForLoadState("networkidle");

    // MCP and A2A are now tabs directly in the SegmentedControl
    const mcpTab = page.getByRole("tab", { name: "MCP" });
    const a2aTab = page.getByRole("tab", { name: "A2A" });

    await expect(mcpTab).toBeVisible();
    await expect(a2aTab).toBeVisible();

    // Verify MCP dashboard mounts
    await mcpTab.click();
    // In dev/test it might just show "loading..." or the processStatus card
    await expect(page.locator("body")).not.toContainText(/application error|500/i);

    // Verify A2A dashboard mounts
    await a2aTab.click();
=======

test.describe("Protocol visibility", () => {
  test("shows MCP/A2A links inside protocols tab in endpoint page", async ({ page }) => {
    await page.goto("/dashboard/endpoint");
    await page.waitForLoadState("networkidle");

    const redirectedToLogin = page.url().includes("/login");
    test.skip(redirectedToLogin, "Authentication enabled without a login fixture.");

    // MCP and A2A are now shown inside the "Protocols" tab — click it first
    const protocolTab = page.getByRole("tab", { name: /protocols|protocolos/i });
    await expect(protocolTab).toBeVisible();
    await protocolTab.click();

    // Links to MCP and A2A management pages appear after tab switch
    await expect(page.locator('a[href="/dashboard/mcp"]').first()).toBeVisible();
    await expect(page.locator('a[href="/dashboard/a2a"]').first()).toBeVisible();

    const mcpLinks = await page.locator('a[href="/dashboard/mcp"]').count();
    const a2aLinks = await page.locator('a[href="/dashboard/a2a"]').count();
    expect(mcpLinks).toBeGreaterThanOrEqual(1);
    expect(a2aLinks).toBeGreaterThanOrEqual(1);
  });

  test("loads MCP and A2A dashboards without runtime error page", async ({ page }) => {
    await page.goto("/dashboard/mcp");
    await page.waitForLoadState("networkidle");
    let redirectedToLogin = page.url().includes("/login");
    test.skip(redirectedToLogin, "Authentication enabled without a login fixture.");
    await expect(page.locator("body")).toBeVisible();
    await expect(page.locator("body")).not.toContainText(/application error|500/i);

    await page.goto("/dashboard/a2a");
    await page.waitForLoadState("networkidle");
    redirectedToLogin = page.url().includes("/login");
    test.skip(redirectedToLogin, "Authentication enabled without a login fixture.");
    await expect(page.locator("body")).toBeVisible();
>>>>>>> origin/feat/go-port-and-ui-improvements-13710034216498711139
    await expect(page.locator("body")).not.toContainText(/application error|500/i);
  });
});
