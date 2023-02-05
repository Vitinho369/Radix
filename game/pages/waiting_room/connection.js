//Novo jogo
const socket = io();

var codeRoom = window.location.toString().split("code=").pop();

socket.emit("joinGame", codeRoom);

socket.on("salaEstado", (estado)=>{
    if(estado === -1){
        //esperar 1 segundo e redireciona para a tela inicial
        setTimeout(function(){
            window.location.href = "/";
        }, 1000);
    }else{
        document.getElementById("codePage").innerHTML = code;
    }
})

//Quantidade de pessoas na sala
var qtdUsers = 0;
var qtdPessoas = document.getElementById("qtdPessoas");

setInterval(function () {
    socket.on("cenario", (qtd, codeRoom) => {
        qtdUsers = qtd;
    });
    qtdPessoas.innerHTML = "Quantidade de pessoas na sala: " + qtdUsers;
}, 1000);