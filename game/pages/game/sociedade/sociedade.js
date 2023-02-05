class Sociedade {
    constructor() {
        this.houses = [
            [loadImage('../../../resources/sociedade/sad_city_v1.png'),
            loadImage('../../../resources/sociedade/sad_city_v1.png'),
            loadImage('../../../resources/sociedade/sad_city_v1.png')],

            [loadImage('../../../resources/sociedade/casa_n_v1.png'),
            loadImage('../../../resources/sociedade/casa_n_v2.png'),
            loadImage('../../../resources/sociedade/casa_n_v3.png')],

            [loadImage('../../../resources/sociedade/happy_city_v1.png'),
            loadImage('../../../resources/sociedade/happy_city_v2.png'),
            loadImage('../../../resources/sociedade/happy_city_v3.png')],    
        ]

        this.casas = [];

        this.status = 0;
        this.cores = [[[142, 197, 2], [254, 223, 70]],
        [[123, 155, 182], [109, 184, 121]],
        [[30, 59, 52], [142, 197, 2]],
        ];

        //gerar 10 casas aleatórias (a casa é uma posição x, y e o arquivo da house (dependendo do status))
        for (let i = 0; i < 10; i++) {
            let x = random(width);
            let y = random(height - 600);
            console.log(x, y);
            let house = this.houses[this.status][floor(Math.random() * 3)];
            this.casas.push([x, y, house]);
        }
    }

    show() {
        //desenha as casas
        for (let i = 0; i < this.casas.length; i++) {
            image(this.casas[i][2], this.casas[i][0], this.casas[i][1], 500, 500);
        }
        
        
        
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



