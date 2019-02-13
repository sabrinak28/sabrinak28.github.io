// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state = 0; //0 = top, 1 = right, 2 = bottom, 3= left

const rectSize = 30;
let x = 0;
let y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if (state === 0){ //on top, going right
    x += 10;
    if (x >= windowWidth - rectSize) state = 1;
  }
  else if (state === 1){ //on right, going down
    y += 10;
    if (y >= windowHeight - rectSize) state = 2;
  }
  else if (state === 2){ //on right, going down
    x -= 10;
    if (x >= windowWidth - rectSize) state = 3;
  }
  else if (state === 3){ //on right, going down
    y -= 10;
    if (y = windowHeight - rectSize) state = 0;
  }
  rect(x,y,rectSize,rectSize);
}
