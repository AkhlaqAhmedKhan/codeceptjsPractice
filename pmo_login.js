Feature("demo");
 
Scenario("Testing PMO ", ({ I }) => {
  I.amOnPage("http://10.4.100.183:3000/auth/login?redirect=/");
  I.waitForElement('div [class="ant-row ant-row-center"] div[class="ant-row ant-row-center"]')
  I.see("Company Name");
 
  I.fillField("input[data-i='company-name']", "Hammad and Co");
  I.fillField("input[data-i='email']", "hammad@yopmail.com");
  I.fillField("input[data-i='password']", secret("Mobile@1"));
 
  I.click("button[data-i='signIn-button']");
  I.waitForElement("h2[data-i='cadence-title']", 60);
});


