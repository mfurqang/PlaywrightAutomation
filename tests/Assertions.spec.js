const { test,expect } = require('@playwright/test')


test('AssertionsTest', async({page}) => {

    //open app url
    await page.goto("https://login.yahoo.com/account/create?.lang=en-US")

    // expect(page).toHaveURL    page has a URL
    await expect(page).toHaveURL("https://login.yahoo.com/account/create?.lang=en-US")

    //await page.waitForTimeout(13000);
    await expect(page).toHaveTitle("Yahoo")

    //expect(locator).toBeVisible()  Element is visible
   const logoElement = await page.locator(".mbr-desktop-hd")
   await expect(logoElement).toBeVisible()

   const dropdown = await page.locator("#usernamereg-month")
   await expect(dropdown).toBeEnabled()

   // expect(locator).toHaveAttribute() Element has attribute

   const textfield = await page.locator("#usernamereg-firstName")
   await expect(textfield).toHaveAttribute('type','text') 

    // expect(locator).toHaveText()  Element matches text

   await expect(await page.locator(".challenge-heading")).toHaveText('Create a Yahoo account')  // full text
   

  // expect(locator).toContainText()  Element contains text

  await expect(await page.locator(".challenge-heading")).toContainText('Create a Yahoo') // can verify partial text value

  // expect(locator).toHaveValue(value) Input has a value

  const emailInput = await page.locator("#usernamereg-userId")
  await emailInput.fill("furqan99474")
  await expect(emailInput).toHaveValue("furqan99474")

  // expect(locator).toHaveCount()  List of elements has given length

  const options = await page.locator("select[name='mm'] option")
  await expect(options).toHaveCount(13)







   





})

