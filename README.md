# UIKitCatalog_iOS_App_Testing
This repo will contains UIKitCatalog iOS Application Manual test related document and Automation test script using webdriverIO

## Test Type:<br>
----------------------------------------------------------

## Manual Testing
 - Test Plan document
 - Test Case document
 - Requirements Traceability Matrix document
 - Automate Test Execution document


----------------------------------------------------------

## Automation Testing

## Technology: <br>
* Automation Framework: webdriverio <br>
* Build tool: npm <br>
* Bundled Tools: Mocha, Chai
* Language: Javascript <br>
* Design Pattern: POM <br>
* Report: Allure,spec <br>
* CI/CD: BrowserStack, Github Action<br>
*   "dependencies": {
    "@wdio/cli": "^7.24.0",
    "appium": "^2.0.0-beta.43",
    "allure-commandline": "^2.18.1"
  },
  "devDependencies": {
    "@babel/core": "^7.18.13",
    "@babel/preset-env": "^7.18.10",
    "@babel/register": "^7.18.9",
    "@wdio/appium-service": "^7.24.0",
    "@wdio/local-runner": "^7.24.0",
    "@wdio/mocha-framework": "^7.24.0",
    "@wdio/spec-reporter": "^7.24.0",
    "@wdio/allure-reporter": "^7.20.3",
    "appium-xcuitest-driver": "^4.10.3"
  } <br>
* IDE: Visual Studio Code <br>



## Requirement:<br>
1. Create a Test Plan with Test case and Requirements Traceability Matrix
2. Build a Automation Test project to automate maximum number of test cases


## Prerequisite:
The following software are required:

1. nodejs : Download and Install Node JS from<br>
    https://nodejs.org/en/download/<br>
2. Install Java 8 or above, Allure Reports require Java 8 or higher.<br>
3. allure commandline : Install allure command line for generating Allure Reports using<br>
    npm install -g allure-commandline<br>


## Installation:
1. Clone the repo using below URL<br>
  [https://github.com/acharjeeauntor/UIKitCatalog_iOS_App_Testing/tree/master/UIKitCatalog_Automation_Script]<br>
2. Navigate to folder and install npm packages using:<br>
  npm install<br>


## Usage:
1. To run test in local machine: npm run test
2. To see the allure report: npm run allureReport

## Allure Report view:
<img width="1429" alt="Screenshot 2022-09-10 at 4 35 44 PM" src="https://user-images.githubusercontent.com/38497405/189486917-55de53cc-7830-4661-a9f5-9d547da7affc.png">
<img width="1429" alt="Screenshot 2022-09-10 at 4 36 09 PM" src="https://user-images.githubusercontent.com/38497405/189486920-85cf132f-d3f9-4868-b9ab-93d493ca8f4f.png">
<img width="1429" alt="Screenshot 2022-09-10 at 4 36 28 PM" src="https://user-images.githubusercontent.com/38497405/189486921-122c7c42-d6ff-42ce-804f-0b248320c3bf.png">
<img width="1429" alt="Screenshot 2022-09-10 at 4 36 18 PM" src="https://user-images.githubusercontent.com/38497405/189486926-369866e4-28c3-4a05-8859-9403e9f1bb21.png">
<img width="1429" alt="Screenshot 2022-09-10 at 4 36 01 PM" src="https://user-images.githubusercontent.com/38497405/189486931-59c4b0ac-5d3a-4709-9c1a-dadcba2c5699.png">

## To See the Demo Video click [here](https://youtu.be/qttdkIztkaU)

----------------------------------------------------------

## BrowserStack, GithubActions & Jenkins related Info:<br>

1. In this project i have automate a .ipa (ios app file type) file ios app. BrowserStack doesn't support .ipa file. So we are not able to intregrate browserstack in this project. <br>
2. We are not able to intregrate github actions as there need a virtual device to run the test app.As we are not able to upload .ipa file so we are not able to intregrate github actions in this project. <br>
3. We are not able to intregrate jenkins as there need a virtual device to run the test app.As we are not able to upload .ipa file so we are not able to intregrate jenkins in this project. <br>

#### Note: The configuration of running app in browserstack is similar for android and ios app. I have done intregration of Android app in browserstack in another project. To see this project click [here](https://github.com/acharjeeauntor/Amader_Rail_Android_App_Automation_Script)


----------------------------------------------------------

