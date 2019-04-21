// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cHeight = 0;
let sRed = 100;
let sGreen = 81;
let sBlue = 113;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

}

function circleSpiral(){
  push();
  translate(width/2, height/2);

  for (let c = 1; c < width * 2; c++){

    strokeWeight(8);
    fill(sRed, sGreen, sBlue);
    ellipse(0, cHeight, width * 2 / c);

    for (let i = 0; i < 360; i += 6){
      push();
      rotate(radians(i));
      if (i % 12 === 0){
        strokeWeight(4);
        line(0, cHeight, height/ c * 2 - 50, 0);
      }
      pop();
    }

    sRed = sRed - 5;
    sGreen = sGreen - 5;
    sBlue = sBlue - 5;

  }
  pop();
}

function draw() {
  background(0);
  circleSpiral();
}

function keyPressed(){
  if (key === " "){
    save();
  }
}