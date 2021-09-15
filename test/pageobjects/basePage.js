const webdriver = require('selenium-webdriver');
const driver = new webdriver.Builder().forBrowser('chrome').build();


class BasePage {
    constructor() {
        global.driver = driver;
    }

    open(baseUrl) {
        driver.get(baseUrl);
    }
}


module.exports = BasePage;