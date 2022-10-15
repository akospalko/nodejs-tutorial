//testing out async behaviour of the event loop: reading files
const { readFile } = require('fs');

//1.log
console.log('starting current task.');
//read text file
const textContent = readFile('./9-mainFolder/text.txt', 'utf-8', (err,req) => {
if(err) {
  console.log(err);
} else {
  //2.log
  console.log(req);
  //3.log
  console.log('completed current task.');
}

})   

//4.log
console.log('next task.');


/* Note:
orde of execution:
1. - blocking code
4. - bc
2,3 - non-bc


process:
1. blocking code runs first(1. and 4.logs) 
2. non blocking code gets offloaded by the event loop. Readfile's callback runs next (2. and 3. logs) 
*/