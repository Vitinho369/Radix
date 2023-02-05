class Card{
    constructor(index, nome, classe, imagem, pesosMinimos, pesosMaximos){
        this.index = index;
        this.nome = nome;
        this.classe = classe;
        this.imagem = imagem;
        this.pesos = this.calculaPesos(pesosMinimos, pesosMaximos);
    }

    calculaPesos(pesosMinimos, pesosMaximos){
        //gera um array de 3 posições com valores aleatórios entre os pesos mínimos e máximos
        return [Math.random() * (pesosMaximos[0] - pesosMinimos[0]) + pesosMinimos[0],
                Math.random() * (pesosMaximos[1] - pesosMinimos[1]) + pesosMinimos[1],
                Math.random() * (pesosMaximos[2] - pesosMinimos[2]) + pesosMinimos[2]];
    }
}

exports.Card = Card;