const mongoose = require('mongoose');

// const MONGO_URI = 'mongodb+srv://delacour124:codesmith50@cluster0.ytvxp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// mongoose.connect(MONGO_URI, {
//   // options for the connect method to parse the URI
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // sets the name of the DB that our collections are part of
//   dbName: 'plants'
//   })
//   .then(() => console.log('Connected to Mongo DB.'))
//   .catch(err => console.log(err));

  //create schema
  const Schema = mongoose.Schema;

  //create plantsSchema
  const plantsSchema = new Schema({
    name: { type: String, require: true },
    imgPath: String 
  })

  //create plants collection
  const plants = mongoose.model('Plants', plantsSchema);

  //export plantsSchema as Plants
  module.exports = {
    plants
    //may add more collections
  };