// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const NUM_ROWS = 4;
const NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let win = false;

let gridData = [[0,0,0,0,0],
[0,0,0,0,0],
[0,255,0,0,0],
[255,255,255,0,0]];



function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;

  //startBoard();
}

function startBoard(){

  for (let y = 0; y < 5; y++){
    for (let x = 0; x < 6; x++){
      let bOrW = random(4);
      if (bOrW < 2){
        gridData[y][x] = 255;
      }
      else{
        gridData[y][x] = 0;
      }
    }
  }
}

function mousePressed(){

  if(mouseButton === LEFT){
    // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array
    flip(currentCol, currentRow);
    flip(currentCol-1, currentRow);
    flip(currentCol+1, currentRow);
    flip(currentCol, currentRow-1);
    flip(currentCol, currentRow+1);
  }
  else if (mouseButton === RIGHT){
    flip(currentCol, currentRow);
  }
}

function flip(col, row){
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
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

function determineActiveSquare(){
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);

}

function drawGrid(){
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      fill(gridData[y][x]); 
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);

      if (y === currentRow && x === currentCol){
        fill(0, 255, 0, 100);
        rect(x*rectWidth + rectWidth, y*rectHeight, rectWidth, rectHeight);
        // rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
        // rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
      }

      else{
        fill(gridData[y][x]);
        rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
      }
    }
  }
}

// function hoverTiles(){
//   if (col >= 0 && col < NUM_COLS ){
//     if (row >= 0 && row < NUM_ROWS){
//       if (gridData[row][col] === 0){
//         gridData[row][col] = 255;
//       }
//       else{
//         gridData[row][col] = 0;
//       } 
//     }
//   }
// }

function determineWin(){
  let totalPoints = 0;
  
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      totalPoints = totalPoints + gridData[y][x];
    }
  }

  if (totalPoints === 0 || totalPoints === 255 * NUM_ROWS * NUM_COLS){
    win = true;
  }
}

function announceWin(){
  textSize(100);
  textAlign(CENTER);
  fill(0, 255, 0);
  text('You win!', width/2, height/2);
}

function draw() {
  if (win === false){
    determineActiveSquare();   //figure out which tile the mouse cursor is over
    drawGrid();                //render the current game board to the screen (and the overlay)
    determineWin();
  }
  else{
    announceWin();
  }
}



