
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground, inground
var o, oo
var survival, life
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  o = loadImage("obstacle.png");
}



function setup() {
  createCanvas(600, 200)
  
  monkey = createSprite(50, 150, 10, 10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1

  
  ground = createSprite(200,190,2000,10);
  ground.velocityX = -3
  ground.x = ground.width /2;
  ground.addAnimation()

  inground = createSprite(300, 191, 650, 5);
  inground.visible = false
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  survival = 0;
  life = 0
}


function draw() {
  background(255);
  monkey.collide(inground);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if(keyDown("space") && monkey.y >149) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8
  drawSprites();
  food();
  obstacles();
  
  stroke("white");
  fill("black");
  textSize(15)
  text("score :" + life, 500, 40);
  
  
  
  if(obstacleGroup.isTouching(monkey)){
  ground.velocityX = 0
  monkey.velocityY = 0
  foodGroup.setVelocityXEach(0);
  obstacleGroup.setVelocityXEach(0);
  foodGroup.setLifetimeEach(-1);
  obstacleGroup.setLifetimeEach(-1);

  }
  stroke("white");
  fill("black");
  textSize(15)
  survival = Math.ceil(frameCount/frameRate());
  text("survival time :" + survival, 50, 40);
}

function food(){
  if(frameCount % 60 == 0){
  banana = createSprite(600, 50, 10, 10);
  banana.addImage(bananaImage);
  banana.velocityX = -3
  banana.scale = 0.1
  var rand = Math.round(random(50, 100))
  banana.y = rand
  banana.lifetime = 210;
    foodGroup.add(banana);
  }
  
}

function obstacles(){
  var r
  if(frameCount % 50 == 0){
    oo = createSprite(600, 170, 10, 10)
    oo.addImage(o);
    oo.scale = 0.1
    oo.velocityX = -4
    obstacleGroup.add(oo);
  }
}