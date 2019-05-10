// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noFill();
}

function circles(x,y, d){
  if (d > 5){
    ellipse(x, y, d, d);
    circles(x - d/2,y, d/2);
    circles(x + d/2,y, d/2);
    circles(x,y + d/2, d/2);
    //circles(x,y - d/2, d/2);
  }
}

function rectangles(x,y, sideL){
  if (sideL > 5){
    fill
    rect(x,y,sideL, sideL);
    let half = sideL / 2;
    rectangles(x - half, y - half, half);
    rectangles(x + half, y - half, half);
    rectangles(x + half, y + half, half);
    rectangles(x - half, y + half, half);
  }
}

function draw() {
  randomSeed(3267);
  background(220);
  //circles(width/2, height/2, height);
  rectangles(width/2,height/2, height*0.6);
}
