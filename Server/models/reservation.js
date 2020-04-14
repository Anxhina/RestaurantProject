
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const reservationSchema = new Schema({
    time: { 
        type: String
      },
      date: {
         type: String
        },
        number: { 
            type: String
          },
          specification: {
             type: String
            },

            name: { 
                type: String
              },
              persons: {
                 type: String
                }
        

});





module.exports = mongoose.model('Reservation', reservationSchema);