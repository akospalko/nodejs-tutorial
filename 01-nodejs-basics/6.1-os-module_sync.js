// read, write and update files in a sync way
const { readFileSync, writeFileSync, writeFile } = require('fs');

const readFirstFile = readFileSync('6-main/sub/first.txt', 'utf-8'); // readFileSync params: path to access file , encoding
const readSecondFile = readFileSync('6-main/sub/second.txt', 'utf-8');
console.log(readFirstFile, readSecondFile);

//create (if non existent) | (over)write file (if existent)
writeFileSync('6-main/sub/merged.txt',` Merged result: ${readFirstFile}, ${readSecondFile}`); // params: path+filename (if filename exists -> overwrites file else creates file), 'text to write'
//append
writeFileSync('6-main/sub/merged.txt', ` This is a merged sentence `, {flag: 'a'});
