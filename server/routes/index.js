'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'HackUMass' });
});

router.get('/resources', function(req, res){
  res.render('resources', { title: 'HackUMass Resources'});
});

router.get('/help', function(req, res){
  res.redirect('umass.hacksignal.io');
});


module.exports = router;
