// "The Knot"
// Sabrina Kettle
// May 14th, 2019
//
// Extra for Experts:
// - I worked with 3D to make my fractal.
// - The components will change to the position of both your mouseX and mouseY.

//Production Rules:
//  1) Draw a torus.
//  2) Within that torus, make another smaller one within and keep repeating.
//  3) After many rings, have a sphere as a centre point.



//Variables:------

let angleX = 5;
let angleY = 5;

//-----------------

//Setup:-------------------------------------------

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  smooth(); //Make that animation BETTER
}

//-------------------------------------------------

//Function to create recursive fractals:-----------

function rings(diameter){

  if (diameter < width/100){ //Base Case
    //Rotate to mouse
    rotateY(radians(angleY));
    rotateX(radians(angleX));

    //Colours
    fill(255, 0, 94);
    stroke(255, 144, 185);

    //Sphere
    ellipsoid(diameter);
  }

  else{
    //Rotate to mouse
    rotateY(radians(angleY));
    rotateX(radians(angleX));

    //Colours
    fill(diameter/20, diameter/20, diameter/5);

    //Ring
    torus(diameter, diameter/15);

    //Build
    rings(diameter*0.8);
  }

}

//-------------------------------------------------

//To work it all:--------------------------------

function draw() {

  //Constant rotation
  rotateZ(radians(frameCount/2));

  //Mouse X will control the X angle:
  angleX = map(mouseX, 0, width, -120, 120);
  //Mouse Y will control the Y angle:
  angleY = map(mouseY, 0, height, -120, 120);

  //Draw:
  background(20);
  rings(width/3);

}

//-----------------------------------------------
