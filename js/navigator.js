const puppeteer = require('puppeteer');
const {takeScreenshot} = require('./screenshots.js');

async function openAndSearchLinks(anything, indice){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
  
    // Take a var write for the user and put in textbox google
    await page.type(".gLFyf.gsfi", anything);
    await page.keyboard.press("Enter");
    await page.waitForNavigation();
    const results = await page.$$(".g .yuRUbf > a");
    openLinks(indice, browser,results)
    
  }

async function openLinks(indice,browser,results){
    for(let i = 1; i<= indice; i++){
        const page = await browser.newPage();
        const link = await(await results[i].getProperty("href")).jsonValue();
        await page.goto(link);
        await takeScreenshot(page,i);
    }
}


  module.exports = {openAndSearchLinks}
