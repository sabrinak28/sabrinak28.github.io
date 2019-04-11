// Art Replication Warm-up
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function lines(){
  let x1 = random(width/1.5, width/3);
  let y1 = random(height/1.5, height/3);

  let x2 = x1 + 50;
  let y2 = y1;

  for (let i = 0; i < 50; i ++){
    lines(x1, y1, x2, y2);
  }
}
function draw() {
  background(220);

}
