'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'HackUMass' });
});

router.get('/resources', function(req, res){
  res.render('resources', { title: 'HackUMass Resources'});
});

module.exports = router;
