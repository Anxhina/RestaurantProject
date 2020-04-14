
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const reviewSchema = new Schema({
  username: { 
    type: String
  },
  rev: {
     type: String
    }

});





module.exports = mongoose.model('Review', reviewSchema);