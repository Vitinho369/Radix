class Emocao {


    //cenário da emoção, vai ficar no fundo do jogo com o boneco do jogador
    constructor() {
        this.bodys = [
            loadImage('../../../resources/characters/body1.png'),
            
        ];
        this.status = 0;
        this.cores = [[[41, 72, 92], [254, 223, 171]],
        [[216, 104, 95], [171, 146, 134]],
        [[178, 219, 241], [255, 250, 203]],
        ];
    }

    show() {
        //carrega imagem do corpo do personagem
        //background(255);
    }

    
}



