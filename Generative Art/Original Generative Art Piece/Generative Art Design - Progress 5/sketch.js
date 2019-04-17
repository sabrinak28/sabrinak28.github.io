// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cHeight = 0;
let sRed = 100;
let sGreen = 81;
let sBlue = 113;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();

}

function circleSpiral(){
  push();
  translate(width/2, height/2);

  for (let c = 1; c < width * 2; c++){

    strokeWeight(2);
    fill(sRed, sGreen, sBlue);
    ellipse(0, cHeight, width * 2 / c);

    for (let i = 0; i < 360; i += 6){
      push();
      rotate(radians(i));
      if (i % 12 === 0){
        strokeWeight(1);
        line(0, cHeight, height/ c * 2 - 5, 0);
      }
      pop();
    }

    // sRed = sRed - 3;
    // sGreen = sGreen - 3;
    // sBlue = sBlue - 3;

  }
  pop();
}

function pieceOne(){
  push();
  translate(width/2, height/2);

  for (let c = 1; c < 100; c++){

    for (let i = 0; i < 360; i += 6){
      push();
      rotate(radians(i));
      if (i % 12 === 0){
        stroke(55);
        line(0, cHeight, width / c, 0);
      }
      pop();
    }
    cHeight = cHeight + 100;
  }

  pop();
  cHeight = 0;
}

function pieceTwo(){
  push();
  translate(width/2, height/2);
  for (let c = 1; c < 5; c++){

    for (let i = 0; i < 360; i += 6){
      push();
      rotate(radians(i));
      if (i % 12 === 0){
        stroke(155);
        line(0, cHeight, width / c, 0);
      }
      pop();
    }
    cHeight = cHeight + 100;
  }
  pop();
  cHeight = 0;
}

function pieceThree(){
  push();
  translate(width/2, height/2);

  for (let c = 1; c < 10; c++){

    for (let i = 0; i < 360; i += 6){
      push();
      rotate(radians(i));
      if (i % 12 === 0){
        stroke(255);
        line(0, cHeight, width / c, 0);
      }
      pop();
    }
    cHeight = cHeight + 10;
  }
  pop();

}

function draw() {
  background(0);
  //circleSpiral();
  pieceOne();
  pieceTwo();
  pieceThree();
}