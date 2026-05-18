import {test} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';
import {InventoryPage} from '../../pages/InventoryPage';
import {users} from '../../test-data/users';

test.describe('SauceDemo Login', () => {
    test('should login successfully with valid credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(users.standard.username, users.standard.password);
        await inventoryPage.expectInventoryPageVisible();
    });

    test('should show error message with invalid credentials', async ({page}) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(users.invalid.username, users.invalid.password);
        await loginPage.expectErrorMessageVisible();
    });

    test('should logout successfully after login', async ({page}) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login(users.standard.username, users.standard.password);
        await inventoryPage.expectInventoryPageVisible();

        await inventoryPage.logout();

        await loginPage.expectLoginPageVisible();
    });
});