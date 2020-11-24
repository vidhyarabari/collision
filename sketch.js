var fixedrect,movingrect;


function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(800, 400, 50, 50);
movingrect = createSprite(20,10,100,50);
fixedrect.shapeColor="green";
movingrect.shapeColor="green";

}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if (fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 
    && movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
     && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 
     && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2 )
    {
      fixedrect.shapeColor="red";
movingrect.shapeColor="red";
    }
    else {
      fixedrect.shapeColor="green";
movingrect.shapeColor="green";
    }
  drawSprites();

}