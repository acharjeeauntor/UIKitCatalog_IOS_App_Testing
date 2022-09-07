class HomeScreen {
    activityIndicatorSelector=`~Activity Indicators`
    searchSelector=`~Search`
    alertViewsSelector = `~Alert Views`

    
    async clickActivityIndicatortBtn(){
        await $(this.activityIndicatorSelector).click() 
    }
    async clickSearchBtn(){
        await $(this.searchSelector).click() 
    }
    async clickAlertViewsBtn(){
        await $(this.alertViewsSelector).click() 
    }
}

module.exports = new HomeScreen();