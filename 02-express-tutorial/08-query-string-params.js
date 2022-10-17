const express = require('express');
const { products } = require('./data');

const app = express();
  app.get('/', (req, res)=> { 
    res.send(
      `<H1> Home Page </H1> 
      <p> <a href='./api/products'> Click here </a> to view products </p>`
    )
  })

  //Query String Params
  app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query; // access query params (typed into the browser's url bar after '?')
    let sortedProducts = [...products]; // contains all the products (this is the default value if no query params applied)

    if(search) { // search in obj's name value
      sortedProducts = sortedProducts.filter((product) => { 
        //filter by name's value: if search === name -> get current obj
        product.name.startsWith(search) 
      })
    }
    if(limit) { // max amount of objs to display
      sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length < 1) {
      return res.status(200).json({success: true, data: [ 'empty' ]}) // use return so next response action won't execute
      // return res.status(200).send('No products matched your search. ')
    }
    res.status(200).json(sortedProducts); // you don't have to use return here because there is no more code that runs after this response
  }) 
  
  app.listen(5000, () => {console.log('listening on port 5000')})

