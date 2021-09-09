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
            .activateRequiredFrame(googleCloudPricingCalcPage.requiredFrame);

        await googleCloudPricingCalcPage
            .selectFomDropDownList(googleCloudPricingCalcPage.operatingSystemList, googleCloudPricingCalcPage.operatingSystemFree)

        await googleCloudPricingCalcPage
            .selectFomDropDownList(googleCloudPricingCalcPage.machineClassList, googleCloudPricingCalcPage.machineClassRegular)

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
            )
        await googleCloudPricingCalcPage
            .selectFomDropDownList(googleCloudPricingCalcPage.commitedUsageList, googleCloudPricingCalcPage.commitedUsageOneYear)

        await googleCloudPricingCalcPage
            .clickTheButton(googleCloudPricingCalcPage.estimateBtn)

    });



    it('should check if the VM Class is regular', async() => {
        await expect(googleCloudCalculationResultsPage.vmClassField).toHaveText('VM class: regular');
    });

    it('should check if the instance type is correct', async() => {
        await expect(googleCloudCalculationResultsPage.instanceTypeField)
            .toHaveText('Instance type: n1-standard-8\nCommitted Use Discount applied\nUSD 900.32');
    });

    it('should check the location', async() => {
        await expect(googleCloudCalculationResultsPage.regionField).toHaveText('Region: Frankfurt');
    });

    it('should check if the local SSD is 2x375 GiB', async() => {
        await expect(googleCloudCalculationResultsPage.localSsdField).toHaveText('Local SSD: 2x375 GiB\nCommitted Use Discount applied');
    });

    it('should check if the commitment term is 1 Year', async() => {
        await expect(googleCloudCalculationResultsPage.commitmentTermField).toHaveText('Commitment term: 1 Year');
    });

    it('should check total estimated cost per 1 month ', async() => {
        await expect(googleCloudCalculationResultsPage.estimatedCostField).toHaveTextContaining('1,083.33');
    });

});