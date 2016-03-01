var express = require('express');
var router = express.Router();

/* GET rooms listing. */
router.get('/:room/', function(req, res, next) {
  res.send('this room is ' + req.params.room);
});

module.exports = router;
