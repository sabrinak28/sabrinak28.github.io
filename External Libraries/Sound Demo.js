// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mySound;

function preload(){
  mySound = loadSound("assets/energy.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mySound.setVolume(0.1);
  reverb = new p5.Reverb();
}

function mousePressed(){
  mySound.play();
}

function keyPressed(){
  if (key === " "){
    mySound.stop();
  }
  else{
    reverb.process(mySound, 5, 1);
  }
}

function draw() {
  background(220);
}
