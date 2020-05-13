
var trashR,trashL,fishR,fishL,shark;

var score = 0;
var FishLGroup;
var FishRGroup;
var gameState = "play";
var playOn; 


function preload(){
  //ground images..
  
  fishL1 = loadImage("assets2/fish1L.png");
  fishL2 = loadImage("assets2/fish2L.png");
  fishL3 = loadImage("assets2/fish3L.png");
  fishL4 = loadImage("assets2/fish4L.png");
  fishL5 = loadImage("assets2/fish5L.png");
  fishL6 = loadImage("assets2/fish6L.png");

  fishR1 = loadImage("assets2/fish1R.png");
  fishR2 = loadImage("assets2/fish2R.png");
  fishR3 = loadImage("assets2/fish3R.png");
  fishR4 = loadImage("assets2/fish4R.png");
  fishR5 = loadImage("assets2/fish5R.png");
  sharkImg = loadImage("assets2/shark.png");

  trash1Img = loadImage("assets2/trash1.png");
  trash2Img = loadImage("assets2/trash4.png");
  trash3Img = loadImage("assets2/trash5.png");
  trash4Img = loadImage("assets2/trash3.png");

  boatImg = loadImage("assets2/boat.png");
  hookImg = loadImage("assets2/hook.png");

  bgImg = loadImage("assets2/bg.jpg");

}

function setup(){
  createCanvas(5000,2000);

  bg = createSprite(1000,height/2);
  bg.addImage(bgImg);
  bg.x = bg.width/2
  bg.scale = 1

  boat = createSprite(width/2+1000,170,200,200);
  boat.addImage(boatImg);
  boat.scale = 3;

  hook = createSprite(2825,boat.y + 400,100,100);
  hook.addImage(hookImg);
  hook.scale = 0.20;
 
// small fish
   FishLGroup = new Group();
   FishRGroup = new Group();
// big fish   
   FishL2Group = new Group();
   FishR2Group = new Group();
   SharkGroup = new Group();
// trash
   TrashLGroup = new Group();   
   TrashRGroup = new Group();   

}

function draw(){
  background(0);
  createEdgeSprites();
  drawSprites();
  
  //hook.y = boat.y + 400;
  hook.x = boat.x - 550;

  strokeWeight(7);
  line(hook.x+40,390,hook.x+35,hook.y-75);
  
 

  if (keyCode === DOWN_ARROW && hook.y < 2900){
    hook.y+=10;
  }

  if (keyCode === UP_ARROW && hook.y > 550){
    hook.y-=10;
  }

  if (keyCode === RIGHT_ARROW && boat.x < 4900){
    boat.x+=7;
  }

  if (keyCode === LEFT_ARROW && boat.x > 250){
    boat.x-=7;
  }
if (gameState === "play"){

  spawnFishL();
  spawnFishR();
  spawnShark();
  spawnTrashR();
  spawnTrashL();

  if (FishLGroup.isTouching(hook)){
    fishL.x = hook.x;
    fishL.y = hook.y;
    fishL.velocityX = 0;
    score-=10
  }
  if (FishRGroup.isTouching(hook)){
    fishR.x = hook.x;
    fishR.y = hook.y;
    fishR.velocityX = 0;
    score-=10
  }
  if (TrashLGroup.isTouching(hook)){
    trashL.x = hook.x;
    trashL.y = hook.y;
    trashL.velocityX = 0;
    score+=10
  }
  if (TrashRGroup.isTouching(hook)){
    trashR.x = hook.x;
    trashR.y = hook.y
    trashR.velocityX = 0;
    score+=10
  }

  if (TrashLGroup.y < 425){
    trashL.remove();
  }
  if (TrashRGroup.x < 425){
    trashR.remove();
  }
  if (FishLGroup.x < 425){
    fishL.remove();
  }
  if (FishRGroup.x < 425){
    fishR.remove();
  }

  if(score === 5000 ){
    gameState = "goodEnd";
  }
  
  fill(0);
  textSize(60);
  text("Score : "+ score, 20,90);
  
}  

if (gameState === "goodEnd"){
  fill(0);
  textSize(100);
  text("Thank You for Cleaning the Ocean!",width/2 - 700,900);
  text("Your Score :"+ score,width/2 - 300,1100);
  /*playOn = createSprite(width/2 + 150,height/2 + 100);
  text("Play On?",width/2 - 400,height/2 + 150);*/
}

/*if(mousePressedOver(playOn)){
  gamestate = "play"
}*/


  bg.velocityX =-3;
  if (bg.x < 2150){
    bg.x = bg.width/2 
  }
 
}

