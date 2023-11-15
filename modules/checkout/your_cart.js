const { I } = inject();
const common_po = require("../../page_object/common.js");
const your_cart = require("../../page_object/your_cart.js");
module.exports = {
        async yourCart(){
            I.click(your_cart.checkOut);
        }
};