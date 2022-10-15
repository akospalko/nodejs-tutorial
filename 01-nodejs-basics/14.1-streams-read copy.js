const { createReadStream } = require('fs');

//create stream 
const myFirstStream = createReadStream('./mainfolder/subfolder/big.txt', {highWaterMark: 250000}); // control buffer size -> max chunk size (the last remainder chunk could be smaller in isze)  
//const myFirstStream = createReadStream('./mainfolder/subfolder/big.txt', {encoding: 'utf-8'});  //max chunk size (the last remainder chunk could be smaller in isze)  

//get data from data in chunks 
myFirstStream.on('data', (chunk)=> {
  console.log(chunk);
}) // call emitter on stream

//check for error msg while reading data (e.g. a wrong fpath)
myFirstStream.on('error', (error) => {
  console.log('OPS, error happened:', error);
})