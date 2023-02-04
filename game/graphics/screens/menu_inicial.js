var buttons;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(123,253,145);
    //novos botões
    button = new TextButton(20, 30, "Jogar", function(){
        
    });
    
    button.show();    
      
}

function mouseClicked() {
    //laço para todos os botões
    button.buttonClicked(mouseX, mouseY)
}


  