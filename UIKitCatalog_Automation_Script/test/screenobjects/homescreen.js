class HomeScreen {
    activityIndicatorSelector=`~Activity Indicators`
    searchSelector=`~Search`
    alertViewsSelector = `~Alert Views`
    datePickerSelector =`~Date Picker`
    textViewSelector=`~Text View`

    
    async clickActivityIndicatortBtn(){
        await $(this.activityIndicatorSelector).click() 
    }
    async clickSearchBtn(){
        await $(this.searchSelector).click() 
    }
    async clickAlertViewsBtn(){
        await $(this.alertViewsSelector).click() 
    }
    async clickDatePickerBtn(){
        await $(this.datePickerSelector).click() 
    }
    async clickTextViewBtn(){
        await $(this.textViewSelector).click() 
    }

}

module.exports = new HomeScreen();