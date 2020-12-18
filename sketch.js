
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 const Render = Matter.Render;
 const Constraint = Matter.Constraint;
 const Mouseconstraint = Matter.Mouseconstraint;

 
function setup() {

	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	/*let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse : canvasmouse
  }
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);*/
  

  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 800,
	    height: 700,
	    wireframes: false
	  }
	});
	
  bob1=new Bob(200,300,);
  bob2=new Bob(280,300);
  bob3=new Bob(360,300);
  bob4=new Bob(440,300);
  bob5=new Bob(520,300);

  rect1=new Rect(360,100,500,20);

  chain1=new Chain(bob1.body, {x:200,y:100});
  chain2=new Chain(bob2.body, {x:280,y:100});
  chain3=new Chain(bob3.body, {x:360,y:100});
  chain4=new Chain(bob4.body, {x:440,y:100});
  chain5=new Chain(bob5.body, {x:520,y:100});

  Engine.run(engine);
 Render.run(render);

}


function draw() {

  background(150,20,60);
  
  Engine.update(engine);
 
  
  rect1.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  

}

function mouseDragged(){
 
    
    Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY})

}



function drawLine(constraint)
{
	bob1BodyPosition=constraint.bodyA.position
	rectBodyPosition=constraint.bodyB.position

	rectBodyOffset=constraint.pointB;
	
	rectBodyX=rectBodyPosition.x+rectBodyOffset.x
	rectBodyY=rectBodyPosition.y+rectBodyOffset.y
	line(bob1BodyPosition.x, bob1BodyPosition.y, rectBodyX,rectBodyY);
}


