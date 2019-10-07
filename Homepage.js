const SeleniumInfra = require('./seleniumInfra2');

const seleniumInfra = new SeleniumInfra()


class Homepage {
    constructor(url) {
        // this.Name = Name
        // this.Year = Year
        // this.Country = Country
        // this.Time = Time
        //this.driver = seleniumInfra.driver//Get the selenium driver from SeleniumInfra class
        seleniumInfra.getURL(url)
    }
    async search(input){
      try{
        await seleniumInfra.write("id","inputSearch", input)
        await seleniumInfra.clickElement("id", "inputSearchSubmit")
        let valid = await seleniumInfra.URLvalidation("about")
        seleniumInfra.driver.sleep(2000)
        if (!(valid)) {
            console.log("Click and move to Rigth Place")
        }
        else{
            console.log("There is problem in validation")
        }
    }
        catch(error){
            console.log("problem with validation")
        }

        await seleniumInfra.close()
    }

    async advancedSearch(cakesType,ratings,inputdate,input1,input2){
        let searchArr = []

        let searchArr1 = []

        let searchArr2 = []

        await seleniumInfra.clickElement("id", "myBtn")


        for (let i in cakesType){
            if (cakesType [i] == "Chocolate"){
                await seleniumInfra.clickElement("css", 'input[value ="Chocolate"]') // another way of locating in addition to xpath
            }
            else if (cakesType [i]== "Cheese"){
                await seleniumInfra.clickElement("xpath", "//*[@id='modalBodyFormId']/div[1]/input[2]")
  
            }else if (cakesType[i]== "Mousse"){
                await seleniumInfra.clickElement("xpath", "//*[@id='modalBodyFormId']/div[1]/input[3]")
            }
            }
        //  then making a loop for each rating
        for (let a in ratings){
            if (ratings[a] == "0-3"){
                await seleniumInfra.clickElement("css","input[value='0-3']")
            }
            else if (ratings[a] == "4"){
                await seleniumInfra.clickElement("xpath", "//*[@id='modalBodyFormId']/div[2]/input[2]")
            }
            else if (ratings[a] == "5"){
                await seleniumInfra.clickElement("xpath", "//*[@id='modalBodyFormId']/div[2]/input[3]")
            }
        }



        searchArr.push(inputdate,input1,input2)

        searchArr1.push(cakesType)

        searchArr2.push(ratings)

        console.log(searchArr)

        console.log(searchArr1)

        console.log(searchArr2)

        
        await seleniumInfra.write("className", "inputDate formText", inputdate)
        await seleniumInfra.write("id", "input1" , input1)
        await seleniumInfra.write("id", "input2" , input2)
        await seleniumInfra.clickElement("id", "myBtnForm")
        let details = await seleniumInfra.getTextFromElement("className", "searchedItem")
        //let valid1 = await seleniumInfra.URLvalidation(inputdate,input1,input2)
        console.log(details)
        // searchArr.push(details) 
        // console.log(searchArr)
        // let date2 = searchArr.splice()
        // console.log(date2)
        let answ = details.split(':');
        console.log(answ)


       // let result1 = await seleniumInfra.isElementExists("xpath","//*[@id="searchModal"]/div/div[2]/div/div[2]/text()")

        //console.log(result1)

        // let newresult1 = result1.contains(``)

        // let result3 = answ[4]
    
        
        // if ((result3) === (input2)){
        //     searchArr.driver.sleep(5000)

        //     console.log("bad validation string num 3")
        // }
        // else{
        //     console.log("good validation string num 3")
        // }

        for(let y of searchArr){
            for(let x of answ){
                if(x.includes(y)){
                    console.log("true")
                    console.log(x,y)
                }
                else{
                    console.log("false")
                }

                console.log(_.intersection(answ, "doron"));

            }
        }

        // for(var i = 0; i < answ.length; i++) { 
        //     searchArr.push(parseInt(answ)); 
        //     console.log(answ[i]);

        //      }
               

            }
            
         } 



module.exports = Homepage

let test = function (){


    let m1 = new Homepage("https://cakes-automation-course.herokuapp.com/index.html");
 //   m1.search("about")
    m1.advancedSearch(["Chocolate","Mousse"],["4","5"],"25/3/1974", "doron", "cohen")
}
 
test()