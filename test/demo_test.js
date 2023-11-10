Feature('demo');

Scenario('test something', async ({ I, Login }) => {
    I.amOnPage('https://www.saucedemo.com/v1/index.html');
    await Login.loginAsStandardUser();
    //pause();
});
