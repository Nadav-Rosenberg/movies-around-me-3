var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);

app.get('/', function(request, response){
 response.sendFile(path.join(__dirname+'/index.html'));
});

server.listen(3000, function(){
 console.log("Server listening on port 3000");
});

app.use(express.static(path.join(__dirname, 'public')));

module.exports = server;