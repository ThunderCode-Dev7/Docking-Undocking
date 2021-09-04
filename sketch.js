var issImg, bgImg, rocket1Img, rocket2Img, rocket3Img, rocket4Img, rocket, iss, hasDocked = false;

function preload()
{
  bgImg = loadImage("assets/spacebg.jpg");
  issImg = loadImage("assets/iss.png");
  rocket1Img = loadImage("assets/spacecraft1.png");
  rocket2Img = loadImage("assets/spacecraft2.png");
  rocket3Img = loadImage("assets/spacecraft3.png");
  rocket4Img = loadImage("assets/spacecraft4.png");
}

function setup() 
{
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.5;

  rocket = createSprite(400, 350, 50, 50);
  rocket.addImage(rocket1Img);
  rocket.scale = 0.15;
}

function draw() 
{
  background(bgImg);
  
  //console.log(mouseX + "," + mouseY);
  if (hasDocked === false)
  {
    rocket.x = rocket.x + Math.round(random(-1, 1));
    if (keyDown("left"))
    {
      rocket.addImage(rocket3Img);
      rocket.x = rocket.x - 2;
    }
    if (keyWentUp("left"))
    {
      rocket.addImage(rocket1Img);
    }

    if (keyDown("right"))
    {
      rocket.addImage(rocket4Img);
      rocket.x = rocket.x + 2;
    }
    if (keyWentUp("right"))
    {
      rocket.addImage(rocket1Img);
    }

    if (keyDown("down"))
    {
      rocket.addImage(rocket2Img);
    }
    if (keyWentUp("down"))
    {
      rocket.addImage(rocket1Img);
    }

    if (keyDown("up"))
    {
      rocket.y = rocket.y - 2;
    }
  }

  if (rocket.x <=400 && rocket.y <= 255)
  {
    hasDocked = true;
    fill("White");
    textSize(20)
    text("Docking Succesful!",300,350);
  }

  drawSprites();
}