
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(910,200,240,20);	
	bob1  = new Bob(450,500,20)
    rope1= new Rope(bob1.body , roof.body , -20*4,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 roof.display();
 bob1.display();
 rope1.display();
 

 
}



