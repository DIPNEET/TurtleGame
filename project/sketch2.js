
var trashR,trashL,fishR,fishL,shark;

var score = 0;
var FishLGroup;
var FishRGroup;
var gameState = "play";
var playOn,edges; 


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
  hookImg = loadImage("assets2/clawRing.png");

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
  hook.scale = 0.7;
  hook.setCollider("circle",0,0,90)
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
   this.left=createButton("L")
   this.right=createButton("R")
   this.up=createButton("U")
   this.down=createButton("D")
}

function draw(){
  background(0);
  edges=createEdgeSprites();
  hook.collide(edges[3]||edges[1]||edges[2]||edges[4]);
  drawSprites();
  
  //hook.y = boat.y + 400;
  hook.x = boat.x - 550;

  strokeWeight(7);
  line(hook.x+40,390,hook.x+35,hook.y-55);

 

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

  if(touches.length>0){

    this.left.mousePressed(()=>{
      boat.x-=7;
    })
    this.left.position(innerWidth-230,innerHeight-200);
  
    this.right.mousePressed(()=>{
      boat.x+=7;
    })
    this.right.position(innerWidth-170,innerHeight-200);

    this.up.mousePressed(()=>{
      hook.y-=10;
    })
    this.up.position(innerWidth-200,innerHeight-230);
    
    this.down.mousePressed(()=>{
      hook.y+=10;
    })
    this.down.position(innerWidth-200,innerHeight-170);

    touches=[]
  }

if (gameState === "play"){

  spawnFishL();
  spawnFishR();
  spawnShark();
  spawnTrashR();
  spawnTrashL();
 
  FishLGroup.overlap(hook, explosion);

function explosion(fishL) {
  fishL.remove();
  score-=10;
}
 
  FishRGroup.overlap(hook, explosion1);

  function explosion1(fishR) {
    fishR.remove();
    score-=10;
  }

  TrashLGroup.overlap(hook, explosion2);

  function explosion2(trashL) {
    trashL.remove();
    score+=10;
  }
  
  TrashRGroup.overlap(hook, explosion3);

  function explosion3(trashR) {
    trashR.remove();
    score+=10;
  }
   hook.debug = true;
  

  if(score === 5000 ){
    gameState = "goodEnd";
  }
  
  fill(0);
  textSize(60);
  text("Score : "+ score, 20,130);
  
}  

if (gameState === "goodEnd"){
  fill(0);
  textSize(100);
  text("Thank You for Cleaning the Ocean!",width/2 - 700,900);
  text("Your Score :"+ score,width/2 - 300,1100);
 
}




  bg.velocityX =-3;
  if (bg.x < 2150){
    bg.x = bg.width/2 
  }
  
}
