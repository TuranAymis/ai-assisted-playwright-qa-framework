import { expect, type Locator, type Page } from "@playwright/test";

export class CheckoutCompletePage {
    readonly page: Page;
    readonly completeHeader: Locator;
    readonly completeText: Locator;
    readonly backHomeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.completeHeader = page.locator("[data-test='complete-header']");
        this.completeText = page.locator("[data-test='complete-text']");
        this.backHomeButton = page.locator("[data-test='back-to-products']");
    }

    async expectOrderCompletePageVisible() {
        await expect(this.page).toHaveURL(/.*checkout-complete.html/);
        await expect(this.completeHeader).toHaveText("Thank you for your order!");
        await expect(this.completeText).toBeVisible();
        await expect(this.backHomeButton).toBeVisible();
    }
}