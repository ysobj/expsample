var express = require('express');
var router = express.Router();

/* GET rooms listing. */
router.get('/:room/', function(req, res, next) {
  //res.send('This room is ' + req.params.room);
  res.render('rooms', {
    roomName: req.params.room
  });
});

module.exports = router;
