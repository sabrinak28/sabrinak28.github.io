// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let sNumber = 20;
let sRed, sBlue, sGreen;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  makeSquares();
}

function makeSquares(){
  if (mouseIsPressed){
    if (mouseButton === RIGHT){
      sNumber =- 1;
    }
    else if (mouseButton === LEFT){
      sNumber =+ 1;
    }
  }
  let squareSize = width/sNumber;

  for (let x = 0; x < width; x+= squareSize){
    for (let y = 0; y < height; y+= squareSize){
      makeColours();
      fill(sRed, sGreen, sBlue);
      rect(x, y, squareSize, squareSize);
    }
  }
}

function makeColours(){
  sRed = int(random(255));
  sBlue = int(random(255));
  sGreen = int(random(255));
}