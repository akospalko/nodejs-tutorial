//outsorced route with the root of '/login'
const express = require('express');
const router = express.Router();

//dummy authentication
router.post('/', (req, res) => {
  const { name } = req.body   // [Object: null prototype] {name : 'InputName'} // store name value
  if(name) {
    return res.status(200).send(`welcome home ${name}`)
  }   
 res.status(401).send('please provide credentials')
})

module.exports = router;