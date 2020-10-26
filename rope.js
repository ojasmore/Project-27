class Rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
        
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
           bodyA : bodyA,
           bodyB : bodyB,
           pointB : {x : this.offsetX , y : this.offsetY}

        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);

    }
    display(){
        var posA = this.rope.bodyA.position;
        var posB = this.rope.bodyB.position;
        strokeWeight(2);
        stroke("red");

        var Anchor1X = posA.x;
        var Anchor1Y = posA.y;

        var Anchor2X = posB.x+this.offsetX;
        var Anchor2Y = posB.y+this.offsetY;

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}