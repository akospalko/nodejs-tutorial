//here we create usecases for get, post, put, delete http methods 
//test them out with Postman api tester  

const express = require('express');
const logger = require('./09.0-middleware-logger');
const authorize = require('./09-middleware-authorize');
const app = express();

//testing multiple middlewares with app.use()
app.use([logger, authorize]);

//route 1
app.get('/', (req, res) => { //pass middleware btw path and callback
res.status(200).send('HOME')
})
//route 2
app.get('/about', (req, res) => { 
  res.status(200).send('ABOUT')
})
//route 3
app.get('/api/products', /* [authorize, logger], */ (req, res) => {  //apply multiple mws to the request
  res.status(200).send('PRODUCTS')
})
//route 4
app.get('/api/items', (req, res) => { 
  res.status(200).send('ITEMS')
})

app.listen(5000, () => {console.log('listening on port 5000')})

