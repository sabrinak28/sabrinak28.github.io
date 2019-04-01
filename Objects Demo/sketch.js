// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let walkers = [];
const NUM_WALKERS = 400;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (let i = 0; i < NUM_WALKERS; i++){
    walkers.push(new Walker(random(width), random(height)));
  }
}

class Walker{
  //Constructor and class properties
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
    this.speed = random(10, 20);
    this.size = random(20, 50);

    this.c = color(int(random(255)), int(random(200, 255)), int(random(200, 255)));
    this.xOff = random(200);
    this.yOff = random(200);
  }

  //Class Methods
  display(){
    rectMode(CENTER);
    fill(this.c);
    rect(this.x, this.y, this.size, this.size);
  }

  move(){
    let myChoice = Math.floor(random(4));

    if (myChoice === 0){ //Right
      this.x += this.speed;
    }
    else if (myChoice === 1){ //Left
      this.x -= this.speed;
    }
    else if (myChoice === 2){ //Down
      this.y += this.speed;
    }
    else{ //Up
      this.y -= this.speed;
    }
  }

  movePerlin(){
    this.x += map(noise(this.xOff), 0, 1, -this.speed, this.speed);
    this.y += map(noise(this.yOff), 0, 1, -this.speed, this.speed);
    this.xOff += 0.02;
    this.yOff += 0.02;

  }
}

function draw() {
  for(let i = 0; i < NUM_WALKERS; i++){
    walkers[i].movePerlin();
    walkers[i].display();
  }
}
