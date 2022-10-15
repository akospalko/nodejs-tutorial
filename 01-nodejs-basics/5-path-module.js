//basics of Path module
const path = require('path');

//op specific path separator  'e.g.: \ '
const separator = path.sep; 
console.log(separator);

//join and normalize path
const joinPath = path.join('/mainFolder', 'subFolder/', 'file.txt') //pass in folders/files to join and normalize (e.g. subFolder/ -> / gets removed) 
console.log(joinPath);

//store basename(filename -> file.txt ) of a path 
const baseName = path.basename(joinPath);
console.log(baseName);

//store absolute path of a resource
const absolutePath = path.resolve(__dirname, '5-mainFolder', 'subFolder', 'file.txt');
console.log(absolutePath);