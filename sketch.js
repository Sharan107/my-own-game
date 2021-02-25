const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var score=0;
var count;

function setup() {
createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  ground= new Ground(600,550,1200,10);
 
  basketBase= new Ground(mouseX,550,200,10);
  basketWall= new Ground(basketBase.x-100,550,10,150);
  basketWall2=new Ground(basketBase.x+100,550,10,150);

  Engine.run(engine);
}

function draw() {
  background("pink")

  ground.display();
  

if(frameCount%80==0){
  count=count++;
  frameCount=count;
  block= new Block(random(0,1200),(0,300),30,40);
  block.display(); 
  console.log(count);
}

basketBase.display();
basketWall.display();
basketWall2.display();

 textSize(20);
 fill("white");
 stroke("darkBlue");
 strokeWeight(3);
 text("score: "+score,100,50);
}