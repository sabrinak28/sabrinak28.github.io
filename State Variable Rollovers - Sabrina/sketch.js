// State Variables Assignment: Rollovers
// Sabrina Kettle
// March 2nd, 2019
//
// Extra for Experts:
// - Rather than having black fade, I have implemented other colours which fade to each square.
// - If Quadrant II is clicked, the screen will turn black until mouse is moved from quadrant area.
// - If Quadrant IV is clicked, the specific square will become a light switch and continue to change from black to white with each click (deactivates once mouse moves away).
// - BONUS: If the space bar is pressed, prepare for the "party" function. To end the colourful screen, click the space bar once more (SEIZURE WARNING!).


//Variables-------------------

let quad;
let colourI = 255;
let colourII = 255;
let colourIII = 255;
let colourIV = 255;
let hoverII = false;
let hoverIV = false;
let party = false;
let blackout;
let lightSwitch = 0;

//-----------------------------


//Setup----------------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight);
}

//---------------------------------------------


//Function used to determine which quadrant the mouse currently resides in----------------

function determineQuad(){

  //Quadrant I---------------------------------------------------------------------

  if (mouseX > width/2 && mouseX < width && mouseY > 0 && mouseY < height/2){
    quad = 1;
    hoverII = false;
    hoverIV = false;
  }

  //Quadrant II--------------------------------------------------------------------

  if (mouseX > 0 && mouseX < width/2 && mouseY > 0 && mouseY < height/2){
    quad = 2;
    hoverII = true;
    hoverIV = false;
  }

  //Quadrant III--------------------------------------------------------------------

  if (mouseX > 0 && mouseX < width/2 && mouseY > height/2 && mouseY < height){
    quad = 3;
    hoverII = false;
    hoverIV = false;
  }

  //Quadrant IV---------------------------------------------------------------------

  if (mouseX > width/2 && mouseX < width && mouseY > height/2 && mouseY < height){
    quad = 4;
    hoverII = false;
    hoverIV = true;
  }
}

//------------------------------------------------------------------------------------------


//The hefty function to fill each quadrant to what should be expected under every condition

function makeQuad(){

  //To use the blackout function:------------------

  if (hoverII && blackout){
    background(0);
  }

  //To use the light switch function:--------------

  else if (hoverIV && lightSwitch > 0){
    if (lightSwitch === 1){ //If light is turned on
      fill(255);
      rect(width/2, 0, width/2, height/2);
      rect(0, 0, width/2, height/2);
      rect(0, height/2, width/2, height/2);
      rect(width/2, height/2, width/2, height/2);
    }
    if (lightSwitch === 2){ //If light is turned off
      fill(255);
      rect(width/2, 0, width/2, height/2);
      rect(0, 0, width/2, height/2);
      rect(0, height/2, width/2, height/2);
      fill(0);
      rect(width/2, height/2, width/2, height/2);
    }
  }

  //To use the party function:----------------------

  else if (party){
    background(random(255), random(255), random(255));
  }

  //While implemented features are not in use (the basics):---------

  else{
    party = false;
    lightSwitch = 0;
    blackout = false;

    //Make Quadrant I------------------------------------

    if (quad === 1){
      colourI = [255, 74, 117];
    }
    else{
      colourI[0] += 2;
      colourI[1] += 2;
      colourI[2] += 2;
    }
    colourI[0] = constrain(colourI[0], 0, 255);
    colourI[1] = constrain(colourI[1], 0, 255);
    colourI[2] = constrain(colourI[2], 0, 255);
    fill(colourI);
    rect(width/2, 0, width/2, height/2);

    //Make Quadrant II----------------------------------

    if (quad === 2){
      colourII = [148, 95, 255];
    }
    else{
      colourII[0] += 2;
      colourII[1] += 2;
      colourII[2] += 2;
    }
    colourII[0] = constrain(colourII[0], 0, 255);
    colourII[1] = constrain(colourII[1], 0, 255);
    colourII[2] = constrain(colourII[2], 0, 255);
    fill(colourII);
    rect(0, 0, width/2, height/2);

    //Make Quadrant III--------------------------------

    if (quad === 3){
      colourIII = [69, 255, 124];
    }
    else{
      colourIII[0] += 2;
      colourIII[1] += 2;
      colourIII[2] += 2;
    }
    colourIII[0] = constrain(colourIII[0], 0, 255);
    colourIII[1] = constrain(colourIII[1], 0, 255);
    colourIII[2] = constrain(colourIII[2], 0, 255);
    fill(colourIII);
    rect(0, height/2, width/2, height/2);

    //Make Quadrant IV---------------------------------

    if (quad === 4){
      colourIV = [61, 231, 255];
    }
    else{
      colourIV[0] += 2;
      colourIV[1] += 2;
      colourIV[2] += 2;
    }
    colourIV[0] = constrain(colourIV[0], 0, 255);
    colourIV[1] = constrain(colourIV[1], 0, 255);
    colourIV[2] = constrain(colourIV[2], 0, 255);
    fill(colourIV);
    rect(width/2, height/2, width/2, height/2);

  }
}

//---------------------------------------------------------------------------------------------------

//What changes depending on where the mouse is pressed:

function mousePressed(){
  //For the blackout function:
  if (hoverII){
    blackout = true;
  }
  //For the light switch function:
  else if (hoverIV){
    if (lightSwitch < 2){
      lightSwitch += 1;
    }
    else if (lightSwitch === 2){
      lightSwitch -= 1;
    }
  }
}

//-----------------------------------------------------

//What changes when the key is pressed:

function keyPressed(){
  //For the party function:
  if (key === " "){
    if (party){
      party = false;
    }
    else{
      party = true;
    }
  }
}

//-------------------------------------

//At last, to play through it all:

function draw() {

  background(255);
  determineQuad();
  makeQuad();
}

//--------------------------------