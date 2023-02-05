class Raiz {
    constructor() {
        this.points = [];
        angleMode(DEGREES);

        this.cores = [[[41, 72, 92], [254, 223, 171]],
        [[216, 104, 95], [171, 146, 134]],
        [[178, 219, 241], [255, 250, 203]],
        ];
    }

    show() {
        if(frameCount % 30 == 0){
            for(i = 0; i < 100; i ++){
        points.push(new Particle(random(width),random(height)));
        }
        }
        
        for(i = 0; i < points.length; i ++){
            points[i].move();
        }
        
        for(i = 0; i < points.length; i ++){
            points[i].display();
        }
    }
}


class Particle{
	constructor(x,y){
		this.v = createVector(x,y);
		this.i = 0;
	}
	move(){
		let ang = noise(this.v.x / 75,this.v.y / 75) * 360;
		this.v.add(cos(ang),sin(ang))
		this.i =+ 40
	}
	display(){
		fill(127 + this.v.y  * (128 / height) + this.i, this.v.x  * (225 / width) + this.i, 255,this.i);
		noStroke();
		ellipse(this.v.x,this.v.y,3);
	}
}



