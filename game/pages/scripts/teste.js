const socket = io();


// socket.on('gameCode', handleGameCode);
socket.on('unknownCode', handleUnknownCode);
socket.on('tooManyPlayers', handleTooManyPlayers);


function handleUnknownCode(){
    alert('Unknown Game Code');
}

function handleTooManyPlayers(){
    alert('This game is already in progress');
}

function joinGame() {
    let code = document.getElementById("gameCodeInput").value;
    socket.emit('joinGame', code);

    var url = window.location.pathname.split('index.html');
    var namePage = url.pop();
    url += '/game/pages/playerRoom.html';
    window.location.href =   url + "?code=" + code;
}