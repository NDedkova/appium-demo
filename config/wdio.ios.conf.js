/*const path = require('path');
const {config} = require('./wdio.shared.conf');

//=====================
// Ranner Configuration
//=====================
config.port = 4724;

//=========
//Specs
//=========
config.specs = [
    './test/specs/ios/ios-todo-item-screen*.js'
];

//==============
// Capabilities
//==============
config.capabilities = [
    {
        platformName: "ios",
        "appium:platformVersion": "14.5",
        "appium:deviceName": "iPhone 12",
        "appium:automationName": "XCUITest",
        "appium:app": path.join(process.cwd(), "app/ios/MVCTodo.app"),
    }
]
// Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    config.services ['appium'],

exports.config = config;*/