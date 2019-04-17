// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cHeight = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

}

function circleSpiral(){
  push();
  translate(width/2, height/2);

  for (let c = 1; c < 10; c++){

    for (let i = 0; i < 360; i += 6){
      push();
      rotate(radians(i));
      if (i % 12 === 0){
        line(0, cHeight, width / c, 0);
      }
      pop();
    }
    cHeight = cHeight + 10;
  }
}

function draw() {
  background(220);
  circleSpiral();
}

// for (let c = 1; c < width; c ++){
  //   ellipse(width/2, height/2, width/c);
  //   let lCount = 6 * c;
  //   for (let i = lCount; i > 0; i--){
  //     push();
  //     line(width/2, height/2, width/2, 0);
  //     rotate(360 / lCount);
  //   }
  // }