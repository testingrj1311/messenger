var express=require('express');


var app=express();
var server=require('http').createServer(app);


var port=3000;

server.listen(port,function(){
    console.log("server"+port);
    
});

var io=require('socket.io').listen(server);

app.get("/",function(req,res){
    res.sendFile(__dirname + '/index.html');
});

//to recieve events on server side
io.sockets.on("connection",function(socket){   //use to make connection with socket
   // console.log("socket connected");

    socket.on("chat",function(data){
        
        io.sockets.emit('chat',data);
        
    });

});



