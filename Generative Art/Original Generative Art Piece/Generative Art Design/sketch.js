// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  angleMode(DEGREES);

}

function circleSpiral(){
  for (let c = 1; c < width; c ++){
    ellipse(width/2, height/2, width/c);
    let lCount = 6 * c;
    for (let i = lCount; i > 0; i--){
      push();
      line(width/2, height/2, width/2, 0);
      rotate(360 / lCount);
    }
  }
}

function draw() {
  background(220);
  circleSpiral();
}
