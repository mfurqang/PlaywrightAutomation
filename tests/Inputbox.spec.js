const {test,expect} = require("@playwright/test")

test('Inputbox', async ({page})=> {

    await page.goto("https://artoftesting.com/samplesiteforselenium");

    //InputBox - TextBox
   await expect(await page.locator("//input[@id='fname']")).toBeVisible();
   await expect(await page.locator("//input[@id='fname']")).toBeEmpty();
   await expect(await page.locator("//input[@id='fname']")).toBeEnabled();
   await expect(await page.locator("//input[@id='fname']")).toBeEditable();


   await page.fill("//input[@id='fname']","Furqan");

   await page.waitForTimeout(5000); //pausing code

})