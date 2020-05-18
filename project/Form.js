class Form{
  constructor(){
      this.name = createInput("");
      this.a=createElement("h4");
      this.greeting = createElement("h1");
     // this.game1 = createButton("Play");
     // this.game2 = createButton("Play");
      this.title = createElement("h1")
      this.submit = createButton("Submit");
  }


  display(){
    background(bgImg);
        //this.image.position(10,10);
       // this.image.size(500,500);
        this.title.html("CALL OF THE SEA");
        this.title.position(width/2 - 100,20)
        this.name.position(width/2 - 100,150);
        this.name.size(200,25);
       
        this.submit.position(width/2 + 125 ,160);
       this.a.html("ENTER YOUR NAME TO CONTINUE");
       this.a.position(width/2-100,100)
        this.submit.mousePressed(()=>{
        //  background(bgImg);
          this.submit.hide();
          this.a.hide();
          this.name.hide();
          var name = this.name.value();
          this.greeting.html("Welcome "+ name);
          this.greeting.position(width/2 - 100,150);
         
      
          fill(0);
          textSize(30);
          text("Game1 : SAVING MR.TURTLE",50,250);
          text("Game2 : TRASH HUNTER",50,500);
          text("Rules to play the game :",550, 250);
          text("Rules to play the game :",550, 500);
      
          fill(255);
          textSize(20);
          text("Are you ready to feed ",270,300);
          text("Mr.Turtle? But make Sure",270,330);
          text("you don't let it eat all the",270,360);
          text("the garbage..Or He'll die..",270,390);

          text("Use You Arrow keys or Touch the turtle to move it.",550,300);
          text("Don't let the turtle eat the trash",550,330);
          text("If it does eat the trash, then it will decrease in size",550,360);
          text("Once it's very small, you loose the game",550,390);
          text("If the turtle eats the fishes, then it'll grow in size",550,420);
          text("You'll win if it comes at a certain big size",550,450);
      

          textSize(20);
          text("Can you collect most of ",270,550);
          text("the garbage just in time",270,580);
          text("to save the Marine Life?",270,610);
          text("Instead of going fishing, We'll go Trashing!",550,550);
          text("Use your Arrow keys or touch to move the boat or the hook",550,580);
          text("Collect as much Trash you can to increase your score",550,610);
          text("But don't catch the fishes if you don't want to loose points",550,640);
        })
           
        
  }


}
  