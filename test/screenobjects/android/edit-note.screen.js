//const addNoteScreen = require("./add-note.screen");
import addNoteScreen from "./add-note.screen";

class EditNoteScreen {
    get firstNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get moreIcon() {
        return $('~More');
    }

    get deleteIcon() {
        return $('//*[@text="Delete"]');
    }

    get navIcon() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashCanIcon() {
        return $('//*[@text="Trash Can"]');
    }

    async skipTutorial() {
        await addNoteScreen.skipBtn.click();
        await expect(addNoteScreen.addNoteText).toBeDisplayed();
    }

    async addAndSaveNote(noteHeading, noteTxt) {
        await addNoteScreen.addNoteText.click();
        await addNoteScreen.textOption.click();
        await expect(addNoteScreen.textEditing).toBeDisplayed();
        await addNoteScreen.noteHeanding.setValue(noteHeading);
        await addNoteScreen.noteBody.addValue(noteTxt);
        addNoteScreen.saveNote();
        await expect(addNoteScreen.editBtn).toBeDisplayed();
        await expect(addNoteScreen.viewNote).toHaveText(noteTxt);
    }
}

export default new EditNoteScreen();