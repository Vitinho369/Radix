var readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

  
const domain = require('./game/domain/domain');

console.log('RADIX - Jogo de cartas');

console.log('Iniciando o jogo...');

domain.iniciarPartida();

while(!domain.fimDeJogo()){
    let cartas = domain.getCartas();
    console.log('Classe atual: ' + domain.getClasseAtual());
    console.log('Estas são as suas cartas...');
    for (let i = 0; i < cartas.length; i++) {
        console.log(i + ' - ' + cartas[i].nome);
        console.log('   ' + cartas[i].pesos[0] + ' ' + cartas[i].pesos[1] + ' ' + cartas[i].pesos[2]);
    }
    
    // readline.question("Escolha sua carta: ", (input) => {
    //     domain.jogarCarta(cartas[input])
    //     console.log('Você jogou a carta ' + cartas[input].nome);
    // });

        
    let jogadores = domain.getJogadores();
    console.log('Jogador 1: ' + jogadores[0]);
    console.log('Jogador 2: ' + jogadores[1]);
    console.log('Jogador 3: ' + jogadores[2]);

    console.log('Fim de rodada');
}

console.log('A partida acabou!');
let jogadores = domain.getJogadores();
console.log('Jogador 1: ' + jogadores[0]);
console.log('Jogador 2: ' + jogadores[1]);
console.log('Jogador 3: ' + jogadores[2]);