socket = io();

let cenario;
let cards = [];
let painel;

let vezdejogar = false;

let loading = null;
let showloading = true;

let song;

let code;
let type;

let flag;

function preload() {
  painel = loadImage('../../../resources/painel.png');
  cenario = new Emocao();
  loading = new Loading(width/2, height-200);

  song = loadSound('../../../resources/music.mp3');

  //pegar o codigo da sala pela url e enviar para o servidor
  var url = window.location.href;
  var urlArray = url.split("=");
  code = urlArray[1];
  console.log(code);

  //se comunica ao servidor para pegar as cartas (se receber empty, não é a vez dele)
  loadCards();
}


function loadCards(){
  //carrega as cartas


    socket.emit('cards',code);
  
    socket.on('cards', (vindo) => {
      if(vindo != "empty"){
        let ambiente = 0;
        console.log(vindo[0])
        console.log(socket.id)
     /*   if(flag != true){
          for(let i = 0; i < vindo[0][0].length; i++){
            if(vindo[0][0][i] == socket.id){
              console.log("b")
              if(i == 0){
                cenario = new Natureza();
                console.log("cenario");
              }else if(i == 1){
                cenario = new Sociedade();
                console.log("cenario");
              }else if(i == 2){
                cenario = new Emocao();
                console.log("cenario");
              }
              flag = true;
            }
          }  
        }*/


        cards = []
        for(let i = 0; i < vindo[1].length; i++){
         // console.log(vindo[i]['imagem'])
          cards[i] = new Card(loadImage("../../../resources/cards/" + vindo[1][i]['imagem']), vindo[1][i]['index'], vindo[1][i]);
        }
        console.log(cards)
        vezdejogar = true;
      }else{      
        vezdejogar = false;
      }

      cards = [
        Card(loadImage("../../../resources/cards/card_abne_color.png"), 1, "1"),
        Card(loadImage("../../../resources/cards/card_agri_color.png"), 1, "1"),
        Card(loadImage("../../../resources/cards/card_desmate_color.png"), 1, "1"),        
      ];
      vezdejogar = true;
    });

    socket.on('cenario', function(status){
      cenario.status = status;
    });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song.loop();
}

function draw() {
  textSize(width / 14);
  strokeWeight(0.5);
  
  if(frameCount % 120 == 0){
    cenario.status = (cenario.status + 1) % 3;  
  }


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
    fill(255, 255, 255,100);
    text("Aguarde sua vez...", width/2, height-200);


    textSize(30);
    text("Aguarde sua vez...", width/2, height-200);
  }

  if(showloading){
    loading.show();
  }

  
}

function touchStarted() {
  getAudioContext().resume();
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

/*  for(let i = 0; i < cards.length; i++){
    cards[i].onMouseClick();
  }
*/
}

//classe "card", uma interface de carta com a função show (que mostra uma imagem no inferior da tela (esquerdo, centro ou direito dependendo da posição do card))
class Card {
  constructor(img, pos, cardjson) {
    this.img = img;
    this.card = cardjson;
    this.pos = pos;
  }

  show() {
    image(this.img, width / 3 * this.pos, height - (this.img.height/2.5), width/3, width/3);
    //ellipse abaixo da carta
    //fill(0, 0, 255);
    //ellipse(width / 3 * this.pos + width/6, height - (this.img.height/3) + width/6, (peso[0] * (width/9 - 10)), width/9);
  }

  //função que encontra o card que foi clicado
  onMouseClick() {
    if(mouseX > width / 3 * this.pos && mouseX < width / 3 * this.pos + width/3 && mouseY > height - (this.img.height/1.7) && mouseY < height - (this.img.height/1.7) + width/3){
      //se comunica com o servidor para enviar o card clicado
      console.log("Carta jogada: " + this.card);
      
      socket.emit('jogarCarta', this.card);

      socket.on('jogarCarta', function(status){
        background(255);
        console.log("Status: " + status);
        //IF SATUTS = 0, JOGADOR PERDEU
        //IF STATUS = 4, JOGADOR GANHOU
        
        //cenario.status = (cenario.status + 1) % 3;  
      });
    }
  }
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
