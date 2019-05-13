// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//Production Rules:
//1) 

let angleX = 5;
let angleY = 5;

let rFill = 255;
let gFill = 200;
let bFill = 255;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  smooth();
}

function links(diameter){
  if (diameter < 10){
    rotateY(radians(angleY));
    rotateX(radians(angleX));
    fill(rFill,gFill,bFill);
    torus(diameter);
  }
  else{
    fill(rFill,gFill,bFill);
    torus(diameter);
    rotateY(radians(angleY));
    rotateX(radians(angleX));

    // rFill = rFill - 5;
    // gFill = gFill - 5;
    // bFill = bFill - 5;
    links(diameter*0.7);
  }
}

function draw() {
  rotateZ(radians(frameCount/2));
  angleX = map(mouseX, 0, width, -120, 120);
  angleY = map(mouseY, 0, height, -120, 120);
  background(0);
  links(700);
}
