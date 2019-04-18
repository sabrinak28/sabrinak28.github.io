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
  createCanvas(3000, 4500);
  strokeWeight(5);
  noLoop();

}

function pieceOne(){
  push();
  translate(width/2, height/2);

  for (let c = 1; c < 2000; c++){

    for (let i = 0; i < 360; i += 6){
      push();
      rotate(radians(i));
      if (i % 12 === 0){
        stroke(50, 135, 129);
        line(0, cHeight, width / c, 0);
      }
      pop();
    }
    cHeight = cHeight + 2000;
  }

  pop();
  cHeight = 0;
}

function pieceTwo(){
  push();
  translate(width/2, height/2);

  

  for (let c = 1; c < 1000; c++){

    for (let i = 0; i < 360; i += 6){
      push();
      rotate(radians(i));
      if (i % 12 === 0){
        stroke(75, 186, 179, 100);
        line(0, cHeight, width / c, 0);
      }
      pop();
    }
    cHeight = cHeight + 50;
  }

  pop();
  cHeight = 0;
}


function pieceThree(){
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
    cHeight = cHeight + 1500;
  }
  pop();
  cHeight = 0;
}

function pieceFour(){
  push();
  translate(width/2, height/2);
  for (let c = 1; c < 4; c++){

    for (let i = 0; i < 360; i += 6){
      push();
      rotate(radians(i));
      if (i % 12 === 0){
        stroke(182, 255, 251);
        line(0, cHeight, width / c, 0);
      }
      pop();
    }
    cHeight = cHeight + 400;
  }
  pop();
  cHeight = 0;
}

function pieceFive(){
  push();
  translate(width/2, height/2);

  for (let c = 1; c < 20; c++){

    for (let i = 0; i < 360; i += 6){
      push();
      rotate(radians(i));
      if (i % 12 === 0){
        stroke(85, 196, 189);
        line(0, cHeight, width / c, 0);
      }
      pop();
    }
    cHeight = cHeight + 80;
  }
  pop();
  cHeight = 0;

}

function pieceSix(){
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
    cHeight = cHeight + 20;
  }
  pop();

}

function draw() {
  background(22);
  pieceOne();
  pieceTwo();
  pieceThree();
  pieceFour();
  pieceFive();
  pieceSix();
}