const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var engine, world;
var ball, rope;
var ball2, ball3, ball4, rope2, rope3, rope4;

function setup() {
    createCanvas(1200, 800);

    engine = Engine.create();
    world = engine.world;
    
    
   
    
    ball=new Ball(200,200,80,80);
    ball2 =new Ball(170,200,80,80);
    ball3 =new Ball(230,200,80,80);
    ball4=new Ball(140,200,80,80);


    rope = new Rope(ball.body,{x:500,y:50});
    rope2 = new Rope(ball2.body,{x:510,y:50});
    rope3 = new Rope(ball3.body,{x:520,y:50});
    rope4 = new Rope(ball4.body,{x:490,y:50});

}

function draw() {
    background("black");

    Engine.update(engine);


     

    ball.display();
    ball2.display();
    ball3.display();
    ball4.display();

    rope.display();
    rope2.display();
    rope3.display();
    rope4.display();



}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX, y: mouseY});
}