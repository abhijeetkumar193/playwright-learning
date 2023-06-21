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





test('Seventh testcase handling web table : ', async({page}) =>
{
    const header = await page.locator("[style*='position: sticky; top: 0;']").all()
    const rows = await page.locator("//*[@class='tableFixHead']//tr").all();
    for(let j=1;j<rows.length;j++)
    {
        for(let i=1;i<=header.length;i++)
        {
             console.log("HEader is as :: "+ await page.locator("//*[@class='tableFixHead']//tr["+j+"]//td["+i+"]").textContent())
        }
    }   
})

test('Eighth testcase handling web table : ', async({page}) =>
{

   // await page.pause();
    const frameslocator = page.frameLocator("#courses-iframe")
    await frameslocator.locator("(//*[text()='Home'])[2]").click();
    await frameslocator.click("text=About us");
    console.log("About us is : "+await frameslocator.locator("#about-us-container").isVisible());


})



});