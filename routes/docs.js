var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:doc/', function(req, res, next) {
  res.render('docs', { title: 'Express' });
});

module.exports = router;
