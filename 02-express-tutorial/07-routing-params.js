const express = require('express');
const { products } = require('./data');

const app = express();
  app.get('/', (req, res)=> { 
    res.send(
      `<H1> Home Page </H1> 
      <p> <a href='./api/products'> Click here </a> to view products </p>`
    )
  })

  //Route Params
  // 1. Single param (dynamic way) 
  app.get('/api/products/:ProductID', (req, res) => { // defining a custom route parameter 
    const { ProductID } = req.params; //get the route parameter 
    const filteredProduct = products.filter((product) => product.id === Number(ProductID)) // returns obj if its id === ProductID
  
    if(filteredProduct.length < 1) { // if filtered array is empty (=== product is not filtered)
      return res.status(404).send('<H1> Product does not exist. </H1>')
    }
    return res.json(filteredProduct); //send back  json
  });

  // 2. Multiple params (dynamic way)  (hardcoded version)
  // defining custom route parameters {UserID, BookName}
  app.get('/api/users/:UserID/book/:BookName', (req, res) => {
    // get params
    const { UserID, BookName } = req.params; 
    console.log(req.params);
	//send back html with the requested user id and book name
	res.send(`
		<H1> Request result: </H1>
		<p> User name: ${UserID} </p>	
		<p> Found book: ${BookName} </p>	
  `); 
});

app.listen(5000, () => {console.log('listening on port 5000')})