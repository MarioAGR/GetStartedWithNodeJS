// Express server config, database initialization and other settings

var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/../public/views');

// Tell where static files are, called for every request
app.use(express.static(__dirname + '/../public'));

//Export a new app server, any file that imports server.js will have access to the instance of our app
module.exports = app;