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

  if (diameter < width/100){
    rotateY(radians(angleY));
    rotateX(radians(angleX));
    fill(255, 0, 94);
    stroke(255, 144, 185);
    ellipsoid(diameter);
  }
  else{
    rotateY(radians(angleY));
    rotateX(radians(angleX));

    fill(diameter/20, diameter/20, diameter/5);
    torus(diameter, diameter/15);

    // rFill = rFill - 5;
    // gFill = gFill - 5;
    // bFill = bFill - 5;
    links(diameter*0.8);
  }
}

function draw() {
  rotateZ(radians(frameCount/2));
  angleX = map(mouseX, 0, width, -120, 120);
  angleY = map(mouseY, 0, height, -120, 120);
  background(20);
  links(width/3);
}
