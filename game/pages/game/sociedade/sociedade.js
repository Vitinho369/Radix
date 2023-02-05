class Sociedade {
    constructor() {
        this.houses = [
            [loadImage('../../../resources/emocao/sad_clothes.png'),
            loadImage('../../../resources/emocao/clothes_neutro.png'),
            loadImage('../../../resources/emocao/clothe_happy.png')],

            [loadImage('../../../resources/emocao/sad_clothes.png'),
            loadImage('../../../resources/emocao/clothes_neutro.png'),
            loadImage('../../../resources/emocao/clothe_happy.png')],

            [loadImage('../../../resources/emocao/sad_clothes.png'),
            loadImage('../../../resources/emocao/clothes_neutro.png'),
            loadImage('../../../resources/emocao/clothe_happy.png')],    
        ]

        this.casas = [];

        this.status = 0;
        this.cores = [[[142, 197, 2], [254, 223, 70]],
        [[123, 155, 182], [109, 184, 121]],
        [[30, 59, 52], [142, 197, 2]],
        ];

        //gerar 10 casas aleatórias (a casa é uma posição x, y e o arquivo da house (dependendo do status))
        for (let i = 0; i < 10; i++) {
            let x = random(0, width);
            let y = random(0, height);
            let house = this.houses[this.status][floor(random(0, 3))];
            this.casas.push([x, y, house]);
        }
    }

    show() {
        //gera umas casas aleatórias dependendo 
        
        
        //coloca o corpo do personagem (dependendo do status) no centro da tela
        //cria a variaável offset para fazer a animação de bounce
        //let offset = 0;
        //offset = map(sin(frameCount / 10), -1, 1, -5, 5);
        //image(this.bodys[this.status], width / 2 - (this.bodys[this.status].width / 2), height / 2 - (this.bodys[this.status].height / 2.5) + offset);
        
        //let offset2 = map(sin((frameCount-6) / 10), -1, 1, -8, 8);
        //coloca a cabeça do personagem (dependendo do status) em cima do corpo do personagem com um offset levemente atrasado
        //image(this.heads[this.status], width / 2 - (this.heads[this.status].width / 2), height / 2 - (this.heads[this.status].height / 2.5) + offset2 - 550);
    }

    
}



