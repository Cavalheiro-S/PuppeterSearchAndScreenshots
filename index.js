const path = require('path');
const fs = require('fs');
const {openAndSearchLinks} = require('./js/navigator.js');
const dataEnter = require('./js/input.js');
const { deleteScreenshots } = require('./js/screenshots.js');

async function main(){
	deleteScreenshots();
	try{
		[anything, numResults]= dataEnter();
  		await openAndSearchLinks(anything, numResults);
		console.clear();
		
	}
	catch(err){
		throw err;
	}
}

main();


