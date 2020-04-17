const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var brick;
var brick2;
var brick3;
var Ground1;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  brick = new Brick(200,300,80,100);
  brick2 = new Brick(350,300,80,100);
  brick3 = new Brick(460,300,80,100);
  bigL = new BigL(150,300,150);
  bigL2 = new BigL(480,300,150);
  Ground1 = new Ground(600,height,1200,20)
  


}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  brick.display();
  brick2.display();
  brick3.display();
  bigL.display();
  bigL.display();
  Ground1.display();

 

}