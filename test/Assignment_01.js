Feature("assignment");
 
Scenario("Testing PMO ", async({ I }) => {
I.amOnPage("https://www.saucedemo.com/");
I.fillField('input[data-test="username"]',"standard_user");
I.fillField('[data-test="password"]',"secret_sauce");

I.click('input[data-test="login-button"]');
I.click ('button[data-test="add-to-cart-sauce-labs-backpack"]');
I.click('button[data-test="add-to-cart-sauce-labs-bike-light"]');
I.click('button[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');

const actualValue = await I.grabTextFromAll('div[class="inventory_item_price"]')
console.log(actualValue);
I.click ('a[class="shopping_cart_link"]');
I.click('button[data-test="checkout"]');
I.fillField('input[data-test="firstName"]',"Akhlaq");
I.fillField('input[data-test="lastName"]',"Khan");
I.fillField('input[data-test="postalCode"]',"123456");
I.click('input[data-test="continue"]');

const expectedValue = await I.grabTextFrom('div[class="summary_info_label summary_total_label"]');
//console.log(expectedValue);

var tval = expectedValue.replace('Total: $', '');
//console.log(tval);

//
tval = parseFloat(tval);
console.log("without $ value :" + tval);
// arr1[i] =  arr[i].replace('$','');
//     arr1[i] = parseFloat(arr1[i]);

const taxValue = await I.grabTextFrom('div[class="summary_tax_label"]');
console.log(taxValue);

//assert.notEqual(actualValue,expectedValue);

let arr = actualValue.splice(0,3);

console.log(arr);
var arr1= [];
//console.log("actual value"+actualValue);
 let sum = 0;
for(let i=0; i<arr.length; i++)
{
    arr1[i] =  arr[i].replace('$','');
    arr1[i] = parseFloat(arr1[i]);
    //var sum = 0;
    sum=sum+arr1[i];
}
console.log("With out $ value " + arr1);
console.log("Sum without tax value: " + sum);
var [_, taxVal] = taxValue.split('$')
sum = sum + +taxVal;
console.log("With tax vakue: " +sum);
const assert = require('assert');
assert.equal(tval,sum);

I.click('button[data-test="finish"]');
I.click('button[data-test="back-to-products"]');
I.click('button[id="react-burger-menu-btn"]');
I.click('a[id="logout_sidebar_link"]');
});

//testomat.io api use for reporting//

