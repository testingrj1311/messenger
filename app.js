
var express=require('express');


var app=express();
var server=require('http').createServer(app);


var port=3000;

server.listen(port,function(){
    console.log("server"+port);
    
});

var io=require('socket.io').listen(server);

app.get("/",function(req,res){
    res.sendfile("index.html");
});

io.sockets.on('connection',function(socket){
    socket.on('send message',function(data){
        io.sockets.emit('new message',data);
        
    });

});







