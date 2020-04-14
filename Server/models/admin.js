const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const Schema = mongoose.Schema; 
const adminSchema = new Schema({
  username: { 
    type: String
  },
  email: {
    type: String
   },
  password: {
     type: String
    }

});


const Admin = module.exports = mongoose.model('Admin', adminSchema);
module.exports.getAdminById = function(id, callback){
    const query = {id: id}

    Admin.findById(id, callback);
  }

module.exports.addAdmin = function(newAdmin, callback){
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newAdmin.password, salt, (err, hash) => {
        if(err) throw err;
        newAdmin.password = hash;
        newAdmin.save(callback);
      });
    });
  }

  module.exports.getAdminByUsername = function(username, callback){
    const query = {username: username}
    Admin.findOne(query, callback);
  }
  

  module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
      if(err) throw err;
      callback(null, isMatch);
    });
  }
