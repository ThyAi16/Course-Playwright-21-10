import { test, expect } from "@playwright/test";
import { describe } from "node:test";

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

    test('Verify home link is enabled using text and css selector', async ({page}) =>
    {
        //Open url
        await page.goto('https://practice.sdetunicorns.com/');
        //find the home text
        //const homeText = await page.locator('#primary-menu >> text=Home'); // #: id
        const homeText = await page.locator('#primary-menu:has-text("Home")');
        //verify home text is anabled
        await expect(homeText).toBeEnabled();
    })

    test('Verify search icon is visible using  xpath selector', async ({page}) => 
    {
        //Got to url
        await page.goto('https://practice.sdetunicorns.com/');
        //Find search icon
        const searchIcon = await page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']");
        //await searchIcon.click();
        //Verify search icon is visible
        await expect(searchIcon).toBeVisible();

    } )

    test('Verify text of all navigation links', async ({page}) =>
    {
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];
        //Open url
        await page.goto('https://practice.sdetunicorns.com/');
        //Find the nav links
        const navLinks = page.locator('#primary-menu li[li*=menu]');
        //Verify nav links text
        expect(await navLinks.allTextContents()).toEqual(expectedLinks[3])
    }
    )

})
