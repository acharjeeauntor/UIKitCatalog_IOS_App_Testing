class DatePickerScreen {
    dateBtnSelector=`//XCUIElementTypeButton`
    timeBtnLocator=`~8:34 PM`
    

    async selectDate(){
   await (await $(this.dateBtnSelector)).click()
   await driver.pause()
    }

    async selectTime(){
       await $(this.timeBtnLocator).click()
    }


}

module.exports = new DatePickerScreen();