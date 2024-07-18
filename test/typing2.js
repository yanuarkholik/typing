const { Builder, By, Key, until } = require('selenium-webdriver');
var chai = require("chai"),
expect = chai.expect; 
require('chromedriver')
const loginModule = require('../page/reusable-test');

describe('typing creacker', function() {
    describe('typing', function() {
        before(async function() {
            await loginModule.login();
        })
        // after(async function() {
        //     await driver.quit();
        // })
        
        it('Typing', async function() {
            await driver.findElement(By.xpath("//button[contains(text(), 'Allow all')]")).click()

            let batas_atas = await driver.findElements(By.xpath("//span[@wordnr]"))

            // console.log(batas_atas.length)

            for(i=0; i<batas_atas.length; i++){ 
                // console.log(i)
                let get_text = await driver.wait(until.elementLocated(By.xpath(`//span[@wordnr='${i}']`))).getText()
                // console.log(get_text)
                let batas_atas_dua = get_text.split("")
                // batas_atas_dua = ["t", 'e", 'r', 'j', 'a', 'd', 'i']

                for(j=0; j<batas_atas_dua.length; j++){
                    // console.log(batas_atas_dua[j])
                    await driver.sleep(120)
                    await driver.wait(until.elementLocated(By.xpath("//input[@id='inputfield']"))).sendKeys(batas_atas_dua[j])
                }

                await driver.wait(until.elementLocated(By.xpath("//input[@id='inputfield']"))).sendKeys(" ")
            }

            await driver.sleep(86400000);

        })
    })
})