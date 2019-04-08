// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const SPACING = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function diagonalDescending(x, y, s){
  line(x - s/2, y - s/2, x + s/2, y + s/2);
}

function diagonalAscending(x, y, s){
  line(x - s/2, y + s/2, x + s/2, y - s/2);
}


function draw() {
  background(220);
  for (let x = SPACING/2; x < width - SPACING/2; x += SPACING){
    for (let y = SPACING/2; y < height - SPACING/2; y += SPACING){
      if (int(random(2)) === 0){
        diagonalDescending(x, y, SPACING);
      }
      else{
        diagonalAscending(x, y, SPACING);
      }
    }
  }
}
