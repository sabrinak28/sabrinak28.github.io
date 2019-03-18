// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

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

//Average = height - currentHeight