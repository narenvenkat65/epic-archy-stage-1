const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher 
var baseimage;
var playerArcherimg

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherimg=loadImage("./assets/playerArcher.png")
}
var options = {
  isStatic: true,
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  //create player base body
  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
 

  World.add(world, playerBase);
  //create player body
  
  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
 
  World.add(world,player)

 
  
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  //show the player image using image() function
  image(playerimage,player.position.x,player.position.y,50,180,)
  //show the playerbase image using image() function
 
  image(baseimage,playerBase.position.x,playerBase.position.y,180,50)
  
  
  image(playerArcherimg,260,240,115,100)

  

//playerArcher.display()
// Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
