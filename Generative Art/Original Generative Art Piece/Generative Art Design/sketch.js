// Generative Art Design
// Sabrina Kettle
// April 21st, 2019
//
// - While experimenting with line qualities as I was building my piece, I developed a code that forms elaborate semingly spirograph shapes that change very drastically with 
//   the re-assigning of two values.

//Variables:-----

let cHeight = 0;

//---------------

//Setup:------------------------------------

function setup() {
  createCanvas(3000, 4500); //Poster Size
  strokeWeight(3);
  noLoop();
}

//------------------------------------------

//The darkest layer at the very back:-------

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

  //Refresh
  pop();
  cHeight = 0;

}

//------------------------------------------

//The second darkest layer atop piece one:--

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

  //Refresh
  pop();
  cHeight = 0;

}

//-------------------------------------------

//This piece is lighter than the last and beneath the centre:

function pieceThree(){

  push();
  translate(width/2, height/2);

  for (let c = 1; c < 20; c++){

    for (let i = 0; i < 360; i += 6){
      push();
      rotate(radians(i));
      if (i % 12 === 0){
        stroke(105, 216, 209);
        line(0, cHeight, width / c, 0);
      }
      pop();
    }
    cHeight = cHeight + 80;
  }

  //Refresh
  pop();
  cHeight = 0;

}

//-----------------------------------------------------------

//The big light ring revolving the middle:---

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

  //Refresh
  pop();
  cHeight = 0;

}

//---------------------------------------------

//The small light ring revolving the middle:---

function pieceFive(){

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

  //Refresh
  pop();
  cHeight = 0;

}


//----------------------------------------------

//The final white centrepiece of the art:---

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

//--------------------------------------------

//To save the picture:----

function keyPressed(){
  if (key === " "){
    save();
  }
}

//------------------------

//Put all th pieces together:--

function allTogether(){
  pieceOne();
  pieceTwo();
  pieceThree();
  pieceFour();
  pieceFive();
  pieceSix();
}

//----------------------------

//And... draw!------

function draw() {
  background(22);
  allTogether();
}

//------------------