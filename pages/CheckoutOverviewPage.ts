import { expect, type Locator, type Page } from "@playwright/test";

export class CheckoutOverviewPage {
    readonly page: Page;
    readonly cartItems: Locator;
    readonly paymentInfoLabel: Locator;
    readonly shippingInfoLabel: Locator;
    readonly priceTotalLabel: Locator;
    readonly finishButton: Locator;
    readonly cancelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartItems = page.locator("[data-test='inventory-item']");
        this.paymentInfoLabel = page.locator("[data-test='payment-info-label']");
        this.shippingInfoLabel = page.locator("[data-test='shipping-info-label']");
        this.priceTotalLabel = page.locator("[data-test='total-info-label']");
        this.finishButton = page.locator("[data-test='finish']");
        this.cancelButton = page.locator("[data-test='cancel']");
    }

    async expectOverviewPageVisible() {
        await expect(this.page).toHaveURL(/.*checkout-step-two.html/);
        await expect(this.cartItems).toBeVisible();
        await expect(this.paymentInfoLabel).toBeVisible();
        await expect(this.shippingInfoLabel).toBeVisible();
        await expect(this.priceTotalLabel).toBeVisible();
        await expect(this.finishButton).toBeVisible();
        await expect(this.cancelButton).toBeVisible();
    }

    async expectOverviewItemCount(expectedCount: number) {
        await expect(this.cartItems).toHaveCount(expectedCount);
    }

    async finishOrder() {
        await this.finishButton.click();
    }
}