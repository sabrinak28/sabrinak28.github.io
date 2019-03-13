// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectSize = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(100);
  generateTerrain();
}

function draw() {
}

function generateTerrain(){
  for (let x = 0; x < width; x += rectSize){
    //rect(x, height, rectSize, random(-20, -500));
    rect(x, height, rectSize, noise(-500));
  }
}

function keyPressed(){
  if (key === " "){
    background(255);
    generateTerrain();
  }
}