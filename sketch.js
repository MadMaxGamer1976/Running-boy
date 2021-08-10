var path1,road_moving;
var boy,boyAnimation;
var invisible1,invisible2;

function preload(){
  //pre-load images
  road_moving = loadImage("path.png");

  boyAnimation = loadAnimation("Runner-1.png","Runner-2.png");
  
  }

function setup(){
  createCanvas(400,400);
  //create sprites here
  path1 = createSprite(200,200);
  path1.addImage("roadMovement",road_moving);
  path1.velocityY = 3;  

  boy = createSprite(200,200,50,10);
  boy.addAnimation("boyMovement",boyAnimation);
  boy.scale = 0.05;

  invisible1 = createSprite(360,200,50,400);
  invisible1.visible = false;

  invisible2 = createSprite(40,200,50,400);
  invisible2.visible = false;
 
}

function draw() {
  background(0);
  boy.x = World.mouseX;
  if (path1.y > 400 ){
    path1.y  = path1.height/8;
  }

  boy.collide(invisible1);

  boy.collide(invisible2);

  drawSprites();
}
