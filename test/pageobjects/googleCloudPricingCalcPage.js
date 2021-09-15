const { Builder, By, Key, until } = require('selenium-webdriver');
const BasePage = require('./basePage');
const webdriver = require('selenium-webdriver');


class GoogleCloudPricingCalcPage extends BasePage {

    constructor() {
        super();

        this.operatingSystemList = ('#select_value_label_62 > span:nth-child(2)');
        this.operatingSystemFree = ('#select_option_71 > div:nth-child(1)');
        this.machineClassList = ('#select_value_label_63 > span:nth-child(1)');
        this.machineClassRegular = ('#select_option_83 > div.md-text');
        this.numberOfInstancesField = ('[ng-model="listingCtrl.computeServer.quantity"]');
        this.seriesList = ('//*[@name="series"]');
        this.seriesNumberN1 = ('//md-option[@value="n1"]');
        this.machineTypeList = ('//label[text()="Machine type"]/parent::md-input-container');
        this.machineTypeN1vCPU8andRAM30 = ('[value="CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8"]');
        this.addGpu = ('[aria-label="Add GPUs"]');
        this.numberOfGpuList = ('//md-select[@placeholder="Number of GPUs"]');
        this.numberOfGpuIsOne = ('md-option[value="1"][ng-disabled="item.value != 0 && item.value < listingCtrl.minGPU"]')
        this.typeOfGpuList = ('//md-select[@placeholder="GPU type"]');
        this.typeOfGpuIsTeslaV100 = ('//md-option[@value="NVIDIA_TESLA_V100"] ');
        this.localSsdList = ('#select_value_label_392');
        this.localSsd2x375gb = ('#select_option_419 > div:nth-child(1)');
        this.datacenterLocationList = ('//md-select[@placeholder="Datacenter location"]');
        this.datacenterFrankfurtLocation = ('#select_option_219.ng-scope.md-ink-ripple div.md-text.ng-binding');
        this.commitedUsageList = ('#select_104');
        this.commitedUsageOneYear = ('#select_option_102.md-ink-ripple div.md-text');
        this.estimateBtn = ('#mainForm > div:nth-child(3) div:nth-child(1) > form div.layout-align-end-start');
    }

    async activateRequiredFrame(section) {
        driver.switchTo().frame(0);
        driver.switchTo().frame(0);

    };

    async setNumberValueIntoField(fieldToFillIn, value) {
        await driver.wait(until.elementLocated(By.css(fieldToFillIn)), 5000)
            .sendKeys(value)
    };

    async selectFromDropDownListByCss(list, param) {
        await driver.wait(until.elementLocated(By.css(list)), 5000)
            .click();
        await driver.wait(until.elementLocated(By.css(param)), 5000)
            .click();
    };

    async selectFromDropDownListByXpath(list, param) {
        await driver.wait(until.elementLocated(By.xpath(list)), 5000)
            .click();
        await driver.wait(until.elementLocated(By.xpath(param)), 5000)
            .click();
    };

    async selectFromDropDownListMixed(list, param) {
        await driver.wait(until.elementLocated(By.xpath(list)), 5000)
            .click();
        await driver.wait(until.elementLocated(By.css(param)), 5000)
            .click();
    };

    async switchTheckbox(item) {
        await driver.wait(until.elementLocated(By.css(item), 5000))
            .click();
    };

    async clickTheButton(btn) {
        await driver.wait(until.elementLocated(By.css(btn), 5000))
            .click();
    }

};

module.exports = new GoogleCloudPricingCalcPage;