require('dotenv').config()
const {config} = require('./wdio.shared.conf');

//=========================
// Browserstack Credentials
//=========================
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;
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
        'appium:deviceName': 'Google Pixel 3',
        'appium:platformVersion': '10.0', 
        'appium:automationName': 'UiAutomator2', 
        'appium:app': 'bs://de4efc37472261042358592bafbe1f6ec1f21df7',
        'appium:autoGrantPermissions': true
    }
]
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    config.services = ['browserstack'],

exports.config = config;