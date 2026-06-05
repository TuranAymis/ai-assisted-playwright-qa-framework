import { test } from "@playwright/test";
import { CheckoutOverviewPage } from "../../pages/CheckoutOverviewPage";
import { CheckoutCompletePage } from "../../pages/CheckoutCompletePage";
import { checkoutUser } from "../../test-data/checkoutUsers";
import { startCheckoutWithFirstItem } from "../../utils/checkout";

test.describe("Checkout Flow", () => {
    test("should complete checkout successfully", async ({ page }) => {
        const { checkoutPage } = await startCheckoutWithFirstItem(page);
        const checkoutOverviewPage = new CheckoutOverviewPage(page);
        const checkoutCompletePage = new CheckoutCompletePage(page);

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

    test("should show error when checkout form is empty", async ({ page }) => {
        const { checkoutPage } = await startCheckoutWithFirstItem(page);

        // Try to continue without filling the form and verify error message
        await checkoutPage.continueCheckout();
        await checkoutPage.expectErrorMessage("Error: First Name is required");
    });

    test("should show error when last name is missing", async ({ page }) => {
        const { checkoutPage } = await startCheckoutWithFirstItem(page);

        // Fill only first name and postal code, then try to continue
        await checkoutPage.fillCheckoutInformation(
            checkoutUser.firstName,
            "",
            checkoutUser.postalCode,
        );
        await checkoutPage.continueCheckout();
        await checkoutPage.expectErrorMessage("Error: Last Name is required");
    });

    test("should show error when postal code is missing", async ({ page }) => {
        const { checkoutPage } = await startCheckoutWithFirstItem(page);

        // Fill only first name and last name, then try to continue
        await checkoutPage.fillCheckoutInformation(
            checkoutUser.firstName,
            checkoutUser.lastName,
            "",
        );
        await checkoutPage.continueCheckout();
        await checkoutPage.expectErrorMessage("Error: Postal Code is required");
    });
});