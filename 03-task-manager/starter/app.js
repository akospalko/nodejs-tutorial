const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config(); // access .env contents
const notFound = require('./middleware/not-found.js'); 
const errorHandlerMiddleware = require('./middleware/error-handler.js'); 

const port = 3000;
//middleware
app.use(express.json());  //built in middleware function in Express . It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.static('./public'));
app.use(errorHandlerMiddleware);

//routes
app.get('/hello', (req, res) => {
  res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);
app.use(notFound); // if route is not found (it is matched if )

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log('server is listening on port:', port));

  } catch(err) {
    console.log(err);
  }
}

startServer(); // start server only after connected to the db.