
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const meatSchema = new Schema({
  meat: { 
    type: String
  },
  descriptionm: {
     type: String
    }

});





module.exports = mongoose.model('Meat', meatSchema);