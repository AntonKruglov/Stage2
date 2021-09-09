const googleCloudHomePage = require('../pageobjects/googleCloudHomePage');
const googleCloudPricingCalcPage = require('../pageobjects/googleCloudPricingCalcPage');
const googleSearchResultsPage = require('../pageobjects/googleSearchResultsPage');
const googleCloudCalculationResultsPage = require('../pageobjects/googleCloudCalculationResultsPage');



describe('Google Cloud Platform Pricing Calculator', () => {

    const textToSearch = 'Google Cloud Platform Pricing Calculator';
    const numberOfInstances = '4';

    before(async() => {

        await googleCloudHomePage.open();

        await googleCloudHomePage
            .search(googleCloudHomePage.activeSearchBtn, googleCloudHomePage.activeSearchBox, textToSearch);

        await googleSearchResultsPage
            .swichToSearchResultsPage(googleSearchResultsPage.cloudPlatformCalcSearchResult);

        await googleCloudPricingCalcPage
            .activateRequiredFrame(googleCloudPricingCalcPage.requiredFrame);

        await googleCloudPricingCalcPage
            .selectFomDropDownList(googleCloudPricingCalcPage.operatingSystemList, googleCloudPricingCalcPage.operatingSystemFree);

        await googleCloudPricingCalcPage
            .selectFomDropDownList(googleCloudPricingCalcPage.machineClassList, googleCloudPricingCalcPage.machineClassRegular);

        await googleCloudPricingCalcPage
            .setNumberValueIntoField(googleCloudPricingCalcPage.numberOfInstancesField, numberOfInstances);

        await googleCloudPricingCalcPage
            .selectFomDropDownList(
                googleCloudPricingCalcPage.seriesList, googleCloudPricingCalcPage.seriesNumberN1);

        await googleCloudPricingCalcPage
            .selectFomDropDownList(
                googleCloudPricingCalcPage.machineTypeList, googleCloudPricingCalcPage.machineTypeN1vCPU8andRAM30);

        await googleCloudPricingCalcPage
            .switchTheckbox(googleCloudPricingCalcPage.addGpu);

        await googleCloudPricingCalcPage
            .selectFomDropDownList(
                googleCloudPricingCalcPage.numberOfGpuList, googleCloudPricingCalcPage.numberOfGpuIsOne);

        await googleCloudPricingCalcPage
            .selectFomDropDownList(
                googleCloudPricingCalcPage.typeOfGpuList, googleCloudPricingCalcPage.typeOfGpuIsTeslaV100
            );
        await googleCloudPricingCalcPage
            .selectFomDropDownList(
                googleCloudPricingCalcPage.localSsdList, googleCloudPricingCalcPage.localSsd2x375gb
            );
        await googleCloudPricingCalcPage
            .selectFomDropDownList(
                googleCloudPricingCalcPage.datacenterLocationList, googleCloudPricingCalcPage.datacenterFrankfurtLocation
            );
        await googleCloudPricingCalcPage
            .selectFomDropDownList(googleCloudPricingCalcPage.commitedUsageList, googleCloudPricingCalcPage.commitedUsageOneYear);

        await googleCloudPricingCalcPage
            .clickTheButton(googleCloudPricingCalcPage.estimateBtn);

        await googleCloudPricingCalcPage.clickTheButton(googleCloudCalculationResultsPage.emailEstimateBtn);

        browser.newWindow('https://yopmail.com/en/');

        await googleCloudPricingCalcPage.clickTheButton(googleCloudCalculationResultsPage.randomEmailBtn);

        await googleCloudPricingCalcPage.clickTheButton(googleCloudCalculationResultsPage.copyBtn);

        await googleCloudCalculationResultsPage.swichToAnotherWindow('cloud.google.com/products/');

        await googleCloudPricingCalcPage.activateRequiredFrame(googleCloudPricingCalcPage.requiredFrame);

        await googleCloudCalculationResultsPage.fillInEmailField(googleCloudCalculationResultsPage.emailField);

        await googleCloudPricingCalcPage.clickTheButton(googleCloudCalculationResultsPage.sendEmailBtn);

        await googleCloudCalculationResultsPage.swichToAnotherWindow('https://yopmail.com/en/');

        await googleCloudPricingCalcPage.clickTheButton(googleCloudCalculationResultsPage.yopmailCheckInboxBtn);

        await googleCloudPricingCalcPage.clickTheButton(googleCloudCalculationResultsPage.refreshBtn);

        await googleCloudCalculationResultsPage.getCostFromEmail(googleCloudCalculationResultsPage.estimatedCostFromGoogle)

    });


    it('should check the total estimated monthly cost in letter matches the one in the calculator', async() => {

        await expect(googleCloudCalculationResultsPage.estimatedCostFromGoogle).toHaveTextContaining('1,083.33');
    });

});