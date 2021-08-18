var sea, seaimage, ship, shipimage

function preload(){
seaimage=loadImage("sea.png")
shipimage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  sea= createSprite(200,200)
  sea.velocityX=-5
  sea.addImage(seaimage)
  sea.scale=0.3
  ship=createSprite(130,200,30,30)
  ship.addAnimation("shiprunning", shipimage)
  ship.scale=0.2
}

function draw() {
  background("blue");
  if (sea.x<0 ) {
    sea.x= 200
  }
 drawSprites()
}