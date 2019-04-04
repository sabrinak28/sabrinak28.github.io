// Refactoring Assignment Four
// Sabrina Kettle
// April 4th, 2019

// Drawing a black and white checkerboard grid

//Constants & Variables:----

const WINDOW_SIZE = 600;
const RECT_SIZE = 75;

let colour = true;

//---------------------------

//Setup:-----------------------------------

function setup() {
  createCanvas(WINDOW_SIZE, WINDOW_SIZE);
}

//-----------------------------------------

//Function which draws the grid and is called from draw:----

function drawGrid(){
  for (let x = 0; x < WINDOW_SIZE; x += RECT_SIZE){
    for (let y = 0; y < WINDOW_SIZE; y += RECT_SIZE){
      blackOrWhite();
      rect(x, y, RECT_SIZE, RECT_SIZE);
    }
    colour = !colour; //Switch
  }
}

//-----------------------------------------------------------

//Function which switches grid colours:--

function blackOrWhite(){
  if (colour){
    fill(255); //White
  }
  else{
    fill(0); //Black
  }
  colour = !colour; //Switch
}

//---------------------------------------

//And... draw!--------

function draw() {
  background(220);
  drawGrid();
}

//--------------------
