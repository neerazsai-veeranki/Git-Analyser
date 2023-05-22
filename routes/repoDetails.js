var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('repoDetails');
});

router.get('/portfolio-details', function(req, res, next) {
  res.render('portfolio-details');
});

router.get('/portfolio-details-fork', function(req, res, next) {
  res.render('portfolio-details-fork');
});

module.exports = router;
