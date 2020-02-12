var fs = require('fs');
var jsonfile = require('jsonfile')
// var Promise = require('promise');

class File{
	constructor(fileName){
		this.fileName = fileName;
	}

	write(content){
		let promise = new Promise((resolve,reject) =>{
			fs.writeFile(this.fileName, content, function (err) {
				if (err){
					reject(err);
				}else{					
					resolve(true);				
				}				
			}); 
		});
		promise.then((sucess) => {
			if(sucess){
				console.log('Saved sucessfully!');
			}
		})
		.catch((err) => {
			throw err;
		})		
	}

	writeJson(content){

		let promise = new Promise((resolve,reject) =>{
			jsonfile.writeFile(this.fileName, content, function(err) {
				if (err){
					reject(err);
				}else{					
					resolve(true);				
				}
			});
		});
		promise.then((sucess) => {
			if(sucess){
				console.log('Saved sucessfully!');
			}
		})
		.catch((err) => {
			throw err;
		})
		
	}

	readLine(){
		let readContent = fs.readFileSync(this.fileName).toString().split('\n');
		return readContent;		
		// return Promise.resolve(readContent);
	}

	read(){
		let readContent = fs.readFileSync(this.fileName).toString();
		return readContent;

		// fs.readFile(this.fileName, function(err, data) {
		// 	return Promise.resolve(data);
		// });
	}
	readOrigin(){
		let readContent = fs.readFileSync(this.fileName);
		return readContent;
	}

	readToJson(){
		let readContent = JSON.parse(fs.readFileSync(this.fileName));		
		return readContent;
	}

	append(content){
		fs.appendFileSync(this.fileName, content);
		// fs.appendFileSync(this.fileName, content, function (err) {
		// 	if (err) throw err;
		// 	console.log('Updated!');
		// }); 
	}
}

module.exports.File = File;