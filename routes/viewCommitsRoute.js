// routes/viewCommitsRoute.js

const express = require('express');
const router = express.Router();

// Define the route for viewing commits
router.get('/', async function (req, res, next) {
  // Add your logic to fetch commit data here
  // For example, you can fetch data from GitHub API
  const githubUsername = req.query.id;
  const years = [2023, 2022, 2021];

  // Render the view
  res.render('viewCommitsRoute',{years}); 
  // Assuming you have a corresponding pug file named viewCommits.pug
});

module.exports = router;
