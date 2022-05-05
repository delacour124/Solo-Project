const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;

//import controller
const plantsController = require('./controllers/plantsController');

//connect to database here?
const MONGO_URI = 'mongodb+srv://delacour124:codesmith50@cluster0.ytvxp.mongodb.net/Garden?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  // dbName: 'Garden'
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));



//parse incoming request with json
app.use(express.json());

//when request to '/', invoke controller middleware, send back response
app.get('/api', plantsController.getPlants, (req, res) => {
  console.log('im invoked');
  return res.status(200).json(res.locals.plants);
});


//serve html page
// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
// })
app.use('/api', express.static(path.resolve(__dirname, '../client')));





// app.get('/api', (req, res) => {
//   console.log('hello world invoked');
//   res.send('Hello World!');
// })







//handle all route error
app.use((req, res) => res.sendStatus(404));

//global error handler
app.use((err, req, res, next) => {
  //create a default err object
  const defarltErr = {
    log: 'error occurred in unknown middleware',
    status: 400,
    message: 'An error occurred'
  }
  //join default err object and err to make a new errorObj
  const errorObj = Object.assign({}, defarltErr, err);
  //return status code and errorObj.message
  return res.status(errorObj.status).send(errorObj.message);
});

//listen on port
app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});