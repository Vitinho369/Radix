socket = io();

let cenario;
let cards = [];
let painel;

let vezdejogar = false;

function preload() {
  painel = loadImage('../../../resources/painel.png');
  cenario = new Emocao();

  //se comunica ao servidor para pegar as cartas (se receber empty, não é a vez dele)
  loadCards();
}


function loadCards(){
  //carrega as cartas
  socket.on('cards', (cards) => {
    if(cards != "empty"){
      for(let i = 0; i < cards.length; i++){
        cards[i] = new Carta(cards[i]);
      }
      vezdejogar = true;
    }else{      
      vezdejogar = false;
    }
  });
  socket.on('cenario', function(status){
    cenario.status = status;
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  textSize(width / 14);
  strokeWeight(0.5);
  
  paintbackground();
  

  cenario.show();

  //mostrar o painel das cartas imagem panel.png
  image(painel, width/2 - ((painel.width)/2), height- 700, width+10, width);
  
  if(vezdejogar){
    for(let i = 0; i < cards.length; i++){
      cards[i].show();
    }
  }else{
    textFont('Poppins');
    textStyle(BOLD);
    textAlign(CENTER);
    fill(0,0,0,100);

    text("Aguarde sua vez...", width/2, height-200);
  }
  
}


function paintbackground(){
  noStroke();
  fill(random(cenario.cores[cenario.status][0][0]-20, cenario.cores[cenario.status][0][0]+20),
       random(cenario.cores[cenario.status][0][1]-20, cenario.cores[cenario.status][0][1]+20),
       random(cenario.cores[cenario.status][0][2]-20, cenario.cores[cenario.status][0][2]+20),6)
  ellipse(random(0,width),random(0,height),random(0,width),random(0,height))
  ellipse(random(0,width),random(0,height/3),random(0,width),random(0,height/3))
  ellipse(random(0,width),random(0,height/2),random(0,width),random(0,height/2))
  fill(255,255,255,1.8*cos(frameCount))
  ellipse(random(0,width),random(0,height/3),random(0,width),random(0,height/3))
  fill(255,255,255,1.8*cos(frameCount))

  fill(random(cenario.cores[cenario.status][1][0]-20, cenario.cores[cenario.status][1][0]+20),
       random(cenario.cores[cenario.status][1][1]-20, cenario.cores[cenario.status][1][1]+20),
       random(cenario.cores[cenario.status][1][2]-20, cenario.cores[cenario.status][1][2]+20),4)
  ellipse(random(0,width),random(random((height/3)*2), height),random(random(0, width/4),random(width/4*3, width)),random(random((height/3), (height/3)*2), random(random(0, width/4),random(width/4*3, width))))  
}


function mouseClicked() {
  background(255);
  cenario.status = (cenario.status + 1) % 3;
}

//classe "card", uma interface de carta com a função show (que mostra uma imagem no inferior da tela (esquerdo, centro ou direito dependendo da posição do card))
class Card {
  constructor(img, pos, cardjson) {
    this.img = img;
    this.card = cardjson;
    this.pos = pos;
  }

  show() {
    image(this.img, width / 3 * this.pos - this.img.width / 2, height - this.img.height);
  }

  //função que encontra o card que foi clicado
  onMouseClick() {
    if (mouseX > width / 3 * this.pos - this.img.width / 2 && mouseX < width / 3 * this.pos + this.img.width / 2 && mouseY > height - this.img.height && mouseY < height) {
      //se comunica com o servidor para enviar o card clicado
      socket.emit('jogarCarta', this.card);
    }
  }
}
