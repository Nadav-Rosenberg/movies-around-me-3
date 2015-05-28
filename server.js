var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var port = process.env.PORT || 3000

app.get('/', function(request, response){
 response.sendFile(path.join(__dirname+'/index.html'));
});

server.listen(port, function(){
 console.log("Server listening on port " + port);
});

app.use(express.static(path.join(__dirname, 'public')));

module.exports = server;