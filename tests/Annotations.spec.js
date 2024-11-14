const{test,expect} = require("@playwright/test")

 //only
/*test('test1',async({page}) => {

    console.log("This is test1.....")

})*/

//skip
/*test.skip('test2',async({page}) => {

    console.log("This is test2.....")

})*/

/*test('test3',async({page,browserName}) => {

    console.log("This is test3.....")
    if(browserName =='chromium')
    {
        test.skip()
    }

})*/

//Fixme
/*test('test4', async({page}) => {
    test.fixme()
    console.log("this is test4....")

})*/

//Fail
/*test('test5', async({page}) => {
    test.fail() //expected
    console.log("this is test5....")
    expect(1).toBe(2) //actual  // if both exp and actual condition got failed then my test will be passed.
})*/


/*test('test6', async({page, browserName}) => {

    if(browserName==='firefox')
    {

    test.fail() //expected

    }  

})*/

//slow
test('test7', async({page}) => {
    
    //test.slow();
    test.setTimeout(5000);
    console.log("this is test7....")
    await page.goto("https://demoblaze.com/")

})