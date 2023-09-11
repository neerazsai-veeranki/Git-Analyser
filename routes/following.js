var express = require('express');
var router = express.Router();
var request = require('request');


router.get('/', async function(req, res, next) {
  var options = {
    url: process.env.GET_USER+req.query.id+'/following',
    headers: {
      'User-Agent': 'request',
      'Authorization': `Bearer ${process.env.TOKEN}`
    }
  };

  console.log(options.url)

  await request(options, (error, response, body)=> {
    if (!error && response.statusCode === 200) {
      const result = JSON.parse(body)
      console.log(response.headers);
      // console.log(result)
      console.log(result)
      if (result === undefined) {
        result = 'following'
        console.log('here')
        res.render('emptyPage', { result });
      } else {
        console.log('there')
        res.render('following', { result });
      }
    } else {
      console.log("Got an error: ", error, ", status code: ", response.statusCode)
    }
  })
});

module.exports = router;