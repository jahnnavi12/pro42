const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var drops,umbrella,thunder;
var Drop=[],maxdrops=100;
var t1,t2,t3,t4;

function preload(){
t1=loadImage("one.png");
t2=loadImage("two.png");
t3=loadImage("three.png");
t4=loadImage("four.png");
}

function setup(){
createCanvas(300,500);

engine = Engine.create();
world = engine.world;   
  
umbrella=new Umbrella(150,380);

for (var i = 0; i <maxdrops; i++) {
Drop.push(new Drops(random(0,300),random(0,500)));
}
}

function draw(){
background("black"); 
Engine.update(engine);

if (frameCount % 50 === 0) {
    thunder = createSprite(random(10,350),random(10,35),5,5);
    thunder.velocityY = 6;
    var rand = Math.round(random(1,4));
    switch(rand){
        case 1: thunder.addImage("t",t1);
        break;
        case 2: thunder.addImage("t5", t2);
        break;
        case 3: thunder.addImage("t6", t3);
        break;
        case 4: thunder.addImage("t7", t4);
        break;
       }
}

umbrella.display();
drawSprites();
}   

