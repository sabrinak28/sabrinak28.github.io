// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

}

function circleSpiral(){
  for (let c = 1; c < width; c ++){
    //ellipse(width/2, height/2, width/c);
    let lCount = 1 * c;
    for (let i = lCount; i > 0; i--){
      rotate(360 / c);
      stroke(random(255), random(255), random(255));
      line(width/2, height/2, c, c/ width);
    }
  }
}

function draw() {
  background(220);
  circleSpiral();
}
