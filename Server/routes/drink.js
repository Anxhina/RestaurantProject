const express = require('express');
const Drink = require('../models/drink'); 
const config = require('../config/database');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var app = express();

router.post('/', (req, res) => {
  var myData = new Drink({
      drink: req.body.drink,
      descriptiondr: req.body.descriptiondr

  });
  myData.save((err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Drink Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.get('/', (req, res) => {
  Drink.find((err, docs) => {
      if (!err) { res.send(docs); }
      else { console.log('Error in Retriving Drink :' + JSON.stringify(err, undefined, 2)); }
  });
});


router.get('/:id', (req, res) =>{
  if(!ObjectId.isValid(req.params.id))
  return res.status(400).send('error');
  Drink.findById(req.params.id, (err, doc) => {
    if(!err){res.send(doc);}
    else {
      console.log('Error')
    }
  })
})


router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No record with given id : ${req.params.id}`);

  var myData = {
      drink: req.body.drink,
      descriptiondr: req.body.descriptiondr,
   
  };
  Drink.findByIdAndUpdate(req.params.id, { $set: myData }, { new: true }, (err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.delete('/:id', (req, res) => {
  if(!ObjectId.isValid(req.params.id))
  return res.status(400).send('error');
  Drink.findByIdAndRemove(req.params.id, (err, doc) =>
  {
    if(!err){ res.send(doc);}
    else {
      console.log('erroo')
    }
  })
});

module.exports = router;
