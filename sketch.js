
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paper,dustbin,ground,dustbinImage,paperImage;



function preload()
{
dustbinImage=loadImage("dustbingreen.png")	

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
paper= new Paper(50,520,30)
dustbin=createSprite(500,500,20,20)
dustbin.addImage(dustbinImage)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



