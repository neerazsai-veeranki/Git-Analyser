var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('fandf', { title: 'Followers and Followings Details' });
});

module.exports = router;