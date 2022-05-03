const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;

//import controller
const plantsController = './controllers/plantsController';

//connect to database here?




//parse incoming request with json
app.use(express.json());

//serve html page
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
})

//when request to '/plants', invoke controller middleware, send back response

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