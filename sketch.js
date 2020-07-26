var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(600,200,50,50);
  fixedRect.shapeColor = "green";
}

function draw() {
  background(0,0,0);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(collide(movingRect,fixedRect)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}

