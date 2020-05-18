var form1;

function preload(){
    bgImg = loadImage("bg.jpg")
    game1Img = loadImage("game1.jpg");
    game2Img = loadImage("game2.jpg");
}
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    background(0,250,250);
    form1 = new Form();
    form1.display();
    game1 = createSprite(135,350,200,150);
    game1.addImage(game1Img);
    game1.scale = 0.3
    game2 = createSprite(135,600,200,150);
    game2.addImage(game2Img);
    game2.scale = 0.2
}

function draw(){

    //background("pink");
    /*fill(0);
    textSize(30);
    text("Game1 : SAVING MR.TURTLE",50,250);
    text("Game2 : TRASH HUNTER",50,500);

    fill(255);
    textSize(20);
    text("Are you ready to feed ",270,300);
    text("Mr.Turtle? But make Sure",270,330);
    text("you don't let it eat all the",270,360);
    text("the garbage..Or He'll die..",270,390);
    
    textSize(20);
    text("Can you collect most of ",270,550);
    text("the garbage just in time",270,580);
    text("to save the Marine Life?",270,610);*/
   
   drawSprites()
}