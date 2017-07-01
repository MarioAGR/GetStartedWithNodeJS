//Request parameter is an object that contains all of the details of the http request, any route parameters
//Responde object exposes many methods for handling the responde from the server, how the data is send to the client

var core = require('./controllers/core');
var api = require('./controllers/api');

module.exports = function (app) {
    app.get('/', core.home);
    
    app.get('/top', core.top);

    app.get('/results', core.results);
    
    app.get('/api/results', api.results);
}