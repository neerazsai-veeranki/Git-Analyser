var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fandf', { title: 'Followers and Followers Details' });
});

module.exports = router;