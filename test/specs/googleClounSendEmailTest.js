const googleCloudHomePage = require('../pageobjects/googleCloudHomePage');
const googleCloudPricingCalcPage = require('../pageobjects/googleCloudPricingCalcPage');
const googleSearchResultsPage = require('../pageobjects/googleSearchResultsPage');
const googleCloudCalculationResultsPage = require('../pageobjects/googleCloudCalculationResultsPage');


describe('Google Cloud Platform Pricing Calculator', () => {

    const textToSearch = 'Google Cloud Platform Pricing Calculator';
    const numberOfInstances = '4';

    before(async() => {

        await googleCloudHomePage
            .open();

        await googleCloudHomePage
            .search(googleCloudHomePage.activeSearchBtn, googleCloudHomePage.activeSearchBox, textToSearch);

        await googleSearchResultsPage
            .swichToSearchResultsPage(googleSearchResultsPage.cloudPlatformCalcSearchResult);

        await googleCloudPricingCalcPage
            .activateRequiredFrame();

        await googleCloudPricingCalcPage
            .selectFromDropDownListByCss(googleCloudPricingCalcPage.operatingSystemList, googleCloudPricingCalcPage.operatingSystemFree)

        await googleCloudPricingCalcPage
            .selectFromDropDownListByCss(googleCloudPricingCalcPage.machineClassList, googleCloudPricingCalcPage.machineClassRegular)

        await googleCloudPricingCalcPage
            .setNumberValueIntoField(googleCloudPricingCalcPage.numberOfInstancesField, numberOfInstances);

        await googleCloudPricingCalcPage
            .selectFromDropDownListByXpath(
                googleCloudPricingCalcPage.seriesList, googleCloudPricingCalcPage.seriesNumberN1);

        await googleCloudPricingCalcPage
            .selectFromDropDownListMixed(
                googleCloudPricingCalcPage.machineTypeList, googleCloudPricingCalcPage.machineTypeN1vCPU8andRAM30);

        await googleCloudPricingCalcPage
            .switchTheckbox(googleCloudPricingCalcPage.addGpu);

        await googleCloudPricingCalcPage
            .selectFromDropDownListMixed(
                googleCloudPricingCalcPage.numberOfGpuList, googleCloudPricingCalcPage.numberOfGpuIsOne);

        await googleCloudPricingCalcPage
            .selectFromDropDownListByXpath(
                googleCloudPricingCalcPage.typeOfGpuList, googleCloudPricingCalcPage.typeOfGpuIsTeslaV100
            );
        await googleCloudPricingCalcPage
            .selectFromDropDownListByCss(
                googleCloudPricingCalcPage.localSsdList, googleCloudPricingCalcPage.localSsd2x375gb
            );
        await googleCloudPricingCalcPage
            .selectFromDropDownListMixed(
                googleCloudPricingCalcPage.datacenterLocationList, googleCloudPricingCalcPage.datacenterFrankfurtLocation
            )
        await googleCloudPricingCalcPage
            .selectFromDropDownListByCss(googleCloudPricingCalcPage.commitedUsageList, googleCloudPricingCalcPage.commitedUsageOneYear)

        await googleCloudPricingCalcPage
            .clickTheButton(googleCloudPricingCalcPage.estimateBtn)


        driver.switchTo().newWindow('https://yopmail.com/en/');


        await googleCloudPricingCalcPage.clickTheButton(googleCloudCalculationResultsPage.randomEmailBtn);

        await googleCloudPricingCalcPage.clickTheButton(googleCloudCalculationResultsPage.copyBtn);

        await googleCloudCalculationResultsPage.swichToAnotherWindow('cloud.google.com/products/');

        await googleCloudPricingCalcPage.activateRequiredFrame();

        await googleCloudCalculationResultsPage.fillInEmailField(googleCloudCalculationResultsPage.emailField);

        await googleCloudPricingCalcPage.clickTheButton(googleCloudCalculationResultsPage.sendEmailBtn);

        await googleCloudCalculationResultsPage.swichToAnotherWindow('https://yopmail.com/en/');

        await googleCloudPricingCalcPage.clickTheButton(googleCloudCalculationResultsPage.yopmailCheckInboxBtn);

        await googleCloudPricingCalcPage.clickTheButton(googleCloudCalculationResultsPage.refreshBtn);

        await googleCloudCalculationResultsPage.getCostFromEmail(googleCloudCalculationResultsPage.estimatedCostFromGoogle)

    });


    it('should check the total estimated monthly cost in letter matches the one in the calculator', async() => {

        await googleCloudCalculationResultsPage
            .checkEstimatedCost(googleCloudCalculationResultsPage
                .estimatedCostFromGoogle, '1,083.33')
    });

});