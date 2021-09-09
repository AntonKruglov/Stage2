const BasePage = require('./basePage');


class GoogleCloudPricingCalcPage extends BasePage {



    get requiredFrame() { return $('//*[@id="gc-wrapper"]/main') };
    get operatingSystemList() { return $('div.compute-engine-block div.ng-scope form #select_value_label_61.md-select-value span.md-select-icon') };
    get operatingSystemFree() { return $('#select_option_70 > div:nth-child(1)') };
    get machineClassList() { return $('#select_value_label_62.md-select-value span.md-select-icon') };
    get machineClassRegular() { return $('#select_option_83 > div.md-text') };
    get numberOfInstancesField() { return $('//*[@id="input_68"]') };
    get seriesList() { return $('//*[@name="series"]') };
    get seriesNumberN1() { return $('//md-option[@value="n1"]') };
    get machineTypeList() { return $('//label[text()="Machine type"]/parent::md-input-container') };
    get machineTypeN1vCPU8andRAM30() { return $('[value="CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8"]') };
    get addGpu() { return $('[aria-label="Add GPUs"]') };
    get numberOfGpuList() { return $('//md-select[@placeholder="Number of GPUs"]') }
    get numberOfGpuIsOne() { return $('md-option[value="1"][ng-disabled="item.value != 0 && item.value < listingCtrl.minGPU"]') };
    get typeOfGpuList() { return $('//md-select[@placeholder="GPU type"]') };
    get typeOfGpuIsTeslaV100() { return $('//md-option[@value="NVIDIA_TESLA_V100"] ') };
    get localSsdList() { return $('#select_value_label_392') };
    get localSsd2x375gb() { return $('#select_option_419 > div:nth-child(1)') };
    get datacenterLocationList() { return $('//md-select[@placeholder="Datacenter location"]') };
    get datacenterFrankfurtLocation() {
        return $('#select_option_219.ng-scope.md-ink-ripple div.md-text.ng-binding');
    }
    get commitedUsageList() { return $('#select_104') };
    get commitedUsageOneYear() {
        return $('#select_option_102.md-ink-ripple div.md-text');
    }
    get estimateBtn() { return $('//button[@class="md-raised md-primary cpc-button md-button md-ink-ripple"][@aria-label="Add to Estimate"][1]') };



    async activateRequiredFrame(section) {
        await section.waitForExist()
        browser.switchToFrame(0)
        browser.switchToFrame(0)
    };


    async setNumberValueIntoField(fieldToFillIn, value) {
        await fieldToFillIn.waitForExist();
        await fieldToFillIn.setValue(value);
    };


    async selectFomDropDownList(param, list) {

        await param.waitForClickable();
        await param.click();
        await list.waitForClickable();
        await list.click();
    };


    async switchTheckbox(item) {

        await item.waitForClickable();
        await item.click();

    };


    async fillInTextField(fieldToFillIn, textToAdd) {
        await fieldToFillIn.waitForExist();
        await fieldToFillIn.setValue(textToAdd);
    };


    async clickTheButton(btn) {
        await btn.waitForClickable();
        await btn.click();
    }


};


module.exports = new GoogleCloudPricingCalcPage;