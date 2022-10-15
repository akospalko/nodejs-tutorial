const http = require('http');

const server = http.createServer((req, res)=>{
  if(req.url === '/') {
    res.end('Home Page');
  }
  if(req.url === '/about') {
    //Blocking code comes here:
    for(let i = 0; i < 1000; i++) {
      for(let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end('About page');
  }
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000...');
})



/* Note
//how code executes:
1. listening to port 5000 for changes.
2. if we open the home page (/), we send 'Home page' response to the port's screen
3. if we open (/about) we execute the for loop (blocking code).
4. it will block both the home page and the about page for the time of the loop is ending. 

// what is happening:
because the loop is running syncly the event loop will stop executing other for that time. 
So no other action will happen (e.g. switching to another route) until.
*/