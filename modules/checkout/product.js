const { I } = inject();
const product_po = require("../../page_object/product_po.js");
const common_po = require("../../page_object/common.js");
//const login_po = require("../../page_object/product_po.js");
//const {loginDetails} = require("/Users/akahmed/Documents/codecept-training/fixture/login_fixture.js");


module.exports = {
        async productSelector() {
            console.log("test-data");
            I.click(product_po.item1);
            I.click(product_po.item2);
            I.click(product_po.item3);
            I.click(common_po.shoppingCart);
           // I.waitToHide(common_po.shoppingCart,120);
        }
};
