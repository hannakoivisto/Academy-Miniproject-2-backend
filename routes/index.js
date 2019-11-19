var express = require('express');
var router = express.Router();

var service = require('./controller');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'KESKUSTELUFOORUMI' });
});

router.get('/api/questions', function(req, res) {
  console.log('/api/questions toimii');
  service.getAllQuestions(function(results){
    res.json(results);
  });
});

router.get('/api/comments', function(req, res) {
  console.log('/api/comments toimii');
  service.getAllComments(function(results){
    res.json(results);
  });
});

module.exports = router;
