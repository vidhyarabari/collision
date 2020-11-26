var fixedrect,movingrect;


function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(800, 400, 50, 50);
movingrect = createSprite(20,10,100,50);
fixedrect.shapeColor="green";
movingrect.shapeColor="green";
objectdemo1 = createSprite(300,400,40,40);
objectdemo1.shapeColor="green";
objectdemo2=createSprite(800,0,40,40);
objectdemo2.velocityY=4;


}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if (istouching(movingrect,objectdemo1))
    {
      objectdemo1.shapeColor="red";
movingrect.shapeColor="red";
    }
    else {
      objectdemo1.shapeColor="green";
movingrect.shapeColor="green";
    }
bounceoff(objectdemo2,fixedrect);
    
  drawSprites();

  

}







