// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 10;
let rectHeight = 50;
let colors = ["33314C", "5F6D7D", "787B82", "98888A", "A68788"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  drawRowRGB(height * 0.2);

  drawRowHSB(height / 2);

  drawRowCustom(height * 0.8);
}

function drawRowHSB(yPos){
  colorMode(HSB, 360);
  for (let x = 0; x < width; x += rectWidth){
    //fill is going to be the hue, the saturation, and the brightness
    fill(x/3 % 360, 280, 330);
    rect(x, yPos, rectWidth, rectHeight);
  }

}

function drawRowRGB(yPos){
  colorMode(RGB);
  for (let x = 0; x < width; x += rectWidth){
    fill(random(255), random(255), random(255));
    rect(x, yPos, rectWidth, rectHeight);
  }
}

function drawRowCustom(yPos){
  colorMode(RGB);
  let counter = 0;
  for (let x = 0; x < width; x += rectWidth){
    fill(colors[counter % 3]);
    rect(x, yPos, rectWidth, rectHeight);
    counter ++;
  }
}

function draw() {
}
