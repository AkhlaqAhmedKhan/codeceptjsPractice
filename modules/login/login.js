const { I } = inject();
const login_po = require("../../page_object/login_po.js");

module.exports = {
        async login(email, password =null){
            I.fillField(login_po.userName, email);
            I.fillField(login_po.inputPassword, password);
            I.click(login_po.btnLogin);
            const result = await tryTo(()=>
            I.waitToHide(login_po.btnLogin,120)
            );
        }
};
