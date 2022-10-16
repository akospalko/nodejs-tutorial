const express = require('express');
const { products } = require('./data');

const app = express();
  app.get('/', (req, res)=> { 
  // res.json([{name: 'Juliska'}, {name: 'Jancsika'}]) // sends a response with json content type
  res.json(products) //get data from other another module 
  })
app.listen(5000, () => {console.log('listening on port 5000')})