
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

const port = 3000;

//middleware
app.use(express.json());  //built in middleware function in Express . It parses incoming JSON requests and puts the parsed data in req.body.

app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);
app.listen(port, console.log('server is listening on port:', port));