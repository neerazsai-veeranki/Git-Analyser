var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('viewProfile', { title: 'PROFILE' });
});

module.exports = router;
