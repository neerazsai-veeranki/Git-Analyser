var express = require('express');
var router = express.Router();
var request = require('request');


/* GET home page. */
router.get('/', async function(req, res, next) {
  console.log(req.query.id)

  var options = {
    url: process.env.GET_USER+req.query.id+'/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `Bearer ${process.env.TOKEN}`
    }
  };

  await request(options, (error, response, body)=> {
    if (!error && response.statusCode === 200) {
      const result = JSON.parse(body)
      // console.log(result)
      res.render('viewRepos', { result });
    } else {
      console.log("Got an error: ", error, ", status code: ", response.statusCode)
    }
  })

  
});

module.exports = router;