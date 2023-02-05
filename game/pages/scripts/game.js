const socket = io();

socket.emit("newGame");
//inicia o jogo


socket.on("gameCode", (code)=>{
    
document.getElementById("codePage").innerHTML = "Código da sala: " + code;
});