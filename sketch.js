
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  
 monkey = createSprite(50,160,20,50);
  monkey.addAnimation("moving", monkey_running)
monkey.scale=0.1;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = true;
  
  obstaclesGroup = createGroup();
  FoodGroup = createGroup();
  
  
}


function draw() {
  background("white");
  
  
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -10;
     
     }
  
  spawnFood();
  spawnobstacles();
  
  
  
  drawSprites();
}






