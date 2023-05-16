describe('Android Native Feature Test', () => {
    it('Access an Activity directly', async () =>{
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

        await driver.pause(3000);

        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });

    it('Working with Dialog Boxes', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        //accept alert
        //await driver.acceptAlert();

        //dismiss alert
        //await driver.dismissAlert();

        //get alert text
        console.log('Alert text -->', await driver.getAlertText());

        // click on the OK btn
        await $('//*[@resource-id="android:id/button1"]').click();

        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    });

    it('Vertical scrolling', async () => {
        await $('~App').click();
        await $('~Activity').click();

        // scroll to the end (not stable is element gets moved)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        //await $('~Secure Surfaces').click();
         
        //scrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")')
        .click();
        
        await expect($('~Secure Dialog')).toExist();
    });

    it('Horizontal scrolling', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.Gallery1");

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
        
        await driver.pause(3000);
    });

    it.only('Working with a data picker', async () => {
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.view.DateWidgets1")
        const startDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();
        await $('~change the date').click();
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        //await $('~Next month').click();
        await $('//*[@text="10"]').click();
        await $('//*[@text="OK"]').click();
        const endDate = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();
        await expect(startDate).not.toEqual(endDate);
    });
});