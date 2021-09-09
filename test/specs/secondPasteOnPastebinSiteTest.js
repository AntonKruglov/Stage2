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
        await expect(pastebinHomePage.postedPasteField).toHaveText(codeToPoste);
    })

    it('should check if the browser title is correct', async() => {
        await expect(browser).toHaveTitleContaining(pasteName);
    })

    it('should check if the syntax highlighting is bash ', async() => {
        await expect(pastebinHomePage.resultingHighlightingField)
            .toHaveText(requiredHighlighting);
    })

    it('should confirm the paste is posted', async() => {
        await expect(pastebinHomePage.successfulPostingMessage)
            .toHaveTextContaining('Your guest paste has been posted');
    })

});