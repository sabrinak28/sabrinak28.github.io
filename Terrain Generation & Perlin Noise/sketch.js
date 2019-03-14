// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectSize = 5;
let xoff = -500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(100);
  generateTerrain();
}

function draw() {
}

function generateTerrain(){
  for (let c = 0; c < width; c += rectSize){
    //rect(x, height, rectSize, random(-20, -500));
    let x = map(noise(xoff), 0 , 1, 0, width);
    xoff -= 0.001;
    rect(c, height, rectSize, noise(xoff));
  }
}

function keyPressed(){
  if (key === " "){
    background(255);
    generateTerrain();
  }
}