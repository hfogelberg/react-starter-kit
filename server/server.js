var express = require('express'),
    app = express(),
    apiRouter = express.Router(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = process.env.port || 3000,
    logger = require('morgan'),
    database = require('./config/database'),
    path = require('path'),
    jwt = require('jsonwebtoken'),
    supersecret = 'gotomexico',
    port = process.env.PORT || 3000,
    bcrypt = require('bcrypt-nodejs');

// Basic app config
app.set('port', port);
app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Handle CORS requests
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

// Hook up to the Db
mongoose.connect(database.url);
var models = require('./config/models')(mongoose, bcrypt);

require('./api')(apiRouter, models, jwt, supersecret);
app.use('/api', apiRouter);

// Default route
app.get('*', function(req, res) {
 res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(app.get('port'), function(req, res) {
  console.log('Listening on port ' + port);
});
