import { test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { InventoryPage } from "../../pages/InventoryPage";
import { CartPage } from "../../pages/CartPage";
import { CheckoutPage } from "../../pages/CheckoutPage";
import { CheckoutOverviewPage } from "../../pages/CheckoutOverviewPage";
import { CheckoutCompletePage } from "../../pages/CheckoutCompletePage";
import { users } from "../../test-data/users";
import { checkoutUser } from "../../test-data/checkoutUsers";

test.describe("Checkout Flow", () => {
    test("should complete checkout successfully", async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);
        const checkoutOverviewPage = new CheckoutOverviewPage(page);
        const checkoutCompletePage = new CheckoutCompletePage(page);

        // Login
        await loginPage.goto();
        await loginPage.login(users.standard.username, users.standard.password);
        await inventoryPage.expectInventoryPageVisible();

        // Add item to cart and go to cart page
        await inventoryPage.addFirstItemToCart();
        await inventoryPage.expectCartBadgeCount("1");
        await inventoryPage.goToCart();
        await cartPage.expectCartPageVisible();
        await cartPage.expectCartItemCount(1);

        // Proceed to checkout and fill information
        await cartPage.proceedToCheckout();
        await checkoutPage.expectCheckoutInfoPageVisible();
        await checkoutPage.fillCheckoutInformation(
            checkoutUser.firstName,
            checkoutUser.lastName,
            checkoutUser.postalCode,
        );
        await checkoutPage.continueCheckout();

        // Verify overview page and finish order
        await checkoutOverviewPage.expectOverviewPageVisible();
        await checkoutOverviewPage.expectOverviewItemCount(1);
        await checkoutOverviewPage.finishOrder();

        // Verify order completion
        await checkoutCompletePage.expectOrderCompletePageVisible();
    });
});