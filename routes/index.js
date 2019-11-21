var express = require('express');
var router = express.Router();

var service = require('./controller');

/* GET home page. */
router.get('/', function (req, res, next) {
  service.getAllQuestions(function (results) {
    res.json(results);
  })
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

router.put('/api/questions/:id', function (req, res) {
  service.updateQuestion(req, function () {
    res.status(200)
      .end();
  })
})

router.delete('/api/questions/:id', function (req, res) {
  service.deleteQuestion(req, res, function () {
  })
});

//Comments-osio alkaa tästä:

router.get('/api/comments', function (req, res) {
  console.log('/api/comments toimii');
  service.getAllComments(function (results) {
    res.json(results);
  });
});

router.get('/api/comments/:id', function (req, res) {
  service.getSingleComment(req, function (results) {
    res.json(results)
  });
});

router.post('/api/comments', function (req, res) {
  console.log('POST toimii')
  service.createComment(req, function () {
    res.status(201)
      .end();
  });
});

router.put('/api/comments/:id', function (req, res) {
  service.updateComment(req, function () {
    res.status(200)
      .end();
  })
})

router.delete('/api/comments/:id', function (req, res) {
  service.deleteComment(req, res, function () {
  })
});

module.exports = router;
