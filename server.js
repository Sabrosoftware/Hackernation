// ===
// Packages
// ===

var express    = require('express');
var app        = express();
var path       = require('path');
var mongoose   = require('mongoose');
var morgan     = require('morgan');
var bodyParser = require('body-parser');

var config = require('./config');





// ===
// App setup
// ===

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

app.use(morgan('dev'));

mongoose.connect(config.database);

app.use(express.static(__dirname + '/public'));



// ===
// API routes
// ===

var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes);

// ===
// Send every other path to the frontend
// ===

var index_path = '/public/app/views/index.html';

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + index_path));
});


// ===
// Server setup
// ===

app.listen(config.port);
console.log('The wizards may hack on http://localhost:' + config.port);