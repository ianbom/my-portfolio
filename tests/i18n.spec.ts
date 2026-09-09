import { expect, test } from "@playwright/test";

test("locale routes render translated content and the header preserves the page", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/en$/);
  await page.waitForTimeout(300);
  const languageButton = page.locator('header [role="button"][aria-label="Switch language to Indonesian"]');
  if (!(await languageButton.isVisible())) await page.getByRole("button", { name: "Open menu" }).click();
  const activeLanguageButton = (await languageButton.isVisible()) ? languageButton : page.locator('[role="dialog"] [role="button"][aria-label="Switch language to Indonesian"]');
  await expect(activeLanguageButton).toBeVisible();

  await activeLanguageButton.click();
  await expect(page).toHaveURL(/\/id$/);
  await expect(page.getByRole("heading", { name: "Keahlian Rekayasa Perangkat Lunak" })).toBeVisible();

  await page.goto("/id/projects/sobat-bumi");
  await page.waitForTimeout(300);
  const englishButton = page.locator('header [role="button"][aria-label="Ganti bahasa ke Inggris"]');
  if (!(await englishButton.isVisible())) await page.getByRole("button", { name: "Buka menu" }).click();
  await ((await englishButton.isVisible()) ? englishButton : page.locator('[role="dialog"] [role="button"][aria-label="Ganti bahasa ke Inggris"]')).click();
  await expect(page).toHaveURL(/\/en\/projects\/sobat-bumi$/);
  await expect(page.getByRole("heading", { name: "Overview" })).toBeVisible();
});
