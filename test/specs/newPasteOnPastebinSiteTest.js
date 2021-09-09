const pastebinHomePage = require('../pageobjects/pastebinHomePage');


describe('add new paste', () => {

    const codeToPoste = 'Hello from WebDriver';
    const pasteName = 'helloweb';

    before(async() => {

        await pastebinHomePage.open();

        await pastebinHomePage.fillInTextField(pastebinHomePage.pasteTextField, codeToPoste);

        await pastebinHomePage
            .chooseFromDropdownList(pastebinHomePage.pasteExpirationList, pastebinHomePage.pasteExpiration10Minutes);

        await pastebinHomePage.fillInTextField(pastebinHomePage.pasteNameOrTitleInput, pasteName);

        await pastebinHomePage.clickTheButton(pastebinHomePage.createNewPasteBtn);
    });


    it('should check if the posted text is correct', async() => {
        await expect(pastebinHomePage.postedPasteField).toHaveText(codeToPoste);
    })

    it('should check if the browser title is correct', async() => {
        await expect(browser).toHaveTitleContaining(pasteName);
    })

    it('should confirm the paste is posted', async() => {
        await expect(pastebinHomePage.successfulPostingMessage)
            .toHaveTextContaining('Your guest paste has been posted');
    })

});