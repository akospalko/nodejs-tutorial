//http module intro: set up a primitive webserver 
const http = require('http');

// create a server instance
const server = http.createServer((req, res) => {
  //check the url of the request body ( coming from the front end) 
  if(req.url === '/') {// if we are on the home page
    res.end('hello from the home page'); // ends the response process, sending back response data
  }
  if(req.url === '/about') {
    res.end('hello from the about page'); // if req was sent from the about resource(page)
  }

  //if resource is not found: show error pg -> ability to navigate back to home pg
  res.end(` 
  <h1> Error!!! </h1> 
  <p> The requested resource was not found Navigate. Navigate to
  <a href='/'> Home Page </a>
  </p>
  `
  )

  //res.write('hello from the server'); // sends a chunk of the resp body
  // res.end(); // ends the response process, sending back response data

}) 

//listen to a specific port
server.listen(5000);