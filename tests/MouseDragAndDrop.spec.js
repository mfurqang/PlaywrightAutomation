const{test, expect} = require("@playwright/test")

test("Mouse Drag and Drop" ,async({page}) => {

    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

    const madrid = await page.locator("#box7")  //source element is box7 named as Madrid
    const italy =  await page.locator("#box106")  // target element is box106 named as Italy

    // Approach1

    /*await madrid.hover()
    await page.mouse.down()

    await italy.hover()
    await page.mouse.up()*/

    // Approach2

    await madrid.dragTo(italy)

    // Washinton to USA

    const washington = await page.locator("#box3")
    const usa        = await page.locator("#box103")

    await washington.dragTo(usa)


    await page.waitForTimeout(5000)




})