// Refactoring Excercise Two
// Sabrina Kettle
// March 28th, 2019
//
// This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
// http://www.learningprocessing.com
// Refactor the following code. Be sure the refactored version:
//  - is readable
//  - is able to work easily with any canvas size

//Variables:----

let rectX;
let rectY;

//--------------

//Setup:---------------------

function setup() {
  createCanvas(480, 270);

  //Variable Assignment
  rectX = width/2;
  rectY = height/2;
}

//---------------------------

//This will make the graph in the background:-------

function makeGraph(){
  stroke(0);
  line(rectX, 0, rectX, height); //Vertical axis
  line(0, rectY, width, rectY); //Horizontal axis
}

//--------------------------------------------------

//When hovering over a rectangle, it will fill back:----

function fillGraph(){
  noStroke(); //Set up fill
  fill(0);

  if (mouseX > rectX && mouseY < rectY){
    rect(rectX, 0, rectX, rectY); //Fill Quad I
  }
  else if (mouseX < rectX && mouseY < rectY){
    rect(0, 0, rectX, rectY); //Fill Quad II
  }
  else if (mouseX < rectX && mouseY > rectY){
    rect(0, rectY, rectX, rectY); //Fill Quad III
  }
  else if (mouseX > rectX && mouseY > rectY){
    rect(rectX, rectY, rectX, rectY); //Fill Quad IV
  }
}

//------------------------------------------------------

//Draw:---------------

function draw() {
  background(255);
  makeGraph();
  fillGraph();
}

//--------------------