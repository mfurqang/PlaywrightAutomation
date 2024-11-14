const { test,expect } = require('@playwright/test')
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';


test('Test', async({page}) => {

// Login

const  login = new LoginPage(page);
await login.gotoLoginPage();
await login.login('pavanol','test@123');
await page.waitForTimeout(3000);



// Home

const home = new HomePage(page)
await home.addProductToCart("Nexus 6")
await page.waitForTimeout(3000)
await home.gotoCart();


// Cart

 const cart = new CartPage(page)
 await page.waitForTimeout(3000)
 const status = await cart.checkProductInCart('Nexus 6')
 expect(await status).toBe(true);

})