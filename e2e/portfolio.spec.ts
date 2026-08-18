import { expect, test } from "@playwright/test";

test.describe("Portfolio homepage", () => {
  test("loads hero and main sections", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Cadima Lusiola/i);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Cadima Lusiola");
    await expect(page.locator("#home")).toBeVisible();
    await expect(page.locator("#about")).toBeVisible();
    await expect(page.locator("#projects")).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();
  });

  test("shows profile image and project cards", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByAltText("Cadima Lusiola")).toBeVisible();
    await expect(page.locator(".project-card")).toHaveCount(7);
  });

  test("navbar links scroll to sections", async ({ page }) => {
    await page.goto("/");

    const nav = page.getByRole("navigation");

    await nav.getByRole("link", { name: "Über mich", exact: true }).click();
    await expect(page).toHaveURL(/#about$/);
    await expect(page.locator("#about")).toBeInViewport();

    await nav.getByRole("link", { name: "Projekte", exact: true }).click();
    await expect(page).toHaveURL(/#projects$/);
    await expect(page.locator("#projects")).toBeInViewport();

    await nav.getByRole("link", { name: "Kontakt", exact: true }).click();
    await expect(page).toHaveURL(/#contact$/);
    await expect(page.locator("#contact")).toBeInViewport();
  });

  test("contact section includes form and contact links", async ({ page }) => {
    await page.goto("/#contact");

    await expect(page.getByRole("heading", { name: "Kontakt", exact: true })).toBeVisible();
    await expect(page.getByRole("form", { name: "Kontaktformular" })).toBeVisible();
    await expect(page.getByLabel("Name")).toBeVisible();
    await expect(page.getByLabel("E-Mail")).toBeVisible();
    await expect(page.getByLabel("Nachricht")).toBeVisible();
    await expect(page.getByRole("link", { name: /clusiola4@gmail.com/i })).toHaveAttribute(
      "href",
      "mailto:clusiola4@gmail.com"
    );
    await expect(page.getByRole("link", { name: /078 672 88 05/i })).toHaveAttribute(
      "href",
      "tel:+41786728805"
    );
    await expect(page.getByRole("link", { name: /cadima-lusiola/i })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/cadima-lusiola-392833380/"
    );
  });

  test("project filters reduce visible cards", async ({ page }) => {
    await page.goto("/#projects");

    await page.getByRole("button", { name: "Tools" }).click();
    await expect(page.locator(".project-card")).toHaveCount(2);

    await page.getByRole("button", { name: "Alle" }).click();
    await expect(page.locator(".project-card")).toHaveCount(7);
  });

  test("footer links are present", async ({ page }) => {
    await page.goto("/");

    const footer = page.locator("footer");
    await expect(footer.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/CapalotDaGreat"
    );
    await expect(footer.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/cadima-lusiola-392833380/"
    );
  });
});

test.describe("Route redirects", () => {
  test("/about redirects to homepage about section", async ({ page }) => {
    await page.goto("/about");
    await expect(page).toHaveURL(/\/#about$/);
    await expect(page.locator("#about")).toBeVisible();
  });

  test("/projects redirects to homepage projects section", async ({ page }) => {
    await page.goto("/projects");
    await expect(page).toHaveURL(/\/#projects$/);
    await expect(page.locator("#projects")).toBeVisible();
  });
});
