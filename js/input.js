const clearScreenshots = require('./screenshots.js');
const readlineSync = require("readline-sync");

module.exports = function dataEnter(){
    let anything = readlineSync.question("Type something to search: ");
    let numResults
    do {
      numResults = readlineSync.question("How results: ");  
    } while (validateInputResults(numResults));
  
    return [anything, numResults];
  }

  function validateInputResults(num){
    const regex = /[\d]{1,2}/;
    const respRegex = regex.test(num);
  
    if(respRegex){
      console.log("Wait Results...");
      return false
    }else{
      console.log("Invalid Number");
    }
    return true
  }