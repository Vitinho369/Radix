logo = null;
playButton = null;
options = [];

loading = null;
navigationBar = null;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("sketch-holder");
    //carrega a imagem
    logo = loadImage('../../../resources/ui/logo.png');

    loading = new Loading(width / 2, height / 2);
    navigationBar = new NavigationBar();

    playButton = new Button(width / 2, height / 2, width * 0.5, width * 0.5, loadImage('../../../resources/ui/play.png'), function () { window.location.href = "/lobby"; });

    options.push(loadImage('../../../resources/ui/options1.png'));
    options.push(loadImage('../../../resources/ui/options2.png'));
    options.push(loadImage('../../../resources/ui/options3.png'));
    // Seu código p5 aqui
}

function draw() {
    background(255);
    //mostra a imagem na parte superior central da tela com 75% da largura da tela
    image(logo, (windowWidth - logo.width * 0.75) / 2, 0, logo.width * 0.75, logo.height * 0.75);

    // mostra o play button no meio da tela com 120% da largura da tela
    loading.show();

    //mostra a barra inferior com as opções
    navigationBar.show();

    playButton.show();


    textFont('Poppins');
    textStyle(BOLD);
    textAlign(CENTER);
    fill(0,0,0,100);

    text("O código da partida é", width/2, height-200);
}

function mousePressed() {
    navigationBar.mousePressed();
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
        push();
        translate(this.x + this.width / 2, this.y + this.height / 2);
        rotate(frameCount / 15);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }

    mousePressed() {
        if (mouseX > this.x && mouseX < this.x + this.width && mouseY > this.y && mouseY < this.y + this.height) {
            this.function();
        }
    }
}