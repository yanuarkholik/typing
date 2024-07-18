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
        after(async function() {
            await driver.sleep(600000);
            await driver.quit();
        })
        
        it('Typing', async function() {
            await driver.findElement(By.xpath("//button[contains(text(), 'Allow all')]")).click()
 
            const spans = await driver.findElements(By.xpath("//span[@wordnr]"));
            const inputField = await driver.findElement(By.xpath("//input[@id='inputfield']"));

            for (let i = 0; i < spans.length; i++) {
            const span = spans[i];
            const text = await span.getText();
            
                // for (let j = 1; j < text.length; j++) {
                //     // code
                //     console.log(j)
                // }

                console.log(text)

                // sleep
            if (i < spans.length - 1) {
                await inputField.sendKeys(' ');
            }
            }
        })
        
    })
})

