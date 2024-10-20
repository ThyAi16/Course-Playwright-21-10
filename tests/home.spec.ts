import { test, expect } from "@playwright/test";

//pw-describe: goi y viet suon test
test.describe('Home', () => {
    test('Open HomePage and verify title', async ({ page }) => 
    {
        //Open url
        await page.goto('https://practice.sdetunicorns.com/');

        //Verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    })

    test('Open About Page and verify title', async({page}) =>
    {
        await page.goto("https://practice.sdetunicorns.com/about/");
        await expect(page).toHaveTitle('About – Practice E-Commerce Site');
    })

    test('Click Get Started button using CSS Seletor', async({page}) =>
    {
        //Open url
        await page.goto('https://practice.sdetunicorns.com/');
        //Click the button Get Started
        await page.locator('#get-started').click();
        //Verify url has #get-started
        //await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');
        await expect(page).toHaveURL(/.*#get-started/)
    })

    test('Verfy heading test', async({page}) => 
    {
        //Open url
        await page.goto('https://practice.sdetunicorns.com/');
        //Find the text locator
        const headingText = await page.locator('text=Think different. Make different.');
        //Verify heading text visible
        await expect(headingText).toBeVisible();
    })

})
