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

io.on("connect", (socket) => {
  console.log("New connection: " + socket.id);
  socket.on('msg', (msg) =>{
    console.log(msg);
  })

 

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