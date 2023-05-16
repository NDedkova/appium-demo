describe('Android Elements Test', () => {
    it('Find element by accessibility id', async () => {
        // find element by accessibility id
        const appOption = await $('~App');
        await appOption.click();
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    });

    it('Find element by class name', async () => {
        // find element bu class name
        const className = await $('android.widget.TextView');
        console.log(await className.getText());
        await expect(className).toHaveText("API Demos");
    });

    it('Find elements by XPath', async () => {
        // xpath - (//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
        await $('//android.widget.TextView[@text="Command two"]').click();
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");
    });

    xit('Find element by UiAutomator', async () => {
        // find by text contains
        await $('android=new UiSelector().textContains("Alert")').click();
    });

    it('Find multiple elements', async () => {
        const expectedList = [
            'API Demos', "Access'ibility",
            'Accessibility', 'Animation', 'App',
            'Content', 'Graphics',
            'Media', 'NFC', 'OS',
            'Preference', 'Text', 'Views'
        ]
        const actualList = []
        const textList = await $$('android.widget.TextView');
        for(const element of textList){
            actualList.push(await element.getText());
        }
        await expect(actualList).toEqual(expectedList);
    });

    it.only('Working with text field', async () => {
        await $('~Views').click();
        await $('//*[@text="Auto Complete"]').click();
        await $('//*[@text="1. Screen Top"]').click();
        //enter text
        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await textField.addValue('Canada');
        
        await expect(textField).toHaveText('Canada');
    });
});
