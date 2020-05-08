var sun,sunImage
var mercury,mercuryImage
var venus,venusImage
var earth,earthImage
var mars,marsImage
function preload(){
  sunImage = loadImage("sun.jpg")
  mercuryImage=loadImage("m.PNG")
  venusImage= loadImage("v.PNG")
  earthImage=loadImage("e.PNG")
  marsImage=loadImage("mars.PNG")
}

function setup() {
  createCanvas(800,400);
  sun=createSprite(400, 200, 50, 50);
  sun.addImage(sunImage)
  sun.scale=0.3
  sun.setCollider("circle",0,0,80)
  sun.debug=false

  mercury=createSprite(470,130,30,30)
   mercury.addImage(mercuryImage)
   mercury.scale=0.2

   venus=createSprite(300,200,50,50)
   venus.addImage(venusImage)
   venus.scale=0.1  

   earth=createSprite(300,300,50,50)
   earth.addImage(earthImage)
   earth.scale=0.2

   mars=createSprite(550,300,50,50)
   mars.addImage(marsImage)
   mars.scale=0.15
   
}

function draw() {
  background("Black");
  if(frameCount%50===0) {
    sun.scale=sun.scale+0.1
  } 
  if(sun.collide(mercury)){
    mercury.destroy()
  }
  if(sun.collide(venus)){
    venus.destroy()
  }
  if(sun.collide(earth)){
    earth.destroy()
  }
  if(sun.collide(mars)){
    mars.destroy()
  }
  drawSprites();
}