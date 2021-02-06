var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    var surface1 = createSrite(100,300,50,70);
    surface1.shapeColor = "lime";
    var surface2 = createSrite(200,300,50,70);
    surface1.shapeColor = "blue";
    var surface3 = createSrite(300,300,50,70);
    surface1.shapeColor = "red";
    var surface4 = createSrite(400,300,50,70);
    surface1.shapeColor = "aquamarine";
    
    var box = createSprite(random(20,750));
    box.velocityX = 3;
    box.velocityY = 3;



}

function draw() {
    background("magenta");
    createEdgeSprites();

    box.bounceOff(edges);

    if(surface1.isTouching (box) && box.bounceOff(surface1))
    {
        box.shapeColor = "lime";
    }

    if(surface2.isTouching (box) && box.bounceOff(surface2))
    {
        box.shapeColor = "blue";
    }

    if(surface3.isTouching (box) && box.bounceOff(surface3))
    {
        box.shapeColor = "red";
    }

    if(surface4.isTouching (box) && box.bounceOff(surface4))
    {
        box.shapeColor = "aquamarine";
    }
    
    box.display();
    surface1.display();
    surface2.display();
    surface3.display();
    surface4.display();
   } 
