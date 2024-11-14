const{test,expect} = require("@playwright/test")

test("Keyboard Action",async({page}) => {

// Increase timeout to 60 seconds
page.setDefaultTimeout(60000);

await page.goto("https://gotranscript.com/text-compare")

//await page.locator("//textarea[@name='text1']").fill("Welcome to Automation");

await page.type("//textarea[@name='text1']","Welcome to Automation")
//await page.type("//textarea[@id='inputText1']", "Welcome to Automation")


// Ctrl + A
await page.keyboard.press("Control+A")



// Ctrl + C
await page.keyboard.press("Control+C")


// Tab
await page.keyboard.down("Tab")
await page.keyboard.up("Tab")


// Ctrl + V

await page.keyboard.press("Control+V")



await page.waitForTimeout(5000)


})