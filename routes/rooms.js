var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var comments;

mongodb.MongoClient.connect('mongodb://localhost:27017/expsample',function(err,db){
  comments = db.collection('comments');
});

/* GET rooms listing. */
router.get('/:room/', function(req, res, next) {
  console.log('rooms');
  //res.send('This room is ' + req.params.room);
  comments.find().toArray(function(err,comments){
    console.log(comments);
    res.render('rooms', {
      roomName: req.params.room
    });
  });
});

module.exports = router;
