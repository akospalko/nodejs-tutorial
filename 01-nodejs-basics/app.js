const http = require('http');
const fs = require('fs');
//create server
const myServer = http.createServer((req, res)=> {
  //read file sync (one chunk)
  // const text = fs.readFileSync('./mainfolder/subfolder/big.txt', 'utf8')
  // res.end(text);

  //read file stream (check dev tool -> network tab -> localhost -> response headers )
  const readFileStream = fs.createReadStream('./mainfolder/subfolder/big.txt', 'utf-8')
    readFileStream.on('open', () => {
      readFileStream.pipe(res);
     }) 
    readFileStream.on('error', (error) => {
      res.end(error); // send back file read error
    })
  })

  myServer.listen(5000, ()=> {console.log('listening on port 5000')});