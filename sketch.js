const Engine = Matter.Engine;
const World = Matter.World;
const  Events = Matter.Events;
const Bodies = Matter.Bodies;


var snow=[];
var girl;
var bg, bgPic;


function preload(){

bgPic= loadImage("snow1.jpg")

}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
}

function draw() {
  background(bgPic);  
  Engine.update(engine);

  if (frameCount %90===0){
    snow.push(new Snow(random(0,800),10,0.5))
     console.log("hi")
     
  }

  for(i=0; i< snow.length; i++){
    snow[i].display();
  }

  drawSprites();

  
  

}