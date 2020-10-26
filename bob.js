class Bob {

    constructor(x,y,diameter) {
      
      var options = {
          'isStatic' : false,
          'density' : 10
      }
      this.x = x;
      this.y = y;
      this.diameter = diameter;

      this.body = Bodies.circle(this.x,this.y,this.diameter,options);  
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("green");
      ellipse(pos.x, pos.y, this.diameter,this.diameter);

    }
  }