var astronaut,backgroundImg,background;
var drinking,bathing,brushing,eating,gyming,moving,sleeping;
var astronautdrinking,astronautbathing,astronautbrushing,astronauteating,astronautgyming,astronautsleeping;
function preload(){
  drinking = loadAnimation("drink1.png","drink2.png");
  bathing = loadAnimation("bath1.png","bath2.png");
  brushing = loadAnimation("brush.png");
  eating = loadAnimation("eat1.png","eat2.png");
  gyming = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  moving = loadAnimation("move1.png","move2.png");
  sleeping = loadImage("sleep.png");
  backgroundImg= loadImage("iss.png");
}
function setup() {
  createCanvas(800,400);
  scene = createSprite(200,200);
  scene.addImage("scene",backgroundImg);
  scene.scale = 0.1;
  astronaut = createSprite(300, 265, 50, 50);
  astronaut.addAnimation("moving",moving);
  astronaut.velocityX = -3;
  astronaut.velocityY = -3;
  astronaut.scale = 0.1;
}

function draw() {
  background(0);
  if(keyDown(UP_ARROW)){
  astronautbrushing = createSprite(300, 265, 50, 50);
  astronautbrushing.addAnimation("brushing",brushing);
  astronautbrushing.velocityX = -3;
  astronautbrushing.velocityY = -3;
  astronautbrushing.scale = 0.1;
  }
  if(keyDown(RIGHT_ARROW)){
  astronautbathing = createSprite(300, 265, 50, 50);
  astronautbathing.addAnimation("bathing",bathing);
  astronautbathing.velocityX = -3;
  astronautbathing.velocityY = -3;
  astronautbathing.scale = 0.1;
  }
  if(keyDown("d")){
    astronautdrinking = createSprite(300, 265, 50, 50);
    astronautdrinking.addAnimation("drinking",drinking);
    astronautdrinking.velocityX = -3;
    astronautdrinking.velocityY = -3;
    astronautdrinking.scale = 0.1;
  }
  if(keyDown(LEFT_ARROW)){
    astronauteating = createSprite(300, 265, 50, 50);
    astronauteating.addAnimation("eating",eating);
  astronauteating.velocityX = -3;
  astronauteating.velocityY = -3;
  astronauteating.scale = 0.1;
  }
  if(keyDown(DOWN_ARROW)){
    astronautgyming = createSprite(300, 265, 50, 50);
    astronautgyming.addAnimation("gyming",gyming);
    astronautgyming.velocityX = -3;
    astronautgyming.velocityY = -3;
    astronautgyming.scale = 0.1;
  }
  if(keyDown("s")){
     
  astronautsleeping = createSprite(300, 265, 50, 50);
  astronautsleepinging.addImage("sleeping",sleeping);
  astronautsleeping.velocityX = -3;
  astronautsleeping.velocityY = -3;
  astronautsleeping.scale = 0.1;
  }
  drawSprites();
}