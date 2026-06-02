import { test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { InventoryPage } from "../../pages/InventoryPage";
import { CartPage } from "../../pages/CartPage";
import { users } from "../../test-data/users";

test.describe("SauceDemo Cart Functionality", () => {
    test("should add first item to cart", async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);

        await loginPage.goto();
        await loginPage.login(users.standard.username, users.standard.password);
        await inventoryPage.expectInventoryPageVisible();

        await inventoryPage.addFirstItemToCart();
        await inventoryPage.expectCartBadgeCount("1");

        await inventoryPage.goToCart();
        await cartPage.expectCartPageVisible();
        await cartPage.expectCartItemCount(1); 
    });

    test("should remove item from cart", async ({ page }) => {

        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);

        await loginPage.goto();
        await loginPage.login(users.standard.username, users.standard.password);
        await inventoryPage.expectInventoryPageVisible();

        await inventoryPage.addFirstItemToCart();
        await inventoryPage.expectCartBadgeCount("1");

        await inventoryPage.goToCart();
        await cartPage.expectCartPageVisible();
        await cartPage.expectCartItemCount(1);

        await cartPage.removeFirstItem();
        await cartPage.expectCartEmpty();
    })
});
