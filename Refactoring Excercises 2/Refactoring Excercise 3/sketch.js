// Refactoring Assignment Three
// Sabrina Kettle
// April 4th, 2019

//This program will draw a target made of ellipses.

//Constants:--------------

const WINDOW_SIZE = 400;
const E_POSITION = 200;
const E_SIZE = 40;

//------------------------

//Setup:-----------------------------------

function setup() {
  createCanvas(WINDOW_SIZE, WINDOW_SIZE);
}

//-----------------------------------------

//This will contain the for loop for drawing the target:--------------------

function drawTarget(){

  for (let i = 0; i < WINDOW_SIZE; i += E_SIZE){ //Loop

    ellipse(E_POSITION, E_POSITION, WINDOW_SIZE - i, WINDOW_SIZE - i);

  }

}

//--------------------------------------------------------------------------

//And finally, draw:-----

function draw() {
  background(240);
  drawTarget();
}

//-----------------------