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
 
  basketBase= new Basket(200,400,200,10);
  basketWall= new Basket(basketBase.x-100,basketBase.y,10,150);
  basketWall2=new Basket(basketBase.x+100,basketBase.y,10,150);

  Engine.run(engine);
}

function draw() {
  background("pink")

  ground.display();
  
  count=count+1;

if(frameCount%80==0){
  frameCount=count;
  block= new Block(random(0,1200),random(0,300),30,40);
  block.display(); 
  console.log(count);

  if(block.y>basketBase.y){
    score=score+1;
  }
}

basketBase.display();
basketWall.display();
basketWall2.display();

Matter.Body.setPosition(basketBase.body,{x:mouseX,y:mouseY}) 

 textSize(20);
 fill("white");
 stroke("darkBlue");
 strokeWeight(3);
 text("score: "+score,100,50);
}