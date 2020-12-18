class Bob{
    constructor(x,y){
        
        var options={
          
            restitution:1,
            friction:0,
            frictionAir:0,
            density:10,
            slop:1,
            inertia:Infinity
        }
      
      this.body=Bodies.circle(x,y,40,options);
      this.x=x;
      this.y=y;
        
        World.add(world,this.body);
    }
    display(){
      var angle=this.body.angle;
      var pos=this.body.position;
      push();
       translate(pos.x,pos.y)
       rotate(angle);
      ellipseMode(RADIUS);
      fill(200,0,150);
     ellipse(0,0,40);
     pop();
     
    }
}
