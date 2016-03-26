
var express = require('express');
var path = require('path');
var http = require('http');

const PORT = 3000;

var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);

server.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}`)
})


app.use(exprees.static(path.join(__dirname,'public')));

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/broadcast', function(req, res) {
  io.emit('broadcast message', new Date() );

  res.send();
});


var history =[];

io.on('connection', function(socket) {
  console.log('a client has connected!');

  //socket is the connection to ONE client

  socket.on('new message', function(message) {
    // console.log('message:', message);
    history.push(message);
    io.emit('message', 'message!');
  });
});