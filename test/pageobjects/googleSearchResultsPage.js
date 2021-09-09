const BasePage = require('./basePage');


class GoogleSearchResultsPage extends BasePage {



    get cloudPlatformCalcSearchResult() { return $('//*[text()= "Google Cloud Platform Pricing Calculator"]') };


    async swichToSearchResultsPage(searchResult) {
        await searchResult.waitForExist();
        await searchResult.click();
    }

};


module.exports = new GoogleSearchResultsPage;