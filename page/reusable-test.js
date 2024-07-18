const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');
var chai = require("chai"),
expect = chai.expect; 

async function login (user,pswd)
{
  driver = await new Builder().forBrowser('chrome').build();
  vars = {}
  let url = "https://10fastfingers.com/typing-test/indonesian";

  await driver.get(url);
  await driver.manage().window().maximize();

  // await driver.findElement(By.xpath("//a[@href='/login']")).click()
  // await driver.findElement(By.id("UserEmail"))
  // await driver.findElement(By.id("UserPassword"))
  // await driver.findElement(By.id("login-form-submit"))

  // await driver.get(url);
}

async function split_string(a) {
   
}

module.exports = {
  login: login,
  split_string:split_string
};
