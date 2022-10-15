// async read, write and update files in a sync way
const { readFile, writeFile, read } = require("fs");

//async read/write files with "callback hell"
readFile('./6-main/sub/first.txt', 'utf8', (error, result) => {
  if(error) {
    console.log(error);
    return;
  }
  const first = result;
  readFile('./6-main/sub/second.txt', 'utf8', (error, result) => {
    if(error) {
      console.log(error);
      return;
    }
    const second = result;
    writeFile('./6-main/sub/merged_async.txt', `Async merged result: ${first}, ${second}`, (error, result) => {
      if(error) {
        console.log(error);
        return;
      }
      console.log('writing is finished.')
      console.log('callback ends.')

    });
  })
}) 