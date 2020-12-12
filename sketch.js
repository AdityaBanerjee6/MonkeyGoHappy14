;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclexGroup
var score, survivalTime;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  monkey = createSprite(40,445,10,10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1 ;
  monkey.debug=true;
  
  ground = createSprite(250,480,500,10)

 var survivalTime=0; 
   obstaclexGroup = createGroup();
  FoodGroup = createGroup();

  
}


function draw() {
  background("white");
 
   ground.velocityX=-4
  ground.x=ground.width/2;
    if(keyDown("space")&& monkey.y >= 200) {
        monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  survivalTime= Math.round(frameCount/frameRate());
  text("Survival Time:"+ survivalTime,400,25);
   obstacles();
  bananas();

      
  
  if(obstaclexGroup.isTouching(monkey)){
   ground.velocityX = 0;
    obstaclexGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
     obstaclexGroup.setVelocityXEach(0);
     FoodGroup.setVelocityXEach(0);
    text("GAME OVER!",250.230);
    
}
    
  

  drawSprites();   
  
  
    
  

 
  
}
function obstacles(){
  if (frameCount % 100 === 0){
   var obstacle = createSprite(500,458,10,10);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX=-4;
    obstacle.scale=0.1;
    obstacle.setLifetime=100;
      obstacle.debug=true;
    obstaclexGroup.add(obstacle);
  
}
}

function bananas(){
  if(World.frameCount%80===0){
    banana = createSprite(400,200,20,20);
    banana.y = Math.round(random(350,20));
    banana.addImage(bananaImage);
    banana.scale=0.1;
  banana.velocityX=-7;
  banana.setLifetime= 100;
   FoodGroup.add(banana);
  }
}





