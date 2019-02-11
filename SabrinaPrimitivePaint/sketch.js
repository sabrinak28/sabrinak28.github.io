// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function keyTyped(){
  if (key === 'a'){
    fill(random(255), random(255), random(255));
    rect(mouseX, mouseY, 50, 50);
  }
  if (key === 's'){
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, 50, 50);
  }
  if (key === 'd'){
    fill(random(255), random(255), random(255));
    triangle(mouseX, mouseY, mouseX, (mouseY + 50), (mouseX + 50), mouseY);
  }
}

function keyPressed(){
  if (keycode === 'c'){
    fill(random(255), random(255), random(255));
  }
}