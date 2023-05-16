const path = require('path');
const {config} = require('./wdio.shared.conf');

//=====================
// Ranner Configuration
//=====================
config.port = 4723;

//=========
//Specs
//=========
config.specs = [
    '../test/specs/android/delete-note-screen*.js'
];

//==============
// Capabilities
//==============
config.capabilities = [
    {
       platformName: 'Android', 
        'appium:deviceName': 'Pixel 3',
        'appium:platformVersion': '11.0', 
        'appium:automationName': 'UiAutomator2', 
        'appium:app': path.join(process.cwd(), './app/android/ColorNote Notepad Notes_4.2.4_Apkpure.apk'),
        'appium:autoGrantPermissions': true
    }
]
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    config.services ['appium'],

exports.config = config;