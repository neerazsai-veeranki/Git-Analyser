var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('followers', { title: 'Followers Details' });
});

module.exports = router;