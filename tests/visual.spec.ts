import { expect, test } from "@playwright/test";

test("portfolio landing page renders professional sections", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toContainText("Ian Ale Hansyah");
  await expect(page.getByTestId("hero-aurora")).toBeAttached();
  await expect(page.getByTestId("hero-aurora-layer")).toHaveCount(3);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await expect(page.getByRole("heading", { name: "Academic Background" })).toBeVisible();
  await expect(page.getByText("Applied Bachelor's Degree in Informatics Engineering")).toBeVisible();
  await expect(page.getByText("GPA 3.76/4.00")).toBeVisible();
  await expect(page.getByAltText("Politeknik Elektronika Negeri Surabaya logo")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Featured Projects" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Professional Experience" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Certifications" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "PENS English Proficiency Test" })).toBeVisible();
  await expect(page.getByText("Score 480")).toBeVisible();
  await expect(page.getByText("Score 503")).toBeVisible();
  await expect(page.getByRole("link", { name: /Open Introduction to Generative AI/ })).toHaveAttribute("href", "/certificate/AWS-Gen%20AI.pdf");
  await expect(page.getByRole("heading", { name: "Core Stack" })).toBeVisible();
  const reactLogo = page.getByTestId("technology-logo-react");
  await reactLogo.hover();
  await expect(page.getByTestId("technology-logo-react-tooltip")).toBeVisible();
  const embeddings = page.getByTestId("technology-logo-embeddings");
  await expect(embeddings).toHaveText("Embeddings");
  await expect(embeddings.locator("svg")).toHaveCount(0);
});

test("hero fills viewport and navbar changes after hero", async ({ page }) => {
  await page.goto("/");
  const viewport = page.viewportSize();
  const hero = page.locator("[data-hero-section]");
  const heroBox = await hero.boundingBox();
  expect(heroBox?.height).toBeGreaterThanOrEqual(viewport?.height ?? 0);
  const nextSectionTop = await page.getByText("Engineering across product, backend, data, and AI").evaluate(element => element.closest("section")?.getBoundingClientRect().top ?? 0);
  expect(nextSectionTop).toBeGreaterThanOrEqual(viewport?.height ?? 0);
  const header = page.getByTestId("site-header");
  await expect(header).toHaveClass(/bg-transparent/);
  await page.evaluate(() => window.scrollTo(0, document.querySelector<HTMLElement>("[data-hero-section]")?.offsetHeight ?? window.innerHeight));
  await expect(header).toHaveClass(/backdrop-blur-md/);
});

test("project search filters and resets", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByText("15 projects")).toBeVisible();
  await page.getByPlaceholder("Search projects, technologies, or categories").fill("SyntraFix");
  await expect(page.getByText("1 project")).toBeVisible();
  await page.getByRole("button", { name: "Reset filters" }).click();
  await expect(page.getByText("15 projects")).toBeVisible();
});

test("project detail renders case study content", async ({ page }) => {
  await page.goto("/projects/syntra-ai");
  await expect(page.locator("h1")).toContainText("SyntraFix");
  await expect(page.getByRole("heading", { name: "Overview" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Technology Stack" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Project Gallery" })).toBeVisible();
});

test("contact page exposes verified methods", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.locator("h1")).toContainText("Let's build something together");
  await expect(page.getByRole("link", { name: /Email/ })).toHaveAttribute("href", "mailto:i.alehansyah@gmail.com");
  await expect(page.getByRole("link", { name: /Phone/ })).toHaveAttribute("href", "tel:+6281233914116");
});

test("gallery renders local photos and opens detail dialog", async ({ page }) => {
  await page.goto("/gallery");
  await expect(page.getByRole("heading", { name: "Moments behind the work" })).toBeVisible();
  await expect(page.getByTestId("gallery-grid").getByRole("button")).toHaveCount(5);
  await expect(page.getByAltText("Ian Ale Hansyah with fellow MSIB Batch 7 participants")).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.getByRole("button", { name: /MSIB Batch 7 Program/ }).click();
  await expect(page.getByTestId("gallery-dialog")).toBeVisible();
  await expect(page.getByRole("heading", { name: "MSIB Batch 7 Program" })).toBeVisible();
  await page.getByRole("button", { name: "Close gallery detail" }).click();
  await expect(page.getByTestId("gallery-dialog")).toBeHidden();
});

test("mobile menu toggles", async ({ page }) => {
  test.skip(test.info().project.name !== "mobile", "Mobile-only interaction");
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Open menu" });
  await expect(menu).toBeVisible();
  await page.waitForTimeout(500);
  await menu.click();
  await expect(page.getByRole("button", { name: "Close menu" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Projects" }).first()).toBeVisible();
});
