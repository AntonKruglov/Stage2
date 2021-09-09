const BasePage = require('./basePage');

class PastebinHomePage extends BasePage {

    get pasteTextField() { return $('#postform-text') };

    get pasteExpirationList() { return $('#select2-postform-expiration-container') }
    get pasteExpiration10Minutes() { return $('//li[text()="10 Minutes"]') };
    get pasteNameOrTitleInput() { return $('#postform-name') }
    get createNewPasteBtn() { return $('//button[text()="Create New Paste"]') };
    get successfulPostingMessage() { return $('//div[text()=" Your guest paste has been posted. If you "]') };
    get postedPasteField() { return $('.textarea') };
    get syntaxHighlightingList() { return $('#select2-postform-format-container') };
    get syntaxHighlightingBash() { return $('//li[text()="Bash"]') };
    get syntaxSwitcher() { return $('//label[@for="paste-raw-on"]') };
    get resultingHighlightingField() { return $('//a[text()="Bash"]') };


    open() {
        return super.open('https://pastebin.com');
    }

    async fillInTextField(fieldToFillIn, textToAdd) {
        await fieldToFillIn.waitForExist();
        await fieldToFillIn.setValue(textToAdd);
    }

    async chooseFromDropdownList(listToChoose, requiredValue) {
        await listToChoose.waitForClickable();
        await listToChoose.click();
        await requiredValue.waitForClickable();
        await requiredValue.click();
    }

    async clickTheButton(btn) {
        await (await btn).waitForClickable();
        await (await btn).click();
    }

    async SwitchBtn(btn) {
        await btn.waitForClickable();
        await btn.click();
    }



};


module.exports = new PastebinHomePage;