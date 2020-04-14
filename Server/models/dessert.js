
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const dessertSchema = new Schema({
  dessert: { 
    type: String
  },
  descriptiond: {
     type: String
    }

});





module.exports = mongoose.model('Dessert', dessertSchema);