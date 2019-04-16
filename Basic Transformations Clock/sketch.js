// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  push();
  translate(width/2, height/2);
  strokeWeight(1);
  ellipse(0, 0, 600, 600);


  for (let i = 0; i < 360; i += 6){
    push();
    rotate(radians(i));
    if (i % 30 === 0){
      //Thick Line
      line(240, 0, 280, 0);
    }
    else{
      //thin Line
      strokeWeight(1);
      line(240, 0, 280, 0);
    }
    pop();
  }

  push();
  rotate(radians(frameCount/10));
  strokeWeight(2);
  line(0,0, 250, 0);
  pop();

  push();
  strokeWeight(4);
  rotate(radians(frameCount/ 240));
  line(0, 0, 0, -150);
  pop();

  pop();
}
