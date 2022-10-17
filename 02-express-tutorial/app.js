const express = require('express');
const logger = require('./09.0-middleware-logger');
const app = express();


//testing middleware using app.use() -> assigning mw to all the requests

app.use(logger) // bind middleware to the app obj -> matches all requets // NOTE: placing order matters
app.use(('/api'), logger) // matches all the routes that start with /api -> e.g. /api/home , /api/products 

//route 1
app.get('/', (req, res) => { //pass middleware btw path and callback
res.status(200).send('HOME')
})
//route 2
app.get('/about', (req, res) => { 
  res.status(200).send('ABOUT')
})
//route 3
app.get('/api/products', (req, res) => { 
  res.status(200).send('PRODUCTS')
})
//route 4
app.get('/api/items', (req, res) => { 
  res.status(200).send('ITEMS')
})

app.listen(5000, () => {console.log('listening on port 5000')})

