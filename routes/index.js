var express = require('express');
var router = express.Router();
var request = require('request');

require('dotenv').config(); 

router.get('/', function(req, res, next) {
  var result
  res.render('home', { title: 'Git-Analyser', result });
});

router.get('/test', function(req, res, next) {
  var result
  res.render('test', { title: 'Git-Analyser', result });
});

router.get('/aboutus', function(req, res, next) {
  res.render('aboutUs', { title: 'About Us' });
});

router.post('/getProfiles', async function(req, res) { 
  console.log(req.body.keyword)
  console.log(process.env.LIST_USERS)

  var options = {
    url: process.env.LIST_USERS+req.body.keyword,
    headers: {
      'User-Agent': 'request'
    }
  };
  
  await request(options, (error, response, body)=> {
    if (!error && response.statusCode === 200) {
      const result = JSON.parse(body).items
      res.render('home', { result })
    } else {
      console.log("Got an error: ", error, ", status code: ", response.statusCode)
    }
  })
  
});

module.exports = router;
