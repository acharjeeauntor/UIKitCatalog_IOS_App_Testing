const path = require('path')
const config = require('./wdio.shared.conf')

config.port = 4723;
config.specs= [
    './test/specs/activityindicators.spec.js',
    './test/specs/alertviews.spec.js',
    './test/specs/pickerview.spec.js',
    './test/specs/search.spec.js',
    './test/specs/stackviews.spec.js',
    './test/specs/steppers.spec.js',   
    './test/specs/switches.spec.js',
    './test/specs/textview.spec.js',
    './test/specs/toolbars.spec.js', 
],
    // config.capabilities = [
    //     {
    //         platformName: "Android",
    //         "appium:platformVersion": "10",
    //         "appium:deviceName": "Pixel-3a-test",
    //         "appium:automationName": "UIAutomator2",
    //         "appium:autoGrantPermissions": true,
    //         "appium:app": path.join(process.cwd(), "./app/Amader Rail.apk"),
    //     }
    // ]
    config.capabilities= [{
        "platformName": "ios",
        "appium:platformVersion": "15.5",
        "appium:deviceName": "iPhone 12",
        "appium:app": path.join(process.cwd(), "./app/UIKitCatalog.app"),
        "appium:automationName": "XCUITest"
    }
    ],


config.services = ['appium'];

exports.config = config;