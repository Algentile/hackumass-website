'use strict';

var express = require('express');
var app = express();

var favicon = require('serve-favicon');
var path = require('path');

var environment = require('./config/environment.js')[process.env.NODE_ENV || 'development'];

//views and templating engine
app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine', 'ejs');

//favicon
app.use(favicon(__dirname + '/public/assets/img/favicon.ico'));

//static assets
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', require('./server/routes/index'));

var debug = require('debug')('myapp');
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
