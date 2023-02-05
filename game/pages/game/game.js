let wheel = null;
let cenario = [];

function preload() {
  cenario = new Emocao();
  emocao = 0;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  wheel = new Wheel();
}

function draw() {
  cenario.show();
  textSize(width / 14);
  strokeWeight(0.5);
  
  paintbackground();

  textAlign(CENTER, TOP);
  text('TOP', 0, width / 20, width);

  wheel.show();
}


function paintbackground(){
  noStroke();
  console.log(cenario.cores)
  fill(random(cenario.cores[emocao][0][0]-20, cenario.cores[emocao][0][0]+20),
       random(cenario.cores[emocao][0][1]-20, cenario.cores[emocao][0][1]+20),
       random(cenario.cores[emocao][0][2]-20, cenario.cores[emocao][0][2]+20),6)
  ellipse(random(0,width),random(0,height),random(0,width),random(0,height))
  ellipse(random(0,width),random(0,height/3),random(0,width),random(0,height/3))
  ellipse(random(0,width),random(0,height/2),random(0,width),random(0,height/2))
  fill(255,255,255,1.8*cos(frameCount))
  ellipse(random(0,width),random(0,height/3),random(0,width),random(0,height/3))
  fill(255,255,255,1.8*cos(frameCount))

  fill(random(cenario.cores[emocao][1][0]-20, cenario.cores[emocao][1][0]+20),
       random(cenario.cores[emocao][1][1]-20, cenario.cores[emocao][1][1]+20),
       random(cenario.cores[emocao][1][2]-20, cenario.cores[emocao][1][2]+20),4)
  ellipse(random(0,width),random(random((height/3)*2), height),random(random(0, width/4),random(width/4*3, width)),random(random((height/3), (height/3)*2), random(random(0, width/4),random(width/4*3, width))))  
}

function touchStarted() {
  wheel.touchStarted();
}

function touchMoved() {
  wheel.touchMoved();
}

function touchEnded() {
  wheel.touchEnded();
}

function mousePressed() {
  emocao = (emocao + 1) % 3;
}
