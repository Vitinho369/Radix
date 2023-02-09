const express = require("express");
const app = express();
const http = require('http').createServer(app)
const io = require('socket.io')(http)

let cont = 0;

const port = process.env.PORT || 3000;
const domain = require('./game/domain/domain');
app.use(express.static(__dirname + "/"));

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/game/pages/index/index.html');
});

app.get('/lobby', (req, res) => {
  res.sendFile(__dirname+'/game/pages/lobby/lobby.html');
});

app.get('/waiting', (req, res) => {
  res.sendFile(__dirname+'/game/pages/waiting_room/waiting_room.html');
});

app.get('/game', (req, res) => {
  res.sendFile(__dirname+'/game/pages/game/game.html');
});

let cenario = 0;

const state = {};
const clientsRooms = [];
const userRoom = {};
const idUsuario = [];
const enviaCarta = {};

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

    let clientId;

    socket.on('newGame', handleNewGame);
    socket.on('joinGame', handleJoinGame);
    socket.on('cards', handleCards);
    socket.on('jogarCarta', handleJogarCarta);


    function handleJogarCarta (carta){
      console.log(carta )
        domain.jogarCarta(carta);
        console.log(domain.getClasseAtual());
        socket.emit('jogarCarta', [domain.getClasseAtual(), domain.getJogadores()]);
    }

    function handleJoinGame(roomName) {
   
      if(clientsRooms.includes(roomName)){

        if(!userRoom[roomName]){
          userRoom[roomName] = 1;
        }else if(userRoom[roomName] <= 3){
          userRoom[roomName]++;
        }
    
      if(userRoom[roomName]  <= 3){
        socket.to(roomName).emit('cenario', userRoom[roomName]);
        socket.join(roomName);
        idUsuario.push(socket.id);
        console.log(idUsuario);
        console.log(userRoom[roomName]);
        cenario = userRoom[roomName];
        cont++;
        socket.emit("salaEstado", cont);
      }else{
        
        console.log("sala cheia");
        socket.emit("salaEstado", -1);
      }
    }else{
      console.log("Sala não existe");
    }

  
    if(userRoom[roomName] == 3){
      setTimeout(function(){
        socket.to(roomName).emit('startGame', true);
      },1000);
    }

    socket.on('disconnect', () => {
        
          userRoom[roomName]--;
          console.log(userRoom[roomName]);
          cenario = userRoom[roomName];
          if(!isNaN(userRoom[roomName]))
            socket.to(roomName).emit('cenario', userRoom[roomName]);
          else
            socket.to(roomName).emit('cenario', 0); 
      });
          
    }

    function handleCards(room){

      //if(idUsuario[socket.id] == 1){
          domain.iniciarPartida();
          let cartas = domain.getCartas();
          
          socket.emit('cards', [[clientId, enviaCarta], cartas]);  
     // }
      }
    function handleNewGame(){
      console.log("Novo jogo");
      cont = 0;
      let roomName = makeid(5);
       clientsRooms.push(roomName);
        socket.emit("gameCode", roomName);
        socket.join(roomName);
        socket.emit('cenario', cenario);
    }

    socket.emit('arraySalas', clientsRooms);

      setInterval(function(){
        socket.emit('cenario', cenario);
      }, 100);
});



http.listen(port, function(){
  console.log("Litening on port " + port);
})