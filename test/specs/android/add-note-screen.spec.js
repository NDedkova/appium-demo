import addNoteScreen from "../../screenobjects/android/add-note.screen";

describe('Add Notes', () => {
    it('Skip tutorial', async () =>{
        await addNoteScreen.skipBtn.click();
        await expect(addNoteScreen.addNoteText).toBeDisplayed();
    });

    it('Add note', async () =>{
        await addNoteScreen.addNoteText.click();
        await addNoteScreen.textOption.click();
        await expect(addNoteScreen.textEditing).toBeDisplayed();

        // setValue clears the value before additing
        // addValue just add the value directly
        await addNoteScreen.noteHeanding.setValue("My todo list");
        await addNoteScreen.noteBody.addValue("One\nTwo\nThree");

        addNoteScreen.saveNote();

        await expect(addNoteScreen.editBtn).toBeDisplayed();
        await expect(addNoteScreen.viewNote).toHaveText("One\nTwo\nThree");
    });
});