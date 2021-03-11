class Basket{

    constructor(x,y,width,height){

        this.body=Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
    }    

    display(){

    fill("brown");
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}