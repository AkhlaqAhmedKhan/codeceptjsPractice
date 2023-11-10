const { I } = inject();
const login_po = require("../../page_object/login_po.js");
const {loginDetails} = require("/Users/akahmed/Documents/codecept-training/fixture/login_fixture.js");


module.exports = {
        async loginAsStandardUser(email =loginDetails.username , password =loginDetails.password){
            //I.fillField(login_po.userName, email);
            I.fillField(login_po.userName, email);
            I.fillField(login_po.inputPassword, password);

            //I.fillField(login_po.inputPassword, password);
            I.click(login_po.btnLogin);
            const result = await tryTo(()=>
            I.waitToHide(login_po.btnLogin,120)
            );
        }
};
