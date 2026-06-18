import { test } from "../../fixtures/pages";
import { loginAsStandardUser } from "../../utils/auth";
import { products } from "../../test-data/products";

test.describe("Inventory Page Tests", () => {
  test("should display inventory page with expected products", async ({
    page,
  }) => {
    const { inventoryPage } = await loginAsStandardUser(page);

    await inventoryPage.expectInventoryPageVisible();
    await inventoryPage.expectInventoryItemCount(6);
    await inventoryPage.expectInventoryItemNames(products.expectedNames);
  });

  test("should display inventory item details", async ({ page }) => {
    const { inventoryPage } = await loginAsStandardUser(page);

    await inventoryPage.expectInventoryItemDescriptionsVisible(6);
    await inventoryPage.expectInventoryItemPricesVisible(6);
    await inventoryPage.expectInventoryItemImagesVisible(6);
    await inventoryPage.expectAddToCartButtonsVisible(6);
  });
});