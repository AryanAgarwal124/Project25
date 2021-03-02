
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	, paperObject, dustbinImage
var world;


function preload()
{
	dustbinImage = loadImage('dustbingreen.png');
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObject = new Paper (200,300)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
 
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  image(dustbinImage,1080,435,240,240);


}

function keyPressed()	{
	if(keyCode===UP_ARROW)	{
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:110,y:-140});

	}
}

