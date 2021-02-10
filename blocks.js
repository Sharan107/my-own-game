class Block{
    constructor(x,y,width,height){
var options={
isStatic:false,
friction:0.5
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body);

console.log(this.body.speed);
}

display(){
var pos=this.body.position;
rectMode(CENTER);
strokeWeight(2);
rect(pos.x,pos.y,this.width,this.height);
}
}