const { Builder, By, Key, until } = require('selenium-webdriver');
const BasePage = require('./basePage');
const webdriver = require('selenium-webdriver');


class GoogleSearchResultsPage extends BasePage {

    constructor() {
        super();

        this.cloudPlatformCalcSearchResult = ('//*[text()= "Google Cloud Platform Pricing Calculator"]');
    }

    async swichToSearchResultsPage(searchResult) {
        await driver.wait(until.elementLocated(By.xpath(searchResult), 5000))
            .click();

    }

};


module.exports = new GoogleSearchResultsPage;