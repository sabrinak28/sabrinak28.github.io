// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let position;
// let velocity;
// let gravity;

let m;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //Vectors MUST be assigned in setup
  // position = createVector(width/2, height/2);
  // velocity = createVector(random(-1, 1), random(-1, -0.1));
  // gravity = createVector(0, 0.098);

  m = new Mover(width/2, height/2);

}

function draw(){
  m.move();
  m.display();

}

class Mover {
  constructor(x_, y_){
    this.size = 30;
    this.position = createVector(x_, y_);
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
  }

  edges(){
    if(this.position.x < 0)this.position.x = width;
    if(this.position.x > width)this.position.x = 0;
    if(this.position.y < 0)this.position.y = height;
    if(this.position.y > height)this.position.y = 0;
  }
  

  move(){
    this.acceleration = p5.Vector.random2D().mult(2);
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.velocity.limit(5);
    this.edges();
  }

  display(){
    ellipse(CENTER);
    push();
    translate(this.position.x, this.position.y);
    ellipse(0, 0, this.size, this.size);
    pop();
  }
}

// function draw() {
//   background(220);
//   push();
//   translate(width/2, height/2);

//   let mouse = createVector(mouseX, mouseY);
//   let center = createVector(width/2, height/2);

//   let towardsMouse = mouse.sub(center);
//   //towardsMouse.limit(100);
//   towardsMouse.normalize();
//   towardsMouse.mult(75);
//   line(0, 0, towardsMouse.x, towardsMouse.y);

//   let m = towardsMouse.mag();
//   textSize(30);
//   text(m, 0, 50);
//   pop();

//   // velocity.add(gravity);
//   // position.add(velocity);
//   // ellipse(position.x, position.y, 40, 40);
// }
