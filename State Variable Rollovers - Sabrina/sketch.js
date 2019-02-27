// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let quad;
let colourI = 255;
let colourII = 255;
let colourIII = 255;
let colourIV = 255;
let hoverII = false;
let hoverIV = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function determineQuad(){
  if (mouseX > width/2 && mouseX < width && mouseY > 0 && mouseY < height/2){
    quad = 1;
  }

  if (mouseX > 0 && mouseX < width/2 && mouseY > 0 && mouseY < height/2){
    quad = 2;
  }

  if (mouseX > 0 && mouseX < width/2 && mouseY > height/2 && mouseY < height){
    quad = 3;
  }

  if (mouseX > width/2 && mouseX < width && mouseY > height/2 && mouseY < height){
    quad = 4;
  }
}

function fillQuad(){
  if (quad === 1){
    fill(colourI);
    rect(width/2, 0, width/2, height/2);
  }
}

function draw() {

  background(255);
  determineQuad();

  //Fill Quadrant I
  if (quad === 1){
    colourI = 0;
  }
  else{
    colourI += 5;
  }
  colourI = constrain(colourI, 0, 255);
  fillQuad();

  //Fill quadrant II
  if (quad === 2){
    hoverII = true;
    colourII = 0;
  }
  else{
    hoverII = false;
    colourII += 5;
  }
  colourII = constrain(colourII, 0, 255);
  fill(colourII);
  rect(0, 0, width/2, height/2);
  

  //Fill Quadrant III
  if (quad === 3){
    colourIII = 0;
  }
  else{
    colourIII += 5;
  }
  colourIII = constrain(colourIII, 0, 255);
  fill(colourIII);
  rect(0, height/2, width/2, height/2);


  //Fill Quadrant IV
  if (quad === 4){
    hoverIV = true;
    colourIV = 0;
  }
  else{
    hoverIV = false;
    colourIV += 5;
  }
  colourIV = constrain(colourIV, 0, 255);
  fill(colourIV);
  rect(width/2, height/2, width/2, height/2);


}