//3D Primitives and Fractal

let angle = 5;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  smooth();
}

function boxes(size){
  if (size > 10){
    rotateZ(radians(angle));
    translate(size*1.5, 0);
    box(size);

    boxes(size*0.8);
  }
}

function draw() {
  angle = map(mouseX, 0, width, -60, 60);
  background(220);
  push();
  rotateY(radians(frameCount));
  for(let i = 0; i < 360; i+= 45){
    push();
    rotateY(radians(i));
    boxes(70);
    pop();
  }
  pop();

  // push();
  // rotateY(radians(frameCount));
  // rotateX(radians(frameCount));
  // rotateZ(radians(frameCount));
  // torus(100);
  // pop();
}

