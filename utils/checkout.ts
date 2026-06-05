import { type Page } from "@playwright/test";
import { loginAsStandardUser } from "./auth";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

export async function startCheckoutWithFirstItem(page: Page) {
    const { inventoryPage } = await loginAsStandardUser(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await inventoryPage.addFirstItemToCart();
    await inventoryPage.expectCartBadgeCount("1");
    await inventoryPage.goToCart();
    
    await cartPage.expectCartPageVisible();
    await cartPage.expectCartItemCount(1);
    await cartPage.proceedToCheckout();

    await checkoutPage.expectCheckoutInfoPageVisible();

    return { inventoryPage, cartPage, checkoutPage };
}