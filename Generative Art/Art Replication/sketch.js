// Art Replication Warm-up
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x1, x2, y1, y2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  x1 = random(width/1.5, width/3);
  y1 = random(height/1.5, height/3);
  x2 = x1 + random(-width/6, width/6);
  y2 = y1;
}

  
function lines(){

  for (let i = 0; i < 100; i ++){
    line(x1, y1, x2, y2);

    x1 = x2;
    y1 = y2;

    if (i % 2 === 0){
      y2 = y1;
      if (x2 > width/2){
        x2 = x2 + random(-width/5);
      }
      else{
        x2 = x2 + random(width/5);
      }
    }
    else{
      x2 = x1;
      if (x2 > height){
        y2 = y2 + random(-height/5);
      }
      else{
        y2 = y2 + random(height/5);
      }
    }
  }
}

function draw() {
  background(220);
  lines();
  

}
