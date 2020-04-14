const express = require('express');
const Review = require('../models/review'); 
const config = require('../config/database');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var app = express();

router.post('/', (req, res) => {
  var myData = new Review({
      username: req.body.username,
      rev: req.body.rev

  });
  myData.save((err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Drink Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.get('/', (req, res) => {
  Review.find((err, docs) => {
      if (!err) { res.send(docs); }
      else { console.log('Error in Retriving Drink :' + JSON.stringify(err, undefined, 2)); }
  }).sort({ '_id': -1 }); 
});


router.get('/:id', (req, res) =>{
  if(!ObjectId.isValid(req.params.id))
  return res.status(400).send('error');
  Review.findById(req.params.id, (err, doc) => {
    if(!err){res.send(doc);}
    else {
      console.log('Error')
    }
  })
})



router.delete('/:id', (req, res) => {
  if(!ObjectId.isValid(req.params.id))
  return res.status(400).send('error');
  Review.findByIdAndRemove(req.params.id, (err, doc) =>
  {
    if(!err){ res.send(doc);}
    else {
      console.log('erroo')
    }
  })
});

module.exports = router;
