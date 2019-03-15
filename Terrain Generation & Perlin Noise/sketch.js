// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let rectSize = 5;
// let xoff = -500;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   fill(100);
//   generateTerrain();
// }

// function draw() {
// }

// function generateTerrain(){
//   for (let c = 0; c < width; c += rectSize){
//     //rect(x, height, rectSize, random(-20, -500));
//     let x = map(noise(xoff), 0 , 1, 0, width);
//     xoff -= 0.001;
//     rect(c, height, rectSize, noise(xoff));
//   }
// }

// function keyPressed(){
//   if (key === " "){
//     background(255);
//     generateTerrain();
//   }
// }

let tWidth = 1;
let start = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}

function generateTerrain(){
  let highest = height;
  let highestX = 0;
  //Do all the work to draw the terrain
  let xOff = start;
  for(let x = 0; x < width; x += tWidth){
    let currentHeight = noise(xOff)*height;
    if (currentHeight < highest){
      highestX = currentHeight;
      print(currentHeight);
    }
    rect(x, currentHeight, x + tWidth, height);
    xOff += 0.004;
  }
  start += 0.01;
}

function drawFlag(){

}

function draw(){
  background(220);
  generateTerrain();
}
