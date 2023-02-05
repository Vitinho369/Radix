class Wheel{
    constructor(){
        this.angle = 0;
        this.angleSpeed = 0;
        this.prevX;
        this.friction = 0.60;
        this.wheelRadius = min(width, height) / 1.2;
        this.cards = [loadImage("../../../resources/cards/card1.png"), loadImage("../../../resources/cards/card1.png"), loadImage("../../../resources/cards/card1.png")];
    }

    loadCards(card1, card2, card3){
        this.cards = [card1, card2, card3];
    }

    show(){
        push();
        translate(width / 2, height + this.wheelRadius / 2);
        rotate(this.angle);
        push();
          imageMode(CENTER);
          image(this.cards[1], 0, 0, this.wheelRadius * 2, this.wheelRadius * 2);
          rotate(PI/3);
          image(this.cards[2], 0, 0, this.wheelRadius * 2, this.wheelRadius * 2);
          rotate(PI/3);
          image(this.cards[0], 0, 0, this.wheelRadius * 2, this.wheelRadius * 2);
        pop();
        pop();
      
        this.angle += this.angleSpeed;
        this.angleSpeed *= this.friction;      
    }

    touchStarted() {
        this.prevX = mouseX;
    }
    
    touchMoved() {
        let delta = (mouseX - prevX) * 0.01;
        this.angleSpeed = delta;
        this.prevX = mouseX;
    }
    
    touchEnded() {
        this.angleSpeed *= 0.9;
    }
      
}