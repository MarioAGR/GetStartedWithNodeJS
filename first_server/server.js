var http = require('http'); //To include the http package, all http API's available to the variable

var hostname = '127.0.0.1';
var port = '8080';

var server = http.createServer(function(req, res){
    //The method createServer takes a request and response
    res.end("Helllo from our Node Server");
});

server.listen(port, hostname, function(){
    console.log('The server is running');
});