// Terrain Generation and Perlin Noise
// Sabrina Kettle
// March 16th, 2019
//
// Extra for Experts:
// - A red line will constantly be set at a y-value to represent the average between the highest and lowest peak.
// - A cute little flag will be set on the current highest peak of the terrain.
// - Personal addition: I just really wanted nice aesthetics and for it to look like the terrain is a silhouette against a sunset.
//   I hope you don't mind that I implemented a gradient feature (with of course the help of the P5.js reference).

//Variables:------
let tWidth = 1;
let start = 0;
let c1, c2;
//----------------

//Setup:------------------------------------
function setup(){
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  c1 = color(247, 187, 151); //233, 100, 51
  c2 = color(221, 94, 137);  //144, 78, 159
}
//------------------------------------------

//Just a personal addition: Gradient Background:---
function createSunset(x, y, w, h, c1, c2){
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}
//--------------------------------------------------

//Generating the panning terrain:----------------------
function generateTerrain(){

  //Variables
  let xOff = start;
  let highestX = 0;
  let highest = height;
  let total = 0;

  for(let x = 0; x < width; x += tWidth){ //Loop

    let currentHeight = noise(xOff)*height;

    total += currentHeight; //Gather info for average
    
    if (currentHeight < highest){
      highest = currentHeight; //Create new highest
      highestX = x;
    }

    //Create the rectangle
    stroke(0);
    strokeWeight(1);
    rect(x, currentHeight, x + tWidth, height);
    xOff += 0.004;
  }
  //Finally, implement the pan, flag, and average
  drawFlag(highestX, highest);
  findAverage(total);
  start += 0.02;

}
//------------------------------------------------------

//To draw the flag at the highest peak:---------------------------------------------------------
function drawFlag(xValue, yValue){
  stroke(0);
  fill(0);
  rect(xValue - 1, yValue + 5, xValue + 5, yValue - 53); //Pole
  stroke(193, 60, 131);
  fill(193, 81, 141);
  strokeWeight(5);
  triangle(xValue + 7, yValue - 30, xValue + 7, yValue - 50, xValue + 30, yValue - 40); //Flag
}
//----------------------------------------------------------------------------------------------

//To find the average:---------------
function findAverage(total){
  let average = total / width;
  stroke(100);
  strokeWeight(5);
  rect(0, average, width, average);
}
//-----------------------------------

//At last, to play through it all:--------------------------------
function draw(){
  createSunset(0, 0, width, height, c1, c2); //Create background
  generateTerrain();
}
//----------------------------------------------------------------