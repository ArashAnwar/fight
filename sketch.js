var player;
var opponent;
var GameState;
var database;

function setup(){
    database = firebase.database();
createCanvas(displayWidth,displayHeight);
player = createSprite(displayWidth-700,displayHeight/2,50,60)
opponent = createSprite(displayWidth-300,displayHeight/2,50,60)
ground = createSprite(displayWidth/2,displayHeight/2,displayWidth,40);
healthBar = createSprite(displayWidth/2-100,displayHeight/10,200,50)
player.velocityY = 0;


}

function draw(){
    

    background(0);

    player.collide(ground);

    
    if(keyDown(UP_ARROW)&& player.y>=displayHeight/2-140){
       player.velocityY =  -40;
    }
    player.velocityY = player.velocityY+10;

    
    edges = createEdgeSprites();
    player.collide(edges);
    drawSprites();

    if(keyDown(RIGHT_ARROW)){
        player.x=player.x+10
    }
    if(keyDown(LEFT_ARROW)){
        player.x=player.x-10
    }
    if(keyDown("D")&& player.istouching(opponent)){
        healthBar.width - 10
    }
}
