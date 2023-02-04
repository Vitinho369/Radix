

// const socket = io();

// socket.emit("entrarJogo", true);


// socket.on("ingresso", (ingress) =>{
//     if(ingress == -1){
//         document.getElementById("canvas").innerHTML = "Acesso negado";
//     }else{
//         if(ingress == 0){
//             document.getElementById("canvas").style.backgroundColor = "red";
//             document.getElementById("canvas").style.width = "100px";
//             document.getElementById("canvas").style.height = "100px";
//         }else if(ingress == 1){
//             document.getElementById("canvas").style.backgroundColor = "blue";
//             document.getElementById("canvas").style.width = "100px";
//             document.getElementById("canvas").style.height = "100px";
//         }else if(ingress == 2){
//             document.getElementById("canvas").style.backgroundColor = "green";
//             document.getElementById("canvas").style.width = "100px";
//             document.getElementById("canvas").style.height = "100px";
//         }
//     }
// });

const socket = io();

socket.emit("newGame");
//inicia o jogo


socket.on("gameCode", (code)=>{
    
document.getElementById("codePage").innerHTML = "Código da sala: " + code;
});