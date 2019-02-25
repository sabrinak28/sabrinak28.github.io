// Primitive Paint
// Sabrina Kettle
// February 16th, 2018


//Setup for the background---------------------------------------------------------------------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);

}

//Typography and Autonomous Art----------------------------------------------------------------------------------------

function draw(){

  // Circle Animation--------------------------------------
  strokeWeight(4);
  stroke(180);
  fill(0, random(155, 255), random(155, 255));
  ellipse(width / 2, height /2, random(500), random(500));

  //Name text----------------------------------------------
  textFont("Harrington");
  textSize(width / 10);
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255);
  text("Sabrina Kettle", width / 2, (height / 2) + 40);

}

// Program Controls-----------------------------------------------------------------------------------------------------

function keyTyped(){

  //Create a rectangle---------------------------------------------------------------------------
  if (key === 'a'){
    fill(random(255), random(255), random(255));
    rect(mouseX, mouseY, random(300), random(300));
  }

  //Create an ellipse----------------------------------------------------------------------------
  if (key === 's'){
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, random(300), random(300));
  }

  //Create a triangle----------------------------------------------------------------------------
  if (key === 'd'){
    fill(random(255), random(255), random(255));
    triangle(mouseX, mouseY, mouseX, (mouseY + random(300)), (mouseX + random(300)), mouseY);
  }

  //Clear the background-------------------------------------------------------------------------
  if (key === " "){
    background(20);
  }
}

//----------------------------------------------------------------------------------------------------------------------