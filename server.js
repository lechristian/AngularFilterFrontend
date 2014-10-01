// server.js

// modules -----------
var express         = require('express');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');

var app = express();

// config ------------
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

// routes ------------
require('./app/routes')(app);

// start app ---------
var port = process.env.PORT || 8080;

app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;
