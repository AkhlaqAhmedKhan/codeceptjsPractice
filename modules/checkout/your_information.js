const { I } = inject();
const common_po = require("../../page_object/common.js");
const your_information = require("../../page_object/your_info.js");
const {yourInfo} = require("/Users/akahmed/Documents/codecept-training/fixture/your_information.js")


module.exports = {
        async yourInformation(nameFirst=yourInfo.firstName, nameLast= yourInfo.lastName, postCode = yourInfo.postalCode){
            console.log("test");
            I.fillField(your_information.firstName,nameFirst);
            I.fillField(your_information.lastName,nameLast);
            I.fillField(your_information.zipCode,postCode);
            I.click(your_information.continueBtn);
            
        }
};