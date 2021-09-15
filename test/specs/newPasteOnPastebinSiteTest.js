const pastebinHomePage = require('../pageobjects/pastebinHomePage');


describe('add new paste', () => {


    const codeToPoste = 'Hello from WebDriver';
    const pasteName = 'helloweb';

    it('should ', async() => {

        await pastebinHomePage
            .open();
        await pastebinHomePage
            .fillInTextField(pastebinHomePage.pasteTextField, codeToPoste);
        await pastebinHomePage
            .chooseFromDropdownList(pastebinHomePage.pasteExpirationList, pastebinHomePage.pasteExpiration10Minutes);
        await pastebinHomePage
            .fillInTextField(pastebinHomePage.pasteNameOrTitleInput, pasteName);
        await pastebinHomePage
            .clickTheButton(pastebinHomePage.createNewPasteBtn);
    });


    it('should check if the posted text is correct', async() => {
        await pastebinHomePage
            .checkPostedText(pastebinHomePage.postedPasteField, codeToPoste);

    })

    it('should check if the browser title is correct', async() => {
        await pastebinHomePage.checkBrowserTitle(pasteName);

    })

    it('should confirm the paste is posted', async() => {
        await pastebinHomePage
            .checkPasteIsPosted(pastebinHomePage
                .successfulPostingMessage, 'Your guest paste has been posted');

    })


});