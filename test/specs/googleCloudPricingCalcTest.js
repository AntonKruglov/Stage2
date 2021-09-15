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

    });



    it('should check if the VM Class is regular', async() => {
        await googleCloudCalculationResultsPage
            .checkVmClass(googleCloudCalculationResultsPage.vmClassField, 'VM class: regular')
    });

    it('should check if the instance type is correct', async() => {
        await googleCloudCalculationResultsPage
            .checkTheInstanceType(googleCloudCalculationResultsPage
                .instanceTypeField, 'Instance type: n1-standard-8\nCommitted Use Discount applied\nUSD 900.32');

    });

    it('should check the location', async() => {
        await googleCloudCalculationResultsPage
            .checkLocation(googleCloudCalculationResultsPage
                .regionField, 'Region: Frankfurt');
    });

    it('should check if the local SSD is 2x375 GiB', async() => {
        await googleCloudCalculationResultsPage
            .checkLocalSsd(googleCloudCalculationResultsPage
                .localSsdField, 'Local SSD: 2x375 GiB\nCommitted Use Discount applied');
    });

    it('should check if the commitment term is 1 Year', async() => {
        await googleCloudCalculationResultsPage
            .checkCommintmentTerm(googleCloudCalculationResultsPage
                .commitmentTermField, 'Commitment term: 1 Year');
    });

    it('should check total estimated cost per 1 month ', async() => {
        await googleCloudCalculationResultsPage
            .checkEstimatedCost(googleCloudCalculationResultsPage
                .estimatedCostField, '1,083.33')
    });


});