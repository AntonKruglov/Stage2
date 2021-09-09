const BasePage = require('./basePage');

class GoogleCloudHomePage extends BasePage {


    get activeSearchBtn() { return $('//input[@placeholder="Search"]') };
    get activeSearchBox() { return $('//*[@placeholder="Search"]') };


    open() {
        return super.open('https://cloud.google.com/');
    }

    async search(btn, field, text) {
        await btn.click();
        await field.waitForExist();
        await field.setValue(text);
        browser.keys('Return');
    }

};


module.exports = new GoogleCloudHomePage;