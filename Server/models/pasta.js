
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const pastaSchema = new Schema({
  pasta: { 
    type: String
  },
  descriptionp: {
     type: String
    }

});





module.exports = mongoose.model('Pasta', pastaSchema);