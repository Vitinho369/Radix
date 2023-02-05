class Emocao{
    
    
    //cenário da emoção, vai ficar no fundo do jogo com o boneco do jogador
    constructor(){
        this.status = 0;    
        this.cores = {
            "triste": [color('#D8685F'), color('#D8685F')],
            "mediano": [color('#D8685F'), color('#D8685F')],
            "feliz": [color('#D8685F'), color('#D8685F')],
        }
    }

    show(){
        background(255);
    }
}