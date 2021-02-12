const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var gameState="onSling";
var score=0;


function setup() {
createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  ground= new Ground(600,550,1200,10);
  striker= new Striker(600,450,40);
  rope= new Rope(striker.body,{x:600,y:400});

  Engine.run(engine);
}

function draw() {
  background("pink")

  ground.display();
  striker.display();
  rope.display();  

for(var i=0; i<=width; i++){
  block= new Block(random(0,1200),(0,600),30,40);
}

 textSize(20);
 fill("white");
 text("score: "+score,100,50);
}

function mouseDragged(){
  Body.setPosition(striker.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  rope.fly();
  gameState="launched";
}

function keyPressed(){
  if(keyCode==32){
    Body.setPosition(striker.body,{x:600,y:450});
    rope.attach(striker.body);
  }
}

function detectCollision(striker,block){
  strikerpos=striker.body.position;
  blockpos=block.body.position;
  
  var distance=dist(strikerpos.x,strikerpos.y,blockpos.x,blockpos.y);
  
  if(distance<=striker.r+block.width || distance<=striker.r+block.height){
    tint(255,0,0);
    score+=1;
  }
  }