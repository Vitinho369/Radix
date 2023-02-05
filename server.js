const express = require("express");
const app = express();
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/"));

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html');
});

let cenario = 1;

const state = {};
const clientsRooms = [];
const userRoom = {};

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}



io.on("connect", socket => {
  // console.log("New connection: " + socket.id);
  // socket.on('msg', (msg) =>{
  //   console.log(msg);
  // })

    socket.on('newGame', handleNewGame);
    socket.on('joinGame', handleJoinGame);

    function handleJoinGame(roomName) {
  

      if(clientsRooms.includes(roomName)){


        if(!userRoom[roomName]){
          userRoom[roomName] = 1;
        }else{
          userRoom[roomName]++;
        }

        socket.to(roomName).emit('cenario', userRoom[roomName]);

      if(userRoom[roomName]  < 4){
        socket.join(roomName);

        console.log(userRoom[roomName])
        socket.emit("salaEstado", "oi");
      }else{
        socket.emit("salaEstado", -1);
        console.log("sala cheia");
      }
    }else{
      console.log("Sala não existe");
    }

    }
  
    function handleNewGame(){
      let roomName = makeid(5);
       clientsRooms.push(roomName);
        socket.emit("gameCode", roomName);
        socket.join(roomName);
        socket.emit('cenario', cenario);
    }

    socket.emit('arraySalas', clientsRooms);

});



http.listen(port, function(){
  console.log("Litening on port " + port);
})