function spawnFishL(){
 if (frameCount%150===0){
   fishL = createSprite(-20,random(800,1900));
   fishL.velocityX = 7;
   fishL.scale = 0.2;
   fishL.lifetime = 1000;
   var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: fishL.addImage(fishL2);
              fishL.scale = 0.1;
              break;
      case 2: fishL.addImage(fishL3);
              fishL.scale = 1;
              break;
      case 3: fishL.addImage(fishL5);
              fishL.scale = 0.4;
              break;  
      case 4: fishL.addImage(fishL1);
              fishL.scale = 0.7;
              break;
      case 5: fishL.addImage(fishL4);
              fishL.scale = 0.5;
              break;
      case 6: fishL.addImage(fishL6);
              fishL.scale = 0.6;
              break;    
      default: break;
    }

   FishLGroup.add(fishL);
 }
}

 

 function spawnFishR(){
  if (frameCount%100===0){
    fishR = createSprite(5100,random(800,1900));
    fishR.velocityX = -7;
    fishR.scale = 0.2;
    fishR.lifetime = 1000;

    var rand = Math.round(random(1,5));
     switch(rand) {
       case 1: fishR.addImage(fishR2);
              fishR.scale = 0.1
               break;
       case 2: fishR.addImage(fishR3);
               fishR.scale = 1
               break;
       case 3: fishR.addImage(fishR5);
               break;  
       case 4: fishR.addImage(fishR1);
               fishR.scale = 0.1
               break;
       case 5: fishR.addImage(fishR4);
               break; 
       default: break;
     }
 
    FishRGroup.add(fishR);
  }
 }
 
  function spawnShark(){
    if (frameCount%1000===0){
      shark = createSprite(5500,1500);
      shark.addImage(sharkImg);
      shark.scale = 0.6;
      shark.velocityX = -8;
      shark.lifetime = 1000;
      SharkGroup.add(shark);
    }
  }
 
 function spawnTrashL(){
  if (frameCount%60===0){
    trashL = createSprite(-10,random(800,1900));
    trashL.velocityX = 8;
    trashL.scale = 0.1;
    trashL.lifetime = 800;

    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: trashL.addImage(trash1Img);
              trashL.scale = 0.1;
              break;
      case 2: trashL.addImage(trash2Img);
              trashL.scale = 0.7
              break;
      case 3: trashL.addImage(trash3Img);
              trashL.scale = 0.2;
              break;   
      case 4: trashL.addImage(trash4Img);
              trashL.scale = 0.2;
              break;   
      default: break;
    }

    TrashLGroup.add(trashL);
  }
 }

 function spawnTrashR(){
  if (frameCount%100===0){
    trashR = createSprite(5100,random(800,1900));
    trashR.velocityX = -8;
    trashR.scale = 0.1;
    trashR.lifetime = 800;

    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: trashR.addImage(trash1Img);
              trashR.scale = 0.1;
              break;
      case 2: trashR.addImage(trash2Img);
              trashR.scale = 0.7
              break;
      case 3: trashR.addImage(trash3Img);
              trashR.scale = 0.2
              break;   
      case 4: trashR.addImage(trash4Img);
              trashR.scale = 0.2;
              break;   
      default: break;
    }

    TrashRGroup.add(trashR);
  }
 }

 