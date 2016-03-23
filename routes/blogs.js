var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:blog/', function(req, res, next) {
  res.render('blogs', { title: 'Express' });
});

module.exports = router;
