import { test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { InventoryPage } from "../../pages/InventoryPage";
import { users } from "../../test-data/users";
import { products } from "../../test-data/products";

test.describe("Inventory Page Tests", () => {
  test("should display inventory page with expected products", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.expectInventoryPageVisible();
    await inventoryPage.expectInventoryItemCount(6);
    await inventoryPage.expectInventoryItemNames(products.expectedNames);
  });

  test("should display inventory item details", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);

    await inventoryPage.expectInventoryItemDescriptionsVisible(6);
    await inventoryPage.expectInventoryItemPricesVisible(6);
    await inventoryPage.expectInventoryItemImagesVisible(6);
    await inventoryPage.expectAddToCartButtonsVisible(6);
  });
  });