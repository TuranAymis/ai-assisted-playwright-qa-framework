import { test, expect } from "../../fixtures/pages";

test.describe("SauceDemo Login Page - Smoke Tests", () => {
  test("should display login page elements", async ({ loginPage }) => {
    await loginPage.goto();

    await expect(loginPage.page).toHaveTitle(/Swag Labs/);
    await loginPage.expectLoginPageVisible();
  });
});
