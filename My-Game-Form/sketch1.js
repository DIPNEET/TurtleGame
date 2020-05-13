/* The rules of this game are pretty simple..
 All you have to do is feed the hungry turtle, but there are some certain things to remember...
 --> don't let the turtle eat the trash..
 --> if it does eat the trash, then it will decrease in size..
 --> once it's very small, you loose the game..
 --> if the turtle eats the fishes, then it'll grow in size..
 --> you'll win if it comes at a certain big size..

 My message in this game is to let the player know that, just like it's kinda hard to feed the turtle 
 with all the trash coming in between...the same way the real turtles are unable to get their food 
 properly. Instead of eating fishes and crabs and all..they end up eating plastic and all the other sorts of 
 trash.
 Hope you like this game.. :D

*/


var pTurtle,fishR,fishL,shark;

var score = 0;
var FishLGroup,FishL2Group;
var FishRGroup,FishR2Group;
var gameState = "play"; 


function preload(){
  fishL1 = loadImage("assets/fish1L.png");
  fishL2 = loadImage("assets/fish2L.png");
  fishL3 = loadImage("assets/fish3L.png");
  fishL4 = loadImage("assets/fish4L.png");
  fishL5 = loadImage("assets/fish5L.png");
  fishL6 = loadImage("assets/fish6L.png");

  fishR1 = loadImage("assets/fish1R.png");
  fishR2 = loadImage("assets/fish2R.png");
  fishR3 = loadImage("assets/fish3R.png");
  fishR4 = loadImage("assets/fish4R.png");
  fishR5 = loadImage("assets/fish5R.png");
  sharkImg = loadImage("assets/shark.png");

  trash1Img = loadImage("assets/trash1.png");
  trash2Img = loadImage("assets/trash4.png");
  trash3Img = loadImage("assets/trash5.png");
  trash4Img = loadImage("assets/trash3.png");

  turtleImage = loadImage("assets/turtle.png")
  turtleImage2= loadImage('assets/turtle2.png')

  bgImg = loadImage("assets/bg.jpg");
}

function setup(){
  createCanvas(innerWidth - 50,innerHeight - 20);
 
  pTurtle = createSprite(innerWidth/2,innerHeight/2)
  pTurtle.addImage(turtleImage);
  pTurtle.scale = 0.5;

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
  background(bgImg);
 
  drawSprites();
  fill(0);
  textSize(50);
  
  if (gameState === "play"){
   // pTurtle.debug = true

      //move the turtle with arrow keys...
      if (keyCode === RIGHT_ARROW && pTurtle.x < innerWidth){
        pTurtle.x+=10;
        pTurtle.addImage(turtleImage2);
       // pTurtle.scale = 2
        pTurtle.setCollider("circle",250,0,50);
      }
      if (keyCode === LEFT_ARROW && pTurtle.x > 100){
        pTurtle.x-=10;
        pTurtle.addImage(turtleImage);
        pTurtle.setCollider("circle",-250,0,50);
      }
      if (keyCode === DOWN_ARROW && pTurtle.y < innerHeight - 50){
        pTurtle.y+=7;
      }
      if (keyCode === UP_ARROW && pTurtle.y > 100){
        pTurtle.y-=7;
      }

      FishLGroup.collide( pTurtle, explosion);
      FishRGroup.collide( pTurtle, explosion);
      FishL2Group.collide( pTurtle, explosion);
      FishR2Group.collide( pTurtle, explosion);
      SharkGroup.collide(pTurtle, explosion1);
      TrashLGroup.collide(pTurtle, explosion2);
      TrashRGroup.collide(pTurtle, explosion2);

      if(pTurtle.scale<=0.1){
        gameState = "badEnd";
        pTurtle.destroy();
      }

      if(pTurtle.scale === 0.8){
        gameState = "goodEnd"
      }


      spawnFishL();
      spawnFishR();
      spawnShark();
      spawnTrashR();
      spawnTrashL();

      text("Score : " + score, width/2 - width/2, height/2 - height/2.5 );
      //100,150
  }

 if (gameState === "badEnd"){
  // textSize(20);
   text("Game Over!", width/2 - 150, height/2 - 120);
   text("Your Score : " + score, width/2 - 160 , height/2 - 60);
   text("Better Luck next Time!", width/2 - 230, height/2);
 }

 if (gameState === "goodEnd"){
 
  // textSize(20);
   text("Well Done!!",width/2 - 150, height/2 - 120);
   text("Your Brilliant Score is :"+ score,width/2 - 260 , height/2 - 60);
 }
}



