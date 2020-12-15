
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

var ground;
var ball1,ball2,ball3,ball4,ball5;
var chain1,chain2,chain3,chain4,chain5,bobD;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bobD = 40;

	//Create the Bodies Here.

	ground = new Floor(400,200,300,20);

	ball1 = new Ball(400,600,50,40);
	ball2 = new Ball(450,600,50,40);
	ball3 = new Ball(500,600,50,40);
	ball4 = new Ball(350,600,50,40);
	ball5 = new Ball(300,600,50,40);


	chain5 = new Chain(ball1.body, ground.body, 0 , 0);

	chain1 = new Chain(ball2.body,ground.body,40,0);
	chain2 = new Chain(ball3.body,ground.body,80,0);
	chain3 = new Chain(ball4.body,ground.body,-40,0);
	chain4 = new Chain(ball5.body,ground.body,-80,0);


	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background("white");
	
  	ground.display();
	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	chain5.display();
	chain1.display();
	chain4.display();
	chain3.display();
	chain2.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:123,y:-116});
	}
}

