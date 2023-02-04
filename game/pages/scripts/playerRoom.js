const socket = io();


var codeRoom = window.location.toString().split("code=").pop();


socket.emit("joinGame", codeRoom);

socket.on("salaEstado", (estado)=>{
    if(estado === -1){
        console.log("Sala cheia");
    }else{
        console.log(estado);
    }
})

