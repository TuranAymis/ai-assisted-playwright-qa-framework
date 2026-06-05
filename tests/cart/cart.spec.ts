import { test } from "@playwright/test";
import { CartPage } from "../../pages/CartPage";
import { loginAsStandardUser } from "../../utils/auth";

test.describe("SauceDemo Cart Functionality", () => {
    test("should add first item to cart", async ({ page }) => {
        const { inventoryPage } = await loginAsStandardUser(page);
        const cartPage = new CartPage(page);

        await inventoryPage.addFirstItemToCart();
        await inventoryPage.expectCartBadgeCount("1");

        await inventoryPage.goToCart();
        await cartPage.expectCartPageVisible();
        await cartPage.expectCartItemCount(1);
    });

    test("should remove item from cart", async ({ page }) => {
        const { inventoryPage } = await loginAsStandardUser(page);
        const cartPage = new CartPage(page);

        await inventoryPage.addFirstItemToCart();
        await inventoryPage.expectCartBadgeCount("1");

        await inventoryPage.goToCart();
        await cartPage.expectCartPageVisible();
        await cartPage.expectCartItemCount(1);

        await cartPage.removeFirstItem();
        await cartPage.expectCartEmpty();
    });
});
