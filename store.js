const SeleniumInfra = require('./seleniumInfra2');

const seleniumInfra = new SeleniumInfra()

const storeURL = "https://cakes-automation-course.herokuapp.com/store.html";

class Store {
    constructor() {

        seleniumInfra.getURL(storeURL)
    }
    async checkCurrentDay(){
        let dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


        let currentDay = await seleniumInfra.getTextFromElement("xpath", "/html/body/div/main/div/div[2]");
        console.log(currentDay)

        let d = new Date();

        console.log(d);

        d.getDayName = function() {
            return dayArr[this.getDay()]
        }

        let daytoday = d.getDayName()
        console.log(daytoday)

        if (daytoday == await seleniumInfra.getTextFromElement("xpath", "//th[@style= 'color: rgb(212, 126, 21); font-weight: bold;']")) {

        console.log("current day in bold")
            
        }

        else{
            console.log("current day is not bold")
        }


        }
    
    }



module.exports = Store;

let test = async function (){


    let l1 = new Store("https://cakes-automation-course.herokuapp.com/store.html");
    // let beforeArr = ["Chocolate Cake", "Apple Pie"]
    // let afterArr = ["Vanilla Cake", "Red Valvet Cake"]
    //await z1.pressup(["Chocolate Cake" , "Apple Pie"],["Vanilla Cake", "Red Valvet Cake"])
    await l1.checkCurrentDay()
}
 
test()