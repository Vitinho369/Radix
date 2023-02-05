//Novo jogo
const socket = io();

socket.emit("newGame");


var codeRoom = 0;

socket.on("gameCode", (code) => {
    document.getElementById("codePage").innerHTML = code;
    codeRoom = code;
    var url = window.location.pathname.split('index.html');
    var namePage = url.pop();

    namePage = window.location.href.split(namePage);
    url += namePage[0] + '/waiting';
    url += "?code=" + code;

    document.getElementById("linkPage").addEventListener("click", function () {
        const tempInput = document.createElement("input");
        tempInput.style = "position: absolute; left: -1000px; top: -1000px";
        tempInput.value = url;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    });

    
    socket.emit("joinGame", code);
});
//Acessar sala
var arraySalas1 = [];
socket.on("arraySalas", (arraySalas) => {
    arraySalas1 = arraySalas;

});

function acessarLink() {
    var code = document.getElementById("codegameinput").value;
    var acheiSala = false;

    if (arraySalas1.includes(code)) {
        document.getElementById("EnterGame").addEventListener("click", function () {
            let code = document.getElementById("codegameinput").value;
            socket.emit('joinGame', code);

            var url = window.location.pathname.split('index.html');
            var namePage = url.pop();
            url += '/waiting';
            window.location.href = url + "?code=" + code;
            acheiSala = true;
            console.log("entrei na sala:");
        });
    }

    if (acheiSala == false) {
        document.querySelector('.errorMessage').innerHTML = "Sala não encontrada";
    }
}


//Quantidade de pessoas na sala
var qtdUsers = 0;
var qtdPessoas = document.getElementById("qtdPessoas");

setInterval(function () {
    socket.on("cenario", (qtd) => {
        qtdUsers = qtd;
        
    });
    qtdPessoas.innerHTML = "Quantidade de pessoas na sala: " + qtdUsers;
}, 1);

socket.on('startGame', () => {
    
    setTimeout(function(){
         window.location.href = "/game";
        }, 1000);
});