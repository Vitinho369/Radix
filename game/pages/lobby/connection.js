//Novo jogo
const socket = io();

socket.emit("newGame");


var arraySalas1 = [];
socket.on("gameCode", (code) => {
    
var codeRoom = 0;

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

//Acessar sala
socket.on("arraySalas", (arraySalas) => {
    arraySalas1 = arraySalas;
});

// setInterval(() => {
socket.emit("qtdUser", code);
// }, 1); 

//Quantidade de pessoas na sala
var qtdPessoas = document.getElementById("qtdPessoas");

socket.on(code, (qtd) => {
    if(typeof(qtd) === 'number')
        qtdPessoas.innerHTML = "Quantidade de pessoas na sala: " + qtd;
    else if (qtd == 'startGame')
        window.location.href = "/game" + "?code=" + code;
 });

// qtdPessoas.innerHTML = "Quantidade de pessoas na sala: " + qtdUsers;

});


function acessarLink() {
    var code = document.getElementById("codegameinput").value;
    var acheiSala = false;
    console.log(arraySalas1);
    if (arraySalas1.includes(code)) {
        // document.getElementById("EnterGame").addEventListener("click", function () {
            let codeInput = document.getElementById("codegameinput").value;
            socket.emit('joinGame', codeInput);
            acheiSala = true;
            var url = window.location.pathname.split('index.html');
            var namePage = url.pop();
            url += '/waiting';  
            window.location.href = url + "?code=" + code;
        // });
    }

    if (acheiSala == false) {
        document.querySelector('.errorMessage').innerHTML = "Sala não encontrada";
    }
}