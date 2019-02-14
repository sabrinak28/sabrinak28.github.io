// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(220);
// }

// function keyTyped(){
//   if (key === 'a'){
//     fill(random(255), random(255), random(255));
//     rect(mouseX, mouseY, 50, 50);
//   }
//   if (key === 's'){
//     fill(random(255), random(255), random(255));
//     ellipse(mouseX, mouseY, 50, 50);
//   }
//   if (key === 'd'){
//     fill(random(255), random(255), random(255));
//     triangle(mouseX, mouseY, mouseX, (mouseY + 50), (mouseX + 50), mouseY);
//   }
// }

// function keyPressed(){
//   if (keycode === 'c'){
//     fill(random(255), random(255), random(255));
//   }
// }
//

let shape;
let choice;
let shapeSize;
let rectArray = [];
let ellipseArray = [];
let triangleArray = [];


function setup() {
  createCanvas(windowWidth, windowHeight);

  shapeSize = 200;
}

function draw() {
  background(220);
  for (let i = 0; i < shapeArray.length; i++){
    rect(shape, shapeArray[i][0], shapeArray [i][1], shapeArray[i][2], shapeArray [i][2])
  }

  for (let i = 0; i < shapeArray.length; i++){
    ellipse(shape, shapeArray[i][0], shapeArray [i][1], shapeArray[i][2], shapeArray [i][2])
  }
  for (let i = 0; i < shapeArray.length; i++){
    triangle(shape, shapeArray[i][0], shapeArray [i][1], shapeArray[i][2], shapeArray [i][2])
  }
  rect(mouseX, mouseY, 50, 50);
  ellipse(mouseX, mouseY, 50, 50);
  triangle(mouseX, mouseY, mouseX, (mouseY + 50), (mouseX + 50), mouseY);


function keyTyped(){
  if (key === 'a'){
    shape = rect;
    rectArray.push(cur);

  }
  if (key === 's'){
    shape = ellipse(mouseX, mouseY, 50, 50);
    choice = 2;

  }
  if (key === 'd'){
    shape = triangle(mouseX, mouseY, mouseX, (mouseY + 50), (mouseX + 50), mouseY);
    choice = 3;
  }
}

function mousePressed(){
  let cur = [mouseX, mouseY, shapeSize];
  rectArray.push(cur);
}

// function mouseWheel(event){
//   if (event.delta > 0){
//     imgSize += 25;
//   }
//   else{
//     if(imgSize > 25){
//       imgSize -= 25;
//     }
//   }
//   return false;
// }