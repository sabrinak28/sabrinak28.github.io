// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cHeight = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(5);
  noLoop();

}

function circleSpiral(){
  push();
  translate(width/2, height/2);

  for (let c = 1; c < 100; c++){

    for (let i = 0; i < 360; i += 6){
      push();
      rotate(radians(i));
      if (i % 60 === 0){
        line(0, cHeight, width / c, 0);
      }
      pop();
    }
    cHeight = cHeight + 1000;
  }
}

function draw() {
  background(220);
  circleSpiral();
}

function keyPressed(){
  if (key === " "){
    save();
  }
}