const express = require('express');
const logger = require('./09.0-middleware-logger');
const app = express();


//testing middleware using app.use() -> assigning mw to all the requests
//route 1
app.get('/', logger, (req, res) => { //pass middleware btw path and callback
res.status(200).send('HOME')
})

//route 2
app.get('/about', logger, (req, res) => { 
  res.status(200).send('ABOUT')
})

app.listen(5000, () => {console.log('listening on port 5000')})

