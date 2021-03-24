class Basket{

    constructor(x,y,width,height){

        var options={
           isStatic:true
        }

        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }    

    display(){

    fill("brown");
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}