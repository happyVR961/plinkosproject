var particles=[];
var divisions=[];
var plinkos=[];



const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var divisionheight;
var divisionheight;
function setup() {
  createCanvas(480,650);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,height,480,20);
  division1 = new division(0,540,10,200);
  division2 = new division(80,540,10,200);
  division3 = new division(160,540,10,200);
  division4 = new division(240,540,10,200);
  division5 = new division(320,540,10,200);
  division6 = new division(400,540,10,200);
  division7 = new division(480,540,10,200);
  // for(var k = 0; k<=width; k = k+80){
  //   divisions.push(new division(k, height-divisionheight/2, 10, divisionheight));
  // }
  for (var j=40; j<=width;j = j+50){
    plinkos.push(new Plinko(j,75,10));
  }
  for (var i=15; i<=width; i = i+50){
    plinkos.push(new Plinko(i,175,10));
  }
  for (var k=40; k<=width;k = k+50){
    plinkos.push(new Plinko(k,275,10));
  }
  for (var a=10; a<=width;a = a+50){
    plinkos.push(new Plinko(a,375,10));
  }
 
}

function draw() {
  background(0); 
  Engine.update(engine); 
   //divisionheight=300;
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  // for (var k = 0; k<divisions.length; k++){
  //   divisions[k].display();
  // }
  ground.display();

  
  for (var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
  }
  for (var i = 0; i<plinkos.length;i++){
    plinkos[i].display();
  }

  

for (var k = 0; k<plinkos.length;k++){
    plinkos[k].display();
  }

 
  for (var a = 0; a<plinkos.length;a++){
    plinkos[a].display();
  }

  if(frameCount%5===0){
    particles.push(new Particle(random(10,470),10,7) )
    
     //particles[b].display();
  }

 
  for (var b = 0; b<particles.length; b++){
    particles[b].display();
    //console.log(particles[0].body.speed);
  }
   
   

  drawSprites();
}