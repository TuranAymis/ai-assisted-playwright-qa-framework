import {expect, type Locator, type Page} from "@playwright/test"

export class InventoryPage {
            readonly page: Page;
        readonly inventoryContainer: Locator;
        readonly shoppingCartLink: Locator;
        readonly menuButton: Locator;
        readonly logoutLink: Locator;
        readonly pageTitle: Locator;
        readonly inventoryItems: Locator;
        readonly inventoryItemNames: Locator;

        constructor(page : Page) {
            this.page = page;
            this.inventoryContainer = page.locator("[data-test='inventory-container']");
            this.shoppingCartLink = page.locator("[data-test='shopping-cart-link']");
            this.menuButton = page.locator("#react-burger-menu-btn");
            this.logoutLink = page.locator("[data-test='logout-sidebar-link']");
            this.pageTitle = page.locator("[data-test='title']");
            this.inventoryItems = page.locator("[data-test='inventory-item']");
            this.inventoryItemNames = page.locator("[data-test='inventory-item-name']");
    }

    async expectInventoryPageVisible() {
        await expect(this.page).toHaveURL(/.*inventory.html/);
        await expect(this.inventoryContainer).toBeVisible();
        await expect(this.shoppingCartLink).toBeVisible();
        await expect(this.pageTitle).toHaveText("Products");
    }
    async expectInventoryItemCount(expectedCount : number) {
        await expect(this.inventoryItems).toHaveCount(expectedCount);
    }

    async expectInventoryItemNames(expectedNames : string[]) {
        await expect(this.inventoryItemNames).toHaveText(expectedNames);
    }

    async logout() {

        await this.menuButton.click();
        await this.logoutLink.click();
    }
}