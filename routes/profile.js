var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', async function(req, res, next) {
  console.log(req.query.id)

  var options = {
    url: process.env.GET_USER+req.query.id,
    headers: {
      'User-Agent': 'request',
      'Authorization': `Bearer ${process.env.TOKEN}`
    }
  };

  console.log(options)

  await request(options, (error, response, body)=> {
    if (!error && response.statusCode === 200) {
      const result = JSON.parse(body)
      // console.log(result)
      res.render('viewProfile', { result })
    } else {
      console.log("Got an error: ", error, ", status code: ", response.statusCode)
    }
  })

});

module.exports = router;
