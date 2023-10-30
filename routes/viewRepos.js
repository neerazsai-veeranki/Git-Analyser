var express = require('express');

var router = express.Router();

var request = require('request');

 

 

/* GET home page. */

router.get('/', async function(req, res, next) {

 

 

  var options = {

    url: process.env.GET_USER+req.query.id+'/repos',

    headers: {

      'User-Agent': 'request',

      'Authorization': `Bearer ${process.env.TOKEN}`

    }

  };

 

  await request(options, (error, response, body)=> {
    const arr = response.headers.link.split('>; rel="next",')
    const next = arr[0].substring(1, arr[0].length)
    const temp = arr[1].split('>; rel="last"')
    const last = temp[0].substring(2, temp[0].length)
    console.log(next)
    console.log(last)
    
  })
  

 

 

});

 

module.exports = router;