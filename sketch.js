
var trex ,trex_running;
var ground,groundimage;
var cactus,cactusimage;
function preload(){
  
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
 groundimage= loadAnimation("ground2.png")
 
}

function setup(){
  createCanvas(600,200)
  
  edges = createEdgeSprites();
  //create a trex sprite

  trex = createSprite(50,170,50,50);
  trex.addAnimation("running",trex_running);
  trex.scale =0.5;
 ground = createSprite(200,180,600,10)
ground.addAnimation("movinground",groundimage)
}

function draw(){
  background("lightgrey")

  if(keyDown("space")){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 1; // gravity

  trex.collide(ground);

  
  drawSprites();

}
