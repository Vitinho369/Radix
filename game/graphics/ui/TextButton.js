class TextButton{
    constructor(x, y, string, f){
      this.p = createVector(x, y);
      this.text = string;
      this.function = f;
    }  
     
    show(){
      var l = 100
      var h = 30
  
      rect(this.p.x, this.p.x, l,h)
      
      textSize(20)
      text(thistext ,this.p.x+20,this.p.y+20)  
    }
    
    buttonClicked(mouseX, mouseY){
      if(mouseX>=x && mouseX<=(x+l) && mouseY >=y && mouseY<=(y+h)){
        this.function();
      }
    }
  }
  