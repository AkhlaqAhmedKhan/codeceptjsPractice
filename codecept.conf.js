const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);
 
// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();
 
/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./test/*_test.js",
  output: "./output",
  helpers: {
    Puppeteer: {
      url: "http://github.com",
      show: true,
      windowSize: "1366x768",
      waitForNavigation: ["domcontentloaded", "networkidle0"],
      waitForAction: 500,
    }
  },
  plugins: {
    pauseOnFail: {},
    screenshotOnFail: {
      enabled: false,
    },

    testomatio: {
      enabled: true,
      require: '@testomatio/reporter/lib/adapter/codecept',
      apiKey: process.env.TESTOMATIO,
    },
  },
    
  include: {
    I: "./steps_file.js",
    Login : "./modules/login/login.js",
  },
  name: "codeceptTraining",
};