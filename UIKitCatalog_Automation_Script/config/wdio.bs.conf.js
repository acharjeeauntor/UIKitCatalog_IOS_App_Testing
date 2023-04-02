const config = require("./wdio.shared.conf")

config.user = process.env.BROWSERSTACK_USER
config.key = process.env.BROWSERSTACK_KEY

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
    config.capabilities = [
        {
            platformName: "ios",
            "appium:platformVersion": "15.5",
            "appium:deviceName": "iPhone 12",
            "appium:automationName": "XCUITest",
            "appium:app": "bs://0d1db8abc756cd07d625628818d32def1f5b5997",
        }
    ]

config.services = ['browserstack'];

exports.config = config;