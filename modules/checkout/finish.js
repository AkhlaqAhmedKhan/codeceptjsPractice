const { I } = inject();
const common_po = require("../../page_object/common.js");
const finish_po = require("../../page_object/finish_po.js")

module.exports = {
        async finishBtn(){
            console.log("test");
            I.click(finish_po.finish);
        }
};