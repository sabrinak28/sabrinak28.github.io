// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let sNumber = 20;
let sRed, sBlue, sGreen;
let count = true;
let scheme = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  if (count){
    makeSquares();
  } 
  if (mouseIsPressed){
    if (mouseButton === RIGHT){
      sNumber =- 1;
      count = true;
    }
    else if (mouseButton === LEFT){
      sNumber =+ 1;
      count = true;
    }
  }
}

function makeSquares(){
  let squareSize = sNumber;
  for (let x = 0; x <= width; x+= squareSize){
    for (let y = 0; y <= height; y+= squareSize){
      makeColours();
      fill(sRed, sGreen, sBlue);
      rect(x, y, squareSize, squareSize);
    }
  }
  count = false;
}

function makeColours(){
  if (scheme === 1){
    sRed = int(random(0,50));
    sBlue = int(random(75,255));
    sGreen = int(random(0,50));
  }
  else if (scheme === 0){
    sRed = int(random(255));
    sBlue = int(random(255));
    sGreen = int(random(255));
  }
}

// function mousePressed(){
//   if (mouseButton === RIGHT){
//     sNumber =- 1;
//     count = true;
//   }
//   else if (mouseButton === LEFT){
//     sNumber =+ 1;
//     count = true;
//   }
// }

function keyPressed(){
  if (key === " "){
    scheme = 0;
    count = true;
  }
  if (key === "b"){
    scheme = 1;
    count = true;
  }
}