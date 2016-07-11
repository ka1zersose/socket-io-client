//client.js
var io = require('socket.io-client');
var socket = io.connect('http://localhost:8086', {reconnect: true});

function kuku(){
    socket.emit('private message', 'me', 'test msg ' + new Date());
}

socket.on('connect', function(){
    console.log('Connected!');
    setInterval(kuku, 4000);
});
socket.on('this', function(data){
    console.log('event: ' + JSON.stringify(data));
});

socket.on('disconnect', function(){
    console.log('disconnected!');
});
