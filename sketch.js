
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(600,200,200,10);
	bob1 = new Bob(600,350,20);
	bob2 = new Bob(560,350,20);
	bob3 = new Bob(520,350,20);
	bob4 = new Bob(640,350,20);
	bob5 = new Bob(680,350,20);

	rope1 = new Rope(bob1.body,roof.body,0,0);
	rope2 = new Rope(bob2.body,roof.body,-40,0);
	rope3 = new Rope(bob3.body,roof.body,-80,0);
	rope4 = new Rope(bob4.body,roof.body,+40,0);
	rope5 = new Rope(bob5.body,roof.body,+80,0);
	
	Engine.run(engine);
  
}


function draw() {

  Engine.update(engine);	
  rectMode(CENTER);
  background(255);

  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  keyPressed();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === LEFT_ARROW){
	  Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-20, y:-20})
	}
 }
 

