import { expect, type Locator, type Page } from "@playwright/test";

export class InventoryPage {
    readonly page: Page;
    readonly inventoryContainer: Locator;
    readonly shoppingCartLink: Locator;
    readonly menuButton: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryContainer = page.locator("[data-test='inventory-container']");
        this.shoppingCartLink = page.locator("[data-test='shopping-cart-link']");
        this.menuButton = page.locator("#react-burger-menu-btn");
        this.logoutLink = page.locator("[data-test='logout-sidebar-link']");
    }

    async expectInventoryPageVisible() {
        await expect(this.page).toHaveURL(/.*inventory.html/);
        await expect(this.inventoryContainer).toBeVisible();
        await expect(this.shoppingCartLink).toBeVisible();
    }

    async logout() {

        await this.menuButton.click();
        await this.logoutLink.click();
    }
}