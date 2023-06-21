const {test, expect} = require('@playwright/test');

const sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};
 
test.describe('First testcases ', () =>
{

   // const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

    test.beforeEach(async ({page}) =>{
        console.log("Before each block");
       await  page.goto("AutomationPractice/");
       // await page.locator("//*[@data-action='sign in']").click();

})
test('First testcase radio button : ', async({page}) =>
{
    console.log("First testcase block starts");
    let radio = await page.locator(".radioButton");
    console.log("number of radio buttons are  : "+await radio.count());
    await page.locator(".radioButton").last().click();


})






});