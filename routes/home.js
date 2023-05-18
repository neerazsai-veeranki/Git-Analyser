var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.post('/getProfiles', function(req, res) { 
  console.log(req.body.keyword)
});

module.exports = router;
