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

let img;
let imgSize;
let imgArray = [];


function preload(){
  if (img === 1){
    rect(mouseX, mouseY, 50, 50);
  }
  if (img === 2){
    ellipse(mouseX, mouseY, 50, 50);
  }
  if (img === 3){
    triangle(mouseX, mouseY, mouseX, (mouseY + 50), (mouseX + 50), mouseY);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  imgSize = 200;
}

function draw() {
  background(220);
  for (let i = 0; i < imgArray.length; i++){
    image(img, imgArray[i][0], imgArray [i][1], imgArray[i][2], imgArray [i][2])
  }
  image(img, mouseX, mouseY, imgSize, imgSize);
}

function keyTyped(){
  if (key === 'a'){
    img = 1;
    fill(random(255), random(255), random(255));
  }
  if (key === 's'){
    img = 2;
    fill(random(255), random(255), random(255));
  }
  if (key === 'd'){
    img = 3;
    fill(random(255), random(255), random(255));
  }
}

function mousePressed(){
  let cur = [mouseX, mouseY, imgSize];
  imgArray.push(cur);
}

function mouseWheel(event){
  if (event.delta > 0){
    imgSize += 25;
  }
  else{
    if(imgSize > 25){
      imgSize -= 25;
    }
  }
  return false;
}