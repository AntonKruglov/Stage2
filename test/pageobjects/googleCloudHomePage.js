const { Builder, By, Key, until } = require('selenium-webdriver');
const BasePage = require('./basePage');
const webdriver = require('selenium-webdriver');


class GoogleCloudHomePage extends BasePage {

    constructor() {
        super();
        this.activeSearchBtn = ('//input[@placeholder="Search"]');
        this.activeSearchBox = ('//*[@placeholder="Search"]');
        this.baseUrl = 'https://cloud.google.com/'

    }

    open() {
        return super.open(this.baseUrl);
    }


    async search(btn, field, text) {
        await driver.wait(until.elementLocated(By.xpath(btn), 5000))
        await driver.wait(until.elementLocated(By.xpath(field), 5000))
            .sendKeys(text, Key.ENTER);

    }

};


module.exports = new GoogleCloudHomePage;