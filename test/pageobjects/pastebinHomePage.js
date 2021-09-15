const BasePage = require('./basePage');
const { Builder, By, Key, until } = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const { expect } = require('chai');



class PastebinHomePage extends BasePage {

    constructor() {
        super();
        this.pasteTextField = ('#postform-text');
        this.pasteExpirationList = ('#select2-postform-expiration-container');
        this.pasteExpiration10Minutes = ('//li[text()="10 Minutes"]');
        this.pasteNameOrTitleInput = ('#postform-name')
        this.createNewPasteBtn = ('//button[text()="Create New Paste"]');
        this.successfulPostingMessage = ('//div[text()=" Your guest paste has been posted. If you "]');
        this.postedPasteField = ('.textarea');
        this.syntaxHighlightingList = ('#select2-postform-format-container');
        this.syntaxHighlightingBash = ('//li[text()="Bash"]');
        this.syntaxSwitcher = ('//label[@for="paste-raw-on"]');
        this.resultingHighlightingField = ('//a[text()="Bash"]');

        this.baseUrl = 'https://pastebin.com'

    }


    open() {
        return super.open(this.baseUrl);
    }

    async fillInTextField(fieldToFillIn, textToAdd) {
        await driver.wait(until.elementLocated(By.css(fieldToFillIn), 5000))
            .sendKeys(textToAdd);
    }

    async chooseFromDropdownList(listToChoose, requiredValue) {
        await driver.wait(until.elementLocated(By.css(listToChoose), 5000))
            .click();
        await driver.wait(until.elementLocated(By.xpath(requiredValue), 5000))
            .click();
    }

    async clickTheButton(btn) {
        await driver.wait(until.elementLocated(By.xpath(btn), 5000))
            .click();

    }

    async SwitchBtn(btn) {
        await driver.wait(until.elementLocated(By.xpath(btn), 5000))
            .click();
    }

    // assertions
    async checkPostedText(field, text) {
        await driver.wait(until.elementLocated(By.css(field), 5000));
        const resultText = await driver.findElement(By.css(field)).getText();
        await expect(resultText).to.include(text);
    }

    async checkBrowserTitle(text) {
        let title = await driver.getTitle();
        await expect(title).to.include(text);
    }

    async checkPasteIsPosted(field, text) {
        await driver.wait(until.elementLocated(By.xpath(field), 5000));
        const resultText = await driver.findElement(By.xpath(field)).getText();
        await expect(resultText).to.include(text);
    }

    async checkIsBash(element, text) {
        await driver.wait(until.elementLocated(By.xpath(element), 5000));
        let checkedElement = await driver.findElement(By.xpath(element)).getText();
        await expect(checkedElement).to.include(text);
    }

};

module.exports = new PastebinHomePage;