// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let backgroundImg;
let birdImg = [];
let pipeImg = [];
let stripeImg = [];

let bird;


function preload(){

  backgroundImg = loadImage("assets/background.png");

  for (let i = 1; i < 4; i ++){
    birdImg.push(loadImage("assets/Bird" + i + ".png"));
  }

  for (let i = 1; i < 6; i++){
    pipeImg.push(loadImage("assets/pipes - " + i + ".png"));
  }

}


class Bird{

  constructor(x_, y_){
    this.y = y_;
    this.x = x_;
    this.gravity = 1;
    this.lift = -35;
    this.velocity = 0;
  }

  display(){
    //display the bird image at this.y, and this.x
    image(birdImg[0], this.x, this.y);
  }

  update(){
    this.velocity += this.gravity;
    this.velocity += 0.9;
    this.y += this.velocity;

    if (this.y > height){
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0){
      this.y = 0;
      this.velocity = 0;
    }

  }

  up(){
    this.velocity += this.lift;
  }
}


class Pipes {

  constructor(x_){
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = x_;
    this.w = 20;

  }

  display(){
    image(pipeImg[random(1, 5)], 0, this.w, this.bottom);
  }
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  bird = new Bird(25, height/2);
}

function keyPressed(){
  if (key === " "){
    bird.up();
  }
}
function draw() {
  background(backgroundImg);
  bird.update();
  bird.display();
}
