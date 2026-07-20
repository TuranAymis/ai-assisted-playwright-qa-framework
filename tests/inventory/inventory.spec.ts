import { test } from "../../fixtures/pages";
import { products } from "../../test-data/products";

test.describe("Inventory Page Tests", () => {
  test("should display inventory page with expected products", async ({
loggedInInventoryPage   }) => {
    await loggedInInventoryPage.expectInventoryPageVisible();
    await loggedInInventoryPage.expectInventoryItemCount(6);
    await loggedInInventoryPage.expectInventoryItemNames(products.expectedNames);
  });

  test("should display inventory item details", async ({ loggedInInventoryPage  }) => {
    await loggedInInventoryPage.expectInventoryItemDescriptionsVisible(6);
    await loggedInInventoryPage.expectInventoryItemPricesVisible(6);
    await loggedInInventoryPage.expectInventoryItemImagesVisible(6);
    await loggedInInventoryPage.expectAddToCartButtonsVisible(6);
  });
});