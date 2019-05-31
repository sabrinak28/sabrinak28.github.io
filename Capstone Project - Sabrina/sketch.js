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

let wHealth = 200;
let qHealth = 175;
let hHealth = 300;
let iHealth = 150;
let aHealth = 250;

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
    this.sDamage = 50;
    this.aDamage = 100;
  }

  display(){
    if (wHealth > 0){
      image(wImg[0], this.x, this.y);
    }
    else{
      image(wImg[3], this.x, this.y);
    }
  }
  
  attack(){

  }

  shoot(){

  }
}

class Quill{

  constructor(x_, y_){
    this.y = y_;
    this.x = x_;
    this.sDamage = 50;
    this.aDamage = 100;
    this.alive = true;
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
    this.sDamage = 50;
    this.aDamage = 100;
  }

  display(){
    image(iImg[0], this.x, this.y, 0, height/6);
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
    this.sDamage = 50;
    this.aDamage = 100;
  }

  display(){
    image(aImg[0], this.x, this.y);
  }

  getHealth(){
    return this.health;
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

  if(wHealth + qHealth + hHealth + iHealth + aHealth > 0){

    if (turn === 1){
      if (wHealth > 0){
        menu.display(0);

        if (wChoice !== 0){
          turn = 2;
        }

      }
      else{
        turn = 2;
      }
    }

    if (turn === 2){
      if (qHealth > 0){
        menu.display(1);

        if (qChoice !== 0 && qChoice !== 2){
          turn = 3;
        }

        else if (qChoice === 2){
          menu.display(2);
        }
      }
      else{
        turn = 3;
      }
    }

    if (turn === 3){
      if (hHealth > 0){
        menu.display(3);

        if (hChoice !== 0){
          turn = 4;
        }
      }
      else{
        turn = 4;
      }
    }

  }

}

function keyPressed(){
  if (turn === 1){
    if (key === "1"){
      wChoice = 1;
    }
    if (key === "2"){
      wChoice = 2;
    }
  }

  if (turn === 2){
    if (key === "1"){
      qChoice = 1;
    }
    if (key === "2"){
      qChoice = 2;
      print(qChoice);
    }

    if (qChoice === 2){
      if (key === "1"){
        qChoice = 3;
      }
      if (key === "2"){
        qChoice = 4;
      }
      if (key === "3"){
        qChoice = 5;
      }
      if (key === "4"){
        qChoice = 6;
      }
      if (key === "5"){
        qChoice = 7;
      }
    }
  }


  if (turn === 3){
    if (key === "1"){
      hChoice = 1;
    }
    if (key === "2"){
      hChoice = 2;
    }
  }

  if (turn === 4){
    if (key === "1"){
      iChoice = 1;
    }
    if (key === "2"){
      iChoice = 2;
    }
  }

  if (turn === 5){
    if (key === "1"){
      aChoice = 1;
    }
    if (key === "2"){
      aChoice = 2;
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

  ace.getHealth();

  menu = new Menu(width/7,height/1.15);

  background(backgroundImg);
  whisper.display();
  quill.display();
  hatch.display();
  imellia.display();
  ace.display();

}

function draw() {

  if (endgame === false){
  
    firstRound();
  }
}
