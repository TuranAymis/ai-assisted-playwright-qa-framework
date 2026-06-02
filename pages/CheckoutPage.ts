import { expect, type Locator, type Page } from "@playwright/test";

export class CheckoutPage {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly cancelButton: Locator;
    readonly errorMessage: Locator;
    readonly checkoutInfoContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator("[data-test='firstName']");
        this.lastNameInput = page.locator("[data-test='lastName']");
        this.postalCodeInput = page.locator("[data-test='postalCode']");
        this.continueButton = page.locator("[data-test='continue']");
        this.cancelButton = page.locator("[data-test='cancel']");
        this.errorMessage = page.locator("[data-test='error']");
        this.checkoutInfoContainer = page.locator("[data-test='checkout-info-container']");
    }

    async expectCheckoutInfoPageVisible() {
        await expect(this.page).toHaveURL(/.*checkout-step-one.html/);
        await expect(this.checkoutInfoContainer).toBeVisible();
        await expect(this.firstNameInput).toBeVisible();
        await expect(this.lastNameInput).toBeVisible();
        await expect(this.postalCodeInput).toBeVisible();
        await expect(this.continueButton).toBeVisible();
        await expect(this.cancelButton).toBeVisible();
    }

    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continueCheckout() {
        await this.continueButton.click();
    }
}