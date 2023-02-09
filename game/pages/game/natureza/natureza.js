class Natureza{
    //cenário da emoção, vai ficar no fundo do jogo com o boneco do jogador
    constructor(){
        this.status = 0;
        this.cores = [[[142, 197, 2], [206, 237, 54]],
        [[233, 238, 199], [109, 184, 121]],
        [[30, 59, 52], [59, 118, 69]],
        ];

        this.tronco = [
            loadImage('../../../resources/natureza/tronco_happy.png'),
            loadImage('../../../resources/natureza/tronco_happy.png'),
            loadImage('../../../resources/natureza/troco_sad.png'),
        ]

        this.angle = 0;

        this.folha = loadImage('../../../resources/natureza/folha.png');
    }

    show() {
        this.status = 1;
        if(this.status != 2){
            let x = width/2;
        let y = height/2+120;
        if(this.status == 1){
            tint(216, 104, 95, 126);
        }else{
            noTint();
        }
        let offset = map(sin((frameCount-6) / 25), -1, 1, 0, 0.004);        
        push();
        translate(x, y);
        rotate(PI/(0.65 + offset));
        // console.log(map(mouseX, 0, width, 0, 10));
        image(this.folha, 0, 0, this.folha.width/2, this.folha.height/2);
        pop();

        let offset2 = map(sin((frameCount-8) / 27), -1, 1, 0, 0.004);        
        push();
        translate(x, y);
        rotate(PI/(0.75 + offset2));
        // console.log(map(mouseX, 0, width, 0, 10));
        image(this.folha, 0, 0, this.folha.width/2, this.folha.height/2);
        pop();

        let offset3 = map(sin((frameCount+4) / 30), -1, 1, 0, 0.004);        
        push();
        translate(x, y);
        rotate(PI/(0.7 + offset3));
        // console.log(map(mouseX, 0, width, 0, 10));
        image(this.folha, 0, 0, this.folha.width/2, this.folha.height/2);
        pop();

        let offset4 = map(sin((frameCount+20) / 25), -1, 1, 0, 0.004);        
        push();
        translate(x, y);
        rotate(PI/(0.8 + offset4));
        // console.log(map(mouseX, 0, width, 0, 10));
        image(this.folha, 0, 0, this.folha.width/2, this.folha.height/2);
        pop();

        let offset5 = map(sin((frameCount+10) / 30), -1, 1, 0, 0.004);        
        push();
        translate(x, y);
        rotate(PI/(0.9 + offset5));
        // console.log(map(mouseX, 0, width, 0, 10));
        image(this.folha, 0, 0, this.folha.width/2, this.folha.height/2);
        pop();

        let offset6 = map(sin((frameCount+14) / 30), -1, 1, 0, 0.004);        
        push();
        translate(x, y);
        rotate(PI/(1+offset6));
        // console.log(map(mouseX, 0, width, 0, 10));
        image(this.folha, 0, 0, this.folha.width/2, this.folha.height/2);
        pop();

        let offset7 = map(sin((frameCount+11) / 30), -1, 1, 0, 0.004);        
        push();
        translate(x, y);
        rotate(PI/(1.1 + offset7));
        // console.log(map(mouseX, 0, width, 0, 10));
        image(this.folha, 0, 0, this.folha.width/2, this.folha.height/2);
        pop();
        }
        
        noTint();
        image(this.tronco[this.status], width / 2 - (this.tronco[this.status].width / 2), height / 2 - (this.tronco[this.status].height / 2.5));

        this.angle += 0.01;
    }
}