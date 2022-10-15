//create sample data for testing streams
const { writeFileSync } = require('fs');

for(let i=0; i<100000; i++) {
  writeFileSync('./mainfolder/subfolder/big.txt', `${i}. I must not tell lies \n`, {flag: 'a'});
}

