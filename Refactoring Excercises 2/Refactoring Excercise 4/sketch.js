// Refactoring Assignment Four
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const WINDOW_SIZE = 600;
const RECT_SIZE = 75;

let colour = true;

function setup() {
  createCanvas(WINDOW_SIZE, WINDOW_SIZE);
}

function blackOrWhite(){
  if (colour){
    fill(255);
  }
  else{
    fill(0);
  }
  colour = !colour;
}

function draw() {
  background(220);
  for (let x = 0; x < WINDOW_SIZE; x += RECT_SIZE){
    for (let y = 0; y < WINDOW_SIZE; y += RECT_SIZE){
      blackOrWhite();
      rect(x, y, RECT_SIZE, RECT_SIZE);
    }
    colour = !colour;
  }
}
