const{test,expect} = require('@playwright/test')

test('Hidden options dropdown', async ({page}) =>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");

    await page.locator("[name='username']").fill('Admin');
    await page.locator("[name='password']").fill('admin123');
    await page.locator("[type='submit']").click();

    await page.locator("//a[@class='oxd-main-menu-item active']").click();

    // Click on Dropdown
    await page.locator("//div[@class='oxd-grid-4 orangehrm-full-width-grid']/div[6]//i[@class='oxd-icon bi-caret-down-fill oxd-select-text--arrow']").click();

    // Waiting for options
    await page.waitForTimeout(3000);

    const options = await page.$$("//div[@role='listbox']//span")

    for(let option of options)
    {

        const JobTitle = await option.textContent();
        //console.log(JobTitle);

        if(JobTitle.includes('QA Engineer'))
        {

            await option.click();
            break;
        }

    }

    await page.waitForTimeout(2000);



})