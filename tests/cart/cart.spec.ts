import { test } from "../../fixtures/pages";


test.describe("SauceDemo Cart Functionality", () => {
    test("should add first item to cart", async ({ cartWithFirstItemPage }) => {
        await cartWithFirstItemPage.expectCartPageVisible();
        await cartWithFirstItemPage.expectCartItemCount(1);
    });

    test("should remove item from cart", async ({ cartWithFirstItemPage }) => {
        await cartWithFirstItemPage.removeFirstItem();
        await cartWithFirstItemPage.expectCartEmpty();
    });
});
