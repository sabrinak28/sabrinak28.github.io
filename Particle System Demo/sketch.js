// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let pArray = [];
let gear;

function preload(){
  gear = loadImage("/assets/gear.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  imageMode(CENTER);
}

class Particle{
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
    this.c = color(map(x_, 0, width, 255, 0), map(y_, 0, height, 0, 255), map(x_, 0, width, 0, 255));
    this.size = random(10, 70);
    this.ySpeed = random(-3, 1);
    this.xSpeed = random(-1, 1);
    this.lifetime = int(random(70, 500));
    this.maxLifetime = this.lifetime;
    this.GRAV = 0.1;
    //this.noiseLoc = random(10);
    this.steps = 0;
  }

  move(){
    this.img = gear;
    this.steps ++;
    this.lifetime -= 1;
    this.ySpeed += this.GRAV;
    //this.x += (map(noise(this.noiseLoc), 0, 1, -1, 1));
    //this.noiseLoc += 0.01;

    this.x += this.xSpeed;

    this.y += this.ySpeed;
    this.floorCollision();
  }

  isAlive(){
    if (this.lifetime > 0){
      return true;
    }
    else{
      return false;
    }
  }
  
  display(){
    ellipseMode(CENTER);
    fill(this.c);
    push();
    translate(this.x, this.y);
    scale(map(this.lifetime, 0, this.maxLifetime, 0, 1));
    rotate(radians(this.steps * 3));
    //ellipse(0, 0, this.size, this.size);
    image(gear, 0, 0, this.size, this.size);
    pop();
  }

  floorCollision(){
    if (this.y > height){
      this.y = height;
      this.ySpeed *= -1;
    }
  }
}

function mouseClicked(){
  pArray.push(new Particle(mouseX,mouseY));
}

function draw() {
  background(20); //Remove to make hair
  pArray.push(new Particle(mouseX,mouseY));
  for (let i = 0; i < pArray.length; i++){
    pArray[i].move();
    pArray[i].display();
    if (pArray[i].isAlive() === false){
      pArray.splice(i, 1);
      i --;
    }
  }
}
