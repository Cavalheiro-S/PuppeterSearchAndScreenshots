const fs = require('fs');
const fsPromisse = require('fs/promises');
const path = require('path');

numScreenshots = 0;
function takeScreenshot(page,i){
	try{
		page.screenshot({path:`./screenshots/screenshot${i}.png`, fullPage:true})
    	.then(() => {
      		numScreenshots ++;
      		console.log(`${numScreenshots} screenshot taked`)}); 
	}catch(err){
		throw err;
	}
  }

async function deleteScreenshots(){
	try{
		let pictures = [];
		const picturesDir = await fsPromisse.readdir("./screenshots");
 		picturesDir.forEach(e =>{
			pictures.push(e);
	 	})
		pictures.forEach(e =>{
			fs.unlink(`./screenshots/${e}`,err =>{
				if(err){
					throw err;
				}
		});
	})
	}catch(err){
		throw err;
	}
}

module.exports = {takeScreenshot, deleteScreenshots}