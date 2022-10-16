//import
const express = require('express');

//create server instance
const app = express();
app.get('/', (req, res)=> {
  res.status(200).send('Home page');  
})

app.get('/about', (req, res) => {
  res.status(200).send('About page');
})

app.all('*', (req, res) =>{ // matches all paths ('*') + all request methods (get,delete, etc.)
  res.status(404).send('<h1> resource not found </h1>')
})

app.listen(5000, ()=> {
  console.log('server is listening on port 5000...')
})
