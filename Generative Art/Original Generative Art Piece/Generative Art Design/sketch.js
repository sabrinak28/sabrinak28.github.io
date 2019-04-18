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

  

  for (let c = 1; c < 200; c++){

    for (let i = 0; i < 360; i += 6){
      push();
      rotate(radians(i));
      if (i % 12 === 0){
        stroke(50, 135, 129);
        line(0, cHeight, width / c, 0);
      }
      pop();
    }
    cHeight = cHeight + 200;
  }

  pop();
  cHeight = 0;
}

function pieceTwo(){
  push();
  translate(width/2, height/2);

  

  for (let c = 1; c < 100; c++){

    for (let i = 0; i < 360; i += 6){
      push();
      rotate(radians(i));
      if (i % 12 === 0){
        stroke(75, 186, 179, 100);
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
  for (let c = 1; c < 5; c++){

    for (let i = 0; i < 360; i += 6){
      push();
      rotate(radians(i));
      if (i % 12 === 0){
        stroke(182, 255, 251);
        line(0, cHeight, width / c, 0);
      }
      pop();
    }
    cHeight = cHeight + 100;
  }
  pop();
  cHeight = 0;
}

function pieceFour(){
  push();
  translate(width/2, height/2);
  for (let c = 1; c < 3; c++){

    for (let i = 0; i < 360; i += 6){
      push();
      rotate(radians(i));
      if (i % 12 === 0){
        stroke(182, 255, 251);
        line(0, cHeight, width / c, 0);
      }
      pop();
    }
    cHeight = cHeight + 600;
  }
  pop();
  cHeight = 0;
}

function pieceFive(){
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
  background(22);
  //circleSpiral();
  pieceOne();
  pieceTwo();
  pieceThree();
  pieceFour();
  pieceFive();
}