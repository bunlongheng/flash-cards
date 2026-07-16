import { test, expect } from "@playwright/test";

// The core user journey: home renders, a category opens, tapping cards advances progress.
test("open a category and advance progress by tapping a card", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".thumbnail-style").first()).toBeVisible();

    await page.goto("/shapes");
    const cards = page.locator(".thumbnail");
    await expect(cards.first()).toBeVisible();

    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
    await expect(page.locator(".bottom-right")).toHaveText(`0/${count}`);

    await cards.first().click();
    await expect(page.locator(".bottom-right")).toHaveText(`1/${count}`);
    await expect(cards.first()).toHaveClass(/disabled/);
});
