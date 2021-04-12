var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car= createSprite(50, 200, 50, 50);
  car.shapeColor='white';
  wall = createSprite(1500,200,60,height/2);
  speed =  random(55,90);
  weight = random(400,1500);
  car.velocityX=speed;
}

function draw() {
  background(0,0,0);
  
  if((wall.x-car.x) <= (car.width+wall.width)/2){
    car.x=wall.x-(car.width+1);
    car.velocityX=0;
    deformation = (0.5*weight*speed*speed/22500);
    if (deformation>180){
      car.shapeColor='red';
    }
    if (deformation<=180 && deformation>=80){
      car.shapeColor='yellow';
    }
    if (deformation<80){
      car.shapeColor='green';
    }
  }
  drawSprites();
 
 
  
}