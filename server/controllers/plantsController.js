//require plants model
// const { nextTick } = require('process');
const models = require('../models/plantsModels.js')

//create const plantsController set as empty object
const plantsController = {};

//middleware getPlants, find all docs from databse garden collection plants(models.Plants)
plantsController.getPlants = (req, res, next) => {
  models.Plants.find({})
    .then(data => {
      console.log(data);
      res.locals.plants = data;
      return next();
    })
    .catch(err => next({
      log: `Error occured in plantsController.getPlants middleware, ERROR: ${err}`,
      message: "can not get plants"
    }));
};

// plantsController.sayHi = (req, res, err) => {
//   console.log('sayHi invoked');
//   res.locals.hi = "hi";
//   return next();
// }

//exports plantsController
module.exports = plantsController;