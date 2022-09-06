class HomeScreen {
    activityIndicatorSelector=`~Activity Indicators`
    searchSelector=`~Search`

    async clickActivityIndicatortBtn(){
        await $(this.activityIndicatorSelector).click() 
    }
    async clickSearchBtn(){
        await $(this.searchSelector).click() 
    }
}

module.exports = new HomeScreen();