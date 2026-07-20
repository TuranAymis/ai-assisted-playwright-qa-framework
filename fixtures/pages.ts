import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { CheckoutCompletePage } from "../pages/CheckoutCompletePage";
import { CheckoutOverviewPage } from "../pages/CheckoutOverviewPage";
import { loginAsStandardUser } from "../utils/auth";

type PageFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    loggedInInventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    checkoutOverviewPage: CheckoutOverviewPage;
    checkoutCompletePage: CheckoutCompletePage;
};

export const test = base.extend<PageFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },

    loggedInInventoryPage: async ({ page }, use) => {
        const { inventoryPage } = await loginAsStandardUser(page);
        await use(inventoryPage);
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },

    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },

    checkoutOverviewPage: async ({ page }, use) => {
        await use(new CheckoutOverviewPage(page));
    },

    checkoutCompletePage: async ({ page }, use) => {
        await use(new CheckoutCompletePage(page));
    },
});

export { expect } from "@playwright/test";
