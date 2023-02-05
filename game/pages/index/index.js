logo = null;
playButton = null;
options = [];

loading = null;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("sketch-holder");
    //carrega a imagem
    logo = loadImage('../../../resources/ui/logo.png');

    loading = new Loading(width / 2, height / 2);

    playButton = new Button(width / 2, height / 2, width * 0.5, width * 0.5, loadImage('../../../resources/ui/play.png'), function () { window.location.href = "/lobby"; });

    options.push(loadImage('../../../resources/ui/options1.png'));
    options.push(loadImage('../../../resources/ui/options2.png'));
    options.push(loadImage('../../../resources/ui/options3.png'));
    // Seu código p5 aqui

    strokeWeight(0)
    angleMode(DEGREES)
}

function draw() {
    fill(random(10,255),random(10,255),0,4)
    ellipse(random(0,width),random(0,height),random(0,width),random(0,height))
    fill(255,255,255,4*cos(frameCount))
    ellipse(random(0,width),random(0,height),random(0,width),random(0,height))
    fill(255,255,255,1.8*cos(frameCount))

    ellipse(random(0,width),random(0,height/2),random(0,width),random(0,height/2))
    fill(255,255,255,1.8*cos(frameCount))
    ellipse(random(0,width),random(0,height/3),random(0,width),random(0,height/3))
    fill(255,255,255,1.8*cos(frameCount))
    ellipse(random(0,width),random(0,height/2),random(0,width),random(0,height/2))
    fill(255,255,255,1.8*cos(frameCount))
    ellipse(random(0,width),random(0,height/3),random(0,width),random(0,height/3))
    fill(255,255,255,1.8*cos(frameCount))

    ellipse(random(0,width),random(height/2, height),random(0,width),random(height/2, height))
    fill(245,191,180,1.8*cos(frameCount))
    ellipse(random(0,width),random((height/3)*2, height),random(0,width),random((height/3)*2, height))
    fill(245,191,180,1.8*cos(frameCount))

    //background(255);
    //mostra a imagem na parte superior central da tela com 75% da largura da tela
    image(logo, width/2 - ((logo.width * 0.35)/2), 0, logo.width * 0.35, logo.height * 0.35);

    // mostra o play button no meio da tela com 120% da largura da tela
    //loading.show();

    //mostra a barra inferior com as opções
    playButton.show();
}

function mousePressed() {
    playButton.mousePressed();
}


class Loading {
    constructor(x, y, w = width, h = width) {
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
        this.image = loadImage('../../../resources/ui/loading.png');;
    }

    show() {
        push();
        translate(this.x, this.y);
        rotate(frameCount / 15);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}

class Button {
    constructor(x, y, w, h, image, f) {
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
        this.image = image;
        this.function = f;
    }

    show() {
        image(this.image, this.x - (this.width / 2), this.y - (this.height / 2), this.width, this.height);
    }

    mousePressed() {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
            this.function();
        }
    }
}

class NavigationBar {
    constructor() {
        this.width = windowWidth;
        this.height = windowHeight;
        this.x = 0;
        this.y = windowHeight - 100;
        this.option = 0;
        this.showing = false;
    }

    show() {
        if (!this.showing) {
            fill(0);
            rect(this.x, this.y, this.width, this.height - this.y);
            image(options[this.option], this.x, this.y, this.width, this.height - this.y);
        } else {
            //preenche a tela toda com um retângulo preto e um botão no centro superior dele para decer a barra 
            fill(0);
            rect(this.x, this.y, this.width, this.height - this.y);
            image(options[this.option], this.x, this.y, this.width, this.height - this.y);

        }
    }

    mousePressed() {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
            this.showing = true;
        }
    }
}