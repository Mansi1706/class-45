const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bg_img;

function preload(){
    bg_img=loadImage("background.jpg");
    angryBird1 = loadImage("angrybird1.png");
    angryBird2 = loadImage("angrybird2.png");

    catapult_img = loadImage("catapult.png");
}



function setup(){
    createCanvas(1200,600);

    
    engine = Engine.create();
    world = engine.world;

    
    var options={
        isStatic:true
    }

    catapult=Bodies.rectangle(20,110,100,100,options);
    World.add(world,catapult.body);

    
    bird1=Bodies.circle(25,100,10,options);
    World.add(world,bird1.body);
 

    ground=Bodies.rectangle(0,580,1200,10,options);
    World.add(world,ground.body);


}
function draw(){
    background(220);
    image(bg_img,0,0,1200,600);

    Engine.update(engine);

    push()
    translate(catapult.position.x,catapult.position.y);
    imageMode(CENTER);
    image(catapult_img,130,350,100,110);
    pop();


    push()
    translate(bird1.position.x,bird1.position.y);
    imageMode(CENTER);
    image(angryBird1,80,335,100,110);
    pop();
    push();
    rectMode(CENTER);
    noStroke();
    fill(148,127,146);
    rect(ground.x,ground.y,1200,10)
    pop();
    
    
  
}

function keyPressed(){
    if(keyCode===RIGHT_ARROW){

     Matter.body.applyForce(bird1.body,{x:0,y:0},{x:1,y:-0.5});

    }  

}