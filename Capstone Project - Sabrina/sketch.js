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

let wChoice = 0;
let qChoice = 0;
let hChoice = 0;
let iChoice = 0;
let aChoice = 0;

let menu;

let turn = 1;
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

  for (let i = 1; i < 9; i++){
    menus.push(loadImage("assets/menu" + i + ".jpg"));
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
    image(wImg[0], this.x, this.y);
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
    image(qImg[0], this.x, this.y);
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
    image(hImg[0], this.x, this.y);
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
    image(iImg[0], this.x, this.y, 0, height/5.5);
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
    image(aImg[0], this.x, this.y);
  }
  
  attack(){

  }

  shoot(){

  }

  dead(){

  }
}

class Menu{
  constructor(x_, y_){
    this.x = x_;
    this.y = y_;
  }

  display(t){
    image(menus[t], this.x, this.y);
  }
}

function firstRound(){

  if(whisper.health + quill.health + hatch.health + imellia.health + ace.health > 0){
    if (turn === 1){
      if (whisper.health > 0){
        menu.display(0);
        if (wChoice === 0){
          if (keyPressed === 1){
            wChoice === 1;
          }
          else if (keyPressed === 2){
            wChoice === 2;
          }
        }
      }
      else{
        whisper.dead();
        turn === 2;
      }
    }
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  whisper = new Whisper(width/7.5, height/6.5);
  quill = new Quill(width/25, height/4);
  hatch = new Hatch(width/7.5, height/2.7);
  imellia = new Imellia(width/25, height/2);
  ace = new Ace(width/7.5, height/1.6);

  menu = new Menu(width/7,height/1.15);

  whisper.display();
  quill.display();
  hatch.display();
  imellia.display();
  ace.display();
  menu.display(0);
}

function draw() {
  
  if (endgame === false){
    background(backgroundImg);
    firstRound();
  }
}
