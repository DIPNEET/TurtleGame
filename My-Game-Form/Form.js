class Form{
  constructor(){
      this.name = createInput("Name");
      this.greeting = createElement("h2");
      this.game1 = createButton("Play");
      this.game2 = createButton("Play");
      this.title = createElement("h1")
      this.submit = createButton("Submit");
  }

//For the ocean..
//Aquatic Saving..
//trash hunter..
//call of the sea..
  display(){
        //this.image.position(10,10);
       // this.image.size(500,500);
        this.title.html("CALL OF THE SEA");
        this.title.position(150,20)
        this.name.position(180,150);
       
        this.submit.position(380,150);
        
        this.submit.mousePressed(()=>{
          background(bgImg);
          this.submit.hide();
          this.name.hide();
          var name = this.name.value();
          this.greeting.html("Welcome "+ name);
          this.greeting.position(220,100);
         
      
          fill(0);
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
          text("to save the Marine Life?",270,610);
         
        


        })
           
        
  }


}
  