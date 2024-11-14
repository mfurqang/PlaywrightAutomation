const{test, expect} = require('@playwright/test')

test('Upload Single File', async({page}) => {

    await page.goto("https://qa-automation-practice.netlify.app/file-upload.html")

    await page.waitForSelector("//input[@id='file_upload']")


    await page.locator("//input[@id='file_upload']").click()

    await page.locator("//input[@id='file_upload']").setInputFiles("C:\CVs\CV_QA_Director_1712685658")

    await page.waitForTimeout(5000);



})


test.only('Upload Multiple Files', async({page}) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    await page.locator("//input[@id='filesToUpload']")
              .setInputFiles(["tests\UploadFiles\CV_QA_Director_1712685658.pdf",
                            "tests\UploadFiles\Furqan_motivation_letter.docx"])

    await page.waitForTimeout(2000);

    

    
    expect(await page.locator("#fileList li:nth-child(1)")).toHaveText("testsUploadFilesCV_QA_Director_1712685658.pdf")
    expect(await page.locator("#fileList li:nth-child(2)")).toHaveText("testsUploadFilesFurqan_motivation_letter.docx")

    await page.waitForTimeout(3000);

    //Removing Files

    await page.locator("//input[@id='filesToUpload']").setInputFiles([])  // passing empty array to remove the files

    await page.waitForTimeout(3000);

    expect(await page.locator("#fileList li:nth-child(1)")).toHaveText("No Files Selected")
    await page.waitForTimeout(3000);

    



})