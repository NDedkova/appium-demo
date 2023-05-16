import editNoteScreen from "../../screenobjects/android/edit-note.screen";

describe('Delete note', async () => {
    before(async () => {
        await editNoteScreen.skipTutorial();
        await editNoteScreen.addAndSaveNote("My todo list", "One\nTwo\nThree");
        await driver.back();
    });

    beforeEach(async() => {
        console.log('BEFORE EACH HOOK!');
    });

    after(async() => {
        console.log('AFTER HOOK!');
    });

    afterEach(async() => {
        console.log('AFTER EACH HOOK!');
    });

    it('Delete note',async () => {
    const note = await editNoteScreen.firstNote.getText();
    await editNoteScreen.firstNote.click();
    await editNoteScreen.moreIcon.click();
    await editNoteScreen.deleteIcon.click();
    await driver.acceptAlert();
    await editNoteScreen.navIcon.click();
    await editNoteScreen.trashCanIcon.click();
    const transhCanItem = await editNoteScreen.firstNote;
    await expect(transhCanItem).toHaveText(note);
    });

});