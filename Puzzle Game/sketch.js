// Puzzle Game
// Sabrina Kettle
// May 8th, 2019
//
// Extra for Experts:
// - Added a hovering function that will highlight the selected tiles in blue.
// - Added a switch between shapes: when space is pressed it will switch between flipping tiles in a cross and square shape.
// - A special and very snazzy winning screen!

//Data:------------------------

//Constants//
const NUM_ROWS = 4;
const NUM_COLS = 5;

//Variables//
let rectWidth, rectHeight;
let currentRow, currentCol;
let shapeState = true;
let win = false;

//Array//
let gridData = [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0]];

//-----------------------------

//Setup:------------------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight);

  //Assign variables
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;

  noStroke();

  //Randomize board
  startBoard();
}

//------------------------------------------------

//Create random board in the beginning:--------

function startBoard(){

  for (let y = 0; y < NUM_ROWS; y++){
    for (let x = 0; x < NUM_COLS; x++){
      let bOrW = int(random(2));
      if (bOrW === 1){
        gridData[y][x] = 255;
      }
      else{
        gridData[y][x] = 0;
      }
    }
  }
}

//----------------------------------------------

//Flipping the tiles in a specific shaped area:--------

function mousePressed(){

  if(mouseButton === LEFT){
    
    if (shapeState){ //Cross shape
      flip(currentCol, currentRow);
      flip(currentCol-1, currentRow);
      flip(currentCol+1, currentRow);
      flip(currentCol, currentRow-1);
      flip(currentCol, currentRow+1);
    }
    else{ //Square shape
      flip(currentCol, currentRow);
      flip(currentCol+1, currentRow);
      flip(currentCol, currentRow+1);
      flip(currentCol + 1, currentRow+1);
    }
  }
  else if (mouseButton === RIGHT){
    flip(currentCol, currentRow); //Cheater cheater
  }
}

//------------------------------------------------------

//To change between the cross and the square:---

function keyPressed(){
  if (key === " "){
    shapeState = !shapeState;
  }
}

//-----------------------------------------------

//This function will flip the tiles when the mouse is pressed:

function flip(col, row){
  
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      if (gridData[row][col] === 0){
        gridData[row][col] = 255;
      }
      else{
        gridData[row][col] = 0;
      } 
    }
  }
}

//-------------------------------------------------------------

//To locate which tile you are on:-----------------------------------------------------------------------------

function determineActiveSquare(){
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);

  //Highlighting the area you will cover when the mouse is pressed

  if (shapeState){ //Hightlight the cross
    fill(0, 255, 255, 100);
    rect(currentCol * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
    rect(currentCol * rectWidth + rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
    rect(currentCol * rectWidth - rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
    rect(currentCol * rectWidth, currentRow * rectHeight + rectHeight, rectWidth, rectHeight);
    rect(currentCol * rectWidth, currentRow * rectHeight - rectHeight, rectWidth, rectHeight);
  }
  else{ //Highlight the square
    fill(0, 255, 255, 100);
    rect(currentCol * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
    rect(currentCol * rectWidth + rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
    rect(currentCol * rectWidth, currentRow * rectHeight + rectHeight, rectWidth, rectHeight);
    rect(currentCol * rectWidth + rectWidth, currentRow * rectHeight + rectHeight, rectWidth, rectHeight);
  }

}

//------------------------------------------------------------------------------------------------------------

//To render the grid:------------------------------------------

function drawGrid(){

  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){

      fill(gridData[y][x]); 
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}

//-------------------------------------------------------------

//This function will always be playing to detect whether you won or not:----

function determineWin(){
  let totalPoints = 0;
  
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      totalPoints = totalPoints + gridData[y][x];
    }
  }

  //If the squares are all black or the squares are all white:
  if (totalPoints === 0 || totalPoints === 255 * NUM_ROWS * NUM_COLS){
    win = true;
  }
}

//--------------------------------------------------------------------------

//When you win, this snazzy screen will show:-----------

function announceWin(){
  background(gridData[0][0]);
  
  //Fun circle border
  for (let c = 100; c > 0; c--){
    fill(random(255), random(255), random(255), 100);
    ellipse(random(width), c, height/5);
    ellipse(random(width), height - c, height/5);
  }

  //Text
  textSize(width/10);
  textAlign(CENTER);
  fill(228, 92, 160);
  textFont('Jokerman');
  text('You win!', width/2, height/2);
}

//------------------------------------------------------

//And to play it all:-------------------------------------------------------------

function draw() {
  if (win === false){
    drawGrid();  
    determineActiveSquare();   //figure out which tile the mouse cursor is over
    determineWin(); //figure out if won or not
  }
  else{
    announceWin();
  }
}

//-------------------------------------------------------------------------------