const{test,expect} = require('@playwright/test')

test('Handle Checkboxes',async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Single checkbox

    await page.locator("//input[@type='checkbox' and @id='sunday']").check();

    expect(await page.locator("//input[@type='checkbox' and @id='sunday']")).toBeChecked();

    expect(await page.locator("//input[@type='checkbox' and @id='sunday']").isChecked()).toBeTruthy();
    expect(await page.locator("//input[@type='checkbox' and @id='monday']").isChecked()).toBeFalsy();

    //Multiple checkboxes

    const checkboxLocators = [

                        "//input[@type='checkbox' and @id='sunday']",
                        "//input[@type='checkbox' and @id='monday']",
                        "//input[@type='checkbox' and @id='saturday']"
                         ];

    for(const locator of checkboxLocators)  // select multiple checkboxes
    
    {
        await page.locator(locator).check();

    }

    await page.waitForTimeout(5000);

    for(const locator of checkboxLocators)  // Unselect multiple checkboxes which are already selected
     if(await page.locator(locator).isChecked())
    {
        await page.locator(locator).uncheck();

    }

    await page.waitForTimeout(5000);


})