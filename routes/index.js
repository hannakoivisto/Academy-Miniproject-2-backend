var express = require('express');
var router = express.Router();

var service = require('./controller');

/* GET home page. */
router.get('/', function (req, res, next) {
  service.getAllQuestions(function (results) {
    res.json(results);
  })
  // res.render('index', { title: 'KESKUSTELUFOORUMI' });
});

router.get('/api/questions', function (req, res) {
  console.log('/api/questions toimii');
  service.getAllQuestions(function (results) {
    res.json(results);
  });
});

router.get('/api/questions/:id', function (req, res) {
  service.getSingleQuestion(req, function (results) {
    res.json(results)
  });
});

router.post('/api/questions', function (req, res) {
  console.log('POST toimii')
  service.createQuestion(req, function () {
    res.status(201)
      .end();
  });
});

//PUT tähän jos ehtii

router.delete('/api/questions/:id', function (req, res) {
  service.deleteQuestion(req, res, function () {
  })
});

router.get('/api/comments', function (req, res) {
  console.log('/api/comments toimii');
  service.getAllComments(function (results) {
    res.json(results);
  });
});

module.exports = router;
