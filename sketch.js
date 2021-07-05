var player;
var playerImg;
var enemy1Group,enemy2Group,enemy3Group,enemy4Group;
var enemy1Img, bg;



function Preload() {
  playerImg = loadImage("player.png")
  enemy1Img = loadImage("Enemy 1.png")
  enemy2Img = loadImage("Enemy2.jpg")
  enemy3Img = loadImage("Enemy3.png")
  enemy4Img = loadImage("Enemy4.png")
  bg=loadImage("background.jpg")

}
function setup() {
  createCanvas(1200,600);
  player = createSprite(400, 580, 50, 50);
 // player.addImage("enemy1",enemy1Img)

  //create group for enemy1
enemy1Group = createGroup();

//create group for enemy2
enemy2Group = createGroup();

//create group for enemy3
 enemy3Group = createGroup();

//create group for enemy43
enemy4Group = createGroup();
}


function draw() {
  background(bg);  
  player.x=mouseX
  if(frameCount%100==0){
    var rand=Math.round(random(1,4))
    console.log(rand)
    if (rand==1){
      enemy1();
    }
    else if (rand==2){
      enemy2();
    }
    else if (rand==3){
      enemy3();
    }
    else if (rand==4){
      enemy4();
    }
  }

  drawSprites();
}

function enemy1(){
  var enemy1 = createSprite(random(30, 1170), 0);
  enemy1.addImage("enemy1",enemy1Img)
  enemy1.scale = 0.5;
  enemy1.velocityY = random(2,5);
  enemy1Group.add(enemy1);
}

function enemy2(){
  var enemy2 = createSprite(random(30, 1170), 0);
  enemy2.scale= 0.5;
  enemy2.velocityY =random(2,5) ;
  enemy2Group.add(enemy2);
  
}

function enemy3(){
  var enemy3 = createSprite(random(30, 1170), 0);
  enemy3.scale =0.5;
  enemy3.velocityY = random(2,5);
  enemy3Group.add(enemy3);
  
}

function enemy4(){
  var enemy4 = createSprite(random(30, 1170), 0);
  enemy4.scale= 0.5;
  enemy4.velocityY = random(2,5);
  enemy4Group.add(enemy4);
  
}