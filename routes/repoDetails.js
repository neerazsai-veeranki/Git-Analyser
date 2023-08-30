var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', async (req, res) => {
  console.log(req.query.id)
  console.log(req.query.repo)

  var options = {
    url: process.env.GET_REPO+req.query.id+'/'+req.query.repo,
    headers: {
      'User-Agent': 'request'
    }
  };

  await request(options, (error, response, body)=> {
    if (!error && response.statusCode === 200) {
      const result = JSON.parse(body)
      // console.log(result)
      res.render('repoDetails', { result });
    } else {
      console.log("Got an error: ", error, ", status code: ", response.statusCode)
    }
  })
});

router.get('/commits', async function(req, res, next) {
  var options = {
    url: process.env.GET_REPO+req.query.id+'/'+req.query.repo+'/commits',
    headers: {
      'User-Agent': 'request'
    }
  };

  await request(options, (error, response, body)=> {
    if (!error && response.statusCode === 200) {
      const result = JSON.parse(body)
      console.log(result)
      res.render('commits', { result });
    } else {
      console.log("Got an error: ", error, ", status code: ", response.statusCode)
    }
  })
  
});

router.get('/forks', async function(req, res, next) {
  var options = {
    url: process.env.GET_REPO+req.query.id+'/'+req.query.repo+'/forks',
    headers: {
      'User-Agent': 'request'
    }
  };

  await request(options, (error, response, body)=> {
    if (!error && response.statusCode === 200) {
      const result = JSON.parse(body)
      // console.log(result)
      res.render('forks', { result });
    } else {
      console.log("Got an error: ", error, ", status code: ", response.statusCode)
    }
  })
});

router.get('/languages', async function(req, res, next) {
  var options = {
    url: process.env.GET_REPO+req.query.id+'/'+req.query.repo+'/languages',
    headers: {
      'User-Agent': 'request'
    }
  };

  console.log(options.url)

  await request(options, (error, response, body)=> {
    if (!error && response.statusCode === 200) {
      const result = JSON.parse(body)
      // console.log(result)
      res.render('languages', { result });
    } else {
      console.log("Got an error: ", error, ", status code: ", response.statusCode)
    }
  })
});

router.get('/issues', async function(req, res, next) {
  var options = {
    url: process.env.GET_REPO+req.query.id+'/'+req.query.repo+'/issues',
    headers: {
      'User-Agent': 'request'
    }
  };

  console.log(options.url)

  await request(options, (error, response, body)=> {
    if (!error && response.statusCode === 200) {
      const result = JSON.parse(body)
      // console.log(result)
      res.render('issues', { result });
    } else {
      console.log("Got an error: ", error, ", status code: ", response.statusCode)
    }
  })
});

router.get('/pullrequests', async function(req, res, next) {

  var options = {
    url: process.env.GET_REPO+req.query.id+'/'+req.query.repo+'/pulls',
    headers: {
      'User-Agent': 'request'
    }
  };

  console.log(options.url)

  await request(options, (error, response, body)=> {
    if (!error && response.statusCode === 200) {
      const result = JSON.parse(body)
      console.log(result)
      res.render('pullrequests', { result });
    } else {
      console.log("Got an error: ", error, ", status code: ", response.statusCode)
    }
  })
});

router.get('/contributors', async function(req, res, next) {
  var options = {
    url: process.env.GET_REPO+req.query.id+'/'+req.query.repo+'/contributors',
    headers: {
      'User-Agent': 'request'
    }
  };

  console.log(options.url)

  await request(options, (error, response, body)=> {
    if (!error && response.statusCode === 200) {
      const result = JSON.parse(body)
      // console.log(result)
      res.render('contributors', { result });
    } else {
      console.log("Got an error: ", error, ", status code: ", response.statusCode)
    }
  })
});

module.exports = router;
