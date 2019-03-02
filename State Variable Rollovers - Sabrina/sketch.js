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
let blackout;
let lightSwitch = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function determineQuad(){
  if (mouseX > width/2 && mouseX < width && mouseY > 0 && mouseY < height/2){
    quad = 1;
    hoverII = false;
    hoverIV = false;
  }

  if (mouseX > 0 && mouseX < width/2 && mouseY > 0 && mouseY < height/2){
    quad = 2;
    hoverII = true;
    hoverIV = false;
  }

  if (mouseX > 0 && mouseX < width/2 && mouseY > height/2 && mouseY < height){
    quad = 3;
    hoverII = false;
    hoverIV = false;
  }

  if (mouseX > width/2 && mouseX < width && mouseY > height/2 && mouseY < height){
    quad = 4;
    hoverII = false;
    hoverIV = true;
  }
}

function fillQuad(){
  if (quad === 1){
    fill(colourI);
    rect(width/2, 0, width/2, height/2);
  }
}

function makeQuad(){

  if (hoverII && blackout){
    background(0);
  }

  else if (hoverIV && lightSwitch > 0){
    if (lightSwitch === 1){
      fill(255);
      rect(width/2, height/2, width/2, height/2);
    }
    if (lightSwitch === 2){
      fill(0);
      rect(width/2, height/2, width/2, height/2);
    }
  }

  else{
    lightSwitch = 0;
    blackout = false;

    //Make Quadrant I
    if (quad === 1){
      colourI = [255, 74, 117];
    }
    else{
      colourI[0] -= 3;
      colourI[1] += 3;
      colourI[2] += 3;
    }
    colourI[0] = constrain(colourI[0], 45, 255);
    colourI[1] = constrain(colourI[1], 0, 155);
    colourI[2] = constrain(colourI[2], 0, 200);
    fill(colourI[0], colourI[1], colourI[2]);
    rect(width/2, 0, width/2, height/2);

    //Make Quadrant II

    if (quad === 2){
      colourII = 0;
    }
    else{
      colourII += 5;
    }
    colourII = constrain(colourII, 0, 255);
    fill(colourII);
    rect(0, 0, width/2, height/2);

    //Make Quadrant III

    if (quad === 3){
      colourIII = 0;
    }
    else{
      colourIII += 3;
    }
    colourIII = constrain(colourIII, 0, 255);
    fill(colourIII);
    rect(0, height/2, width/2, height/2);

    //Make Quadrant IV

    if (quad === 4){
      colourIV = 0;
    }
    else{
      colourIV += 3;
    }
    colourIV = constrain(colourIV, 0, 255);
    fill(colourIV);
    rect(width/2, height/2, width/2, height/2);

  }
}

function mousePressed(){
  if (hoverII){
    blackout = true;
  }

  else if (hoverIV){
    if (lightSwitch < 2){
      lightSwitch += 1;
    }
    else if (lightSwitch === 2){
      lightSwitch -= 1;
    }
  }
}

function draw() {

  background(255);
  determineQuad();
  makeQuad();
}