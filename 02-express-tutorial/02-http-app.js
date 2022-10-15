//testing out how to handle requests with a front-end page setup 

const { readFileSync } = require('fs');
const http = require('http')

//request all the necessary files to page render
const homePage = readFileSync('./navbar-app/index.html');
const homeStyle = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
  const { url } = req;
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  }
  // styling
  else if (url === '/styles.css') { // req for a css file 
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyle)
    res.end()
  }
  else if (url === '/logo.svg') { // req for a img file 
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeImage)
    res.end()
  }
  else if (url === '/browser-app.js') { // req for a js file 
    res.writeHead(200, { 'content-type': 'file/javascript' })
    res.write(homeLogic)
    res.end()
  }
  //test routing for about page - kinda working
  else if (url === '/about.html') { 
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<H1> About page </H1>')
    res.end()
  }
  // if resource is not found: error page 
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000);
