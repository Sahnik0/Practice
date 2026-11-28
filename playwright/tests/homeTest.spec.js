const {test,expect} = require('@playwright/test')

test('home page',async({page})=>{
    await page.goto('https://www.youtube.com/')
    const title = page.title();

    await expect(page).toHaveTitle('YouTube')
    await page.close();
})