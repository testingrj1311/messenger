

var express = require('express'), 
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

var port = 3000;


io.sockets.on('connection', function(socket){
    console.log("Socket created :" + socket.id)
    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
        
    });

});

app.get("/",function(req,res){
    console.log("entered app.get");
    res.sendFile(__dirname + '/index.html');
});


server.listen(port,function(){
    console.log("Listening server at port " + port);
    
});
