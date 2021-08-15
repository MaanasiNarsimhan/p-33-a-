class Snow{
    
    constructor(x,y,r){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
  }
    
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(x, y, this.r, options)
    
    this.snow = loadImage("snow4.png")
    
    World.add(world, this.body);
  }
  display(){
    var paperpos=this.body.position;		

        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        strokeWeight(4);
        image(this.snow, paperpos.x,paperpos.y, 50,50)
        //ellipse(0,0,this.r, this.r);
        pop()
  }
}