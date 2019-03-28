// Refactoring Excercise One
// Sabrina Kettle
// March 28th, 2019

//Variables:-----------------------

let rectX, rectY, xSpeed, ySpeed;

//---------------------------------

//Setup:-------------------------------------------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectX = 200; rectY = 300; xSpeed = random(3, 8); ySpeed = random(3, 8);
}

//-------------------------------------------------------------------------

//This function will constantly move the rectangle:---

function rectPosition(){

  rectX += xSpeed; //Change X position
  rectY += ySpeed; //Change Y position

  if (rectX >= width - 250 || rectX <= 0){ //Restrict
    xSpeed = xSpeed * -1;
  }

  if (rectY >= height - 75 || rectY <= 0){ //Restrict
    ySpeed = ySpeed * -1;
  }

}

//----------------------------------------------------

//Draw:-----------------------------------------------

function draw() {
  background(80, 80, 80);
  rectPosition(); //Get rectangle information
  rect(rectX, rectY, 250, 75); //Build rectangle
}

//----------------------------------------------------
