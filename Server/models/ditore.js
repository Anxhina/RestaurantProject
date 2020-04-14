
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const ditoreSchema = new Schema({
  food: { 
    type: String
  },
  description: {
     type: String
    }

});





module.exports = mongoose.model('Ditore', ditoreSchema);