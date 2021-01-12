
function preload() {
    //load the images here
    gardenImg= loadImage("images/garden.png");
    jerry1=loadAnimation("images/jerryOne.png");
    jerry23=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerry4=loadAnimation("images/jerryFour.png");
    cat1=loadAnimation("images/tomOne.png");
    cat23=loadAnimation("images/tomTwo.png","images/tomThree.png");
    
    cat4=loadAnimation("images/tomFour.png");
}

function setup(){
    createCanvas(1000,650);
    //create tom and jerry sprites here
   jerry=createSprite(200,500);
   jerry.addAnimation("jerrySleeping",jerry23);
   //jerry.changeAnimation("jerrySleeping");
   jerry.scale=0.2;

   cat=createSprite(900,350);
    cat.addAnimation("tomsleeping",cat1);
    //cat.changeAnimation("tomsleeping");
  
    cat.scale=0.05;

}

function draw() {

    background(gardenImg);
    
   if(cat.x - jerry.x < (cat.width - jerry.width)/2) {
        cat.velocityX=0;
        cat.velocityY=0;
        cat.addAnimation("lastcat",cat4);
        cat.changeAnimation("lastcat");
        cat.scale=0.2;
        jerry.addAnimation("lastrat",jerry1);
        jerry.changeAnimation("lastrat");

    }


    drawSprites();
}


function keyPressed(){
  
    cat.addAnimation("tomrunning",cat23);
    cat.changeAnimation("tomrunning");
    cat.scale=0.2;
    jerry.addAnimation("ratinspect",jerry4)
    jerry.changeAnimation("ratinspect");
 
    if(keyCode ===LEFT_ARROW){
        cat.velocityX=-3;
     
    }

    if(keyCode ===RIGHT_ARROW){
        cat.velocityX=3;
        
    }
    
    if(keyCode ===UP_ARROW){
        cat.velocityY=-3;
      
    }

    if(keyCode ===DOWN_ARROW){
        cat.velocityY=3;
     
    }
    
    


}
