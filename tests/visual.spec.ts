import { expect, test } from "@playwright/test";

test("portfolio landing page renders professional sections", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toContainText("Ian Ale Hansyah");
  await expect(page.getByTestId("hero-stage-background")).toBeAttached();
  await expect(page.getByTestId("hero-portrait")).toBeVisible();
  const portraitImage = page.getByAltText("Illustrated portrait of Ian Ale Hansyah");
  await expect(portraitImage).toHaveAttribute("src", /ianbom\.png/);
  await expect(portraitImage).toHaveClass(/hero-portrait-image/);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await expect(page.getByRole("heading", { name: "Academic Background" })).toBeVisible();
  await expect(page.getByText("Applied Bachelor's Degree in Informatics Engineering")).toBeVisible();
  await expect(page.getByText("GPA 3.76/4.00")).toBeVisible();
  await expect(page.getByAltText("Politeknik Elektronika Negeri Surabaya logo")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Featured Projects" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Professional Experience" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "National Competition Achievements" })).toBeVisible();
  const achievementsSection = page.getByRole("heading", { name: "National Competition Achievements" }).locator("xpath=ancestor::section");
  const competitionCertificates = achievementsSection.getByRole("link", { name: /Open .* certificate PDF/ });
  await expect(competitionCertificates).toHaveCount(4);
  await expect(competitionCertificates.nth(0)).toHaveAttribute("href", "/competition/JUARA 1 - Web Technology Competition.pdf");
  await expect(competitionCertificates.nth(0)).toHaveAttribute("target", "_blank");
  await expect(competitionCertificates.nth(0)).toHaveAttribute("rel", "noreferrer");
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
  for (const technology of ["next-js", "express-js", "ollama"]) await expect(page.getByTestId(`technology-logo-${technology}`).locator("svg")).toHaveAttribute("fill", "#f5f5f5");
  await expect(page.getByLabel("LinkedIn profile")).toHaveText("LinkedIn");
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

test("desktop hero portrait meets the hero baseline", async ({ page }) => {
  test.skip(test.info().project.name !== "desktop", "Desktop-only layout");
  await page.goto("/");
  const heroBox = await page.locator("[data-hero-section]").boundingBox();
  const portraitBox = await page.getByTestId("hero-portrait").boundingBox();
  expect(heroBox).not.toBeNull();
  expect(portraitBox).not.toBeNull();
  const heroBottom = (heroBox?.y ?? 0) + (heroBox?.height ?? 0);
  const portraitBottom = (portraitBox?.y ?? 0) + (portraitBox?.height ?? 0);
  expect(Math.abs(heroBottom - portraitBottom)).toBeLessThanOrEqual(1);
});

test("mobile hero portrait meets the section baseline", async ({ page }) => {
  test.skip(test.info().project.name !== "mobile", "Mobile-only layout");
  await page.goto("/");
  const heroBox = await page.locator("[data-hero-section]").boundingBox();
  const portraitBox = await page.getByTestId("hero-portrait").boundingBox();
  expect(heroBox).not.toBeNull();
  expect(portraitBox).not.toBeNull();
  const heroBottom = (heroBox?.y ?? 0) + (heroBox?.height ?? 0);
  const portraitBottom = (portraitBox?.y ?? 0) + (portraitBox?.height ?? 0);
  expect(Math.abs(heroBottom - portraitBottom)).toBeLessThanOrEqual(1);
});

test("project search filters and resets", async ({ page }) => {
  await page.goto("/projects");
  await page.waitForTimeout(300);
  await expect(page.getByText("15 projects")).toBeVisible();
  const projectThumbnails = page.locator("img[alt$=' interface']");
  await expect(projectThumbnails).toHaveCount(15);
  await expect(projectThumbnails.first()).toHaveClass(/object-contain/);
  expect(await projectThumbnails.first().getAttribute("src")).toContain("q=90");
  await page.getByPlaceholder("Search projects, technologies, or categories").fill("SyntraFix");
  await expect(page.getByText("1 project")).toBeVisible();
  await page.getByRole("button", { name: "Reset filters" }).click();
  await expect(page.getByText("15 projects")).toBeVisible();
});

test("featured project thumbnails preserve full screenshots", async ({ page }) => {
  await page.goto("/");
  const featuredThumbnails = page.locator("img[alt$=' interface']");
  await expect(featuredThumbnails).toHaveCount(6);
  await expect(featuredThumbnails.first()).toHaveClass(/object-contain/);
  expect(await featuredThumbnails.first().getAttribute("src")).toContain("q=90");
});

test("project detail renders case study content", async ({ page }) => {
  await page.goto("/projects/sobat-bumi");
  await page.waitForTimeout(300);
  await expect(page.locator("h1")).toContainText("Sobat Bumi");
  await expect(page.getByTestId("project-carousel")).toBeVisible();
  await expect(page.getByTestId("carousel-slide-count")).toHaveText("1 / 8");
  await expect(page.getByRole("button", { name: /Show image 1:/ })).toBeVisible();
  const activeImage = page.getByTestId("project-carousel").locator("img").first();
  await expect(activeImage).toHaveClass(/object-contain/);
  expect(await activeImage.getAttribute("src")).toContain("q=90");
  await expect(page.getByRole("button", { name: "Show previous project image" })).toBeDisabled();
  await page.getByRole("button", { name: "Show next project image" }).click();
  await expect(page.getByTestId("carousel-slide-count")).toHaveText("2 / 8");
  await expect(page.getByRole("heading", { name: "Project Gallery" })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Overview" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Technology Stack" })).toBeVisible();
});

test("contact page exposes verified methods", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.locator("h1")).toContainText("Let's build something together");
  await expect(page.getByRole("link", { name: /Email/ })).toHaveAttribute("href", "mailto:i.alehansyah@gmail.com");
  await expect(page.getByRole("link", { name: /Phone/ })).toHaveAttribute("href", "tel:+6281233914116");
});

test("gallery renders local photos and opens detail dialog", async ({ page }) => {
  await page.goto("/gallery");
  await page.waitForTimeout(300);
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
  await page.waitForTimeout(300);
  const menu = page.getByRole("button", { name: "Open menu" });
  await expect(menu).toBeVisible();
  await expect(menu).toHaveCSS("width", "48px");
  await expect(menu).toHaveCSS("height", "48px");
  await expect(page.getByRole("link", { name: "Let's Talk" })).toBeHidden();
  const brandBox = await page.getByTestId("site-header").getByRole("link", { name: "Ian Ale" }).boundingBox();
  const menuBox = await menu.boundingBox();
  expect(brandBox?.x).toBeLessThan(menuBox?.x ?? 0);
  await menu.click();
  const drawer = page.getByRole("dialog", { name: "Mobile navigation" });
  await expect(drawer).toBeVisible();
  await expect(page.getByTestId("mobile-navigation-overlay")).toBeVisible();
  await expect(drawer.getByRole("link", { name: "Projects" })).toHaveCSS("font-size", "36px");
  await expect(drawer.getByRole("button", { name: "Close menu" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(drawer).not.toBeVisible();
  await menu.click();
  await expect(drawer).toBeVisible();
  await page.getByRole("button", { name: "Close navigation backdrop" }).click({ position: { x: 12, y: 120 } });
  await expect(drawer).not.toBeVisible();
});
