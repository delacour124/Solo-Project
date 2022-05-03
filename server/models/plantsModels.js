const mongoose = require('mongoose');

const MONGO_URI = '';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'plants'
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

  //create schema
  const Schema = mongoose.schema()

  //create plantsSchema
  const plantsSchema = new Schema({
    name: { type: String, require: true },
    imgPath: String 
  })

  //export plantsSchema as Plants
  module.exports = mongoose.models('Plants', plantsSchema);