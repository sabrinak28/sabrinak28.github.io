// Multi-Coloured Grid
// Sabrina Kettle
// March 9th, 2019
//
// Extra for Experts:
// - No matter the size of the width and height, the squares will always end without falling out of the range.
// - I reccomend adjusting the canvas size to a perfect square (900 by 900) or a rectangle with a width double the height (1900 by 950).
// - I only suggest the above because with numbers as such, there will be a lot more sizing options than the two which come with the windowWidth and windowHeight.
// - By pressing specific buttons on the keyboard, there will be a different colour scheme along with each one.

//Variables----------------

let sRed, sBlue, sGreen;
let count = true;
let scheme = 0;
let squareSize;
let squareSizes = [];
let start = true;
let sizeSelection;
let grayscale = false;

//-------------------------


//Setup--------------------

function setup() {
  createCanvas(1400, 700);
  noStroke();
}

//--------------------------

//Function to make the squares:-------------------------------

function makeSquares(){
  for (let x = 0; x <= width; x+= squareSize){
    for (let y = 0; y <= height; y+= squareSize){
      makeColours(); //Retrieve colours to be used
      if (grayscale){
        fill(random(255));
      }
      else{
        fill(sRed, sGreen, sBlue);
      }
      grayscale = false;
      rect(x, y, squareSize, squareSize);
    }
  }
  count = false; //This will cause the function not to loop
}

//------------------------------------------------------------

//Function which creates colour schemes:-

function makeColours(){
  if (scheme === 0){ 
    sRed = int(random(255));
    sBlue = int(random(255));
    sGreen = int(random(255));
  }
  else if (scheme === 1){ 
    sRed = int(random(255));
    sBlue = int(random(200, 255));
    sGreen = int(random(200, 255));
  }
  else if (scheme === 2){ 
    sRed = int(random(225, 255));
    sBlue = int(random(225, 255));
    sGreen = int(random(150));
  }
  else if (scheme === 3){
    grayscale = true;
  }
  else if (scheme === 4){ 
    sRed = int(random(175, 255));
    sBlue = int(random(90, 100));
    sGreen = int(random(175, 255));
  }
  else if (scheme === 5){ 
    sRed = int(random(0, 75));
    sBlue = int(random(25));
    sGreen = int(random(0, 100));
  }
  else if (scheme === 6){ 
    sRed = int(random(200, 255));
    sBlue = int(random(200, 255));
    sGreen = int(random(200, 255));
  }
}

//----------------------------------------

//Function to change the size of the squares:-------------

function mousePressed(){
  
  if (mouseButton === RIGHT){ //To grow squares
    if (0 < sizeSelection){ //Restriction
      sizeSelection -= 1;
      count = true;
    }
  }
  else if (mouseButton === LEFT){ //To shrink squares
    if (squareSizes[0] > sizeSelection){ //Restriction
      sizeSelection += 1;
      count = true;
    }
  }
}

//----------------------------------------------------------

//Refreshing the original scheme or applying a new one:--

function keyPressed(){
  if (key === " "){
    scheme = 0; //Basic Scheme (all colours)
    count = true;
  }
  if (key === "m"){ //Mermaid Scheme
    scheme = 1;
    count = true;
  }
  if (key === "b"){ //Barbie Scheme
    scheme = 2;
    count = true;
  }
  if (key === "g"){ //Grayscale
    scheme = 3;
    count = true;
  }
  if (key === "c"){ //Citrus Scheme
    scheme = 4;
    count = true;
  }
  if (key === "f"){ //Camo Scheme
    scheme = 5;
    count = true;
  }
  if (key === "p"){ //Pastel Scheme
    scheme = 6;
    count = true;
  }
}

//-------------------------------------------------------

//Function to ensure squares will always fit in the canvas border:-------------------------

function commonDenominator(){
  for (let i = 1000; i > 0; i--){ //Find common denominators through the range of 0 - 1000
    if (width % i === 0 && height % i === 0){ //If both are divisible by the same factor...
      append(squareSizes, i); //Add numbers of squares to an array that never "fall off".
    }
  }
}

//-----------------------------------------------------------------------------------------


// At last, to play through it all:--------------------------------------------------------------------------------------------------

function draw() {
  if (count){
    commonDenominator(); //Gather data

    if (start){ //If this is the first time... start at a number of squares fairly between the greatest and smallest number of them.

      if (squareSizes.length % 2 === 0){ //If the amount of perfect divisible squares is even:
        sizeSelection = squareSizes.length / 2;
      }

      else{ //If the amount of perfect divisible squares is odd:
        sizeSelection = (squareSizes.length + 1) / 2;
      }

    }

    squareSize = squareSizes[sizeSelection];
    makeSquares();
  } 
  start = false; //After this, the size is determined by you.
}

//-------------------------------------------------------------------------------------------------------------------------------------