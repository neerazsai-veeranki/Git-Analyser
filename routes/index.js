var express = require('express');
var router = express.Router();
var request = require('request');

require('dotenv').config(); 

router.get('/', function(req, res, next) {
  res.render('home', { title: 'Git-Analyser' });
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
      const result = JSON.parse(body)
      console.log("Got a response: ", result.items)
    } else {
      console.log("Got an error: ", error, ", status code: ", response.statusCode)
    }
  })

  res.redirect('/viewProfile')
});

module.exports = router;
