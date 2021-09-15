const { Builder, By, Key, until } = require('selenium-webdriver');
const BasePage = require('./basePage');
const webdriver = require('selenium-webdriver');
const { expect } = require('chai');
const googleCloudPricingCalcPage = require('./googleCloudPricingCalcPage');


class GoogleCloudCalculationResultsPage extends BasePage {

    constructor() {
        super();

        this.vmClassField = ('md-list-item.md-1-line:nth-child(8)');
        this.instanceTypeField = ('#compute md-list md-list-item:nth-child(10)');
        this.regionField = ('#compute md-list md-list-item:nth-child(2)');
        this.localSsdField = ('md-list-item:nth-child(14) div.md-list-item-text.ng-binding.cpc-cart-multiline');
        this.commitmentTermField = ('#compute md-list md-list-item.md-1-line.md-no-proxy.ng-scope');
        this.estimatedCostField = ('h2.md-title:nth-child(2) b:nth-child(1)');
        this.emailEstimateBtn = ('#email_quote');
        this.emailField = ('//*[@ng-model="emailQuote.user.email"]');
        this.sendEmailBtn = ('[aria-label="Send Email"]');
        this.randomEmailBtn = ('a.hlink:nth-child(4)');
        this.copyBtn = ('#cprnd i');
        this.yopmailCheckInboxBtn = ('button.md:nth-child(3) i:nth-child(1)');
        this.refreshBtn = ('#refresh');
        this.estimatedCostFromGoogle = ('#mail td:nth-child(2) h3');
        this.getTextBtn = ('//*[text()="Text"]');
    }

    async fillInEmailField(email) {
        await driver.wait(until.elementLocated(By.xpath(email)), 5000)
            .sendKeys(['Control', 'v'])
    }

    async getCostFromEmail(letter) {
        driver.switchTo().frame(2);
        await driver.wait(until.elementLocated(By.css(letter)), 5000);
    }

    async swichToAnotherWindow(win) {
        await driver.switchTo().window(win);
    }

    async checkVmClass(field, text) {
        await driver.wait(until.elementLocated(By.css(field), 5000));
        const resultText = await driver.findElement(By.css(field)).getText();
        await expect(resultText).to.include(text);
    }

    async checkTheInstanceType(field, text) {
        await driver.wait(until.elementLocated(By.css(field), 5000));
        const resultText = await driver.findElement(By.css(field)).getText();
        await expect(resultText).to.include(text);
    }

    async checkLocation(field, text) {
        await driver.wait(until.elementLocated(By.css(field), 5000));
        const resultText = await driver.findElement(By.css(field)).getText();
        await expect(resultText).to.include(text);
    }

    async checkLocalSsd(field, text) {
        await driver.wait(until.elementLocated(By.css(field), 5000));
        const resultText = await driver.findElement(By.css(field)).getText();
        await expect(resultText).to.include(text);
    }

    async checkCommintmentTerm(field, text) {
        await driver.wait(until.elementLocated(By.css(field), 5000));
        const resultText = await driver.findElement(By.css(field)).getText();
        await expect(resultText).to.include(text);
    }

    async checkEstimatedCost(field, text) {
        await driver.wait(until.elementLocated(By.css(field), 5000));
        const resultText = await driver.findElement(By.css(field)).getText();
        await expect(resultText).to.include(text);
    }


};

module.exports = new GoogleCloudCalculationResultsPage;