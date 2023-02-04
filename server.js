const express = require("express");
const app = express();
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/"));

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html');
});

let cenario = 0;
let ingressGame = false;

const state = {};
const clientsRooms = {};

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
    //  const room = io.sockets.adapter.rooms[roomName];
  
      // let allUsers;
      // if (room) {
      //   allUsers = room.sockets;
      // }
  
      // let numClients = 0;
      // if (allUsers) {
      //   numClients = Object.keys(allUsers).length;
      //   console.log(numClients);
      // }
  
      // if (numClients === 0) {
      //   socket.emit('unknownCode');
      //   return;
      // } else if (numClients > 2) {
      //   socket.emit('tooManyPlayers');
      //   return;
      // // }
  
      // clientRooms[socket.id] = roomName;
  
      if(cenario  < 4){
        socket.join(roomName);
        socket.emit("salaEstado", "oi");
        cenario++;
        console.log(cenario);
      }else{
        socket.emit("salaEstado", -1);
        console.log("sala cheia");
      }
      // socket.number = 2;
      // socket.emit('init', 2);
    }
  
    function handleNewGame(){
      let roomName = makeid(5);
       clientsRooms[socket.id] = roomName;
        socket.emit("gameCode", roomName);

        socket.join(roomName);
        socket.emit('cenario', cenario);
    }

  socket.on("entrarJogo", (isGame)=>{
    ingressGame = isGame;
   
  });

  if(ingressGame && cenario < 3){
    socket.emit("ingresso",cenario);
    cenario++;
  }else if( ingressGame){
       socket.emit("ingresso", -1);
   }

});



http.listen(port, function(){
  console.log("Litening on port " + port);
})