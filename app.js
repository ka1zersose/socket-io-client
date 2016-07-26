//client.js
var io = require('socket.io-client');
var socket = io.connect('http://localhost:35357',
     {reconnect: true,
      transport: ['websocket'],
      pingTimeout: 100  * 1000,
      pingInterval: 40 * 1000
     }
);

function kuku(){
    socket.emit('private message', 'me', 'test msg ' + new Date());
}

socket.on('connect', function(){
    console.log('Connected!');
   //  setInterval(kuku, 1000 * 60);
});
var count = 1;
socket.on('this', function(data){
   console.log('event: ',JSON.stringify(data), count++);
   setTimeout(() => {}, 1000);
});

socket.on('disconnect', function(){
    console.log('disconnected!');
});
