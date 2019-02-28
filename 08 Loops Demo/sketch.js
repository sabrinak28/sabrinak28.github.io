// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 150;
let y = 150;
let colours = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colours.push(color(255, 0, 0));
  colours.push(color(0, 200, 0));
  colours.push(color(0, 0, 255));
  colours.push(color(255, 255, 0));
  colours.push(color(255, 255, 255));

}

function drawTargetWhile(){
  let diameter = 200;
  let counter = 0;

  
  while(counter < 5){
    ellipse(width/2, height/2, diameter, diameter);
    counter ++;
    diameter -= 40;
  }
}

function drawTargetFor(){
  for (let i = 5; i > 0; i--){
    fill(colours[i - 1]);
    ellipse(x, y, i*40, i*40);
  }
}
function draw() {
  background(220);
  //drawTargetWhile();
  drawTargetFor();

}
