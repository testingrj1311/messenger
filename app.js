
var express = require('express'), 
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

var port = 3000;


io.on('connection',function(socket){
    console.log("Socket created :" + socket.id)
    socket.on('send message',function(data){
        socket.broadcast.emit('new message',data);
        
    });

});

app.get("/",function(req,res){
    console.log("entered app.get");
    res.sendfile("index.html");
});


server.listen(port,function(){
    console.log("Listening server at port " + port);
    
});







