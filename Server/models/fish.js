
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const fishSchema = new Schema({
  fish: { 
    type: String
  },
  descriptionf: {
     type: String
    }

});





module.exports = mongoose.model('Fish', fishSchema);