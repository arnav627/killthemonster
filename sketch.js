const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var hero; 


var engine, world;

function preload() {
    backgroundImg = loadImage("images/GamingBackground.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    hero = new Hero(350,100,100);
    rope = new Fly(hero.body,{x:200, y:0});
    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
     ground.display();
     hero.display();
     rope.display();

}

function mouseDragged(){
Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY})

}