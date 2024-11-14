const {test , expect} = require("@playwright/test")

test("Date Picker", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    //await page.fill("//input[@id='datepicker']", '10/09/2024')

    const year= "2023"
    const month = "February"
    const date = "28"

    await page.click("//input[@id='datepicker']")  // open calendar

    while(true)
    {
        const currentYear = await page.locator("//span[@class='ui-datepicker-year']").textContent()
        const currentMonth = await page.locator("//span[@class='ui-datepicker-month']").textContent() 

        if(currentYear == year && currentMonth == month)
        {


            break;
        }

        //await page.locator("[title='Next']").click()  // This will click on Calendar Next button

        await page.locator("[title='Prev']").click()  // This will click on Calendar Previous button
    }

        const dates = await page.$$("//a[@class='ui-state-default']")

        // date selection using loop
       /* for(const dt of dates)
        {

            if(await dt.textContent()==date)
            {

                await dt.click();
                break;
            }
        }*/

        //date selection --without loop

        await page.click(`//a[@class='ui-state-default'][text()='${date}']`)

    await page.waitForTimeout(5000);
})