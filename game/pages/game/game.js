let angle = 0;
let angleSpeed = 0;
let prevX;
let friction = 0.60;
let wheelRadius;

let cards = [];

function preload() {
  cards = [loadImage("../../../resources/cards/card1.png"), loadImage("../../../resources/cards/card1.png"), loadImage("../../../resources/cards/card1.png")]
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  wheelRadius = min(width, height) / 1.2;
}

function draw() {
  background(220);
  textSize(width / 14);
  strokeWeight(0.5);
  
  textAlign(CENTER, TOP);
  text('TOP', 0, width / 20, width);
  
  push();
  translate(width / 2, height + wheelRadius / 2);
  rotate(angle);
  push();
    imageMode(CENTER);
    image(cards[1], 0, 0, wheelRadius * 2, wheelRadius * 2);
    rotate(PI/3);
    image(cards[2], 0, 0, wheelRadius * 2, wheelRadius * 2);
    rotate(PI/3);
    image(cards[0], 0, 0, wheelRadius * 2, wheelRadius * 2);
  pop();
  pop();

angle += angleSpeed;
angleSpeed *= friction;




  angle += angleSpeed;
  angleSpeed *= friction;
}

function touchStarted() {
  prevX = mouseX;
}

function touchMoved() {
  let delta = (mouseX - prevX) * 0.01;
  angleSpeed = delta;
  prevX = mouseX;
}

function touchEnded() {
  angleSpeed *= 0.9;
}
