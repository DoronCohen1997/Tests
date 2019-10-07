const { Builder, By, Key, until } = require('selenium-webdriver');
const path = require('chromedriver').path;
const chrome = require('selenium-webdriver/chrome');
let service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);


class SeleniumInfra2 {

    constructor() {
        this.driver = new Builder().forBrowser('chrome').build();
    }

    async getURL(URL) {
        await this.driver.get(URL);
    }


    // async clickElement(locatorType = "id", locatorValue = "", element = null) {
    //     try {
    //         if (!element) {
    //             element = await driver.findElement(By[locatorType](locatorValue));
    //         }
    //         await element.click();
    //         console.log(`Clicked on element with locator ${locatorValue} and locator type ${locatorType}`)
    //     }
    //     catch (error) {
    //         console.error(`Got error while trying to click on element with locator ${locatorValue} and locator type ${locatorType}`)
    //     }
    // }


    async write(locatorType, locatorValue, input) {
        try {
            await this.driver.wait(until.elementIsVisible(this.driver.findElement(By[locatorType](locatorValue))), 5000)
            await this.driver.findElement(By[locatorType](locatorValue)).sendKeys(input)
            console.log(`success on writing element with ${locatorType} and value ${locatorValue}`)
            await this.driver.sleep(5000)

        }
        catch (error) {
            console.error(`Got error while trying to find an element with ${locatorType} and value ${locatorValue}`)
        }
    }

    async clickElement(locatorType, locatorValue) {
        try {
            await this.driver.wait(until.elementIsVisible(this.driver.findElement(By[locatorType](locatorValue))), 5000)
            await this.driver.findElement(By[locatorType](locatorValue)).click()
            console.log(`success on clicking element with ${locatorType} and value ${locatorValue}`)
            await this.driver.sleep(8000)
        }
        catch (error) {
            console.error(`Got error while trying to click an element with ${locatorType} and value ${locatorValue}`)
        }
    }

    // async writeElement(locatorType = "", locatorValue = "", input) {
    //     try {
    //         if (await driver.findElement(By[locatorType](locatorValue))) {
    //             await driver.sendKeys(input);
    //             console.log("send text to element")
    //         } else {
    //             console.log(`element not exist with locator ${locatorValue} and locator type ${locatorType}`)
    //         }
    //     }catch (error) {
    //         console.error(`Got Fatal error while trying send key to element with locator ${locatorValue} and locator type ${locatorType}`)
    //     }
    // }

    async getTextFromElement(locatorType = "", locatorValue = "") {
        try {
            let element4 = await this.driver.findElement(By[locatorType](locatorValue));
            if (element4) {
                let text = await element4.getText();
                console.log("get text from element")
                return text
            } else {
                console.log(`element not exist with locator ${locatorValue} and locator type ${locatorType}`)
            }
        }
        
        catch (error) {
            console.error(`Got Fatal error while trying to find element with locator ${locatorValue} and locator type ${locatorType}`)
        }
    }


    async clearElementfield(locatorType = "", locatorValue = "") {
        try {
            let element5 = await driver.findElement(By[locatorType](locatorValue));
            if (element5) {
                await element5.clear();
                console.log("clear element")
            } else {
                console.log(`element not exist with locator ${locatorValue} and locator type ${locatorType}`)
            }
        }
        catch (error) {
            console.error(`Got Fatal error while trying to clear element with locator ${locatorValue} and locator type ${locatorType}`)
        }
    }

    async isElementExists(locatorType = "", locatorValue = "") {
        try {
            let element3 = await this.driver.findElement(By[locatorType](locatorValue));
            if (element3) {
                console.log("element exist")
            } else {
                console.log(`element not exist with locator ${locatorValue} and locator type ${locatorType}`)
            }
        }

        catch (error) {
            console.error(`Got error while trying to find element with locator ${locatorValue} and locator type ${locatorType}`)
        }
    }


    async URLvalidation(pageName) {
        try {
            console.log(await this.driver.wait(until.urlContains(pageName), 10000))
        } catch (error) {
            console.log(error);
        }
    }

    async findElementBy(locatorType = "id", locatorValue = "", fromElement = null) {
        try {
            if (!fromElement) {
                fromElement = this.driver;
            }
            const element = await fromElement.findElement(By[locatorType](locatorValue));
            //console.log(Found an element with locator (${locator}) and locator type (${locatorType}))
            return element;
        } catch (error) {
            const reason = `Could not find an element with : locator ${locatorValue}, locatorType ${locatorType}`;
            error = new Error(reason);
            return Promise.reject(error);
        }
    }

    async findElementListBy(locatorType = "id", locatorValue = "", fromElement = null) {
        try {
            if (!fromElement) {
                fromElement = this.driver;
            }
            const elementList = await fromElement.findElements(By[locatorType](locatorValue));
            //console.log(Found list of elements with locator (${locator}) ,locator type (${locatorType}))
            await this.driver.sleep(1000)
            return elementList;
        } catch (error) {
            const reason = `Could not find a list of elements BY: locator ${locatorValue} ,locatorType ${locatorType}`;
            error = new Error(reason);
            return Promise.reject(error);
        }
    }

    async close() {
        setTimeout(() => {
            this.driver.quit()
        }, 2000)
    }

}


module.exports = SeleniumInfra2;