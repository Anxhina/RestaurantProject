const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Admin = require('../models/admin');
var ObjectId = require('mongoose').Types.ObjectId;
var app = express();
/* GET users listing. */
router.post('/', (req, res, next) => {
  let newAdmin = new Admin({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });
  console.log(req);

  Admin.addAdmin(newAdmin, (err, admin) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});



router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  Admin.getAdminByUsername(username, (err, admin) => {
    if(err) throw err;
    if(!admin){
      return res.json({success: false, msg: 'User not found'});
    }

    Admin.comparePassword(password, admin.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(admin.toJSON(), config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          admin: {
            id: admin._id,
            username: admin.username,
            password: admin.password,
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});

 });


  router.get('/:id', (req, res) =>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('error');
    Admin.findById(req.params.id, (err, doc) => {
      if(!err){res.send(doc);}
      else {
        console.log('Error')
      }
    })
  })
  
  
 

  module.exports = router;
