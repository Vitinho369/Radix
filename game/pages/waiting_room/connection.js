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
        document.getElementById("codePage").innerHTML = codeRoom;
    }
});

 //Quantidade de pessoas na sala
 var qtdUsers = 0;
 var qtdPessoas = document.getElementById("qtdPessoas");


    socket.emit("qtdUser", codeRoom);

     socket.on(codeRoom, (qtd) => {
        if(typeof(qtd) === 'number')
            qtdPessoas.innerHTML = "Quantidade de pessoas na sala: " + qtd;
        else if(qtd == 'startGame')
            window.location.href = "/game" + "?code=" + codeRoom;
            //  if(qtd == 3){
        //     setTimeout(function(){
        //         window.location.href = "/game" + "?code=" + codeRoom;
        //     }, 1000);
        // }
     });