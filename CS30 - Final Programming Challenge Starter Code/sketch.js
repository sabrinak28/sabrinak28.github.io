// CS30 - Final Programming Challenge
// Complete this comment header - - - (it's being graded!)
// 
// Sabrina Kettle
// June 19th, 2019
//
//

//variable declarations - included for convenience, but you don't have to use these.
//                        feel free to handle this in a different way if you prefer.

//Variables:--------------------

let staticImages = [];     
let animationImages = [];   
let foxDirection = "E";
let posX;
let foxes = [];
let posY;
let foxSpeed = 5;
let foxSize = 200;
let pepsiMode = false;
let cW = 0;
let cE = 8;
let cN = 16;
let cS = 24;

//-------------------------------

//Class to make the other foxes:-------------------------------------------

class Fox{
  constructor(_x,_y){
    this.x = _x;
    this.y = _y;
    this.direction = int(random(1,5));
    this.speed = foxSpeed;
    this.size = 150;
  }
  display(){

    this.turnBlue();

    if (frameCount % 40 === 0){
      this.direction = int(random(1,5));
    }
    if (this.direction === 1){ //West
      image(staticImages[0], this.x, this.y, this.size, this.size);
      if (this.x > 0){
        this.x -= this.speed;
      }
    }
    if (this.direction === 2){ //East
      image(staticImages[1], this.x, this.y, this.size, this.size);
      if (this.x < width - this.size){
        this.x += this.speed;
      }
    }
    if (this.direction === 3){ //South
      image(staticImages[3], this.x, this.y, this.size, this.size);
      if (this.y < height - this.size){
        this.y += this.speed;
      }
    }
    if (this.direction === 4){ //North
      image(staticImages[2], this.x, this.y, this.size, this.size);
      if (this.y > 0){
        this.y -= this.speed;
      }
    }
  }

  turnBlue(){
    if (int(dist(this.x, this.y, posX, posY)) < 200){
      tint(0, 0, 200);
    }
    else{
      noTint();
    }
  }
}

//-------------------------------------------------------------------------

//Preload images:----------------------------------------------------------

function preload(){
  loadStatic();     //defined at bottom
  loadAnimation();  //also defined at bottom
}

//Static
function loadStatic(){
  staticImages.push(loadImage("/assets/left1.png"));   //0 - left
  staticImages.push(loadImage("/assets/right1.png"));   //1 - right
  staticImages.push(loadImage("/assets/up1.png"));   //2 - up
  staticImages.push(loadImage("/assets/down1.png"));   //3 - down
}

//Animation
function loadAnimation(){
  for(let i = 1; i <= 8; i++){    //0-7 LEFT
    animationImages.push(loadImage("/assets/left" + i + ".png"));
  }

  for(let i = 1; i <= 8; i++){  //8-15 RIGHT
    animationImages.push(loadImage("/assets/right" + i + ".png"));
  }

  for(let i = 1; i <= 8; i++){  //16-23 UP
    animationImages.push(loadImage("/assets/up" + i + ".png"));
  }

  for(let i = 1; i <= 8; i++){  //24-31 DOWN
    animationImages.push(loadImage("/assets/down" + i + ".png"));
  }
}
//--------------------------------------------------------------------------

//Setup"---------------------------------------------------------------------------

function setup() {

  createCanvas(windowWidth, windowHeight);
  //Set starting position
  posX = width/2;
  posY = height/2;

  //Make other foxes
  for (let i = 0; i < 11; i++){
    foxes.push(new Fox(random(100, width - 100), random(100, height - 100)));
  }
}

//----------------------------------------------------------------------------------

//Mouse and button commands:-------

function keyPressed(){
  if (key === "p"){
    pepsiMode = !pepsiMode;
  }
}

function mousePressed(){
  if (mouseY > height/2){
    foxSize -= 10;
  }
  else{
    foxSize += 10;
  }
}

//---------------------------------

//Move the main fox:------------------------

function moveFox(){
  if (pepsiMode === false){
    if (keyIsPressed){
      if (key === "ArrowRight"){
        foxDirection = "E";
        if (posX < width - foxSize){
          posX += foxSpeed;
        }
      }
      if (key === "ArrowLeft"){
        foxDirection = "W";
        if (posX > 0){
          posX -= foxSpeed;
        }
      }
      if (key === "ArrowUp"){
        foxDirection = "N";
        if (posY > 0){
          posY -= foxSpeed;
        }
      }
      if (key === "ArrowDown"){
        foxDirection = "S";
        if (posY < height - foxSize){
          posY += foxSpeed;
        }
      }
    }
    noTint();
    drawFox(posX, posY);
  }
  else{
    if (foxDirection === 1){
      foxDirection = "E";
      if (posX < width - foxSize){
        posX += foxSpeed * 2;
      }
    }
    if (foxDirection === 2){
      foxDirection = "W";
      if (posX > 0){
        posX -= foxSpeed * 2;
      }
    }
    if (foxDirection === 3){
      foxDirection = "N";
      posY -= foxSpeed * 2;
    }
    if (foxDirection === 4){
      foxDirection = "S";
      posY += foxSpeed * 2;
    }
    if (frameCount % 100 === 0){
      foxDirection = int(random(1,5));
    }
    foxSize = random(100, 300);
    tint(random(255), random(255), random(255));
    drawFox(posX, posY);
  }
}

//------------------------------------------

//Constantly draw the fox:---------------------------------

function drawFox(x, y){

  if (foxDirection === "W"){
    image(animationImages[cW], x, y, foxSize, foxSize);
    if (frameCount % 4 === 0){
      if (cW < 7){
        cW++;
      }
      else{
        cW = 0;
      }
    }
  }

  if (foxDirection === "E"){
    image(animationImages[cE], x, y, foxSize, foxSize);
    if (frameCount % 4 === 0){
      if (cE < 15){
        cE++;
      }
      else{
        cE = 8;
      }
    }
  }

  if (foxDirection === "N"){
    image(animationImages[cN], x, y, foxSize, foxSize);
    if (frameCount % 4 === 0){
      if (cN < 23){
        cN++;
      }
      else{
        cN = 16;
      }
    }
  }

  if (foxDirection === "S"){
    image(animationImages[cS], x, y, foxSize, foxSize);
    if (frameCount % 4 === 0){
      if (cS < 31){
        cS++;
      }
      else{
        cS = 24;
      }
    }
  }
}

//---------------------------------------------------------

//And... draw!--------------------

function draw() {
  background(220);

  //Summon foxes
  for (let i = 0; i < 11; i++){
    foxes[i].display();
  }
  moveFox();
}

//--------------------------------
