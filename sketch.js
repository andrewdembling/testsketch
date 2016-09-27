var x = 200;
var y = 200;
var speed = 25;
function setup() {
  createCanvas(400,400);
  c = color(255,255,255);
}

function draw() {
background(255,0,255);
fill(c);
rect(200,100,150,250);
triangle(400,200,100,200,300,400);
ellipse(300,200,99,100);
rect(x,y,100,100)
 x = x + speed;
if(x>=width-100){
  speed = speed * -1;
  c = color(random(255),random(255),random(255))
}
  if(x<=0){
  speed = speed * -1;
}
 function mousePressed(){
   c = color(random(255),random(255),random(255));
 }

}
