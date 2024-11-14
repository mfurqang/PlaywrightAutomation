const {test,expect} = require("@playwright/test")

test('Inputbox', async ({page})=> {

    await page.goto("https://artoftesting.com/samplesiteforselenium");

   await page.locator("//input[@id='male']").check(); //male radio button
   await expect(await page.locator("//input[@id='male']")).toBeChecked();
   await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy();

   await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy(); //Female radio button


   await page.waitForTimeout(5000); //pausing code

})