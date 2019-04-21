// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noStroke();
}

function circleSpiral(){
  for (let c = 1; c < width; c ++){
    fill(random(255), random(255), random(255));
    ellipse(width/2 + width/c, height/2 + width/c, width/c);
    ellipse(width/2 - width/c, height/2 - width/c, width/c);
    ellipse(width/2, height/2 + width/c, width/c);
    ellipse(width/2, height/2 - width/c, width/c);
    ellipse(width/2 - width/c, height/2 + width/c, width/c);
    ellipse(width/2 + width/c, height/2 - width/c, width/c);
    ellipse(width/2 - width/c, height/2, width/c);
    ellipse(width/2 + width/c, height/2, width/c);
  }
}

function draw() {
  background(0);
  circleSpiral();
}

function keyPressed(){
  if (key === " "){
    save();
  }
}