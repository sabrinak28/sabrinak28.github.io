// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let backgroundImg;

let wImg = [];
let qImg = [];
let hImg = [];
let iImg = [];
let aImg = [];
let bImg = [];
let menus = [];

let whisper;
let quill;
let hatch;
let imellia;
let ace;


let endgame = false;

function preload(){

  backgroundImg = loadImage("assets/bg.jpg");

  for (let i = 1; i < 5; i++){
    wImg.push(loadImage("assets/Whisper" + i + ".png"));
  }
  for (let i = 1; i < 5; i++){
    qImg.push(loadImage("assets/Quill" + i + ".png"));
  }
  for (let i = 1; i < 5; i++){
    hImg.push(loadImage("assets/Hatch" + i + ".png"));
  }
  for (let i = 1; i < 5; i++){
    iImg.push(loadImage("assets/Imellia" + i + ".png"));
  }
  for (let i = 1; i < 5; i++){
    aImg.push(loadImage("assets/Ace" + i + ".png"));
  }
}

class Whisper{

  constructor(x_, y_){
    this.y = y_;
    this.x = x_;
    this.health = 200;
    this.sDamage = 50;
    this.aDamage = 100;
  }

  display(){
    image(wImg[0], this.x, this.y, width/15, height/5);
  }
  
  attack(){

  }

  shoot(){

  }

  dead(){

  }
}

class Quill{

  constructor(x_, y_){
    this.y = y_;
    this.x = x_;
    this.health = 200;
    this.sDamage = 50;
    this.aDamage = 100;
  }

  display(){
    image(qImg[0], this.x, this.y, width/13, height/5.7);
  }
  
  spell(){

  }

  heal(){

  }

  dead(){

  }
}

class Hatch{

  constructor(x_, y_){
    this.y = y_;
    this.x = x_;
    this.health = 200;
    this.sDamage = 50;
    this.aDamage = 100;
  }

  display(){
    image(hImg[0], this.x, this.y, width/13, height/4.5);
  }
  
  attack(){

  }

  defend(){

  }

  dead(){

  }
}

class Imellia{

  constructor(x_, y_){
    this.y = y_;
    this.x = x_;
    this.health = 200;
    this.sDamage = 50;
    this.aDamage = 100;
  }

  display(){
    image(iImg[0], this.x, this.y, width/15, height/5.5);
  }
  
  spell(){

  }

  heal(){

  }

  dead(){

  }
}

class Ace{

  constructor(x_, y_){
    this.y = y_;
    this.x = x_;
    this.health = 200;
    this.sDamage = 50;
    this.aDamage = 100;
  }

  display(){
    image(aImg[0], this.x, this.y, width/17, height/4.5);
  }
  
  spell(){

  }

  heal(){

  }

  dead(){

  }
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  whisper = new Whisper(width/5, height/6.5);
  quill = new Quill(width/25, height/3.25);
  hatch = new Hatch(width/5, height/2.25);
  imellia = new Imellia(width/25, height/1.7);
  ace = new Ace(width/5, height/1.3);
}

function draw() {
  if (endgame === false){
    background(backgroundImg);
    whisper.display();
    quill.display();
    hatch.display();
    imellia.display();
    ace.display();
  }
}
