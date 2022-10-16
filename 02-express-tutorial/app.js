const express = require('express');
const path = require('path');
//initialize server
const app = express();


//set up middleware 

//you can serve all the needed files (e.g. .html .css, .svg, .js, etc.) using the static middleware
app.use(express.static('./public')); 

//alternatively you can serve files using app.get -> res.sendFile (here we serve index.html) 
/*
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
})
*/

app.get('*', (req, res) => {
  res.status(404).send('resource is not available.')
})

app.listen(5000, ()=> {
  console.log('server is listening on port 5000...')
})
