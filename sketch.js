var player, playerImg;
var background, backImg;

var emptyBox, emptyBoxImg, emptyBoxImg;
var emptyBox2, emptyBox2Img,emptyBox2Img2;
var treasure, treasureImg, treasureImg2;

var gameLogo, gameLogoImg;
var storyPage, storyPageImg;

var timer = 10;

function preload(){
   backImg = loadImage ("images/background.jpg");
   playerImg = loadImage ("images/circle.png");

   emptyBoxImg = loadImage ("images/empty.png");
   emptyBoxImg2 = loadImage ("images/empty(1).png");

   emptyBox2Img = loadImage ("images/empty2.png");
   emptyBox2Img2 = loadImage ("images/empty2(1).png");

   treasureImg = loadImage ("images/treasure.png");
   treasureImg2 = loadImage ("images/treasure(1).png");

   gameLogoImg = loadImage ("images/gameLogo.jpg");
   storyPageImg = loadImage ("images/storyPage.jpg");
}

function setup(){
    createCanvas (windowWidth-20,windowHeight-20);

    background = createSprite (width/2,height/2);
    background.addImage (backImg);
    background.scale = 2.5;

    storyPage = createSprite (width/2, height/2-25);
    storyPage.addImage (storyPageImg);
    storyPage.scale = 0.58;
    storyPage.visible = true;

    player = createSprite (100,50);
    player.addImage (playerImg);
    player.scale = 0.025;
    player.visible = false;

    emptyBox = createSprite (1015,70)
    emptyBox.addImage (emptyBoxImg);
    emptyBox.scale = 0.5
    emptyBox.visible = false;

    emptyBox2 = createSprite (900,450);
    emptyBox2.addImage (emptyBox2Img);
    emptyBox2.scale = 0.5
    emptyBox2.visible = false;

    treasure = createSprite (width/2,height/2-25);
    treasure.addImage (treasureImg);
    treasure.scale = 0.5;
    treasure.visible = false;
    
}

function draw(){

    if (frameCount%20===0){
        timer--;
    }

    
    if (keyDown(RIGHT_ARROW)){
        player.x = player.x+3;
    }

    if (keyDown(LEFT_ARROW)){
        player.x = player.x-3;
    }

    if (keyDown(DOWN_ARROW)){
        player.y = player.y+3;
    }

    if (keyDown(UP_ARROW)){
        player.y = player.y-3;
    }

    if (player.isTouching(emptyBox)){
        emptyBox.addImage (emptyBoxImg2);
        emptyBox2.visible = true;
    }

    if (player.isTouching(emptyBox2)){
        emptyBox2.addImage (emptyBox2Img2)
        treasure.visible = true;
    }

    if (player.isTouching(treasure)){
        treasure.addImage (treasureImg2);

        fill(0);
        textSize(20)
        text("You Found It! Well Done",width/2,height/2-25);
    }

    drawSprites();

    if (timer>=0){
        fill(0);
        textSize(15);
        text(timer,20,30);
    }
    if (timer<0){
        storyPage.destroy();
        player.visible = true;
        emptyBox.visible = true;
        emptyBox2.visible = false;
    }
}
