import { expect, type Locator, type Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly cartContainer: Locator;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;
  readonly removeButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartContainer = page.locator("[data-test='cart-list']");
    this.cartItems = page.locator("[data-test='inventory-item']");
    this.checkoutButton = page.locator("[data-test='checkout']");
    this.continueShoppingButton = page.locator("[data-test='continue-shopping']");
    this.removeButtons = page.locator("button[data-test^='remove-']");
  }

  async expectCartPageVisible() {
    await expect(this.page).toHaveURL(/.*cart.html/);
    await expect(this.cartContainer).toBeVisible();
    await expect(this.continueShoppingButton).toBeVisible();
  }

  async expectCartItemCount(expectedCount: number) {
    await expect(this.cartItems).toHaveCount(expectedCount);
  }

  async removeFirstItem() {
    await this.removeButtons.first().click();
  }

  async expectCartEmpty() {
    await expect(this.cartItems).toHaveCount(0);
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
