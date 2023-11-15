Feature('demo');

Scenario('test something', async ({ I, Login, Product, Cart,Information, Finish}) => {
    I.amOnPage('https://www.saucedemo.com');
    await Login.loginAsStandardUser();
    await Product.productSelector();
    await Cart.yourCart();
    await Information.yourInformation();
    await Finish.finishBtn();
    //pause();
});
