//read file asynchronously with promises using .then().catch && async/await
const { readFile, writeFile } = require('fs').promises; //creates a promise???
/*
const util = require('util');
//creating a readFile promise using util.promisify
const readFilePromise = util.promisify(readFile);
//creating a writeFile promise using util.promisify
const writeFilePromise = util.promisify(writeFile);
*/

//creting promise using the Promise keyword
/*
const getText = async (path) => { // returning a rejected/resolved promise
  return new Promise((reject, resolve) => {
    readFile(path, 'utf-8', (err, data) => {
      if(err){
        reject(err); // if we have an error, we reject the promise , pass err value
      } else {
        resolve(data); // if success, resolve promise, return data
      }
    })
  })
}
*/

//using async/await
//read file using promisify
// const processFile = async () => {
//   try{
//     const first = await readFilePromise('./11-promise/first.txt', 'utf-8'); //resolvin promise: it works.
//     const second = await readFilePromise('./11-promise/second.txt', 'utf-8');  
//     console.log(first, second);  
//     writeFilePromise('./11-promise/merged.txt', `merged first.txt and second.txt: ${first} ${second}`);
//     console.log('writing file was succesful.');
//   } catch (error) {
//     console.log( 'ops:', error)
//   }
// }

const processFile = async () => {
  try {
    const first = await readFile('./11-promise/first.txt', 'utf-8')
    const second = await readFile('./11-promise/second.txt', 'utf-8')
    console.log(first, second);
    await writeFile('./11-promise/merged.txt', `appended data: ${first} ${second} \n`, {flag: 'a'}) //append to file
  } catch(error) {
    console.log('oopsi', error);  
  }
}

processFile();

/*
const getText = async (path) => { // returning a rejected/resolved promise
  return new Promise((reject, resolve) => {
    readFile(path, 'utf-8', (err, data) => {
      if(err){
        reject(err); // if we have an error, we reject the promise , pass err value
      } else {
        resolve(data); // if success, resolve promise, return data
      }
    })
  })
}
*/

//.then().catch()
// getText('./11-promise/second.txt')
// .then(err => console.log(err)) // if promise is rejected
// .catch(result => console.log(result)) // if promise is resolved
