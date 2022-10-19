//create usecases for get, post, put, delete http methods 
//test them out with Postman api tester  
const express = require('express');
const people = require('./routes/people');
const auth = require('./routes/auth');
const app = express();

//load static assets
app.use(express.static('./methods-public'))
//parse form data (name value)
app.use(express.urlencoded({extended:false}))
// parse json
app.use(express.json())

//routes
app.use('/api/people', people)
app.use('/login', auth)

//listener
app.listen(5000, () => {console.log('listening on port 5000...')})