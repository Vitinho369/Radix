// const { Domain } = require('domain');

// Configurações do jogo
escala = 60;


let jogadores = [0, 0, 0];

let deck = [];

let classes = ['natureza', 'emoção', 'sociedade'];
let classeAtual = 0;


// const Card = require('./game/domain/card').Card;


module.exports = {
    iniciarPartida: function() {
        jogadores = [Math.random() * escala, Math.random() * escala, Math.random() * escala];
        deck = carregarDeck();
    },

    getClasseAtual: function(){
        return classes[classeAtual];
    },

    getCartas: function() {
        let cartas = [];
        
        
        let cartasClasse = deck.filter(item => item.classe.includes(classes[classeAtual]));

        for(let i = 0; i < 3; i++){
            let index = Math.floor(Math.random() * cartasClasse.length);
            cartas.push(cartasClasse[index]);
            cartasClasse.splice(index, 1);
        }

        return cartas;
    },

    getJogadores: function(){
        return jogadores;
    },

    //aplica os pesos da carta em todos os jogadores
    jogarCarta: function(carta){
        let pesos = carta.pesos();
        jogadores[0] += pesos[0];
        jogadores[1] += pesos[1];
        jogadores[2] += pesos[2];

        classeAtual = (classeAtual + 1) % classes.length;
    },

    fimDeJogo: function(){
        let diferenca = Math.abs(jogadores[0] - jogadores[1]);
        diferenca = Math.max(diferenca, Math.abs(jogadores[1] - jogadores[2]));
        diferenca = Math.max(diferenca, Math.abs(jogadores[2] - jogadores[0]));
        return diferenca <= 10;
    }

}

//Função para carregar o deck com as cartas do json em objetos Card
function carregarDeck(){
    deck = [];
    let fs = require('fs');
    let cartas = JSON.parse(fs.readFileSync('./game/domain/deck.json', 'utf8'));
    cartas.forEach(function(item, index){
        deck.push(new Card(index, item.nome, item.classe, item.imagem, item.pesosMinimos, item.pesosMaximos));
    });
    return deck;
}
