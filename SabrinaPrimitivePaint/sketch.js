// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textFont("Curlz MT");
  textSize(width / 10);
  textAlign(CENTER);
  fill(255);
  text("Sabrina Kettle", width / 2, height / 2);

}

function keyTyped(){
  if (key === 'a'){
    fill(random(255), random(255), random(255));
    rect(mouseX, mouseY, random(300), random(300));
  }
  if (key === 's'){
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, random(300), random(300));
  }
  if (key === 'd'){
    fill(random(255), random(255), random(255));
    triangle(mouseX, mouseY, mouseX, (mouseY + random(300)), (mouseX + random(300)), mouseY);
  }
  if (key === " "){
    background(0);
    text("Sabrina Kettle", width / 2, height / 2);
  }
}
