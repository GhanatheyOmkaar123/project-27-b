const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof1;
var rope1,rope2,rope3,rope4,rope5;
 
function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;
  //Create the Bodies Here.
  roof1 = new Roof(750,100,800,70);
	bobObject1 = new Bob(500,600,130/2);
	rope1 = new Rope(bobObject1.body,{x:500,y:100});
	bobObject2 = new Bob(630,600,130/2);
	rope2 = new Rope(bobObject2.body,{x:630,y:100});
	bobObject3 = new Bob(760,600,130/2);
	rope3 = new Rope(bobObject3.body,{x:760,y:100});
	bobObject4 = new Bob(890,600,130/2);
	rope4 = new Rope(bobObject4.body,{x:890,y:100});
	bobObject5 = new Bob(1020,600,130/2);
  rope5 = new Rope(bobObject5.body,{x:1020,y:100});
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(180);
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() { 
  if (keyCode === UP_ARROW) { 
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-55});
   }
   }

