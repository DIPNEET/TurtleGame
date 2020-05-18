function explosion(FishLGroup, pTurtle) {
    score+=10; 
    pTurtle.scale+=0.01
    FishLGroup.remove();
   }
   
   function explosion1(shark, pTurtle) {
    score-=20;
    pTurtle.remove();   
    shark.velocityX = -8;
    gameState = "badEnd";
   }
  
   function explosion2(TrashLGroup, pTurtle) {
    score-=20;
    pTurtle.scale-=0.02; 
    TrashLGroup.destroy();
   }
  
   function spawnFishL(){
        if (frameCount%150===0){
          fishL = createSprite(-20,random(height));
          fishL.velocityX = 10;
          fishL.scale = 0.02;
          fishL.lifetime = 1000;
          var rand = Math.round(random(1,6));
           switch(rand) {
        case 1: fishL.addImage(fishL2);
                fishL.scale = width/40000;
                break;
        case 2: fishL.addImage(fishL3);
                fishL.scale = width/6500;
                break;
        case 3: fishL.addImage(fishL5);
                fishL.scale = width/6500;
                break;  
        case 4: fishL.addImage(fishL1);
                fishL.scale = width/6500;
                break;
        case 5: fishL.addImage(fishL4);
                fishL.scale = width/6500;
                break;
        case 6: fishL.addImage(fishL6);
                fishL.scale = width/6500;
                break;    
             default: break;
           }
       
          FishLGroup.add(fishL);
        }
       }
       
        
       
        function spawnFishR(){
         if (frameCount%100===0){
           fishR = createSprite(width + width/4,random(height));
           fishR.velocityX = -10;
           fishR.scale = 0.2;
           fishR.lifetime = 1000;
       
           var rand = Math.round(random(1,5));
            switch(rand) {
         case 1: fishR.addImage(fishR2);
                 fishR.scale = width/40000;
                 break;
         case 2: fishR.addImage(fishR3);
                 fishR.scale = width/6500;
                 break;
         case 3: fishR.addImage(fishR5);
                 fishR.scale = width/40000;
                 break;  
         case 4: fishR.addImage(fishR1);
                 fishR.scale = width/40000;
                 break;
         case 5: fishR.addImage(fishR4);
                fishR.scale = width/40000;
                 break; 
              default: break;
            }
        
           FishRGroup.add(fishR);
         }
        }
        
         function spawnShark(){
           if (frameCount%500===0){
                shark = createSprite(width + width/2,height/2);
                shark.addImage(sharkImg);
                shark.scale = width/8500;
                shark.setCollider("circle",-2250,450,200);
                shark.velocityX = -8;
                shark.lifetime = 1000;
                SharkGroup.add(shark);
           }
         }
        
        function spawnTrashL(){
         if (frameCount%60===0){
           trashL = createSprite(-10,random(height));
           trashL.velocityX = 11;
           trashL.scale = 0.1;
           trashL.lifetime = 800;
       
           var rand = Math.round(random(1,4));
           switch(rand) {
        case 1: trashL.addImage(trash1Img);
                trashL.scale = width/40000;
                break;
        case 2: trashL.addImage(trash2Img);
                trashL.scale = width/9000;
                break;
        case 3: trashL.addImage(trash3Img);
                trashL.scale = width/20000;
                break;   
        case 4: trashL.addImage(trash4Img);
                trashL.scale = width/25000;
                break;   
             default: break;
           }
       
           TrashLGroup.add(trashL);
         }
        }
       
        function spawnTrashR(){
         if (frameCount%100===0){
           trashR = createSprite(width + width/4,random(height));
           trashR.velocityX = -11;
           trashR.scale = 0.1;
           trashR.lifetime = 800;
       
           var rand = Math.round(random(1,4));
           switch(rand) {
         case 1: trashR.addImage(trash1Img);
                trashR.scale = width/40000;
                break;
         case 2: trashR.addImage(trash2Img);
                trashR.scale = width/9000;
                break;
         case 3: trashR.addImage(trash3Img);
                trashR.scale = width/20000;
                break;   
         case 4: trashR.addImage(trash4Img);
                trashR.scale = width/25000;
                break;   
             default: break;
           }
       
           TrashRGroup.add(trashR);
         }
        }
       
        