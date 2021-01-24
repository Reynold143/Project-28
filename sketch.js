
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
  mango2= new mango(968,145,30);
  mango3= new mango(1027,143,30);
  mango4= new mango(1130,205,30);
  mango5= new mango(970,250,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

  stoneObj = new Stone(270,435,50,50);

  slingshot = new Slingshot(stoneObj.body,{x:235,y:420})

	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  fill("black")
  text("x:"+mouseX+", y:"+mouseY,60,60)


  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  stoneObj.display();
  slingshot.display();

  groundObject.display();
 
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);

}
 //works only when the mouse is dragged 
 function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX , y:mouseY})
}
//works once the mouse button is released
function mouseReleased(){
  slingshot.fly()
}

function detectCollision(lmango,lstone){
  mangoBodyPosition=lmango.body.setPosition
  stoneBodyPosition=lstone.body.setPosition

  var distance = dist(mangoBodyPosition.x, mangoBodyPosition.y, stoneBodyPosition.x, stoneBodyPosition.y)
  if(distance<=lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}


