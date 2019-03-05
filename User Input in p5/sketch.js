// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let slider1, slider2, slider3, radio, sColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  createSliders();
  createRadioB();
  cColorPicker();
}

function draw() {
  rectMode(CENTER);
  background(slider1.value(), slider2.value(), slider3.value());
  textSize(25);
  fill(255);
  text(slider1.value(), 200, 550);
  text(slider2.value(), 200, 650);
  text(slider3.value(), 200, 750);

  if (radio.value() === "Circle"){
    fill(sColor.value());
    ellipse(width/2, height/2, 200, 200);
  }
  if (radio.value() === "Square"){
    fill(sColor.value());
    rect(width/2, height/2, 200, 200);
  }

}

function createSliders(){
  //Slider 1
  slider1 = createSlider(0, 255, 100);
  slider1.position(50, 500);
  slider1.style('width', '200px');

  //Slider 2
  slider2 = createSlider(0, 255, 100);
  slider2.position(50, 600);
  slider2.style('width', '200px');

  //Slider 3
  slider3 = createSlider(0, 255, 100);
  slider3.position(50, 700);
  slider3.style('width', '200px');
}

function createRadioB(){
  radio = createRadio();
  radio.option('Circle');
  radio.option('Square');
  radio.style('width', '60px');
  radio.position(width/2, 50);
  textAlign(CENTER);
  fill(255, 0, 0);
}

function cColorPicker(){
  sColor = createColorPicker("#000000");
  sColor.position(width/2, 700);
}