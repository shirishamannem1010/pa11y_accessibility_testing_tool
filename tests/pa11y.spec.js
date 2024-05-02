// @ts-check
const { test, expect } = require('@playwright/test');

import { LoginPage } from '../pages/loginpage.js';
import { ProductsPage } from '../pages/productpage.js';
import { reportgeneration } from '../pages/utility/utils.js';

const fs = require('fs');
const { exec } = require('child_process');
const pa11y= require('pa11y')
const pa11yHtmlReporter = require('pa11y-reporter-html');


test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});


 
test.describe('homepage', () => {
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    const url = 'https://amazon.com/';
    // Run Pa11y accessibility test
    const results = await pa11y(url);
    // console.log(results)
    const htmlReport =await pa11yHtmlReporter.results(results);
    // console.log(htmlReport)
    fs.writeFileSync('pa11y-report.html', htmlReport);
  }),


  test('script for sign in', async({page})=>{
    const loginPage = new LoginPage(page);
    const customTitle = "My Custom Report Title";
    await loginPage.navigateToSignIn();
    await reportgeneration(page.url(),"WCAG2AAA","amazonSiginPage","sign in page");
    await loginPage.signIn();

    console.log("================== Login Successful=============")
    await reportgeneration(page.url(),"WCAG2AAA","amazonHomePage","Amazon homePage");
  })

  test('search oppo mobiles', async({page})=>{
    const productpage=new ProductsPage(page);

    await page.goto("https://www.amazon.com/");
    productpage.searchProducts();
    await reportgeneration(page.url(),"WCAG2AAA","oppomobilesSearching","Amazon product search");
    
    productpage.cartItems();
    await reportgeneration(page.url(),"WCAG2AAA","cartItemsList","Amazon Cart Items");
    productpage.buyproduct();
  })
});


