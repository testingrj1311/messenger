
var express = require('express'), 
	io = require('socket.io'),
	app = express();

var port = 3000;
app.listen(port,function(){
    console.log("Listening server at port " + port);
    
});

app.get("/",function(req,res){
    res.sendfile("index.html");
});

io.sockets.on('connection',function(socket){
    socket.on('send message',function(data){
        io.sockets.emit('new message',data);
        
    });

});



