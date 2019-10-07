const SeleniumInfra = require('./seleniumInfra2');

const seleniumInfra = new SeleniumInfra()


class Productpage {
    constructor(url) {
        // this.Name = Name
        // this.Year = Year
        // this.Country = Country
        // this.Time = Time
        //this.driver = seleniumInfra.driver//Get the selenium driver from SeleniumInfra class
        seleniumInfra.getURL(url)
    }
    async pressup(cakesBefore,cakesAfter){
        let beforeArr1 = []
        let afterArr1 = []

        let cake1 = await seleniumInfra.getTextFromElement("xpath", "//*[@id='productsTable']/tbody/tr[1]/th[1]/div/h3");
        console.log(cake1)

        let cake2 = await seleniumInfra.getTextFromElement("xpath", "//*[@id='productsTable']/tbody/tr[1]/th[2]/div/h3");
        console.log(cake2)

        // let cake3 = await seleniumInfra.getTextFromElement("xpath", "//*[@id='productsTable']/tbody/tr[2]/th[1]/div/h3");
        // console.log(cake3)

        // let cake4 = await seleniumInfra.getTextFromElement("xpath", "//*[@id='productsTable']/tbody/tr[2]/th[2]/div/h3");
        // console.log(cake4)

        beforeArr1.push(cake1,cake2)
        console.log(beforeArr1)

        // afterArr1.push(cake3,cake4)
        // console.log(afterArr1)

        if ((cakesBefore[0] == beforeArr1[0]) && (cakesBefore[1] == beforeArr1[1])) {
            console.log("good validation num 1")
           let arrowupbtn = await seleniumInfra.findElementBy("id" , "arrow-up");
           arrowupbtn.click();
        }
        else{
            console.log("there is error in validation")
        }

        // cakesBefore = cakesAfter
        
        let cake3 = await seleniumInfra.getTextFromElement("xpath", "//*[@id='productsTable']/tbody/tr[1]/th[1]/div/h3");
        console.log(cake3)

        let cake4 = await seleniumInfra.getTextFromElement("xpath", "//*[@id='productsTable']/tbody/tr[1]/th[2]/div/h3");
        console.log(cake4)

        afterArr1.push(cake3,cake4)
        console.log(afterArr1)

        if ((cakesAfter[1] == afterArr1[1])) {
            console.log("good validation num 2")
           let arrowupbtn = await seleniumInfra.findElementBy("id" , "arrow-up");
           arrowupbtn.click();
        }
        else{
            console.log("there is error in validation")
        }

        }   


        async pressdown(cakesBefore,cakesAfter){
            let beforeArr2 = []
            let afterArr2 = []
    
            let cake1 = await seleniumInfra.getTextFromElement("xpath", "/html/body/div/main/div/div[3]/table/tbody/tr[2]/th[1]/div/h3");
            console.log(cake1)
    
            let cake2 = await seleniumInfra.getTextFromElement("xpath", "/html/body/div/main/div/div[3]/table/tbody/tr[2]/th[2]/div/h3");
            console.log(cake2)

            beforeArr2.push(cake1,cake2)
            console.log(beforeArr2)

        // afterArr1.push(cake3,cake4)
        // console.log(afterArr1)

        if ((cakesBefore[0] == beforeArr2[0]) && (cakesBefore[1] == beforeArr2[1])) {
            console.log("good validation num 1")
           let arrowupbtn = await seleniumInfra.findElementBy("id" , "arrow-down");
           arrowupbtn.click();
        }
        else{
            console.log("there is error in validation")
        }

        let cake3 = await seleniumInfra.getTextFromElement("xpath", "/html/body/div/main/div/div[3]/table/tbody/tr[2]/th[1]/div/h3");
        console.log(cake3)

        let cake4 = await seleniumInfra.getTextFromElement("xpath", "/html/body/div/main/div/div[3]/table/tbody/tr[2]/th[2]/div/h3");
        console.log(cake4)

        afterArr2.push(cake3,cake4)
        console.log(afterArr2)

        if ((cakesAfter[1] == afterArr2[1])) {
            console.log("good validation num 2")
           let arrowupbtn = await seleniumInfra.findElementBy("id" , "arrow-down");
           arrowupbtn.click();
        }
        else{
            console.log("there is error in validation")
        }


        }
    
    }



module.exports = Productpage

let test = async function (){


    let z1 = new Productpage("https://cakes-automation-course.herokuapp.com/products.html");
    let beforeArr = ["Chocolate Cake", "Apple Pie"]
    let afterArr = ["Vanilla Cake", "Red Valvet Cake"]
    //await z1.pressup(["Chocolate Cake" , "Apple Pie"],["Vanilla Cake", "Red Valvet Cake"])
    await z1.pressdown(["Vanilla Cake", "Red Valvet Cake"],["Chocolate Cake" , "Apple Pie"])
}
 
test()