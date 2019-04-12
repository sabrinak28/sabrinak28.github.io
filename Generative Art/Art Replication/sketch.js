// Art Replication Warm-up
// Sabrina Kettle
// April 12th, 2019
//
// I typically would have challenged myself more by doing one of the more difficult art pieces, but I just did this warm-up so
// I can have more time to make my own generative art design really epic.

//Variables:---------

let x1, x2, y1, y2;
const LNUM = 100;

//-------------------

//Setup:-------------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

  //Assign Variables
  x1 = random(width/1.5, width/3);
  y1 = random(height/1.5, height/3);
  x2 = x1 + random(-width/6, width/6);
  y2 = y1;

}

//---------------------------------------------

//This function will draw the lines:-----------------

function lines(){

  for (let i = 0; i < LNUM; i ++){ //Draw 100 lines
    line(x1, y1, x2, y2);

    //Connect starting position
    x1 = x2;
    y1 = y2;

    if (i % 2 === 0){ //Change direction
      determineX();
    }
    else{
      determineY();
    }
  }

}

//----------------------------------------------------

//To assign an X variable to fit the restraint:---

function determineX(){
  y2 = y1;
  if (x2 > width/2){
    x2 = x2 + random(-width/7);
  }
  else{
    x2 = x2 + random(width/7);
  }
}

//------------------------------------------------

//To assign a Y variable to fit the restraint:----

function determineY(){
  x2 = x1;
  if (y2 >= height - 200){
    y2 = y2 + random(-height/4);
  }
  else if (y2 <= 200){
    y2 = y2 + random(height/4);
  }
  else{
    y2 = y2 + random(-height/4, height/4);
  }
}

//-----------------------------------------------

//And... draw!--------

function draw() {
  background(220);
  lines();
}

//--------------------