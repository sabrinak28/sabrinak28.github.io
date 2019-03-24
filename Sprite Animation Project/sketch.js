// Sprite Animation Project
// Sabrina Kettle
// March 23rd, 2019
//
// Extra for Experts:
// - I do have a LOT of extra code for this one, but I really wanted to make the background super snazzy.
// - When the right arrow is pressed, Yoda will move with an animation to the right of the screen.
// - When the left arrow is pressed, Yoda wil move with an animation to the left of the screen.
// - When the down arrow is pressed, Yoda will lay down into his rest pose.
// - When not pressing anything, Yoda is meowing, moving his tail, and blinking.
// - I ensured that no matter the window size, every object will be in place and not be a jumbled mess. It should work mostly with any canvas size.


//Variables:------------------

let yodaImagesI = [];
let yodaImagesR = [];
let yodaImagesL = [];
let yodaImagesRe = [];
let yodaArt1, yodaArt2;
let currentX, currentY;
let speed = 8;
let c = 0;
let start = true;

//----------------------------

//To preload all the images into their own arrays:---------------------

function preload(){

  yodaArt1 = loadImage("assets/yodaP1.jpg");

  yodaArt2 = loadImage("assets/yodaP2.jpg");

  for (let i = 0; i < 4; i++){
    yodaImagesI.push(loadImage("assets/yoda-i-" + i + ".png"));
  }
  for (let i = 4; i < 8; i++){
    yodaImagesL.push(loadImage("assets/yoda-i-" + i + ".png"));
  }
  for (let i = 8; i < 12; i++){
    yodaImagesR.push(loadImage("assets/yoda-i-" + i + ".png"));
  }
  for (let i = 12; i < 18; i++){
    yodaImagesRe.push(loadImage("assets/yoda-i-" + i + ".png"));
  }
}

//------------------------------------------------------------------------

//Setup----------------------------------------

function setup() {
  imageMode(CENTER);
  createCanvas(windowWidth, windowHeight);
}

//---------------------------------------------

//Animation for Yoda's Idle position:-------------

function yodaIdle(){

  image(yodaImagesI[c], currentX, currentY);
  speed = 20;

  if (frameCount % int(speed) === 0){
    c ++;
    if (c > 3){
      c = 0;
    }
  }
}

//------------------------------------------------

//Animation for Yoda moving left:-----------------

function yodaLeft(){

  image(yodaImagesL[c], currentX, currentY);
  speed = 5;

  if (frameCount % int(speed) === 0){
    c ++;
    if (c > 3){
      c = 0;
    }
  }

  if (currentX > 0){
    positionChange(currentX - 5, currentY);
  }
}

//-------------------------------------------------

//Animation for Yoda moving right:-----------------

function yodaRight(){

  image(yodaImagesR[c], currentX, currentY);
  speed = 5;

  if (frameCount % int(speed) === 0){
    c ++;
    if (c > 3){
      c = 0;
    }
  }

  if (currentX < width){
    positionChange(currentX + 5, currentY);
  }
}

//-------------------------------------------------

//Animation for Yoda in resting position:----------

function yodaRest(){
  image(yodaImagesRe[c], currentX, currentY);

  speed = 20;

  if (frameCount % int(speed) === 0){
    c ++;
    if (c > 3){
      c = 0;
    }
  }
}

//--------------------------------------------------

//Allow the change in position when Yoda moves:-

function positionChange(x, y){
  currentX = x;
  currentY = y;
}

//----------------------------------------------

//Drawing the background:-------------------------------------------------------------

//Drawing the wall and floor:-----------------------------------------

function drawWalls(){
  background(227, 193, 154);
  strokeWeight(1);
  fill(64, 50, 41);
  rect(0, height/2, width, height/2);
}

//Drawing the door:---------------------------------------------------

function drawDoor(){
  rectMode(CORNER);
  rect(width/4, height/2, width/8, 0 - height/2.25);
  fill(100);
  strokeWeight(0);
  ellipse(width/2.75, height/3.5, width/100);
}

//--------------------------------------------------------------------

//Drawing the cat bed:------------------------------------------------

function drawBed(){
  fill(109, 199, 237);
  ellipse(width/1.5, height/1.65, width/6, width/10);
  fill(145, 206, 256);
  ellipse(width/1.5, height/1.65, width/8, width/12);
}

//--------------------------------------------------------------------

//Drawing the cat bowls:----------------------------------------------

function drawBowls(){
  fill(255,120,125);
  rect(width/35, height/1.65, width/6, height/5);
  fill(220);
  ellipse(width/15, height/1.4, width/17.5);
  ellipse(width/6.5, height/1.4, width/17.5);
  fill(151,227, 255);
  ellipse(width/15, height/1.4, width/25);
  fill(97,48, 19);
  ellipse(width/6.5, height/1.4, width/25);
}

//--------------------------------------------------------------------

//Drawing the art on the walls:---------------------------------------

function drawArt(){
  imageMode(CORNER);
  rect(width/2.25, height/9, width/8, width/6);
  image(yodaArt1, width/2.1875, height/7.5, width/10, height/3.5);
  rect(width/1.5, height/7, width/8, width/10);
  image(yodaArt2, width/1.4745, height/6.15, width/10, height/6.5);
  imageMode(CENTER);
}

//---------------------------------------------------------------------

//--------------------------------------------------------------------------------------

//And finally, draw:..........................................

function draw() {

  //Draw Background:-----------------------

  drawWalls();
  drawArt();
  drawDoor();
  drawBed();
  drawBowls();

  //---------------------------------------

  if (start){ //Yoda's starting position
    positionChange(width/2, height/2);
  }

  //---------------------------------------

  if (key === "ArrowLeft" && keyIsPressed){
    yodaLeft();
    start = false;
  }

  else if (key === "ArrowRight" && keyIsPressed){
    yodaRight();
    start = false;
  }
  
  else if (key === "ArrowDown" && keyIsPressed){
    yodaRest();
  }

  else{
    yodaIdle();
  }
}

//-------------------------------------------------------------