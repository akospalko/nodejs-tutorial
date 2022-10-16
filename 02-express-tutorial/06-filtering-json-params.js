const express = require('express');
const { products } = require('./data');

const app = express();
  app.get('/', (req, res)=> { 
    res.send(
      `<H1> Home Page </H1> 
      <p> <a href='./api/products'> Click here </a> to check resources </p>`
    )
  })
  //return filtered out json
  app.get('/api/products', (req, res) => {
    const filteredData = products.map(product => { 
      const { id, name, image } = product; 
      return {id, name, image} 
    });
    res.json(filteredData); // send back filtered obj as json
  })

app.listen(5000, () => {console.log('listening on port 5000')})