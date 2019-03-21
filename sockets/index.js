
const express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen(8080);

console.log('8080 is the magic port');

const server = require('http').createServer();

const io = require('socket.io')(server, {origins:'http://localhost:*'});

io.on('connection', socket => {

    console.log('emit');
    socket.emit('news', data => { 
        console.log(data);
    });
    
    socket.on('toto', data => {
        console.log('Event TOTO');
        console.log(data);
    });

});

server.listen(3000);
