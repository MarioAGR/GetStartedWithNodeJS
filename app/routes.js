//Request parameter is an object that contains all of the details of the http request, any route parameters
//Responde object exposes many methods for handling the responde from the server, how the data is send to the client

var core = require('./controllers/core');

module.exports = function (app) {
    app.get('/', core.home);
    
    app.get('/top', core.top);

    app.get('/results', function (req, res) {
        res.send('This is the results page');
    });
    
    app.get('/api/results', function (req, res) {
        res.json({message: 'This is the API page'});
    });
}