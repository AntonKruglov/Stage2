const pastebinHomePage = require('../pageobjects/pastebinHomePage');


describe('add new paste', () => {

    const codeToPoste = (`git config --global user.name "New Sheriff in Town"
    git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
    git push origin master --force`);
    const pasteName = 'how to gain dominance among developers';
    const requiredHighlighting = 'Bash';

    before(async() => {

        await pastebinHomePage
            .open();
        await pastebinHomePage
            .fillInTextField(pastebinHomePage.pasteTextField, codeToPoste);
        await pastebinHomePage
            .chooseFromDropdownList(pastebinHomePage.syntaxHighlightingList, pastebinHomePage.syntaxHighlightingBash);
        await pastebinHomePage
            .SwitchBtn(pastebinHomePage.syntaxSwitcher);
        await pastebinHomePage
            .chooseFromDropdownList(pastebinHomePage.pasteExpirationList, pastebinHomePage.pasteExpiration10Minutes);
        await pastebinHomePage
            .fillInTextField(pastebinHomePage.pasteNameOrTitleInput, pasteName);
        await pastebinHomePage.clickTheButton(pastebinHomePage.createNewPasteBtn);
    });


    it('should check if the posted text is correct', async() => {
        await pastebinHomePage
            .checkPostedText(pastebinHomePage.postedPasteField, codeToPoste);
    })

    it('should check if the browser title is correct', async() => {
        await pastebinHomePage.checkBrowserTitle(pasteName);
    })

    it('should check if the syntax highlighting is bash', async() => {
        await pastebinHomePage
            .checkIsBash(pastebinHomePage.resultingHighlightingField, requiredHighlighting);
    })

    it('should confirm the paste is posted', async() => {
        await pastebinHomePage
            .checkPasteIsPosted(pastebinHomePage
                .successfulPostingMessage, 'Your guest paste has been posted');
    })

});