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
let pipes = [];


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

  constructor(x_, w_){
    this.top = random(height/2.5);
    this.bottom = random(height/2.5);
    this.x = x_;
    this.w = w_;
    this.speed = 5;

  }

  hits(bird){
    if (bird.y < this.top || bird.y > height - this.bottom){
      if (bird.x > this.x && bird.x < this.x + this.w){
        return true;
      }
    }
    return false;
  }

  display(){
    fill(100, 200, 100);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
    //image(pipeImg[random(1, 5)], 0, this.w, this.bottom);
  }

  update(){
    this.x -= this.speed;
  }

  offscreen(){
    if (this.x < -this.w){
      return true;
    }
    else{
      return false;
    }
  }
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  bird = new Bird(25, height/2);
  pipes.push(new Pipes(width, 50));
}

function keyPressed(){
  if (key === " "){
    bird.up();
  }
}

function draw() {
  background(backgroundImg);

  if (pipes[0].hits(bird) === false){

    for(let i = pipes.length - 1; i >= 0; i--){
      pipes[i].display();
      pipes[i].update();
  
      if (pipes[i].offscreen()){
        pipes.splice(i, 1);
      }
  
    }
  
    bird.update();
    bird.display();
    
    if (frameCount % 100 === 0){
      pipes.push(new Pipes(width, 50));
    }

  }

}
