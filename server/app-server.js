//database config
require('./db/db-config.js');

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('../server/routes/index.js');


// Define the port to run on
app.set('port',process.env.PORT || 8000);


app.use(express.static(path.join(__dirname, '../public')));
//app.use('/node_modules', express.static(path.join(__dirname,'../node_modules')));
app.use('/bower_components', express.static(path.join(__dirname,'../bower_components')));
app.use('/client', express.static(path.join(__dirname,'../client')));




// Enable parsing of posted forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', routes);

var server = app.listen(app.get('port'), function() {
	var port = server.address().port;
	console.log('Server running on port ' + port);
});



