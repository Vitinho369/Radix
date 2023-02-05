class Emocao {
    constructor() {
        this.bodys = [
            loadImage('../../../resources/emocao/sad_clothes.png'),
            loadImage('../../../resources/emocao/clothes_neutro.png'),
            loadImage('../../../resources/emocao/clothe_happy.png'),
        ];

        this.heads = [
            loadImage('../../../resources/emocao/sad_head.png'),
            loadImage('../../../resources/emocao/neutra_head.png'),
            loadImage('../../../resources/emocao/happy2_head.png'),
        ];

        this.status = 0;
        this.cores = [[[41, 72, 92], [254, 223, 171]],
        [[216, 104, 95], [171, 146, 134]],
        [[178, 219, 241], [255, 250, 203]],
        ];
    }

    show() {
        //coloca o corpo do personagem (dependendo do status) no centro da tela
        //cria a variaável offset para fazer a animação de bounce
        let offset = 0;
        offset = map(sin(frameCount / 10), -1, 1, -5, 5);
        image(this.bodys[this.status], width / 2 - (this.bodys[this.status].width / 2), height / 2 - (this.bodys[this.status].height / 2.5) + offset);
        
        let offset2 = map(sin((frameCount-6) / 10), -1, 1, -8, 8);
        //coloca a cabeça do personagem (dependendo do status) em cima do corpo do personagem com um offset levemente atrasado
        image(this.heads[this.status], width / 2 - (this.heads[this.status].width / 2), height / 2 - (this.heads[this.status].height / 2.5) + offset2 - 550);
    }

    
}



