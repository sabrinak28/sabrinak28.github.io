// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let quad;
let colourI =  0;
let colourII, colourIII, colourIV;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  //Fill quadrant II
  if (mouseX > 0 && mouseX < width/2 && mouseY > 0 && mouseY < height/2){
    fill(0);
  }
  else{
    fill(255);
  }
  rect(0, 0, width/2, height/2);


  //Fill Quadrant I
  if (mouseX > width/2 && mouseX < width && mouseY > 0 && mouseY < height/2){
    colourI = 0;
    fill(colourI);
  }
  else{
    colourI += 5;
  }
  colourI = constrain(colourI, 0, 255);
  fill(colourI);
  rect(width/2, 0, width/2, height/2);


  //Fill Quadrant III
  if (mouseX > 0 && mouseX < width/2 && mouseY > height/2 && mouseY < height){
    fill(0);
  }
  else{
    fill(255);
  }
  rect(0, height/2, width/2, height/2);

  //Fill Quadrant IV
  if (mouseX > width/2 && mouseX < width && mouseY > height/2 && mouseY < height){
    fill(0);
    fadeOut = false;
  }
  else{
    fill(255);
  }
  rect(width/2, height/2, width/2, height/2);
}
