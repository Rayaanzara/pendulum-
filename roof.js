class Roof {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.roof = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.x     = x
      this.y     = y   
      World.add(world, this.roof);
    }
    display(){
      var pos =this.roof.position;
      
      rectMode(CENTER);
      strokeWeight(4)
      stroke("white")
      fill("grey");
      rect(this.x , this.y , this.width , this.height);
      pop();
    }
  };
  
  