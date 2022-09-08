const datePickerScreen = require("../screenobjects/datepickerscreen")
const homeScreen = require("../screenobjects/homescreen")


describe('Verify Date Picker', () => {
    it('TC _011: Verify User can select date and time', async () => {
        await homeScreen.clickDatePickerBtn()
        await datePickerScreen.selectDate()
       // await datePickerScreen.selectTime()
    });
})
