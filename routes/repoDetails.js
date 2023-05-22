var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('repoDetails');
});

router.get('/commits', function(req, res, next) {
  res.render('commits');
});

router.get('/forks', function(req, res, next) {
  res.render('forks');
});

router.get('/languages', function(req, res, next) {
    res.render('languages');
});

router.get('/issues', function(req, res, next) {
    res.render('issues');
});

router.get('/pullrequests', function(req, res, next) {
    res.render('pullrequests');
});

router.get('/contributors', function(req, res, next) {
    res.render('contributors');
});

module.exports = router;
