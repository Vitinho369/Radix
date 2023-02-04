let points = [];
function setup() {
	createCanvas(1920, 1080);
	background(255);
	angleMode(DEGREES)
}

function draw() {
  let colors = [color(200, 20, 0, 100), color(20, 200, 40, 100), color(20, 0, 200, 100), color(200, 200, 200)];


	if(frameCount % 30 == 0){
		for(i = 0; i < 100; i ++){
	points.push(new Particle(0,0, colors[Math.floor(random(colors.length))]));
	}
	}
	
	for(i = 0; i < points.length; i ++){
		points[i].move();
	}
	
	for(i = 0; i < points.length; i ++){
		points[i].display();
	}
}

class Particle{
	constructor(x,y, c){
		this.v = createVector(x,y);
		this.i = 0;
        this.color = c;
	}
  
	move(){
		let ang = noise(this.v.x / 75,this.v.y / 75) * 360;
		this.v.add(cos(ang),sin(ang))
		this.i =+ 40
	}
  
	display(){
		fill(this.color);
		noStroke();
		ellipse(this.v.x,this.v.y,3);
	}
}